/**
 * Local cost log for OpenAI image generation. Every successful call (generation or edit) appends one
 * JSON line to media-usage.jsonl in the root of the owner's MAIN checkout (git-ignored: it describes
 * the owner's spend, not content). A git worktree writes to that same file, so there is one log
 * however many worktrees generate images.
 * The owner cannot see per-call spend from this repo otherwise: a project key cannot read the
 * organisation usage or costs endpoints (they need an admin key).
 *
 *   npm run media:generate -- --usage     # totals so far
 */
import fs from 'node:fs';
import path from 'node:path';
import { MAIN_ROOT } from './registry.ts';

export const LOG = path.join(MAIN_ROOT, 'media-usage.jsonl');

/**
 * USD per 1M tokens, from https://developers.openai.com/api/docs/pricing (checked 20 October 2026).
 * Update when OpenAI changes prices; unknown models are logged without an estimate.
 */
const PRICES: Record<string, { text_in: number; image_in: number; image_out: number }> = {
  'gpt-image-2.5-sunburst': { text_in: 5, image_in: 8, image_out: 30 },
  'gpt-image-2.5-flare': { text_in: 5, image_in: 8, image_out: 30 },
  'gpt-image-2': { text_in: 5, image_in: 8, image_out: 30 },
  'gpt-image-1.5': { text_in: 5, image_in: 8, image_out: 32 },
  'gpt-image-1': { text_in: 5, image_in: 10, image_out: 40 },
  'gpt-image-1-mini': { text_in: 2, image_in: 2.5, image_out: 8 },
};
export const PRICES_CHECKED = '2026-10-20';

type Usage = { input_tokens?: number; output_tokens?: number; input_tokens_details?: { text_tokens?: number; image_tokens?: number } };

/** Dated snapshots (…-2026-09-08) are priced like their base model. */
function priceFor(model: string) {
  return PRICES[model] ?? PRICES[model.replace(/-\d{4}-\d{2}-\d{2}$/, '')];
}

export function estimateUsd(model: string, usage: Usage | undefined): number | null {
  const p = priceFor(model);
  if (!p || !usage) return null;
  const textIn = usage.input_tokens_details?.text_tokens ?? usage.input_tokens ?? 0;
  const imageIn = usage.input_tokens_details?.image_tokens ?? 0;
  const out = usage.output_tokens ?? 0;
  return (textIn * p.text_in + imageIn * p.image_in + out * p.image_out) / 1e6;
}

export function logGeneration(entry: { id: string; model: string; size: string; quality: string; mode?: 'generate' | 'edit'; from?: string; usage?: Usage }): number | null {
  const est = estimateUsd(entry.model, entry.usage);
  const line = { at: new Date().toISOString(), ...entry, est_usd: est === null ? null : Number(est.toFixed(4)), prices_checked: PRICES_CHECKED };
  fs.appendFileSync(LOG, JSON.stringify(line) + '\n');
  return est;
}

export function printTotals(): void {
  if (!fs.existsSync(LOG)) return void console.log(`No images generated yet (${LOG} does not exist).`);
  const rows = fs.readFileSync(LOG, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l));
  const images = rows.filter((r) => !r.note);
  const notes = rows.filter((r) => r.note);
  const known = images.filter((r) => typeof r.est_usd === 'number');
  const total = known.reduce((s, r) => s + r.est_usd, 0);
  console.log(`Images logged: ${images.length}  ·  estimated cost: $${total.toFixed(2)}${known.length < images.length ? ` (+ ${images.length - known.length} without a price)` : ''}`);
  console.log(`Log: ${LOG}`);
  for (const r of images) console.log(`  ${r.at.slice(0, 16).replace('T', ' ')}  ${r.id.padEnd(28)} ${(r.mode === 'edit' ? 'edit' : 'gen').padEnd(4)} ${r.model}  ${r.size} ${r.quality}  ${typeof r.est_usd === 'number' ? '$' + r.est_usd.toFixed(3) : 'no price'}`);
  for (const n of notes) console.log(`  note (${n.at.slice(0, 10)}): ${n.note}`);
  console.log('Estimates use the token counts OpenAI returns and the price table in scripts/media/usage-log.ts. Your OpenAI dashboard is the authority.');
}
