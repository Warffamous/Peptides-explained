/**
 * Shapes for <OrganCards> (src/components/mdx/OrganCards.astro). Receptor types are told apart by
 * SHAPE and by WORD, never by colour alone: GLP-1 receptor = a round-bottomed cup, GIP receptor = a
 * square cup, glucagon receptor = a V-shaped notch. The same shape is used in the cell panel, on the
 * cell close-ups and in front of each receptor's word. No text inside any of these drawings: every
 * word is HTML from src/i18n/<locale>/organ-cards.json.
 *
 * Local coordinates: the cell surface is y = 0; the cup opens upwards (outside the cell, y < 0) and
 * the receptor's stem runs down through the surface (inside the cell, y > 0).
 */
import type { OcReceptor, OcCell } from '../../schemas/organ-cards';

export const CUP: Record<OcReceptor, string> = {
  glp1: 'M-6.5 -13V-6.5A6.5 6.5 0 0 0 6.5 -6.5V-13',
  gip: 'M-6.5 -13V0H6.5V-13',
  glucagon: 'M-7.5 -13L0 0L7.5 -13',
};
/** Where the medicine (a hexagon) sits in each cup: its centre's y. A V is narrow at the bottom. */
export const SEAT: Record<OcReceptor, number> = { glp1: -6.6, gip: -6.4, glucagon: -9.2 };

/** A hexagon of radius r centred on (cx, cy), flat top and bottom: the medicine's glyph. */
export function hexagon(cx: number, cy: number, r: number): string {
  const pts = [0, 60, 120, 180, 240, 300].map((a) => {
    const t = (a * Math.PI) / 180;
    return `${(cx + r * Math.cos(t)).toFixed(2)} ${(cy + r * Math.sin(t)).toFixed(2)}`;
  });
  return `M${pts.join('L')}Z`;
}

/** Receptor x positions along the top of a close-up (viewBox 120 × 80). */
export function spread(n: number): number[] {
  return n === 1 ? [60] : n === 2 ? [44, 76] : [36, 60, 84];
}

/** The y of a close-up cell's top edge at x, so receptors sit on its surface. */
export function surfaceY(cell: OcCell, x: number): number {
  const ell = (cx: number, cy: number, rx: number, ry: number) => cy - ry * Math.sqrt(Math.max(0, 1 - ((x - cx) / rx) ** 2));
  switch (cell) {
    case 'beta-cell':
      return ell(60, 50, 40, 26);
    case 'nerve-cell':
      return ell(60, 48, 25, 17);
    case 'stomach-wall': {
      // upper edge of the top spindle cell: quadratic from (8,40) via (60,20) to (112,40)
      const t = (x - 8) / 104;
      return (1 - t) ** 2 * 40 + 2 * t * (1 - t) * 20 + t ** 2 * 40;
    }
    case 'liver-cell':
      return 24;
    case 'fat-cell':
      return ell(60, 50, 28, 28);
    case 'muscle-fibre':
      return 30;
  }
}
