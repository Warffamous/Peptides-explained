# Peptides Explained

An independent, non-commercial, multilingual public-health reference on therapeutic peptides:
what they are, what the evidence shows, what the law says, and how to lower the risk for people who
already use them. Static site built with [Astro 5](https://astro.build/), one design ("Mechanism",
`docs/design/DESIGN-DIRECTIONS-2026-10.md`), light and dark following the reader's setting.

**State on 23 October 2026.** English is complete: 43 pages, 21 compound pages (11 full pages and
10 short Tier 2 pages, flagged "Short page"), plus the glossary, sources, news and search pages.
Dutch (`nl`) is in preview: it is built with English fallback pages, a banner and `noindex`, and is
translated next. Medical and legal review by named people is pending (see [Review status](#review-status)).

---

## What this site is, and what it is not

- **It sells nothing, links to no seller and recommends no vendor.** No ads, no sponsors, no
  affiliate or referral links, no cookies, no tracking. The footer says so on every page, and
  `/en/about/funding/` explains it.
- **The absence of commerce is what keeps the information legal.** Dutch law (Geneesmiddelenwet
  art. 84–85, implementing Directive 2001/83/EC) bans advertising for medicines without a marketing
  authorisation, and "advertising" is read broadly: a commercial purpose turns information into
  advertising. So every outbound link must be on `config/link-allowlist.json` (regulators, law,
  PubMed/DOI, universities, anti-doping bodies, patient and harm-reduction organisations), and the
  build fails on any commerce word in a link or call to action (`config/commerce-tokens.json`).
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
| `npm run validate` | The content validator (`scripts/validate-content.ts`): schemas, sources, the editorial guardrails, plain-language limits, emergency-number rule, media and glossary checks. Fails on errors. `npm run validate -- --only <part-of-path>` reports one file or group, e.g. `--only bpc-157` or `--only legal/nl`. |
| `npm run lint:css` | Stylelint. Bans physical left/right properties so every layout mirrors in right-to-left scripts. |
| `npm run check:commerce` | After a build: every outbound URL in `dist/` is on the allowlist, and no link or button carries a commerce word, affiliate parameter, redirector or URL shortener. "The load-bearing wall". |
| `npm run check:html` | After a build: one `h1`, no skipped heading levels, landmarks, `lang` and `dir`, unique ids, every internal link and `#` target resolves, alt text and accessible names, no physical-direction inline styles, first-load JavaScript at most 40 KB gzipped per page. |
| `npm run check` | Both checks above. |
| `npm run build:rtl` | Builds every page with `dir="rtl"` into `dist-rtl/` (`PSEUDO_RTL=1`, POSIX syntax: use Git Bash, or in PowerShell `$env:PSEUDO_RTL='1'; npx astro build --outDir dist-rtl`). In a browser, `?pseudo=rtl` does the same for one tab (`?pseudo=off` ends it). |
| `npm run news` | Fetches headlines from the vetted feeds in `src/data/feeds.yaml` into `src/data/news.json` (normally run by the daily GitHub Action). |
| `npm run media:commons` / `npm run media:generate` | Register an open-licensed image from Wikimedia Commons, or make text-free AI artwork (`docs/MEDIA-GUIDE.md`). |

The validator has a known baseline of warnings; a change should not add errors and should not add
warnings in the files it touches.

---

## Project structure

```text
config/
  locales.json            locales and their status (planned | preview | published)
  site.json               brand, canonical site URL, "content as of" date
  link-allowlist.json     the only hosts any page may link to
  commerce-tokens.json    commerce words per locale; a link or button containing one fails the build
  readability-waivers.json  time-boxed waivers for the plain-language limits
docs/
  CONTENT-GUIDE.md        the editorial contract (guardrails, voice, page and compound rules, components)
  MEDIA-GUIDE.md          images: licences, AI artwork review, alt text, cost log
  EXPLAINERS.md           animated explainers and their clarity rules
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
scripts/                  validator, commerce and HTML checks, newsfeed, media tools
research/                 research notes and verification logs per content group
.claude/workflows/write-content-groups.js   the research, write and fact-check workflow (below)
.github/workflows/        ci.yml (build and checks on every push) and news.yml (daily newsfeed)
```

Routes come from file paths and are English in every locale (`src/content/pages/nl/safety/sterile-technique.mdx`
→ `/nl/safety/sterile-technique/`), so translations pair up for hreflang. The compounds index, the
grade matrix, the sitemaps and the compound routes are generated from the data files.

---

## How to add a compound

1. **Choose the slug and tier.** The slug is English kebab-case (`bpc-157`). Tier 1 is a full page
   (`status: complete`), Tier 2 a short page (`status: stub`), which only needs the sections
   `what-it-is`, `evidence`, `regulatory` and `risks`, a full data file and a summary.
2. **Register the sources** in `src/data/sources/<group>.yaml` (one file per topic; ids are global,
   so search the folder for the DOI or URL first and reuse an existing id). Copy the metadata from
   the PubMed record or the fetched page, never from memory, and record how you checked it
   (`verified: pubmed | doi | url | registry`). Regulator and law URLs must be on
   `config/link-allowlist.json`. CONTENT-GUIDE §11.
3. **Write the data file** `src/data/compounds/<slug>.yaml` (CONTENT-GUIDE §5.1; schema in
   `src/schemas/index.ts`): names, identifiers, formula and mass, sequence, `category`, the four
   evidence grades (see [the rubric](#how-the-grading-rubric-works)), dated and sourced regulatory rows
   (EU, NL, US and WADA required; DE, BE and UK where known), structured `studies` (at least 3 for a
   complete page), `authorised_products` or `national_authorisations` where the category needs them,
   `related`, and the review fields `last_reviewed: <date>` and `reviewed_by: pending-medical-review`.
   The "At a glance" answers are derived from this file, so keep it exact.
4. **Write the prose** `src/content/compounds/en/<slug>.mdx` (CONTENT-GUIDE §5.2–5.4, §9.1): the
   frontmatter (`summary`, `lede`, `glance`, `grade_rationale`, `mechanism`, one `studies` entry per
   study id, `regulatory_notes`, `indications` for authorised products) and the `<Section id="…">`
   blocks in the fixed order. Every factual claim gets a `<Cite id>`; every efficacy or mechanism
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
   - `jurisdiction`: the country whose law and services most of these readers live under
     (recorded for editors; Polish, Turkish and Arabic are planned for readers in the Netherlands);
   - `status`: start with `planned`.
2. **Know the three statuses.**
   - `planned`: files are validated, nothing is built.
   - `preview`: every page is built under `/<code>/`. Untranslated pages and strings fall back to
     English: an untranslated page says so in a notice, a translated one carries a preview banner.
     All are `noindex`, and the locale is left out of hreflang and the sitemaps. Use this while
     translating.
   - `published`: the locale must be complete. A missing UI string fails the build, missing
     timeline, tracker or corrections text fails the validator, a missing compound page is a
     warning, and the locale joins hreflang, the sitemaps and search indexing.
3. **Translate the UI strings.** For each file in `src/i18n/en/` make the same file in
   `src/i18n/<code>/` (same name, same keys; translate the values only, keep `{placeholders}`), and
   the same for the `glossary/` folder. Start with `common.json`, `beginner.json`, `compound.json`,
   `vocab.json` and `warning-signs.json` (the stop-now list, the most important safety text).
   Missing keys fall back to English while the locale is in preview.
4. **Write the emergency strings for the locale** in `common.json` (`emergency.call`, `now`,
   `ifSevere`, `jurisdiction`). Components never write a number themselves. English never prints
   one ("call your local emergency number"); Dutch says "Bel 112". Print a number only when the
   locale's readers live in one country, and agree it with the editor (CONTENT-GUIDE §1).
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
   `method: native` if written from scratch. Legal pages stay at B1 and keep
   `reviewed_by: pending-legal-review` until a lawyer signs off.
7. **Add the locale's commerce words** to `config/commerce-tokens.json` (`tokens.<code>`: buy,
   order, discount … in that language) and any national regulators, law databases or patient
   organisations you cite to `config/link-allowlist.json`.
8. **Right-to-left languages** need nothing beyond `dir: "rtl"`: every page then renders mirrored
   (`<html dir="rtl">`, logical CSS throughout). Check pages with `?pseudo=rtl` in the browser and
   with `npm run build:rtl`; nothing may clip or overflow, and amino-acid sequences, numbers and
   quantities stay left-to-right by design.
9. **Check and publish.** Set `status: preview`, run `npm run validate`, `npm run dev` and look at
   `/<code>/`; then `npm run build` and `npm run check`. When every page and string is translated
   and reviewed (`translation.review: reviewed`, `reviewed_by`, `reviewed_on`), set
   `status: published`.

**Limits of "configuration only"** (found in the 23 October 2026 check):

- **New scripts need fonts.** Only Latin, Latin Extended and Arabic font files are shipped
  (`scripts/sync-fonts.mjs`, `src/styles/design/fonts.css`). A Cyrillic, Greek or other script needs
  new font files, which is a code change.
- **A new country needs a schema change.** Jurisdiction codes are fixed in `src/schemas/vocab.ts`
  (`EU, NL, DE, BE, UK, US, WADA`). A legal page, a regulatory row or a contacts card
  (`src/data/jurisdictions.yaml`) for another country needs a code added there, plus its name in
  `vocab.json`.
- **Locale codes with a region** (`pt-BR`) are not supported as URL codes: the glossary linker and
  the root page's language redirect expect a plain language code.
- The descriptions of the news feeds (`src/data/feeds.yaml`, `why:`) are English data, shown with
  `lang="en"` on every locale.

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
   `legal-reviewer`, `translator`), `name`, `credentials` (for a Dutch doctor, the BIG
   registration), `big_number` where it applies, an optional `url`, and `active: true`.
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
  2. Run `check:html` and `check:commerce` on `dist-live` (`npx tsx scripts/check-html.ts dist-live`).
  3. Replace the Lovable repository's `public/` with the contents of `dist-live/`, commit, push to
     `main`, then publish in Lovable (or with the Lovable connector's deploy).
  The host sets its own security cookie (`__cf_bm`, Cloudflare bot protection) and ignores `_headers`.
- **Any other static host** works with `dist/` as it is (`public/_headers` sets long caches for the
  hashed stylesheet, `/_astro/` and fonts on Cloudflare Pages and Netlify).
- **The canonical domain** (canonical links, hreflang, sitemaps, robots, the commerce check's own
  host) comes from `siteUrl` in `config/site.json`. Change it there when the site moves; the
  `SITE_URL` environment variable only changes Astro's own `site` setting.
- **CI** (`.github/workflows/ci.yml`, every push and pull request): `npm ci`, `npm run build`
  (with the validator and stylelint), `check:commerce`, `check:html`, then Lighthouse on mobile
  (`lighthouserc.json`: at least 95 on all four categories, zero layout shift).
- **The daily newsfeed** (`.github/workflows/news.yml`, 05:17 UTC, or run by hand): `npm run news`,
  then `npm run validate`, then it commits `src/data/news.json` to the branch it runs on (GitHub runs
  scheduled workflows on the default branch) as "newsfeed-bot". The push triggers a normal deploy.
  A failing feed keeps its earlier items and never fails the job.

---

## More documentation

- `docs/CONTENT-GUIDE.md`: the contract for every page (read first).
- `docs/MEDIA-GUIDE.md`: images and AI artwork.
- `docs/EXPLAINERS.md`: animated explainers.
- `docs/design/DESIGN-DIRECTIONS-2026-10.md`: the design decision and its rules.
- `/en/about/editorial-policy/`, `/en/about/funding/`, `/en/about/corrections/` on the site.
