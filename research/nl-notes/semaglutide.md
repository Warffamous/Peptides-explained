# Notes: Dutch semaglutide page (group semaglutide, 27 October 2026)

Files written or changed by this group:

- `src/content/compounds/nl/semaglutide.mdx` (new): the Dutch page.
- `src/data/compounds/semaglutide.yaml`: two rows appended to `authorised_products` (Kayshild, Kyinsu), with a comment. Nothing
  else in the file was touched (no row, no `names.brands`, no non-EU data).
- `src/data/sources/nl-semaglutide.yaml` (new): one source, `nl-regeling-zorgverzekering-2027-bijlage-2`.
- `src/i18n/nl/glossary/nl-semaglutide.json` (new): six terms (`cirrhosis`, `coumarin-anticoagulant`, `levothyroxine`,
  `basal-insulin`, `insulin-icodec`, `additional-monitoring`).
- `src/i18n/nl/glossary/semaglutide.json`: one alias added to `mash` ("metabole dysfunctie-geassocieerde steatohepatitis", the
  Kayshild SmPC's wording). The rest of the file was checked against the page and left as it was.
- No change to `config/link-allowlist.json` (every host cited is already allowed; the new source is on `.overheid.nl`).

Checks: `npx tsx scripts/validate-content.ts --only compounds/nl/semaglutide`: 0 errors, 0 warnings (`--only semaglutide`: 0
errors; the 4 warnings are the English page's inline reporting links, not ours). `npx tsx scripts/check-locale-residue.ts --only
semaglutide --details`: 0 error, 0 frame, 0 warn hits. Tested separately that the scanner does read the Dutch file: with the
`residue-ok` markers stripped it reports exactly the 5 marked warn lines (FDA ×3, MHRA, "In Australië"), and 0 error or frame hits.

## 1. Page: compounds/semaglutide

**Method: `translated`** (`translation: { method: translated, from: en, review: pending }`), as the brief says for compound pages:
the science is the English page's, line for line; the regulatory section, the help levels, the reporting route and the legal
route were rewritten for the Netherlands and the EU.

**Structure kept:** the same frontmatter fields, the same seven `<Section>`s in the same order, the same components (Compare,
AuthorisedProducts, Explainer ×2, OrganCards, Infographic, Mechanism, KeyNumber ×4, StudyTable, TimeStrip ×2, RegulatoryTable,
IconArray, ProductCheck with an `extra`, the stop callout `id="stop-now"`, WarningSigns, Checklist), the same 25 folds (the four
regulatory folds became "Status in Nederland, de EU en de sport", "De Europese Unie", "Nederland" and "Vergoeding uit het
basispakket"), the same 7 mechanism steps with identical `kind:level`, and all 18 study ids. Every `<Claim level>` of the English
page is kept with the same level; one was added (the "not one thing" fold: the heart/kidney sentence now carries
`human-controlled`, for the advertising test). TL;DR 85 words (5 pairs); every Lead ≤ 18 words; lede 18 words; main risk 12 words;
stop signs ≤ 8 words.

**TL;DR change:** the English "How do I get it?" pair became "Hoe krijg ik het legaal?" with the Dutch insurance fact ("Wegovy
wordt niet vergoed"), because the At a glance tile already says "Alleen op recept" and the reimbursement gap is what Dutch readers
come for.

### What came back from the saved material (23 October), and how it was re-checked

| Saved item (snapshot / MANIFEST-compounds-a) | Re-checked against | Now on the page |
|---|---|---|
| EU authorisation dates (Ozempic 8 Feb 2018, Rybelsus 3 Apr 2020, Wegovy 6 Jan 2022, tablets 14 Jul 2026); holder Novo Nordisk A/S | eu-status facts 2, 12; EPAR pages | Products fold, EU fold, regulatory TimeStrip (now 6 bars, with Kyinsu and Kayshild) |
| EU timeline strip | same | Extended with Kyinsu (24 Nov 2025) and Kayshild (26 Mar 2026); `checked` 2026-10-27 |
| CBG GLP-1 position ("you do not know what is in it …") | nl-care fact 19 (modified 3 Mar 2026, wording unchanged) | Compare row 5, the online-vial paragraph, the NL fold |
| Ozempic/Rybelsus reimbursed only for type 2 diabetes under bijlage 2; Wegovy not reimbursed | nl-care facts 56–59 (Regeling version of 6 Oct 2026, FK) | Vergoeding fold, with the three routes (a)–(c) of item 146 |
| Zorginstituut July 2024 advice; reassessment (5 Oct 2026 discussion, consultation early Nov 2026) | nl-care facts 60–61; the ZIN 2024 news re-read by us on 27 Oct 2026 | Vergoeding fold; dossier complete July 2026 added |
| "This gap has real costs" paragraph | adapted; the "not measured" point now rests on the minister's answer of 5 Oct 2026 | Vergoeding fold |
| Ozempic shortage resolved 2 Dec 2024 (CBG) | eu-status fact 27 (and the EMA catalogue, last updated 13 Jan 2026) | NL fold |
| Falsified Ozempic pens in the EU (EMA, IGJ 2023) | EMA news of 18 Oct 2023 and IGJ news of 25 Oct 2023, both re-read by us on 27 Oct 2026 | Fake-pens fold: German-labelled pens at EU wholesalers, inactive serial numbers, no evidence they reached patients through legal pharmacies. The EMA text does **not** say these pens held insulin: the insulin point rests on WHO 2024, the MHRA 2023 and the TGA 2024 (kept as evidence) |
| "EU labels list only hypersensitivity" | Dutch SmPCs 4.3 (Ozempic, Rybelsus, Wegovy, Kayshild; Kyinsu: "werkzame stoffen"), read 27 Oct 2026 | EU fold; who-should-not-use fold |
| Who-should-not-use and interactions from the EU SmPC (caution after pancreatitis, retinopathy, never a substitute for insulin, INR with coumarins) | Wegovy SmPC 4.4 and 4.5, Rybelsus 4.5 (levothyroxine +33%), read 27 Oct 2026 | Who-should-not-use fold (EU SmPC first, US label kept as evidence) |
| Lareb as the reporting route | nl-help facts 19–22 | Fake-pens fold + `<JurisdictionCard code="NL" />` |
| "The legal route in the Netherlands" (prescription, GP, GLI) | nl-care facts 1–4, 8, 12, 63–64 | Rewritten: who may prescribe (Wet BIG art. 36(14), KNMG), GP prescribing of weight-loss medicines is optional (Thuisarts wording), NHG-Standaard Obesitas criteria and referral |

**Not reused from the saved material:** `cbg-2024-glp1-shortage-recommendations` (June 2024 recommendations; not re-checked in
research/nl and no longer current); `zin-2024-wegovy-pharmacotherapeutic-report` (June 2024; not re-checked in research/nl; the
same unknowns, "no studies of tapering" and "not known whether long-term use keeps working", are cited from the ZIN news of
16 July 2024, which we re-read today); `bfarm-ozempic-falsification` and `bfarm-glp1-shortage-archive` (German frame; "BfArM" is an
error-level residue term); the saved checklist line "Compare your pen with the picture in the package leaflet" (the EMA says
falsified pens with other features are likely, so the English "check the pack, the label and the expiry date" was kept).

### Rewritten for the Netherlands (new, not on the saved page)

Kayshild and Kyinsu (products fold, EU fold, TimeStrip, indications, MASH fold with ESSENCE side effects from the Kayshild SmPC
4.8); generic semaglutide under EMA review (three applications; eu-status fact 11); Rybelsus paediatric extension under evaluation;
the CHMP's positive opinion on a Kyinsu extension, EC decision pending; Wegovy's renewal of 21 Sep 2026; the new PRAC signal
"ischaemic colitis" (EPITT 20309; eu-status fact-check correction 4); the minister's answers of 5 Oct 2026 (generics not legal in NL,
IGJ enforcement in general terms, Lareb counts 295/374/741/1.398 = 2.802, no reliable estimate of use outside regular care);
liraglutide and naltrexone/bupropion reimbursable for obesity under strict conditions (nl-care §2 item 10); eigen risico € 385 (2026)
and € 400 from 1 Jan 2027 (nl-care fact 55, settled by the fact-check); the future 2027 text of the Regeling (our own reading, new
source); the NHG note for self-paying Wegovy users (nl-care fact 59); the IGJ warning of 20 Oct 2026 on stolen insulin pens that
may be presented as obesity medication (nl-care fact 67a); the EU safety features on prescription packs since 9 Feb 2019 (CBG);
customs and "zelf invoeren" (nl-law facts 40–43); KNMP on pharmacy preparation (nl-care fact 32); Ozempic for weight presented as
off-label with the CBG's wording (nl-care fact 19; advertising test); one 113 Zelfmoordpreventie line in the mood paragraph
(Thuisarts, nl-help fact 16; not on English); the 2027 WADA Monitoring Program (nl-law fact 48).

## 2. Extra task: Kayshild and Kyinsu in `authorised_products`

Appended after `wegovy-tablets` (inside the EU block, so the Dutch products table reads chronologically by product group), exactly
the ready-made rows of research/nl-notes/merge.md §2. Re-checked today:

- **EPAR pages** (curl, 200): Kayshild "Authorised", holder Novo Nordisk A/S, opinion 29/01/2026, marketing authorisation issued
  26/03/2026, conditional, additional monitoring, "solution for injection in prefilled pens … injected once a week, under the skin";
  Kyinsu "Authorised", insulin icodec / semaglutide, holder Novo Nordisk A/S, opinion 18/09/2025, marketing authorisation issued
  24/11/2025, additional monitoring, "given once a week as an injection under the skin".
- **Union Register** (data embedded in the pages): Kayshild EU/1/26/2019, status ACTIVE, decision C(2026) 2197 of 2026-03-26;
  Kyinsu EU/1/25/1992, ACTIVE, C(2025) 8233 of 2025-11-24.
- **Source ids:** `ema-epar-kayshild` exists (refocus-ireland-nz.yaml), `ema-epar-kyinsu` exists (nl-research-eu-status.yaml); no
  source had to be added for them.
- The English page still validates (the validator asks for an indications line only where the product is shown).

**Indications on the Dutch page (all six EU products), from section 4.1 of the Dutch SmPCs read on 27 October 2026**
(`ema-pi-ozempic-nl`, `-rybelsus-nl`, `-wegovy-nl` (pens and tablets), `-kayshild-nl`, `-kyinsu-nl`; PDFs downloaded and read with
pdftotext): Ozempic and Rybelsus (adults, insufficiently controlled type 2 diabetes, diet and exercise, monotherapy when metformin is
unsuitable or added to other diabetes medicines); Wegovy pens (adults BMI ≥ 30, or 27 to < 30 with a weight-related comorbidity;
adolescents ≥ 12 with obesity and > 60 kg); Wegovy tablets (adults only, same BMI criteria); Kayshild (adults, non-cirrhotic MASH
with fibrosis F2–F3, with diet and exercise; conditional: "aanvullend bewijs over de baten … wordt afgewacht"); Kyinsu (adults, type 2
diabetes insufficiently controlled with basal insulin or a GLP-1 receptor agonist, with diet, exercise and oral antidiabetics).

## 3. Dropped citations (page compounds/semaglutide; all US/UK/CA/AU framing)

85 ids of the English page are not on the Dutch page. None is science; each supported another country's approval, route,
insurance, import rule or reporting route. Replacement in brackets.

- **US approvals and products:** `fda-drugsatfda-ozempic`, `fda-drugsatfda-rybelsus`, `fda-drugsatfda-wegovy`,
  `fda-drugsatfda-wegovy-tablets`, `fda-letter-215256-s029` (EU EPARs, `ema-wegovy-procedural-steps`, `ec-union-register-*`);
  `fda-label-rybelsus-ozempic-tablets`, `fda-letter-213051-s030` ("Ozempic tablets", a US-only product; glance.facts now cite the EU
  SmPCs); `fda-drugsatfda-search-status-a-2026-10-24` (no US generic → `ema-under-evaluation-2026-10`,
  `tk-2026-ah-249-antwoord-afslankmedicatie`).
- **US compounding, off-label, import, reporting, coverage:** `fda-glp1-compounding-policy`, `fda-2026-503b-glp1-exclusion-proposal`,
  `fr-2026-12937-503b-comment-extension`, `federalregister-fda-search-2026-10-23` (→ `knmp-richtlijn-bereiden-2016` for pharmacy
  preparation); `fda-off-label-use` (→ `nl-gmw-art-68-off-label`, `cbg-glp1-position`, `cbg-afslankmedicijnen`);
  `fda-personal-importation`, `fda-rpm-ch9-personal-importations` (→ `douane-invoer-geneesmiddelen-2026`,
  `douane-medicijnen-reizen-2026`, `douane-hvgem-geneesmiddelen-h5-fabrikantenvergunning`,
  `nl-rbdha-2019-4817-postzending-eigen-gebruik`); `fda-medwatch` (→ `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`,
  the NL card); `us-usc-42-1395w-102-e`, `us-usc-42-1396r-8-d`, `us-medicare-gov-weight-loss-drugs`, `us-cms-medicare-glp1-bridge`,
  `us-cms-balance-model` (→ the Dutch insurance sources of the Vergoeding fold). The sentence "990 adverse-event reports for
  compounded semaglutide" (US fold, `fda-unapproved-glp1-concerns`) went with the US fold; that id stays for its other claims.
- **UK:** `uk-euwa-2018-s20-exit-day`, `uk-mhra-uk-wide-licensing`, `uk-mhra-substance-index-status-a-2026-10-24`,
  `uk-mhra-ma-granted-2021`, `uk-mhra-2024-07-wegovy-cv`, `uk-mhra-2026-01-wegovy-7-2mg-dose`, `uk-mhra-2026-04-wegovy-7-2mg-pen`,
  `uk-mhra-2026-06-wegovy-tablets`, `uk-mhra-2026-07-wegovy-mash` (UK licensing → EU sources); `uk-emc-smpc-ozempic-0-25mg`,
  `uk-emc-smpc-rybelsus-3mg`, `uk-emc-smpc-wegovy-flextouch-0-25mg` (UK contraindication wording → Dutch SmPC 4.3,
  `ema-pi-wegovy-nl`, `ema-pi-ozempic-nl`); `uk-hmr-2012-reg-17`, `uk-hmr-2012-reg-214`, `mhra-foi-22-431-personal-import-seizures`
  (UK import → Douane sources); `mhra-gn14-specials` (→ `igj-leveren-op-artsenverklaring`, `cbg-compassionate-use-criteria`,
  `knmp-richtlijn-bereiden-2016`); `mhra-yellow-card` (→ Lareb); `nice-ta875-semaglutide`, `nice-ta1152-semaglutide-mace`,
  `nice-id6699-semaglutide-obesity-review`, `smc-2497-semaglutide-wegovy`, `smc-2988-semaglutide-wegovy-tablets` (UK funding → Dutch
  insurance sources). `mhra-glp1-what-you-need-to-know` stays as evidence (fake pens look real; consultation before prescription;
  anaesthesia advice; the MHRA's mood review) but left three places: the UK NAION warning (→ `cbg-2025-06-naion-semaglutide`), the
  pregnancy advice (→ `ema-pi-wegovy-nl`) and "powder-in-vial products are not authorised" (→ `cbg-gib-search-semaglutide-2026-10-27`
  + `ema-pi-wegovy-nl`: no EU semaglutide product is a powder in a vial; the five Dutch SmPCs contain neither "flacon" nor "poeder").
- **Canada:** `ca-sbd-ozempic`, `ca-rds-rybelsus-2020`, `ca-rds-wegovy-2021`, `ca-dpd-extract-search-status-a-2026-10-24`,
  `ca-pdl-human`, `ca-rds-semaglutide-injection-drreddys-2026`, `ca-rds-apo-semaglutide-2026`, `ca-rds-sevmia-2026`,
  `ca-dhpp-semaglutide-product-pages-2026-10-24`, `ca-hc-2026-08-generic-semaglutide-recall`, `ca-rds-wegovy-mash-2025` (Canadian
  approvals and generics → EU sources); `ca-hc-2026-01-glp1-advisory` (unauthorised GLP-1 products: too much, too little, none,
  contaminants → `igj-2025-illegal-online-medicines`, `ema-hma-2025-09-illegal-glp1`, `igj-online-medicijnen`);
  `ca-hc-2025-glp1-compounding-position`, `ca-hc-recalls-database`, `ca-hc-gui-0116-personal-import`, `ca-cbsa-d19-9-1`,
  `ca-hc-sap-drugs`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `ca-pcpa-negotiations-2026-10-24`, `ca-pcpa-role-system`,
  `ca-cda-amc-2025-wegovy` (Canadian routes, reporting, funding → Dutch sources); `ca-cda-amc-2022-wegovy` (no evidence of health gain
  beyond weight → `zin-2024-wegovy-not-reimbursed`: the Zorginstituut could not determine which patients gain most health, and found
  no tapering studies; read 27 Oct 2026). `ca-pm-ozempic-2026-07-13` and `ca-pm-wegovy-2026-10-02` stay as label evidence.
- **Australia:** `au-artg-ozempic-308324`, `au-artg-search-status-a-2026-10-24`, `au-tga-pmr-search-status-a-2026-10-24`,
  `au-artg-public-summaries-semaglutide-tirzepatide-2026-10-24`, `au-poisons-standard-2026-10`, `au-tga-advertising-glp1-prohibited`,
  `au-tg-amendment-2024-measures-2-glp1`, `au-tga-compounded-medicines-guidance`, `au-tga-2024-06-glp1-compounding-update`,
  `au-tga-personal-importation-scheme`, `au-vic-dpcs-act-1981`, `au-nsw-ptg-act-1966`, `au-nsw-health-s4d`,
  `au-tga-sas-individual-patients`, `au-tga-report-adverse-event`, `au-pbs-semaglutide-2026-10-24`, `au-pbs-dusc-2024-06-semaglutide`,
  `au-pbs-medicine-status-wegovy`, `au-pbac-2025-11-obesity-treatments-advice` (Australian status, schedule, routes, possession law,
  reporting, funding → EU/NL sources). `au-tga-2024-09-counterfeit-ozempic-pens` (insulin in fakes) and
  `au-tga-2023-05-counterfeit-semaglutide-vials` (vials without semaglutide; moved to the online-vial paragraph, marked) stay as
  evidence.
- **Link dropped:** `/en/legal/ireland-and-new-zealand/` (→ one Belgian line linking `/nl/legal/be/`).

**Foreign sources kept as evidence** (science identical; marked where the text names the body): US labels (`fda-label-wegovy`,
`fda-label-ozempic`) for trial data, label differences and the boxed warning; `fda-unapproved-glp1-concerns` and
`fda-2024-compounded-semaglutide-dosing-errors` for what is known about unapproved products and vial dosing errors; Canadian
monographs for the label comparison and the INR advice (beside the Dutch SmPC); MHRA and TGA counterfeit findings. Marked lines:
5 (`{/* residue-ok: … */}`).

## 4. UNRESOLVED points and how the page handles them

- **2027 reimbursement of Wegovy** (nl-care §5.2, still UNRESOLVED after the fact-check): the page says the published future text of
  the Regeling for 1 January 2027 does not name Wegovy and keeps the semaglutide conditions, that this text can still change, and
  "Een besluit over vergoeding van Wegovy in 2027 vonden we niet." (We read wetten.overheid.nl/BWBR0018715/2027-01-01 ourselves:
  "Toekomstige tekst van 01-01-2027 t/m 31-07-2027 … kan voor inwerkingtreding nog wijzigen"; new source.)
- **When the Zorginstituut will advise, and what the minister decides** (§5.3): "Wanneer het advies komt, is nog niet bekend."
- **The minister's formal decision on the 2024 advice** (§5.10): not mentioned; the page says only that Wegovy is not in the GVS.
- **Kayshild and Kyinsu reimbursement:** not covered by research/nl → "of en hoe die worden vergoed, hebben we niet uitgezocht."
  (For the record: the Regeling text of 6 Oct 2026 has no hit for "Kayshild" or "Kyinsu"; we did not check other routes, such as
  hospital care, so the page does not say they are not reimbursed.)
- **Kyinsu extension** (pending Commission decision) and **Rybelsus paediatric extension** (evaluation started 12 Sep 2026): written
  as pending, no outcome claimed.
- **PRAC signals:** ischaemic colitis written as open (information due 1 Dec 2026); peripheral neuropathies (open, no outcome) and
  volvulus (closed without a label change) are not on the page.
- **IGJ action of August 2026 against a webshop** (nl-law fact 28, not citable): not mentioned; enforcement is described in general
  terms from the minister's answer.
- **Customs practice for own-use parcels** (nl-law §5.3–5.5): the page says only what the law and Customs' published rules say
  (import needs a licence; the traveller exemption does not cover a parcel), not what happens to a given parcel.

## 5. Open questions for the reviewers

Legal:
1. **Advertising test** (brief, "Added after step 1", item 1): the Vergoeding fold keeps the English "this gap has real costs"
   paragraph (SELECT's heart result named in a reimbursement context, balanced by the Zorginstituut's reasons). Is that informative
   enough, or should it go?
2. **Ozempic for weight:** the page says, in the CBG's words, that using Ozempic to lose weight is off-label, that the CBG advises
   against it, and that off-label prescribing needs a professional guideline (nl-care open question 6). It does not say whether any
   Dutch guideline allows it. Fine as is?
3. **Zelf invoeren paragraph** (NL fold): enough, or should it name art. 40(2) for products without a handelsvergunning?
4. **Generic semaglutide:** "Generieke semaglutide mag nu niet legaal in Nederland op de markt komen" paraphrases the minister
   (5 Oct 2026). Accurate?

Medical:
5. **Help levels in the stop callout:** pancreatitis, NAION and dehydration → "Bel direct je huisarts. Is de praktijk dicht? Bel dan
   de huisartsenpost." (Thuisarts: severe belly pain, keeps vomiting = spoed); low blood sugar after a non-pharmacy product and
   allergic swelling → "Bel direct 112" (the site's level is faster than Thuisarts for low blood sugar: 112 only when unconscious;
   nl-help fact 17 says the site keeps its faster level). Agree?
6. **113 line** added in the mood paragraph (not on English). Keep?
7. **MTC/MEN2:** the page says the EU SmPC has no such contraindication while the US and Canadian labels do, and advises discussing
   it with the prescriber. Agree?
8. **NHG obesity criteria** written as "BMI van 35 tot 40 met een ziekte die met het gewicht samenhangt, of een BMI van 40 of meer",
   after at least a year of a lifestyle programme such as the GLI, and "huisartsen die deze medicijnen niet voorschrijven, en
   huisartsen die het soms wel doen" (Thuisarts) instead of "facultatief" (nl-care open question 7).
9. **Kayshild and ESSENCE:** the page says Kayshild was approved on the basis of ESSENCE (the Kayshild SmPC 4.8 and 5.1 name
   ESSENCE as its phase 3 study in MASH; the EPAR says "an ongoing study"). Fine?

## 6. Style terms (STYLE-NL lacks these; the word used)

| English | Used on the page |
|---|---|
| WADA Monitoring Program | het monitoringprogramma van WADA (glossary `wada-monitoring-program` has the alias) |
| additional monitoring (black triangle) | aanvullende monitoring (SmPC: "onderworpen aan aanvullende monitoring") |
| run-in phase | aanloopfase |
| interim analysis | tussentijdse analyse |
| propensity-matched | op kenmerken gekoppeld (propensity matching) |
| adjudicated (event) | beoordeeld door een onafhankelijke commissie |
| post hoc analysis | een achteraf gedane analyse (glossary has `post-hoc-analysis`, "post-hocanalyse") |
| liver biopsy · fibrosis · cirrhosis | leverbiopt · fibrose (littekens in de lever) · cirrose |
| boxed warning (US label) | zware waarschuwing (boxed warning) |
| US compounded semaglutide | semaglutide die Amerikaanse apotheken zelf hadden gemaakt (STYLE: "bereiding door een Amerikaanse apotheek") |
| product line (GIB result) | productregel |
| ZIN technical consultation · Scientific Advisory Council | technische consultatie · Wetenschappelijke Adviesraad |
| PRAC | het veiligheidscomité van het EMA (PRAC) |
| sulfonylurea | SU-derivaat (sulfonylureumderivaat), as the glossary |
| constipation · dysaesthesia | verstopping (obstipatie) · veranderd gevoel in de huid |
| generic (medicine) | generieke semaglutide |
| pack safety features (FMD) | een unieke code en een verzegeling |
| yolk sac | dooierzak |
| insurer's prior authorisation | not used (nl-care conflict 5: "machtiging van je zorgverzekeraar" if needed) |

## 7. For the final sweep (files we do not own)

1. `src/data/compounds/semaglutide.yaml`, EU row: consider adding `ema-epar-kyinsu`, `ec-union-register-kayshild` and
   `ec-union-register-kyinsu` to its sources (it cites `ema-epar-kayshild` already). We changed only `authorised_products`.
2. **Product names shown on the Dutch table are English:** "Wegovy (injection)", "Wegovy (tablets)", "Kyinsu (with insulin
   icodec)" (the `name` field is locale-independent). Suggest a localised product name (schema or i18n map) or neutral names
   ("Wegovy, injectie"); the Kyinsu name was kept exactly as the merge's ready-made row.
3. `names.brands` is [Ozempic, Wegovy, Rybelsus]; Kayshild and Kyinsu are not in it (left alone on purpose: the English page shows
   the list). If brands become per-locale, add them for Dutch.
4. `src/i18n/nl/glossary/tirzepatide.json`, `insulin-glargine`: its alias "langwerkende insuline" is a generic phrase (any basal
   insulin; Kyinsu's icodec too). Suggest dropping it there, or moving it to `basal-insulin` (nl-semaglutide.json); we left it out of
   our entry to avoid a duplicate alias.
5. Source notes and dates to refresh (owners of semaglutide.yaml, pt-141.yaml, refocus-ireland-nz.yaml, bpc-157.yaml):
   `zin-2024-wegovy-not-reimbursed`, `ema-2023-falsified-ozempic`, `igj-2023-falsified-ozempic` re-read by us on 27 Oct 2026 (the
   EMA text names no insulin; the IGJ text tells patients who doubt a pen to contact their pharmacist); `cbg-glp1-position`,
   `zin-wegovy-reassessment`, `fk-semaglutide` re-read by research/nl on 27 Oct 2026 (accessed still 2026-10-20);
   `ema-under-evaluation-2026-10` (pt-141.yaml): its note covers bremelanotide only, add the three generic semaglutide rows
   (EMEA/H/C/006847, 006902, 006910; eu-status fact 11); `ema-epar-kayshild` (refocus-ireland-nz.yaml): its note speaks of the HPRA
   list, add the CHMP opinion and conditional status for the Dutch use; `ema-medicines-json` (bpc-157.yaml): its note mentions only
   the BPC-157 search, while the EU rows of semaglutide and tirzepatide cite it for their records.
6. `docs/STYLE-NL.md`: the terms of section 6 above.
7. Insurance research for Kayshild and Kyinsu (GVS status; hospital route?), so the page can replace "hebben we niet uitgezocht".
8. `research/nl/status/semaglutide.yaml` suggested an NL note with a "[Reimbursement clause from the insurance research]"
   placeholder; the Dutch page's `regulatory_notes.NL` now has that clause (from nl-care facts 57–60).

## Check (independent, 27 October 2026)

Independent fact-check and edit of the group's files: `src/content/compounds/nl/semaglutide.mdx`, the two product rows in
`src/data/compounds/semaglutide.yaml`, `src/data/sources/nl-semaglutide.yaml`, `src/i18n/nl/glossary/nl-semaglutide.json`
and `src/i18n/nl/glossary/semaglutide.json`. Read first: the brief (with "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1,
§1a, §4.1, §5, §9, §11–13, research/nl/nl-care.md, nl-law.md, nl-help.md, eu-status.md (each with its fact-check),
research/nl/status/semaglutide.yaml, research/nl-notes/merge.md §2 and research/for-nl-site/MANIFEST-compounds-a.md.

**Fetched and read today** (curl, HTML to text, PDFs with pdftotext): the five Dutch SmPCs (`ema-pi-ozempic-nl`,
`-rybelsus-nl`, `-wegovy-nl`, `-kayshild-nl`, `-kyinsu-nl`: 4.1, 4.3, 4.4, 4.5, 4.6, 4.8, 5.1, 5.2, 2); the Kayshild and
Kyinsu EPAR pages; the Union Register pages h2019 and h1992 (embedded data: ACTIVE, C(2026) 2197 of 2026-03-26,
C(2025) 8233 of 2025-11-24); the Regeling zorgverzekering in force (2026-10-06) and the future text (2027-01-01: "Toekomstige
tekst van 01-01-2027 t/m 31-07-2027", "kan voor inwerkingtreding nog wijzigen", item 146 word for word the same, no
Wegovy, Kayshild or Kyinsu); the minister's answers of 5 October 2026 (PDF, answers 3, 4, 5, 6); the Zorginstituut news of
16 July 2024; the CBG GLP-1 position, the CBG afslankmedicijnen page and the CBG Ozempic shortage page; the EMA news of
18 October 2023 and the IGJ news of 25 October 2023 on falsified pens; the IGJ online-medicines page; the FDA page on
unapproved GLP-1 drugs. All other cited ids were checked against their registry notes and research/nl.

**Science parity.** Every English `<Cite>` id that is not on the Dutch page was listed (85 ids): all are US/UK/CA/AU
approval, route, import, possession, reporting, funding or label-wording framing, as the writer's list in §3 says. All
23 English `<Claim>`s are on the Dutch page at the same level (plus the writer's one added `human-controlled` claim); all
18 study ids have a Dutch finding and limitation; the 7 mechanism steps keep kind and level; all 4 KeyNumbers, the
IconArray, both TimeStrips and both Explainers, OrganCards and the Infographic are there. Restored: the FDA's 990
adverse-event reports for US-compounded semaglutide (evidence, not a route; the writer had dropped it with the US fold)
and the contamination point of the dropped Health Canada advisory (now from the IGJ). Dropped without loss of science,
noted here: the English sentence on Wegovy's US accelerated approval for MASH and the CA/AU/UK MASH approvals (world
context; replaced by Kayshild, the EU product); "We did not check the Australian product information" (moot).

### Changes made

| Where | Before | After | Why | Source |
|---|---|---|---|---|
| TL;DR, online vials | "Nep-pennen met insuline kunnen je bloedsuiker te laag maken." | "Sommige nep-pennen bevatten insuline: je bloedsuiker kan te laag worden." | the English says *some* fakes held insulin; the Dutch made it every fake pen | `mhra-2023-fake-weight-loss-pens`, `au-tga-2024-09-counterfeit-ozempic-pens` |
| TL;DR, legal route | "Alleen op recept, van de apotheek. …" | "Op recept, van de apotheek. …" | keep the box at 85 words after the fix above (the tile already says prescription only) | – |
| glance.facts | label "Hoe lang het werkt" | "Hoe lang het blijft"; value "… nog 5–7 weken na stoppen" | the fact is how long it stays in the body, not how long it works | `ema-pi-wegovy-nl` 5.2: "nog ongeveer 7 weken na de laatste dosis … in de circulatie" |
| studies.pioneer-1 limitation | "De huidige tabletten hebben andere sterktes …" | "Een nieuwere tablet heeft andere sterktes …" | the original 3/7/14 mg tablets are still authorised in the EU (two formulations, bio-equivalent at different mg) | `ema-pi-rybelsus-nl` 5.1 ("Er bestaan twee formuleringen", Tabel 10) |
| Compare row 1 | "geen goedgekeurd semaglutide-product in de EU is een poeder in een flacon" | "in Nederland is geen goedgekeurd semaglutide-product een poeder in een flacon" | the CBG register covers what is authorised for NL; other member states' national registers were not searched (eu-status §5.7) | `cbg-gib-search-semaglutide-2026-10-27` |
| KeyNumber SELECT label | "kreeg er een in ongeveer 3 jaar" | "kreeg zo’n voorval in ongeveer 3 jaar" | unidiomatic Dutch | – |
| ESSENCE fold | "om echte uitkomsten voor de lever te meten" | "om klinische uitkomsten voor de lever te meten" | the English "clinical liver outcomes"; "echte" implies the biopsy results are not real | `sanyal-2025-essence` |
| Kayshild paragraph | ESSENCE side effects without placebo; no safety caveat | adds the placebo rates (12,4%, 12,2%, 7,8%, 5,6%) and "Gegevens over de veiligheid op lange termijn bij MASH zijn er nog niet." | advertising test: balance and uncertainty next to an authorised indication; both in the sources | `ema-pi-kayshild-nl` 4.8; `ema-epar-kayshild` ("long-term safety data … are not yet available") |
| Unknowns, "Gezondheidswinst naast gewicht" | only "kon niet vaststellen bij welke mensen … de meeste gezondheidswinst" | adds "grote onduidelijkheden over wat het lagere gewicht voor de gezondheid betekent" | closer to the English point (health gain beyond weight) and to the ZIN text | `zin-2024-wegovy-not-reimbursed` (re-read: "grote onduidelijkheden over de gezondheidseffecten") |
| Sport (WADA) | "WADA" without first-mention name | "het Wereld Anti-Doping Agentschap (WADA)" | STYLE-NL §2.7 first mention | – |
| EU fold, Wegovy | "Op 14 juli 2026 kwamen er Wegovy-tabletten bij …" | "… keurde de Europese Commissie ook Wegovy-tabletten goed …" | "kwamen erbij" reads as on the market; availability is unknown (eu-status §5.4) | `ema-wegovy-procedural-steps` |
| EU fold, Kayshild | "beoordeelt nieuwe informatie minstens 1 keer per jaar" | "beoordeelt elk jaar de nieuwe informatie" | the EPAR says "Every year" | `ema-epar-kayshild` |
| EU fold | paragraph on the new PRAC signal (ischaemic colitis, information due 1 December 2026) | removed | eu-status §6.10 recommends no open PRAC signal on compound pages before PRAC concludes (at most a dated line on legal/whats-changing); see concern 2 | `ema-prac-signals-2026-09-28` (no longer cited) |
| NL fold, register | – | "Het register laat zien wat is goedgekeurd, niet of elk product ook echt bij de apotheek te krijgen is." | eu-status §5.4 UNRESOLVED (availability), written as unknown | `cbg-gib-search-semaglutide-2026-10-27` (its note says the same) |
| NL fold, prescribers | "medicijnen die de bloedsuiker verlagen" | "medicijnen die de bloedsuiker regelen" | KNMG: "bloedglucose regulerende geneesmiddelen" | `knmg-wie-mogen-voorschrijven` |
| NL fold, off-label | only "gebruikt het off-label" | adds: research was in people with diabetes; whether benefits outweigh risks in other use is not always known (CBG) | advertising test: off-label never as a benefit; CBG's own words | `cbg-afslankmedicijnen` (re-read) |
| NL fold, generics | "mag nu niet legaal … op de markt komen." | adds the reason: patent or market and data protection not yet expired | answers the writer's legal question 4; the minister's words | `tk-2026-ah-249-antwoord-afslankmedicatie`, answer 3 |
| NL fold, Lareb counts | "meldingen … over obesitasmedicijnen … niet gesplitst naar waar het product vandaan kwam" | "meldingen van vermoedelijke bijwerkingen …"; "Het gaat om gebruik bij diabetes en om afvallen, ook om off-label gebruik en online aankopen. De cijfers zijn niet naar die groepen te splitsen." | the answer says "vermoedens van bijwerkingen" and names the groups it covers | same, answer 6 |
| NL fold, shortage | "gewaarschuwd … tegen gebruik om af te vallen zonder arts" | "… dat je Ozempic niet zonder toezicht van een arts moet gebruiken" | the CBG's words ("niet zonder toezicht van een arts te gebruiken") | `cbg-ozempic-shortage` (re-read) |
| Vergoeding fold, "real costs" | "Dit gat heeft echte gevolgen … Een medicijn … dat … minder hartproblemen gaf … is buiten bereik …" | "Dat Wegovy niet wordt vergoed, heeft gevolgen. Maar de redenen ervoor zijn ook echt. In SELECT kregen mensen die al een hart- of vaatziekte hadden met semaglutide minder vaak hartproblemen dan met placebo; 16,6% stopte wel door bijwerkingen, tegen 8,2% met placebo. Voor veel mensen …" | advertising test: an effect named in a reimbursement argument now has its population, comparator and the main risk next to it | `lincoff-2023-select` |
| Risks, pregnancy; who-should-not-use | "De Europese bijsluiter (van Wegovy) raadt een voorbehoedsmiddel aan." | "Volgens de Europese productinformatie … moeten vrouwen die zwanger kunnen worden een goed voorbehoedsmiddel gebruiken." / "Kun je zwanger worden? Dan moet je …" | the SmPC is stronger than "raadt aan": "moeten effectieve anticonceptie gebruiken" (4.6) | `ema-pi-wegovy-nl` |
| Legal route | "Wil je semaglutide om af te vallen? Bespreek het met je huisarts." | "Denk je aan een medicijn om af te vallen? Bespreek het met je huisarts." | the sentence invited semaglutide for weight loss (Ozempic is off-label for it); neutral now | `thuisarts-obesitas-medicijnen-huisarts` |
| Online vial | – | "Is het product vervuild? Dan kan dat volgens de IGJ je organen beschadigen." | restores the contamination point of the dropped Health Canada advisory, from a Dutch source | `igj-online-medicijnen` (re-read: "Als het medicijn verontreinigd is, kan dat uw organen beschadigen") |
| Online vial (marked FDA evidence) | – | "Tot 31 mei 2026 kreeg de FDA 990 meldingen van bijwerkingen bij zulke semaglutide van Amerikaanse apotheken. Waarschijnlijk zijn het er meer, want de meeste van die apotheken hoeven bijwerkingen niet aan de FDA te melden." | science parity (English US fold); evidence about non-pharmacy-made semaglutide, not a route | `fda-unapproved-glp1-concerns` (re-read: "990 reports", "likely … underreported") |
| Online vial | link to /nl/safety/sterile-technique/ | adds [wanneer je een flacon weggooit](/nl/safety/sterile-technique/#wanneer-je-een-flacon-weggooit) | the 28-day vial advice; anchor fixed by the brief (item 3) and present in the Dutch file | – |
| Fake pens | "In 2023 vonden groothandels …"; "Volgens het EMA zijn ze niet via legale apotheken bij patiënten terechtgekomen."; "Sommige nep-pennen in andere landen bevatten insuline" | "doken bij groothandels … op"; "Het EMA had in oktober 2023 geen aanwijzing dat ze via legale apotheken bij patiënten waren gekomen. De IGJ had toen ook geen aanwijzing dat Nederlandse apotheken zulke pennen hadden meegegeven."; "Sommige nep-pennen bevatten insuline" | the EMA wrote "There is no evidence that …" (dated, not a fact for all time); the registered BfArM source says the German-labelled pens did contain insulin and reached patients in Austria, so "in andere landen" was misleading | `ema-2023-falsified-ozempic`, `igj-2023-falsified-ozempic` (both re-read); `bfarm-ozempic-falsification` note |
| Fake pens, safety features | "Sinds 9 februari 2019 heeft elke verpakking van een receptmedicijn in de EU een unieke code … Zo krijg je bij de apotheek geen vervalst medicijn." | "… hebben verpakkingen van receptmedicijnen in Nederland een unieke code en een verzegeling. Die moeten voorkomen dat je bij de apotheek een vervalst medicijn krijgt." | Belgium, Greece and Italy applied it only from 2025 at the latest (Reg. 2016/161 art. 50); "geen" was an absolute promise | `cbg-fmd-vervalsing-melden`, `eu-regulation-2016-161` |
| Glossary nl-semaglutide.json | `cirrhosis` aliases "niet-cirrotisch(e)"; `coumarin-anticoagulant` aliases "acenocoumarol", "fenprocoumon", "warfarine" | removed | STYLE-NL §6: an alias only for exactly the same concept (one drug is not the class; "niet-cirrotisch" is the opposite) | – |
| Glossary semaglutide.json | `sulfonylurea` alias "gliclazide"; `wada-monitoring-program` term "WADA Monitoring Program" | alias removed; term "monitoringprogramma van WADA" (the English name kept as an alias) | same rule; the term is the Dutch word (STYLE-NL §6) | – |

**Checked and left as the writer had it** (correct against the sources): the six indications lines (Dutch SmPC 4.1, all
five PDFs read); Kayshild and Kyinsu product rows (EPAR dates, holder, route; Union Register ACTIVE with the decision
numbers in the comment); `nl-regeling-zorgverzekering-2027-bijlage-2` (title, URL, the quoted "toekomstige tekst" line and
the absence of Wegovy, Kayshild and Kyinsu all confirmed); the three bijlage-2 routes for Ozempic and Rybelsus (item 146
word for word, including route b's "bloedglucosewaarden onvoldoende … na ≥ 3 maanden … basaal insuline"); liraglutide and
naltrexone/bupropion (items 141, 147); eigen risico € 385 / € 400 (nl-care fact 55, settled); the ZIN 2024 quotes; the ZIN
reassessment steps; the NHG lines; EU contraindications (4.3 of Ozempic, Wegovy, Kayshild: hypersensitivity only); INR
with acenocoumarol and the frequent-INR advice (Wegovy 4.5); levothyroxine +33% (Rybelsus 4.5); pancreatitis, retinopathy,
gastroparesis, type 1 diabetes and other GLP-1 agonists (Wegovy 4.4); "ten minste 2 maanden" (4.6); yeast production
(section 2); 94% homology (5.1); the help levels in the stop callout (urgent = "Bel direct je huisarts. Is de praktijk
dicht? Bel dan de huisartsenpost.", 112 for allergy and severe hypo; matches the English levels and nl-help fact 17); Lareb
and the FAGG line; all `/nl/` links and the seven route anchors (headings present in `src/content/pages/nl/legal-routes.mdx`);
"je" throughout (no "u"); no word of STYLE-NL §5.6 or §7 in a title, heading, Lead question, fold title or label; no dose
outside study descriptions.

**Validation after the changes:** `npx tsx scripts/validate-content.ts --only compounds/nl/semaglutide`: 0 errors, 0
warnings (TL;DR 85 words). `--only glossary/nl-semaglutide`, `--only glossary/semaglutide`, `--only compounds/semaglutide.yaml`:
0 errors, 0 warnings. `--only semaglutide`: 0 errors; the 4 warnings are the English page's inline reporting links (not ours).
`npx tsx scripts/check-locale-residue.ts --only semaglutide --details`: 0 error, 0 frame, 0 warn hits; with the markers
stripped (test run on a copy in memory) the scanner reports 7 warn hits, all on the marked lines (MHRA, FDA ×5, "In
Australië"), and still 0 error or frame hits.

### Remaining concerns for the reviewer

1. **Advertising test, "real costs" paragraph** (Vergoeding fold): rewritten with population, comparator and the main
   risk, but it still argues that the reimbursement gap has costs. Legal reviewer: keep, or cut to the Zorginstituut's
   reasons only?
2. **Open PRAC signal removed:** ischaemic colitis (EPITT 20309; information due 1 December 2026) is no longer on the page,
   following eu-status §6.10 (medical reviewer question 10). Restore as one dated "in onderzoek" line if the reviewer wants
   open signals on compound pages.
3. **2027 reimbursement:** nl-care §5.2 says "say nothing about 2027 reimbursement of Wegovy"; the same file's fact-check
   (fact 62) added that the published 2027 text of the Regeling leaves item 146 unchanged and does not name Wegovy. The page
   states that fact, that the text can still change, and that we found no decision for 2027. Please confirm this is not read
   as a statement about 2027 reimbursement.
4. **Falsified pens in the EU contained insulin and reached patients in Austria** (registered source
   `bfarm-ozempic-falsification`, German regulator, November 2023). The Dutch page cannot name that regulator (error-level
   residue term `bfarm` on nl) and has no neutral EU source for it; it now avoids implying the opposite. A neutral EU or
   Dutch source for this point would let the page say it.
5. **Zelf invoeren for research vials:** the NL fold gives Customs' general rules only. Whether to add that a product
   without a handelsvergunning may not be imported at all (Gnw art. 40(2), nl-law fact 38) depends on whether a
   "research" vial counts as a medicine for Customs (nl-law §5.4 UNRESOLVED): legal reviewer (the writer's question 3).
6. **Lede "voor diabetes type 2 en afvallen":** the Wegovy SmPC indication is "gewichtsbeheersing, waaronder gewichtsverlies
   en op gewicht blijven"; the STYLE phrase "afvallen en op gewicht blijven" does not fit the 25-word lede with "Online
   flacons met deze naam zijn iets anders." Kept; the TL;DR uses the full phrase.
7. **Kayshild and Kyinsu reimbursement** stays "hebben we niet uitgezocht" (no research); the products table shows the
   English data name "Kyinsu (with insulin icodec)" and "Wegovy (injection)/(tablets)" (final-sweep item 2 above).
8. **Writer's open questions 1–9** (section 5) still stand; question 4 (generics) is now answered on the page with the
   minister's reason.

### For the final sweep (added by the check)

- `src/data/sources/refocus-ireland-nz.yaml`, `ema-epar-kayshild`: re-read 27 October 2026; add to its note "Every year, the
  Agency will review any new information" and "long-term safety data on the use of Kayshild in people with MASH are not yet
  available" (cited for both on the Dutch page); `accessed` 2026-10-27.
- `src/data/sources/semaglutide.yaml`: `fda-unapproved-glp1-concerns` re-read 27 October 2026 (the 990 reports and "likely
  … underreported" sentence, now cited on the Dutch page); `ema-2023-falsified-ozempic` note could quote "There is no
  evidence that any falsified pens have been dispensed to patients from legal pharmacies" (18 October 2023).
- `src/data/sources/guides.yaml`, `igj-online-medicijnen`: re-read 27 October 2026; its note could quote "Als het medicijn
  verontreinigd is, kan dat uw organen beschadigen".
- `src/i18n/nl/glossary/semaglutide.json`: the alias "gliclazide" was removed from `sulfonylurea`;
  `src/content/pages/nl/safety/before-you-consider.mdx` names gliclazide next to "sulfonylureumderivaten", which still links.
- STYLE-NL §2 candidates: "vermoedelijke bijwerking" (suspected adverse reaction, Lareb's "vermoedens van bijwerkingen");
  "monitoringprogramma van WADA" (glossary term now Dutch).
