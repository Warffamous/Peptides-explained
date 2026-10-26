# Refocus: checks and docs for English (group `checks-docs-en`, 24 October 2026)

Code and documentation only: no page, i18n string, data row or source was written by this group. Inputs:
`research/refocus-spec/content-brief.md` (followed as written), `docs/CONTENT-GUIDE.md`, `src/schemas/*`,
`src/lib/jurisdictions.ts`, `config/locales.json`, `src/data/jurisdictions.yaml`, `research/refocus-notes/merge.md`.
An earlier run of this assignment was cut off; its draft (residue library, config and check script, emergency
library, commerce-in-headings checks, guardrail warnings, cross-page anchor check, most of the CONTENT-GUIDE update)
was reviewed against the brief, kept where right, and finished and corrected as listed below. That second run's
work was committed in the checkpoint `1b7304f`; a third run (section 10) re-checked it against the brief, re-ran
every test on the current corpus and made three small fixes.

## 1. Files

| File | What |
|---|---|
| `scripts/lib/residue.ts` (new) | the residue scan: sources (MDX body + frontmatter, i18n JSON incl. glossary and media captions, the data text a locale shows) and built HTML (`scanDist`); one switch `STRICT_RESIDUE = false` |
| `config/locale-residue.json` (new) | English patterns (error / frame / warn), `allowFiles` (publisher line), `allowStrings`, `allowPhrases` |
| `scripts/check-locale-residue.ts` (new) | CLI: `--dist <dir>`, `--only`, `--details`, `--strict` |
| `scripts/lib/emergency.ts` (new) | which numbers count as a printed emergency number, and when |
| `scripts/validate-content.ts` | residue as warnings (behind `STRICT_RESIDUE`, imported from residue.ts); emergency rule generalised; commerce words in titles/headings/questions/figure titles/diagram captions/labels = errors; seller-judging warnings in body, frontmatter and English i18n; header comment. (`STRICT_LOCALE_ROWS = true` is the merge group's change, kept.) |
| `scripts/check-no-commerce.ts` | headings h1–h6 + component title elements (incl. `.diagram__caption`) and every non-link `[aria-label]` in dist; publisher-law header comment |
| `scripts/check-html.ts` | cross-page anchors `/<locale>/sources/#source-*` and `#image-*` must exist (error); other missing cross-page anchors are warnings |
| `scripts/lib/load.ts` | `stripNonCommerce` ("in order to", "the order of", "deal with", an order as a legal instrument) |
| `package.json` | `check:residue` (`tsx scripts/check-locale-residue.ts --dist dist`), added to `check` |
| `docs/CONTENT-GUIDE.md`, `README.md` | see section 5 |
| `research/for-nl-site/MANIFEST-checks-docs-en.md` | what left the docs (European framing), with where the old text is |

Line endings: `docs/CONTENT-GUIDE.md`, `README.md`, `scripts/validate-content.ts`, `scripts/check-no-commerce.ts` and
`scripts/lib/load.ts` were CRLF in the working copy (core.autocrlf=true checkout); now LF, as the brief asks. Git
normalises on commit, so the diff shows only real changes.

## 2. Residue check (task 1)

- **Levels** (assignment: error = Dutch/Belgian/German terms and EU reader framing; warn = EU/EMA/EPAR/CHMP/Europe;
  the marker exempts warn/frame only). Implemented as three levels: `error` (Dutch, Belgian, German terms: no marker
  exempts them, only `allowFiles`/`allowStrings`/`allowPhrases`), `frame` (EU reader framing: "in/outside the EU",
  "EU-wide", "European Union", "EU member states", "the EU label/rules/…", "in Europe", euro amounts, and
  "German"/"Germany" so that thalidomide history can stay with the marker), `warn` (EU, EMA/EMEA, EPAR, CHMP,
  Europe/European). While `STRICT_RESIDUE` is false every hit is a warning; when true, error and frame hits fail the
  validator and `npm run check`.
- **Brief grep → config:** every term of the brief's grep is a pattern; as whole words, and codes (NL, IGJ, CBG,
  MEB, NHG, GGD, SEH, BIG, AMG, NADA, EU, EMA) case-sensitive. The raw grep's `epar` and `meb\b` also matched
  "separate" and words ending in "-meb"; `nada\b` matched "Granada": the config does not. Extra Dutch/German terms
  added because they occur in the 23 October corpus: Nederland, Trimbos/Jellinek, Opiumwet, Tweede Kamer, KNMP,
  Arzneimittel, Bundes-.
