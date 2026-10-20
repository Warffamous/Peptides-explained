/**
 * Fetch an openly licensed image from Wikimedia Commons, self-host it and register it.
 *
 *   npm run media:commons -- "File:Reticulate Gila Monster.jpg" gila-monster
 *   npm run media:commons -- "Lab mouse mg 3263.jpg" lab-mouse --focal "35% 60%" --kind photo
 *   npm run media:commons -- "<title>" <id> --dry-run      # show licence and planned entry only
 *
 * Options: --kind photo|illustration|figure (default photo) · --focal "x% y%" · --max-width 2400
 *          --credit "Institution" (when Commons gives the credit only as a link)
 *          --people (identifiable people: only accepted for public domain) · --force (replace)
 *
 * Reads the file's licence, author and credit from the Commons API (imageinfo + extmetadata) and
 * REFUSES anything that is not public domain, CC0, CC BY or CC BY-SA (no NC, no ND, no GFDL-only,
 * no "unknown"). Downloads the original, or a large thumbnail when the original is huge, into
 * src/assets/media/<id>.<ext> and writes the entry to src/data/media.yaml. Alt text is left for the
 * writer (src/i18n/en/media.json); the validator fails until it exists.
 */
import fs from 'node:fs';
import path from 'node:path';
import { assertId, fail, httpRequest, parseFlags, reminder, registryHas, run, targetFile, today, writeEntry } from './registry.ts';

const API = 'https://commons.wikimedia.org/w/api.php';
const ALLOWED_DOWNLOAD_HOSTS = ['upload.wikimedia.org', 'thumb.wikimedia.org'];

type Meta = Record<string, { value: string } | undefined>;

