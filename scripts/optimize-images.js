import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const INPUT_DIRS = ['public', 'src/assets'];
const OUT_BASE = 'optimized_images';
const QUALITY = parseInt(process.env.QUALITY || process.argv[2] || '80', 10);

async function ensureDir(dir) {
    try {
        await fs.mkdir(dir, { recursive: true });
    } catch (e) {
        // ignore
    }
}

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files = files.concat(await walk(full));
        } else if (entry.isFile() && full.toLowerCase().endsWith('.png')) {
            files.push(full);
        }
    }
    return files;
}

function outPathFor(file) {
    // preserve structure under OUT_BASE
    const rel = path.relative(process.cwd(), file);
    return path.join(OUT_BASE, rel);
}

async function optimizeFile(file) {
    const outPng = outPathFor(file);
    const outWebp = outPng.replace(/\.png$/i, '.webp');
    await ensureDir(path.dirname(outPng));
    try {
        await sharp(file)
            .png({ quality: Math.min(Math.max(QUALITY, 20), 100), compressionLevel: 9, adaptiveFiltering: true })
            .toFile(outPng);

        await sharp(file)
            .webp({ quality: Math.min(Math.max(QUALITY, 20), 100) })
            .toFile(outWebp);

        const [origStat, newStat, webpStat] = await Promise.all([
            fs.stat(file),
            fs.stat(outPng),
            fs.stat(outWebp)
        ]);

        console.log(`OK: ${file} -> ${outPng} (${origStat.size} → ${newStat.size}), ${path.basename(outWebp)} (${webpStat.size})`);
        return { file, orig: origStat.size, png: newStat.size, webp: webpStat.size };
    } catch (err) {
        console.error(`ERR: ${file} -> ${err.message}`);
        return { file, error: err.message };
    }
}

async function main() {
    console.log(`Starting image optimization (QUALITY=${QUALITY})...`);
    await ensureDir(OUT_BASE);
    let pngFiles = [];
    for (const dir of INPUT_DIRS) {
        try {
            const abs = path.resolve(process.cwd(), dir);
            const stat = await fs.stat(abs).catch(() => null);
            if (!stat) continue;
            const found = await walk(abs);
            pngFiles = pngFiles.concat(found);
        } catch (e) {
            // ignore
        }
    }

    if (pngFiles.length === 0) {
        console.log('No PNG files found in input directories.');
        return;
    }

    const results = [];
    for (const f of pngFiles) {
        // eslint-disable-next-line no-await-in-loop
        const r = await optimizeFile(f);
        results.push(r);
    }

    const succeeded = results.filter(r => !r.error);
    const failed = results.filter(r => r.error);

    const totalOrig = succeeded.reduce((s, r) => s + (r.orig || 0), 0);
    const totalNew = succeeded.reduce((s, r) => s + (r.png || 0), 0);
    const totalWebp = succeeded.reduce((s, r) => s + (r.webp || 0), 0);

    console.log('--- Summary ---');
    console.log(`Processed: ${results.length}`);
    console.log(`Succeeded: ${succeeded.length}, Failed: ${failed.length}`);
    console.log(`Total original bytes: ${totalOrig}`);
    console.log(`Total optimized PNG bytes: ${totalNew}`);
    console.log(`Total WebP bytes: ${totalWebp}`);
    console.log(`Optimized files written to: ${OUT_BASE}/`);
    console.log('Done. Review the optimized images before replacing originals.');
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
