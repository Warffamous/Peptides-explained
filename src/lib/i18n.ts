/**
 * UI strings: src/i18n/<locale>/<namespace>.json (or a <namespace>/ directory of JSON files,
 * merged). Lookup falls back to the source locale ONLY for preview/planned locales; a
 * published locale with a missing key fails the build, so no reader ever sees a raw key.
 */
import { LOCALES, SOURCE_LOCALE, getLocale } from './config';

type Dict = { [k: string]: string | string[] | Dict };
const files = import.meta.glob<Dict>('/src/i18n/*/**/*.json', { eager: true, import: 'default' });

const messages: Record<string, Record<string, Dict>> = {};
for (const [file, data] of Object.entries(files)) {
  const m = /^\/src\/i18n\/([^/]+)\/(.+)\.json$/.exec(file);
  if (!m) continue;
  const [, locale, rest] = m;
  const parts = rest.split('/');
  const ns = parts[0];
  messages[locale] ??= {};
  if (parts.length === 1) {
    messages[locale][ns] = { ...(messages[locale][ns] ?? {}), ...data };
  } else {
    // directory namespace (e.g. glossary/*.json): merge all files
    messages[locale][ns] = { ...(messages[locale][ns] ?? {}), ...data };
  }
}

function lookup(locale: string, key: string): unknown {
  const [ns, ...path] = key.split('.');
  let cur: unknown = messages[locale]?.[ns];
  for (const p of path) {
    if (cur && typeof cur === 'object' && p in (cur as Dict)) cur = (cur as Dict)[p];
    else return undefined;
  }
  return cur;
}

export function has(locale: string, key: string): boolean {
  return lookup(locale, key) !== undefined;
}

/** Raw value (string, array or object) with fallback rules. */
export function tr<T = string>(locale: string, key: string): T {
  let v = lookup(locale, key);
  if (v === undefined) {
    const l = getLocale(locale);
    if (l.status === 'published' && locale !== SOURCE_LOCALE) {
      throw new Error(`[i18n] missing key "${key}" for published locale "${locale}"`);
    }
    v = lookup(SOURCE_LOCALE, key);
  }
  if (v === undefined) throw new Error(`[i18n] missing key "${key}" in source locale "${SOURCE_LOCALE}"`);
  return v as T;
}

/** String lookup with {placeholder} interpolation. */
export function t(locale: string, key: string, vars: Record<string, string | number> = {}): string {
  const v = tr<unknown>(locale, key);
  if (typeof v !== 'string') throw new Error(`[i18n] key "${key}" is not a string`);
  return v.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}

/** Whether a locale is serving a fallback string for this key (used to mark lang on the element). */
export function isFallback(locale: string, key: string): boolean {
  return locale !== SOURCE_LOCALE && lookup(locale, key) === undefined;
}

export function namespace<T = Dict>(locale: string, ns: string): T {
  const own = messages[locale]?.[ns];
  const src = messages[SOURCE_LOCALE]?.[ns];
  const l = getLocale(locale);
  if (l.status === 'published' || !src) return (own ?? {}) as T;
  return { ...(src ?? {}), ...(own ?? {}) } as T;
}

export const ALL_MESSAGES = messages;
export const LOCALE_CODES = LOCALES.map((l) => l.code);
