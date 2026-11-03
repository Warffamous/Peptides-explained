# Notes: group ipamorelin (Dutch site, 27 October 2026)

Files written or changed by this group:

- `src/content/compounds/nl/ipamorelin.mdx` (new)
- `src/data/sources/nl-ipamorelin.yaml` (new; 6 sources)
- `src/i18n/nl/glossary/ipamorelin.json` (one definition fixed: `macimorelin`)

No new Dutch glossary file was needed (`src/i18n/nl/glossary/nl-ipamorelin.json` not created): every term the page
uses that a B1 reader may not know already has a Dutch entry (checked against all files in `src/i18n/nl/glossary/`),
or is explained in the sentence (hartfalen, leptine, Gq-eiwit, fosfolipase). No host was added to
`config/link-allowlist.json` (all new URLs are on www.thuisarts.nl, www.ema.europa.eu, euclinicaltrials.eu and
clinicaltrials.gov, which are listed).

Validator: `npx tsx scripts/validate-content.ts --only ipamorelin` → 0 errors; the 4 warnings are the English page's
inline reporting links (not this group's file). The Dutch page alone (`--only compounds/nl/ipamorelin`): 0 errors,
0 warnings. Residue: `npx tsx scripts/check-locale-residue.ts --only ipamorelin --details` → 0 error/frame hits, 0 warn
hits. A check with every marker stripped found 56 hits, all `warn` (FDA, "in de VS", 503A): each is world context, FDA
evidence or the PCAC framing, and each carries a `residue-ok` marker (`evidence`, `world context`, `PCAC framing`).

## compounds/ipamorelin

**Method:** `translated` (from en, review pending). The regulatory section and the routes, help and reporting parts of
the harm-reduction section answer for the Netherlands and the EU, as the brief says for compound pages.

**Structure:** same frontmatter fields, same components, same `<Section>` order, same figures (Compare, Diagram ×2,
KeyNumber ×3, TimeStrip, IconArray, Mechanism, StudyTable, RegulatoryTable, ProductCheck with the same `extra`,
stop Callout, WarningSigns with the same `only`), same mechanism kinds and levels, all 13 studies. One fold left
(English "The UK, Canada and Australia"), one fold came in ("Nederland en de Europese Unie"), so the regulatory section
still has three folds; the Dutch fold comes before the US fold (the reader's frame first).

### What came back from the saved material (snapshot of 23 October)

From `research/for-nl-site/snapshot-2026-10-23/content/compounds-en/ipamorelin.mdx` and `MANIFEST-compounds-b.md`,
each fact re-checked against `research/nl/` or at the source today:

- `regulatory_notes` NL and EU: rewritten from `research/nl/status/ipamorelin.yaml` (fact-checked; as_of 27 October
  2026; the EU note now also says "no application and no orphan designation"). DE and BE notes not used (DE is not part
  of the Dutch site; BE is notes only and its row is not shown).
- The fold "European Union, the Netherlands …": the EU paragraph (EMA data include refused and withdrawn applications;
  ChEMBL: no approval anywhere, highest stage phase 2) and the Dutch bullet (CBG register; Geneesmiddelenwet art. 1 and
  40), re-checked: EMA medicines JSON (timestamp 2026-10-27T18:19:10Z) has no ipamorelin record; the merge confirmed the
  Geneesmiddeleninformatiebank's "Geen producten gevonden"; art. 1 and 40 as in nl-law facts 2, 4, 5.
- The callout "The US vote does not apply here" (Netherlands and EU): back as "Amerikaanse besluiten gelden hier niet".
- The saved Compare row "Changed by the July 2026 US vote? … changes the law here" (`nl-geneesmiddelenwet`): back as
  the row "Verandert een Amerikaans besluit iets?".
- Macimorelin's EU authorisation (Ghryvelin, 11 January 2019): re-checked today in the EMA medicines JSON (status
  Authorised, MA 11/01/2019) and in the Dutch product information (new source `ema-pi-ghryvelin-nl`); written with the
  Dutch SmPC indication ("uitsluitend voor diagnostisch gebruik"; adults; diagnosis of growth hormone deficiency), the
  most common side effect, the contraindication and the QT warning (advertising test, brief item 1). The FDA approval of
  Macrilen (now discontinued) stays as world context (marked).
- Anamorelin's EU refusal: re-checked in the EMA JSON (Refused, 16/11/2017; CHMP re-examination 14/09/2017).
- Not back: the German bullet (AMG § 21, the Anti-Doping Act annex), the Belgian bullet (replaced by a link to
  `/nl/legal/be/`) and the old UK paragraph.

### What was rewritten for the Netherlands

- **TL;DR:** the English "Is it legal to sell?" and "Can I own it in Australia?" became one Dutch pair, "Is het legaal
  in Nederland?" (supply and import forbidden, also for own use; no handelsvergunning). 4 pairs, 77 words.
- **Regulatory Lead and Compare:** columns Nederland and Europese Unie; rows approval, supply, US decisions, sport.
- **New fold "Nederland en de Europese Unie":** EU (no authorisation, no application, no orphan designation, ChEMBL,
  directive 2001/83 art. 6(1), no CTIS trial) and NL (CBG register; the art. 1 definition; the art. 40 ban; what it
  means for someone who uses it, in the words of `/nl/legal/nl/`; the "alleen voor onderzoek" label with the Douane's
  "Onderzoeksdoeleinden spelen dan geen rol"; zelf invoeren; a link to the Belgian notes).
- **US fold kept as world context** (FDA's 2024 assessment and the 0–12 votes are evidence about ipamorelin), with an
  opening line that it changes nothing in the Netherlands. The July 2026 PCAC facts keep all five points of the
  canonical framing; point 5 in the Dutch wording (none is an approved medicine in the Netherlands or the EU; Semax is
  registered in Russia; a US listing changes nothing outside the US).
- **Stop-now list:** Dutch help levels per item (STYLE-NL §5.1, brief item 2, nl-help fact 17): infection → "Bel
  direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." (112 if drowsy, confused or breathing very
  fast); swollen tongue or throat or hard breathing → 112, hives alone → appointment; swollen legs with chest pain or
  sudden breathlessness → 112, only thicker ankles → appointment; very high blood sugar → bel direct; heart rhythm with
  chest pain, breathlessness or fainting → 112, otherwise bel direct; fainting → 112 if not recovered within a minute or
  with chest pain or palpitations, otherwise appointment. Closing line "Twijfel je? … Is het ernstig? Bel 112."
- **Stop strip and stop list sources:** NHS pages replaced by Thuisarts pages (below).
- **Routes:** linked by the fixed anchors (#recept, #off-label, #artsenverklaring, #magistrale-bereiding,
  #compassionate-use, #klinisch-onderzoek, #zelf-invoeren), each with what the research says for an unauthorised
  peptide; plus `/nl/legal/nl/#wat-dit-voor-jou-betekent`, `/nl/safety/product-risk/#wat-een-labrapport-wel-en-niet-zegt`
  and `/nl/safety/sterile-technique/#wanneer-je-een-flacon-weggooit` (all three heading slugs checked in the Dutch files).
- **Reporting:** Lareb (also for products not from a pharmacy), `<JurisdictionCard code="NL" />`, and the one Belgian
  line "In België meld je een bijwerking bij het FAGG" with a link to `/nl/legal/be/`.
- **Added Dutch facts (sourced):** GP care has no eigen risico, lab tests ordered by the GP do (`zin-huisarts-zvw`);
  all Dutch doctors have professional secrecy (`thuisarts-naar-de-huisarts`); a new needle for every injection
  (`thuisarts-insuline-spuiten`, next to the English CDC source); the 2027 Prohibited List keeps ipamorelin under S2.2.4
  (nl-law fact 48); no trial in CTIS anywhere in the EU, and the ClinicalTrials.gov result re-run today.

### Citations dropped (page, cite id, why, what replaced it)

All on `compounds/ipamorelin`. Each supported only US, UK, Canadian or Australian framing (status, routes, reporting,
help), which leaves the Dutch page (brief, "What leaves").

| Cite id | Where on English | Why it went | Replaced by |
|---|---|---|---|
| mhra-products-search-cjc-1295-ipamorelin, ca-dpd-extract-search-status-b-2026-10-23, au-artg-search-status-b-2026-10-23 | what-it-is Compare, "Approved as a medicine?" | UK/CA/AU status | cbg-gib-search-status-2026-10-27, ema-medicines-json (chembl-ipamorelin kept) |
| usc-21-355 | regulatory Compare, US row | US new-drug law (the US row left the Compare) | nl-gmw-art-40-handelsvergunning, eu-directive-2001-83 |
| uk-hmr-2012-reg-46, uk-mda-1971-sch-2, uk-govuk-search-status-b-2026-10-23 | regulatory Compare and the UK/CA/AU fold | UK law and status | the NL/EU fold (nl-gmw-art-1-geneesmiddel, nl-gmw-art-40-handelsvergunning, eu-directive-2001-83, eu-regulation-726-2004) |
| ca-dpd-search-status-b-2026-10-23, ca-noc-search-status-b-2026-10-23, ca-hc-2026-04-think-twice-peptides, ca-hc-recalls-database, ca-pdl-human, ca-food-and-drug-regulations, ca-hc-gui-0116-personal-import | regulatory Compare and the UK/CA/AU fold | Canadian law, status, seizures and personal import | the NL/EU fold; zelf invoeren: douane-medicijnen-reizen-2026, nl-gnw-art-18-licence, nl-rbdha-2019-4817-postzending-eigen-gebruik, douane-invoer-geneesmiddelen-2026, douane-hvgem-geneesmiddelen-h12-fysiek-toezicht |
| au-poisons-standard-2026-10, au-poisons-standard-2015-06, au-poisons-standard-2015-02, au-tga-2026-04-peptide-responsibilities, au-tga-2026-06-advertising-prescription-medicines-guidance, au-tga-2014-09-scheduling-consultation, au-nsw-health-s4d, au-nsw-health-s4d-2026, au-vic-dpcs-act-1981, au-customs-prohibited-imports-regs, au-odc-growth-hormones-import-permit, au-tga-personal-importation-scheme | regulatory Compare and the UK/CA/AU fold | Australian scheduling, possession and import | as above |
| au-sia-peptides | Sport (WADA) paragraph | Sport Integrity Australia | link to /nl/legal/sport-and-doping/; the WADA cites stay, plus wada-2027-list-en for the 2027 list |
| uk-mhra-substance-index-status-c-2026-10-23, mhra-products-search-status-d-2026-10-23, ca-dpd-search-status-c-2026-10-23, ca-dpd-extract-search-merge-2026-10-24, au-artg-search-status-c-2026-10-23, au-artg-search-status-d-2026-10-23 | July 2026 PCAC bullet, point 5 | point 5 on English names the four countries | cbg-gib-search-status-2026-10-27, ema-medicines-json (point 5, Dutch wording; as on /nl/legal-routes/) |
| nhs-cellulitis, nhs-sepsis, nhs-anaphylaxis, nhs-oedema, nhs-high-blood-sugar, nhs-heart-palpitations, nhs-fainting | glance.stop_signs and the stop-now list | the UK help service; Dutch help levels come from Thuisarts | thuisarts-wondroos, thuisarts-sepsis, thuisarts-dikke-ogen-lippen, thuisarts-hartfalen (new), thuisarts-pijn-op-borst, thuisarts-diabetes-type-2 (nl-tesamorelin.yaml), thuisarts-hartkloppingen (new), thuisarts-flauwvallen (new) |
| fda-off-label-use | legal routes fold | US off-label explanation | nl-gmw-art-68-off-label |
| au-anzctr-search-status-b-2026-10-23 | legal routes fold | Australian/NZ trial register | ctgov-nl-peptide-search-2026-10-27, ctis-nl-peptide-search-2026-10-27, ctis-ipamorelin-search-2026-10-27 (new), ctgov-ipamorelin-search-2026-10-27 (new) |
| fda-medwatch, mhra-yellow-card, ca-hc-medeffect-reporting, ca-hc-canada-vigilance, au-tga-report-adverse-event | "Report side effects" | other countries' reporting routes | lareb-bijwerkingen-melden, lareb-2021-illegal-medicines, `<JurisdictionCard code="NL" />` |

Kept as evidence or world context (marked): every FDA source (the 2024 briefing is the page's main evidence source),
the US 2024 vote and 503A/503B facts, fda-drugsatfda-macrilen, ctgov-search-status-b-2026-10-23 and ctgov-nct07717866
(the only active record, an observational US study), cdc-2024-safe-injection-practices, medlineplus-igf1 and
medlineplus-hba1c (what the tests mean).

### New sources (`src/data/sources/nl-ipamorelin.yaml`)

All fetched and read on 27 October 2026; notes quote the text relied on.

- `thuisarts-hartfalen` ("Ik heb hartfalen", changed 9 April 2026): swollen feet and ankles, breathlessness; when to
  call (bel direct / 112; afspraak).
- `thuisarts-hartkloppingen` ("Ik heb hartkloppingen, wat kan ik doen?", changed 20 July 2026).
- `thuisarts-flauwvallen` ("Ik ben flauwgevallen, waar kwam het door?", changed 28 July 2026).
- `ema-pi-ghryvelin-nl` (Dutch product information of Ghryvelin, PDF): SmPC 4.1, 4.3, 4.4, 4.8 and section 9. Used
  instead of `ema-epar-ghryvelin`, whose title names a company (see "For the final sweep").
- `ctis-ipamorelin-search-2026-10-27` (CTIS public API, all member states: 0 for "ipamorelin" and "NNC 26-0161";
  control "retatrutide" 9).
- `ctgov-ipamorelin-search-2026-10-27` (ClinicalTrials.gov API v2: 3 records, two completed US trials and one active,
  not recruiting observational US study; none with an EU site).

### UNRESOLVED points and how the page handles them

- nl-law 5.1 (whether a few vials at home are "in voorraad hebben"): "Of bezit voor eigen gebruik mag, is niet
  duidelijk." (as on /nl/legal/nl/).
- nl-law 5.3 and 5.4 (which parcels Customs reports; whether a vial is a medicine or an active substance): the page says
  only what can happen ("kan … tegenhouden, melden bij de IGJ of in beslag nemen"), never what usually happens.
- nl-law 5.5 (enforcement against intra-EU parcels): not stated; the page gives the law (no bringing in from anywhere).
- nl-care 5.5 (European Pharmacopoeia monograph): "Of ipamorelin in de Europese Farmacopee staat, hebben we niet kunnen
  nagaan." Only the FDA's "no USP standard" is stated (marked evidence).
- nl-care 5.11 (an artsenverklaring for a substance authorised nowhere): "De IGJ zegt niet of deze weg ooit kan werken
  voor een stof die nergens is goedgekeurd." (as on /nl/legal-routes/).
- nl-help (whom the NVIC serves): not needed on this page; poisoning is not a stop item here.
- English page's own open point (phase 1: 40 men by design, 48 enrolled per the FDA summary): kept exactly as on English.

### Open questions for the medical or legal reviewer

1. **Medical, help levels:** the stop-now list gives a Dutch level per sign. For palpitations with chest pain or
   breathlessness, and for fainting with chest pain or palpitations, it says 112 where Thuisarts says "bel direct je
   huisarts of de huisartsen-spoedpost"; this keeps the site's faster level (nl-help fact 17, "where the site is faster,
   it keeps its level"). Please confirm.
2. **Medical, high blood sugar:** the English item (NHS: very thirsty, peeing a lot, feeling sick, drowsy or confused,
   fast breathing) now follows Thuisarts' signs (thirst, peeing a lot; with vomiting, drowsiness or fast or deep
   breathing → bel direct). Thuisarts' emergency list says "Je plast niet of heel weinig. En je hebt dorst." for the
   dehydrated stage; the page keeps "veel plassen" as the early sign. Please check the wording.
3. **Legal, use and possession:** the compound page repeats the legal/nl line ("Gebruiken staat niet in dat verbod.
   Invoeren en doorgeven wel … Of bezit voor eigen gebruik mag, is niet duidelijk."). Confirm it may stand on a compound
   page (CONTENT-GUIDE §1a: inform, never hint).
4. **Legal, `douane-2026-08-illegale-online-handel-medicijnen`:** its text (not its title or URL) names a webshop
   (nl-law 6.12). Cited here for one quoted sentence, never the name; please confirm.
5. **Legal, the US 2024 vote fold:** kept as world context because the FDA's review and the 0–12 votes are the main
   regulatory assessment of ipamorelin anywhere. It describes the US 503A/503B rules, which the brief lists as leaving
   "as a route"; the fold presents them as the FDA's assessment, never as a route, and opens with "Voor Nederland
   verandert het niets". Shorten or keep?
6. **Advertising test:** the page names one EU product (Ghryvelin, a related diagnostic) with its Dutch SmPC
   indication, its most common side effect, its contraindication and the QT warning. The TL;DR says "Amerikaanse
   klinieken en websites prijzen het aan voor afvallen, spieren en slaap" and answers at once that no study in people
   tested those uses. Please confirm neither reads as praise.

## Style terms (STYLE-NL lacks them; the word used)

| English | Nederlands used | Note |
|---|---|---|
| growth hormone secretagogue | groeihormoonsecretagoog | as the glossary (legal-b.json, `gh-secretagogue`) |
| releases growth hormone | laat groeihormoon vrijkomen / maakt groeihormoon vrij | B1; "afgeven" for the gland itself |
| growth hormone releasing peptides / factors | groeihormoon-releasing peptiden · stoffen die groeihormoon laten vrijkomen | the first as the glossary (`ghrp`) |
| drip into a vein (IV infusion) | infuus in een ader | "in een ader (intraveneus)" in STYLE §2.5 |
| bowel surgery · abdominal surgery | darmoperatie · buikoperatie | |
| postoperative ileus, bowel paralysis | darmstilstand (na een operatie) | glossary `ileus` alias "darmstilstand" |
| GH pulse | piek (groeihormoon) · stoot | |
| free base · acetate salt | vrije base · acetaatzout (acetaatvorm) | glossary `free-base-and-salt` |
| compounding pharmacy (US) | Amerikaanse apotheek die zelf medicijnen bereidt | STYLE §2.4 has "bereiding door een Amerikaanse apotheek" |
| outsourcing facility | apotheek die op grote schaal bereidt (outsourcing facility) | glossary term "outsourcing facility" |
| to nominate (for the 503A list) · nomination | voordragen · voordracht | |
| FDA "category 2" | categorie 2 | glossary `fda-category-2` alias |
| wellness clinic | wellnesskliniek | |
| lozenge | zuigtablet | |
| dummy drip | nepinfuus | |
| anastomotic leak | naadlekkage | glossary (ipamorelin.json) |
| hives | jeukende bulten | |
| heart failure | hartfalen (het hart pompt minder goed) | Thuisarts; no glossary entry (explained inline) |
| lean body mass · grip strength | vetvrije massa · knijpkracht | |
| fertilisation · embryo development | bevruchting · ontwikkeling van het embryo | |
| reward-seeking · dependence | zoeken naar beloning · afhankelijkheid | |
| orphan designation | aanwijzing als weesgeneesmiddel | glossary `orphan-designation` |
| international non-proprietary name | internationale generieke naam (INN) | glossary `international-nonproprietary-name` |
| Investigator's Brochure / IMPD | onderzoekersdossier (Investigator's Brochure of IMPD) | glossary `investigators-brochure`; as /nl/legal-routes/ |
| US Pharmacopeia standard | kwaliteitsnorm in de Amerikaanse farmacopee (USP) | |
| proof-of-concept trial | een kleine studie om het idee te testen (proof of concept) | |
| cancer screening due for your age | onderzoek naar kanker dat bij jouw leeftijd hoort | |

## For the final sweep (changes needed in files this group does not own)

1. `src/data/sources/ipamorelin.yaml` → `ema-epar-ghryvelin`: the title "Ghryvelin (previously Macimorelin Aeterna
   Zentaris): EPAR – medicine overview" names a company (CONTENT-GUIDE §11, brief "Sources"). Retitle it neutrally (for
   example "Ghryvelin (macimorelin): EPAR – medicine overview") before any Dutch page cites it. The Dutch ipamorelin page
   cites `ema-pi-ghryvelin-nl` instead, so nothing breaks now.
