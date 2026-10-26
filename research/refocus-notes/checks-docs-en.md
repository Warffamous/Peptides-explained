# Refocus: checks and docs for English (group `checks-docs-en`, 24 October 2026)

Code and documentation only: no page, i18n string, data row or source was written by this group. Inputs:
`research/refocus-spec/content-brief.md` (followed as written), `docs/CONTENT-GUIDE.md`, `src/schemas/*`,
`src/lib/jurisdictions.ts`, `config/locales.json`, `src/data/jurisdictions.yaml`, `research/refocus-notes/merge.md`.
An earlier run of this assignment was cut off; its draft (residue library, config and check script, emergency
library, commerce-in-headings checks, guardrail warnings, cross-page anchor check, most of the CONTENT-GUIDE update)
was reviewed against the brief, kept where right, and finished and corrected as listed below.

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
- Final runs of `npm run validate`, `npm run build`, `npm run check`: see the handoff summary.

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
6. Stray untracked helper `scripts/.fre-tmp.ts` (a Flesch-score helper created by a content agent at 17:06) and
   `c.json`, `intro.txt` in the repo root: not deleted here (may be in use; c.json belongs to the sweep group).
