# Notes: group evidence-a (Dutch site, 27 October 2026)

Pages written (Dutch, preview):

- `src/content/pages/nl/evidence/index.mdx` (from `src/content/pages/en/evidence/index.mdx`)
- `src/content/pages/nl/evidence/how-to-read-a-study.mdx` (from `src/content/pages/en/evidence/how-to-read-a-study.mdx`)
- `src/content/pages/nl/evidence/evidence-grading.mdx` (from `src/content/pages/en/evidence/evidence-grading.mdx`)

Read first: the brief (with "Added after step 1"), `docs/STYLE-NL.md`, `docs/CONTENT-GUIDE.md`, the fact-check sections of
`research/nl/*.md` (eu-status fact 19 and its fact-check for NAION; nl-law fact 17a for the advertising test; nl-help
for the CBG NAION source), `research/nl/status/semaglutide.yaml`, `research/nl-notes/merge.md`,
`research/for-nl-site/MANIFEST.md` and `MANIFEST-about-history-en.md` ("evidence pages"), and the snapshot pages of
23 October (`research/for-nl-site/snapshot-2026-10-23/content/pages-en/evidence/`).

Result: `npx tsx scripts/validate-content.ts --only pages/nl/evidence/` → 0 errors, 3 warnings (all "related: … does
not exist (yet) in nl": `start-here`, `evidence/conflicts-of-interest`, `about/editorial-policy`, pages other groups
are writing; they clear when those files land). `npx tsx scripts/check-locale-residue.ts --only pages/nl/evidence/
--details` → 0 error, 0 frame, 0 warn hits. No marker needed: no FDA, US, UK or other foreign frame is left in the
text (cite ids are not scanned).

## Per page

### evidence/index — `method: translated`

- Structure as English: `<Lead>`, the `evidence-section-map` diagram (same id, four rows), three paragraphs, the
  `## De pagina’s over onderzoek` section with `<PageList section="evidence" />`. No TL;DR (index template, as English).
- Saved material: the 23 October version differs only by the retired `summary` field; nothing came back.
- Every citation kept (`fda-pcac-2026-*-briefing` ×3 as evidence, `ineichen-2024-animal-to-human`,
  `lundh-2017-industry-sponsorship`). No country frame on the English page, so nothing was rewritten for the
  Netherlands. "peptides sold outside pharmacies" became "die buiten de apotheek in omloop zijn" (no sales word).
- Links: `/nl/evidence/how-to-read-a-study/`, `/nl/evidence/the-translation-gap/`, `/nl/evidence/evidence-grading/`,
  `/nl/evidence/conflicts-of-interest/`, `/nl/safety/product-risk/`, `/nl/safety/warning-signs/` (no anchors).

### evidence/how-to-read-a-study — `method: translated`

- Same sections, `<Lead>`s, diagrams (`study-designs-ladder`, `eight-rats-to-people`, `what-a-p-value-says`), the
  `<Compare>`, all eight `<KeyNumber>`s, folds, checklist and the `<Claim level="animal">` on the Bicer study. Every
  number converted to Dutch format (16.608, 1.498, 17.604, 5.429, 2.671, 8.801, 8.803; 0,56; 1,29; 1,02 tot 1,63;
  0,80; 0,72 tot 0,90; 39,8; 7,2%; 17,2%; 2,58; 8,0 en 6,5 op de 100; 1,5 procentpunt; 1,6 op de 1.000); the coin sum
  (37 of 256) and the NNT (≈ 67) re-checked by hand.