2. `src/data/sources/nl-tesamorelin.yaml` → `thuisarts-diabetes-type-2` is cited by this page too (stop-now list). Keep
   the id stable; if the tesamorelin group renames or drops it, update `src/content/compounds/nl/ipamorelin.mdx`.
3. The hexarelin page (group stubs-b1, `nl-stubs-b1.yaml` header) reuses `thuisarts-hartkloppingen` from
   `nl-ipamorelin.yaml`: keep the new ids in that file stable. If another group registers the same Thuisarts pages
   (hartfalen, hartkloppingen, flauwvallen) under other ids, merge them to these ids (same URL).
4. Glossary (optional): no Dutch or English entry exists for heart failure ("hartfalen"); this page explains it inline.
   If one is added, check it does not take over "hartfalen met behouden ejectiefractie" (tirzepatide.json, `hfpef`).
5. `src/data/compounds/ipamorelin.yaml`: no change needed (EU and NL rows as merged on 27 October 2026 match
   `research/nl/status/ipamorelin.yaml`).

## Check (independent, 27 October 2026)

Independent fact-check and edit of `src/content/compounds/nl/ipamorelin.mdx`, `src/data/sources/nl-ipamorelin.yaml`,
`src/i18n/nl/glossary/ipamorelin.json` and these notes, against the brief (incl. "Added after step 1"), STYLE-NL,
CONTENT-GUIDE, the fact-checked research of 27 October 2026 (`research/nl/*.md`, Fact-check sections first;
`research/nl/status/ipamorelin.yaml`; `research/nl-notes/merge.md`), the merged data file, the manifest
(`MANIFEST-compounds-b.md`, ipamorelin rows) and the current English page.

