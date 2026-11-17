#!/usr/bin/env node
/*
  Photo helper.

  Add a photo (JPEG, PNG, WebP, HEIC, or Canon RAW .CR2):
    npm run photos -- "_incoming/MTC Kickoff/IMG_1234.HEIC" events/kickoff-01

  That writes public/assets/events/kickoff-01.jpg: rotated upright, at most
  2400px wide, with location and camera data removed. Then set
  `file: "/assets/events/kickoff-01.jpg"` on a slot in src/content/photos.ts.

  With no arguments it only refreshes src/content/photos.generated.json
  (the sizes the site needs to lay images out without jumping).

  Add --brighten=1.3 (any number) at the end to lighten a dark photo.

  Canon .CR2 files work: the full-size JPEG the camera stores inside the file
  is used. Other RAW formats (.NEF, .ARW, .DNG…) are not supported: export
  those as JPEG from your photo app first.
*/
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "public", "assets");
const manifest = path.join(root, "src", "content", "photos.generated.json");
const MAX_WIDTH = 2400;

/* A .CR2 is a TIFF whose first image is a full-size JPEG. Return that JPEG. */
function jpegFromCr2(buf) {
  const le = buf.toString("latin1", 0, 2) === "II";
  const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
  const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
  const ifd = u32(4);
  const tags = {};
  for (let i = 0; i < u16(ifd); i++) {
    const entry = ifd + 2 + i * 12;
    tags[u16(entry)] = u32(entry + 8);
  }
  const offset = tags[0x111];
  const length = tags[0x117];
  if (!offset || !length) throw new Error("No embedded JPEG found in this .CR2 file.");
  return buf.subarray(offset, offset + length);
}

async function importOne(source, target, brighten) {
  const ext = path.extname(source).toLowerCase();
  if ([".cr3", ".nef", ".arw", ".dng", ".raf"].includes(ext)) {
    throw new Error(`${source} is a RAW format this script cannot read. Export it as JPEG first.`);
  }
  let input = await readFile(source);
  if (ext === ".cr2") input = jpegFromCr2(input);
  if (ext === ".heic" || ext === ".heif") {
    const { default: convert } = await import("heic-convert");
    input = Buffer.from(await convert({ buffer: input, format: "JPEG", quality: 0.95 }));
  }
  const out = path.join(assets, target.replace(/\.(jpe?g|png|webp)$/i, "") + ".jpg");
  await mkdir(path.dirname(out), { recursive: true });
  /* sharp drops EXIF (including GPS) unless asked to keep it. */
  let image = sharp(input).rotate();
  if (brighten) image = image.modulate({ brightness: brighten });
  const info = await image
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

const args = process.argv.slice(2);
const brighten = Number(args.find((a) => a.startsWith("--brighten="))?.split("=")[1]) || undefined;
const [source, target] = args.filter((a) => !a.startsWith("--"));
if (source && !target) {
  console.error('Usage: npm run photos -- "<source file>" <folder/name>   e.g. events/kickoff-01');
  process.exit(1);
}
if (source) await importOne(source, target, brighten);
await refreshManifest();
