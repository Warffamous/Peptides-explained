/**
 * Content access: joins localised MDX with locale-independent data, and computes the
 * translation matrix used for hreflang, the language switcher and preview fallbacks.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { BUILT_LOCALES, PUBLISHED_LOCALES, SOURCE_LOCALE, getLocale } from './config';
import type { CompoundData, CompoundPage } from '../schemas';

export type PageEntry = CollectionEntry<'pages'>;
export type CompoundEntry = CollectionEntry<'compounds'>;

export type CompoundContext = {
  slug: string;
  locale: string;
  data: CompoundData;
  page: CompoundPage;
  /** source id -> number in this page's source list */
  citeIndex: Map<string, number>;
};

/** "en/safety/sterile-technique" -> { locale: "en", key: "safety/sterile-technique" } ; index -> section key */
export function splitPageId(id: string): { locale: string; key: string } {
  const [locale, ...rest] = id.split('/');
  const key = rest.join('/').replace(/(^|\/)index$/, '');
  return { locale, key };
}

let _pages: PageEntry[] | null = null;
let _compounds: CompoundEntry[] | null = null;
let _data: Map<string, CompoundData> | null = null;

export async function allPages(): Promise<PageEntry[]> {
  return (_pages ??= await getCollection('pages'));
}
export async function allCompoundPages(): Promise<CompoundEntry[]> {
  return (_compounds ??= await getCollection('compounds'));
}
export async function compoundDataMap(): Promise<Map<string, CompoundData>> {
  if (!_data) {
    const entries = await getCollection('compoundData');
    _data = new Map(entries.map((e) => [e.data.slug, e.data]));
  }
  return _data;
}

export async function getCompoundData(slug: string): Promise<CompoundData> {
  const d = (await compoundDataMap()).get(slug);
  if (!d) throw new Error(`no compound data for ${slug}`);
  return d;
}

/** Page for (locale, key), with fallback to the source locale for preview locales. */
export async function resolvePage(locale: string, key: string): Promise<{ entry: PageEntry; fallback: boolean } | null> {
  const pages = await allPages();
  const own = pages.find((p) => { const s = splitPageId(p.id); return s.locale === locale && s.key === key; });
  if (own) return { entry: own, fallback: false };
  if (getLocale(locale).status === 'preview') {
    const src = pages.find((p) => { const s = splitPageId(p.id); return s.locale === SOURCE_LOCALE && s.key === key; });
    if (src) return { entry: src, fallback: true };
  }
  return null;
}

export async function resolveCompound(locale: string, slug: string): Promise<{ entry: CompoundEntry; fallback: boolean } | null> {
  const all = await allCompoundPages();
  const own = all.find((c) => c.id === `${locale}/${slug}`);
  if (own) return { entry: own, fallback: false };
  if (getLocale(locale).status === 'preview') {
    const src = all.find((c) => c.id === `${SOURCE_LOCALE}/${slug}`);
    if (src) return { entry: src, fallback: true };
  }
  return null;
}

/** Route keys that exist (genuinely translated, not fallback) per locale. */
export async function translationMatrix(): Promise<Map<string, Set<string>>> {
  const m = new Map<string, Set<string>>();
  const add = (key: string, loc: string) => {
    if (!m.has(key)) m.set(key, new Set());
    m.get(key)!.add(loc);
  };
  for (const p of await allPages()) {
    const { locale, key } = splitPageId(p.id);
    add(key, locale);
  }
  for (const c of await allCompoundPages()) {
    const [locale, slug] = c.id.split('/');
    add(`compounds/${slug}`, locale);
  }
  // Built-in generated routes exist wherever the locale is built.
  for (const key of BUILTIN_ROUTES) for (const l of BUILT_LOCALES) add(key, l.code);
  return m;
}

/** Generated routes that are not MDX pages. The landing ("") comes from pages/<locale>/index.mdx. */
export const BUILTIN_ROUTES = ['compounds', 'glossary', 'sources', 'news', 'search'];

/** Locales to list as hreflang alternates for a route: published locales that truly have it. */
export async function alternatesFor(key: string): Promise<string[]> {
  const m = await translationMatrix();
  const have = m.get(key) ?? new Set();
  return PUBLISHED_LOCALES.map((l) => l.code).filter((c) => have.has(c));
}

/** Pages in a section for a locale (with preview fallback), sorted by order. */
export async function sectionPages(locale: string, section: string): Promise<{ key: string; entry: PageEntry; fallback: boolean }[]> {
  const pages = await allPages();
  const keys = new Set<string>();
  for (const p of pages) {
    const s = splitPageId(p.id);
    if (p.data.section === section && (s.locale === locale || s.locale === SOURCE_LOCALE)) keys.add(s.key);
  }
  const out: { key: string; entry: PageEntry; fallback: boolean }[] = [];
  for (const key of keys) {
    const r = await resolvePage(locale, key);
    if (r && r.entry.data.template !== 'index') out.push({ key, ...r });
  }
  return out.sort((a, b) => a.entry.data.order - b.entry.data.order || a.key.localeCompare(b.key));
}

/** Primary navigation: [section, route key of its landing]. Order is the reading order of the site. */
export const PRIMARY_NAV = [
  { id: 'start', key: 'start-here' },
  { id: 'basics', key: 'basics' },
  { id: 'compounds', key: 'compounds' },
  { id: 'evidence', key: 'evidence' },
  { id: 'safety', key: 'safety' },
  { id: 'legal', key: 'legal' },
  { id: 'history', key: 'history' },
  { id: 'news', key: 'news' },
] as const;

/** Which primary-nav item a route belongs to (for aria-current). */
export function navSectionFor(key: string): string | null {
  if (key === 'start-here') return 'start';
  const first = key.split('/')[0];
  if (['legal-routes', 'talking-to-your-doctor'].includes(first)) return 'safety';
  const hit = PRIMARY_NAV.find((n) => n.key === first);
  return hit ? hit.id : null;
}
