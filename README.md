# Peptides Explained

An independent, non-commercial, multilingual public-health reference on therapeutic peptides:
what they are, what the evidence shows, what the law says, and how to lower the risk for people who
already use them. Static site built with [Astro 5](https://astro.build/), one design ("Mechanism",
`docs/design/DESIGN-DIRECTIONS-2026-10.md`), light and dark following the reader's setting.

**State on 3 November 2026.** The English site is written for readers in **the United States, the
United Kingdom, Canada and Australia**, with short notes for **Ireland and New Zealand**: 42 pages, 21
compound pages (11 full pages and 10 short Tier 2 pages, flagged "Short page"), plus the glossary,
sources, news and search pages (live since the refocus of 27 October 2026). All European framing (the
Netherlands, the EU, Belgium, Germany) left the English site and was kept for the Dutch site
(`research/for-nl-site/`, git tag `nl-source-2026-10-23`). The Dutch site (`nl`: 40 pages, 21 compound
pages, every UI string and the glossary) is **published** and live since 3 November 2026: see
[The Dutch site](#the-dutch-site). Medical and legal review by named people is pending (see
[Review status](#review-status)).

---

## What this site is, and what it is not

- **Who it is for.** Each language has its own readers (`config/locales.json`, `jurisdictions`).
  English is written for readers in the US, the UK, Canada and Australia: wherever the answer depends
  on the country (law, approval status, treatment routes, side-effect reporting, help services), each
  of the four finds their own, side by side, and none is "the default". Ireland and New Zealand get
  short notes (`/en/legal/ireland-and-new-zealand/`). The Dutch site (`/nl/`) is for readers in
  the Netherlands, with EU law in full and short notes for Belgium (`/nl/legal/be/`). CONTENT-GUIDE §1b.
- **It sells nothing, links to no seller and recommends no seller.** No ads, no sponsors, no
  affiliate or referral links. The footer says so on every page, and `/en/about/funding/` explains
  it, including the host's visitor statistics, which run only with the reader's consent.
- **The absence of commerce is what keeps the information legal.** The site is **published from the
  Netherlands**, so Dutch law is the publisher's law, wherever the reader lives: the Geneesmiddelenwet
  (art. 84–85, implementing Directive 2001/83/EC) bans advertising for medicines without a marketing
  authorisation, and "advertising" is read broadly: a commercial purpose turns information into
  advertising. The readers' countries have similar rules on advertising medicines. So every outbound
  link must be on `config/link-allowlist.json` (regulators, law, PubMed/DOI, universities, anti-doping
  bodies, patient and harm-reduction organisations), and the build fails on any commerce word in a
  link, a call to action, a heading, a section question or a figure title
  (`config/commerce-tokens.json`).
- **It never prints an emergency number on English** (its readers live in several countries): it
  says "call your local emergency number", and names and links each country's help services. The
  Dutch site, for readers in one country, prints 112 ("Bel 112").
- **It informs, it does not discourage** (`docs/CONTENT-GUIDE.md` §1a). Harm reduction is the core:
  practical, sourced safety information for people who already have a product.
- **The legal line.** No doses, schedules, protocols, "start low", reconstitution maths, stacks or
  cycles. No help finding, choosing or judging a seller. Studied doses appear only inside a study
  description, as study design. Warning signs of a dangerous product are allowed only as
  negative signs, sourced to regulators.
- **It is not medical advice** and not a dosing guide. Every claim is linked to a DOI, a PubMed
  record or the regulator's or legislator's own page.

The full editorial contract is `docs/CONTENT-GUIDE.md`. Read it before writing anything.

---

## Running it

Requirements: Node.js 20.11 or newer (CI uses Node 22) and npm. On Windows, run the commands in Git
Bash or PowerShell; only `build:rtl` needs Git Bash (see the table).

```sh
npm ci            # install exactly what package-lock.json lists
npm run dev       # copies the fonts, then starts the dev server on http://localhost:4321/en/
npm run build     # validate + lint:css (prebuild), astro build, then the Pagefind search index → dist/
npm run preview   # serve dist/ locally (search works here, not in dev: the index is made by the build)
```

| Command | What it does |
|---|---|
| `npm run validate` | The content validator (`scripts/validate-content.ts`): schemas, sources, the editorial guardrails (including seller-judging words such as "reputable" or "vendor"), commerce words in titles, headings, questions and figure titles, plain-language limits, the emergency-number rule (`scripts/lib/emergency.ts`), the locale residue check (warnings until `STRICT_RESIDUE`), media and glossary checks. Fails on errors. `npm run validate -- --only <part-of-path>` reports one file or group, e.g. `--only bpc-157` or `--only legal/ca`. |
| `npm run lint:css` | Stylelint. Bans physical left/right properties so every layout mirrors in right-to-left scripts. |
| `npm run check:commerce` | After a build: every outbound URL in `dist/` is on the allowlist, no link or button carries a commerce word, affiliate parameter, redirector or URL shortener, and no heading (`h1`–`h6`), section question, fold or figure title, diagram caption or `aria-label` carries a commerce word. "The load-bearing wall". |
| `npm run check:html` | After a build: one `h1`, no skipped heading levels, landmarks, `lang` and `dir`, unique ids, every internal link and `#` target resolves, cross-page links to a source (`/en/sources/#source-<id>`) or an image credit (`#image-<id>`) find their target (other missing cross-page anchors are warnings), alt text and accessible names, no physical-direction inline styles, first-load JavaScript at most 40 KB gzipped per page. |
| `npm run check:residue` | The locale residue check (`scripts/check-locale-residue.ts`, `config/locale-residue.json`, CONTENT-GUIDE §1b): words that belong to another locale's readers (on English: Dutch, Belgian and German terms and EU reader framing; EMA, EPAR, CHMP and Europe as warnings; on Dutch: other countries' help, reporting, treatment and funding routes and "call your local emergency number"), in the sources and in the built pages of `dist/`, plus a list of the cited sources with a Dutch, Belgian or German name. `-- --details` lists every hit, `-- --only <part-of-path>` filters, `-- --strict` fails now. While `STRICT_RESIDUE` (`scripts/lib/residue.ts`) is false every hit is a warning. |
| `npm run check` | The three checks above. |
| `npm run build:rtl` | Builds every page with `dir="rtl"` into `dist-rtl/` (`PSEUDO_RTL=1`, POSIX syntax: use Git Bash, or in PowerShell `$env:PSEUDO_RTL='1'; npx astro build --outDir dist-rtl`). In a browser, `?pseudo=rtl` does the same for one tab (`?pseudo=off` ends it). |
| `npm run news` | Fetches headlines from the vetted feeds in `src/data/feeds.yaml` into `src/data/news.json` (normally run by the daily GitHub Action). |
| `npm run media:commons` / `npm run media:generate` | Register an open-licensed image from Wikimedia Commons, or make text-free AI artwork (`docs/MEDIA-GUIDE.md`). |

The validator has a known baseline of warnings; a change should not add errors and should not add
warnings in the files it touches.

---

## Project structure

```text
config/
  locales.json            locales, their status (planned | preview | published), fallback, their
                          readers' jurisdictions (full and notes) and printsEmergencyNumbers
  site.json               brand, canonical site URL, "content as of" date
  link-allowlist.json     the only hosts any page may link to
  commerce-tokens.json    commerce words per locale; a link or button containing one fails the build
  readability-waivers.json  time-boxed waivers for the plain-language limits
  locale-residue.json     per locale, the words that belong to another locale's readers (residue check)
docs/
  CONTENT-GUIDE.md        the editorial contract (guardrails, voice, page and compound rules, components)
  MEDIA-GUIDE.md          images: licences, AI artwork review, alt text, cost log
  EXPLAINERS.md           animated explainers and their clarity rules
  STYLE-NL.md             the Dutch style sheet: voice, term list, numbers and dates, fixed phrases
  PLAN-2026-10-27-dutch-site.md   the approved plan of the Dutch site
  design/DESIGN-DIRECTIONS-2026-10.md   the design decision ("Mechanism") and its rules
src/
  content/pages/<locale>/**.mdx       page prose; the file path is the route (index.mdx = section landing)
  content/compounds/<locale>/<slug>.mdx  compound prose, one per locale
  data/compounds/<slug>.yaml          compound facts (grades, regulatory rows, studies), locale-independent
  data/sources/<group>.yaml           the bibliography; ids are global
  data/                               people, media registry, heroes, timeline, tracker, corrections,
                                      jurisdictions, explainers, infographics, organ cards, feeds, news
  i18n/<locale>/<namespace>.json      every UI string, per locale (glossary/ is a folder of files)
  components/  layouts/  pages/       templates; the words they show come from src/i18n
  lib/  plugins/  schemas/  scripts/  styles/
scripts/                  validator, commerce, HTML and residue checks, newsfeed, media tools
  lib/emergency.ts        what counts as a printed emergency number
  lib/residue.ts          the locale residue scan (sources and built pages)
research/                 research notes and verification logs per content group
  refocus/                the fact-checked research for the English refocus (US, UK, CA, AU, IE, NZ)
  refocus-spec/           the refocus brief (content-brief.md) and data model
  refocus-notes/          per-group notes of the refocus rewrite, for the fact-checkers
  for-nl-site/            European material saved for the Dutch site: snapshot-2026-10-23/,
                          MANIFEST-<group>.md (what each group cut), i18n-replaced-en.json
  nl/                     the fact-checked Dutch, EU and Belgian research (nl-law, nl-care, nl-help,
                          eu-status, be-notes; status/<slug>.yaml per compound)
  nl-spec/                the Dutch brief (content-brief.md, with its binding "Added after step 1")
  nl-notes/               per-group notes of the Dutch writing (each group's independent check is its
                          "## Check" section), the style and data-merge notes, the final sweep's notes
.claude/workflows/write-content-groups.js   the research, write and fact-check workflow (below)
.claude/workflows/refocus-en.js             the English refocus: merge, rewrite, fact-check, sweep
.github/workflows/        ci.yml (build and checks on every push) and news.yml (daily newsfeed)
```

Routes come from file paths and are English in every locale (`src/content/pages/nl/safety/sterile-technique.mdx`
→ `/nl/safety/sterile-technique/`), so translations pair up for hreflang. The compounds index, the
grade matrix, the sitemaps and the compound routes are generated from the data files.

---

## How to add a compound

1. **Choose the slug and tier.** The slug is English kebab-case (`bpc-157`). Tier 1 is a full page
   (`status: complete`), Tier 2 a short page (`status: stub`), which only needs the sections
   `what-it-is`, `evidence`, `regulatory` and `risks`, a full data file and a TL;DR (`tldr`).
2. **Register the sources** in `src/data/sources/<group>.yaml` (one file per topic; ids are global,
   so search the folder for the DOI or URL first and reuse an existing id). Copy the metadata from
   the PubMed record or the fetched page, never from memory, and record how you checked it
   (`verified: pubmed | doi | url | registry`). Regulator and law URLs must be on
   `config/link-allowlist.json`. CONTENT-GUIDE §11.
3. **Write the data file** `src/data/compounds/<slug>.yaml` (CONTENT-GUIDE §5.1; schema in
   `src/schemas/index.ts`): names, identifiers, formula and mass, sequence, `category`, the four
   evidence grades (see [the rubric](#how-the-grading-rubric-works)), dated and sourced regulatory rows,
   structured `studies` (at least 3 for a complete page), `authorised_products` or
   `national_authorisations` where the category needs them, `related`, and the review fields
   `last_reviewed: <date>` and `reviewed_by: pending-medical-review`. **Which rows:** WADA, plus one
   row for every `jurisdictions.full` code of every published locale in `config/locales.json` (today
   English: US, UK, CA, AU; the validator fails without them), and the rows of locales in preview where
   known (Dutch: NL, EU). Never delete a row another locale shows. A jurisdiction that has not been
   researched gets no row: it is shown as unknown, never "not approved". An Australian or Canadian
   `schedule` only where the instrument names the substance. Products of an authorised medicine link
   the regulator's own label (FDA, MHRA Products, Health Canada monograph, ARTG entry). The "At a
   glance" answers are derived from this file, so keep it exact.
4. **Write the prose** `src/content/compounds/en/<slug>.mdx` (CONTENT-GUIDE §5.2–5.4, §9.1): the
   frontmatter (`tldr`, `lede`, `glance`, `grade_rationale`, `mechanism`, one `studies` entry per
   study id, `regulatory_notes` for the locale's own rows, `indications` for every authorised
   product the locale shows, that is of one of its full jurisdictions) and the `<Section id="…">`
   blocks in the fixed order. The regulatory section answers for
   each of the locale's countries and links the treatment routes by their fixed anchors on
   `/en/legal-routes/`. Every factual claim gets a `<Cite id>`; every efficacy or mechanism
   claim a `<Claim level>`. Authorised medicines add `<AuthorisedProducts />`; everything else gets
   the harm-reduction section with `<ProductCheck />` and `<WarningSigns />`.
5. **Add glossary terms** a B1 reader would not know to `src/i18n/en/glossary/<slug>.json`
   (CONTENT-GUIDE §12). Search the folder first: ids must be unique across all files. The first
   plain-text use of a term on each page is linked automatically. Write an apostrophe in a term or
   alias as `’`, because the page text is converted to typographic quotes before linking.
6. **Give it a page photo.** Register an open-licensed image (`npm run media:commons -- "File:<Commons title>" <media-id>`),
   write its alt text in `src/i18n/en/media.json`, and map the route in `src/data/heroes.yaml`
   (`compounds/<slug>: <media-id>`). MEDIA-GUIDE §4.
7. **Optional:** timeline events (`src/data/timeline.yaml` + `src/i18n/en/timeline.json`), tracker
   entries, an explainer (`docs/EXPLAINERS.md`), organ cards or an infographic plate.
8. **Check:** `npm run validate -- --only <slug>` until there are no errors in your files, look at
   `/en/compounds/<slug>/` in `npm run dev` in light and dark at phone width, then `npm run build`
   and `npm run check`. Nothing else needs registering: the compounds index, the grade matrix,
   routes and sitemaps pick the compound up from its data file.

**With the content workflow.** `.claude/workflows/write-content-groups.js` is a Claude Code workflow
that researches and writes a content group and then has an independent agent fact-check every
source, study and claim and fix them in place. To use it for a new compound, add
`compound('<slug>', '<research brief>')` to `ASSIGNMENTS`, add the slug to the planned routes in
`ROUTES`, and run the workflow with the assignment key as its argument. The writer owns exactly the
files listed for the group (data, MDX, sources file, glossary file, `research/<slug>.md`); read the
research notes and the fact-check log before anything is published.

---

## How to add a locale

Adding a language is a configuration and content change, not a code change. A translator can do
it without touching components, layouts or scripts; every user-visible word lives in
`src/i18n/<code>/` or in the MDX files. These steps were checked by building a test locale
(`fr`, preview) from configuration and content alone, on 23 October 2026.

1. **Register the locale** in `config/locales.json`. If it is listed already as `planned`, use that
   entry; otherwise copy an entry and fill in:
   - `code` (two letters, e.g. `de`; it is the first part of every URL), `name` (in the language
     itself), `englishName`, `bcp47` (e.g. `de-DE`), `hreflang`, `dateLocale` (dates and numbers);
   - `dir`: `ltr` or `rtl` (Arabic: `rtl`); `script`: `latin` or `arabic` (this picks the font);
   - `jurisdictions`: `{ "full": [...], "notes": [...] }`, codes from `JURISDICTIONS` in
     `src/schemas/vocab.ts` (never `WADA`, which every locale shows). `full` are the countries (or the
     EU) these readers live under, in display order: only their regulatory rows, products, approval
     answers ("Is it an approved medicine?"), contact cards, timeline and tracker items and regulator news
     are shown. `notes` get a contact card only. Everything else stays in `src/data/` for the locale
     that covers it. English: full US, UK, CA, AU; notes IE, NZ. Dutch: full NL, EU; notes BE (Polish, Turkish and
     Arabic are planned for readers in the Netherlands: NL, EU). Every code needs an entry in
     `src/data/jurisdictions.yaml`, and every compound a row for each full code of a published locale
     (the validator checks both; `STRICT_LOCALE_ROWS` in `scripts/validate-content.ts`);
   - `printsEmergencyNumbers`: `false` if the locale's readers live in more than one country (it then
     says "call your local emergency number" and never prints a number), `true` for one country. With
     `false`, the validator fails a page or UI string that prints 112 or any `emergency` number of the
     locale's full and notes jurisdictions (`src/data/jurisdictions.yaml`) as a phone number;
   - `status`: start with `planned`.
2. **Know the three statuses.**
   - `planned`: files are validated, nothing is built.
   - `preview`: every page is built under `/<code>/`. Untranslated pages and strings fall back to
     English: an untranslated page says so in a notice, a translated one carries a preview banner.
     All are `noindex`, and the locale is left out of hreflang and the sitemaps. Use this while
     translating. Once the locale is complete, add `"fallback": false`: nothing falls back any more
     (a page the locale lacks, such as another country's law page, is not built under `/<code>/`,
     and a missing UI string fails the build), so the preview builds exactly what publishing would
     (`fallsBack` in `src/lib/config.ts`). Dutch has it.
   - `published`: the locale must be complete. A missing UI string fails the build, missing
     text for a timeline, tracker or corrections item the locale shows fails the validator (timeline
     and tracker items by their jurisdictions, corrections by their `locales`; items the locale does
     not show need no text in it), a missing compound page is a warning, and the locale joins
     hreflang, the sitemaps and search indexing.
3. **Translate the UI strings.** For each file in `src/i18n/en/` make the same file in
   `src/i18n/<code>/` (same name, same keys; translate the values only, keep `{placeholders}`), and
   the same for the `glossary/` folder. Start with `common.json`, `beginner.json`, `compound.json`,
   `vocab.json` and `warning-signs.json` (the stop-now list, the most important safety text).
   Missing keys fall back to English while the locale is in preview.
4. **Write the emergency strings for the locale** in `common.json` (`emergency.call`, `now`,
   `ifSevere`, `jurisdiction`). Components never write a number themselves: `<JurisdictionCard>` fills
   `{number}` in `emergency.jurisdiction` from `src/data/jurisdictions.yaml` only when the locale has
   `printsEmergencyNumbers: true`. English never prints one ("call your local emergency number");
   Dutch says "Bel 112". Print a number only when the locale's readers live in one country, and agree it
   with the editor (CONTENT-GUIDE §1).
5. **Translate the pages.** For each page, create the same path under the new locale:
   `src/content/pages/<code>/<route>.mdx` and `src/content/compounds/<code>/<slug>.mdx`. Keep the file
   name, the components, every `<Cite>` and every `<Claim level>`; translate the frontmatter text and
   the prose, and change internal links to `/<code>/…` (the validator checks this). Add
   `translation: { method: translated, from: en, review: pending }` to the frontmatter. On compound
   pages the mechanism steps must keep the same `kind` and `level` as English (the validator
   fails otherwise): a translation never changes how strong the evidence is.
6. **Rewrite the legal pages for the jurisdiction; do not just translate them.** A reader's own
   country page (for Dutch, `legal/nl`) is rewritten for that reader from the national law and
   official sources, with `translation: { method: adapted, from: en, review: pending }`, or
   `method: native` if written from scratch (a native page shows no translation notice and no link to
   an English page; the Dutch `legal/nl`, `legal/eu` and `legal/be` are native). Legal pages stay at B1 and keep
   `reviewed_by: pending-legal-review` until a lawyer signs off. Only the locale's own jurisdictions
   get pages (`jurisdictions.full`, plus a notes page for `.notes`). The English European pages of
   23 October 2026 (`legal/nl`, `eu`, `be`, `de`) and every European passage cut from English are kept
   for the Dutch site in `research/for-nl-site/` (the snapshot and the groups' `MANIFEST-*.md`) and
   under the git tag `nl-source-2026-10-23`.
7. **Add the locale's commerce words** to `config/commerce-tokens.json` (`tokens.<code>`: buy,
   order, discount … in that language) and any national regulators, law databases or patient
   organisations you cite to `config/link-allowlist.json`. If the locale's readers must not see
   another locale's framing (as English must not see Dutch or EU framing), add a
   `locales.<code>` entry to `config/locale-residue.json` (patterns with levels `error`, `frame`,
   `warn`; CONTENT-GUIDE §1b); `npm run check:residue` then covers it.
8. **Right-to-left languages** need nothing beyond `dir: "rtl"`: every page then renders mirrored
   (`<html dir="rtl">`, logical CSS throughout). Check pages with `?pseudo=rtl` in the browser and
   with `npm run build:rtl`; nothing may clip or overflow, and amino-acid sequences, numbers and
   quantities stay left-to-right by design.
9. **Check and publish.** Set `status: preview`, run `npm run validate`, `npm run dev` and look at
   `/<code>/`; then `npm run build` and `npm run check`. When every page and string is translated
   and reviewed (`translation.review: reviewed`, `reviewed_by`, `reviewed_on`), set
   `status: published`. (Dutch: see [Publishing the Dutch site](#publishing-the-dutch-site).)

**Limits of "configuration only"** (found in the 23 October 2026 check):

- **New scripts need fonts.** Only Latin, Latin Extended and Arabic font files are shipped
  (`scripts/sync-fonts.mjs`, `src/styles/design/fonts.css`). A Cyrillic, Greek or other script needs
  new font files, which is a code change.
- **A new country needs a schema change.** Jurisdiction codes are fixed in `src/schemas/vocab.ts`
  (`EU, NL, DE, BE, UK, US, CA, AU, IE, NZ, WADA`). A legal page, a regulatory row or a contacts card
  (`src/data/jurisdictions.yaml`) for another country needs a code added there, plus its three names in
  `vocab.json` (`jurisdiction`, `jurisdictionInSentence`, `jurisdictionShort`); a product of that
  country also needs it in `PRODUCT_JURISDICTIONS`.
- **Locale codes with a region** (`pt-BR`) are not supported as URL codes: the glossary linker and
  the root page's language redirect expect a plain language code.
- The descriptions of the news feeds (`src/data/feeds.yaml`, `why:`) are English data, shown with
  `lang="en"` on every locale.

---

## The Dutch site

**State on 3 November 2026.** The Dutch site under `/nl/` is written in full: 40 pages, 21 compound
pages, every UI string and the glossary, each page group written and then fact-checked by an
independent agent (plan: `docs/PLAN-2026-10-27-dutch-site.md`), then a final sweep. It is
**published** (live since 3 November 2026, the owner's yes): indexed, in hreflang and the sitemaps, in
the live build. The owner's open review points and the reviewers' questions are in
`docs/REVIEW-2026-10-27-dutch-site.md`. The pages went live as they stood; of the owner decisions only
O8 (harm-reduction title), O13 (ipamorelin sport date) and O16 (publication entry and re-checks) were
applied first. The rest still wait for the owner's answers.

- **The locale** (`config/locales.json`, `nl`): `"status": "published"` (`"fallback": false` was set
  while it was a complete preview, so the preview built what publishing would), `jurisdictions: { "full": ["NL", "EU"], "notes": ["BE"] }`
  (Dutch and EU law in full; Belgium as short notes only: the notes page `/nl/legal/be/` and the BE
  contact card) and `printsEmergencyNumbers: true` (the pages say "Bel 112"). The reader is "je",
  never "u", in plain B1 Dutch. CONTENT-GUIDE §1b.
- **Where the files are:** pages in `src/content/pages/nl/`, compound pages in
  `src/content/compounds/nl/`, UI strings in `src/i18n/nl/` (the glossary in `src/i18n/nl/glossary/`),
  Dutch sources in `src/data/sources/nl-*.yaml` (`nl-research-*.yaml` hold the merged research: reuse
  their ids, never edit them). Shared facts stay in `src/data/`: the NL and EU rows and products in
  each compound's data file, the NL, EU and BE contact cards in `jurisdictions.yaml`, the Dutch
  timeline and tracker items.
- **Routes:** route keys and file names stay English (`/nl/safety/sterile-technique/`), so hreflang
  pairs the translations. `legal/nl`, `legal/eu` and `legal/be` exist only in Dutch, as native pages
  (`translation: { method: native }`: no translation notice, no link to an English page); the
  English country pages (`legal/us`, `uk`, `ca`, `au`, `ireland-and-new-zealand`) are not built under
  `/nl/`. On a page that exists in one language only, the language switcher links the other
  language's home page.
- **What writers read:** the brief `research/nl-spec/content-brief.md` (its section "Added after
  step 1" is binding), the style sheet `docs/STYLE-NL.md`, the fact-checked research in `research/nl/`
  and the groups' notes in `research/nl-notes/`.
- **Headings that other files link.** Do not rename them without changing the link in the same edit:
  the product check's anchors (`src/i18n/<locale>/product-check.json`, `anchors`, one per link, when
  the locale's heading slugs differ from the English ones in `src/data/product-check.yaml`; Dutch:
  `#wat-een-labrapport-wel-en-niet-zegt`, `#wanneer-je-een-flacon-weggooit`), the cookie banner's
  link to the funding page's privacy heading (`common.consent.moreAnchor`, default `your-privacy`;
  Dutch `je-privacy`) and the treatment-route anchors of `/nl/legal-routes/`. `npm run check:html`
  reports a broken one, but a missing anchor on another page only as a warning. CONTENT-GUIDE §10.
- **The advertising test.** Dutch courts ruled in 2026 that selling nothing does not by itself make
  a text information: what decides is praise and one-sided positive wording, and for an authorised
  medicine whether the text stays in line with the SmPC. So Dutch pages are balanced and purely
  informative, use the Dutch SmPC's wording for authorised medicines, show off-label use as
  off-label and never praise a product. CONTENT-GUIDE §1b ("The advertising test for Dutch pages").

### Publishing the Dutch site

Only after the owner's yes (a simple approve / don't-approve choice). The owner also approves the
Dutch text of the reform page (`the-case-for-reform`, the owner's signed opinion) and decides the open
points in `docs/REVIEW-2026-10-27-dutch-site.md`. Named medical and legal review is still pending; the
Dutch pages say so, as the English ones do.

1. In `config/locales.json` set `nl` to `"status": "published"` (`fallback` applies to preview only).
2. Add the Dutch publication entry to the corrections log: in `src/data/corrections.yaml` an entry
   such as `nl-v1-publication` (`kind: publication`, `routes: ["*"]`, `locales: [nl]`, the date of
   publishing), with its Dutch text in `src/i18n/nl/corrections.json`. The English entries stay
   `locales: [en]`. Until then the Dutch corrections page lists nothing.
3. `npm run validate` (a published locale needs the text of every timeline, tracker and corrections
   item it shows and a status row for each of its full jurisdictions), `npm run build`,
   `npm run check`.
4. Publish as under [Deployment](#deployment): the live build (`PUBLISHED_ONLY=1`) now includes `/nl/`,
   and the locale joins hreflang, the sitemaps and search indexing. The old English addresses
   `/en/legal/nl/`, `/en/legal/eu/` and `/en/legal/be/` then redirect to the Dutch pages (see
   "Removed addresses" under Deployment). Done on 3 November 2026.

---

## How the grading rubric works

Every compound gets **four separate grades**, stored once in its data file (`evidence:`) and shown
the same way in every language. They are **never added up, averaged or turned into one score**:
one number would hide the shape of the evidence, such as many rat studies from one laboratory and
almost nothing in people. The full rubric, with examples and its limits, is the page
[How we grade evidence](https://peptidesexplained.net/en/evidence/evidence-grading/)
(`/en/evidence/evidence-grading/`); the rules are also in CONTENT-GUIDE §7.

| Axis (`evidence.`) | Values | Assigned by |
|---|---|---|
| `human_clinical` | `none` · `case-reports` · `phase-1` · `phase-2` · `phase-3` · `authorised` | The highest **completed and published** human evidence. Registered trials and conference abstracts do not count. `authorised`: a regulator has granted marketing authorisation somewhere, for some use. |
| `preclinical_volume` | `minimal` (fewer than 10) · `moderate` (10–50) · `extensive` (more than 50) | A count of primary laboratory and animal publications, not reviews. |
| `independence` | `single-group-dominant` (more than about 70% from one group) · `few-groups` (2–4 groups) · `broadly-replicated` (many groups, key findings repeated) | Authors and affiliations of the primary studies. |
| `safety` | `uncharacterised` · `partial` (some human exposure, short-term or small) · `well-characterised` (large trials plus post-marketing surveillance) | Human data only. |

- **How a grade is assigned.** An editor applies the written rule to the published evidence and
  explains each grade in one or two sentences in the page's `grade_rationale` ("Why these grades").
  A borderline case says so in its reason rather than hiding the judgement.
- **Claim badges are separate.** Each claim in the text carries its own evidence level
  (`hypothesis`, `in-vitro`, `animal`, `human-limited`, `human-controlled`, `established`), and each
  step of a mechanism chain its own level, because the weakest link limits the chain.
- **What a grade does not say.** It is not a verdict that a compound works or is harmless, and it
  is about the molecule as studied, not about a vial bought outside the legal supply chain.
- **How a grade changes.** Only for a published reason (a trial published in full, an independent
  replication, a retraction, or a mistake found). The data file is changed, the reason is
  rewritten, and the change goes into the corrections log (`src/data/corrections.yaml`, shown on
  `/en/about/corrections/`).

---

## Media rules

The full rules are in `docs/MEDIA-GUIDE.md`. In short:

- **Every page gets a photograph** in natural colour (`src/data/heroes.yaml`). Self-hosted only, no
  image CDNs or embeds.
- **Licences:** public domain, CC0, CC BY and CC BY-SA only. Never NC, ND, "editorial use", unknown
  or pharmaceutical-company sources (Servier Medical Art included). The Commons tool reads the
  licence and refuses anything else; every image is credited (title, author, source, licence) on
  `/sources/#image-credits`.
- **Never show** a product, vial, pen or brand-like label, before/after pictures, glamorised
  injecting, needles in skin or identifiable patients.
- **AI artwork** (`npm run media:generate`) contains no text, letters or numbers; all words are
  real HTML on top, so they translate. It is registered as `review: pending` and must be checked by
  a person for scientific and anatomical errors, with a review note, before it is set to
  `review: ok`. The validator warns about pending artwork, and a page must not ship with it.
- **Cost log.** Every billed image call appends a line to `media-usage.jsonl` in the root of the
  main checkout (git-ignored); `npm run media:generate -- --usage` prints every image and its
  estimated cost. The OpenAI key is read from `.env` (git-ignored) and is never printed or logged.
- **Text equivalents.** Every image has B1 alt text in `src/i18n/<locale>/media.json`; every
  diagram, plate and explainer has a full text equivalent in the page.

---

## Review status

**No page has been reviewed by a named doctor or lawyer yet.** Pages carry
`reviewed_by: pending-medical-review` (legal pages: `pending-legal-review`; the about pages:
`editorial-board`), and the site says so in one quiet sentence at the foot of each page. It never
pretends a review happened: schema.org `reviewedBy` is emitted only for an active, named person.

To add a named reviewer:

1. Add the person to `src/data/people.yaml` with `kind: person`, `role: medical-reviewer` (or
   `legal-reviewer`, `translator`), `name`, `credentials` (the professional registration in the
   reviewer's own country), `big_number` for a doctor registered in the Netherlands, an optional
   `url`, and `active: true`.
2. On each page they signed off, set `reviewed_by: <their id>` and `last_reviewed: <date>`: in the
   page's frontmatter for pages, and in `src/data/compounds/<slug>.yaml` for compound pages.
3. For a translation, set `translation.review: reviewed`, `reviewed_by` and `reviewed_on` in the
   translated file.
4. Update the "review status" table on `/en/about/editorial-policy/`
   (`src/content/pages/en/about/editorial-policy.mdx`).

---

## Deployment

- **Static output.** `npm run build` writes a plain static site to `dist/` (directory URLs with a
  trailing slash, a search index under `dist/pagefind/`). No server, no cookies, no third-party
  requests. Any static host works.
- **Live site: https://peptidesexplained.net, hosted on Lovable** (project "Peptides Explained",
  https://lovable.dev/projects/fca61506-c115-439a-852a-25c6ed61689a; its GitHub repository is
  `Warffamous/peptides-explained-d9a34a3a`, private). Lovable runs its own TanStack Start app, so this
  site is not built there: the pre-built pages go into that repository's `public/`, and its
  `src/server.ts` serves folder addresses (`/en/`) from their `index.html`, redirects `/en` to `/en/`
  and answers unknown addresses with our `404.html`. To publish an update:
  1. `npm run validate`, then `PUBLISHED_ONLY=1 npx astro build --outDir dist-live && npx pagefind
     --site dist-live --silent` (bash; `npm run build:live` does the same where `VAR=1 cmd` works),
     then delete `dist-live/_headers`. `PUBLISHED_ONLY=1` leaves out locales still in `preview`, so a
     language goes live only when its status is `published`.
  2. Run the three checks on `dist-live`: `npx tsx scripts/check-html.ts dist-live`,
     `npx tsx scripts/check-no-commerce.ts dist-live` and
     `npx tsx scripts/check-locale-residue.ts --dist dist-live` (residue: no `error` hit may remain
     once `STRICT_RESIDUE` is true).
  3. Replace the Lovable repository's `public/` with the contents of `dist-live/`, commit, push to
     `main`, then publish in Lovable (or with the Lovable connector's deploy).
  The host sets its own security cookie (`__cf_bm`, Cloudflare bot protection) and ignores `_headers`.
- **Removed addresses.** The English refocus removed `/en/legal/nl/`, `/en/legal/eu/`, `/en/legal/be/`
  and `/en/legal/de/` from the build. The static build has no redirects, so they are handled in the
  Lovable app's `src/server.ts` (`MOVED`): since the Dutch site went live (3 November 2026) the first
  three answer 301 to their Dutch pages (`/nl/legal/nl/`, `/nl/legal/eu/`, `/nl/legal/be/`), and
  `/en/legal/de/` answers 301 to `/en/legal/`. Check each with a request after every deploy.
- **Any other static host** works with `dist/` as it is (`public/_headers` sets long caches for the
  hashed stylesheet, `/_astro/` and fonts on Cloudflare Pages and Netlify).
- **The canonical domain** (canonical links, hreflang, sitemaps, robots, the commerce check's own
  host) comes from `siteUrl` in `config/site.json`. Change it there when the site moves; the
  `SITE_URL` environment variable only changes Astro's own `site` setting.
- **CI** (`.github/workflows/ci.yml`, every push and pull request): `npm ci`, `npm run build`
  (with the validator and stylelint), `check:commerce`, `check:html` (`check:residue` is not in CI
  yet: add it when `STRICT_RESIDUE` is set to true), then Lighthouse on mobile
  (`lighthouserc.json`: at least 95 on all four categories, zero layout shift).
- **The daily newsfeed** (`.github/workflows/news.yml`, 05:17 UTC, or run by hand): `npm run news`,
  then `npm run validate`, then it commits `src/data/news.json` to the branch it runs on (GitHub runs
  scheduled workflows on the default branch) as "newsfeed-bot". The push triggers a normal deploy.
  A failing feed keeps its earlier items and never fails the job.

---

## More documentation

- `docs/CONTENT-GUIDE.md`: the contract for every page (read first).
- `docs/STYLE-NL.md` and `research/nl-spec/content-brief.md`: the Dutch style sheet and the Dutch
  brief (read both before writing Dutch).
- `docs/MEDIA-GUIDE.md`: images and AI artwork.
- `docs/EXPLAINERS.md`: animated explainers.
- `docs/design/DESIGN-DIRECTIONS-2026-10.md`: the design decision and its rules.
- `/en/about/editorial-policy/`, `/en/about/funding/`, `/en/about/corrections/` on the site.
