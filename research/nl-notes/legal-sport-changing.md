# Notes: group legal-sport-changing (27 October 2026)

Dutch pages `/nl/legal/sport-and-doping/` and `/nl/legal/whats-changing/`, and five new tracker items. Written from the
current English pages (`src/content/pages/en/legal/sport-and-doping.mdx`, `.../whats-changing.mdx`, both last reviewed
24 October 2026), the saved Dutch-framed versions of 23 October (`research/for-nl-site/snapshot-2026-10-23/content/
pages-en/legal/`, `MANIFEST-legal-en-b.md`), and the fact-checked research of 27 October (`research/nl/nl-law.md` §1.2,
§1.6, §5, §6, §7; `research/nl/eu-status.md` §1 C and E, §4, §5, §7; `research/nl/be-notes.md` §G;
`research/nl-notes/merge.md` §7). Nothing was built, committed or pushed; no English file was touched.

## Files

| File | What |
|---|---|
| `src/content/pages/nl/legal/sport-and-doping.mdx` | new, `translation: { method: adapted, from: en, review: pending }` |
| `src/content/pages/nl/legal/whats-changing.mdx` | new, `method: adapted` |
| `src/data/sources/nl-legal-sport-changing.yaml` | new: 5 Dopingautoriteit sources, each fetched today |
| `src/i18n/nl/glossary/nl-legal-sport-changing.json` | new: 5 terms |
| `src/data/tracker.yaml` | 5 items appended (NL, EU); no existing item touched |
| `src/i18n/nl/tracker.json` | Dutch text for the 5 items appended; no existing text touched |

Validator: `npx tsx scripts/validate-content.ts --only pages/nl/legal/` → 0 errors, 0 warnings (the two `related`
warnings for `legal/be` and `safety/product-risk` disappeared once other groups wrote those pages); `--only
legal-sport-changing`, `--only tracker` → 0 / 0. Residue: `npx tsx scripts/check-locale-residue.ts --only
pages/nl/legal/ --details` (and `--only tracker`, `--only glossary/nl-legal`) → 0 error, 0 frame, 0 warn. With the
markers stripped (a scratch test with `scanMdx`), whats-changing has 18 warn hits (FDA, "in de VS", 503A), all in the
US section and its two TL;DR pairs, which is the canonical PCAC framing (brief, "What stays"); every one carries
`residue-ok: PCAC framing`. Sport-and-doping has no hit even without markers; its three world-context lines keep the
`residue-ok: world context` marker as the brief asks.

No host was added to `config/link-allowlist.json`: every new source is on `www.dopingautoriteit.nl` (listed).

## legal/sport-and-doping (adapted)

**Structure kept**: TL;DR (6 pairs), opening Lead and `<Compare>`, intro, then the same six `##` sections in the same
order, the same figures (`Compare` ×2, `Diagram` ×4, `KeyNumber` ×2, the `uncertain` callout) and the same folds,
with two folds swapped (see below).

**Came back from the saved material (re-checked)**: the "who is tested" table for the Netherlands (top athletes most;
any federation member in principle, random tests at lower levels; "niet of nauwelijks" tests in Dutch fitness), the
refusal penalty (usually 2, possibly 4 years), the Dutch first-violation range (warning to 4 years), the rules during a
ban (no competing, training, federation activity or coaching; adopted by all federations), the contaminated-supplement
step (report at once, keep the product), the Dopingautoriteit on the 2027 list (mainly clarifications; Dutch
translation and Dopingwaaier from 1 January 2027), and `<JurisdictionCard code="NL" />` under "Where to ask". Each of
these Dopingautoriteit pages was re-read by nl-law (fact 46, "unchanged") and `dopingcontroles/positief` again by me
today (same wording). The Belgian row of the old table became one short line (brief: no Belgian row).

**Rewritten for the Netherlands**:

