import { fleschReadingEase, words } from '../src/lib/readability';
for (const s of process.argv.slice(2)) console.log(fleschReadingEase(s).toFixed(1), words(s).length, '|', s);
