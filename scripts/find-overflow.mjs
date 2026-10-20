import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { chromium } from 'playwright';
const dist = path.resolve(process.argv[2]); const url = process.argv[3]; const w = Number(process.argv[4] ?? 360);
const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.woff2':'font/woff2','.svg':'image/svg+xml'};
const srv = http.createServer((q,r)=>{let f=path.join(dist,decodeURIComponent(new URL(q.url,'http://x').pathname)); if(fs.existsSync(f)&&fs.statSync(f).isDirectory()) f=path.join(f,'index.html'); if(!fs.existsSync(f)){r.writeHead(404);return r.end()} r.writeHead(200,{'Content-Type':T[path.extname(f)]??'application/octet-stream'}); fs.createReadStream(f).pipe(r)}).listen(4322);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage({ viewport: { width: w, height: 800 } });
await p.goto('http://localhost:4322' + url, { waitUntil: 'networkidle' });
const res = await p.evaluate(() => { const vw = document.documentElement.clientWidth; const out = []; for (const el of document.querySelectorAll('body *')) { const r = el.getBoundingClientRect(); if (r.right > vw + 1) { let skip=false; for (let a = el.parentElement; a; a = a.parentElement) { const cs = getComputedStyle(a); if (cs.overflowX !== 'visible' || cs.display==='none') { skip = true; break; } } if (getComputedStyle(el).position==='absolute' && el.closest('details:not([open])')) skip=true; if (!skip) out.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} right=${Math.round(r.right)} left=${Math.round(r.left)} w=${Math.round(r.width)}`); } } return out.slice(0, 25); });
console.log(res.join('\n')); await b.close(); srv.close();
