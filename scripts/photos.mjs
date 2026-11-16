#!/usr/bin/env node
/*
  Photo helper.

  Add a photo (JPEG, PNG, WebP or HEIC):
    npm run photos -- "_incoming/MTC Kickoff/IMG_1234.HEIC" events/kickoff-01

  That writes public/assets/events/kickoff-01.jpg: rotated upright, at most
  2400px wide, with location and camera data removed. Then set
  `file: "/assets/events/kickoff-01.jpg"` on a slot in src/content/photos.ts.

  With no arguments it only refreshes src/content/photos.generated.json
  (the sizes the site needs to lay images out without jumping).

  RAW camera files (.CR2, .NEF, .ARW, .DNG) are not supported: export them
  as JPEG from your photo app first.
*/
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "public", "assets");
const manifest = path.join(root, "src", "content", "photos.generated.json");
const MAX_WIDTH = 2400;

async function importOne(source, target) {
  const ext = path.extname(source).toLowerCase();
  if ([".cr2", ".cr3", ".nef", ".arw", ".dng", ".raf"].includes(ext)) {
    throw new Error(`${source} is a RAW file. Export it as JPEG first.`);
  }
  let input = await readFile(source);
  if (ext === ".heic" || ext === ".heif") {
    const { default: convert } = await import("heic-convert");
    input = Buffer.from(await convert({ buffer: input, format: "JPEG", quality: 0.95 }));
  }
  const out = path.join(assets, target.replace(/\.(jpe?g|png|webp)$/i, "") + ".jpg");
  await mkdir(path.dirname(out), { recursive: true });
  /* sharp drops EXIF (including GPS) unless asked to keep it. */
  const info = await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log(`wrote ${path.relative(root, out)}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} kB`);
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => []);
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])),
  );
  return files.flat();
}

async function refreshManifest() {
  const result = {};
  const files = (await walk(assets)).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f)).sort();
  for (const file of files) {
    const img = sharp(file);
    const { width, height } = await img.metadata();
    const blur = await img.resize(16).webp({ quality: 40 }).toBuffer();
    const key = "/" + path.relative(path.join(root, "public"), file).split(path.sep).join("/");
    result[key] = { width, height, blurDataURL: `data:image/webp;base64,${blur.toString("base64")}` };
  }
  await writeFile(manifest, JSON.stringify(result, null, 2) + "\n");
  console.log(`photos.generated.json: ${files.length} image(s)`);
}

const [source, target] = process.argv.slice(2);
if (source && !target) {
  console.error('Usage: npm run photos -- "<source file>" <folder/name>   e.g. events/kickoff-01');
  process.exit(1);
}
if (source) await importOne(source, target);
await refreshManifest();