/** Commons metadata fields are HTML. Keep the words, drop tags, entities and any URLs. */
function text(v: { value: string } | undefined): string {
  if (!v) return '';
  return String(v.value)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

type Licence = { origin: 'public-domain' | 'cc0' | 'cc-by' | 'cc-by-sa'; license: string; license_url?: string };

function mapLicence(m: Meta): Licence | { refuse: string } {
  const short = text(m.LicenseShortName);
  const code = text(m.License).toLowerCase();
  const rawUrl = m.LicenseUrl?.value?.trim() ?? '';
  const all = `${short} ${code} ${rawUrl}`;
  if (text(m.NonFree) === 'true') return { refuse: 'Commons marks this file as non-free' };
  if (/(?:^|[-\s/])(?:nc|nd)(?:[-\s/]|$)|non-?commercial|no-?deriv/i.test(all)) return { refuse: `licence "${short || code}" restricts commercial use or derivatives (NC/ND)` };
  let url: string | undefined;
  try {
    const u = new URL(rawUrl.replace(/^\/\//, 'https://'));
    u.protocol = 'https:';
    if (u.hostname.replace(/^www\./, '') === 'creativecommons.org') url = u.href;
  } catch {
    url = undefined;
  }
  if (code === 'pd' || code.startsWith('pd-') || /^public domain$/i.test(short)) return { origin: 'public-domain', license: 'public-domain', license_url: url };
  if (code === 'cc0' || /^cc0\b/i.test(short)) return { origin: 'cc0', license: 'CC0-1.0', license_url: url ?? 'https://creativecommons.org/publicdomain/zero/1.0/' };
  let mm = code.match(/^cc-by-sa-(\d\.\d)(?:-([a-z]{2,3}))?$/);
  if (mm) return { origin: 'cc-by-sa', license: `CC-BY-SA-${mm[1]}${mm[2] ? `-${mm[2].toUpperCase()}` : ''}`, license_url: url ?? `https://creativecommons.org/licenses/by-sa/${mm[1]}/${mm[2] ? `${mm[2]}/` : ''}` };
  mm = code.match(/^cc-by-(\d\.\d)(?:-([a-z]{2,3}))?$/);
  if (mm) return { origin: 'cc-by', license: `CC-BY-${mm[1]}${mm[2] ? `-${mm[2].toUpperCase()}` : ''}`, license_url: url ?? `https://creativecommons.org/licenses/by/${mm[1]}/${mm[2] ? `${mm[2]}/` : ''}` };
  return { refuse: `licence "${short || code || 'unknown'}" is not public domain, CC0, CC BY or CC BY-SA` };
}

async function getJson(url: string): Promise<unknown> {
  const res = await httpRequest(url, { headers: { Accept: 'application/json' }, timeoutMs: 60_000 });
  if (res.status !== 200) fail(`Commons API answered ${res.status} ${res.statusText}`);
  return res.json();
}

async function main(): Promise<void> {
  const { positional, flags } = parseFlags(process.argv.slice(2));
  const [rawTitle, id] = positional;
  if (!rawTitle || !id) fail('usage: fetch-commons.ts "<Commons file title>" <media-id> [--kind photo] [--focal "50% 50%"] [--dry-run]');
  assertId(id);
  const kind = (flags.kind as string) ?? 'photo';
  if (!['photo', 'illustration', 'figure'].includes(kind)) fail('--kind must be photo, illustration or figure (infographic art is generated without text, see generate-image.ts)');
  const focal = (flags.focal as string) ?? '50% 50%';
  const maxWidth = Number(flags['max-width'] ?? 2400);
  const dryRun = flags['dry-run'] === true;
  const force = flags.force === true;
  const title = rawTitle.replace(/^(?:File|Image):/i, '').replace(/_/g, ' ').trim();
  if (registryHas(id) && !force && !dryRun) fail(`"${id}" is already registered (use --force to replace)`);

  const q = new URLSearchParams({
    action: 'query',
    titles: `File:${title}`,
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: String(maxWidth),
    format: 'json',
    formatversion: '2',
  });
  const data = (await getJson(`${API}?${q}`)) as {
    query?: { pages?: { title: string; missing?: boolean; imageinfo?: { url: string; descriptionurl: string; thumburl?: string; width: number; height: number; mime: string; size: number; extmetadata: Meta }[] }[] };
  };
  const page = data.query?.pages?.[0];
  if (!page || page.missing || !page.imageinfo?.[0]) fail(`no such file on Commons: File:${title}`);
  const ii = page.imageinfo[0];
  const m = ii.extmetadata;
  const lic = mapLicence(m);
  const author = text(m.Artist) || text(m.Credit);
  const credit = text(m.Credit);
  const restrictions = text(m.Restrictions);
  const description = text(m.ImageDescription);

  console.log(`File:      ${page.title}  (${ii.width}×${ii.height}, ${ii.mime}, ${(ii.size / 1e6).toFixed(1)} MB)`);
  console.log(`Licence:   ${text(m.LicenseShortName) || text(m.License) || 'unknown'}${'refuse' in lic ? '' : `  →  ${lic.license}`}`);
  console.log(`Author:    ${author || '(none given)'}`);
  if (credit && credit !== author) console.log(`Credit:    ${credit}`);
  if (restrictions) console.log(`Restricts: ${restrictions}`);
  console.log(`Describes: ${description.slice(0, 200)}${description.length > 200 ? '…' : ''}`);

  if ('refuse' in lic) fail(`REFUSED: ${lic.refuse}. Only public domain, CC0, CC BY and CC BY-SA are allowed (docs/MEDIA-GUIDE.md §2).`);
  if (!author) fail('REFUSED: Commons gives no author or credit, so attribution cannot be complete.');
  if (/servier/i.test(`${author} ${credit} ${description}`)) fail('REFUSED: pharmaceutical-company source (Servier Medical Art) — independence rule.');
  const people = flags.people === true || /personality/i.test(restrictions);
  if (people && lic.origin !== 'public-domain') fail('REFUSED: identifiable people are only accepted from public-domain sources (and never in a patient or testimonial context).');
  if (people) console.log('\x1b[33mnote\x1b[0m identifiable people: check this is not a patient or testimonial context before use.');

  const useThumb = Boolean(ii.thumburl) && (ii.width > maxWidth || !/^image\/(?:jpeg|png|webp)$/.test(ii.mime));
  const downloadUrl = useThumb ? ii.thumburl! : ii.url;
  if (!ALLOWED_DOWNLOAD_HOSTS.includes(new URL(downloadUrl).hostname)) fail(`unexpected download host ${new URL(downloadUrl).hostname}`);

  const entry = {
    file: '', // set after download
    kind,
    origin: lic.origin,
    license: lic.license,
    license_url: lic.license_url,
    author,
    credit: (flags.credit as string | undefined) ?? (credit && credit !== author && !/^own work$/i.test(credit) ? credit : undefined),
    title: text(m.ObjectName) || title.replace(/\.[a-z0-9]+$/i, ''),
    source_url: ii.descriptionurl,
    retrieved: today(),
    people,
    focal,
    sources: [],
  };

  if (dryRun) {
    console.log('\nDry run — would download', downloadUrl, '\nand register:', JSON.stringify({ [id]: { ...entry, file: `${id}.<ext>` } }, null, 2));
    return;
  }

  const res = await httpRequest(downloadUrl, { timeoutMs: 180_000 });
  if (res.status !== 200) fail(`download failed: ${res.status} ${res.statusText}`);
  const type = res.type;
  const ext = type.includes('png') ? 'png' : type.includes('webp') ? 'webp' : type.includes('jpeg') ? 'jpg' : null;
  if (!ext) fail(`unexpected content type "${type}"`);
  const dest = targetFile(id, ext, force);
  // Keep originals lean: anything wider than --max-width is downscaled once here (the build makes
  // the web sizes from this file). Commons often serves the full original for non-standard widths.
  const sharp = (await import('sharp')).default;
  const meta = await sharp(res.body).metadata();
  const body = (meta.width ?? 0) > maxWidth
    ? await sharp(res.body).rotate().resize({ width: maxWidth, withoutEnlargement: true })[ext === 'png' ? 'png' : ext === 'webp' ? 'webp' : 'jpeg']({ quality: 90 }).toBuffer()
    : res.body;
  fs.writeFileSync(dest, body);
  entry.file = path.basename(dest);
  writeEntry(id, entry, { force });
  console.log(`\nSaved src/assets/media/${entry.file} (${(fs.statSync(dest).size / 1e6).toFixed(2)} MB) and registered "${id}" in src/data/media.yaml.`);
  console.log('Check the focal point (focal: "x% y%") so crops keep the subject, and set people: true if anyone is identifiable.');
  reminder(id);
}

run(main);