**What was checked**

- **Science parity, by script and by reading.** Every `<Cite>` of the English page is on the Dutch page, except the 46 ids
  that only supported US, UK, Canadian or Australian framing; all 46 are in the "Citations dropped" table above (checked
  one by one). `<Claim>` levels: 29 on each page, in the same order (hypothesis, in-vitro, human-controlled, animal …).
  Components: same `<Section>` order, 7 Leads, 22 folds, 3 KeyNumbers, IconArray, TimeStrip, 2 Compare, 2 Diagram,
  Mechanism, StudyTable, RegulatoryTable, ProductCheck (same `extra`), stop Callout, WarningSigns (same `only`). Numbers:
  every number of the English page is on the Dutch page in Dutch format, except "46" (UK HMR reg. 46), "2025" (the
  Canadian seizures) and the 1990s (written "jaren negentig"). Mechanism kinds and levels identical; all 13 study ids
  have a Dutch finding and limitation; each was read against the English text (fixes below).
- **New sources, fetched today.** `thuisarts-hartfalen`, `thuisarts-hartkloppingen`, `thuisarts-flauwvallen`: HTTP 200,
  `<title>` as registered, "Laatst gewijzigd" 9 apr, 20 jul and 28 jul 2026, every quoted call level found on the page.
  `ema-pi-ghryvelin-nl` (PDF, 200, read with pdftotext): SmPC 4.1 "uitsluitend voor diagnostisch gebruik", adults,
  diagnosis of GHD; 4.2 under supervision of a doctor; 4.3 hypersensitivity; 4.4/4.8 QTc about 11 ms; 4.8 dysgeusie 5%,
  hoofdpijn, vermoeidheid, misselijkheid 3%, duizeligheid 2%; section 9 "Datum eerste vergunning: 11 januari 2019". EMA
  medicines JSON (timestamp 2026-10-27T18:19:10Z, 2,754 records): Ghryvelin "Authorised", MA 11/01/2019, last update
  13/05/2024; Adlumiz (anamorelin) "Refused" 16/11/2017; no record for ipamorelin or NNC 26-0161.
  `ctis-ipamorelin-search-2026-10-27`: CTIS public API, "ipamorelin" 0, "NNC 26-0161" 0, control "retatrutide" 9.
  `ctgov-ipamorelin-search-2026-10-27`: API v2, query.intr and query.term "ipamorelin" 3 (NCT00672074 and NCT01280344
  completed, NCT07717866 active not recruiting, observational; all US sites only), "NNC 26-0161" 0. Both link pages
  answer 200. All six entries hold; no title or URL names a company.
