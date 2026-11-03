# Notes: group basics-a (27 October 2026)

Pages written (all three from the current English page, which is the base):

| Dutch file | English base | Method |
|---|---|---|
| `src/content/pages/nl/basics/index.mdx` | `src/content/pages/en/basics/index.mdx` | translated |
| `src/content/pages/nl/basics/what-is-a-peptide.mdx` | `src/content/pages/en/basics/what-is-a-peptide.mdx` | translated |
| `src/content/pages/nl/basics/how-signalling-works.mdx` | `src/content/pages/en/basics/how-signalling-works.mdx` | translated |

Same frontmatter fields, same `##` order, same components and figure ids, same `related` keys (all on the brief's
route list), `last_reviewed` and `reviewed_by` as on English, `translation: { method: translated, from: en, review:
pending }`. No new sources (so no `src/data/sources/nl-basics-a.yaml`) and no new glossary entries (so no
`src/i18n/nl/glossary/nl-basics-a.json`): every term the pages use is already in the Dutch glossary
(`basics.json`, `semaglutide.json`, `tirzepatide.json`, `safety-b.json`, `final-qa.json` …).

Validator (`--only pages/nl/basics/`): 0 errors, 0 warnings at the last run (earlier warnings were only `related`
keys of pages other groups had not written yet). Residue check (`--only pages/nl/basics/ --details`): 0 hits. A
scan of the same files with the markers stripped gives exactly the 5 warn hits that the 5 markers cover (FDA,
"in de VS"), so every marker is needed and none hides more than its line.

## What came back from the saved material (23 October)

The basics pages had little Dutch or EU framing (`research/for-nl-site/MANIFEST-about-history-en.md`, sections
`basics/how-signalling-works.mdx, basics/what-is-a-peptide.mdx`). Restored:

- what-is-a-peptide, fold "Natuurlijk is niet ongevaarlijk": "A Dutch case report" comes back as "Een Nederlandse
  casusbeschrijving uit 2026" (`stammers-2026-insulin-falsified-semaglutide`: NTvG, Albert Schweitzer ziekenhuis
  and Deventer Ziekenhuis).
- what-is-a-peptide, recombinant fold: the 23 October form "the EU and US labels for semaglutide state … yeast",
  EU first, both cites kept (`ema-epar-wegovy`, `fda-label-ozempic`). Checked in the Dutch Wegovy SmPC today:
  "geproduceerd met behulp van recombinant-DNA-techniek in Saccharomyces cerevisiae-cellen".
- what-is-a-peptide and how-signalling-works: the EU product information is the reader's own frame, so the
  English `{/* residue-ok: EMA evidence */}` markers and the "European product information … (evidence)"
  hedging are gone; the EMA facts stand as plain EU facts.
- `ema-epar-byetta` (cut from English on 24 October) was not restored: the saved fact "authorised in the EU until
  1 January 2026" is not in `research/nl/`, so the page states no EU status for exenatide. It keeps only the
  historical fact that exenatide became an authorised diabetes medicine (`dailymed-byetta-label`).

## What was rewritten for the Netherlands and the EU

**index.** No country answer on the English page. "Peptides sold outside pharmacies" kept as "buiten de apotheek
verkocht" (body text, a fact). "These pages give no doses" → the fixed sentence "We noemen geen doseringen."

