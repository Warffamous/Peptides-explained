import { SITE, BUILD_THEME } from './config';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the build base (/a, /b, /c for review builds). */
export function url(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

/** Route key ("" | "safety/sterile-technique" | "compounds/bpc-157") -> /<locale>/<key>/ */
export function routeUrl(locale: string, key: string): string {
  const k = key.replace(/^\/+|\/+$/g, '');
  return url(`/${locale}/${k ? k + '/' : ''}`);
}

/** Absolute canonical URL. Review builds (/a /b /c) canonicalise to the root site. */
export function canonicalUrl(locale: string, key: string): string {
  const k = key.replace(/^\/+|\/+$/g, '');
  return new URL(`/${locale}/${k ? k + '/' : ''}`, SITE.siteUrl).href;
}

/** Same route in a dedicated review build for theme t (assumes builds deployed at /a/, /b/, /c/). */
export function themeBuildUrl(t: string, locale: string, key: string): string {
  const k = key.replace(/^\/+|\/+$/g, '');
  return `/${t}/${locale}/${k ? k + '/' : ''}`;
}

export function rootRouteUrl(locale: string, key: string): string {
  const k = key.replace(/^\/+|\/+$/g, '');
  return `/${locale}/${k ? k + '/' : ''}`;
}

export const IS_SWITCHABLE = BUILD_THEME === 'switchable';