- Intro: the Dopingautoriteit as NADO (Wuab art. 4), the NDR, and the criminal-law line ("Voor een positieve test of
  voor het gebruik van doping word je in Nederland niet strafrechtelijk vervolgd. Handel in dopingmiddelen is wel
  verboden", `dopingautoriteit-doping-en-de-wet`), replacing the US/UK/CA/AU country links.
- "Who the rules cover": the four-country table became a Dutch table (who, do the rules apply, how often tested), with
  the NDR art. 71.10 scope ("al dan niet in wedstrijdverband"). New Dutch facts: a positive test is not always needed,
  possession counts, also at home (`dopingautoriteit-dopingovertredingen`, new); the Dopingautoriteit's data exchange
  with IGJ, police, OM, FIOD, Douane and NVWA-IOD (`dopingautoriteit-2025-12-samenwerking-opsporing`, nl-law fact 46),
  with "how often is not public". Belgium: one line (NADO Vlaanderen tests recreational athletes; a Belgian ban applies
  in NL) and a link to `/nl/legal/be/`.
- The fold "Ireland and New Zealand" became **"Het Nationaal Dopingreglement, nu en vanaf 2027"**: Wuab art. 2(1) and
  4; NDR 2025 (ISR, in force 1 June 2025, based on the 2021 Code, adopted unchanged by federations); the 2027 change
  (federations hand prosecution, provisional suspensions and disciplinary proceedings to the Dopingautoriteit,
  `dopingautoriteit-code-2027`); "the text of the 2027 NDR was not found"; our reading on gym users who are not members.
- Fold "Recreatieve sporters": UK Anti-Doping's five-year test replaced by the NDR 2025's own five-year definition and
  "De Dopingautoriteit bepaalt welke sporters recreatieve sporters zijn" (`isr-2025-nationaal-dopingreglement`); "no
  significant fault" in the NDR's Dutch words ("geen aanmerkelijke mate van schuld of nalatigheid"); "substance of
  abuse" as the NDR's "drugs".
- Strict liability: the Code quote replaced by the NDR (art. 2.5, 3.6) in plain Dutch; the UKAD and Sport Integrity
  Australia quotes replaced by the Dopingautoriteit's own sentence ("Je bent zelf verantwoordelijk ...").
- The Prohibited List: group names as the Dopingautoriteit translates them (2026 translation, new source
  `dopingautoriteit-vertaling-dopinglijst-2026`): S0 “Niet erkende stoffen”, S2 “Peptidehormonen, groeifactoren,
  verwante stoffen en mimetica”, S4.4 “Metabole modulatoren”; Dutch quotes of S0 ("elke farmacologische stof") and S2.
  "Ask your anti-doping organisation" → "Vraag het de Dopingautoriteit". New sentence from nl-law fact 48: for none of
  the 21 compounds does the 2027 list change the status. WADA dates from WADA's own page (published 21 September 2026,
  ExCo 10 September 2026; `wada-2027-list-resource-page`) instead of UK Anti-Doping. The Dutch joint comment on the
  draft list (VWS, NOC*NSF, athletes' commission, Dopingautoriteit) added.
- TUE: "dispensatie (TUE)" with the Dopingautoriteit's wording and the GDS application route
  (`dopingautoriteit-geneesmiddelen-controleren`, new).
- Wrong contents: Sport Integrity Australia's warning replaced by the Dopingautoriteit: medicines under the
  Geneesmiddelenwet have a "zo goed als nihil" contamination risk (`dopingautoriteit-voedingssupplementen`, new); the
  batch-tested supplement list on that page (NZVT) is deliberately not mentioned (it points to products).
- "Where to ask": the six-country table became a Dutch "what you want to know / where" table (Dopingwaaier; Global DRO
  for foreign medicines; e-mail or WhatsApp, answered within one working day, "geen resultaat betekent niet dat het
  mag"; GDS for a dispensatie), then the NL card, then the doctor link and one Belgian line (NADO Vlaanderen).
  No phone number or e-mail address is printed.

**World context kept, marked** (`residue-ok: world context`): the Canadian sanction case (BPC-157 and TB-500, four
years, on information rather than a positive test); USADA and Sport Integrity Australia on how unlikely a TUE is; Sport
Integrity Australia's retatrutide page (says only "not listed"). These are other countries' anti-doping bodies used as
evidence, not as the reader's frame; the reviewer may prefer to drop them (question 8).

**Dropped citations** (all US/UK/CA/AU/IE/NZ frame; what replaced them):

| Cite id | Where on English | Why it went | Replaced by |
|---|---|---|---|
| `usada-testing`, `ukad-introduction-testing`, `ca-sic-cadp`, `au-sia-anti-doping` | intro (national bodies) | other countries' NADOs as the reader's frame | `nl-wuab-art-2-4-dopingautoriteit`, `dopingautoriteit-nationaal-dopingreglement` |
| `usada-about`, `usada-testing`, `ukad-anti-doping-rules`, `ca-sic-cadp`, `ca-sic-2026-04-peptides-reminder`, `au-sia-anti-doping`, `au-sia-athlete-testing` | "who is tested" table and the US/UK/AU paragraphs | country rows | `isr-2025-nationaal-dopingreglement`, `dopingautoriteit-controles-belgie`, `dopingautoriteit-eigen-kracht`, `dopingautoriteit-dopingovertredingen` |
| `ie-sport-ireland-act-2015`, `nz-sportnz-integrity-path`, `nz-sic-sports-anti-doping-rules`, `nz-sic-2026-06-peptides-trend` | fold "Ireland and New Zealand" | IE/NZ notes | the NDR fold (`nl-wuab-…`, `dopingautoriteit-nationaal-dopingreglement`, `isr-2025-…`, `dopingautoriteit-code-2027`) and the data-exchange paragraph (`dopingautoriteit-2025-12-samenwerking-opsporing`) |
| `ukad-anti-doping-rules` | fold "Recreational athletes" (UKAD five-year test) | UK frame | `isr-2025-nationaal-dopingreglement` |
| `ukad-athlete-responsibilities`, `au-sia-2026-05-peptides-statement` | strict-liability quotes; contamination warning | national bodies' quotes | `dopingautoriteit-dopingovertredingen`, `dopingautoriteit-voedingssupplementen` |
| `ukad-2027-list-summary` | retatrutide row and fold; "published 21 September 2026"; 2027 fold | UK body's reading | `wada-2027-list-en`, `wada-2027-list-explanatory-note`, `wada-2027-list-resource-page`; retatrutide's EU/NL status: `ema-medicines-json`, `cbg-gib-search-status-2026-10-27`, `ctis-2025-522674-36-00` |
| `ca-sic-2027-cadp`, `nz-sic-sports-anti-doping-rules` | fold "What changed for 2027" (national rules on the same day) | CA/NZ frame | `dopingautoriteit-code-2027` (the NDR changes on 1 January 2027) |
| `ukad-checking-medications`, `ie-sport-ireland-medcheck`, `nz-sic-checking-medications`, `usada-bpc-157` (Drug Reference Line), `ca-sic-2026-04-peptides-reminder`, `au-sia-peptides`, `au-sia-2026-05-peptides-statement` | "Where to ask" table | country rows | `dopingautoriteit-geneesmiddelen-controleren`, `<JurisdictionCard code="NL" />`, `be-nado-vlaanderen-over` |

`usada-bpc-157` and `au-sia-peptides` stay on the page for the TUE sentence (world context); `au-sia-retatrutide` for
the retatrutide caveat; `ca-sic-2025-04-bpc157-tb500-sanction` for the case. All WADA, Code, ISTUE, study
(`weber-2017-swiss-border`, `krug-2014-black-market-germany`) and status cites of the English page stay.

## legal/whats-changing (adapted)

**Structure**: TL;DR (6 pairs), Lead, intro, `<ChangeTracker />`, then "Hoe je de statussen leest" (the status ladder
with the Dutch UI labels of `pages.tracker.statuses`), **Nederland** and **De Europese Unie** (in place of "The UK,
Canada and Australia"), Sport, **De Verenigde Staten** (moved after Sport: on the Dutch site it is world context, kept
for the canonical PCAC framing), "Hoe we deze pagina bijhouden" (checklist).

**Came back from the saved material (re-checked)**: the EU reform section (figure `eu-reform-steps`) with corrected
facts: the Council **adopted** its position on 28 September 2026 and published it on 1 October (eu-status §2 item 2),
26 for, Malta abstaining, NL and BE for (fact 28, fact-check); application 24 months after entry into force, "2028"
only as the EMA's expectation (conflict 1); the agreed text is now public as the Council's first-reading position, so
the old "we have not read a final text" became a short, caveated list of what that text says (fact 31). The IGJ
online-sellers figures (114 in 2024, 187 to early October 2025, 150 investigated), the IGJ's powers, the Dopingautoriteit
on the 2027 list, and the PCAC point 5 for NL/EU. Dropped from the saved page: Germany (German site) and the UK row.

**New for the Netherlands**: the NL watch table (case law, IGJ publishing fines, the Minister's answers of 5 October
2026, the NDR 2027, the Gnw version and two pending bills that do not concern peptides); the fold on the 2026
advertising case law (Raad van State 25 February 2026; Rb Amsterdam 10 April 2026, described without brand or publisher
names: the court's text names Ozempic and the claimant; Rb Noord-Nederland 21 April 2026; IGJ fines public since 1 January
2026), ending with the brief's test sentence ("Ook wie niets verkoopt, kan reclame maken: de rechter kijkt of een tekst
een middel aanprijst") and a link to the editorial policy; the enforcement fold (IGJ, the Minister's answers, the IGJ and
NVWA NPS action of 16 April 2026 and its "voor onderzoeksdoeleinden" disclaimers, Europol SHIELD VI with Dutch
participation). EU: the TFEU art. 294(7) rule with "no end date" (the start of the three months is UNRESOLVED); the
Critical Medicines Act, the Biotech Act and the open PRAC reviews of GLP-1 medicines as dated "under review" lines only
(eu-status §6 question 10). Sport: WADA's own publication page instead of UK Anti-Doping; the NDR change.

**Advertising test (brief, "Added after step 1", item 1)**: no effect of any medicine is named on either page. The
semaglutide case is described as off-label use ("een semaglutide-medicijn dat voor diabetes is goedgekeurd. Gebruik
om af te vallen is dan ... off-label"), with the court's finding that the articles left out side effects and
contraindications. The PRAC lines name possible risks only, with "a signal does not mean the medicine causes it".

**Dropped citations** (all US/UK/CA/AU frame; the tracker on Dutch shows no US, UK, CA or AU item):

| Cite id | Where on English | Why it went | Replaced by |
|---|---|---|---|
| `fda-503a-bulks-page`, `fr-2026-07361-pcac-notice`, `fda-pcac-2027-early-announcement`, `fda-pcac-2026-briefing-intro`, `usc-21-353a` in the figure `us-503a-steps` | US section | the five-step US listing procedure is a US route (503A compounding as a route leaves, brief); the figure is dropped | all five ids stay on the page in the PCAC five points |
| `fda-category-2-safety-risks`, `fda-503a-categories-2026-05`, `fda-2026-503b-glp1-exclusion-proposal`, `fr-2026-08552-503b-glp1`, `fr-2026-12937-503b-comment-extension`, `fda-warning-letters-index` | fold "The other US items" | US-only rule changes and enforcement (the Dutch tracker hides US items) | nothing; the Dutch enforcement fold covers the IGJ |
| `uk-mhra-substance-index-status-c-2026-10-23`, `mhra-products-search-status-d-2026-10-23`, `ca-hc-2026-04-think-twice-peptides`, `ca-dpd-search-canada-legal-2026-10-23`, `au-artg-search-status-c-2026-10-23`, `au-artg-search-status-d-2026-10-23` | PCAC point 5 ("not approved in the US, UK, CA, AU") | the four countries' status searches | `ema-medicines-json`, `cbg-gib-search-status-2026-10-27` (NL and EU rows), `nl-geneesmiddelenwet` |
| `mhra-2026-10-counterfeit-pens`, `uk-dhsc-2026-high-risk-cosmetic-wellbeing-consultation`, `ca-hc-recalls-database`, `au-tg-amendment-2026-measures-1`, `au-tga-2026-09-personal-import-packaging`, `au-tga-2026-06-peptide-compliance-priority`, `au-tga-2026-10-prescription-import-infringements`, `au-nsw-health-s4d-2026`, `au-tga-2026-07-advertising-code-consultation`, `uk-mhra-2026-02-second-facility`, `mhra-2026-05-largest-seizure`, `mhra-2026-01-seizures-2025`, `ca-cpsa-2026-04-injectable-peptides`, `ca-hc-pdl-notices-2026`, `au-tga-compounded-medicines-guidance`, `au-tga-2026-06-cmo-peptide-statement`, `au-tga-media-releases-peptide-log-2026-10-24`, `au-tga-2026-scheduling-consultations-no-peptides`, `au-nsw-mptg-act-2022` | section "The UK, Canada and Australia" | other countries' rule changes and enforcement | the Netherlands and EU sections (ids in the "added" list of the files table above: `nl-rvs-…`, `nl-rbams-…`, `nl-rbnne-…`, `igj-2025-12-boetes-openbaar`, `tk-2026-ah-249-…`, `igj-…`, `europol-2026-02-shield-vi`, `council-st-…`, `ep-oeil-…`, `ema-prac-…`, `eu-tfeu-art-294` …) |
| `ukad-2027-list-summary`, `ca-sic-2027-cadp` | Sport section and fold | UK/CA bodies | `wada-2027-list-resource-page`, `dopingautoriteit-2027-list-news`, `dopingautoriteit-code-2027` |

## Tracker items added (`src/data/tracker.yaml`, `src/i18n/nl/tracker.json`)

Each source id exists (validator: 0 errors on `tracker`); each date re-checked against the research's fact-checks, and
the three OEIL procedure files re-fetched today (2023/0132: "Awaiting Parliament 2nd reading", forecast 23/11/2026;
2025/0102: "Awaiting Parliament's position in 1st reading", 14/07/2026, forecast 23/11/2026; 2025/0406: "Awaiting
committee decision", referral 18/05/2026, forecast 14/12/2026).

| Id | Juris. | Status | Updated | Next | Note |
|---|---|---|---|---|---|
| `nl-advertising-case-law-2026` | NL | watching | 2026-04-21 | – | case law, not a change in the law; the merge offered "in-force or watching": `watching` because the statute did not change. The IGJ fine of 28 September 2026 left out (names a company); the appeal of the Amsterdam judgment not mentioned (media only). `compounds: [semaglutide]` (the Amsterdam case). Added `nl-gnw-art-84-85-advertising` to the merge's sources. |
| `nl-ndr-2027` | NL | adopted | 2025-12-05 | 2027-01-01 | `updated` = the Code 2027 adoption that the NDR must follow (merge gave no date); new source `dopingautoriteit-2025-12-code-2027-aangenomen`. The text says the 2027 NDR text was not found (UNRESOLVED 5.9). `rulemaking` was the alternative (reviewer question 5). |
| `eu-critical-medicines-act` | EU | rulemaking | 2026-07-14 | 2026-11-23 | as the merge proposed |
| `eu-biotech-act-clinical-trials` | EU | proposed | 2026-05-18 | 2026-12-14 | `updated` = committee referral (eu-status §7); added `ema-clinical-trials-regulation` for "in application since 31 January 2022" |
| `eu-glp1-safety-reviews` | EU | watching | 2026-10-26 | 2026-12-01 | open: cardioembolic stroke, lithium (EPITT 20275), neuropathies (EPITT 20270), ischaemic colitis (EPITT 20309; information due 1 December 2026 = next); volvulus closed. `updated` = publication of the September-October signal recommendations. Needs an update once the PRAC minutes of 26-29 October 2026 appear. |

No English text was added (the items are hidden on English). No existing item's data or text was changed.

## UNRESOLVED points and how the pages handle them

- NDR 2027 text not published (nl-law 5.9): "De tekst van het nieuwe reglement vonden we op 27 oktober 2026 nog niet"
  (sport fold, whats-changing sport fold, tracker `nl-ndr-2027`).
- WADA S0 status of compounds approved somewhere or not named (nl-law 5.10): verdict `unknown` and "Vraag het de
  Dopingautoriteit", as the English and the saved table did.
- Retatrutide approval worldwide (nl-law 5.11): the page says no medicines authority has approved it, as the English
  page does; cited to the EU and NL rows (no EU record, no CBG record, CTIS trial). The worldwide part rests on the
  English page's claim and the data file's other rows, not on a new check (reviewer question 10).
- Appeal of Rb Amsterdam 10 April 2026 (nl-law 5.15): "Of er hoger beroep loopt, konden we niet in een officiële bron
  controleren." Not in the tracker text.
- IGJ fine of 28 September 2026 on a media company (nl-law 5.16): left out.
- KOAG/KAG codes (nl-law 5.12): not mentioned.
- Parliament's vote and Official Journal dates; start of the TFEU three-month period (eu-status 5.2): dates are called
  "voorlopig"; "Vanaf welke dag die 3 maanden lopen, hebben we niet kunnen vaststellen. Daarom noemen we geen einddatum."
- Outcomes of the open PRAC items (eu-status 5.5): "De uitkomst ... was op 27 oktober 2026 nog niet bekend. We
  voorspellen die niet."
- Content of the Critical Medicines Act and Biotech Act (eu-status 5.9): "We hebben de tekst niet zelf gelezen" (Biotech
  Act); the CMA is described only by its aims as the Commission's release gives them.
- How often a Customs seizure becomes a doping case (nl-law fact 46): "Hoe vaak dat gebeurt, is niet openbaar."
- Not citable and not used (brief item 5): the IGJ's August 2026 order and penalty, the IGJ's February 2026 peptide
  statements; also not used: the Customs article of 6 August 2026 (its text names a webshop; nl-law 6.12) and the
  Dopingautoriteit's "gedoogt het bezit van doping voor eigen gebruik" (nl-law 6.7: not extended; it is not on the page).

## Open questions for the legal or medical reviewer

1. **NDR scope** (nl-law 6.9): is "Meestal niet: het reglement geldt voor leden van een sportbond (onze lezing)" for
   gym users who are not federation members a fair B1 reading of Wuab art. 2(1) and NDR art. 71.10? The page marks it
   as our reading.
2. **Data exchange**: is "Ben je lid van een sportbond? Dan kan een pakket dat de Douane tegenhoudt zo een dopingzaak
   worden" a fair inference from the Dopingautoriteit's protocols with Customs and the other services (their stated aim
   is "dopingovertredingen op te sporen")?
3. **The Dopingautoriteit's page says the rules apply to "alle leden van de topsportbonden"**, the NDR 2025 (art. 71.10)
   also to members who practise sport outside competitions. The page follows the NDR; please confirm.
4. **EU reform articles before publication** (eu-status 6.1): the fold lists six points of the Council's position with
   "Het is nog geen wet". Acceptable, or only the direction?
5. **`nl-ndr-2027` status**: `adopted` (the change follows from the adopted Code 2027 and is announced for 1 January
   2027) or `rulemaking` (the 2027 NDR text is not yet published)?
6. **Case-law descriptions**: the Amsterdam judgment's text names a publisher and brand names; the page names neither
   (only "semaglutide" and "een semaglutide-medicijn dat voor diabetes is goedgekeurd"). Please confirm citing
   `nl-rbams-2026-5160-publieksreclame-journalistiek` this way (nl-law 6.12).
7. **Publisher-line sentence on whats-changing**: "Ook wie niets verkoopt, kan reclame maken: de rechter kijkt of een
   tekst een middel aanprijst. Daarom schrijven we evenwichtig." It is the brief's draft test (owner decision, brief
   item 1); it replaces nothing on this page (the English page has no publisher line). Owner to confirm.
8. **World-context lines on the sport page** (Canadian sanction case; USADA and Sport Integrity Australia on TUEs; Sport
   Integrity Australia on retatrutide): keep as evidence of how other anti-doping bodies apply the rules, or drop?
9. **Medical**: the B1 descriptions of the PRAC signals (cardioembolic stroke, lithium levels, peripheral neuropathy,
   ischaemic colitis, volvulus) on whats-changing and in `eu-glp1-safety-reviews`; whether open signals belong on the
   Dutch site at all before PRAC concludes (eu-status 6.10 recommends at most a dated line on this page).
10. **Retatrutide** "Geen medicijnautoriteit heeft het goedgekeurd": confirm worldwide, or narrow to "niet in de EU en
    niet in Nederland".

## Style terms (STYLE-NL lacks these; the word used)

| English | Dutch used | Note |
|---|---|---|
| strict liability | risicoaansprakelijkheid (in het Engels: strict liability) | as the glossary `strict-liability` and the NDR (art. 2.5) |
| specified / non-specified substance | specifieke / niet-specifieke stof | glossary `specified-substance` |
| no significant fault | "geen aanmerkelijke mate van schuld of nalatigheid" | the NDR's words, in quotes |
| substance of abuse | drugs | the NDR: "niet zijnde drugs" |
| ban, suspension · reprimand | schorsing · berisping | Dopingautoriteit, NDR |
| sports federation · member | sportbond · lid | |
| testing pool | testing pool | as the NDR |
| catch-all rule (S0) | vangnetregel | |
| growth hormone releasing factors · GHRPs | stoffen die groeihormoon laten vrijkomen · peptiden die groeihormoon laten vrijkomen | the list's own heading “Groeihormoon Releasing Factors” in quotes only |
| WADA Executive Committee | het uitvoerend comité van WADA | |
| disciplinary proceedings · prosecutor · provisional suspension | tuchtrecht (de regels voor straffen binnen de sport) · aanklager · voorlopige schorsing | dopingautoriteit-code-2027 |
| tracker status label | status ("Wat betekent de status bij elk punt?") | avoids "label" (STYLE-NL §2.6) |
| safety signal · PSUR | veiligheidssignaal · periodiek veiligheidsrapport | glossary `safety-signal` (new) |
| PRAC | het PRAC, de commissie van het EMA die de veiligheid van medicijnen bewaakt | glossary `prac` (new) |
| Council of the EU | de Raad (waarin de ministers van de lidstaten zitten), de Raad van de EU | |
| Official Journal | het Publicatieblad van de EU | |
| first / second reading · political / provisional agreement | eerste / tweede lezing · politiek / voorlopig akkoord | glossary `second-reading` |
| indicative plenary date | voorlopige datum voor de stemming | |
| public procurement | aanbestedingen | not "inkoop" (STYLE-NL §7) |
| Critical Medicines Act · European Biotech Act | the English names, explained once: "een wet tegen tekorten aan belangrijke medicijnen", "een Europese biotechwet" | |
| free base · acetate salt | vrije base · acetaatzout | PCAC point 2 |
| cardioembolic stroke · peripheral neuropathy · ischaemic colitis · volvulus | beroerte door een bloedstolsel uit het hart (cardio-embolische beroerte) · zenuwklachten in armen en benen (perifere neuropathie) · ontsteking van de dikke darm doordat er te weinig bloed komt (ischemische colitis) · een gedraaide darm (volvulus) | B1 first, term in brackets |
| FIOD | de opsporingsdienst van de Belastingdienst (FIOD) | |
| Dopingwaaier · GDS · Global DRO | de app Dopingwaaier · de website Geneesmiddelen Dispensatie Sporter (GDS) · Global DRO | names as the Dopingautoriteit writes them |

## For the final sweep (files I do not own)

1. **`docs/STYLE-NL.md`**: merge the style terms above (§2.4 law, §2.5 medicine, §2.7 institutions: FIOD, PRAC, de Raad).
2. **Glossary duplicates**: my file holds `public-advertising` (publieksreclame), `raad-van-state`,
   `nationaal-dopingreglement` (alias NDR), `prac`, `safety-signal` (veiligheidssignaal). If another group (legal/nl,
   legal/eu, about) added the same concept in parallel, keep one entry.
3. **`src/data/tracker.yaml` `wada-2027-prohibited-list`**: optional second NL local source
   `dopingautoriteit-2026-07-reactie-concept-lijst-2027` (merge §5, last item); not added (not my item).
4. **`eu-glp1-safety-reviews`**: update `updated`, the text and possibly the status once the PRAC minutes and signal
   recommendations of 26-29 October 2026 are published.
5. **Corrections log** (`src/data/corrections.yaml`, `src/i18n/nl/corrections.json`): if the Dutch log records new
   tracker items, add one entry for the five items of 27 October 2026 (preview locale; not added here).
6. **`src/i18n/nl/pages.json`**: no change needed; the tracker statuses used in the ladder are its
   `pages.tracker.statuses` values word for word.
7. **Sources owned by others**: `wada-2027-list-en` and `wada-2026-list-en` have `accessed: 2026-10-20` (still right;
   nl-law re-read both PDFs today); `ema-medicines-json` `accessed` 2026-10-20 (merge §9 already lists it).
8. **CONTENT-GUIDE §1** ("The absence of commerce is what makes the content legal") contradicts the 2026 case law the
   whats-changing page now describes; owner decision (brief item 1; nl-law 6.2), not edited here.

## Check (independent, 27 October 2026)

Adversarial check of both pages, the five tracker items, the glossary file and the new sources, by a second editor who
assumed errors. Read first: the brief (incl. "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §9, §11–13,
`research/nl/nl-law.md` §1.2, §1.6, §4, §5 and its fact-check, `research/nl/eu-status.md` §1 C and E, §4, §5 and its
fact-check, `research/nl/be-notes.md` §G, `research/nl-notes/merge.md` §7, and the current English pages. Fetched today
with curl (HTML stripped to text, PDFs with pdftotext): the five new sources; the Dopingautoriteit pages
`dopingcontroles/controles-in-belgie`, `programmas/eigenkracht`, `dopingcontroles/positief`, `code-2027`,
`juridisch/doping-en-de-wet`, `juridisch/nationaaldopingreglement` and the news items of 3 December 2025, 14 July 2026 and
28 September 2026; the ISR NDR 2025 PDF (art. 1 "Lid" and "Recreatieve sporter", 2.5, 3.6, 45, 71.10); the three 2026
judgments through data.rechtspraak.nl (ECLI:NL:RVS:2026:1072, ECLI:NL:RBAMS:2026:5160, ECLI:NL:RBNNE:2026:1471); the
Minister's answers AH 249 (PDF, answers 5, 6 and 10); the WADA 2027 list PDF (S0, S2.2.3, S2.2.4, S2.3, S4.4.1). A web
search (media only, not cited) found no approval of retatrutide anywhere; the developer's stated US filing target is 2027.
No allowlist host was needed. No file outside this group was edited.

**Science parity** (English cite ids, claim levels, numbers, caveats): every WADA, Code, ISTUE, study and status cite of
both English pages is on the Dutch pages, except the US/UK/CA/AU/IE/NZ frame ids in the writer's tables above (checked one
by one: each went for a stated reason and has a Dutch replacement, or is a US route). Numbers identical: 4, 2 and 3 years;
8 named peptides; < 20%, 1.190, 146, 2017; 8–6–1; 7 considered, 6 recommended; 14 forms; 21 compounds. Also dropped from
English and not restored (country frame): the Canadian case's "not even training with teammates" (replaced by the Dutch
rules during a ban, `dopingautoriteit-positieve-test`) and the US 503A steps figure with its "five more substances before
the end of February 2027" (a US route; its cites stay in the PCAC points). The English TL;DR pair on "now legal" headlines
has no Dutch TL;DR pair; the same point stands in the callout "Wat we niet volgen".

