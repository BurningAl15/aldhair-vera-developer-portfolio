import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// __dirname shim for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const plugins: any[] = [react()]

  // Cargar visualizer opcionalmente para evitar fallos si no está instalado
  try {
    // Try rollup-plugin-visualizer first (published on npm).
    // If it's not installed, we'll skip visualizer silently.
    const tryNames = ['rollup-plugin-visualizer', 'vite-plugin-visualizer']
    for (const name of tryNames) {
      try {
        // dynamic import keeps build working even if package is missing
        // eslint-disable-next-line no-await-in-loop
        const mod = await import(name)
        const visualizerFn = mod && (mod.visualizer || mod.default?.visualizer || mod.default)
        if (typeof visualizerFn === 'function') {
          plugins.push(visualizerFn({ filename: 'dist/bundle-visualizer.html', open: false }))
          break
        }
      } catch (err) {
        // try next name
      }
    }
  } catch (e) {
    // No está instalado — seguir sin visualizer
    // eslint-disable-next-line no-console
    console.warn('[vite] vite-plugin-visualizer not installed, skipping bundle visualizer')
  }

  return {
    // Evitar múltiples instancias de React (fix para useLayoutEffect undefined)
    resolve: {
      dedupe: ['react', 'react-dom'],
      // Forzar alias a la copia local instalada para evitar que sub-deps
      // traigan sus propias instancias de React.
      alias: [
        { find: 'react', replacement: path.resolve(__dirname, 'node_modules', 'react') },
        { find: 'react/jsx-runtime', replacement: path.resolve(__dirname, 'node_modules', 'react', 'jsx-runtime') },
        { find: 'react-dom', replacement: path.resolve(__dirname, 'node_modules', 'react-dom') },
        { find: 'react-dom/client', replacement: path.resolve(__dirname, 'node_modules', 'react-dom', 'client') }
      ]
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei', 'maath']
    },
    plugins,
    build: {
      chunkSizeWarningLimit: 1000, // KB — sube el límite si lo prefieres
      rollupOptions: {
        output: {
          // Create finer-grained vendor chunks by package name to avoid
          // a single huge vendor bundle. This returns a chunk name like
          // `vendor_react`, `vendor_three`, or `vendor_packagename`.
          manualChunks(id: string) {
            if (!id.includes('node_modules')) return undefined

            const parts = id.split('node_modules/')[1].split('/')
            let pkgName = parts[0]
            // scoped packages (e.g. @react-three/fiber)
            if (pkgName && pkgName.startsWith('@') && parts.length > 1) {
              pkgName = `${pkgName}/${parts[1]}`
            }

            // Prefer human-friendly group names for known heavy libs
            if (pkgName.startsWith('react')) return 'vendor_react'
            if (pkgName === 'react-dom') return 'vendor_react'
            if (pkgName === 'three' || pkgName.startsWith('@react-three')) return 'vendor_three'
            if (pkgName === 'framer-motion') return 'vendor_framer'
            // maath depends closely on three and related libs — keep it with three
            if (pkgName.startsWith('maath')) return 'vendor_three'
            // some packages use 'stdlib' naming (three-stdlib or similar) — keep with three
            if (pkgName.includes('stdlib')) return 'vendor_three'
            if (pkgName.startsWith('@react-three')) return 'vendor_three'
            if (pkgName.startsWith('@react-three/drei')) return 'vendor_three'

            // Fallback: create a vendor chunk per package to avoid one giant bundle
            const safeName = pkgName.replace('@', '').replace('/', '_')
            return `vendor_${safeName}`
          }
        }
      }
      ,
      // Ayuda a manejar módulos CommonJS durante el build para evitar inconsistencias
      commonjsOptions: {
        include: [/node_modules/]
      }
    }
  }
})
