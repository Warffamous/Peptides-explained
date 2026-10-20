/**
 * Bundles a design system's CSS (src/styles/themes/<t>/index.css and its @imports, including
 * src/styles/base/*) into one minified stylesheet with Lightning CSS. Served at /themes/<t>.css.
 * Content-hashed so the <link> can be cached forever.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { bundle } from 'lightningcss';

const ROOT = process.cwd();
const cache = new Map<string, { code: string; hash: string }>();

// Evergreen browsers from roughly 2023 onward: logical properties, nesting, :has(), container queries.
const TARGETS = { chrome: 110 << 16, firefox: 110 << 16, safari: 16 << 16 };

export function bundleTheme(theme: string): { code: string; hash: string } {
  const hit = cache.get(theme);
  if (hit && import.meta.env.PROD) return hit;
  const filename = path.join(ROOT, 'src/styles/themes', theme, 'index.css');
  if (!fs.existsSync(filename)) throw new Error(`No stylesheet for theme ${theme}: ${filename}`);
  const { code } = bundle({
    filename,
    minify: import.meta.env.PROD,
    targets: TARGETS,
    drafts: {},
    errorRecovery: false,
  });
  const text = code.toString();
  const out = { code: text, hash: crypto.createHash('sha256').update(text).digest('hex').slice(0, 10) };
  cache.set(theme, out);
  return out;
}
