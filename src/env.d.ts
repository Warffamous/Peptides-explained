/// <reference types="astro/client" />
declare const __THEME__: 'switchable' | 'a' | 'b' | 'c';
declare const __PSEUDO_RTL__: boolean;
declare const __REVIEW_BUILD__: boolean;

declare namespace App {
  interface Locals {
    locale?: string;
    compound?: import('./lib/content').CompoundContext;
  }
}