**what-is-a-peptide.**
- Peptide-or-protein table: the US rows (NHGRI glossary, FDA rule) stay as world context (the FDA row marked
  inside its last cell). **Added one EU row** and one fold paragraph: the EMA's 2025 guideline on synthetic peptides
  gives no number of amino acids; it draws the line by manufacture (chemically synthesised peptides "fall outside
  the definition of a biological substance"; recombinant products are outside its scope). Read today in the PDF
  (`ema-2025-synthetic-peptides-guideline`, section 2 "Scope" and the biosimilar section, page 22–23). Cited to the
  id already on the page.
- "A regulated maker purifies the product and tests it against set limits before release": the US rule
  (`ecfr-21-211-165`) was the reader's frame on English; the Dutch page gives the EU rule instead: Directive
  2001/83/EC art. 51, the Qualified Person must make sure each batch "has been manufactured and checked in compliance
  with the laws in force … and in accordance with the requirements of the marketing authorization". Read today in
  the consolidated text (CELEX 02001L0083-20220101 via the Publications Office CELLAR resolver, the same version as
  the registered `eu-directive-2001-83`). The EMA guideline cite stays.
- "Every peptide medicine on this site is such a chain" → "Elk peptide op deze site": most compounds on this site
  are not medicines (STYLE-NL §5.6).
- Orforglipron in the size table: "een middel met een klein molecuul (geen peptide)", not "medicijn": it is not
  authorised in the EU (see below).
- Leuprolide → "leuproreline (Amerikaanse naam: leuprolide)", as `src/i18n/nl/timeline.json` writes it; the cited
  label stays the US Lupron Depot label (evidence).

**how-signalling-works.**
- "about 34% of all drugs approved in the United States" stays as evidence (marked).
- Orforglipron: "a small-molecule GLP-1 medicine" → "een middel met een klein molecuul dat op de GLP-1-receptor
  werkt", plus one world-context line: approved in the US; in the EU the EMA gave a positive opinion on 15 October
  2026 and the European Commission had not decided by 27 October 2026 (`research/nl/eu-status.md` fact 11; EMA
  Foundayo page re-read today: status "Opinion"; cites `fda-2026-foundayo-approval`, `ema-epar-foundayo-opinion`).
  Same answer as basics-b's why-not-a-pill ("In Nederland en de EU nog niet goedgekeurd").
- Bremelanotide: "an authorised US medicine" becomes one marked world-context line: approved in the US, not in the
  EU or the Netherlands (eu-status fact 7; `ema-medicines-json`, `cbg-gib-search-status-2026-10-27`).
- **Advertising test** (brief, "Added after step 1", item 1): the GLP-1 fold names wanted effects of semaglutide
  ("Gewenst bij diabetes type 2", "Gewenst bij gewichtsbeheersing") and the explainer shows them, so one B1
  paragraph was added in the same fold with the Dutch SmPC indications (Ozempic and Rybelsus: adults with
  insufficiently controlled type 2 diabetes, besides diet and exercise; Wegovy: weight management besides a
  low-calorie diet and more exercise, adults with BMI ≥ 30, or 27 to < 30 with a weight-related condition, and
  adolescents from 12 years with obesity and over 60 kg), prescription only, the most reported side effects
  (Wegovy SmPC 4.8: stomach and gut complaints such as nausea, diarrhoea, constipation, abdominal pain, vomiting),
  the contraindication (4.3: hypersensitivity to the active substance or an excipient), "Ozempic om af te vallen is
  off-label", and a link to `/nl/compounds/semaglutide/`. Read today in the Dutch SmPCs (`ema-pi-ozempic-nl`,
  `ema-pi-rybelsus-nl` via `research/nl/status/semaglutide.yaml` `indications_nl_from_smpc`; `ema-pi-wegovy-nl`
  downloaded and read: 4.1, 4.3, 4.8, "Aan medisch voorschrift onderworpen geneesmiddel").
