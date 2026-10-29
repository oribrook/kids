// Dev tool: dumps the resolved game registry as JSON (what the Category pages render).
// Usage: node scripts/dump-registry.mjs [registryModulePath] [outFile]
//   registryModulePath defaults to /src/data/registry.js
// Math.random is pinned so questions generated at import time are deterministic.
import { writeFileSync } from 'node:fs';
import { createServer } from 'vite';

const [registryPath = '/src/data/registry.js', outFile] = process.argv.slice(2);

Math.random = () => 0.5;

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const registry = await server.ssrLoadModule(registryPath);
  const { categories } = await server.ssrLoadModule('/src/data/categories.js');
  const dump = {
    allIds: Object.keys(registry.games).sort(),
    byCategory: Object.fromEntries(
      categories.map((cat) => [cat.id, registry.getGamesByCategory(cat.id)])
    ),
  };
  const json = JSON.stringify(dump, null, 2);
  if (outFile) {
    writeFileSync(outFile, json);
    console.log(`wrote ${outFile} (${dump.allIds.length} games, ${categories.length} categories)`);
  } else {
    process.stdout.write(json);
  }
} finally {
  await server.close();
}
