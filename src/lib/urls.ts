import { SITE } from './config';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the build base ("/" unless astro.config.mjs sets another). */
export function url(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

/** Route key ("" | "safety/sterile-technique" | "compounds/bpc-157") -> /<locale>/<key>/ */
export function routeUrl(locale: string, key: string): string {
  const k = key.replace(/^\/+|\/+$/g, '');
  return url(`/${locale}/${k ? k + '/' : ''}`);
}

/** Absolute canonical URL on the public site (config/site.json siteUrl). */
export function canonicalUrl(locale: string, key: string): string {
  const k = key.replace(/^\/+|\/+$/g, '');
  return new URL(`/${locale}/${k ? k + '/' : ''}`, SITE.siteUrl).href;
}
