import site from '../../config/site.json';
import localeJson from '../../config/locales.json';
import { localeFileSchema, type LocaleEntry } from '../schemas';
import { visibleCodes } from './jurisdictions';
import type { Jurisdiction } from '../schemas/vocab';

export type LocaleStatus = LocaleEntry['status'];
export type Locale = LocaleEntry;

// Validated with the validator's schema, so a malformed registry stops the build with a readable message.
const parsed = localeFileSchema.safeParse(localeJson);
if (!parsed.success) {
  throw new Error('[config] config/locales.json is invalid:\n' + parsed.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n'));
}
const localeConfig = parsed.data;

export const SITE = site;
/** Build-time pseudo-RTL (PSEUDO_RTL=1, npm run build:rtl): every page renders dir="rtl". */
export const PSEUDO_RTL = __PSEUDO_RTL__;

/** Build-time PUBLISHED_ONLY=1 (npm run build:live, the public copy): preview locales count as planned. */
const PUBLISHED_ONLY = __PUBLISHED_ONLY__;

export const LOCALES: Locale[] = localeConfig.locales.map((l) => (PUBLISHED_ONLY && l.status === 'preview' ? { ...l, status: 'planned' as const } : l));
export const DEFAULT_LOCALE = localeConfig.defaultLocale;
export const SOURCE_LOCALE = localeConfig.sourceLocale;
/** Locales that get routes. planned locales are validated but not built. */
export const BUILT_LOCALES = LOCALES.filter((l) => l.status !== 'planned');
export const PUBLISHED_LOCALES = LOCALES.filter((l) => l.status === 'published');

export function getLocale(code: string): Locale {
  const l = LOCALES.find((x) => x.code === code);
  if (!l) throw new Error(`Unknown locale "${code}"`);
  return l;
}

/** The jurisdictions a locale covers in full (config/locales.json), in its display order. */
export function fullJurisdictions(code: string): Jurisdiction[] {
  return getLocale(code).jurisdictions.full;
}
/** The jurisdictions a locale has short notes for (contact cards only). */
export function noteJurisdictions(code: string): Jurisdiction[] {
  return getLocale(code).jurisdictions.notes;
}
/** The rows a locale shows: its full jurisdictions in its order, then WADA. */
export function visibleJurisdictions(code: string): Jurisdiction[] {
  return visibleCodes(getLocale(code));
}

export const CONTENT_AS_OF = new Date(site.contentAsOf);