- **Dutch, EU and Belgian facts** against nl-law facts 1–7, 31, 36–43, 48 and §5; nl-care facts 13–39, 49, 52, 54 and §5;
  nl-help facts 1–19 and the fact-check table (fact 17); eu-status fact 9; the NL and EU rows of the data file. Link
  anchors checked in the Dutch target files: `/nl/legal-routes/` (`## Recept` … `## Zelf invoeren`),
  `/nl/legal/nl/#wat-dit-voor-jou-betekent`, `/nl/safety/product-risk/#wat-een-labrapport-wel-en-niet-zegt`,
  `/nl/safety/sterile-technique/#wanneer-je-een-flacon-weggooit`. No link to `/en/` or to a US/UK/CA/AU/IE-NZ page.
- **Rules.** "je" only (no "u" or "uw"); no word of STYLE-NL §5.6 (the hits "natuurlijk ghreline" and "slechter" are not
  claims); no commerce word in title, headings, Lead questions, fold or figure titles, labels or link texts; no dose,
  schedule or seller hint outside study descriptions; Bel 112 and the help levels as STYLE-NL §5.1 and brief item 2;
  Lareb for side effects; Belgium one line plus links to `/nl/legal/be/`.

**Changes made**

| Page / file | Before | After | Why | Source |
|---|---|---|---|---|
| compounds/ipamorelin, TL;DR "Is het legaal in Nederland?" | "Leveren en invoeren zijn verboden, ook voor eigen gebruik. Het heeft geen handelsvergunning." | "Het heeft geen handelsvergunning. Leveren is dus verboden, en invoeren ook, zelfs voor eigen gebruik." | "ook voor eigen gebruik" read as if supply for own use were a category; the own-use point is about import (TL;DR now 79 words) | nl-law facts 4, 38 |
| glance.facts, route | "In een ader; niets gepubliceerd over onder de huid" | "In een ader; niets gepubliceerd over injecties onder de huid" | broken phrase | English page |
| studies johansen-1999-bone-growth | "… en ze kwamen meer aan, meer naarmate de dosis hoger was." | "… en ze kwamen meer aan. Hoe hoger de dosis, hoe groter die effecten." | English: both effects dose-dependent | English page; `johansen-1999-ipamorelin-bone` |
| studies lall-2001-body-fat | "groeihormoonvrijmakers" | "stoffen die groeihormoon laten vrijkomen" | coined word; the page's own term elsewhere | STYLE-NL §1.8 |
| studies greenwood-2012, evidence fold (2×) | "mede-auteur" | "medeauteur" | spelling (Woordenlijst) | – |
| studies beck-2014-ileus-trial | "Bij 114 volwassenen … kregen patiënten …; Andere maten voor herstel ook niet." | "114 volwassenen kregen … een infuus met ipamorelin of placebo …; Ook andere maten voor herstel verschilden niet statistisch significant." | redundant subject; "significant" only as "statistisch significant" | STYLE-NL §1.8; English page |
| regulatory_notes EU | "het EMA heeft geen handelsvergunning, geen aanvraag …" | "in de gegevens van het EMA staat geen handelsvergunning, geen aanvraag …" | the EMA does not "have" an authorisation; its records show none | `research/nl/status/ipamorelin.yaml` |
| regulatory_notes NL; regulatory Compare (2 cells) | "Een medicijn zonder handelsvergunning …"; "mag een medicijn" | "Een geneesmiddel zonder handelsvergunning …"; "mag een geneesmiddel" | legal text uses the legal term | STYLE-NL §2.5, §5.6 |
| what-it-is Compare detail | "gecontroleerd op 22, 23 en 27 oktober 2026" | "gecontroleerd op 22 en 27 oktober 2026" | nothing in the Dutch table rests on the 23 October (UK/CA/AU) checks any more | sources of the rows |
| what-it-is, macimorelin (Ghryvelin) | "De vaakste bijwerking is een bittere smaak of metaalsmaak." | adds "onder toezicht van een arts" and "De bijwerkingen die het vaakst voorkwamen, waren een bittere smaak of metaalsmaak, hoofdpijn, moeheid, misselijkheid en duizeligheid." | advertising test (brief, item 1): an EU product named with its SmPC use, its main side effects and contraindication | `ema-pi-ghryvelin-nl` (SmPC 4.2, 4.8; read today) |
| mechanism Diagram, row 4 | "niet gemeten bij mensen die ipamorelin kregen" | "geen gepubliceerde meting bij mensen die ipamorelin kregen" | English: "not reported"; the page says "we found no published measurement" | English page |
| mechanism fold, in-vitro Claim | "hetzelfde maximale effect als GHRP-6" | "een vergelijkbaar maximaal effect als GHRP-6" | English: "similar"; "hetzelfde" overstated | `raun-1998-ipamorelin` |
| mechanism fold, IGF-1 | "dat de hypofyse minder gaat reageren als je die steeds blijft aanzetten" | "dat de hypofyse misschien minder gaat reageren als die steeds opnieuw wordt aangezet" | English: "may answer less" (a hint, not a finding); also no "je" as if the reader pushes it | English page |
| mechanism fold, MK-677 Claim | "een verwante tablet die je elke dag slikt, MK-677" | "MK-677, een verwante tablet voor elke dag" | "die je … slikt" reads as the reader's use (CONTENT-GUIDE §1) | English page |
| evidence KeyNumber 320 | "Resultaten zijn nooit geplaatst of gepubliceerd." | "Resultaten zijn niet geplaatst of gepubliceerd." | English: "have not been"; label ≤ 18 words | `ctgov-nct01280344` |
| evidence fold title | "een voor een" | "één voor één" | STYLE-NL §3 | – |
| unknowns, long-term safety | "geen studies naar herhaalde doses, …, naar kanker of naar de voortplanting" | "geen studies naar giftigheid bij herhaalde doses (toxiciteit), …, naar het ontstaan van kanker (carcinogeniteit) of naar de voortplanting" | English: repeat-dose toxicity and carcinogenicity studies; "studies naar kanker" changed the meaning | `fda-pcac-2024-ipamorelin-briefing` |
| regulatory fold "Status in Nederland, de EU en de sport" | "De statussen zijn gecontroleerd op 27 oktober 2026." | "De status in Nederland en de EU is gecontroleerd op 27 oktober 2026." | the table shows the WADA row with as_of 22 October 2026 | data file |
| NL/EU fold, ChEMBL | "een Europese databank van medicijnen" | "een databank met gegevens over stoffen en medicijnen" | "Europese" suggested an EU register in an EU paragraph; ChEMBL is a research database (EMBL-EBI) | `chembl-ipamorelin` |
| NL/EU fold, art. 1 | "om een ziekte te behandelen" | "om een ziekte te behandelen of te voorkomen" | art. 1(1)(b) 1° | nl-law fact 2 |
| US fold, July 2026 vote | "stemde … om BPC-157 op de Amerikaanse 503A-lijst te zetten" | "stemde … om aan te bevelen BPC-157 op de Amerikaanse 503A-lijst te zetten" | the committee recommended; it cannot list (CONTENT-GUIDE §1 point 1; as `/nl/legal-routes/`) | `fda-pcac-2026-07-meeting` |
| US fold, point 5 | "Semax is in Rusland als medicijn geregistreerd." | "Semax is wel in Rusland als medicijn goedgekeurd, schrijft de FDA." | STYLE-NL §2.4 (no "geregistreerd"); attributed as CONTENT-GUIDE §1 point 5 | `fda-pcac-2026-semax-briefing` |
| risks Lead | "Lange-termijnrisico’s zijn niet onderzocht." | "Wat lang gebruik doet, is niet onderzocht." | spelling and B1 | – |
| harm reduction, stop-now item 3 | "Worden alleen je enkels steeds dikker? Maak dan een afspraak met je huisarts." | "Worden je benen of enkels steeds dikker, of raak je sneller buiten adem als je je inspant? Maak dan een afspraak met je huisarts." | the sign (swelling with breathlessness) had no level for breathlessness that is not sudden; Thuisarts: afspraak for "Je bent sneller moe of buiten adem als je je inspant" and "Je krijgt steeds dikke voeten en enkels" | `thuisarts-hartfalen` (read today) |
| harm reduction, stop-now item 6 | "Kom je niet binnen een minuut bij, of had je pijn op de borst of hartkloppingen? Bel dan 112." | "Kom je niet binnen een minuut weer bij? Dan moet iemand anders direct 112 bellen. Had je vlak voordat je flauwviel pijn op de borst of hartkloppingen? Bel dan ook 112." | someone who is unconscious cannot call; Thuisarts: "zeg dat iemand anders snel moet bellen", "vlak voordat je flauwviel" | `thuisarts-flauwvallen` (read today); warning sign `fainting-serious` |
| legal routes fold, Artsenverklaring | "Een apotheek vraagt die aan bij de IGJ … Een flacon "voor onderzoek" komt met geen van beide." | "Een apotheek, groothandel of fabrikant in Nederland vraagt dan een ontheffing aan bij de IGJ … komt met geen van beide; dat is onze lezing." | who may apply; the IGJ's term "ontheffing"; nl-care §5.11 asks to label the vial point as our reading | nl-care facts 21–23, §5.11; `igj-qa-zonder-handelsvergunning` |
| legal routes fold, Magistrale bereiding | "Een apotheek mag alleen een grondstof gebruiken die aan een officiële farmacopee voldoet." | "Een apotheek maakt dan zelf een medicijn, op recept en op kleine schaal, voor één patiënt. Een grondstof die in geen officiële farmacopee staat, kan de apotheek volgens de IGJ "niet zomaar" gebruiken." (+ `eu-directive-2001-83`) | "mag alleen" overstated the IGJ ("kan … niet zomaar worden gebruikt"); what the route is was missing | nl-care facts 29–31; `igj-eigen-bereidingen-apotheek` |
| `src/i18n/nl/glossary/ipamorelin.json`, `ibutamoren` | "Een stof om te slikken die …" | "Een stof in tabletvorm die …" | "om te slikken" reads as an instruction | – |