- **Marker:** `{/* residue-ok: … */}` on the line before or at the end of the same line (MDX), `# residue-ok: …`
  (YAML frontmatter/data). In a table row: inside the last cell.
- **allowFiles:** `about/index`, `about/editorial-policy`, `about/funding`, each for `netherlands` and `dutch` only.
  The cut-off draft also allowed `geneesmiddelen`, `big`, `big-register`, `wet-big` on editorial-policy and
  `geneesmiddelen` on funding; narrowed, because the brief allows only the publisher line and the current about pages
  (about group) use only "Netherlands"/"Dutch" (0 hits after narrowing).
- **allowStrings:** thalidomide timeline text (`german`, history); `corrections.json`
  `tesamorelin-approval-answer.detail` (`eu`: the log records what the page said before the refocus).
- **allowPhrases (new):** "Eli Lilly Nederland B.V." (UK Mounjaro holder in `src/data/compounds/tirzepatide.yaml`,
  rendered in the products table: was an error hit in both scans) and "Europe PMC" (a news feed's name in
  `src/data/feeds.yaml`). Skipped in every scan, dist included.
- **What it reads:** MDX (ids, codes, URLs, link targets, comments, imports and code masked; `regulatory_notes` of
  rows English does not show skipped); i18n JSON (keys of jurisdictions English never shows skipped; timeline/tracker/
  corrections items English does not show skipped; media captions of photos used only by another locale skipped);
  data: contact cards of US/UK/CA/AU/IE/NZ, schedule notes of the visible rows, names and holders of visible
  products, the visible feeds.