### Changes made

| Page / file | Before | After | Why | Source |
|---|---|---|---|---|
| sport-and-doping, TL;DR 1 | "Veel wel, altijd." | "Veel wel, ook buiten wedstrijden." | unidiomatic; "at all times" means in and out of competition | `wada-2027-list-en` |
| sport, Compare row 1 | "De groepen S0, S2 en S4 noemen ze" | "Ze vallen onder de groepen S0, S2 en S4. Die gelden ook buiten wedstrijden." | S0 also covers peptides it does not name | `wada-2027-list-en` |
| sport, who-is-tested table, gym row | "Meestal niet: het reglement geldt voor leden van een sportbond (onze lezing …)" | "Meestal niet, volgens onze lezing. Het reglement geldt voor leden van een sportbond, en voor wie meedoet aan een wedstrijd van een sportbond" | the NDR's "Lid" also covers anyone taking part in a federation's competitions or activities; explains "meestal" | `isr-2025-nationaal-dopingreglement` art. 1 "Lid" |
| sport, refusal sentence | "Weiger je een dopingcontrole? Dan krijg je meestal een schorsing van 2 jaar, en misschien van 4 jaar." | "Ook dat is een dopingovertreding. Volgens de Dopingautoriteit levert weigeren doorgaans een schorsing van 2 jaar op, en misschien van 4 jaar." | the source sentence is the Dopingautoriteit's example of a test in Belgium; now attributed as its statement, with refusal cited as a violation | `dopingautoriteit-dopingovertredingen` ("weigert eraan mee te werken"), `dopingautoriteit-controles-belgie` |
| sport, Customs sentence | "Dan kan een pakket dat de Douane tegenhoudt zo een dopingzaak worden." | "… volgens ons ook tot een dopingzaak leiden." | an inference from the data-exchange protocols, not the source's words (nl-law fact 46) | `dopingautoriteit-2025-12-samenwerking-opsporing` |
| sport, NDR fold "Nu" | "Het reglement zegt ook wie een overtreding kan begaan: sporters op internationaal of nationaal niveau, recreatieve sporters, en leden die sporten …" | "… wie sommige overtredingen kan begaan, zoals een verboden stof in je monster of het gebruik ervan. Dat kunnen alleen leden: … Als lid telt ook wie meedoet aan een wedstrijd of activiteit van een sportbond." | art. 71.10 limits presence, use, cooperation and whereabouts violations (not all violations) to members; the list left out "Nationaal niveau B"; "Lid" is wider than membership | NDR 2025 art. 1, 71.10 |
| sport, NDR fold "Onze lezing" | gym users not bound | + "Doe je mee aan een wedstrijd van een sportbond? Dan geldt het daar wel voor je." | as above | NDR 2025 art. 1 "Lid" |
| sport, fold "Recreatieve sporters" | "Sommige mensen tellen nooit als recreatief, als het in dezelfde sport in de 5 jaar ervoor gebeurde." ("het" had no referent) | one clear sentence; "testing pool" explained; "In Nederland bepaalt de Dopingautoriteit …" | B1, word order | `wada-code-2027`, NDR 2025 art. 1 |
| sport, retatrutide row and fold | "Niet elke antidopingorganisatie schrijft dat zo." / "Toch schrijft niet elke …" | "Niet elke antidopingorganisatie zegt dat erbij." | Sport Integrity Australia does not contradict the S0 reading: its page says only "not listed" and does not discuss S0 (as the fold says) | `au-sia-retatrutide` (note) |
| sport, retatrutide fold | "het wordt alleen in klinisch onderzoek gebruikt" | "het wordt nog alleen in klinisch onderzoek getest" | "gebruikt" was untrue (it is also used outside trials); status word investigational | retatrutide EU and NL rows |
| sport, Semax/Selank row; whats-changing PCAC point 5 | "in Rusland als medicijn geregistreerd" | "… goedgekeurd" | STYLE-NL §2.4: avoid "geregistreerd" | `fda-pcac-2026-semax-briefing` |
| sport, fold 2027 | "Wat niet op de lijst stond, staat er nog steeds niet op." | "Wat niet met naam op de lijst stond, staat er nog steeds niet met naam op." | unnamed peptides can be prohibited under S0; the old sentence could be read as "allowed" | nl-law fact 48 |
| sport, fold 2027 | "het ministerie van VWS, NOC*NSF" | "het ministerie van Volksgezondheid, Welzijn en Sport (VWS), de sportkoepel NOC*NSF" | STYLE-NL §2.7 first mention | `dopingautoriteit-2026-07-reactie-concept-lijst-2027` |
| sport, TUE world context | "De Amerikaanse (USADA)"; "een niet-geregistreerd medicijn" | "De Amerikaanse antidopingorganisatie (USADA)"; "een middel dat daar niet is goedgekeurd" | grammar; STYLE-NL §2.4 and §5.6 ("medicijn" for an unapproved compound) | `usada-bpc-157`, `au-sia-peptides` |
| sport, fold "Waarom een etiket je zelden helpt" | "Medicijnen vallen onder de Geneesmiddelenwet … kans … 'zo goed als nihil'" | "Een goedgekeurd medicijn moet volgens de Geneesmiddelenwet onder strenge eisen worden gemaakt. … Voor een product van buiten de apotheek zegt dat niets." | on a page about peptide vials the unqualified sentence could be read as covering an unauthorised peptide (legally also a "geneesmiddel"); the source speaks of registered medicines (RVG number) made under the Gnw's production rules | `dopingautoriteit-voedingssupplementen`, `dopingautoriteit-geneesmiddelen-controleren` |
| whats-changing, title and description | "regels over peptiden om te volgen"; "Een tracker met data van …" | "regels voor peptiden die we volgen"; "Een overzicht met datum en bron van …" | calque of "rules to watch"; "data" ambiguous | – |
| whats-changing, TL;DR 1 and EU Lead | "Ja, maar nog niet. … Daarna duurt het 24 maanden." | "Nog niet. Het Europees Parlement stemt nog. De meeste regels gelden pas 24 maanden nadat de wet ingaat." | "Ja" predicts Parliament's vote (the page "voorspelt geen besluiten"); the 24 months run from entry into force, not from the vote | eu-status fact 29, conflict 1 |
| whats-changing, intro | "De tracker toont …" | "Het overzicht hieronder toont …" | English word | – |
| whats-changing, NL Lead | "De Geneesmiddelenwet blijft gelijk." | "De Geneesmiddelenwet is niet veranderd." | prediction; two bills touching the Gnw are pending | `nl-gnw-versie-informatie-2026-10-27` |
| whats-changing, NL table row 1; tracker `nl-advertising-case-law-2026` | "bevestigde de rechtbank Noord-Nederland een boete" | "oordeelde … dat een persoon terecht een boete kreeg" | the appeal was well-founded only for the delay; the fine was lowered to € 3.000 (as the fold says) | ECLI:NL:RBNNE:2026:1471, paras. 1.1, 19 |
| whats-changing, NL table row 3 (a row label is a table head) | "Toezicht op websites die illegaal medicijnen aanbieden" | "Toezicht op illegale medicijnen op internet" | STYLE-NL §7: no "aanbieder"-type words in labels or table heads | – |
| whats-changing, Raad van State bullet | "positieve eigenschappen van de medicijnen benadrukten" | "de positieve eigenschappen benadrukten die ze aan de medicijnen toeschreven" | the court: "gestelde positieve eigenschappen" (claimed, not real) | ECLI:NL:RVS:2026:1072, para. 6.3 |
| whats-changing, Rb Amsterdam bullet; tracker `nl-advertising-case-law-2026` | "Het ging vooral om een semaglutide-medicijn dat voor diabetes is goedgekeurd. Gebruik om af te vallen is dan … off-label." | 2 prescription semaglutide medicines: one authorised for diabetes type 2, the other (under conditions) for weight management in obesity or overweight; both articles were public advertising (very positive, not neutral); off-label only for the diabetes medicine; the court's test now with "en geen publieksreclame is" | the judgment concerns both products; the old text implied that semaglutide for weight loss is always off-label (untrue: one EU product is authorised for it) and left out half of the court's test (para. 10.1). No brand or publisher named | ECLI:NL:RBAMS:2026:5160, paras. 2, 7.4–7.11, 10.1 |
| whats-changing, Rb Noord-Nederland bullet | "Ook een gewone burger kan een boete krijgen." | "Ook een persoon, en niet alleen een bedrijf of organisatie, kan een boete krijgen." | the person was a church minister on the congregation's channel; "gewone burger" overstated | ECLI:NL:RBNNE:2026:1471 |
| whats-changing, enforcement fold | "Hoeveel meldingen over peptiden gaan, kan de IGJ niet zeggen." | "De IGJ kan haar meldingen over afslankmedicijnen niet uitsplitsen, bijvoorbeeld naar vervalste middelen of middelen van internet. Hoeveel meldingen over peptiden gaan, is niet bekend." | factual error: answer 6 is about obesity medicines and the categories asked (off-label, online, falsified); it never mentions peptides (no "peptide" in the PDF). The peptide count is UNRESOLVED (nl-law 5.14), so written as unknown. (merge.md §7 suggested the wrong sentence.) | `tk-2026-ah-249-antwoord-afslankmedicatie`, answer 6 |
| whats-changing, Europol | "een Europese actie van Europol"; "nep-producten" | "onder leiding van Europol, de politiedienst van de EU"; "namaakproducten" | explain the body once; spelling (nepproducten) and STYLE-NL §2.4 (counterfeit = namaak) | `europol-2026-02-shield-vi` |
| whats-changing, EU figure step 4 | "Op 18 maart 2026." (no verb) | "Een commissie van het Parlement keurde de afgesproken tekst goed op 18 maart 2026." | full sentence | `ep-oeil-2023-0132-cod` |
| whats-changing, PRAC list; tracker `eu-glp1-safety-reviews` | cardioembolic stroke listed like a signal | + "een extra onderzoek na een eerder periodiek veiligheidsrapport" | the agenda item is a post-authorisation measure (LEG) from a PSUSA, not a signal | `ema-prac-2026-10-agenda` |
| whats-changing, US Lead | "De FDA moet nog beslissen" | "De Amerikaanse medicijnautoriteit FDA moet nog beslissen" | STYLE-NL §2.7 first mention in the body (the marker on the line before stays) | – |
| whats-changing, PCAC point 4 | "In de VS blijft bereiden door apotheken verboden" | "In de VS mogen apotheken deze peptiden nog niet legaal bereiden" | the old sentence said all US pharmacy compounding is banned | `fda-503a-bulks-page`, `usc-21-353a` |
| `src/data/tracker.yaml`, `nl-ndr-2027` | `status: adopted` | `status: rulemaking` (comment updated) | the 2027 NDR text was not found (UNRESOLVED 5.9), so its adoption by the ISR cannot be shown; "adopted" stated an unresolved point as fact. Move to adopted or in force once the text is published | nl-law 5.9; `dopingautoriteit-code-2027` |
| `src/i18n/nl/tracker.json`, `nl-ndr-2027` | "Daarom verandert het NDR op die dag ook." | "…, schrijft de Dopingautoriteit." | attribute the announcement | `dopingautoriteit-code-2027` |
| glossary `public-advertising` | "voor mensen die geen arts of apotheker zijn" | "niet alleen bedoeld is voor artsen, apothekers en andere zorgverleners, maar ook voor andere mensen" | Gnw art. 1 "beroepsbeoefenaren" covers more than doctors and pharmacists | `nl-gnw-art-1-reclame` |

