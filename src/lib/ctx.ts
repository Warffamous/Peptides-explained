/** Per-page render context helpers for MDX components (locale, compound, citation numbers). */
import type { AstroGlobal } from 'astro';
import { SOURCE_LOCALE } from './config';

export function ctxLocale(Astro: AstroGlobal): string {
  return Astro.locals.locale ?? Astro.currentLocale ?? SOURCE_LOCALE;
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
