/**
 * Filesystem loaders shared by the standalone scripts (validator, commerce check, news fetch).
 * The Astro build uses src/lib/* with import.meta.glob; both parse with the same schemas.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import matter from 'gray-matter';
import { localeFileSchema, type LocaleEntry } from '../../src/schemas/index.ts';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export function rel(p: string) {
  return path.relative(ROOT, p);
}

export function walk(dir: string, ext: string[]): string[] {
  const abs = path.isAbsolute(dir) ? dir : path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    const p = path.join(abs, entry.name);
    if (entry.isDirectory()) out.push(...walk(p, ext));
    else if (ext.some((e) => entry.name.endsWith(e))) out.push(p);
  }
  return out.sort();
}

export function readYaml(file: string): unknown {
  return YAML.parse(fs.readFileSync(file, 'utf8'));
}

export function readJson(file: string): unknown {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function readMdx(file: string): { data: Record<string, unknown>; body: string } {
  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);
  return { data: parsed.data as Record<string, unknown>, body: parsed.content };
}

/** One entry of config/locales.json (localeSchema in src/schemas/index.ts). */
export type LocaleConfig = LocaleEntry;

/** config/locales.json, parsed with the build's schema; a malformed file stops the script with the issues. */
export function loadLocales(): { defaultLocale: string; sourceLocale: string; locales: LocaleConfig[] } {
  const file = path.join(ROOT, 'config/locales.json');
  const r = localeFileSchema.safeParse(readJson(file));
  if (!r.success) throw new Error(`${rel(file)} is invalid:\n` + r.error.issues.map((i) => `  ${i.path.join('.') || '(root)'}: ${i.message}`).join('\n'));
  return r.data;
}

export type Allowlist = { suffixes: { suffix: string }[]; hosts: { host: string }[] };

export function loadAllowlist(): Allowlist {
  return readJson(path.join(ROOT, 'config/link-allowlist.json')) as Allowlist;
}

export function hostAllowed(url: string, allow: Allowlist): boolean {
  let host: string;
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    return false;
  }
  if (allow.hosts.some((h) => h.host === host)) return true;
  // Accept bare and www. variants of listed hosts.
  const bare = host.replace(/^www\./, '');
  if (allow.hosts.some((h) => h.host.replace(/^www\./, '') === bare)) return true;
  return allow.suffixes.some((s) => host.endsWith(s.suffix));
}

export function loadCommerceTokens(): { tokens: Record<string, string[]>; urlPatterns: string[] } {
  return readJson(path.join(ROOT, 'config/commerce-tokens.json')) as never;
}

/**
 * An order as a legal instrument, never an offer: "an executive order", "a court order", "a Treasury
 * order", "the … Trading Fund Order 2003", "the … (Amendment) Order 2026", "an Order in Council". The
 * only exception that also applies to link text and citation labels (a cited statutory instrument's
 * title or author), because every link's host must be on the allowlist anyway.
 */
const LEGAL_ORDER_PHRASES = [
  /\b(?:executive|court|ministerial|statutory|amendment|banning|prohibition|interim|commencement|exemption|treasury|fund|council|control)\)? orders?\b/giu,
  /\border in council\b/giu,
  /\border (?:19|20)\d{2}\b/giu,
];
export function stripLegalOrders(text: string): string {
  return LEGAL_ORDER_PHRASES.reduce((t, re) => t.replace(re, ' '), text);
}

/**
 * English phrases where a commerce token is not about buying: "in order to", "the order of the amino
 * acids", "why order matters", "deal with side effects", and the legal orders above. Removed from
 * headings, figure titles and labels before they are tested (validator, check-no-commerce). Links are
 * tested with only the legal-order exception (stripLegalOrders).
 */
const NON_COMMERCE_PHRASES = [
  /\bin order (?:to|that|for)\b/giu,
  /\border (?:of|in which|matters)\b/giu,
  /\b(?:the same|same|right|correct|wrong|reverse|fixed|chronological|alphabetical|residue|amino[- ]acid|sequence|its|their|in that|in this) order\b/giu,
  /\bdeal(?:s|t)? with\b/giu,
  /\ba (?:good|great) deal\b/giu,
];
export function stripNonCommerce(text: string): string {
  return NON_COMMERCE_PHRASES.reduce((t, re) => t.replace(re, ' '), stripLegalOrders(text));
}

export function commerceRegex(tokens: Record<string, string[]>): RegExp {
  const all = Object.values(tokens).flat();
  const escaped = all.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'));
  // Unicode-aware word boundaries so Polish/Turkish/Arabic tokens match as words.
  return new RegExp(`(?<![\\p{L}\\p{N}])(?:${escaped.join('|')})(?![\\p{L}\\p{N}])`, 'iu');
}
