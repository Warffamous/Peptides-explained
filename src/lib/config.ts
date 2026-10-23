import site from '../../config/site.json';
import localeConfig from '../../config/locales.json';

export type LocaleStatus = 'published' | 'preview' | 'planned';
export type Locale = (typeof localeConfig.locales)[number] & { status: LocaleStatus; dir: 'ltr' | 'rtl' };

export const SITE = site;
/** Build-time pseudo-RTL (PSEUDO_RTL=1, npm run build:rtl): every page renders dir="rtl". */
export const PSEUDO_RTL = __PSEUDO_RTL__;

/** Build-time PUBLISHED_ONLY=1 (npm run build:live, the public copy): preview locales count as planned. */
const PUBLISHED_ONLY = __PUBLISHED_ONLY__;

export const LOCALES = (localeConfig.locales as Locale[]).map((l) => (PUBLISHED_ONLY && l.status === 'preview' ? { ...l, status: 'planned' as const } : l));
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

export const CONTENT_AS_OF = new Date(site.contentAsOf);
