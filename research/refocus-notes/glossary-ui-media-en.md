# Refocus notes: group glossary-ui-media-en (26 October 2026)

The sweep group: it runs after all other groups. Inputs: `research/refocus-spec/content-brief.md`, `docs/CONTENT-GUIDE.md`,
`docs/MEDIA-GUIDE.md`, `research/refocus-notes/merge.md` (UI-string note on schedules, section 10), the other groups'
notes, `config/locale-residue.json` and `scripts/lib/residue.ts` (the residue check now exists: `npm run check:residue`).

**Interrupted run.** The earlier run left nothing in this group's files: `git status` / `git diff` showed every owned
file equal to HEAD (the changes since `nl-source-2026-10-23` in `heroes.yaml`, `media.json`, `pages.json`, `compound.json`,
`vocab.json` and `beginner.json` are the data merge's and the other groups', committed in 1b7304f), and there was no
manifest, notes or sources file for this group. So this run did the whole assignment. `c.json` is not in the repository
root (already gone); the untracked, empty `intro.txt` there (20 October) is not this group's and was left alone.

## 1. Files written

| File | What |
|---|---|
| `src/i18n/en/glossary/final-qa.json` | 3 Dutch/Belgian entries removed, 4 definitions made country-neutral, 1 EU see-also link removed, 2 UK-only words replaced (section 2) |
| `src/i18n/en/glossary/shared.json` | checked, no change (4 generic terms, no NL/EU wording) |
| `src/i18n/en/compound.json` | `regulatoryTable.schedule` "Schedule {code}" → "{code}" (merge.md section 10) |
| `src/i18n/en/pages.json` | `glossary.intro` corrected (section 2.3) |
| `src/i18n/en/media.json` | added `weather-vane-rooster` (alt, caption); Dutch captions kept for `nl` |
| `src/data/heroes.yaml` | `legal/whats-changing` gets an English photo; three stale comments that described Dutch photos as English heroes corrected |
| `src/data/media.yaml` | added `weather-vane-rooster`; caption sources of three English heroes no longer cite Dutch/EU documents (section 3) |
| `src/assets/media/weather-vane-rooster.jpg` | new image (Commons original, 2592 px, downscaled to 2400 px as the fetch tool does) |
| `research/for-nl-site/MANIFEST-glossary-ui-media-en.md` | what left English |
| `research/for-nl-site/i18n-replaced-en.json` | old values added under `glossary/final-qa.json`, `compound.json`, `pages.json` |
| `src/data/sources/en-glossary-ui-media-en.yaml` | **not created**: no new source was needed (every id used is already registered) |
| `config/link-allowlist.json` | not changed (commons.wikimedia.org and creativecommons.org are already allowed) |

Not changed after review: `common.json` (footer, emergency strings: "call your local emergency number", no number),
`vocab.json`, `beginner.json`, `organ-cards.json`, `explainers.json`, `infographics.json` (no NL/EU wording left; the
merge had replaced and archived the EU-framed strings). `vocab.json` keeps the `EU`, `NL`, `DE`, `BE` labels: the data
keeps those rows, the components hide them on English (the residue scan skips keys of hidden jurisdictions), and the
Dutch preview, which falls back to the English strings, needs them.

## 2. Changes per file

### 2.1 Glossary `final-qa.json`

| Entry | Change | Source / basis |
|---|---|---|
| `rivm`, `thuisarts` | removed (Dutch bodies; no English page text uses them; the glossary page listed them) | manifest |
| `flemish-decree` | removed (Belgian law; the Belgian sport section left `legal/sport-and-doping`) | manifest |
| `zeranol` | "Some countries outside the EU give it to cattle …; the EU does not allow this" → "Some countries allow farmers to give it to cattle to make them grow faster; others do not." | a strict generalisation of the old sentence; no new fact |
| `zilpaterol` | "The EU does not allow it" → "Other countries do not allow it." | same |
| `emideltide` | "not approved as a medicine in the EU, the UK or the US" → "in the US or the UK" | the old claim minus the EU; Canada and Australia were **not** checked for emideltide (it is not one of the 21 compounds), so they are left out rather than asserted (open question 1) |
| `plenary-vote` | "all members of the European Parliament" → "all the members of a parliament together, not only by a committee. It usually comes after a committee has worked on the text." | definition of the word; no new fact |
| `clinicaltrials-gov` | see-also `ctis` (EU Clinical Trials Information System) removed: no such entry on English (dangling) | – |
| `diarrhoea`, `constipation` | "poo" (British-only, informal) → "Loose or watery stools (bowel movements) …" / "Emptying your bowels less often than usual, or finding it hard to do so." | brief, "Words"; same meaning |

