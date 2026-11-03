# Content brief: the Dutch site (27 October 2026)

Owner's decisions of 27 October 2026 (plan: `docs/PLAN-2026-10-27-dutch-site.md`). Every writer, translator
and fact-checker of the Dutch site follows this brief. Where `docs/CONTENT-GUIDE.md` speaks of the English
readers (US, UK, Canada, Australia), this brief says what the Dutch site does instead; every other rule of
the content guide applies to Dutch unchanged.

## Who the Dutch site is for

- **Readers in the Netherlands**, in full: Dutch law, the Dutch status of every compound, Dutch treatment
  routes, Dutch help and reporting services, Dutch insurance. **EU law in full** where EU law decides
  (central authorisation, the medicines directive, clinical trials, falsified-medicines rules, the reform).
  `config/locales.json`: `nl` full `["NL", "EU"]`, notes `["BE"]`, `printsEmergencyNumbers: true`.
- **Belgium as short notes only** (Flemish readers): one notes page `/nl/legal/be/` and the Belgian
  contact card (`<JurisdictionCard code="BE" />`, `<JurisdictionCards which="notes" />`). Elsewhere a
  Belgian reader gets one short line where the answer really differs ("In België meld je een bijwerking
  bij het FAGG."), or a link to `/nl/legal/be/`. No Belgian row, column or paragraph on every page.
  EU-wide (central) approvals also apply in Belgium: say so once on the notes page.
- **Status:** the locale stays `preview` (noindex, English fallback, banner) until the owner says yes to
  publishing. Nothing is uploaded to the live site.

## Language

- **Standard Dutch as written in the Netherlands** (`nl-NL`). Belgian words only on the Belgian notes page
  and the BE card, where they are the official names.
- **Address the reader as "je"** (je, jij, jouw), never "u". Informal and direct, the voice of Dutch
  drug-information and harm-reduction services: plain, adult, never preachy.
- **Taalniveau B1** on every safety and legal page, in every TL;DR, `<Lead>` answer, caption, glance tile,
  stop sign, warning sign and UI string: short sentences, common words, one idea per sentence, every
  technical term explained on first use. Mechanism and evidence pages may reach B2–C1 in the body.
- **The Dutch style sheet `docs/STYLE-NL.md`** (written first) fixes the words every writer uses: the
  fixed translations of recurring terms, claim levels, section names, units, numbers and dates. Follow it;
  if a term is missing, add it there (one line) and use it consistently.
- **Write Dutch, not translated English.** Translate the meaning, not the sentence: Dutch word order,
  Dutch idiom, Dutch examples where the English used a US/UK/CA/AU one. Never leave an English phrase in
  Dutch text unless Dutch readers use it (peptide, off-label, compassionate use are fine; "harm reduction"
  is "schadebeperking" unless the style sheet says otherwise).
- **Numbers and dates** in Dutch format: decimal comma (1,5 mg; 14,9%), a full stop for thousands (1.961
  volwassenen), "20 oktober 2026", 24-hour time. Inside `<Q>` too. Units as in the style sheet.

## Where each page comes from

1. **The current English page is the base** (`src/content/pages/en/<route>.mdx`,
   `src/content/compounds/en/<slug>.mdx`): it has the newest science, the TL;DR, the chapter headings,
   the lab-report ladder and the refocus fixes. Keep its structure, its figures and its depth.
2. **The Dutch and EU material saved on 23 October goes back in**: `research/for-nl-site/MANIFEST.md`
   (table: which page held what), the groups' `research/for-nl-site/MANIFEST-<group>.md` (each cut
   section, with where the full text is), `research/for-nl-site/snapshot-2026-10-23/` (the English pages
   as they were, Dutch-framed) and `git show nl-source-2026-10-23:<path>`.
   `research/for-nl-site/i18n-replaced-en.json` holds the replaced English UI strings and glossary
   entries.
3. **Every Dutch, EU and Belgian fact is re-checked** against the fact-checked research of 27 October
   2026 in `research/nl/` (each file has an "## Fact-check (independent)" section: respect its corrections
   and UNRESOLVED notes; an unresolved point is written as unknown or left out). The saved material was
   last checked 20–23 October: never reuse a legal or status fact from it without that check.
4. **Where the English page answers for the US, the UK, Canada and Australia**, the Dutch page answers for
   the Netherlands (and the EU where EU law decides), from the saved Dutch text and the new research.

## What leaves (on Dutch pages, the reader's frame is the Netherlands)

