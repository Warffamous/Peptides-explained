import site from '../../config/site.json';
import localeConfig from '../../config/locales.json';

export type ThemeId = 'a' | 'b' | 'c';
export type LocaleStatus = 'published' | 'preview' | 'planned';
export type Locale = (typeof localeConfig.locales)[number] & { status: LocaleStatus; dir: 'ltr' | 'rtl' };

export const SITE = site as typeof site & { defaultTheme: ThemeId; themes: ThemeId[] };
export const BUILD_THEME = __THEME__;
export const PSEUDO_RTL = __PSEUDO_RTL__;
export const REVIEW_BUILD = __REVIEW_BUILD__;
/** Themes whose markup and CSS this build ships. */
export const BUILD_THEMES: ThemeId[] = BUILD_THEME === 'switchable' ? SITE.themes : [BUILD_THEME];
/** The theme rendered when no preference is stored (and with JavaScript off). */
export const DEFAULT_THEME: ThemeId = BUILD_THEME === 'switchable' ? SITE.defaultTheme : BUILD_THEME;

export const LOCALES = localeConfig.locales as Locale[];
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
