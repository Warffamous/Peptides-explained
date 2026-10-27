# Media guide

Photographs, illustrations, AI artwork and labelled infographics. This is the contract every image
is used under. The validator (`npm run validate`) enforces the mechanical parts; this document
explains them and covers what a validator cannot check: honesty, consent and what never to show.

Read [CONTENT-GUIDE.md](CONTENT-GUIDE.md) first. The same principles apply: the site sells nothing,
recommends no vendor, and never makes a claim it cannot source.

---

## 1. The rules on one screen

- **Every page gets a photograph** (owner's decision, 20 October 2026), in natural colour in a
  hairline frame (§7). A page hero is one line in `src/data/heroes.yaml`.
- **Licences:** public domain, CC0, CC BY and CC BY-SA only. Never NC, ND, "free to view",
  "editorial use", all-rights-reserved or unknown.
- **Self-host every file.** No hotlinking, no embeds, no image CDNs: viewing a page must not send
  a request to anyone but us (that is the privacy promise in the footer).
- **No pharmaceutical-company sources** (Servier Medical Art included), however convenient.
- **AI artwork contains no text, letters, numbers, logos or labels.** Labels are real HTML text
  added by the site, so they translate, scale and read aloud.
- **AI artwork starts as `review: pending`** and must be checked for scientific and anatomical
  errors by a person before it is marked `ok`. It is always credited as
  "AI-generated illustration (model, date)".
- **Every image has alt text in English** (`src/i18n/en/media.json`); every diagram or plate has
  a full text equivalent.
- **Never show:** product shots, a vendor's vial or pen, anything with a brand-like label,
  before/after pictures, testimonials, glamorised injecting, needles in skin, identifiable patients.

---

## 2. Sourcing and licences

### Where to look first

1. **US federal sources** — public domain as works of the US government: NIH and its institutes
   (NIAID, NCI Visuals Online, NIH BioArt), CDC Public Health Image Library, US Fish and Wildlife
   Service. Most are mirrored on Wikimedia Commons with the licence template already checked.
2. **Wikimedia Commons** — the licence is **per file**. Read it on the file page; the tool reads it
   for you and refuses anything not allowed.
3. **CC BY figures from open-access papers** (PMC, eLife, PLOS, BMC…). Check the licence of the
   article *and* that the figure is not reproduced from elsewhere under other terms.

### Allowed licences

| Origin (`origin`) | Licence id (`license`) | Attribution |
|---|---|---|
| `public-domain` | `public-domain` | Not legally required; we credit anyway |
| `cc0` | `CC0-1.0` | Not required; we credit anyway |
| `cc-by` | `CC-BY-2.0`, `CC-BY-4.0`, `CC-BY-3.0-DE`, … | Required: title, author, source, licence (TASL) |
| `cc-by-sa` | `CC-BY-SA-2.0-FR`, `CC-BY-SA-4.0`, … | Required (TASL); our cropped/tinted version is shared under the same licence |
| `ai-generated` | `CC-BY-4.0` (owner's decision, 20 Oct 2026) | Always labelled "AI-generated illustration"; anyone may reuse with credit |
| `own` | `CC-BY-4.0` (owner's decision, 20 Oct 2026) | Made for this site; anyone may reuse with credit |

`LicenseRef-…` (SPDX convention) means "made for this site; reuse terms set by the owner". The
owner has not yet chosen public reuse terms for site-made artwork; until then the credits say so.

**Refused:** anything with NC (non-commercial) or ND (no derivatives) — we crop, resize and tint, so
ND is impossible, and NC conflicts with unrestricted republication — plus GFDL-only, "free to view",
"editorial use only", all-rights-reserved, and anything whose licence you cannot see.

### People and consent

- **No identifiable real people** unless the source is public domain **and** the context is not a
  patient, a testimonial or a before/after. A face in a crowd at a regulator's press event is fine;
  a person who appears to be a user or a patient is not, even from a public-domain source.
- Set `people: true` in the registry when anyone is identifiable. The validator rejects
  `people: true` for any origin other than public domain, and always for AI artwork.
- Hands in gloves, silhouettes and crowds where nobody can be recognised are not "identifiable".

### What never to depict

- A product: a vial, pen, box, tablet strip or bottle that looks like merchandise, a vendor's
  label, a "research chemical" listing, packaging, prices.
- Before/after pictures, bodies as an advertisement of results, testimonials.
- Injecting as attractive, easy or lifestyle; needles piercing skin; reconstitution.
- Fear imagery: blood, wounds, distressed people. Use plain information instead.
- Brand-like text, even invented. Real signage in a documentary photograph (a street sign, the name
  above a university door) is acceptable when it is incidental.

---

## 3. AI-generated artwork

AI images are allowed for **illustrations** and **infographic art**. They are never `kind: photo`:
a photo claims a real scene. They never show a real person.

### The safeguard: no text in the picture

Models still invent letters and pseudo-labels. So the artwork carries **no text at all**, and the
site overlays numbered markers and a key in real HTML text (`<Infographic>`, §6). That keeps every
word translatable, legible at 200% zoom, readable by screen readers, and correctable without
regenerating the picture.

### The tool

```sh
npm run media:generate -- --check                                   # key valid? which model? where is the cost log?
npm run media:generate -- glp1-body-map-v2 infographic-art "Front view of …" --dry-run
npm run media:generate -- glp1-body-map-v2 infographic-art "Front view of …" --size 1024x1536 --quality high
npm run media:generate -- glp1-body-map-v2-dark infographic-art --from glp1-body-map-v2 --dark --dry-run
npm run media:generate -- glp1-body-map-v2-dark infographic-art --from glp1-body-map-v2 --dark
npm run media:generate -- --usage                                   # every image so far and the estimated cost
```

- The key is read from `.env` (`OPENAI_API_KEY=…`, git-ignored) with `process.loadEnvFile`, sent
  only to `api.openai.com`, and never printed, logged or written anywhere else. API error messages
  are scrubbed of anything key-like before printing. In a **git worktree** without its own `.env`,
  the tool reads the main checkout's `.env` in place (found through the worktree's `.git` file); it
  never copies the key into the worktree.
- **Cost log.** Every billed call (generation or edit) appends a line to `media-usage.jsonl` in the
  root of the **main checkout**, also when the tool runs in a worktree, so the owner has one log.
  `--usage` prints it with the estimated cost per image (from the token counts OpenAI returns and
  the price table in `scripts/media/usage-log.ts`; the OpenAI dashboard is the authority).
- **Dark versions (edit mode).** `--from <id> --dark` sends the registered image to
  `POST /v1/images/edits` with a fixed instruction: the same drawing (composition, positions,
  shapes, framing; nothing added, removed or moved), only the background becomes a very dark warm
  near-black and the line work and tones are adjusted to read on it; still no text. It uses the
  source's size and model, the preamble `v1-dark` (the v1 rules with a dark-ground palette sentence),
  and records `ai.edited_from`. `--from <id> "<instruction>"` makes any other edit of a registered
  image. Check the result against the original: same size, same organ positions (a plate's markers
  and an explainer's overlay are placed in % of the art).
- **Use `--dry-run` first.** It prints the model and the full prompt without generating (no cost).
- Every prompt gets a fixed **style preamble** (`STYLE_PREAMBLE`, versioned `v1`, in
  `scripts/media/generate-image.ts`): calm clinical atlas style; light neutral palette that works on
  paper white and near-black; absolutely no text, letters, numbers, labels, logos, watermarks, brand
  names or UI; no needles in skin, no labelled vials, no products, no before/after, no identifiable
  person; anatomically plausible. Infographic art also asks for clear space around the structures
  that will be marked.
- **Model choice.** Unless `--model` is given, the tool calls `GET /v1/models` and takes the newest
  `gpt-image*` model by its `created` date, preferring a dated snapshot (`…-YYYY-MM-DD`) over a
  moving alias so the registry records a model that keeps meaning the same thing. On 20 October
  2026 that was `gpt-image-2.5-sunburst-2026-09-08` (also available: the 2.5 "flare" variant,
  `gpt-image-2`, `gpt-image-1.5`, `gpt-image-1`, `gpt-image-1-mini`). Pass `--model` to reproduce an
  older image exactly.
- The image is saved to `src/assets/media/<id>.png` and registered with model, prompt, preamble
  version, date and `review: pending`.

### The review step (mandatory)

1. **Open the image at full size** and look for: anything that resembles letters, numbers or labels;
   wrong anatomy (organ side, shape, position, count; extra fingers; impossible joints); invented
   structures; anything that could read as a product or a person.
2. If there is an error, regenerate with a corrected prompt that names the error ("the cerebellum
   lies behind and is not visible"). Do not paint over AI output.
3. Write what you checked and what you saw in `ai.review_note`, including known simplifications.
4. Only a person who has checked it sets `ai.review: ok` and `ai.reviewed_by: <person id>`.
   `npm run validate` warns about every pending image and lists the pages that use it: **a page
   must not ship with pending AI art.**

---

## 4. Fetch, register, place, credit

### Fetch from Wikimedia Commons

```sh
npm run media:commons -- "File:Reticulate Gila Monster.jpg" gila-monster --focal "52% 58%" --credit "U.S. Fish and Wildlife Service"
npm run media:commons -- "Lab mouse mg 3263.jpg" lab-mouse --dry-run      # show licence first
```

The tool reads licence, author and credit from the Commons API (imageinfo + extmetadata),
**refuses** anything not public domain / CC0 / CC BY / CC BY-SA, refuses Servier and refuses
identifiable people from non-public-domain files, downloads the original (downscaled to 2400 px if
larger) into `src/assets/media/<id>.<ext>`, and writes the registry entry. It identifies itself
to Wikimedia with a descriptive User-Agent (their API etiquette). Then you write the alt text.

### The registry — `src/data/media.yaml`

```yaml
lab-mouse:
  file: lab-mouse.jpg            # in src/assets/media/
  kind: photo                    # photo | illustration | infographic-art | figure
  origin: cc-by-sa               # public-domain | cc0 | cc-by | cc-by-sa | ai-generated | own
  license: CC-BY-SA-2.0-FR
  license_url: https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en
  author: Rama
  credit: …                      # institution, if the source credits one
  title: Lab mouse mg 3263       # title of the work at the source
  source_url: https://commons.wikimedia.org/wiki/File:Lab_mouse_mg_3263.jpg   # the page, never the file
  retrieved: 2026-10-20
  people: false
  focal: 42% 58%                 # where the subject is, measured on the unmirrored image
  sources: [fda-pcac-2026-kpv-briefing]   # sources for factual claims in the caption
  local_sources: { NL: [apotheek-medicijnafval] }   # optional: a country's own caption sources, listed only where it is shown (CONTENT-GUIDE §3)
  changes: …                     # only if we did more than crop, resize and tint
  ai: { model, prompt, preamble, generated, review: pending|ok, review_note, reviewed_by }
```

`source_url` and `license_url` hosts must be on `config/link-allowlist.json`
(`commons.wikimedia.org`, `creativecommons.org` and `.gov` are).

### Alt text and caption — `src/i18n/<locale>/media.json`

```json
{ "lab-mouse": { "alt": "A small brown laboratory mouse sitting on the palm of a hand in a blue disposable glove.",
                 "caption": "A laboratory mouse. KPV research so far is in cells and animals. No study in people is published." } }
```

### Place it

| Where | How |
|---|---|
| Page hero (every page) | `src/data/heroes.yaml`: `compounds/semaglutide: gila-monster` (route key, no locale; `""` is the landing page). A photo that belongs to one locale is mapped per locale: `safety/warning-signs: { nl: ambulance-den-haag }` (only the Dutch page has it), or `{ default: id, nl: id }` to swap it there; the validator checks each locale key and id. DocLayout renders it after the beginner layer and the review line on phones and tablets, and beside the title block from 64 rem (§7). |
| In the text | `<Photo id="lab-mouse" />` |
| Labelled plate | `<Infographic id="glp1-body-map" />` (§6) |
| Under an animated explainer | `art` / `art_dark` in `src/data/explainers.yaml` (EXPLAINERS.md §3.6) |
| Image credits | `<MediaCredits />` — already on `/sources/`; usable on any page |

### Credit

Automatic. Every image shows a short credit line (kind, author, institution, source, licence,
"Image details"); the full entry on `/sources/#image-credits` lists what it shows, author, title,
licence (linked), source (linked) and retrieval date, the changes we made, the sources behind its
caption, and for AI art the model, date and review status. That is complete TASL attribution for
CC BY and CC BY-SA. The page photo (hero) always uses the short line, the author and "Image
details": on wide screens it sits beside the title, and that one link is then the only focusable
element whose visual position differs from its place in the reading order.

---

## 5. Alt text

Alt text is written for someone who cannot see the image, in **B1 English**.

- **Describe what matters for understanding**, not decoration: "A small brown laboratory mouse
  sitting on the palm of a hand in a blue disposable glove", not "Cute mouse" and not the
  photographer's settings.
- **Do not start with** "Image of", "Photo of", "Picture of": screen readers already say "image".
- **One or two sentences**, under ~150 characters where possible (the validator warns over 250).
  Put context and claims in the caption, not in the alt.
- **The caption adds context; the alt describes.** They must not repeat each other.
- **Captions follow the plain-language limits** of CONTENT-GUIDE §4 (short sentences, ≤ 30 words,
  aim for 18) and make **no unsourced claim**: if the caption states a fact, list its source ids in
  the registry `sources:` (shown in the credits as "Caption based on").
- Infographic artwork gets `alt=""` on the page (the key and text equivalent carry the content); its
  registry alt text is used in the credits list to say what the artwork shows.
- Translators translate alt and caption with the page. Never put text in the image instead.

---

## 6. Infographics: AI art without text → markers → key

1. **Generate the art** with no text (`kind: infographic-art`, §3), check it, write the review note.
2. **Place markers** in `src/data/infographics/<id>.yaml` — percentages of the artwork, measured on
   the unmirrored image (open it in any viewer and read the pixel position ÷ width/height):

   ```yaml
   art: glp1-body-map
   markers:
     - { key: brain, x: 50, y: 7.8, level: human }     # level: hypothesis | in-vitro | animal | human
     - { key: stomach, x: 60, y: 53, level: human }
     - { key: pancreas, x: 46, y: 62.4, level: human }
   sources: [friedrichsen-2021-appetite, ema-epar-wegovy, kapitza-2017-beta-cell]
   ```

   `level` says how well the labelled effect is shown; markers are cyan (demonstrated) or amber
   (hypothesis), and neutral when it is omitted.
3. **Write the text** in `src/i18n/<locale>/infographics.json`: a title, one label (and optional
   detail) per marker key, and a **full text equivalent** that says everything the plate shows.
   Labels follow the page's claims and sources; nothing new appears only on a plate.
4. **Place** `<Infographic id="…" />` in the MDX. It renders a figure: the art with an SVG marker
   overlay (aria-hidden), a numbered key beside it on wide screens and below it on phones and at
   200% zoom, the text equivalent under "In words", a "Based on" line (numbered links into the
   page's source list when the page cites the source), and the AI credit.

Markers are SVG coordinates on the art, so they never move in RTL; the layout around the art
mirrors, the art does not.

**A dark version of the art (`art_dark`).** A light plate on a dark page is a bright panel, so a
plate should have a second, dark-scheme rendering of the same artwork:

```yaml
art: glp1-body-map-v2
art_dark: glp1-body-map-v2-dark   # optional; a separate media.yaml entry, kind: infographic-art
```

- It is the **same drawing** (same composition, organ positions and framing) on a near-black
  ground, made with the edit mode (`--from <light-id> --dark`, §3) and reviewed like any AI art
  (its own registry entry, alt text in `media.json` and review note). **Same proportions**: `<Infographic>` fails the build when the
  aspect ratios differ by more than 1%, because the markers are placed in % of the art and are
  shared by both versions. Check that every marker still sits on its organ in the dark version.
- The page shows the light art in the light scheme and the dark art in the dark scheme (the site
  follows the reader's setting or the toggle, and is light when there is none). Both pictures are
  lazy, so the hidden one is never downloaded; print always uses the light art.
- With a dark art the frame drops its light panel and dimming in dark. Without one, the light art
  is dimmed to about 85% on a soft light panel in dark (never inverted).

---

## 7. How the design treats images

The site has one design, "Mechanism" (the owner's decision of 21 October 2026; the earlier
three-design comparison is preserved at the git tag `three-designs-2026-10-21`). Its image rules
(`src/styles/design/media.css`):

| | Treatment |
|---|---|
| Photos | Natural colour (`saturate(0.92)`) in a hairline frame with the 8 px radius; caption and short credit under it. Dark: the same photo slightly dimmed (`brightness(0.88)`), never tinted or inverted. In the text a photo runs wider than the reading column but starts on the page's one left edge. |
| Hero | Phones and tablets: a 16:9 photo after the beginner layer. From 64 rem: a 3:2 photo in the aside beside the title, the review line and the fact sheet (compound pages) or the TL;DR (other pages), its top level with the eyebrow. |
| Plates | A specimen on a light table: the art on a light panel with a 1 px line; cyan/amber epistemic markers (neutral without a level) that grow a little when their key item is highlighted. Dark: the `art_dark` version as drawn on the card surface, markers in the dark tones; without one, the light art dimmed to 85% on a `#D9DEE5` panel. |

The page photo never pushes the beginner layer down. The DOM order (= reading and focus order) is
title → TL;DR (with "At a glance" and the stop strip) → fact sheet → review line → photo, which is what
phones and tablets show: a 16:9 photo (capped at 24 rem high) after them. From 64 rem
`base/structure.css` lifts the review line and the fact sheet under the title and the photo
beside them (3:2, in the aside track; on 64–74 rem screens it takes up to 6.5 rem of the reading
column, see `design/layout.css`). So at 360×740 the title and the first "At a glance" card are on
the first screen and the whole stop strip ends within the second; at 1280×900 the title, lede,
badge, fact sheet, photo and the start of "At a glance" are on the first screen. Every compound
page has a hero; an image that is a page's hero is not repeated in that page's body.

---

## 8. Performance rules

- **Originals** live in `src/assets/media/` (max 2400 px wide; the Commons tool downscales). Never
  put images in `public/` — they would bypass optimisation.
- The build makes **AVIF + WebP + JPEG** at responsive widths with `astro:assets` `getImage()`
  (`src/lib/media.ts`), with explicit `width`/`height` so nothing shifts (zero CLS).
- **Heroes** are cropped at build time around the focal point (16:9 below 64 rem, 3:2 beside the
  title), encoded at lower quality (they are small and slightly subdued), `loading=eager`
  and `fetchpriority=high`. Budget: phone AVIF ≤ 40 KB at 480 w (the Gila monster hero is ~11 KB at
  480 w and ~32 KB at 800 w).
- **Everything else is lazy** (`loading=lazy`, `decoding=async`).
- No images as CSS backgrounds for content, no icon fonts, no third-party hosts, no JavaScript.

---

## 9. What the validator checks

Errors: an image file in `src/assets/media/` that is not registered · an image referenced by a
hero, `<Photo>`, `<Infographic>`, a plate or an explainer's `art`/`art_dark` that is not registered
(an explainer picture must be text-free art) · a registered file that does not
exist · missing English alt text · a licence that is NC/ND/unknown or does not match the origin ·
`source_url` or `license_url` on a host not in the allowlist · an AI entry without model, prompt or
date · AI artwork as `kind: photo` or with `people: true` · identifiable people from a non-public-
domain source · Servier as a source · an infographic without data, title, text equivalent or a
label for every marker.

Warning: AI artwork with `review: pending` (listed with the pages that use it), alt text that starts
"Image of" or is very long, captions that repeat the alt text, text for unregistered ids.

---

## 10. Before you publish an image

- [ ] Licence allowed, read on the source page, recorded with its deed link.
- [ ] No pharma source, no product, no brand-like label, no before/after, no glamorised injecting.
- [ ] People: none identifiable, or public domain and not a patient/testimonial context.
- [ ] Alt text (B1) and, if useful, a caption with sources for any claim.
- [ ] Focal point checked on a phone-width crop.
- [ ] AI art: no text-like marks, anatomy checked, review note written, `review: ok` set by a person.
- [ ] `npm run validate` shows no media errors and no pending AI art on the page you publish.
