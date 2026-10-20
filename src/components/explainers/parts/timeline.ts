/**
 * Helpers for explainer artwork. Every animated part sits on the figure's one timeline:
 * it starts at (k × step length) + lag. Roles (classes) and what the default state shows:
 *   xp-in      appears at step k            default: visible  (the final frame)
 *   xp-out     disappears at step k         default: hidden
 *   xp-move    xp-in, sliding in from (--dx, --dy)
 *   xp-shrink  shrinks to --s at step k     default: shrunk
 *   xp-ghost   fades to a ghost at step k   default: ghosted
 *   xp-pulse   emphasised during step k     default: still
 *   xp-link    a causal link; data-level sets the line pattern (and colour in design B)
 */
export type Level = 'hypothesis' | 'in-vitro' | 'animal' | 'human';

/** Inline style placing an element on the timeline. */
export function at(k: number, lag = 0, extra = ''): string {
  return `--k:${k}${lag ? `;--lag:${lag}s` : ''}${extra ? `;${extra}` : ''}`;
}

/**
 * Attributes for a causal link drawn in step k. Links shown in people are drawn on as a line
 * (pathLength=1 for the stroke-dashoffset technique); weaker links keep their dash pattern and fade in.
 */
export function link(level: Level, k: number, lag = 0): Record<string, string | number | undefined> {
  return {
    class: 'xp-link xp-in',
    'data-level': level,
    pathLength: level === 'human' ? 1 : undefined,
    style: at(k, lag),
  };
}