### Confirmed as written (no change)

- New sources, all fetched today (HTTP 200) and saying what they are cited for: `dopingautoriteit-vertaling-dopinglijst-2026`
  (dated 15 December 2025; group names and S0/S2 wording as quoted), `dopingautoriteit-dopingovertredingen` (presence,
  use without a positive test, possession incl. "jouw huis of garage"; "alle leden van de topsportbonden"),
  `dopingautoriteit-geneesmiddelen-controleren` (Dopingwaaier, "geen resultaat betekent niet …", Global DRO, dispensatie
  and TUE, GDS, answer within one working day), `dopingautoriteit-voedingssupplementen` ("zo goed als nihil"),
  `dopingautoriteit-2025-12-code-2027-aangenomen` (5 December 2025, Busan, in force 1 January 2027). Titles, authors and
  years match the pages; no title or URL names a seller or company; no phone number or e-mail address is printed on the
  pages.
- Dopingautoriteit facts: no criminal prosecution for a positive test or use, trade forbidden; NDR adopted unchanged; the
  2027 change (federations may no longer enforce; the Dopingautoriteit becomes prosecutor, imposes provisional
  suspensions, runs discipline); data exchange with six bodies, also "om de illegale handel en productie in dopingmiddelen
  tegen te gaan"; first violation from a warning to 4 years, depending on the substance and the degree of fault; rules
  during a ban; contaminated supplements (report at once, keep them); "niet of nauwelijks" tests in Dutch fitness; Belgian
  gym tests and recognition of Belgian bans; the 2027 list news (mainly clarifications; Dutch translation and Dopingwaaier
  from 1 January 2027; re-check medicines and supplements); the joint Dutch comment on the draft list.
