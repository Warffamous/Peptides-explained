/**
 * Filesystem loaders shared by the standalone scripts (validator, commerce check, news fetch).
 * The Astro build uses src/lib/* with import.meta.glob; both parse with the same schemas.
 */
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import matter from 'gray-matter';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');

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

export type LocaleConfig = {
  code: string;
  name: string;
  englishName: string;
  dir: 'ltr' | 'rtl';
  status: 'published' | 'preview' | 'planned';
  bcp47: string;
  hreflang: string;
  dateLocale: string;
  jurisdiction: string;
  script: string;
};

export function loadLocales(): { defaultLocale: string; sourceLocale: string; locales: LocaleConfig[] } {
  return readJson(path.join(ROOT, 'config/locales.json')) as never;
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

export function commerceRegex(tokens: Record<string, string[]>): RegExp {
  const all = Object.values(tokens).flat();
  const escaped = all.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'));
  // Unicode-aware word boundaries so Polish/Turkish/Arabic tokens match as words.
  return new RegExp(`(?<![\\p{L}\\p{N}])(?:${escaped.join('|')})(?![\\p{L}\\p{N}])`, 'iu');
}
