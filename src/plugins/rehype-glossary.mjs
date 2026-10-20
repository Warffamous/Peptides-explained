/**
 * Auto-links the first plain-text use of every glossary term on a page to its definition.
 * Locale comes from the file path (src/content/<collection>/<locale>/…). Skips headings,
 * links, code, bidi-isolated data and the inline components that already carry meaning.
 * Writes frontmatter.terms (ids used) so the layout can render accessible definitions.
 */
import fs from 'node:fs';
import path from 'node:path';

const SKIP_TAGS = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre', 'bdi', 'kbd', 'script', 'style', 'svg', 'summary', 'th']);
const SKIP_COMPONENTS = new Set(['Cite', 'Q', 'Seq', 'Term', 'Diagram', 'WarningSigns', 'FaqItem']);
const cache = new Map();

function loadGlossary(locale) {
  if (cache.has(locale)) return cache.get(locale);
  const dir = path.resolve(`src/i18n/${locale}/glossary`);
  const entries = [];
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      for (const [id, e] of Object.entries(data)) {
        if (e.autolink === false) continue;
        for (const form of [e.term, ...(e.aliases ?? [])]) {
          if (form && form.length > 1) entries.push({ id, form });
        }
      }
    }
  }
  // Longest forms first so "growth hormone secretagogue" wins over "growth hormone".
  entries.sort((a, b) => b.form.length - a.form.length);
  const escaped = entries.map((e) => e.form.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = entries.length ? new RegExp(`(?<![\\p{L}\\p{N}-])(${escaped.join('|')})(?![\\p{L}\\p{N}-])`, 'giu') : null;
  const byForm = new Map(entries.map((e) => [e.form.toLowerCase(), e.id]));
  const result = { re, byForm };
  cache.set(locale, result);
  return result;
}

function localeFromPath(p) {
  const m = /[\\/]content[\\/](?:pages|compounds)[\\/]([a-z]{2,3})[\\/]/.exec(p ?? '');
  return m ? m[1] : null;
}

export default function rehypeGlossary(opts = {}) {
  const base = (opts.base ?? '/').replace(/\/$/, '');
  return (tree, file) => {
    const locale = localeFromPath(file.path ?? file.history?.[0]);
    if (!locale) return;
    const { re, byForm } = loadGlossary(locale);
    if (!re) return;
    const used = new Set();

    const walk = (node) => {
      if (!node.children) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'element') {
          if (SKIP_TAGS.has(child.tagName)) continue;
          walk(child);
        } else if (child.type === 'mdxJsxFlowElement' || child.type === 'mdxJsxTextElement') {
          if (child.name === 'Term') {
            const id = child.attributes?.find((a) => a.name === 'id')?.value;
            if (typeof id === 'string') used.add(id);
          }
          if (SKIP_COMPONENTS.has(child.name)) continue;
          walk(child);
        } else if (child.type === 'text') {
          const replaced = linkText(child.value);
          if (replaced) {
            node.children.splice(i, 1, ...replaced);
            i += replaced.length - 1;
          }
        }
      }
    };

    const linkText = (value) => {
      re.lastIndex = 0;
      const out = [];
      let last = 0;
      let m;
      let changed = false;
      while ((m = re.exec(value))) {
        const id = byForm.get(m[1].toLowerCase());
        if (!id || used.has(id)) continue;
        used.add(id);
        changed = true;
        if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
        out.push({
          type: 'element',
          tagName: 'a',
          properties: { href: `${base}/${locale}/glossary/#${id}`, className: ['term'], dataTerm: id, ariaDescribedby: `gd-${id}` },
          children: [{ type: 'text', value: m[1] }],
        });
        last = m.index + m[1].length;
      }
      if (!changed) return null;
      if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
      return out;
    };

    walk(tree);
    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.terms = [...used];
  };
}