- The US, UK, Canadian, Australian, Irish and New Zealand **frame**: their help services and help lines,
  side-effect reporting (MedWatch, Yellow Card, Canada Vigilance, TGA, HPRA, CARM), treatment routes
  (503A/503B compounding as a route, UK specials, the Special Access Program and Scheme, personal import
  rules), insurance and funding (NICE, NHS, Medicare, PBS), their country pages (`legal/us`, `legal/uk`,
  `legal/ca`, `legal/au`, `legal/ireland-and-new-zealand` are not part of the Dutch site: never link them)
  and "call your local emergency number".
- Country-by-country tables and cards for those countries become the Dutch answer (one column or card for
  the Netherlands, an EU column where the EU decides; Belgium only as a note).
- When you drop a citation that only supported US/UK/CA/AU framing, list it in your notes
  (`research/nl-notes/<group>.md`: page, cite id, why it went, what replaced it).

## What stays from other countries (keep it short, never as the reader's frame)

- **Science is the same in every language.** Every `<Cite>`, `<Claim level>`, study, number, caveat and
  mechanism step of the English page stays, unless it is US/UK/CA/AU framing as above. A US label or an
  FDA review is evidence (trial data, the label's warnings) and stays as evidence.
- **The FDA PCAC vote (July 2026)** keeps the content guide's canonical framing in full (§1, five points);
  point 5 on Dutch pages: none of these is an approved medicine in the Netherlands or the EU (the NL and EU
  rows), a US listing changes nothing outside the US.
- **World context, once and short:** that a medicine is approved in the US (tesamorelin, bremelanotide,
  elamipretide) explains why it exists and why the EU row says something else; one sentence in
  `what-it-is` or `regulatory`, never a US route. Thymosin alpha-1's national approvals (Italy …) stay as on
  English. Mark such a line with `{/* residue-ok: world context */}` on the line before.
- **History** (thalidomide, Kefauver-Harris, US and other law history) stays where English has it, and the
  Dutch law history from the 23 October version comes back (history/how-we-got-here).

## Emergency, help and reporting

- **Dutch prints 112.** Components use `common.emergency.*` ("Bel 112", "Bel direct 112", "Is het
  ernstig? Bel 112."). In body text write "bel 112" where English wrote "call your local emergency number".
- **The Dutch help levels** (from the saved warning-signs and if-something-goes-wrong pages, re-checked):
  levensgevaar → 112; spoed buiten kantoortijd → de huisartsenpost; anders → je huisarts; vergiftiging: the
  huisarts or 112 (the NVIC advises doctors, not the public: check the research). Name and link each
  service from `src/data/jurisdictions.yaml` (`<JurisdictionCard code="NL" />`). A national number may be
  printed where the service's own page shows it (113 Zelfmoordpreventie, de Drugs Infolijn), never a
  regional huisartsenpost number.
- **Side effects:** Bijwerkingencentrum Lareb (Netherlands); Belgium: the FAGG (notes only).
- **No-assumption rule stays:** "als je product niet van een apotheek komt", never "als je het op de
  zwarte markt hebt gekocht". A doctor is an ally (je huisarts), never a gatekeeper.

## Treatment routes (fixed anchors on `/nl/legal-routes/`)

The Dutch routes page has these `##` headings, which make these anchors; compound and other pages link
exactly these and nothing else:

| Heading | Anchor |
|---|---|
| `## Recept` | `#recept` |
| `## Off-label` | `#off-label` |
| `## Artsenverklaring` | `#artsenverklaring` |
| `## Magistrale bereiding` | `#magistrale-bereiding` |
| `## Klinisch onderzoek` | `#klinisch-onderzoek` |
| `## Compassionate use` | `#compassionate-use` |
| `## Zelf invoeren` | `#zelf-invoeren` |

(Personal import, "zelf invoeren", only as far as the research supports it.)

## Routes (link only to these, always with `/nl/`)

start-here · basics (index), basics/what-is-a-peptide, basics/how-signalling-works,
basics/pharmacokinetics, basics/why-not-a-pill · history (index), history/timeline,
history/how-we-got-here, history/the-croatian-lab · compounds (index), compounds/<slug> (21 slugs) ·
evidence (index), evidence/how-to-read-a-study, evidence/the-translation-gap, evidence/evidence-grading,
evidence/conflicts-of-interest · legal (index), **legal/nl, legal/eu, legal/be** (notes),
legal/research-use-only, legal/sport-and-doping, legal/whats-changing · safety (index),
safety/before-you-consider, safety/sterile-technique, safety/injection-safety, safety/sharps-disposal,
safety/product-risk, safety/monitoring, safety/warning-signs, safety/if-something-goes-wrong ·
talking-to-your-doctor · legal-routes · the-case-for-reform · glossary · sources · news · search · about
(index), about/editorial-policy, about/funding, about/corrections.

Slugs and file names stay English (`src/content/pages/nl/safety/sterile-technique.mdx`), so hreflang pairs
the translations. Never link `/en/` from a Dutch page.

## Files and frontmatter

- Pages: `src/content/pages/nl/<route>.mdx`; compounds: `src/content/compounds/nl/<slug>.mdx`. Same file
  name, same components, same `<Section id>` order, same `related` keys (drop a related key that is not a
  Dutch route).
- Add `translation: { method: translated, from: en, review: pending }`; `method: adapted` for a page whose
  country answers were rewritten for the Netherlands (legal pages, routes, talking-to-your-doctor, safety
  pages with Dutch help levels, compound regulatory sections are part of a `translated` page);
  `method: native` for a page written from Dutch sources (legal/nl, legal/eu, legal/be).
- `reviewed_by` and `last_reviewed` as on English (`pending-medical-review`; legal pages
  `pending-legal-review`). Legal pages and safety pages stay `reading_level: B1`.
- **Compound pages:** `mechanism` steps keep the same `kind` and `level` as English (the validator fails
  otherwise); every `studies` id of the data file gets its Dutch `finding` and `limitation`;
  `regulatory_notes` only for NL, EU and WADA; `indications` for every visible product (the EU products in
  the data file), written from the Dutch EU product information (EMA publishes the SmPC in Dutch);
  `glance.main_risk`, `glance.stop_signs`, `glance.facts`, `glance.tested`, `glance.sport` and the TL;DR
  in Dutch, same limits (TL;DR ≤ 85 words on compound pages, ≤ 120 elsewhere; answers ≤ 18 words; main
  risk ≤ 12 words; stop signs ≤ 8 words). Harm-reduction sections link `/nl/talking-to-your-doctor/`,
  `/nl/safety/product-risk/`, `/nl/safety/sterile-technique/`, and the routes by the anchors above.
- The badge, *At a glance*, the fact sheet and the status table are derived from the NL and EU rows. The
  prose must say the same.

## Sources

- **Reuse ids.** Grep every file in `src/data/sources/` for the DOI, PMID or URL first. The Dutch and EU
  sources of the 23 October site are all still there (nl-gmw-*, igj-*, cbg-*, lareb-*, ccmo-*, zin-*,
  thuisarts-*, ema-*, eur-lex …) and the new research's sources are merged into
  `src/data/sources/nl-research-*.yaml` (never edit those; reuse their ids).
- A group's new sources go in its own file `src/data/sources/nl-<group>.yaml`. Copy metadata from the
  record, never from memory; fetch every regulator or law URL and confirm it says what you cite it for.
  Hosts must be on `config/link-allowlist.json` (add official Dutch, Belgian and EU hosts with a one-line
  "why"; never a seller, never a commercial clinic or lab).
- **Dutch sources for Dutch readers where they exist**: wetten.overheid.nl, igj.nl, cbg-meb.nl,
  geneesmiddeleninformatiebank, lareb.nl, rijksoverheid.nl, zorginstituutnederland.nl, thuisarts.nl,
  farmacotherapeutischkompas.nl, ccmo.nl, onderzoekmetmensen.nl, dopingautoriteit.nl, trimbos.nl,
  drugsinfo.nl, the EMA's Dutch product information. A Dutch-language source is fine for a Dutch page.
- No source whose title or URL names a seller or company (regulators' enforcement releases often do):
  describe the enforcement in general terms with a neutral official source.

## The legal line, commerce and the lab-report ladder

All of the content guide's §1 and §1a apply unchanged: no doses, schedules, protocols, "begin laag",
reconstitution sums, stacks or cycles; no help finding, choosing or judging a seller ("verkoper" when the
role must be named; never "betrouwbare bron", "betrouwbaar lab", "goede leverancier", "legit"); no
commerce word in a title, heading, `<Lead question>`, fold title, figure title, label or link text
(`config/commerce-tokens.json`, `tokens.nl`: kopen, bestellen, korting, winkel, leverancier, prijs …). The
lab-report ladder on `/nl/safety/product-risk/` keeps its exact form (ISO/IEC 17025 for that batch → the
seller's own report → no report → not evidence).

## The reform page

`the-case-for-reform` is the owner's signed opinion. Translate the current English page; where the English
makes proposals for the US, the UK, Canada or Australia, use the Dutch proposals of the 23 October version
(snapshot), with re-checked facts. Change no position. List every difference from the English page in
your notes for the owner, who approves the Dutch text before it goes out.

## Validate

`cd C:/dev/Peptides-explained && npx tsx scripts/validate-content.ts --only <part-of-your-paths>` until 0
errors in your files; read every warning (fix it, or say in your notes why it stays). The validator checks
internal links (`/nl/…`), the mechanism kinds and levels, TL;DR and glance limits, commerce words,
components and sources. `npx tsx scripts/check-locale-residue.ts` covers Dutch once `config/locale-residue.json`
has its `locales.nl` entry.

## Added after step 1 (27 October 2026, evening): binding for every page writer and checker

1. **The advertising test (the most important legal finding of step 1).** Dutch courts ruled in 2026 that
   selling nothing does not make a text "information": the Raad van State (25 February 2026,
   `nl-rvs-2026-1072-publieksreclame-website`) upheld fines on a non-commercial information website, and
   the Rechtbank Amsterdam (10 April 2026, `nl-rbams-2026-5160-publieksreclame-journalistiek`) on
   journalism built on personal weight-loss stories. What decides is **praise and one-sided positive
   wording** ("wervende bewoordingen") and, for authorised medicines, whether the text stays **in line
   with the SmPC** (research/nl/nl-law.md fact 17a, §4 conflict 1). So every Dutch page:
   - is balanced and purely informative: an effect is never named without its evidence level, its
     uncertainty and its risks; no success stories, no "results", no before/after, no testimonials;
   - for an authorised medicine (semaglutide, tirzepatide, and wherever an EU product is named): uses the
     Dutch SmPC's indications, names the main side effects and contraindications wherever it names an
     effect, and presents off-label use (e.g. Ozempic for weight loss) as off-label, never as a benefit;
   - for a compound without a handelsvergunning: never a positive claim beyond the stated evidence level,
     never a word that makes it attractive (STYLE-NL §5.6 lists the words).
   - The **publisher line** (about pages, editorial policy) uses this draft, cited to
     `nl-gnw-art-84-85-advertising` and `nl-rvs-2026-1072-publieksreclame-website`: "We maken deze site in
     Nederland. De Nederlandse wet verbiedt reclame voor medicijnen zonder handelsvergunning en publieksreclame
     voor medicijnen op recept. Ook wie niets verkoopt, kan reclame maken: de rechter kijkt of een tekst een
     middel aanprijst. Daarom verkopen we niets, linken we naar geen enkele verkoper, noemen we geen
     doseringen en prijzen we geen middel aan. We beschrijven wat onderzoek laat zien, met de risico's en
     met wat niemand weet." This replaces "the absence of commerce is what makes the content legal" on Dutch
     pages. It is an owner decision: list it in your notes.
2. **Urgent help (not life-threatening):** "Bel direct je huisarts. Is de praktijk dicht? Bel dan de
   huisartsenpost." Never "zoek vandaag nog hulp" (Thuisarts says "bel direct"; STYLE-NL §5.1 is updated).
3. **Fixed anchors used by the product check** (`src/i18n/nl/product-check.json` `anchors`):
   `/nl/safety/product-risk/` has the heading `## Wat een labrapport wel en niet zegt`
   (`#wat-een-labrapport-wel-en-niet-zegt`); `/nl/safety/sterile-technique/` has
   `## Wanneer je een flacon weggooit` (`#wanneer-je-een-flacon-weggooit`). Any other cross-page anchor you
   link must be a heading slug on the Dutch target page: check it in the Dutch file, never assume the
   English slug.
4. **Status per compound** comes from the merged data (`src/data/compounds/<slug>.yaml`, EU and NL rows,
   as_of 2026-10-27) and `research/nl/status/<slug>.yaml` (Dutch SmPC wording in
   `indications_nl_from_smpc`, suggested NL/EU notes). SS-31 is now `investigational` in the EU and NL.
5. **Not citable:** the IGJ's August 2026 order and penalty against a peptide webshop, the IGJ's February
   2026 peptide warning (media only) and any page naming a seller or company. Describe enforcement in general
   terms with a neutral official source (research/nl/nl-law.md §5).
6. **Help services** are on the NL card now (`src/data/jurisdictions.yaml`: urgent advice, poisons, drugs
   advice, mental health). Use `<JurisdictionCard code="NL" />`; never write a regional number.
7. **Validator change:** a product needs an `indications` line only in the locales that show it (its
   jurisdiction is the locale's own), and a timeline or tracker item needs text only in the locales that
   show it. So the Dutch site can add EU and NL products, events and items without English text.
8. **Notes:** a term STYLE-NL lacks goes in your notes file (`research/nl-notes/<group>.md`, section
   "Style terms"), not into STYLE-NL.md, so parallel writers do not collide; the final sweep merges them.