The writer's notes above stay as written; where they differ from the page now (TL;DR word count 77 → 79; the stop-now
help levels for items 3 and 6), this table is current.

**Validation.** `npx tsx scripts/validate-content.ts --only compounds/nl/ipamorelin`: 0 errors, 0 warnings (one
KeyNumber label warning, 19 words, came from the first wording of my fix and was fixed). `--only ipamorelin`: 0 errors;
the 4 warnings are the English page's inline reporting links (not this group's file). `npx tsx
scripts/check-locale-residue.ts --only ipamorelin --details`: 0 error/frame hits, 0 warn hits.

**Remaining concerns for the reviewer**

1. **`douane-2026-08-illegale-online-handel-medicijnen`** (the "Onderzoeksdoeleinden spelen dan geen rol" quote): its title
   and URL name no business, but its body names a webshop. Brief item 5 says "any page naming a seller or company" is not
   citable; nl-law (fact-check, 5.6 and 6.12) says pages can cite it without quoting the name. Kept, because the research
   says so and the same source is cited on `/nl/legal/nl/`, `/nl/legal-routes/`, `/nl/legal/research-use-only/` and several
   compound pages; if the owner reads item 5 strictly, replace it site-wide by `igj-2026-04-nps-websites-offline` (IGJ and
   NVWA on "disclaimers als 'voor onderzoeksdoeleinden'", no seller named) and `douane-hvgem-geneesmiddelen-h7-vaststelling-geneesmiddel`.
