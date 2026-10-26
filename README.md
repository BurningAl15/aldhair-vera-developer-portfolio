# Aldhair Vera — Product engineering portfolio

Portfolio personal bilingüe, generado con Next.js App Router como sitio estático para Netlify.

## Desarrollo local

```sh
nvm use
npm install
npm run dev
```

## Compilar

```sh
npm run typecheck
npm run build
```

Next.js exporta HTML por ruta en `out/`. Netlify publica esa carpeta. El idioma principal usa `/` y los contenidos en inglés viven en `/en/`; cada proyecto tiene una página de caso de estudio propia.

En Netlify, `netlify/edge-functions/locale.js` lee el idioma preferido del navegador al entrar por `/`: español abre la portada española y cualquier otro idioma explícito abre `/en/`. El cambio manual de idioma usa `/set-language/` y guarda la preferencia en una cookie. Las URLs directas de proyectos conservan su idioma.

Configura `NEXT_PUBLIC_SITE_URL` con el dominio público antes de desplegar para que canonical, sitemap y metadatos sociales apunten al dominio correcto. No guardes credenciales en Git.

El estado de indexación, verificación de Search Console y analítica está documentado en [docs/seo-analytics.md](docs/seo-analytics.md).

## Contenido

La fuente única de proyectos está en `src/data/projects.ts`. Antes de publicar un caso nuevo, confirma la descripción, tu contribución, estado de tiendas, enlaces y permisos de las capturas.

Para consultar datos públicos con un agente o preparar un CV, proporciona `https://aldhairvera-portfolio.netlify.app/llms.txt` o `https://aldhairvera-portfolio.netlify.app/portfolio-data.json`. Ambos se generan desde las fichas del sitio al compilar.

## Despliegue

El sitio produce una exportación estática compatible con Netlify. Las páginas se prerenderizan durante `npm run build`; no dependen de una API para mostrar su contenido. La función de Netlify existente para correo permanece independiente en `netlify/functions/`.