- Fading side effect: the Dutch Wegovy SmPC itself says both halves (4.5: "Semaglutide vertraagt de maaglediging
  … Er werd geen klinisch relevant effect op de snelheid van maaglediging waargenomen met semaglutide 2,4 mg,
  waarschijnlijk als gevolg van een tolerantie-effect"). The page quotes the Dutch wording; `ema-pi-wegovy-nl` is
  added next to the English cites `ema-epar-wegovy` and `fda-label-wegovy` (both kept). The 2,4 mg strength is not
  printed (English has no number there).
- Compare table: the English first row writes `<Verdict is="yes" /> Yes`, which renders "Yes Yes" (the component
  prints the word). The Dutch row has the verdict and the cite only, so it reads "Ja" once.

## Citations dropped (page, id, why, replacement)

1. what-is-a-peptide, `nhs-low-blood-sugar` (twice: the "natural" figure's cite line and the fold "Hoeveelheid").
   Why: the NHS (England) patient page is another country's health service; a Dutch equivalent exists. Replaced by
   `thuisarts-hypo-diabetes-type-2` (Thuisarts, "Laatst gewijzigd: 14 jul 2026", re-read today: "zweten, trillen en
   honger", people who look "verward", "Ook kun je bewusteloos en in een coma raken. Dit gebeurt vooral bij mensen
   die insuline spuiten"). The claim is unchanged (too much insulin → low blood sugar with shaking, confusion and,
   if severe, unconsciousness).
2. what-is-a-peptide, `ecfr-21-211-165`. Why: the US current-GMP rule as the reader's frame for "tested before
   release". Replaced by `eu-directive-2001-83` (art. 51, Qualified Person), next to the kept
   `ema-2025-synthetic-peptides-guideline`.

No other English cite was dropped. Added cites (all existing ids): `thuisarts-hypo-diabetes-type-2`,
`eu-directive-2001-83`, `ema-epar-foundayo-opinion`, `ema-medicines-json`, `cbg-gib-search-status-2026-10-27`,
`ema-pi-ozempic-nl`, `ema-pi-rybelsus-nl`, `ema-pi-wegovy-nl`.

## UNRESOLVED points and how the pages handle them

- No UNRESOLVED point of `research/nl/` (nl-law, nl-care, nl-help, eu-status, be-notes) touches these pages: they
  carry no help levels, reporting routes, insurance or treatment routes. No Belgian note is needed (the answer does
  not differ for Belgium on these pages).
- Exenatide's current EU status: not in `research/nl/`; left out (see above).

## Open questions for the reviewers

- Medical: the B2 body keeps pharmacology terms from the Dutch glossary ("intrinsieke activiteit" for efficacy,
  "potentie", "partiële agonist", "biased agonisme", "desensitisatie"); please check they read as Dutch
  pharmacology teaching does. "eilandjes van Langerhans uit dieren" for "animal islets".
- Medical / legal: is the semaglutide SmPC paragraph in the GLP-1 fold (how-signalling-works) the right way to meet
  the advertising test on a mechanism page, or should the fold only link `/nl/compounds/semaglutide/`? It adds about
  110 words that English does not have.
- Regulatory: the EU row of the peptide-or-protein table reads the EMA guideline's biosimilar section ("chemically
  synthesised peptides … fall outside the definition of a biological substance") as the EU's way of drawing the
  line. Please confirm this is a fair summary (the guideline gives no amino-acid count).
- Legal: index and what-is-a-peptide name BPC-157, TB-500 and KPV as "buiten de apotheek verkocht" and "een product
  dat als natuurlijk peptide wordt verkocht" (body text, facts, no praise). Check against the advertising test.

## Style terms (STYLE-NL lacks these; the word used)

| English | Dutch used | Note |
|---|---|---|
| signalling (page name) | signalen ("Hoe signalen werken") | B1 for "signaaloverdracht" |
| efficacy (pharmacology) · potency | intrinsieke activiteit · potentie | glossary `intrinsic-efficacy`, `potency`; not "werkzaamheid" (§5.6 claim word) |
| full · partial · inverse agonist · biased agonism | volledige · partiële · inverse agonist · biased agonisme | glossary |
| second messenger | tweede boodschapper | glossary |
| the body pushes back · push-back | het lichaam stuurt tegen · tegensturing | heading and index table |
| feedback loop | terugkoppelingslus | glossary alias |
| desensitisation · tolerance | desensitisatie · tolerantie | glossary |
| grip and push | grip en duw | heading |
| leuprolide | leuproreline (Amerikaanse naam: leuprolide) | as timeline.json; avoids "in de VS" |
| death cap mushroom · alpha-amanitin | groene knolamaniet · alfa-amanitine | |
| Gila monster · rhesus monkeys | gilamonster · resusapen | |
| EMA scientific guideline | wetenschappelijke richtlijn van het EMA | so it is not read as an EU directive (§2.3 note); official EU Dutch is "richtsnoer" |
| qualified person | Qualified Person | glossary; the law says "bevoegde persoon" |
| deletion · truncated · insertion sequences | deletiesequenties · afgebroken sequenties · insertiesequenties | not "ingekorte" (see sweep) |
| counter-ions | tegenionen (zoutpartners) | |
| castrate level | castratieniveau | glossary |
| premenopausal | vóór de overgang | |
| hallmarks of cancer | kenmerken van kanker | |
| islets | eilandjes van Langerhans | |
| solid support · resin beads · yield | vaste drager · bolletjes van hars · opbrengst | |
| dalton (unit) | dalton, no plural ("883 dalton") | |
| precise (peptide) | gericht | "Gericht is niet hetzelfde als onschadelijk" |

## For the final sweep (files this group does not own)

1. `src/i18n/nl/glossary/safety-b.json`, `deletion-sequence`: the aliases "ingekorte sequentie" and "ingekorte
   sequenties" mean truncated sequences, a different impurity (the EMA guideline lists deletion, truncated and
   insertion sequences separately). Suggest removing them, so a truncated sequence never links to the deletion
   definition. (This page writes "afgebroken sequenties" to avoid the wrong link.)
2. `src/data/sources/nl-research-nl-help.yaml`, `thuisarts-hypo-diabetes-type-2`: its note says "Cited only for the
   action levels and what helpers do". This group also cites it for the symptoms (trillen, verward, bewusteloos en in
   coma, vooral bij insuline). The page says this (re-read today); the note could be widened by its owner.
