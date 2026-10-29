// Dev tool: checks that every /audio, /images, /sounds path referenced in src exists
// under public/, that every game id in categories.js exists in the registry, and lists
// audio files on disk that no source file references (orphans).
// Usage: node scripts/check-assets.mjs [registryModulePath]
// Exits 1 only if a missing asset / unknown id appears that is not in KNOWN_MISSING.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const PUBLIC = join(ROOT, 'public');

// Existing 404s, listed in files.txt ("known bugs"). Not touched by the re-org.
const KNOWN_MISSING = [
  '/audio/ar/word-udhun.mp3',
  '/audio/en/word-starts-x.mp3',
  '/audio/en/word-x-ray.mp3',
  '/audio/en/word-zebra.mp3',
  '/audio/word-arye.mp3',
  '/audio/word-banana.mp3',
  '/audio/word-shemesh.mp3',
  '/sounds/click.mp3', // listed in useAudio.js, playSound('click'/'star') is never called
  '/sounds/star.mp3',
];

const [registryPath = '/src/data/registry.js'] = process.argv.slice(2);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const toUrl = (file) => '/' + relative(PUBLIC, file).split('\\').join('/');

const ASSET_RE = /\/(?:audio|images|sounds)\/[A-Za-z0-9_./-]+\.(?:mp3|png|jpg|jpeg|svg)/g;
const referenced = new Set();
for (const file of walk(SRC).filter((f) => /\.(js|jsx)$/.test(f))) {
  for (const m of readFileSync(file, 'utf8').matchAll(ASSET_RE)) referenced.add(m[0]);
}

const missing = [...referenced].filter((p) => !existsSync(join(PUBLIC, p))).sort();
const audioOnDisk = walk(join(PUBLIC, 'audio')).filter((f) => f.endsWith('.mp3')).map(toUrl);
const orphans = audioOnDisk.filter((p) => !referenced.has(p)).sort();

Math.random = () => 0.5;
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
const unknownIds = [];
try {
  const { games } = await server.ssrLoadModule(registryPath);
  const { categories } = await server.ssrLoadModule('/src/data/categories.js');
  for (const cat of categories) {
    for (const id of cat.games || []) {
      if (!games[id]) unknownIds.push(`${cat.id} -> ${id}`);
    }
  }
} finally {
  await server.close();
}

const report = (title, items) => {
  console.log(`\n${title} (${items.length})`);
  for (const item of items) console.log('  ' + item);
};

console.log(`referenced asset paths: ${referenced.size}`);
report('missing assets', missing);
report('category game ids not in registry', unknownIds);
report('orphan audio files (on disk, never referenced)', orphans);

const newMissing = missing.filter((p) => !KNOWN_MISSING.includes(p));
if (newMissing.length || unknownIds.length) {
  report('NEW problems (not in KNOWN_MISSING)', [...newMissing, ...unknownIds]);
  process.exit(1);
}
console.log('\nOK - no new missing assets, all category ids resolve.');