- NDR 2025: in force 1 June 2025, based on the 2021 Code; "risicoaansprakelijkheid" (art. 2.5); no intent, fault or
  "bewust gebruik" needed (art. 3.6); recreational athlete with the five-year test, decided by the Dopingautoriteit;
  reprimand to 2 years for recreational athletes with "geen aanmerkelijke mate van schuld of nalatigheid", not for drugs
  (art. 45).
- WADA 2027 list: S0 examples now include "peptides" and name BPC-157; S2.2.3 AOD-9604; S2.2.4 CJC-1295, tesamorelin,
  ipamorelin, examorelin (hexarelin); S2.3 TB-500; S4.4.1 MOTS-c. Dates (ExCo 10 September, published 21 September 2026,
  in force 1 January 2027) as nl-law fact 47.
- Judgments: RvS fines € 3.750 and € 2.625, four articles, a sample letter for the GP and a video about 2 prescription
  medicines, "in wervende bewoordingen"; Rb Amsterdam € 48.450 in total; Rb Noord-Nederland € 3.750 lowered to € 3.000
  only for the delay. IGJ fines public since 1 January 2026, about 40 a year. AH 249 answers 5 and 10 as quoted.
- EU: every date and fact of the reform figure, the fold on the Council text, TFEU art. 294(7) with no end date, the CMA
  (aims as the Commission's release gives them: procurement, EU manufacturing, stocks), the Biotech Act (joint committee,
  "de commissies"; "twee commissies" in the tracker text), the PRAC lines and the volvulus outcome match eu-status, its
  fact-check and the source notes.
