#!/usr/bin/env node
/*
  Lists what is still unconfigured: official links and empty photo slots.
  `npm run check` prints the list. `npm run check -- --strict` also fails,
  which is useful right before going live.
*/
import { readFile } from "node:fs/promises";

const read = (p) => readFile(new URL(`../src/content/${p}`, import.meta.url), "utf8");
const config = await read("site.config.ts");
const photos = await read("photos.ts");

const missingLinks = [...config.matchAll(/^\s*(\w+):\s*null,/gm)].map((m) => m[1]);
const emptySlots = [...photos.matchAll(/^\s*"?([\w-]+)"?:\s*\{\s*\n\s*file:\s*null/gm)].map((m) => m[1]);

if (missingLinks.length) console.log(`Unconfigured links (src/content/site.config.ts): ${missingLinks.join(", ")}`);
if (emptySlots.length) console.log(`Empty photo slots (src/content/photos.ts): ${emptySlots.join(", ")}`);
if (!missingLinks.length && !emptySlots.length) console.log("All links and photo slots are configured.");
else if (process.argv.includes("--strict")) process.exit(1);