2. **Medical, fainting.** The 1-minute threshold comes from the site's shared warning sign `fainting-serious` (English
   basis, NHS); Thuisarts says fainting lasts at most 3 minutes and "Bel direct je huisarts of de huisartsen-spoedpost" if
   unconscious for longer than 3 minutes. The page keeps the site's faster level (nl-help fact 17). Same for palpitations
   or fainting with chest pain (112 here; "bel direct" on Thuisarts): the writer's open question 1 stands.
3. **Legal:** the writer's open questions 3 (the legal/nl line on use and possession on a compound page) and 5 (the US
   2024 vote fold kept as world context) stand; I found nothing in the research against either.
4. **Data date (for the final sweep, not my file):** the WADA row of `src/data/compounds/ipamorelin.yaml` has as_of
   2026-10-22; nl-law fact 48 compared the 2026 and 2027 lists line by line on 27 October 2026 (ipamorelin S2.2.4 in both).
   The row could move to 2026-10-27; the page text does not depend on it.
5. **English words kept** with a Dutch explanation: outsourcing facility (glossary), proof of concept, Investigator's
   Brochure / IMPD (glossary), "groeihormoon-releasing peptiden" (glossary `ghrp`, as the Dopingautoriteit's translation
   "Groeihormoon-releasing Peptiden"). Not in STYLE-NL §2.8; for the final sweep's style list.
6. The NL/EU fold puts "Europese Unie" before "Nederland" (the EU paragraph explains the authorisation first). The locale
   order is NL, EU; swap if the reviewer prefers the reader's country first. No fact changes.