- Tracker items: ids, jurisdictions, `updated`, `next_milestone` and every source id exist and match the research; no
  existing item was touched by this check; the advertising test holds (no effect named; off-label shown as off-label; no
  brand, publisher or seller named; PRAC lines name possible risks with "Een signaal betekent nog niet …").
- Frontmatter: `translation` (adapted), `reviewed_by: pending-legal-review`, `reading_level: B1`, related keys valid Dutch
  routes; anchors `/nl/legal-routes/#artsenverklaring` and `#compassionate-use` are headings on the Dutch routes page; no
  `/en/` link and no link to a US/UK/CA/AU/IE/NZ page; Belgium only in two short lines with a link to `/nl/legal/be/`;
  "je" throughout, no "u"; STYLE-NL §5.6 words absent; no commerce word in a title, heading, Lead question, fold title,
  figure title or table head.

### Validation

`npx tsx scripts/validate-content.ts --only pages/nl/legal/sport-and-doping`, `--only pages/nl/legal/whats-changing`,
`--only nl-legal-sport-changing`, `--only tracker`, `--only pages/nl/legal/`: 0 errors, 0 warnings each.
`npx tsx scripts/check-locale-residue.ts --only <same> --details`: 0 error/frame hits and 0 warn hits each. TL;DR totals:
119 words (sport) and 116 (whats-changing); every TL;DR answer and Lead answer has at most 18 words.

