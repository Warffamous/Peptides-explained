/**
 * Locale-independent data loaded from src/data. Everything is validated with the shared
 * schemas at import time, so malformed data stops the build with a readable message.
 */
import YAML from 'yaml';
import {
  sourceFileSchema,
  peopleFileSchema,
  jurisdictionsFileSchema,
  timelineFileSchema,
  trackerFileSchema,
  correctionsFileSchema,
  newsFileSchema,
  feedsFileSchema,
  type Source,
} from '../schemas';
import type { z, ZodTypeAny } from 'zod';

const raw = import.meta.glob<string>('/src/data/**/*.{yaml,yml,json}', { eager: true, query: '?raw', import: 'default' });

function parseFile<S extends ZodTypeAny>(path: string, schema: S, fallback: z.input<S> | null = null): z.output<S> {
  const text = raw[path];
  if (text === undefined) {
    if (fallback !== null) return schema.parse(fallback);
    throw new Error(`[data] missing ${path}`);
  }
  const data = path.endsWith('.json') ? JSON.parse(text) : YAML.parse(text);
  const r = schema.safeParse(data ?? fallback);
  if (!r.success) {
    throw new Error(`[data] ${path} is invalid:\n` + r.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n'));
  }
  return r.data;
}

// ---------------------------------------------------------------- sources
export type SourceEntry = Source & { id: string; href: string };
export const SOURCES = new Map<string, SourceEntry>();
for (const path of Object.keys(raw).filter((p) => p.startsWith('/src/data/sources/')).sort()) {
  const file = parseFile(path, sourceFileSchema, {});
  for (const [id, s] of Object.entries(file)) {
    if (SOURCES.has(id)) {
      const prev = SOURCES.get(id)!;
      if ((prev.doi && prev.doi === s.doi) || (prev.url && prev.url === s.url)) continue;
      throw new Error(`[data] source id "${id}" defined twice with different targets (${path})`);
    }
    const href = s.doi ? `https://doi.org/${s.doi}` : s.url ? s.url : `https://pubmed.ncbi.nlm.nih.gov/${s.pmid}/`;
    SOURCES.set(id, { ...s, id, href });
  }
}

export function getSource(id: string): SourceEntry {
  const s = SOURCES.get(id);
  if (!s) throw new Error(`[data] unknown source id "${id}"`);
  return s;
}

/** "Sikiric P, Seiwerth S, et al." -> "Sikiric et al." ; organisations unchanged */
export function shortAuthors(s: Source): string {
  if (!s.authors) return s.container ?? '';
  const parts = s.authors.split(/,\s*/).filter(Boolean);
  if (parts.length === 1 || !/\s[A-Z]{1,3}$/.test(parts[0])) return s.authors.replace(/\.$/, '');
  const first = parts[0].replace(/\s[A-Z]{1,3}$/, '');
  if (parts.length === 2 && !/et al/.test(parts[1])) return `${first} & ${parts[1].replace(/\s[A-Z]{1,3}$/, '')}`;
  return `${first} et al.`;
}

/**
 * Short name for a figure's "Based on" line (<Explainer>, <Infographic>): "Kapitza et al. (2017)"
 * for scholarly work; the document's own name for labels, regulator and web pages and laws
 * ("Wegovy (semaglutide)", not an ambiguous "European Medicines Agency (2026)").
 */
export function shortSourceName(s: Source): string {
  return ['label', 'regulator', 'web', 'law'].includes(s.type) ? s.title.split(/:\s|\s—\s/)[0] : `${shortAuthors(s)} (${s.year})`;
}

// ---------------------------------------------------------------- people
export const PEOPLE = parseFile('/src/data/people.yaml', peopleFileSchema);
export function getPerson(id: string) {
  const p = PEOPLE[id];
  if (!p) throw new Error(`[data] unknown person "${id}"`);
  return { id, ...p };
}

// ---------------------------------------------------------------- structured datasets (optional until written)
export const JURISDICTIONS = parseFile('/src/data/jurisdictions.yaml', jurisdictionsFileSchema, []);
export const TIMELINE = parseFile('/src/data/timeline.yaml', timelineFileSchema, []);
export const TRACKER = parseFile('/src/data/tracker.yaml', trackerFileSchema, []);
export const CORRECTIONS = parseFile('/src/data/corrections.yaml', correctionsFileSchema, []);
export const NEWS = parseFile('/src/data/news.json', newsFileSchema, { generated: '2026-10-20', items: [] });
export const FEEDS = parseFile('/src/data/feeds.yaml', feedsFileSchema, { keywords: [], feeds: [] });