- **Dist mode:** `dist/<locale>/**.html`; language menus removed; markers do not survive the build, so frame hits are
  warnings there. Cited titles and names are warnings (reference lists, sources page, "Based on" lists of explainers,
  plates, timeline and image credits, a figure card's "Source" line, news headlines and summaries): added in this
  run after the live build showed "Acta Orthopaedica Belgica" (a news item's journal) as an error.
- **Results (24 October 2026, while the content groups are writing):** source scan went from 754 error/frame + 260 warn
  hits in 51 files (first run of this session) to 266 error/frame + 55 warn in 21 files (last run). Remaining files
  (other groups'): glossary guides/legal-b/safety-b/final-qa/tirzepatide/history/retatrutide/evidence/stubs-b, retatrutide,
  talking-to-your-doctor, the-case-for-reform, safety/product-risk, before-you-consider, monitoring, injection-safety,
  sterile-technique, compounds/index, index, product-check.json, tirzepatide.mdx. Every hit inspected in the first
  full listing was genuine residue; false positives found and fixed: the holder name and Europe PMC (above).
  Dist mode tested on `dist-live/` (the live 23 October build): runs, reports as designed.

## 3. Emergency numbers (task 2)

- `scripts/lib/emergency.ts`: numbers = 112 + the `emergency` arrays in `src/data/jurisdictions.yaml` for the
  locale's full + notes codes (English: 000, 111, 112, 911, 999), also written 9-1-1 etc., plus the words
  "triple zero" and "nine-one-one". Controlled by `printsEmergencyNumbers` in `config/locales.json` (only locales
  with `false` are checked: English).
- Lookarounds: not after a letter/digit/`.`/`,`/`/`/`-`/`#`/`+`/currency sign, not after a digit and a space
  ("10 000"), not before a letter/digit, `.x`/`,x` or a space and three digits. Heuristics kept from the 112 rule
  (calling word within the window, or any number in safety strings: stop callouts, `glance.stop_signs`, i18n keys
  emergency/stop/warning/notice/call); count and measurement words after the number (extended in this run: daltons,
  deaths, events, reports, records, times, vials, pens, parcels, units, samples, studies, trials, papers, sites,
  women, men, babies), position words before it; "NHS 111" (service name) allowed.
- Fixed in this run: "triple zero" inside an id or URL (`au-triple-zero`, `/triple-zero/`) no longer matches.
- **Corpus test** (scratch script, not committed): 45 unit cases pass (e.g. "Call 911 now" hit; "1,000", "10 000",
  "£1000", "$911", "111 participants", "112 mg/dL", "week 112", "1999", "99.9%", "NHS 111", "111.wales", "988",
  "811", "Health811", "911 times", "112 vials" no hit). Whole English corpus, working tree and
  `nl-source-2026-10-23` (pages, compounds, i18n): **0 raw matches, 0 phone numbers** (every 3-digit candidate there
  is part of a grouped number such as 10,000 or a position such as "week 112"). Enabled as errors (as the 112 rule
  was). No hit to report.

## 4. Commerce words and guardrails (tasks 3–5)

- Validator errors for commerce tokens (all locales' lists) after `stripNonCommerce`, in: frontmatter `title` and
  `nav_title` (the h1 and menu label; added in this run), `##`–`######`, `<Lead question>`, `<InDetail title>`,
  `<FaqItem q>`, `<Callout title>`, `<KeyNumber label>`, `title` of Compare/KeyNumber/IconArray/TimeStrip, and
  `<Diagram caption>` (added in this run: it is the figure's caption and its accessible name, `aria-labelledby`).
  `check-no-commerce.ts` (dist): h1–h6, `.lead__q`, `.in-detail__title`, `.fig__title`, `.key-number__title`,
  `.key-number__label`, `.callout__title`, `.diagram__caption`, every non-link `[aria-label]`.
- `stripNonCommerce` extended in this run with an order as a legal instrument ("executive order", "court order",
  "(Amendment) Order 2026"), so UK/US statutory titles in headings are not flagged.
- **Current offenders (for the content groups; validator, 24 October 2026, last run):**
  - `src/content/pages/en/about/funding.mdx`: `<Diagram caption>` "How a link to a shop could turn information into an advert." ("shop")
  - earlier in the session, since rewritten or removed by their groups: `legal/research-use-only.mdx` `<Lead question>`
    "Is it legal for me to buy a research-labelled peptide?"; `legal/uk.mdx` `<Diagram caption>` "How the import rules
    work when you buy a medicine for yourself." and "When a doctor may order a 'special' …"; `legal/nl.mdx` (page
    removed).
  - In the live build `dist-live/` (23 October): the same, plus editorial-policy's figure title "… help anyone buy a
    product" (already rewritten in the source).
- Seller-judging warnings (task 4): "reputable", "trusted lab/laboratory/source/seller/vendor/supplier", "legit",
  "third-party tested", "uses it himself/herself/themselves", "vendor(s)", plus the existing "where to buy" /
  "reliable source…". Quoted occurrences (the lab-report ladder quoting the claims it rejects) are skipped, attribute
  values never. Run on the MDX body, on frontmatter text and on the English i18n strings (the last two added in this
  run). Pattern test: 14 cases pass. Current hits: none (one earlier, sharps-disposal "our list of trusted sources",
  since rewritten).
- `check-html.ts` (task 5): tested on a two-page fake dist (missing `#source-missing` and `#image-missing` → errors,
  `#other-missing` → warning) and on `dist-live/`: 75 distinct source/image anchors, 0 errors, 0 warnings.

## 5. Docs (task 6)

CONTENT-GUIDE: §1 (Dutch law as the publisher's law; Health Canada's 2023 advertising guidance quoted precisely from
canada-legal.md §11.3, source `ca-hc-advertising-distinction-2023`; commerce words in titles/headings/questions/figure
titles/captions/labels; seller words; the emergency-number rule for English with the corpus test), PCAC element 5
("not an approved medicine in the US, the UK, Canada or Australia … changes nothing outside the US"; re-check note
from us-uk-routes.md US-20), §1a (the lab-report ladder, copied from the brief), §1b (new: audience and jurisdictions
from `config/locales.json`, what leaves and what may stay with the marker, words, country cautions, the residue check
with levels, marker, allow lists, dist mode), §2 (no UK-only words), §3 (new rows), §4 (jurisdiction pages, the notes
page, `JurisdictionCards`), §5.1 (rows for US/UK/CA/AU from the real BPC-157 data, shortened; EU rows kept for the Dutch
site; `discontinued` with the tesamorelin CA dates; schedule only where the instrument names the substance; the WADA
example's source id corrected from the non-existent `wada-2026-list` to `wada-2022-list-modifications, wada-2026-list-en`),
§5.2 (regulatory_notes for the locale's rows; per-country regulatory prose; route anchors; prose agrees with the
derived answers), §5.4 (US and CA product examples copied from semaglutide.yaml and tesamorelin.yaml; which label
hosts; derived approval keys), §6 (dose range "as written in the label" of each country), §9 (`<JurisdictionCards>`,
`<JurisdictionCard code="US">`, ProductCheck → ladder, per-locale heroes), §9.1 (fact sheet "Approved in"), §10
(routes, removed European pages, fixed anchors, cross-page anchor check), §11 (reuse ids, refocus-*.yaml, own group
file, no source naming a business, the reader's own regulator; example source switched to `fda-label-wegovy`, copied
from `src/data/sources/semaglutide.yaml`), §12 (country terms, no Dutch terms, glossary tooltips).

README: state line (24 October 2026; 42 pages, 21 compound pages, 11 full + 10 short, counted from the files),
"What this site is" (audience; publisher; consent-based host statistics as on `/en/about/funding/`; emergency
numbers), commands (`check:residue`; what validate/check:commerce/check:html now check), project structure
(`config/locale-residue.json`, `scripts/lib/{emergency,residue}.ts`, `research/{refocus,refocus-spec,refocus-notes,
for-nl-site}/`, `refocus-en.js`), how to add a compound (rows from `config/locales.json`), how to add a locale
(`printsEmergencyNumbers` and the numbers checked; residue config; legal pages only for own jurisdictions and the
Dutch snapshot), review status (credentials in the reviewer's country), Deployment (residue check on `dist-live`;
301 redirects for `/en/legal/{nl,eu,be,de}/` to be added in the Lovable app's `src/server.ts` — checked read-only on
24 October 2026: not there yet; CI does not run `check:residue` yet).

## 6. New facts and their sources

No new facts on the site. In the docs: Health Canada advertising guidance (`ca-hc-advertising-distinction-2023`,
research/refocus/canada-legal.md §11.3, quoted wording); PCAC re-check (`fda-pcac-2026-07-meeting` etc., us-uk-routes.md
US-20); tesamorelin CA dates and products, BPC-157 rows, semaglutide US product (copied from the merged data files);
"Health811", "NHS 111", "healthdirect" (names in `src/data/jurisdictions.yaml`). No new source entry, so no
`src/data/sources/en-checks-docs-en.yaml`.

## 7. No-loss check

Docs and scripts carry no `<Cite>`. Source ids named in the docs before (git show nl-source-2026-10-23:docs/CONTENT-GUIDE.md)
and after: `ema-medicines-search`, `ema-epar-wegovy`, `ema-epar-ozempic`, `ema-orphan-thymalfasin-eu-3-02-110`,
`fda-pcac-2024-thymosin-alpha-1-briefing`, `reid-thompson-2021-tazpower`, `fda-2025-forzinity-approval`,
`karaa-2023-mmpower-3`, `wada-2026-list-en`, `usada-iv-infusions`, `wilding-2021-step-1` are all still examples in the
guide, except `ema-epar-wegovy`/`ema-epar-ozempic` in the §5.2 glance example and the §5.4/§11 examples, replaced by the
FDA labels (`fda-label-wegovy`, `fda-label-ozempic`, `ca-pm-egrifta-2015`) because English examples should use the
reader's own regulator. These are documentation examples, not citations; listed in the manifest. Two example ids
were wrong and are corrected: the WADA row's `wada-2026-list` (no such id; the real rows cite `wada-2026-list-en`) and
the §11 example `sikiric-2018-review`, whose metadata is the 2011 review (PubMed 21548867, DOI
10.2174/138161211796196954, Curr Pharm Des 2011, checked on PubMed today): renamed `sikiric-2011-gi-review` to follow
the firstauthor-year rule. Neither id is in the registry or cited on any page.

## 8. Validation

- `npx tsx scripts/validate-content.ts` (last run before the final runs): 11 errors, 193 warnings, all in files of
  other groups (start-here unknown source ids while its sources file is written; about/funding commerce caption).
  None in files I own (scripts and docs are not validated as content). Warnings are content warnings (residue while
  `STRICT_RESIDUE` is false, readability, review notices).
- `npx tsc --noEmit -p .`: no error in `scripts/` (pre-existing errors in `src/scripts/*` only).
- Final runs (third run, section 10): `npm run validate` 0 errors, 181 warnings (none in files I own; scripts and
  docs are not content); `npm run build` passes (136 pages); `npm run check`: `check:commerce` passes,
  `check:html` fails with 2 errors that are not mine (`the-case-for-reform.mdx` still has `related: legal/nl`, a
  page that no longer exists; the case-for-reform group's rewrite removes it), so the chain stops there;
  `check:residue --dist dist`, run on its own, exits 0 with warnings (expected while the content is mid-rewrite).

## 9. Open questions and items

1. **Flip `STRICT_RESIDUE`** (`scripts/lib/residue.ts`) to true after the content rewrite and sweep, and add
   `npm run check:residue` to `.github/workflows/ci.yml` (not owned here).
2. **Redirects** for `/en/legal/{nl,eu,be,de}/` in the Lovable repo's `src/server.ts`: target to be decided by the
   owner (`/en/legal/` now; the Dutch pages once Dutch is published).
3. **Legal reviewer:** whether a figure caption or `aria-label` with "order" in the UK sense ("a doctor may order a
   special") must be avoided; the check treats it as a commerce word (the brief: no labels with commerce words).
4. **Owner:** whether the UK holder name "Eli Lilly Nederland B.V." should be shown on English at all (it is the legal
   holder; allowed by `allowPhrases`).
5. Help-line numbers that are not emergency numbers (811, 988, 13 11 26, 0800 …) are not checked; the brief says help
   services are named and linked, never numbered, and the names "811 (Nova Scotia)", "Health811", "988 Suicide & Crisis
   Lifeline" are service names. A check for phone-number patterns could be added if wanted.
6. Stray files: `scripts/.fre-tmp.ts` and `scripts/.fre-guides.ts` were removed in commit `30b46fc`; `c.json` is gone.
   `intro.txt` (empty, untracked, 20 October) is still in the repo root: not mine, left for the sweep group.
7. **Dutch sources still cited on English through data** (third run, from the built pages): `src/data/product-check.yaml`
   cites `knmg-beroepsgeheim` and `thuisarts-naar-de-huisarts` (item `doctor`) and `igj-online-medicijnen` (intro), so
   KNMG, Thuisarts.nl and the IGJ are in the reference list of 27-28 English pages (every page with `<ProductCheck />`).
   The words of that item ("In the Netherlands, your doctor must keep what you say private") are in
   `src/i18n/en/product-check.json` and are caught by the source scan; the source ids are not text, so only the dist
   list shows them. For the group that owns ProductCheck (or the sweep): replace them with the readers' own sources when
   the item is rewritten. Other Dutch/German sources cited on English pages (Geneesmiddelenwet articles, CBG-MEB, IGJ/CBG
   2025, BfArM Ozempic falsification, Trimbos DRUGSinfo, Thuisarts "dikke ogen") come from pages still being rewritten
   (the-case-for-reform, safety pages). Studies in Belgian or Dutch journals (Janvier 2018, Talanta; Poolton 2026, Acta
   Orthopaedica Belgica; Stammers 2026 and Eijmael 2022, Ned Tijdschr Geneeskd) are evidence and may stay.
8. **Legal reviewer / editor:** the commerce token list (`config/commerce-tokens.json`, not owned here) has "for sale",
   not "sale", and singular "discount", "coupon" only, so headings such as "The core rule: approval before sale" (legal
   pages us, uk, ca) and labels such as "web shops and social media accounts that sold medicines" (legal/uk, a
   `<KeyNumber label>`: "shops" is not matched, only "shop") pass. They describe the law and enforcement, not an offer.
   If the brief's "no labels with commerce words (… sale …)" is meant literally for every page, the token list needs
   "sale", "sales", plural forms and a legal-text exception; adding them now would turn about six headings, captions and labels
   (legal/us, uk, ca; history/how-we-got-here) into errors.

## 10. Third run (re-check of the committed draft)

The second run's work was in the checkpoint commit `1b7304f` (no uncommitted draft of mine was left). Reviewed
against the brief and the assignment, item by item; everything was in place. Changes in this run:

| File | Change | Why |
|---|---|---|
| `scripts/lib/emergency.ts` | count words after a number extended: results, entries, items, products, doses, injections, mice, rats, animals | a new test case, "112 results" next to "emergency", was reported as a phone number |
| `scripts/validate-content.ts` | `unquoted()` also skips claims in single quotes ('…', ‘…’); an apostrophe inside a word never opens a quote | English prose here quotes with single quotes too ('research', 'special'), so the lab-report ladder's quoted claims ('the seller uses it himself') would have been reported |
| `scripts/lib/residue.ts` | dist mode: each reference entry counted once (a `.ref` inside a `.source-list__item` was scanned twice); an entry with an error-level term carries `cited` (source type + reference text) | double counting (warn hits 3,431 → 2,305 on the same build); and a Dutch source cited only through data was invisible |
| `scripts/check-locale-residue.ts` | with `--dist`: lists the cited sources with a Dutch, Belgian or German name once each, with the number of pages citing them | see open item 7 |
| `docs/CONTENT-GUIDE.md` §1b, `README.md` (commands) | the cited-sources list described | |

Tests re-run in this run (scratch scripts in the session scratchpad, not committed):

- **Emergency numbers:** 36 unit cases pass (e.g. "Call 911 now", "call 9-1-1", "Dial 000", "ring 112", "call 111 in
  New Zealand", "call triple zero", "In an emergency, 999." hit; "1,000", "10 000", "£1000", "$911", "111
  participants", "112 mg/dL", "week 112", "1999", "99.9%", "NHS 111", "NHS 111 Wales", "111.wales", "988", "811",
  "Health811", "911 times", "112 vials", "112 results", "au-triple-zero", "/triple-zero/", "4,000 penalty units",
  "0800 000 000", "13 11 26" no hit). Whole English corpus (105 files: pages, compounds, i18n incl. glossary) in the
  working tree: 8 raw candidates, all "NHS 111" service names or "week 112"; **0 phone numbers**. Same corpus at
  `nl-source-2026-10-23`: 5 raw candidates, 0 phone numbers. The validator (which also treats every number in safety
  strings as a phone number) reports 0 emergency errors. **No hit to report.**
- **Seller-judging words:** 18 pattern cases pass (incl. single and typographic quotes, `title="A reputable lab"`
  still reported, "legitimate" and "a trusted friend" not). Corpus: 0 occurrences of reputable, trusted
  lab/source/seller, legit, third-party tested, uses it himself/themselves, vendor in English pages, compounds and i18n.
- **Commerce words in titles, headings, questions, folds, figure titles, captions, labels:** 16 cases checked against
  the real token list ("buy", "order a special", "shop", "vendor", "supplier", "price" hit; "a good deal", "deal
  with", "in order to", "the order of the amino acids", "why order matters", "an executive order", "(Amendment) Order
  2026" pass). **Current offenders: none** (validator 0 errors; `check:commerce` on the fresh build passes). The two
  that do not match ("On sale online", "Discounts and offers") are not in the token list: open item 8.
- **Residue, source scan:** 165 error/frame and 33 warn hits in 16 files, all in other groups' files still being
  rewritten: glossary guides/safety-b/final-qa/retatrutide/stubs-b, the-case-for-reform, safety/product-risk,
  before-you-consider, monitoring, injection-safety, sterile-technique, compounds/index, index, product-check.json,
  retatrutide.mdx, kpv.mdx. Every matched term listed and inspected (Dutch 45, Netherlands 25, EU 20, Belgi 11, "in the
  EU" 12, huisarts 9, EMA 7, Lareb 7 …): all genuine; no false positive found. Marker semantics re-tested on a fixture
  (frontmatter `# residue-ok` at the end of a line; `{/* residue-ok */}` on the line before and at the end of the same
  line; an error term after a marker still reported; allowFiles for about/index; ids, link targets, URLs and
  `which=` masked; "Europe PMC" skipped; "AMG 133" not, "the AMG" reported). All 77 markers in the English pages and
  compounds follow these rules: 59 stand on their own line directly before the text (none followed by a blank line),
  18 end a line (e.g. ipamorelin line 487 ends with the marker for line 488).
- **Residue, built pages** (`dist/`, this run's build): 461 error/frame (reported as warnings) and 2,305 warn hits
  in 76 files; the page-text errors come from the same unrewritten files (glossary tooltips such as the
  `medicines-regulator` definition "the CBG in the Netherlands", which reach every page that uses the term), plus
  45 cited sources with Dutch, Belgian or German names (open item 7).
- **Cross-page anchors:** `check:html` on the fresh build: 0 missing `#source-*` / `#image-*` targets, 0
  cross-page anchor warnings.
- `npx tsc --noEmit -p .`: no error in `scripts/` (58 pre-existing errors elsewhere: `astro.config.mjs`,
  `src/components/mdx/index.ts`, `src/lib/*`, `src/scripts/*`).
- Lovable app (`C:\dev\peptides-explained-lovable\src\server.ts`, read only): still no redirects for
  `/en/legal/{nl,eu,be,de}/` (it 308s `/x` to `/x/` only); README "Deployment" says so.

No new facts on the site and no new sources in this run.

## 11. Independent code review (24 October 2026)

Every task item was re-checked with its scripts on the current tree and a fresh build (scratch test scripts in the
session scratchpad, not committed).

- **Residue (task 1):** `config/locale-residue.json` has the brief's grep list as `error`, "German"/"Germany" and EU
  framing as `frame`, EU/EMA/EPAR/CHMP/Europe as `warn`; `allowFiles` = about/index, about/editorial-policy,
  about/funding (their 1, 2 and 3 publisher-line mentions are exempt). A 23-case fixture through `scanMdx`: EMA
  without a marker is reported; `{/* residue-ok: EMA evidence */}` on the line before or at the end of the line
  silences it; a marker two lines up does not; a marker never silences an `error` term (Netherlands, huisarts, Lareb
  after a marker are still reported); frontmatter text and the YAML `# residue-ok` marker work; URLs, link targets,
  code spans and `code=` are masked; euro amounts, "AMG" (not "AMG 133"), Germany (thalidomide) without a marker are
  reported. `--strict` exits 1; `STRICT_RESIDUE = false` keeps the validator and `check:residue` at warnings. A
  comparison of the built-page hits with the source scan found no visible text that the source scan misses (the
  remaining dist-only hits are marker-exempt history/evidence lines, which dist reports as warnings, and cited source
  titles).
  - **Fixed:** an allowed proper name only protected matches fully inside it, so "indexed in Europe PMC" was a `frame`
    hit ("in Europe") that would fail once strict. `findResidue` now drops any match that overlaps an allowPhrases name
    (`scripts/lib/residue.ts`); CONTENT-GUIDE §1b says so.
- **Emergency numbers (task 2):** numbers come from `jurisdictions.yaml` (US 911, UK 999, CA 911, AU 000/112, IE
  112/999, NZ 111) plus 112, for locales with `printsEmergencyNumbers: false`. The requested cases: "1,000 people",
  "10 000", "£1000", "111 participants" no hit; "Call 911", "dial 000", "triple zero" hit. 66/66 unit cases pass in
  total. Whole English corpus (working tree, 105 files) and the same corpus at `nl-source-2026-10-23`: **0 printed
  numbers**, also when every string is treated as a safety string. On the built pages (not checked by any script):
  the only matches are the cited titles "When to call 999" (`uk-nhs-when-to-call-999`) and "When to use NHS 111 online
  or call 111" (`nhs-111`) in reference lists, and generated citation numbers ("Sources 111, 112 …" on ipamorelin).
  - **Fixed (hardening for the legal rewrite):** a numbered provision or range next to a calling word ("21 CFR part
    111 … emergency", "section 112", "s 111", "§ 112", "pages 111–112", "100–112", "111-2222") was read as a phone
    number. `NOT_A_PHONE_BEFORE` now covers sections, regulations, rules, articles, parts, chapters, clauses,
    paragraphs, items, schedules, appendix, annex, CFR, U.S.C., §, "s"/"ss" (only as a word, so "it's 000" still
    counts) and plural "pages"; the number regex no longer matches after or before an en dash or hyphen with a digit.
    CONTENT-GUIDE §1 lists these.
- **Commerce words (task 3):** headings `##`–`######`, `<Lead question>`, `<InDetail title>`, figure titles, callout
  titles, `<KeyNumber label>`, `<Diagram caption>`, `<FaqItem q>` and frontmatter title/nav_title are errors in the
  validator; `check-no-commerce.ts` checks h1–h6, the components' title elements and every `aria-label`. 15 sample
  headings behave as expected. **Current offenders: none.**
- **Seller words (task 4):** 21 cases pass (reputable, trusted lab/source/seller, legit, third-party tested, uses it
  himself/themselves, vendor anywhere; quoted claims skipped, "seller's", "legitimate", "vendored" not). Corpus: none.
- **Anchors (task 5):** a fake dist with missing `#source-*` / `#image-*` targets (with and without trailing slash, and
  via `index.html`) gives 4 errors; a missing `/en/legal-routes/#uk-specials` is a warning. Fresh build: 0 errors.
- **Docs (task 6):** CONTENT-GUIDE §1 (publisher's law, readers' similar rules, PCAC element 5), §1a ladder, §1b,
  the emergency rule, §4/§5.1/§5.2/§5.4/§9/§10/§12 and the README sections are present and match the code and data
  (the tesamorelin and thymosin alpha-1 tile texts in §5.4 match the built pages word for word).
- Checks after the fixes: `npm run validate` 0 errors (173 warnings, none in owned files); `npm run build` 136 pages;
  `npm run check` exits 0 (commerce passed; check-html 0 errors; residue 158 error/frame and 1,927 warn hits, all
  warnings while STRICT_RESIDUE is false); `npx tsc --noEmit` no error in `scripts/`.

Open item 9 (editor): the reference-list titles "When to call 999" and "… or call 111" print an emergency number on
three English pages (warning-signs, if-something-goes-wrong, sources). They are the NHS pages' real titles, so the
source metadata should stay; the editor decides whether a cited title counts as "printing" the number.