### Remaining concerns for the reviewer

1. **The refusal sanction** ("doorgaans 2 jaar, misschien 4"): the Dopingautoriteit says it in a Belgian example; the
   Code's own rule for refusing a test starts from 4 years (2 only if not intentional). Now attributed to the
   Dopingautoriteit; the legal reviewer may prefer the Code's wording (`wada-code-2027` art. 10.3.1, not re-read here).
2. **Retatrutide "nergens goedgekeurd" / "Geen medicijnautoriteit heeft het goedgekeurd"** (TL;DR and fold): kept as on
   English; supported by every data row (US, UK, CA, AU, EU, NL, DE, BE investigational) and by media reports that no
   application has been filed; there is no official worldwide source (nl-law 5.11 stays open).
3. **`nl-ndr-2027` status** changed to `rulemaking` (writer's question 5): confirm, or set `adopted` if the ISR has adopted
   the 2027 NDR.
4. **Rb Amsterdam description** now says the second medicine is authorised "onder voorwaarden" for weight management; the
   reviewer may prefer to leave the indications out and say only "2 semaglutide-medicijnen op recept". No brand is named,
   as nl-law 6.12 asks.
5. **The writer's questions 1–2 and 6–10 stay open** (NDR scope and our reading; the Customs-to-doping-case inference, now
   marked "volgens ons"; the publisher-line sentence on whats-changing, an owner decision; the world-context lines; PRAC
   lines before PRAC concludes; the medical B1 wording of the signals).
6. **For the final sweep:** `research/nl-notes/merge.md` §7 (and nl-law 5.14) suggest "Hoeveel meldingen over peptiden
   gaan, kan de IGJ niet zeggen": the Minister's answer 6 does not say that. Any other Dutch file that copied it should
   say "is niet bekend" (`src/i18n/nl/tracker.json` `nl-igj-online-sellers` says "is onbekend": fine). Once the minutes
   and signal recommendations of the PRAC meeting of 26–29 October 2026 are published, `eu-glp1-safety-reviews` and the
   PRAC lines on whats-changing need an update.
