/**
 * The animated-explainer registry (src/data/explainers.yaml), validated at import time with the
 * same schema the standalone validator uses. See docs/EXPLAINERS.md.
 */
import YAML from 'yaml';
import { explainerRegistrySchema, type Explainer } from '../schemas/explainers';
import { MECHANISM_LEVELS } from '../schemas/vocab';

const raw = import.meta.glob<string>('/src/data/explainers.yaml', { eager: true, query: '?raw', import: 'default' });
const text = raw['/src/data/explainers.yaml'];
const parsed = explainerRegistrySchema.safeParse(text ? YAML.parse(text) ?? {} : {});
if (!parsed.success) {
  throw new Error('[explainers] src/data/explainers.yaml is invalid:\n' + parsed.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n'));
}
export const EXPLAINERS: Record<string, Explainer> = parsed.data;

export function getExplainer(id: string): Explainer {
  const x = EXPLAINERS[id];
  if (!x) throw new Error(`[explainers] unknown explainer "${id}" (register it in src/data/explainers.yaml)`);
  return x;
}

/** Evidence levels drawn in an explainer, strongest first (drives the line legend). */
export function levelsUsed(x: Explainer): (typeof MECHANISM_LEVELS)[number][] {
  const used = new Set(x.steps.flatMap((s) => s.levels));
  return [...MECHANISM_LEVELS].reverse().filter((l) => used.has(l));
}
