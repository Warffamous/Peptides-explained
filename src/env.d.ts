/// <reference types="astro/client" />
declare const __PSEUDO_RTL__: boolean;
declare const __PUBLISHED_ONLY__: boolean;

declare namespace App {
  interface Locals {
    locale?: string;
    compound?: import('./lib/content').CompoundContext;
  }
}