Kept, checked: `nhs` (UK, referenced by three `legal-b.json` entries), `cdc`, `medlineplus`, `world-health-organization`,
`self-doping` (country-neutral: "Some countries also punish it as a crime"), `clenbuterol` ("Some countries use it for
asthma"), `annex`, `abstention`, `docket`. No glossary id was referenced by another entry's `see_also` except `nhs`.

### 2.2 `compound.json`

The status table rendered "Schedule Prescription Drug List" (Canada) and "Schedule S4" (Australia). It now renders the
data code as it is, followed by the data note: "Prescription Drug List · Prescription only; listed since 12 March 2018."
and "S4 · Prescription only medicine." (checked in `dist/en/compounds/{semaglutide,tesamorelin,bpc-157}`). The codes are
data (`src/data/compounds/*.yaml`, not this group's): open question 3 suggests "Schedule 4 (S4)" for the Australian code.

### 2.3 `pages.json`

`glossary.intro` said terms are "grouped by topic and sorted alphabetically"; the glossary page (`GlossaryIndex.astro`)
sorts them A to Z under letter headings and shows each one's topic. Now: "Terms are sorted from A to Z, each with its
topic. Every one is explained in plain words." (also clears the validator's two readability warnings for this summary).
Not European framing; archived anyway.

### 2.4 Photos: no Dutch photo on an English page

- **Heroes.** Every route that had a Dutch or European photo now maps it for `nl` only, with an English default where
  the English page exists: `safety/warning-signs` (vital-signs-monitor), `safety/if-something-goes-wrong`
  (hospital-emergency-entrance), `the-case-for-reform` (wooden-gavel) were done by their groups; **`legal/whats-changing`
  had no English photo at all** (only `{ nl: flags-european-parliament-strasbourg }`) and now has `weather-vane-rooster`.
  `legal/nl`, `legal/be`, `legal/eu`, `legal/de` have no English page, so they need no default.
- **New photo** `weather-vane-rooster`: Wikimedia Commons "File:Wind vane 05643.jpg", author Nevit Dilmen ("Own work"),
  licence CC BY-SA 3.0, 2592 × 1944, read through the Commons API (imageinfo + extmetadata) on 26 October 2026 and with
  the fetch tool's `--dry-run` (licence accepted, no personality-rights restriction, no people). Downloaded from
  upload.wikimedia.org and downscaled to 2400 px with sharp, as `scripts/media/fetch-commons.ts` does; the registry entry
  was added with the Edit tool (the tool rewrites the whole file). Viewed: a red metal rooster on a weather vane with the
  compass letters (seen from behind, so E and S are mirrored) against a clear sky; no text other than the compass
  letters, no product, no place named. Caption: "A weather vane shows which way the wind blows. This page shows which way
  the rules are moving." (no factual claim, so `sources: []`). The built 16:9 crop keeps the whole rooster.
- **Body photos** in English MDX: only `kelsey-kennedy-1962` and `leinster-house-dublin`.
- **Built pages:** no file in `dist/en` references any of the eight Dutch/European photo ids; the only European place
  names in `dist/en` visible text are a journal title ("Journal of Molecular Medicine (Berlin)") and Zagreb (the BPC-157
  research group, history and evidence).

## 3. Caption sources (`media.yaml`), cite ids before and after

`media.yaml` is not per locale: a caption's `sources` show as "Caption based on" in the image credits and put the
source on the English `/sources/` page. Three English heroes cited Dutch or EU documents there.

| Photo (English page) | Before | After | Check |
|---|---|---|---|
| `sharps-bin-yellow` (`safety/sharps-disposal`) | `fda-sharps-containers`, `apotheek-medicijnafval` | `fda-sharps-containers` | the caption ("a hard plastic box for used needles, with a lid that closes tightly") rests on the FDA page alone; safety-en-a open question 7 asked for this |
| `pharmacy-mortar` (`legal-routes`) | `igj-eigen-bereidingen-apotheek` | `usc-21-353a`, `uk-ma-1968-s10`, `ca-hc-pol-0051-compounding`, `au-tga-compounded-medicines-guidance` | "A pharmacy may still make some medicines itself": FD&C Act §503A (pharmacy compounding), Medicines Act 1968 s. 10 (pharmacists' exemptions: preparing on a prescription in a registered pharmacy), Health Canada POL-0051 (compounding "practised primarily by pharmacists"), TGA compounded-medicines guidance (pharmacists in a pharmacy); all four already cited on `/en/legal-routes/` (notes read in `refocus-us-uk-routes.yaml`, `refocus-canada.yaml`, `refocus-australia.yaml`) |
| `skin-epidermis-dermis-he` (`compounds/ghk-cu`) | `eu-regulation-1223-2009-cosmetics` | `uk-cosmetic-products-reg-gb-art-2`, `fda-cosmetic-or-drug` | "Cosmetics … go on the top layer": the same art. 2(1)(a) definition as it applies in Great Britain ("external parts of the human body (epidermis, …)") and FD&C Act 201(i) as quoted by the FDA ("applied to the human body"); both already cited on `/en/compounds/ghk-cu/` |

After the build, `dist/en/sources/` no longer lists `apotheek-medicijnafval`, `igj-eigen-bereidingen-apotheek` or
`eu-regulation-1223-2009-cosmetics`, and lists all six replacement ids (1372 sources). The three removed ids stay
registered (`safety-a.yaml`, `legal-a.yaml`, `stubs-b.yaml`) and are in the manifest. No other English-visible photo
cites a Dutch, Belgian or German source; four cite European documents as evidence (`gila-monster` → `ema-epar-wegovy`,
`mass-spectrometer-fda` → `ema-2025-synthetic-peptides-guideline`, `vitamin-b3-crystals-polarised` → two EFSA novel-food
opinions): kept as evidence (brief, "What may stay" 2).

**No-loss check.** The JSON and YAML files of this group hold no `<Cite>` or `<Claim>`. Compared with
`git show nl-source-2026-10-23:<path>`: `final-qa.json` lost exactly `rivm`, `thuisarts`, `flemish-decree` (all three
copied whole into `i18n-replaced-en.json`); `shared.json` is identical; `media.json` lost nothing (only additions:
four by legal-en-a, two by safety-en-a, one by guides-en, one by this group); `heroes.yaml` lost no mapping (every
Dutch/European photo is still mapped, for `nl`); `media.yaml` lost no entry and its caption sources changed only as in
the table above.

## 4. Residue sweep

### 4.1 Sources (all of `src/content/**/en/**`, `src/i18n/en/**` and the English-visible data text)

`npx tsx scripts/check-locale-residue.ts --details` after this group's changes: **0 error/frame hits; 1 warn hit**:

- `src/i18n/en/glossary/stubs-b.json:263` (`efsa.aliases.0`): "European Food Safety Authority" (warn, Europe named).
  Not this group's file. EFSA is cited as evidence (nad-precursors, marked "residue-ok: EFSA evidence"); JSON has no
  marker, so the JSON form is an `allowStrings` entry in `config/locale-residue.json` (owner of that file).

Before this group's changes the scan also had `final-qa.json` (10 error, 2 frame, 3 warn: rivm, thuisarts,
flemish-decree, zeranol, emideltide, plenary-vote, zilpaterol); all fixed.

The brief's literal grep (with `grep -P`, case-insensitive) still matches in this group's files only: the alt text and
captions of the eight nl-only photos in `media.json` (kept by instruction; the residue scan skips them because no
English page shows them), the `EU`/`NL`/`DE`/`BE` labels in `vocab.json` (hidden codes, see section 1), YAML comments and
nl-only mappings in `heroes.yaml`, and false positives (`epar` in "separate", `nada\b` in "Canada"). Over all English
MDX, after masking URLs, attribute ids and lines with a `residue-ok` marker, the literal grep finds only the publisher
line in `about/editorial-policy.mdx` lines 107 and 120 (an `allowFiles` page). The 90 `residue-ok` markers in English
MDX were tallied: 46 "EMA evidence", 7 EMA synthetic-peptide guideline, 6 publisher (about pages only), the other 31
history, evidence (trial sites, laboratories, side-effect database studies, committee assessments) and the two Ireland
notes; none silences reader framing as far as a read of their reasons shows.

### 4.2 Built pages (`npm run build`, then `npm run check`)

`npm run build`: validator 0 errors, 136 pages. `check:commerce` passed (136 pages, 53,841 links). `check:html` 0 errors,
0 warnings. `check:residue --dist dist`: **1 error-level hit, 671 warn hits in 49 files** (before this group: 94
error/frame and 1919 warn on the 13:23 build of 26 October, which predated several groups' final edits).

- **The one error** — `dist/en/compounds/tirzepatide/index.html`, products table: "MounjaroEli Lilly Nederland B.V.".
  The holder's legal name is allowed (`allowPhrases`), but the table renders product and holder as two adjacent spans
  (`<span class="authorised__name">Mounjaro</span><span class="authorised__holder">Eli Lilly Nederland B.V.</span>`),
  so the extracted text has no word boundary before "Eli" and the `\bEli Lilly Nederland B\.V\.` phrase does not match.
  A scanner artefact, not reader framing. Fix belongs to the component or the config owner (a space or block element
  between the spans, or drop the leading `\b` from the phrase).
- **Warn hits by zone:** 314 in reference lists (cited titles), 260 in citation labels, 96 in page text. The 96 page-text
  hits are all EMA/EPAR/European product information cited as evidence (semaglutide, tirzepatide, tesamorelin, basics,
  evidence pages), history (thalidomide and Germany; drug-lag studies; the UK in the EU in 2012 for tesamorelin and
  2018 for semaglutide), trial and laboratory locations (CJC-1295 sites in Germany; Danish, German and Norwegian
  laboratories for ipamorelin; European sites for TB-500; "US, Europe, east Asia" for KPV), the Ireland notes
  (`start-here`, `legal/ireland-and-new-zealand`), the publisher line (`about/*`: "The EU Court of Justice ruled …"),
  the corrections log, `the-case-for-reform` (EudraVigilance and EMA studies as evidence) and two items below. Each one
  carries a `residue-ok` marker in its source.
- **For the lead (not this group's files):** `dist/en/news/index.html` lists "European Medicines Agency — news … The EU
  medicines regulator." `src/data/feeds.yaml` gives that feed `jurisdiction: EU`, which the residue scan treats as
  hidden on English, but the news page shows it, and there is no UK, Canadian or Australian regulator feed yet (merge.md
  section 6: feeds left for the lead's decision).
- **Cited sources with a Dutch, Belgian or German name** on English pages (11, from 12 before this group): Belgian and
  Dutch laboratory and case studies (Janvier 2018, 28 pages through ProductCheck; Vanhee 2014; Stammers 2026; Eijmael 2022),
  a Belgian journal (Acta Orthopaedica Belgica) and two papers with the author initials "NL" — all evidence; the
  Geneesmiddelenwet (articles 1, 84–85) and the Telecommunicatiewet (art. 11.7a) on the about pages — the publisher
  line; the Belgian regulator's melanotan warning (FAGG 2013) on `compounds/melanotan-ii` — marked there as "European
  regulator evidence (what a tested product contained)". The Dutch inspectorate's pharmacy-preparation page
  (IGJ) and the Apotheek.nl medicine-waste page no longer reach English (section 3).

## 5. Validator warnings in this group's files (all read)

- `pages.json`: `sources.intro` (29 words), `news.intro` (27 words, reading ease 21), `search.privacy` (28 words). These
  summaries predate the refocus and contain no European wording; left for the owner (changing them is outside this
  assignment). The `glossary.intro` warnings are fixed (section 2.3).
- `media.json`: captions of `human-pancreatic-islet` (20 words, reading ease 58), `vital-signs-monitor` (22 words),
  `hospital-emergency-entrance` (reading ease 33), `parliament-hill-centre-block` (41), `parliament-house-canberra-dusk`
  (9), `beehive-parliament-wellington` (40), `leinster-house-dublin` (57). Short captions whose score is pulled down by
  proper names and words such as "Parliament", "emergency department", "Rhode Island"; written by other groups and
  accurate; left as they are. The new `weather-vane-rooster` caption raises no warning.
- `heroes.yaml`: "hero for legal/nl | legal/be | legal/eu | legal/de: no such page (yet)": nl-only mappings kept for the
  Dutch site, as the brief requires (no English page, no Dutch page yet).
- Repo-wide: 0 errors, 155 warnings (157 before the `glossary.intro` fix); none of the others is in this group's files.

## 6. Open questions for the reviewers

1. **Emideltide (glossary):** *(resolved by the fact-check, section 7: now "the US, the UK, Canada or Australia")* now "not approved as a medicine in the US or the UK". Canada and Australia were not checked
   (Health Canada's April 2026 advisory RA-81874 lists DSIP among peptides bought online, but that is not a status
   search). Add them once the DPD and ARTG have been searched, or leave as is. The US/UK claim is the earlier group's,
   not re-verified here.
2. **Per-locale caption sources:** `media.yaml` `sources` apply to every locale. The Dutch site will want the Dutch
   caption sources back (`apotheek-medicijnafval`, `igj-eigen-bereidingen-apotheek`, `eu-regulation-1223-2009-cosmetics`);
   that needs per-locale caption sources (schema change) or its own photos.
3. **Australian schedule code:** with the label now "{code}", the AU rows show "S4 · Prescription only medicine …".
   Suggest the data code "Schedule 4 (S4)" in the eight AU schedule fields (data owner), so a reader who does not know
   "S4" sees the full name.
4. **Tirzepatide products table:** the adjacent product and holder spans (section 4.2) may also be read as one word by
   some screen readers; a separator would fix both.
5. **News feeds:** the English news page shows the EMA feed and no UK/CA/AU regulator feed (section 4.2).
6. **EFSA alias** in `stubs-b.json`: allow it in `config/locale-residue.json` (`allowStrings`) as evidence, or drop the
   alias.
7. **Weather vane photo:** a reviewer may prefer another image for "What's changing"; the licence and attribution are
   complete (CC BY-SA 3.0, Nevit Dilmen, credited on the page and on `/sources/#image-credits`).

## 7. Adversarial fact-check (26 October 2026)

Read first: the content brief, this file, the manifest, `git diff` of every owned file, and each owned file against
`git show nl-source-2026-10-23:<path>`. Assumed errors; checked every new or changed fact at its source.

### 7.1 New and changed facts, checked at the source

| Claim | Checked against | Result |
|---|---|---|
| `weather-vane-rooster`: Commons "File:Wind vane 05643.jpg", author Nevit Dilmen, CC BY-SA 3.0, 2592 × 1944, own work | Commons API (imageinfo + extmetadata), 26 Oct 2026: Artist "Nevit Dilmen", LicenseShortName "CC BY-SA 3.0", Credit "Own work", ObjectName "Wind vane 05643", 2592 × 1944, no restrictions | correct |
| Alt text "A red metal rooster on top of a weather vane, with the letters N, S, E and W below it, against a pale blue sky." | viewed the stored 2400 × 1800 file and the built 1280 × 720 hero crop (the whole rooster and all four letters stay in the crop) | correct; no people, no text other than the compass letters |
| `sharps-bin-yellow` caption ("a hard plastic box for used needles, with a lid that closes tightly") on `fda-sharps-containers` alone | fda.gov page fetched: FDA-cleared containers "are made from rigid plastic"; all containers should "close with a tight-fitting, puncture-resistant lid" | supported |
| `pharmacy-mortar` caption ("A pharmacy may still make some medicines itself") on `usc-21-353a`, `uk-ma-1968-s10`, `ca-hc-pol-0051-compounding`, `au-tga-compounded-medicines-guidance` | 21 U.S.C. § 353a(a) (Cornell LII: compounded "for an identified individual patient"); Medicines Act 1968 s. 10(1) (legislation.gov.uk: "preparing or dispensing a medicinal product in accordance with a prescription", in a registered pharmacy); POL-0051 (canada.ca via WebFetch: compounding "is practised primarily by pharmacists", regulated by each province/territory; issued 26 January 2009); TGA guidance (read in the built-in browser; curl and WebFetch timed out): it explains how "community and hospital pharmacists" compound, "in a pharmacy open to the public where the pharmacist practices" | all four supported |
| `skin-epidermis-dermis-he` caption ("Cosmetics with GHK-Cu go on the top layer") on `uk-cosmetic-products-reg-gb-art-2`, `fda-cosmetic-or-drug` | legislation.gov.uk art. 2(1)(a) (GB version): "external parts of the human body (epidermis, ...)"; fda.gov: FD&C Act 201(i) "applied to the human body" | supported (the UK text carries the "top layer" point; the FDA page the cosmetic definition) |
| The six replacement ids are cited on the English pages the photos head | grep of `legal-routes.mdx` (353a 6×, s. 10 3×, POL-0051 4×, TGA 4×) and `ghk-cu.mdx` (GB art. 2 4×, FDA 2×) | correct |
| `glossary.intro`: "Terms are sorted from A to Z, each with its topic." | `src/components/mdx/GlossaryIndex.astro`: sorted with `Intl.Collator`, letter headings, a category line per entry | correct |
| `regulatoryTable.schedule` "{code}" | `RegulatoryTable.astro` line 48; data codes are "Prescription Drug List" (CA) and "S4" (AU); built pages read "Prescription Drug List · Prescription only; listed since 12 March 2018." and "S4 · Prescription only medicine." | correct; "Schedule 4" is a glossary term (`legal-en.json`), the bare "S4" is not, so open question 3 stands |
| Zeranol, zilpaterol, plenary vote, diarrhoea, constipation | definitions read; strict generalisations of the old text, no new country fact | no change needed |
| Dutch/European photos absent from English; removed caption sources absent from English | rebuilt (`npm run build`, 136 pages); `grep -rl` of the eight nl-only photo ids and of `apotheek-medicijnafval`, `igj-eigen-bereidingen-apotheek`, `eu-regulation-1223-2009-cosmetics` in `dist/en`: 0 files each | correct |

### 7.2 Fixed in place

1. **Emideltide (glossary, `final-qa.json`)**: "not approved as a medicine in the US or the UK" left Canada and Australia
   out (writer's open question 1). Searched all four on 26 October 2026, each with a positive control:
   - US: openFDA Drugs@FDA (`api.fda.gov/drug/drugsfda.json`), `emideltide` as generic name, substance name and active
     ingredient, and "DELTA SLEEP" as active ingredient: "No matches found" (control: tesamorelin returns records).
   - UK: MHRA products (`products.mhra.gov.uk`, built-in browser): "There are no search results for emideltide"
     (control: semaglutide, 272 results; "DSIP" and "delta sleep" give only unrelated full-text hits).
   - Canada: Health Canada Drug Product Database API (`health-products.canada.ca/api/drug/activeingredient/`,
     `ingredientname=`): `emideltide`, `dsip` and `delta sleep` all return `[]` (control: `tesamorelin` returns both
     Egrifta drug codes, which are cancelled products, so the API covers cancelled products too). The DPD web search was
     down for maintenance. Consistent with Health Canada's advisory RA-81874 (`ca-hc-2026-04-think-twice-peptides`),
     which lists DSIP among "unauthorized injectable peptide drugs seized".
   - Australia: ARTG search (`tga.gov.au/resources/artg`): `emideltide` "There were no matching results"; "delta sleep"
     finds only an unrelated device (control: semaglutide, 35 medicines).
   Now: "It is not approved as a medicine in the US, the UK, Canada or Australia." Glossary entries carry no citations,
   so the searches are recorded here; no source record was added. Manifest row and archive comment updated.
2. **Emergency wording (`explainers.json`, `insulin-glp1-hypo`, shown on `/en/compounds/semaglutide/`)**: step 5 and the
   summary said "call an ambulance"; the brief requires "call your local emergency number" (its twin `glp1-class-hypo`
   already did). Step 5 is now "Shaking, sweating, hungry or confused? Take sugar if you can swallow. If not, call your
   local emergency number." (18 words, reading ease 64; a rewrite that kept the old structure scored 53), and the
   summary ends "If the person cannot swallow, call your local emergency number." Old values archived in
   `research/for-nl-site/i18n-replaced-en.json` under `explainers.json`. No number is printed.
3. **Manifest, `flemish-decree` row**: said the term left because "the Belgian sport section left
   `legal/sport-and-doping`". `git grep` of `nl-source-2026-10-23` shows the Flemish decree was used only on `legal/be`
   (lines 139 to 141, `be-flemish-antidoping-decree-2012`); `sport-and-doping` had a Belgian testing section
   (`dopingautoriteit-controles-belgie`) but never named the decree. Row corrected.

### 7.3 No science lost

`git show nl-source-2026-10-23:<path>` against the working files, key by key: `final-qa.json` lost only `rivm`,
`thuisarts`, `flemish-decree` (all three in the manifest and archived whole); 7 changed definitions/see-alsos, all
archived. `shared.json`, `common.json`, `organ-cards.json`, `infographics.json` identical. `explainers.json`: two strings
changed by this fact-check (archived). `media.json`: additions only. `compound.json`, `vocab.json`, `beginner.json`: the
data merge's changes (committed earlier), all archived in `i18n-replaced-en.json`. `media.yaml`: no entry lost; caption
sources changed only for the three photos in section 3; the three removed ids are Dutch/EU documents, still registered,
listed in the manifest. `heroes.yaml`: every old mapping kept (Dutch/European photos for `nl`, the Reichstag for the
planned `de` locale, which is a locale in `config/locales.json`). None of these files holds a `<Cite>` or `<Claim>`.

### 7.4 Residue, guardrails, links

- Brief's literal grep over the owned UI and glossary files: hits only in `vocab.json` (hidden-jurisdiction labels EU,
  NL, DE, BE; the components hide those rows on English), `media.json` (alt text and captions of the eight nl-only
  photos) and false positives ("separate"). `check-locale-residue.ts --details`: 0 error/frame hits, 1 warn
  (`stubs-b.json` EFSA alias, not this group's).
- No emergency number, no dosing, no commerce word in any owned label (grep). UK-only words: none left in the owned
  glossaries ("GP" appears only in the nl-only `huisartsenpost-oss` caption).
- Owned JSON files contain no links. All eight treatment-routes anchors exist once each in `dist/en/legal-routes/`.
- Hosts of every source checked are on `config/link-allowlist.json` (`.gov`, `.gov.uk`, `.canada.ca`, `.gov.au`,
  `www.law.cornell.edu`, `www.legislation.gov.uk`, `commons.wikimedia.org`, `creativecommons.org`).

### 7.5 Validation after the fixes

- `npx tsx scripts/validate-content.ts --only <each owned file>`: 0 errors. Warnings left: `pages.json` (3 old
  summaries: `sources.intro`, `news.intro`, `search.privacy`), `media.json` (7 captions of other groups' photos; proper
  names pull the score down), `heroes.yaml` (4 nl/de-only routes without an English page). Repo-wide: 0 errors, 155
  warnings.
- `npm run build`: 136 pages. `check:commerce` passed; `check:html` 0 errors, 0 warnings; `check:residue --dist`: 1
  error-level hit (the tirzepatide products-table span artefact, section 4.2, not this group's), 671 warn hits.
- The rebuilt glossary shows the new emideltide line; the semaglutide page shows the new explainer text.

### 7.6 Still open (for the lead or other owners)

The writer's open questions 2 to 7 stand. In particular: the AU schedule code "S4" now shows without "Schedule" (data
owner: "Schedule 4 (S4)"); the tirzepatide product/holder spans need a separator (component owner); the English news
page shows the EMA feed and no UK/CA/AU regulator feed (lead); the EFSA alias in `stubs-b.json` (residue config owner).