3. `src/data/sources/shared.yaml`, `eu-directive-2001-83`: no note. Suggest: "Art. 51(1)(a), read 27 October 2026
   in the consolidated text (CELEX 02001L0083-20220101, via CELLAR): the qualified person is responsible for securing
   that each batch has been manufactured and checked in compliance with the laws in force and the marketing
   authorisation."
4. `src/data/sources/bpc-157.yaml`, `ema-medicines-json`: `accessed: 2026-10-20`; the research re-downloaded it on
   27 October 2026 (eu-status.md §3). Its owner may update the date.
5. `src/i18n/nl/explainers.json`, `glp1-action.summary` and `.caption` ("En het helpt mensen minder te eten",
   "En mensen hebben minder honger") name an effect of semaglutide without side effects or the indication. On this
   page the fold right below carries them; the UI owner may want to check the strings against the advertising test
   on their own (they also show on other pages that use the explainer).
6. English (for the English owner, not edited): `src/content/pages/en/basics/how-signalling-works.mdx`, Compare row
   "Binds the receptor?" renders "Yes Yes" (`<Verdict>` prints the word and the cell repeats it).

## Check (independent, 27 October 2026)

Independent fact-check and edit of the three pages against the current English pages, the brief (including "Added
after step 1"), STYLE-NL, the content guide and `research/nl/` (Fact-check sections). Sources re-opened today:
the EMA synthetic-peptides guideline PDF (EMA/CHMP/CVMP/QWP/367182/2025, pdftotext: scope, section 4.1.2, the
biosimilar section), the Dutch Wegovy SmPC PDF (2, 4.1, 4.3, 4.5, 4.8, 5.2, "Aan medisch voorschrift onderworpen
geneesmiddel"), Directive 2001/83 art. 51 in Dutch (CELLAR, CELEX 02001L0083-20220101: "de in artikel 48 bedoelde
bevoegde persoon … iedere partij geneesmiddelen is vervaardigd en gecontroleerd … met inachtneming van de eisen voor
de vergunning voor het in de handel brengen"), the EMA Foundayo page (status "Opinion", positive, 15/10/2026, no
Commission decision), the Vyleesi label on DailyMed (6.1: "1247 premenopausal women"; 5.2: 1% with up to 8 doses a
month, 38% after 8 days of daily use, face, gingiva and breasts, resolution not confirmed in all; 12.1:
"nonselectively activates several receptor subtypes", MC1R and MC4R most relevant), the Thuisarts hypo page
("trillen", "in de war zijn", "bewusteloos en in een coma … vooral bij mensen die insuline spuiten", "Laatst
gewijzigd: 14 jul 2026") and PubMed 42390457 (Stammers 2026, Ned Tijdschr Geneeskd, language Dutch, Albert
Schweitzer ziekenhuis Dordrecht and Deventer Ziekenhuis: "Een Nederlandse casusbeschrijving" is right). Status facts
against `research/nl/eu-status.md` facts 2, 7, 11, 12, 13 and its fact-check, `research/nl/status/semaglutide.yaml`
(`indications_nl_from_smpc`) and `pt-141.yaml`, and the merged EU/NL rows of `src/data/compounds/pt-141.yaml`.

**Science parity (script and reading):** every English `<Cite>` id is on the Dutch pages except the two framing cites
listed above (`nhs-low-blood-sugar`, `ecfr-21-211-165`, both replaced); the `<Claim>` levels match in number and order
(what-is-a-peptide: in-vitro, animal, animal; how-signalling-works: in-vitro, in-vitro, animal, hypothesis, animal,
hypothesis); KeyNumber levels and sources, Diagram, Compare, Explainer and fold counts, the `##` order and the figure
ids are identical; every number was checked against the English page (Dutch format). No science was missing.

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| index | "peptiden die buiten de apotheek worden verkocht" | "peptiden die buiten de apotheek in omloop zijn" | same fact without a commerce word (advertising test; STYLE-NL §7, §5.3) | `fda-pcac-2026-*-briefing` (unchanged) |
| index | "geen advies over wat je gebruikt"; link texts "de risico’s van een product", "de alarmsignalen" | "geen advies over welk middel je gebruikt"; link texts "productrisico", "alarmsignalen" | clearer; link text = the Dutch target pages' nav titles | — |
| index | link text "Waarom geen pil?" | "Waarom geen pil" | the Dutch page's nav title (basics-b) | — |
| what-is-a-peptide | description "hoe chemici hem laten meegaan" | "hoe chemici de werking verlengen" | "meegaan" is said of durable goods; ≤ 170 characters | — |
| what-is-a-peptide | TL;DR "Insuline is lichaamseigen, maar te veel is gevaarlijk. Het hoofdgif van de groene knolamaniet is een peptide." | "Insuline houdt je in leven, maar te veel is gevaarlijk. Een dodelijk paddenstoelgif is ook een peptide." | meaning had changed ("keeps you alive" became "the body's own"); B1 word (the body names the knolamaniet); 18 words | English TL;DR; `le-dare-2021-amanitins` in the body |
| what-is-a-peptide | EU table row "Wat telt, is hoe het is gemaakt: een chemisch gemaakt peptide valt buiten de definitie van een biologische stof" | "Geen aantal: peptiden heten er "kleinere eiwitten". Wel telt hoe het is gemaakt: een chemisch gemaakt peptide is geen biologische stof" | the guideline draws no peptide/protein line by manufacture: it calls peptides "smaller proteins" and uses manufacture only for what counts as a biological substance (biosimilar section) | `ema-2025-synthetic-peptides-guideline`, PDF re-read today |
| what-is-a-peptide | fold: "Ze kijkt naar hoe een peptide is gemaakt. Kleinere eiwitten (peptiden) kunnen …" | "Ze noemt peptiden "kleinere eiwitten", die in cellen of chemisch gemaakt kunnen worden. Of een peptide een biologische stof is, hangt af van hoe het is gemaakt … Daarom kan een chemische kopie van een biologisch medicijn niet de route voor biologische kopieën (biosimilars) volgen." | same correction; the biosimilar point is why the line matters to regulators (the fold's title) | guideline: "The biosimilar regulatory pathway is not possible for chemically synthesised peptides since these fall outside the definition of a biological substance." |
| what-is-a-peptide | "Het woord dekt geteste medicijnen" | "Onder het woord vallen geteste medicijnen" | calque of "covers" | — |
| what-is-a-peptide | "komen er een voor een bij … De klare keten wordt losgeknipt." | "komen er één voor één bij … Daarna knippen chemici de complete keten los." | spelling (één); "klare" means "clear", not "finished"; active voice | — |
| what-is-a-peptide | "En bij slecht gemaakte producten: vervuiling met …" | "Bij slecht gemaakte producten noemt het ook vervuiling met …" | sentence fragment | `dhondt-2014-peptide-impurities` |
| what-is-a-peptide | GnRH row "houdt het het systeem van de geslachtshormonen draaiende … legt het dat stil" | "In pulsen gegeven houdt het de geslachtshormonen op gang. Zonder pauze gegeven legt het ze stil" | "het het"; same words as the signalling page | — |
| what-is-a-peptide | "Een product dat als natuurlijk peptide wordt verkocht, is ook een gemaakt product" | "Ook een product dat "natuurlijk peptide" heet, is een gemaakt product" | same meaning without "verkocht" (advertising test, commerce words) | — |
| what-is-a-peptide | table cell with “…” | straight quotes | MDX body text takes straight quotes (STYLE-NL §4.1) | — |
| how-signalling-works | TL;DR "andere receptoren raken (vooral bij meer stof)"; Lead "andere receptoren raken bij meer stof" | "bij een grote hoeveelheid andere receptoren raken" | "meer stof" also reads as "more dust"; B1; 18 words each | `santiago-2021-core-concepts` |
| how-signalling-works | TL;DR q "Blijft het altijd hetzelfde werken?" | "Blijft het op dezelfde manier werken?" | unidiomatic; matches the section's Lead | — |
| how-signalling-works | Compare title "Deze 3 moleculen binden allemaal …" | "Drie soorten moleculen binden aan dezelfde receptor en doen toch iets anders." | the columns are kinds of molecule, not 3 molecules | — |
| how-signalling-works | Compare row "Kan het het eigen signaal van het lichaam zwakker maken?"; cell "Het neemt receptoren weg voor een sterker signaal" | "Kan het een signaal van het lichaam zelf afzwakken?"; "Het bezet receptoren die een sterker signaal anders zou gebruiken" | "het het"; "weg voor" was ambiguous | `berg-2018-inverse-agonism` |
| how-signalling-works | orforglipron: "het Europees Geneesmiddelenbureau (EMA) gaf … een positief advies" | "het Comité voor geneesmiddelen voor menselijk gebruik (CHMP) van het Europees Geneesmiddelenbureau (EMA) gaf …" | the CHMP adopted the opinion (EMA page); STYLE-NL §2.7 first mention | `ema-epar-foundayo-opinion`, re-read today; eu-status fact 11 |
| how-signalling-works | "Inverse agonisten zetten een receptor die uit zichzelf actief is, lager." | "Inverse agonisten remmen een receptor die uit zichzelf al actief is." | unidiomatic | — |
| how-signalling-works | "Daardoor blijft semaglutide ongeveer een week in het lichaam." | "Daardoor is de halfwaardetijd van semaglutide ongeveer een week." | wrong fact: with a half-life of about 1 week, semaglutide is still in the blood about 7 weeks after the last dose (Dutch Wegovy SmPC 5.2) | `ema-epar-wegovy`; `ema-pi-wegovy-nl` 5.2 |
| how-signalling-works | "In de belangrijkste afvalstudies met Wegovy … was 43,9% … misselijk" | "In de belangrijkste studies naar gewichtsverlies met Wegovy … meldde 43,9% … misselijkheid" | "afvalstudies" also reads as "waste studies"; "reported" | `ema-epar-wegovy` |
| how-signalling-works | SmPC paragraph: three products, "60 kilo", side effects as a closed list, "Gebruik voor iets anders … is off-label" | adds Kyinsu (adults with type 2 diabetes not controlled on basal insulin or a GLP-1 medicine) and Kayshild (conditionally approved; adults with non-cirrhotic MASH, fibrosis F2–F3), so "semaglutide in de EU" is complete; "De Wegovy-injectie is ook goedgekeurd voor jongeren" (tablets: adults only); "60 kg"; "zoals" as the SmPC writes; "mag Wegovy niet gebruiken"; "… heet off-label" | completeness and accuracy of the Dutch SmPC indications (advertising test: each EU product named gets its indication); STYLE-NL §3 units | `ema-pi-kyinsu-nl`, `ema-pi-kayshild-nl` (4.1 quoted in their notes), `ema-pi-wegovy-nl` 4.1 (pens; tablets adults only, eu-status fact 13), 4.3, 4.8 ("zoals nausea, diarree, constipatie, buikpijn en braken") |
| how-signalling-works | KeyNumber title "donkere vlekken … waren zeldzaam" (1 in 100) | "… kwamen weinig voor"; "hoogstens" → "hooguit" | in EU product information "zelden" means 1 in 10.000 to 1 in 1.000, and 1 in 100 is "vaak", so "zeldzaam" would mislead | `dailymed-vyleesi-label` 5.2 |
| how-signalling-works | "Bremelanotide is in de VS goedgekeurd als medicijn, in de EU en in Nederland niet." | adds "(gecontroleerd op 27 oktober 2026)" | a status needs its date (CONTENT-GUIDE §1, "Always write") | eu-status fact 7; `pt-141.yaml` EU/NL rows, as_of 2026-10-27 |
| how-signalling-works | "bij de gewone sterkte voor gewichtsbeheersing geen klinisch relevant effect …" | "bij de sterkte <Q>2,4 mg</Q> voor gewichtsbeheersing … Voor de hogere sterkte (<Q>7,2 mg</Q>) is dat niet onderzocht." | since 14 July 2026 there is a 7,2 mg pen, so "the usual strength" is ambiguous; the Dutch SmPC 4.5 names 2,4 mg and says 7,2 mg was not studied (label fact, as the Dutch semaglutide page writes it; no advice) | `ema-pi-wegovy-nl` 4.5, PDF re-read today; eu-status fact 12 |
| how-signalling-works | "GnRH … zegt de hypofyse dat die LH en FSH moet afgeven" | "zet de hypofyse aan om LH en FSH af te geven" | unidiomatic | — |
| how-signalling-works | "GHRH jaagt die aan, somatostatine remt ze af" | "GHRH jaagt de pulsen aan, somatostatine remt ze af" | pronouns | — |

Confirmed as the writer had it (no change): the two dropped framing cites and their replacements (Thuisarts says
what the page says; art. 51(1)(a) says what the page says, and "Qualified Person" matches the glossary and
`/nl/safety/product-risk/`); the Dutch case report; the yeast sentence (Dutch SmPC section 2: "geproduceerd met behulp
van recombinant-DNA-techniek in Saccharomyces cerevisiae-cellen"); the 4.5 tolerance quote ("waarschijnlijk als gevolg
van een tolerantie-effect"; "Semaglutide vertraagt de maaglediging" is in the same section, so both halves of the
bullet rest on the SmPC); orforglipron's status (approved in the US; CHMP positive opinion 15 October 2026; no
Commission decision on 27 October 2026); bremelanotide not authorised in the EU or NL; 1.247 women (label 6.1);
"Niet genoemd" for insulin in the EU row (the guideline never mentions insulin); the guideline's N-/C-terminus and
L-form statements (section 4.1.2). Frontmatter: translation block, `reviewed_by: pending-medical-review`,
`last_reviewed` and `reading_level` as on English (B1 index, B2 others), `related` keys all Dutch routes. No `/en/`
link, no US/UK/CA/AU help, route or reporting; these pages carry no help levels, so no 112 or Lareb line is needed;
no Belgian note is needed. "je" throughout, no "u". No new source and no new glossary entry, so there is no
`nl-basics-a.yaml` or `nl-basics-a.json`; no allowlist edit.

Validator (`--only pages/nl/basics/`): 0 errors, 0 warnings. Residue check (`--only pages/nl/basics/ --details`):
0 error/frame hits, 0 warn hits (the 5 markers are on world-context lines only).

### Remaining concerns for the reviewer

1. **Advertising test on a mechanism page (medical/legal):** I kept the SmPC paragraph in the GLP-1 fold (now with all
   five EU semaglutide products, their Dutch 4.1 indications, the 4.8 side effects, the 4.3 contraindication and
   off-label named as off-label). It is about 150 words English does not have. The alternative is one line linking
   `/nl/compounds/semaglutide/`; my reading of the brief ("wherever it names an effect") is that the fold that says
   "Gewenst bij gewichtsbeheersing" needs the paragraph.
2. **The explainer `glp1-action`** (UI strings, not this group's file): its summary and caption name semaglutide's
   effects ("En het helpt mensen minder te eten") without indication or side effects; it shows on this page and
   others. Already item 5 of the writer's sweep list; it needs the UI owner's check.
3. **Strengths printed:** the fading-side-effect bullet now names <Q>2,4 mg</Q> and <Q>7,2 mg</Q> as label strengths
   (SmPC 4.5), as the Dutch semaglutide page does. If the reviewer wants no numbers on basics pages, the fallback is
   "bij de sterkte uit de grote studies naar gewichtsverlies … voor de hoogste sterkte is dat niet onderzocht".
4. **EU row of the peptide-or-protein table (regulatory):** reworded so it no longer says the EMA draws the
   peptide/protein line by manufacture. Please confirm the new reading (no number; "kleinere eiwitten"; manufacture
   decides only whether it is a biological substance, which closes the biosimilar route to chemical copies).
5. **Pharmacology terms (medical):** "intrinsieke activiteit" for efficacy (Ariëns' term; not strictly the same as
   Stephenson's efficacy), "biased agonisme" (English term kept, as the Dutch glossary has it), "potentie",
   "desensitisatie": B2–C1 body text, each explained where it first appears.
6. **For the final sweep (not this group's files), added to the writer's list:** `src/content/compounds/nl/pt-141.mdx`
   (line 48) writes "1.267 vrouwen" for the phase 3 trials, this page "1.247" (Vyleesi label 6.1, the safety section:
   "1247 premenopausal women"); the two Dutch pages should say which count they give and why. `eu-directive-2001-83`
   still points at the 2022-01-01 consolidation (eu-status fact-check, "For the merge"); art. 51 reads the same there.
