import { fleschReadingEase, wordCount } from '../src/lib/readability.ts';
const names = (process.env.NAMES ?? '').split(',').filter(Boolean);
for (const l of process.argv.slice(2)) console.log(Math.round(fleschReadingEase(l, { names })), wordCount(l), '|', l);
