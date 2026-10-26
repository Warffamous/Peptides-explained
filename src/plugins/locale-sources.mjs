/**
 * Per-jurisdiction sources for the remark plugins (remark-product-check-sources, remark-explainer-sources),
 * which run at compile time, before Astro, and cannot import src/lib/jurisdictions.ts. This mirrors
 * visibleSources there: an item's own `sources`, then the `local_sources` of the jurisdictions the
 * page's locale shows (config/locales.json `jurisdictions.full`, plus WADA). The locale is the content
 * file's own (src/content/<collection>/<locale>/…): a preview locale that shows an English page shows
 * the English sources, matching the English words. See docs/CONTENT-GUIDE.md §1b.
 */
import fs from 'node:fs';

const LOCALES = new URL('../../config/locales.json', import.meta.url);
let scopes = null;

/** The content file's locale, from its path (src/content/pages|compounds/<locale>/…), or null. */
export function localeFromPath(p) {
  const m = /[\\/]content[\\/](?:pages|compounds)[\\/]([a-z]{2,3})[\\/]/.exec(p ?? '');
  return m ? m[1] : null;
}

/** The jurisdictions a locale shows rows and sources for: its full ones and WADA. */
function visibleFor(locale) {
  scopes ??= new Map(JSON.parse(fs.readFileSync(LOCALES, 'utf8')).locales.map((l) => [l.code, l.jurisdictions?.full ?? []]));
  const full = scopes.get(locale);
  if (!full) throw new Error(`[locale-sources] unknown locale "${locale}" (config/locales.json)`);
  return new Set([...full, 'WADA']);
}

/** An item's sources in a locale: its own, then the local_sources of the jurisdictions the locale shows. */
export function visibleSourcesFor(item, locale) {
  const visible = visibleFor(locale);
  const local = Object.entries(item?.local_sources ?? {}).filter(([j]) => visible.has(j)).flatMap(([, ids]) => ids);
  return [...(item?.sources ?? []), ...local];
}
