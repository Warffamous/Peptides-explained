/// <reference types="astro/client" />
declare const __PSEUDO_RTL__: boolean;
declare const __PUBLISHED_ONLY__: boolean;

declare namespace App {
  interface Locals {
    locale?: string;
    /** The locale of the page's text (the source locale on a preview fallback page); see ctxContentLocale. */
    contentLocale?: string;
    compound?: import('./lib/content').CompoundContext;
  }
}