- Saved material: the 23 October version differs only by the retired `summary`; nothing came back.
- **Added for the advertising test** (brief, "Added after step 1", item 1; nl-law fact 17a): the SELECT worked example
  names an effect of an authorised medicine, so the Dutch page now also says, in the visible text of the section,
  that in SELECT 16,6 in 100 people on semaglutide stopped the medicine for good because of adverse events against
  8,2 in 100 on placebo (`lincoff-2023-select`; checked today in the PubMed record, PMID 37952131: "Adverse events
  leading to permanent discontinuation … 1461 patients (16.6%) … 718 patients (8.2%)"), and that the most reported side
  effects are gastro-intestinal (nausea, diarrhoea, constipation, abdominal pain, vomiting; Dutch Wegovy SmPC 4.8, "De
  meest gemelde bijwerkingen waren gastro-intestinale aandoeningen, zoals nausea, diarree, constipatie, buikpijn en
  braken"). The worked-example fold ends with the Dutch SmPC indication (Wegovy 4.1: "gewichtsbeheersing", "als
  aanvulling op een caloriearm dieet en meer lichaamsbeweging", BMI criteria, and its pointer "Voor
  onderzoeksresultaten met betrekking tot cardiovasculaire risicoreductie … zie rubriek 5.1"), the contraindication
  (4.3: only "Overgevoeligheid voor de werkzame stof of voor een van de … hulpstoffen") and "niet tijdens de
  zwangerschap" (4.6), cited to `ema-pi-wegovy-nl`, with a link to `/nl/compounds/semaglutide/`. The SmPC PDF was
  downloaded and read today (curl 200; pdftotext); 5.1 carries the same SELECT figures (569 of 8.803, 6,5%; 701 of
  8.801, 8,0%; HR 0,80 [0,72; 0,90]), so the page stays in line with the SmPC.
- No citation dropped.

### evidence/evidence-grading — `method: translated`

- Same sections, `<EvidenceGrade compound="bpc-157" headingLevel={3} foldWhy />`, `<GradeRubric claims={false} />`,
  `<GradeMatrix />`, all five diagrams, the full-rules table and every fold. The claim-label and axis words are the
  Dutch UI strings (`src/i18n/nl/evidence.json`), so the page and the components say the same thing.
- **What came back from the saved material:** the EU authorisation of semaglutide (English had replaced "authorised in
  the EU in 2018" with the US approval of 2017; MANIFEST-about-history-en, "evidence pages"). Re-checked: EU row
  `since: 2018-02-08` in `research/nl/status/semaglutide.yaml` (eu-status fact-check: confirmed), the EPAR page fetched
  today ("Marketing authorisation issued 08/02/2018") and the Dutch Ozempic SmPC section 9 ("Datum van eerste verlening
  van de vergunning: 08 februari 2018").
- **Rewritten for the Netherlands** ("Bekend is niet compleet"): the EMA's safety committee (PRAC, June 2025: NAION a
  very rare side effect, up to 1 in 10,000 users; `ema-prac-2025-06-naion`) now stands as the reader's own regulator
  (no residue marker needed on Dutch), followed by the CBG's Dutch news item of the same day
  (`cbg-2025-06-naion-semaglutide`, fetched today: "Nieuwsbericht 06-06-2025"; "‘Zeer zeldzaam’ betekent dat de
  bijwerking voor kan komen bij 1 op de 10.000 mensen die het medicijn gebruiken") and the fact that the European
  product information now warns about it (`ema-pi-wegovy-nl`, 4.4 NAION section; eu-status fact 19).
- **Added for the advertising test:** the semaglutide bullet of "Waar de regels om een afweging vroegen" names
  effects ("kerneffecten op bloedsuiker en gewicht"), so it now also gives the EU indications (Ozempic: adults with
  type 2 diabetes "onvoldoende gereguleerd", with diet and exercise; Wegovy: weight management with diet and exercise)
  and the most reported side effects (Ozempic SmPC 4.8: "misselijkheid (zeer vaak), diarree (zeer vaak) en braken
  (vaak)"), cited to `ema-pi-ozempic-nl` and `ema-pi-wegovy-nl` (both PDFs read today).

## Dropped citations

| Page | Cite id | Why | Replaced by |
|---|---|---|---|
| evidence/evidence-grading | `fda-drugsatfda-ozempic` | The US approval date (5 December 2017) was the English readers' frame, put in by the English refocus in place of the EU date | `ema-epar-ozempic` (EU authorisation, 8 February 2018) |
| evidence/evidence-grading | `mhra-2026-02-semaglutide-naion` | The UK regulator's warning was the UK readers' frame (added in the refocus next to the PRAC) | `cbg-2025-06-naion-semaglutide` (the Dutch regulator's news of the same PRAC conclusion) and `ema-pi-wegovy-nl` (the warning in the EU product information) |

No citation was dropped on the other two pages. Citations added: `ema-pi-wegovy-nl` (both pages), `ema-pi-ozempic-nl`,
`ema-epar-ozempic`, `cbg-2025-06-naion-semaglutide` (all existing ids; no new source, so no
`src/data/sources/nl-evidence-a.yaml` was needed). No new glossary term was needed (every term the pages use has a
Dutch entry: `confounding`, `regression-to-the-mean`, `placebo`, `allocation-concealment`, `statistical-power`,
`surrogate-endpoint`, `spin`, `natural-frequency`, `preprint`, `naion`, `odds-ratio`, `hazard-ratio`,
`conference-abstract`, `ulcerative-colitis`, `collagen`, `preclinical-research` …), so no
`src/i18n/nl/glossary/nl-evidence-a.json` was created.

## UNRESOLVED points and how the pages handle them

- None of the research's UNRESOLVED items touches these pages. The open PRAC signals (eu-status fact-check: peripheral
  neuropathy, ischaemic colitis, lithium, cardioembolic stroke) are not mentioned; the pages name only the concluded
  NAION finding.
- NAION frequency: the PRAC gives "up to 1 in 10,000"; the SmPC adds "about two-fold relative risk, about 1 extra case
  per 10.000 patiëntjaren" (type 2 diabetes). eu-status open question 8 leaves the combined wording to the medical
  reviewer; the page gives only the PRAC figure, as English did.

## Open questions for the reviewers

- **Medical:** (1) Is the added side-effect line under the SELECT example (discontinuation 16,6 vs 8,2 in 100; the GI
  side effects of SmPC 4.8) the right weight for a statistics page, or should it stay only in the fold? (2) "Niet
  tijdens de zwangerschap" comes from SmPC 4.6, not 4.3: is listing it next to the 4.3 contraindication acceptable in
  plain words? (3) The ALS fold keeps "behalve riluzole had geen enkel middel bij patiënten gewerkt" (Scott 2008), an
  authorised medicine named as having worked, without its risks; it is history from the source, not a claim about
  use. Keep as is?
- **Legal:** do the two semaglutide passages (SELECT worked example; the independence bullet) now meet the advertising
  test of fact 17a (balanced, SmPC indications, side effects, contraindication; no off-label use is mentioned)? The
  hormone-therapy and CAST examples name only harms of medicines and were left as on English.

## Style terms (STYLE-NL lacks these; the word used)

| English | Dutch used | Note |
|---|---|---|
| main outcome (of a trial) | hoofduitkomst | plain word for B1 Leads and KeyNumber labels; "primair eindpunt" stays the glossary term |
| bias (in a study) | vertekening | as the glossary's `risk-of-bias` ("risico op vertekening") |
| mechanism chain | de keten van oorzaak en gevolg | as `compound.json` `mechanism.caption` |
| animated explainer | animatie | as `explainer-ui.json` |
| star rating | een beoordeling met sterren | STYLE §2.2 forbids "score" and "cijfer" for our grades |
| one score (title, TL;DR) | één getal | as `evidence.json` `why` ("Eén getal zou die verbergen") |
| rubric | de regels | "beoordelingsregels" avoided as heavy |
| primary studies | oorspronkelijke studies | as `evidence.json` |
| press release · news story | persbericht · nieuwsbericht | |
| abstract | samenvatting (abstract) | "samenvatting" alone after first use |
| breaking strength · tissue score | breeksterkte · score voor het weefsel (weefselscore) | |
| enrolment (of a trial) | inclusie van deelnemers | |
| progestin | progestageen | |
| heart death / cardiovascular death | overlijden door hart- en vaatziekte | |
| adverse events leading to permanent discontinuation | voorgoed stoppen met het middel door klachten of andere ongewenste voorvallen | STYLE §2.5: an ongewenst voorval is not necessarily caused by the medicine |
| spun (results) | opgepoetst | fold title "hoe uitkomsten worden opgepoetst"; the term stays "spin" (glossary) |
| the translation gap (link text) | de kloof tussen dier en mens | to match whatever nav_title the translation-gap group chooses (final sweep) |

## For the final sweep (files I do not own)

- `src/content/pages/nl/evidence/index.mdx` and `how-to-read-a-study.mdx`: the link texts "De kloof tussen dier en mens"
  (`/nl/evidence/the-translation-gap/`) and "Belangenconflicten" (`/nl/evidence/conflicts-of-interest/`) should match
  the `nav_title`s those pages get; change my link texts if they differ (my files, but the decision rests on theirs).
- The three "related … does not exist (yet) in nl" warnings clear when `start-here`, `evidence/conflicts-of-interest`
  and `about/editorial-policy` are written.
- No change needed in shared files: the heroes of the three pages (`wooden-ladder`, `coin-toss`,
  `three-measuring-scales`) already have Dutch alt texts and captions in `src/i18n/nl/media.json`; no allowlist host
  was added (every cited host is already allowed).

## Check (independent, 27 October 2026)

Independent fact-check and edit of the three pages against the current English pages, the brief (with "Added after
step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §9, §11, and the research of 27 October 2026.

**Sources re-opened today:** the Dutch Wegovy and Ozempic SmPCs (EMA `_nl.pdf`, curl 200, pdftotext in the scratchpad:
Wegovy 4.1, 4.3, 4.6, 4.8 "Samenvatting van het veiligheidsprofiel", 5.1 SELECT, and "Aan medisch voorschrift
onderworpen geneesmiddel"; Ozempic 4.1, 4.3, 4.8 and section 9 "08 februari 2018"); the Ozempic EPAR page ("Marketing
authorisation issued 08/02/2018"); the PRAC news of June 2025 ("may affect up to 1 in 10,000 people taking
semaglutide"); the CBG news item ("Nieuwsbericht 06-06-2025 | 12:00"; "voor kan komen bij 1 op de 10.000 mensen");
PubMed 37952131 (SELECT: 569 of 8.803 vs 701 of 8.801, HR 0,80 [0,72; 0,90], adverse events leading to permanent
discontinuation 16,6% vs 8,2%, mean follow-up 39,8 months), 18273714 (Scott 2008: "no therapeutic agent besides
riluzole has shown corresponding clinical efficacy"; 5.429 mice; no survival benefit for any of the 8 retested
compounds, riluzole included) and 38870090 (Ineichen 2024: 5% reached regulatory approval). No new source was needed:
`src/data/sources/nl-evidence-a.yaml` and a group glossary file still do not exist; no allowlist host was added.

**Science parity:** every English `<Cite>` id is on the Dutch pages, except the two dropped framing cites listed
above (`fda-drugsatfda-ozempic`, `mhra-2026-02-semaglutide-naion`). The one `<Claim level="animal">`, all 8 KeyNumbers
(values, levels, `who`/`counted`), the 8 diagrams with their ids and rows, the Compare, the 15 folds, the `##` and
`###` headings and every `<Term>` id match. Every number was compared with the English page (Dutch format); the coin
sum (37/256 = 0,145, about 1 in 7) and the NNT (1.000/15, about 67) were recomputed.

**Dutch and EU facts:** semaglutide EU authorisation 8 February 2018 (status file, EPAR, SmPC section 9); PRAC NAION
conclusion 6 June 2025 and the CBG item the same day; the NAION warning in the Dutch SmPC (eu-status fact 19); Wegovy
and Ozempic 4.1, 4.3 and 4.6 wording; prescription only. No Belgian, help, route, insurance or reporting statement is
on these pages, and none is needed.

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| index | Lead "Omdat veel claims … op kleine dierstudies rusten. … hoe je ze controleert." | "Veel claims over peptiden rusten op kleine studies bij dieren. … hoe je die controleert." | "kleine dierstudies" reads as "studies of small animals"; STYLE §2.3 ("bij"); ≤ 18 words | English page |
| index | "Dieronderzoek is een echt begin. Toch werden in één groot overzicht maar 5 op de 100 behandelingen …, later goedgekeurd …" (one sentence of 25 words) | "Dieronderzoek is een serieuze eerste stap. Maar weinig behandelingen die bij dieren zijn getest, worden later goedgekeurd voor gebruik bij mensen. In één groot overzicht waren het er 5 op de 100." | calque ("a real start"); B1 page: split | PMID 38870090 |
| index | "Wie betaalde, maakt ook uit. … voor het eigen product. … Het betekent dat …" | "Het maakt ook uit wie betaalde. … voor het product van dat bedrijf. … Het betekent wel dat …" | word order; "eigen" ambiguous | `lundh-2017-industry-sponsorship` |
| index, evidence-grading | link text "de risico’s van een product" | "productrisico" | link text = the Dutch target's `nav_title` ("Productrisico") | `src/content/pages/nl/safety/product-risk.mdx` |
| how-to-read-a-study | TL;DR q1/a1 "Laten dierstudies zien …?" / "Daarvoor zijn studies bij mensen nodig." | "Laat dieronderzoek zien …?" / "Niet bij mensen. Dat laten alleen studies bij mensen zien." | the English "Only trials in people can show that" had lost "only" | English TL;DR |
| how-to-read-a-study | TL;DR a2 "toeval alleen al"; a6 "Vraag eerst wie er is onderzocht" | "puur toeval"; "Vraag eerst wie is onderzocht" | same meaning; the TL;DR total had reached 127 words after the fixes (limit 120) | — |
| how-to-read-a-study | TL;DR a5 "15 op de 1.000 minder"; q6 "Kan ik een kop geloven?" | "15 mensen minder op de 1.000"; "Kan ik een krantenkop geloven?" | the number lacked its noun; "een kop" alone is ambiguous | English TL;DR |
| how-to-read-a-study | description "… en wat je vraagt bij een samenvatting of een kop." | "… en wat je vraagt bij een abstract of krantenkop voordat je die gelooft." | "before you trust it" was missing; one term | English description |
| how-to-read-a-study | "samenvatting" for an abstract (intro, Lead, Compare, 3 folds) next to "samenvatting" for a press summary ("Persberichten … zijn samenvattingen. … Lees de samenvatting (abstract)") | "abstract" throughout, explained once in the intro ("de korte samenvatting bovenaan een wetenschappelijk artikel"); "samenvatting" only for press summaries | the reader could not tell the paper's abstract from the press release's summary; STYLE: one word per concept ("congresabstract" is already Dutch) | — |
| how-to-read-a-study | `##` "Een checklist voor elke samenvatting of kop"; "Koppen slaan …" | "Een checklist voor abstracts en krantenkoppen"; "Krantenkoppen slaan …" | as above | — |
| how-to-read-a-study | RCT row "daarvoor is de studie vaak te klein of te kort" | "…, als de studie daarvoor te klein of te kort is" | "vaak" was added (English "beyond the trial's size and length") | English diagram |
| how-to-read-a-study | review row "Iets wat beter is dan …" | "Iets wat sterker is dan …" | meaning (stronger evidence) | — |
| how-to-read-a-study | fold title "Waarom studies met loting en reviews hoger staan"; "een review van zwakke studies" | "Waarom gerandomiseerde studies en systematische reviews hoger staan"; "een systematische review van zwakke studies" | STYLE §2.8: "review" only in "systematische review" | — |
| how-to-read-a-study | "Dat is een echt begin" | "Dat is een serieuze eerste stap" | calque | — |
| how-to-read-a-study | fold title "… hormonen en het hart"; "De twee groepen studies testten niet …" | "… hormoonbehandeling en het hart"; "De oudere studies en de grote studie testten niet precies hetzelfde: de meeste oudere studies …" | "hormone therapy"; clear subject | English fold |
| how-to-read-a-study | "wat er toch al was gebeurd"; "het effect … van verwachten dat je beter wordt" | "wat er ook zonder behandeling was gebeurd"; "van de verwachting dat je beter wordt" | meaning ("would have happened anyway"); grammar | — |
| how-to-read-a-study | "**Loting, en geheim.** … de behandeling geven aan wie het waarschijnlijk goed gaat doen" | "**Loting, en de indeling geheimhouden.** … aan mensen die waarschijnlijk toch al goed herstellen" | the next assignment is hidden, not the lottery; "aan wie het goed gaat doen" was ambiguous ("those likely to do well") | `schulz-1995-empirical-bias` |
| how-to-read-a-study | row "5. Soort" | "5. Diersoort" | "Soort" alone reads as "kind" | — |
| how-to-read-a-study | "Gooi een eerlijke munt 8 keer op. Ongeveer 1 op de 7 keer …" | "…, en doe dat vaker. Ongeveer 1 op de 7 keer …" | English "in about 1 of every 7 tries" (one try = 8 tosses) | arithmetic |
| how-to-read-a-study | "Toch had behalve riluzole geen enkel middel bij patiënten gewerkt." | "Toch had bij patiënten geen enkel middel een vergelijkbaar effect laten zien, behalve riluzole." | closer to the record ("corresponding clinical efficacy"); no bare "gewerkt" for an authorised medicine (advertising test) | PMID 18273714 |
| how-to-read-a-study | CAST title "Middelen die onregelmatige hartslagen onderdrukten, gaven meer doden" | "Middelen die een onregelmatige hartslag onderdrukten, leidden tot meer doden" | idiom | — |
| how-to-read-a-study | "kan de grens net missen" | "kan de grens missen" | "net" was added | English page |
| how-to-read-a-study | Lead "hoeveel op de 100 of 1.000?" | "hoeveel op de 100 of de 1.000?" | grammar | — |
| how-to-read-a-study | the writer's SELECT harms line: "stopten … voorgoed met het middel door klachten of andere ongewenste voorvallen" | "… door een ongewenst voorval (een klacht of probleem tijdens de studie) …", plus "Dat zijn ongeveer 8 op de 100 mensen meer." and "ook die kun je als aantallen lezen" | STYLE §2.5 term with a B1 explanation; the harm as an absolute difference, as the page teaches (16,6 − 8,2 = 8,4); "het best" tripped the validator's superlative warning | PMID 37952131 |
| how-to-read-a-study | step 5 "**Number needed to treat:**" | "**Hoeveel mensen de behandeling nodig hebben voor één voorval minder (number needed to treat):**" | STYLE §1 rule 7, §2.8: plain words first, the term (glossary `number-needed-to-treat`) in brackets | — |
| how-to-read-a-study | Wegovy fold: "De uitkomsten van SELECT staan … als onderzoeksresultaat (rubriek 5.1). Je mag het niet gebruiken als …, en niet tijdens de zwangerschap." | adds "Het is een medicijn op recept."; "… bij de onderzoeksresultaten (rubriek 5.1), niet als een aparte indicatie."; "Ook tijdens de zwangerschap en als je borstvoeding geeft, mag je het niet gebruiken." | in line with the SmPC: 4.1 sends the cardiovascular results to 5.1 (no separate EU indication); 4.6 also says "mag niet worden gebruikt in de periode dat borstvoeding wordt gegeven"; prescription status | `ema-pi-wegovy-nl` (PDF read today) |
| how-to-read-a-study | "drie jaar" (2×), "eerste twee rijen", "twee Deense …", "acht ratten", "elk negen … van de negen", "vier groepen van 8" | digits | STYLE §3 (digits from 2 up) | — |
| how-to-read-a-study | "462 persberichten over gezondheid van universiteiten" | "462 persberichten van universiteiten over gezondheid" | word order | — |
| evidence-grading | description (175 characters after the term fix: validator error) | "De regels achter elk bewijsprofiel: vier aparte vragen, … de bewijsniveaus bij claims, …" (162) | schema limit 170 | — |
| evidence-grading | "labels" for the claim badges (description, intro, TL;DR, `##`, Lead, caption, table head, fold title and text) | "bewijsniveau(s)"; Lead "Wat betekenen de kleine woorden naast claims?" / "Ze geven het bewijsniveau: rust de claim op een idee, op cellen, op dieren of op mensen?"; mechanism steps "niveau" | STYLE §2.2 fixes "bewijsniveau" for the badge ("Bewijsniveau: Dieren"); §2.6: Dutch text does not say "label" | STYLE-NL |
| evidence-grading | TL;DR a1 "Hoe goed is de schade bekend?"; a3 "niet over jouw flacon"; a6 and Lead, caption, step 5 "We noteren (elke wijziging)" | "Hoe goed kennen we de schade?" (the safety axis question in `evidence.json`); "niet over wat er in jouw flacon zit" (English "not what is in a vial"); "We leggen elke wijziging vast" | UI consistency; meaning; idiom | `src/i18n/nl/evidence.json` |
| evidence-grading | `##` "Hoe elke beoordeling tot stand komt" | "De vier vragen en hun beoordeling" | the English heading names the four questions | English page |
| evidence-grading | grade values "casusbeschrijvingen", "goedgekeurd" in the rules table and text; matrix text "op “goedgekeurd”" | "alleen casusbeschrijvingen", "goedgekeurd door een medicijnautoriteit"; "op “Goedgekeurd door een medicijnautoriteit”" | the words the grade card and the matrix show (`evidence.json` values) | `src/i18n/nl/evidence.json` |
| evidence-grading | "een overzicht dat een studie herhaalt"; "uit het lab en over dieren"; "als … gelabeld" (2×) | "een overzichtsartikel dat een studie nog eens bespreekt"; "uit het lab en met dieren"; "die PubMed aanmerkt als …" | "herhaalt" reads as repeating the experiment; idiom | — |
| evidence-grading | "om ongewone schade te zien" | "om schade te zien die niet vaak voorkomt" | false friend ("uncommon" is not "ongewoon") | — |
| evidence-grading | semaglutide bullet: indication and side effects after the funding pointer, no contraindication, Wegovy without its population | "In de EU zijn medicijnen met semaglutide alleen op recept. Ze zijn onder meer goedgekeurd voor … (Ozempic), en voor gewichtsbeheersing bij volwassenen met obesitas, of met overgewicht en een aandoening die met het gewicht samenhangt (Wegovy). … Wie overgevoelig is voor de werkzame stof of voor een van de hulpstoffen, mag ze niet gebruiken." then the funding pointer | advertising test (brief item 1): SmPC indication, main side effects **and** the contraindication wherever an effect is named (Ozempic and Wegovy 4.3) | `ema-pi-ozempic-nl`, `ema-pi-wegovy-nl` (PDFs read today) |
| evidence-grading | "in februari 2018 in de EU goedgekeurd"; "komt het voor bij maximaal 1 op de 10.000"; "Breder gebruik, jarenlang, kan die schade wel vinden." | "op 8 februari 2018 … (als Ozempic)"; "kan het voorkomen bij hoogstens 1 op de 10.000"; "Gebruiken veel mensen een medicijn jarenlang? Dan kan zulke schade wel aan het licht komen." | exact date and product; "may affect up to" had become a fact; idiom | EPAR page, PRAC news (fetched today) |
| evidence-grading | GRADE fold "vertekening door wat wel en niet is gepubliceerd" | "vertekening doordat niet alles wordt gemeld" | "reporting bias" is wider than publication bias | `guyatt-2008-grade` |
| evidence-grading | "twee stappen", "twee tot vier groepen", "één of twee kleine studies", "de vijf dingen" | digits | STYLE §3 | — |

Left as written, on purpose: "de vier vragen", "de vier beoordelingen" and "De vier beschermingen" stay in words (the
page's named concept; `evidence.json` writes "We tellen deze vier nooit bij elkaar op"); "peer review" once in
brackets after "beoordeling door vakgenoten" (a glossary alias Dutch readers know); "(review)" after
"overzichtsartikel" where it names the PubMed tag; "statistische power" (the glossary term).

**Validator** (`--only pages/nl/evidence/`): 0 errors, 0 warnings (the writer's three "related … does not exist (yet)"
warnings cleared once those Dutch pages were written). **Residue check** (`--only pages/nl/evidence/ --details`):
0 error, 0 frame, 0 warn hits; no marker needed (the FDA PCAC briefings are cited only as evidence, by id).

### Style terms (added by the check)

| English | Dutch used | Note |
|---|---|---|
| abstract | abstract (het), explained once: "de korte samenvatting bovenaan een wetenschappelijk artikel" | replaces the writer's "samenvatting (abstract)"; "samenvatting" stays for a press summary |
| headline | krantenkop, then kop | "een kop" alone is ambiguous |
| claim badge | bewijsniveau | STYLE §2.2; not "label" |
| number needed to treat | "hoeveel mensen de behandeling nodig hebben voor één voorval minder (number needed to treat)" | glossary id `number-needed-to-treat` keeps the English term |
| logged (a change) | we leggen … vast | |

### Remaining concerns for the reviewers

1. **Legal (advertising test):** the SELECT worked example still makes an effect of an authorised medicine (20% fewer
   cardiovascular events) the page's main example. It now carries the EU indication, prescription status, that the
   result sits in SmPC 5.1 and is not a separate indication, the discontinuation figures, the main side effects, the
   contraindication and pregnancy and breastfeeding. The harms are in the visible section; indication and
   contraindication are in the fold. Is that placement enough?
2. **Medical:** the harms line uses the trial's "adverse events leading to permanent discontinuation" (not all caused by
   the medicine, explained in brackets) next to the SmPC's most reported side effects. Check the weight.
3. **Medical and legal:** Scott 2008 names riluzole (EU-authorised for ALS) as the only drug with "corresponding
   clinical efficacy"; now "een vergelijkbaar effect laten zien", without its size or risks. It is history from the
   source, not a claim about use: confirm.
4. **Medical:** the NAION frequency stays in the PRAC wording only ("hoogstens 1 op de 10.000"); the SmPC's "about
   1 extra case per 10.000 patiëntjaren" is not added (eu-status open question 8).
5. **For the final sweep (not this group's files):** `src/content/pages/nl/evidence/conflicts-of-interest.mdx` writes
   "In de samenvatting of bij de methoden" for an article's abstract; with this group's term it would be "In het
   abstract …". Check "bewijsniveau" and "krantenkop" on the other evidence pages too.
