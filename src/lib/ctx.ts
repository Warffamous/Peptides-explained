/** Per-page render context helpers for MDX components (locale, compound, citation numbers). */
import type { AstroGlobal } from 'astro';
import { SOURCE_LOCALE, getLocale, type Locale } from './config';

export function ctxLocale(Astro: AstroGlobal): string {
  return Astro.locals.locale ?? Astro.currentLocale ?? SOURCE_LOCALE;
}

/**
 * The locale the page's TEXT is in: the route's locale, or the source locale when a preview locale
 * shows the English page as a fallback. Components choose jurisdictions (rows, cards, timeline and
 * tracker items, news) by this locale, so tables and cards match the text around them; their UI
 * strings still come from the route's locale (ctxLocale).
 */
export function ctxContentLocale(Astro: AstroGlobal): Locale {
  return getLocale(Astro.locals.compound?.contentLocale ?? Astro.locals.contentLocale ?? ctxLocale(Astro));
}

export function ctxCompound(Astro: AstroGlobal, component: string) {
  const c = Astro.locals.compound;
  if (!c) throw new Error(`<${component}> can only be used on compound pages`);
  return c;
}

/** Unique id within the current page render (ids must be unique for aria references). */
export function uid(Astro: AstroGlobal, prefix: string): string {
  const l = Astro.locals as unknown as { __uid?: number };
  l.__uid = (l.__uid ?? 0) + 1;
  return `${prefix}-${l.__uid}`;
}
