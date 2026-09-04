// One-shot image optimizer. Run after replacing/adding source images.
//   node scripts/optimize-images.mjs
// ponytail: overwrites the files in place at web-appropriate sizes.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { rm, writeFile, readFile } from 'node:fs/promises';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..');

// ponytail: read source via fs (libvips mmaps files and holds the handle on Windows),
// transform in-memory, then delete + rewrite (sharp can't overwrite in place here).
function src(file) { return readFile(join(dir, file)); }

async function write(file, pipeline) {
  const buf = await pipeline.toBuffer();
  const dest = join(dir, file);
  await rm(dest, { force: true });
  await writeFile(dest, buf);
  console.log(file, '->', (buf.length / 1024).toFixed(1), 'KiB');
}

// logos render at ~36px; 160px covers 4x DPR
const logos = ['meta-logo.webp', 'slack-png.webp', 'tiktok-logo.webp', 'calendly-logo.png',
  'Twilio_Logo.png', 'elevenlabs-logo.webp', 'ghl-logo.webp', 'google-calendar-logo.webp'];

for (const file of logos) {
  const base = sharp(await src(file)).resize({ width: 160, height: 160, fit: 'inside', withoutEnlargement: true });
  await write(file, file.endsWith('.png')
    ? base.png({ compressionLevel: 9, palette: true })
    : base.webp({ quality: 82 }));
}

const favSrc = await src('favicon.png');
// small logo for inline <img> uses (nav/footer/table, max 30px display)
await write('logo.webp', sharp(favSrc).resize(96, 96, { fit: 'inside' }).webp({ quality: 88 }));
// favicon.png doubles as OG image (keep 500x500) — just recompress hard
await write('favicon.png', sharp(favSrc).resize(500, 500, { fit: 'inside' }).png({ compressionLevel: 9, palette: true }));
