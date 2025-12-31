import fs from 'fs/promises';
import path from 'path';

const OPT_DIR = path.resolve(process.cwd(), 'optimized_images', 'src', 'assets');
const TARGET_DIR = path.resolve(process.cwd(), 'src', 'assets');
const BACKUP_DIR = path.resolve(process.cwd(), `src_assets_backup_${Date.now()}`);

async function exists(p) {
    try {
        await fs.access(p);
        return true;
    } catch (e) {
        return false;
    }
}

async function copyFile(src, dest) {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
}

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    let files = [];
    for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
            files = files.concat(await walk(full));
        } else if (e.isFile()) {
            files.push(full);
        }
    }
    return files;
}

async function backupTarget() {
    if (!(await exists(TARGET_DIR))) {
        console.log('No existe `src/assets` — nada que respaldar.');
        return;
    }
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    // copy recursively
    const files = await walk(TARGET_DIR);
    for (const f of files) {
        const rel = path.relative(TARGET_DIR, f);
        const dest = path.join(BACKUP_DIR, rel);
        await fs.mkdir(path.dirname(dest), { recursive: true });
        await fs.copyFile(f, dest);
    }
    console.log(`Backup de \'src/assets\' creado en: ${BACKUP_DIR}`);
}

async function applyOptimized() {
    if (!(await exists(OPT_DIR))) {
        console.error('No encontré la carpeta optimizada en', OPT_DIR);
        process.exit(1);
    }

    await backupTarget();

    const optimizedFiles = await walk(OPT_DIR);
    const onlyWebp = [];
    let copied = 0;

    // First copy all .png optimized files (preserve names)
    for (const f of optimizedFiles) {
        const rel = path.relative(OPT_DIR, f);
        const ext = path.extname(f).toLowerCase();
        const targetPath = path.join(TARGET_DIR, rel);
        if (ext === '.png') {
            await copyFile(f, targetPath);
            copied++;
        }
    }

    // Now find webp files that don't have a corresponding png in optimized set
    const optimizedSet = new Set(optimizedFiles.map(x => path.relative(OPT_DIR, x)));
    for (const f of optimizedFiles) {
        const rel = path.relative(OPT_DIR, f);
        const ext = path.extname(f).toLowerCase();
        if (ext === '.webp') {
            const pngRel = rel.replace(/\.webp$/i, '.png');
            if (!optimizedSet.has(pngRel)) {
                onlyWebp.push(rel);
            }
        }
    }

    // Report
    console.log(`Copié ${copied} archivos PNG optimizados a src/assets.`);
    if (onlyWebp.length > 0) {
        console.log('Algunos recursos sólo tienen WEBP optimizado (sin PNG). Actualizaré imports en src/assets/index.js para usar .webp donde aplique.');

        const indexJsPath = path.join(process.cwd(), 'src', 'assets', 'index.js');
        const indexBackup = indexJsPath + `.backup_${Date.now()}`;

        const indexExists = await exists(indexJsPath);
        if (!indexExists) {
            console.warn('No existe src/assets/index.js — no puedo actualizar imports automáticamente. Lista de webp-only:');
            for (const r of onlyWebp) console.log(' -', r);
            return;
        }

        // backup index.js
        await fs.copyFile(indexJsPath, indexBackup);
        console.log(`Backup de index.js creado en: ${indexBackup}`);

        let content = await fs.readFile(indexJsPath, 'utf8');

        // For each onlyWebp, attempt to replace occurrences of './path/name.png' with './path/name.webp'
        for (const rel of onlyWebp) {
            const pngPath = './' + rel.split(path.sep).join('/');
            const webpPath = pngPath.replace(/\.webp$/i, '.webp'); // same
            // The index.js likely imports like: import foo from "./tech/reactjs.png";
            // We'll replace any import path that ends with png and matches the base name.
            const baseNoExt = pngPath.replace(/\.png$/i, '');
            const regex = new RegExp(`(['\"])(${baseNoExt}\\.png)(['\"])`, 'g');
            if (regex.test(content)) {
                content = content.replace(regex, `"${baseNoExt}.webp"`);
                console.log(`Actualizado import en index.js: ${baseNoExt}.png -> ${baseNoExt}.webp`);
            } else {
                // try other possible forms
                const altRegex = new RegExp(`(${baseNoExt.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})\\.png`, 'g');
                if (altRegex.test(content)) {
                    content = content.replace(altRegex, `${baseNoExt}.webp`);
                    console.log(`Actualizado referencia en index.js: ${baseNoExt}.png -> ${baseNoExt}.webp`);
                } else {
                    console.log(`No encontré import a reemplazar para: ${pngPath}`);
                }
            }
        }

        await fs.writeFile(indexJsPath, content, 'utf8');
        console.log('index.js actualizado. Revisa el backup si algo falla.');
    }
}

applyOptimized().catch(err => {
    console.error(err);
    process.exit(1);
});
