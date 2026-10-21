/**
 * Bundles the site's stylesheet (src/styles/site.css and its @imports: src/styles/base/* and
 * src/styles/design/*) into one minified file with Lightning CSS. Served at /styles/site.css
 * (src/pages/styles/site.css.ts). Content-hashed, so the <link> can be cached forever
 * (public/_headers: immutable for a year on /styles/*).
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { bundle } from 'lightningcss';

const ROOT = process.cwd();
const ENTRY = path.join(ROOT, 'src/styles/site.css');
let cache: { code: string; hash: string } | null = null;

// Evergreen browsers from roughly 2023 onward: logical properties, nesting, :has(), container queries.
const TARGETS = { chrome: 110 << 16, firefox: 110 << 16, safari: 16 << 16 };

export function bundleSiteCss(): { code: string; hash: string } {
  // In dev every request re-bundles, so edits show on reload.
  if (cache && import.meta.env.PROD) return cache;
  if (!fs.existsSync(ENTRY)) throw new Error(`No stylesheet: ${ENTRY}`);
  const { code } = bundle({
    filename: ENTRY,
    minify: import.meta.env.PROD,
    targets: TARGETS,
    drafts: {},
    errorRecovery: false,
  });
  const text = code.toString();
  cache = { code: text, hash: crypto.createHash('sha256').update(text).digest('hex').slice(0, 10) };
  return cache;
}
