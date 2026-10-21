# Research notes: safety-a (core harm-reduction pages)

Group: safety-a. Written 20 October 2026. Reviewer: pending-medical-review (all six pages).

Files: `src/content/pages/en/safety/{index,warning-signs,before-you-consider,sterile-technique,injection-safety,sharps-disposal}.mdx`,
`src/i18n/en/warning-signs.json`, `src/data/sources/safety-a.yaml`, `src/i18n/en/glossary/safety-a.json`.
Shared files touched by Edit/tool only: `src/data/media.yaml` (6 entries via `npm run media:commons`, then
caption `sources:` and one author/credit clean-up), `src/data/heroes.yaml` (6 lines), `src/i18n/en/media.json` (6 entries).

Approach: standard Dutch harm-reduction practice for people who inject (Mainline, Trimbos/DRUGSinfo), backed
by WHO, CDC, FDA, NHS, MedlinePlus, Thuisarts (NHG), RIVM and Dutch government pages. B1 throughout: short
sentences, every technical term in the glossary. No amounts, volumes, conversions or sourcing anywhere.

## Key facts and their sources

### Action levels in `warning-signs.json` (feeds `<WarningSigns />` on every compound page)

| Sign (id) | Action | Basis |
|---|---|---|
| sepsis-signs | emergency | NHS sepsis: 999/A&E for very fast breathing, confusion/slurred speech, blue/pale/blotchy skin (`nhs-sepsis`); Thuisarts sepsis (`thuisarts-sepsis`) |
| fainting-serious | emergency | NHS fainting: 999 if not woken within 1 minute, chest pain/palpitations, fit (`nhs-fainting`) |
| fever-after-injection | urgent | Thuisarts sepsis: contact huisarts/huisartsenpost directly; NHS cellulitis: feeling hot/cold/shivery with skin infection |
| fainted-recovered | stop | NHS fainting: "See a GP if you have fainted"; "not usually a sign of something serious" |
| changing-mole | stop | NHS moles (see a GP, non-urgent); melanotan link from case reports (`cardones-2009-eruptive-nevi`) |
| black-skin-severe-pain | emergency | NHS necrotising fasciitis: 999/A&E if much more painful than expected or black/purple/grey blotches or blisters |
| spreading-redness | urgent | NHS cellulitis (urgent GP/111); Thuisarts wondroos ("bel direct je huisarts of de huisartsen-spoedpost") |
| red-streaks | urgent | MedlinePlus lymphangitis: may spread within hours; contact provider or go to emergency room |
| pus-lump | urgent | NHS skin abscess (urgent if painful/red/hot or spreading redness); NHS boils ("do not pick, squeeze or pierce") |
| used-needle-stick | urgent | RIVM piercing guideline (call GP/GGD/hospital at once; ideally within 1 h, no later than 72 h); Thuisarts PEP (within 72 h, preferably within 2 h) |
| lump-not-going | stop | NHS skin abscess (see a GP for a lump that grows or does not go away) |
| anaphylaxis | emergency | NHS anaphylaxis; Thuisarts dikke ogen/lippen (112 if tongue/throat swell, breathing hard, faint) |
| hives-swelling | stop | Thuisarts dikke ogen/lippen (swelling without other symptoms: GP appointment; do not take the causing medicine again) |
| chest-pain | emergency | NHS chest pain; Thuisarts pijn op de borst (112) |
| severe-breathlessness | emergency | NHS shortness of breath (999 for severe difficulty breathing) |
| palpitations-severe | emergency | NHS palpitations (999/A&E if they do not go away or with chest pain, breathlessness, fainting) |
| very-high-blood-pressure | emergency | MedlinePlus malignant hypertension ("a medical emergency"; complications stroke, heart damage, kidney failure, blindness) |
| priapism | emergency | NHS priapism (999/A&E if more than 3 to 4 hours; permanent damage); `dreyer-2019-melanotan-priapism` |
| palpitations-recurring | stop | NHS palpitations (see a GP if they keep coming back) |
| very-low-blood-sugar | emergency | NHS low blood sugar (call 999 if not responding normally/unconscious; fit or unconsciousness when severe); ADA 2026 (glucose for the conscious person) |
| pancreatitis | emergency | NHS acute pancreatitis (999/A&E if sudden severe pain spreading to the back); EMA labels Wegovy and Mounjaro |
| cannot-keep-fluids-down | urgent | NHS diarrhoea and vomiting (111 now if you cannot keep fluid down); NHS dehydration; Mounjaro EPAR (dehydration and acute renal failure) |
| yellow-skin-eyes | urgent | NHS jaundice (urgent GP/111; causes include liver disease, gallstones, pancreatitis) |
| dark-urine-muscle-pain | urgent | MedlinePlus rhabdomyolysis (myoglobin harms kidneys; contact a provider); `nelson-2012-melanotan-rhabdomyolysis` |
| stroke-signs | emergency | NHS stroke (999 even if symptoms stop); Thuisarts verlamming (112, GP or huisartsen-spoedpost, also if gone) |
| sudden-severe-headache | emergency | NHS headaches (999/A&E if sudden and extremely painful, fit, confusion, stiff neck) |
| sudden-vision-loss | emergency | NHS vision loss (A&E/999 if you suddenly cannot see); NHS stroke (loss of sight); EMA PRAC NAION ("contact their doctor without delay") |
| seizure | emergency | NHS headaches (999 with a fit); NHS low blood sugar (severe hypo can cause a fit) |

Group placement: priapism sits in `cardiovascular` (trapped blood, vascular emergency) so that melanocortin compound
pages can use `<WarningSigns only="cardiovascular,general" />` and get both priapism and moles.

### Other key facts

- Hand hygiene, clean surface, new sterile needle and syringe per entry, swab septum and let it air-dry, do not touch it, never re-enter a vial with a used needle, multi-dose vials only if unavoidable, discard a preservative-free opened vial within 24 h, avoid recapping or use the one-handed scoop, sharps container within reach and closed at three-quarters full, needle-stick first aid (wash, let bleed), PEP not effective after 72 h: `who-2010-injection-toolkit`.
- Preservative "does not have an effect on viruses nor does it provide complete protection against bacterial contamination"; date and discard multi-dose vials within 28 days unless the maker says otherwise: `cdc-2024-preventing-unsafe-injection`. 28 days, new needle every time, do not use GLP-1 products that arrive warm: `fda-unapproved-glp1-concerns`.
- Sterile water: no bacteriostat, single-dose, discard unused portion: `dailymed-sterile-water-label`. Bacteriostatic water: benzyl alcohol preservative, multiple-dose container, toxic to neonates: `dailymed-bacteriostatic-water-label`.
- Mix by rolling gently, do not shake; inspect for particles and discolouration; rotate sites; not into scar tissue, bruises or the navel; injection-site reactions 25% vs 14% placebo; hypersensitivity reactions; contraindicated in active malignancy: `dailymed-egrifta-sv-label`.
- Agitation, temperature and freeze-drying affect peptide aggregation; aggregation causes loss of activity and immunogenicity; solid form increases stability: `zapadka-2017-peptide-aggregation` (read on the PMC article page). Aggregates and immune responses: `rosenberg-2006-aggregates-immunology`.
- Freeze-drying is how labs keep microbe collections: `morgan-2006-drying-microorganisms`. Sterility of freeze-dried products comes from filtration, aseptic filling/loading and steriliser validation: `fda-1993-lyophilization-guide`.
- Contamination before opening (fungus in unopened vials; 749 cases, 61 deaths by 1 July 2013): `smith-2013-fungal-methylprednisolone`.
- Lipohypertrophy in 64.4% of 430 Spanish insulin users; 5% among correct rotators; 98% of affected rotated wrongly or not; needle reuse > 5 times: `blanco-2013-lipohypertrophy`. Lipohypertrophy distorts absorption; do not inject into it: `frid-2016-fitter-recommendations`.
- Dutch practical guidance: new needle every time, wash with soap and water without disinfectant, move about 1 cm each day, needles into a needle container: `thuisarts-insuline-spuiten`. Needle container from the pharmacy: `apotheek-medicijnafval`; full containers back to the pharmacy: `apotheek-nadroparine`; municipalities collect small chemical waste: `rijksoverheid-kca`.
- 112 only when a life is in danger; otherwise GP/huisartsenpost first; huisartsenpost free of deductible, emergency department not: `rijksoverheid-urgent-medical-help`, `rijksoverheid-huisartsenpost-seh`. 112 across the EU: `ec-112-emergency-number`.
- Confidentiality: `knmg-beroepsgeheim`. Lareb takes reports from anyone, including about medicines bought online and other health products, and does not share them with your doctor: `lareb-bijwerkingen-melden`.

## Verification log (20 October 2026)

- **PubMed tool (get_article_metadata)**: every scholarly source's authors, title, journal, volume, pages, DOI and PMID copied from the record: Morgan 2006, Manning 2010, Zapadka 2017, Rosenberg 2006, Smith 2013 (NEJMoa1213978; PubMed date 2012-12-19 epub, print volume 369, 2013), Diao 2013, Blanco 2013, Frid 2016, Klein 2009, Dreyer 2019, Nelson 2012, Cardones 2009, Jebeile 2025, Schaefer 2025, Guerdjikova 2024, Haider 2026. Years follow the PubMed record date (Jebeile and Schaefer have 2026 issue volumes).
- **Full text read**: WHO toolkit (PDF from iris.who.int, text extracted with pdftotext); Zapadka 2017 (PMC article page); EU Wegovy product information PDF (EMA); Ozempic US label PDF (accessdata.fda.gov) for pen sharing and rotation.
- **Abstract only**: Manning 2010, Morgan 2006, Rosenberg 2006, Smith 2013, Diao 2013, Blanco 2013, Frid 2016, Klein 2009, Dreyer 2019, Nelson 2012, Cardones 2009, Jebeile 2025, Schaefer 2025, Haider 2026. Guerdjikova 2024 has no abstract and is cited only for the existence of the case report.
- **Labels via openFDA, confirmed on DailyMed**: Egrifta SV (set id 3d783378…, effective 29 Jul 2026), Vyleesi (f1d0c1b5…, 13 Nov 2025), Bacteriostatic Water Hospira (87d6e9dc…, 22 May 2026), Sterile Water Hospira (2b9ea23a…, 18 Mar 2026).
- **Web pages fetched with curl and read in full**: all NHS pages (with "page last reviewed" dates), MedlinePlus (review dates), Thuisarts (last changed dates), RIVM piercing guideline, LCI Prikaccidenten guideline (read but NOT cited: host not on allowlist), Rijksoverheid pages, government.nl, apotheek.nl, KNMG, Lareb, Trimbos DRUGSinfo, Mainline, FDA sharps pages, FDA lyophilization guide, GOV.UK clinical waste, gesund.bund.de, European Commission 112, CDC pages (via WebFetch; curl got 403), EMA NAION news.
- **Re-checked sources owned by other groups before reuse**: `fda-unapproved-glp1-concerns` (28 days; arrived warm; content current 1 Oct 2026), `fda-2024-compounded-semaglutide-dosing-errors` (five to 20 times the intended dose; patients unfamiliar with syringes; provider conversion errors; hospitalisations), `mhra-2023-fake-weight-loss-pens` (pens "may contain insulin"; hypoglycaemic shock and coma), `ema-prac-2025-06-naion`, EU Wegovy PI (storage, sunlight, frost, needle sharing, type 1 not studied, not a substitute for insulin, renal impairment).

## Conflicts between sources and how they were resolved

1. **Alcohol on the skin before an injection under the skin.** WHO (2010, table 2.3) and Thuisarts (insulin) say it is not needed: wash dirty skin with soap and water. Mainline, DRUGSinfo and some product leaflets advise an alcohol swab. Resolution: the page states both honestly, and says that if alcohol is used it must dry completely (WHO). No source was found showing harm from swabbing, so it is not discouraged.
2. **Needle-stick first aid.** WHO: wash with soap and water and let it bleed freely. LCI (Dutch national guideline, not citable: host not allowlisted): let it bleed, rinse with lukewarm water, then disinfect with 70% alcohol or iodine. RIVM piercing guideline: do not suck, wash with mild soap under warm running water, no hard brush, waterproof plaster. Resolution: the page combines the steps that agree (let it bleed, do not suck, wash with soap and running water, plaster) and leaves out disinfection, which only LCI recommends and which we cannot cite. Reviewer to confirm.
3. **Speed of treatment after a needle-stick.** RIVM: ideally within 1 hour, no later than 72 hours. Thuisarts: PEP preferably within 2 hours, not after 72 hours. Resolution: the callout uses RIVM's "ideally within 1 hour, no later than 72 hours"; the HIV PEP bullet uses Thuisarts's "preferably within 2 hours".
4. **Sepsis action level.** NHS: 999/A&E. Thuisarts: contact the huisarts or huisartsenpost directly. Resolution: split into two items. Severe signs (confusion, very fast breathing, blotchy skin) are "emergency"; fever or shivering after an injection is "urgent". The warning-signs page says that where guidance differed we chose the faster level.
5. **Priapism threshold.** NHS says more than 3 to 4 hours; the assignment said 4 hours. Fact-check (20 October 2026): changed to "more than 3 hours, or a painful erection that will not go down", the faster end of the NHS range, so the page's "we chose the faster level" holds.
6. **Name of the out-of-hours GP service.** Rijksoverheid pages say "huisartsenpost"; recent Thuisarts pages (2025-2026) say "huisartsen-spoedpost". Both names are used on the pages and in the glossary.
7. **Melanotan II and blood pressure.** The bremelanotide (Vyleesi) label documents a transient blood-pressure rise; for melanotan II there is only a case report of a racing heart and rhabdomyolysis. The red-lines table now says this separately instead of claiming a blood-pressure effect for melanotan II.

## Gaps, things left out, and false-positive warnings

- **Granulomas**: the assignment asked for them. No source specific to peptide injections or to persistent injection-site granulomas could be verified in the time available, so the word is not used. Sterile abscesses are covered with `klein-2009-sterile-abscesses` (vaccine case reports, by analogy).
- **"Lymphangitis" and "red streaks"**: NHS has no lymphangitis page; MedlinePlus is used instead.
- **Germany and Belgium sharps disposal**: no allowlisted official source for household needles. Germany: `gesund-bund-arzneimittel-entsorgen` covers medicines only (regional rules, mostly Restmüll); the page says we found no federal guidance on needles. Belgium: no source; the page says so. OVAM (Flanders) and Bruxelles-Propreté/municipal pages are not on the allowlist.
- **UK**: the old NHS "how should I dispose of used needles" page now redirects to GOV.UK clinical waste collection, which is cited.
- **Validator warnings remaining (false positives / dependencies):** `related:` routes not written yet by other groups (`safety/if-something-goes-wrong`, `safety/product-risk`, `talking-to-your-doctor`, `legal/sport-and-doping`); and `src/data/explainers.yaml`: `insulin-glp1-hypo` is used on `safety/before-you-consider`, which is not in its `pages` list. That file is outside this group's ownership; the owner should add `safety/before-you-consider` to `pages`.
- A source id was renamed from `fda-sharps-disposal-best-way` to `fda-sharps-disposal-steps` because the word "best" in a `<Cite>` id triggered the superlative guardrail.
- **Possible future id collisions**: generic ids such as `nhs-sepsis`, `nhs-cellulitis`, `nhs-anaphylaxis` may also be wanted by other safety groups. Reuse them from `safety-a.yaml` rather than re-registering.

## Media

Six Commons photos registered with `npm run media:commons` (licences checked by the tool and by eye on the
file page metadata; thumbnails viewed for brand-like text, people and needles):

| Page | Media id | File | Licence |
|---|---|---|---|
| safety | cdc-hand-washing | Person washing hands.jpg (CDC) | public domain |
| safety/warning-signs | ambulance-den-haag | Ambulance Haaglanden unit 15-114 … pic1.JPG (Alf van Beem) | CC0 |
| safety/before-you-consider | stethoscope-grey | 2023 Stetoskop.jpg (Jacek Halicki) | CC BY-SA 4.0 |
| safety/sterile-technique | bacillus-cereus-plates | Blood agar and bicarbonate agar plate cultures of Bacillus cereus.jpg (CDC) | public domain |
| safety/injection-safety | staph-aureus-usda-sem | Staphylococcus aureus, 50,000x, USDA, ARS, EMU.jpg | public domain |
| safety/sharps-disposal | sharps-bin-yellow | Sharp waste bin 2.jpg (Nadina Wiórkiewicz) | CC BY-SA 3.0 |

Rejected: a branded "BD Sharps Collector" photo (prominent brand label), a US public needle box with a coffee-shop
sign behind it, a first-aid kit with brand labels, a sphygmomanometer with a brand logo, two GP-practice
façades that show named doctors or a named practice, and a skin histology slide with a pointer that looks like a needle.
The bacillus plate original is only 700 px wide; a larger image may be wanted later. The ambulance file title says
"at Delft" while the building signage is Den Haag, so the caption says "Haaglanden region".

## Open questions for the medical reviewer

1. Action levels: is "urgent" (same day) right for red streaks (MedlinePlus says provider or emergency room) and for "fever, shivering or feeling very ill after an injection"? Should yellow skin be "urgent" or "stop"?
2. Should the warning list include a hyperglycaemia/diabetic ketoacidosis item for people with diabetes who stop or reduce insulin while using a GLP-1 type product?
3. Needle-stick first aid: should the LCI step "disinfect with 70% alcohol or iodine after rinsing" be added (it would need `lci.rivm.nl` on the allowlist)?
4. Is the advice "if you are not sure, call the huisartsenpost" acceptable to Dutch out-of-hours services, given their triage load?
5. The under-18 red line rests on a commentary (`haider-2026-glp1-adolescents`) plus the absence of data. Is a stronger source available (for example a paediatric endocrine society statement)?
6. Kidney disease: is it right to advise against all unapproved peptides in kidney disease, given that the reasoning is from general peptide pharmacokinetics (`diao-2013-peptide-pharmacokinetics`), not from studies?
7. Thyroid (MTC/MEN 2): the page follows the semaglutide page (US contraindication, not a formal EU one). Confirm wording.
8. Mainline's home page said on 20 October 2026 that the foundation "will soon cease to exist". If its pages go offline, replace `mainline-steroids-safe-injecting` with DRUGSinfo/Jellinek equivalents.

## Proposed explainer (not built)

`contamination-infection` (already in the EXPLAINERS.md backlog): skin cross-section, no mirror. 1) Germs on
hands, the vial top or in the liquid (human). 2) The needle carries them under the skin (human). 3) In the fat they
multiply; the body walls them off: an abscess, or spreading redness: cellulitis (human). 4) Red lines along lymph
vessels towards the blood (human). 5) In the blood: sepsis; warning signs and "get help now" (human).
The sterile-technique page carries the same chain as a `<Diagram id="contamination-to-infection">` text equivalent.

## Fact-check log (independent fact-checker, 20 October 2026)

Scope: the six safety pages, `src/i18n/en/warning-signs.json`, `src/data/sources/safety-a.yaml` (72 sources),
`src/i18n/en/glossary/safety-a.json`, these notes, and the six page photos (registry, heroes, alt text).

### Sources checked (72 of 72 in safety-a.yaml, plus 22 reused ids owned by other groups)

- **PubMed (16)**: every record re-fetched with `get_article_metadata` by PMID: Morgan 2006, Manning 2010, Zapadka 2017,
  Rosenberg 2006, Smith 2013, Diao 2013, Blanco 2013, Frid 2016, Klein 2009, Dreyer 2019, Nelson 2012, Cardones 2009,
  Jebeile 2025, Schaefer 2025, Guerdjikova 2024, Haider 2026. Authors, title, journal, volume, pages, DOI and PMID all
  match the records. No fabricated or mismatched DOI found. Years: Smith 2013 was e-published 19 December 2012 (print
  volume 369, 2013); Jebeile (e-pub December 2025) and Schaefer (e-pub November 2025) carry 2026 issue volumes. Left as
  is. Affiliations confirmed: Blanco first author Novartis Pharma; Frid 2016 has three BD-affiliated authors (Hirsch LJ,
  Smith MJ, Strauss KW); Morgan 2006 first author at BTF Pty Ltd; Rosenberg at FDA CDER.
- **Zapadka 2017 full text** (PMC article page) re-read: supports temperature, agitation and lyophilisation as factors
  in aggregation, loss of activity and immunogenicity, and that freeze-drying can increase aggregation after
  reconstitution. It does not specifically say that freezing (freeze-thaw) causes clumping (see changes below).
- **Web pages (56)**: all fetched with curl on 20 October 2026 and converted to text; the two CDC pages (403 to curl)
  read with WebFetch. Every NHS "page last reviewed" date, MedlinePlus review date, Thuisarts "laatst gewijzigd" date,
  FDA "content current as of" date, apotheek.nl "bijgewerkt" date, KNMG date and gesund.bund.de "Stand" matches the
  note. Mainline `dateModified` 18 November 2023 confirmed; Mainline's English home page does say the foundation "will
  soon cease to exist".
- **WHO toolkit**: the English PDF was downloaded through the IRIS DSpace API (handle 10665/44298) and searched.
  Confirmed: table 2.3 (subcutaneous: soap and water yes, alcohol no); hand hygiene at least 30 seconds including wrists
  and between fingers; preparation surface cleaned with 70% alcohol; septum swabbed and air-dried; do not touch the
  diaphragm; never re-enter a vial with a used needle; single-dose vial preferred, multi-dose "only if unavoidable";
  discard a preservative-free multi-dose vial within 24 hours; discard a device whose package is torn, punctured,
  damaged by moisture or expired; avoid recapping, one-hand scoop; sharps container within arm's reach, sealed at
  three-quarters full; needle-stick first aid "allow injury to bleed freely"; PEP not effective beyond 72 hours; HBV
  PEP by vaccination status; no PEP for HCV, follow-up testing instead; blood-borne viruses "may be transmitted in the
  absence of visible blood contamination". The publication page is dated 3 January 2010 (note updated).
- **DailyMed labels (4)**: Egrifta SV (BLA022505; contraindicated in active malignancy; "a known growth factor"; roll
  gently, do not shake; 25% vs 14% injection-site reactions in the first 26 weeks; abdomen, rotate, not into scar
  tissue, bruises, navel or hard bumps; IFU says clean the injection site with an alcohol pad), Vyleesi (BP rise up to
  6/3 mmHg peaking 2 to 4 hours, back to baseline usually within 12 hours; contraindications), Bacteriostatic Water
  (benzyl alcohol preservative, multiple-dose, not for neonates), Sterile Water (no bacteriostat, single-dose, discard
  unused portion). DailyMed published dates added to the notes next to the openFDA effective dates.
- **Reused sources owned by other groups, checked for the claims made here**: EU Wegovy and Mounjaro product
  information PDFs (pregnancy 2 months and 1 month, breast-feeding, not a substitute for insulin, type 1 not studied,
  hypoglycaemia with insulin or sulfonylurea, pancreatitis caution, dehydration and renal function, moderate renal
  impairment and GI effects, severe renal impairment not recommended, renal impairment did not change semaglutide
  exposure, INR with acenocoumarol, storage, sunlight, not intravenous or intramuscular, abdomen, thigh or upper arm,
  age 12 and over); US Ozempic label (pen never shared even if the needle is changed; rotate with each injection); FDA
  unapproved GLP-1 page (28 days, even if the compounder says longer; arrived warm); FDA compounded-semaglutide
  dosing-error alert (five to 20 times, unfamiliar with syringes, provider miscalculations, unit confusion,
  hospitalisations); MHRA fake pens ("a very small number" hospitalised, hypoglycaemic shock and coma, may contain
  insulin); PCAC briefings for BPC-157 (one rat teratogenicity study with no malformations; aPTT changes in 28-day rat
  and dog studies), TB-500 and KPV (no reproductive studies; "thymosin beta-4 and TB-500 are not the same substance");
  WADA 2026 list (S0 names BPC-157; S2 names CJC-1295, tesamorelin and ipamorelin; both prohibited at all times); Hsieh
  2017, Cha 2003, Hanahan 2011 and Sola 2015 PubMed records.
- **Photos**: Commons metadata re-queried for all six files: public domain (CDC hand-washing; CDC PHIL #1167 Bacillus
  plates; USDA ARS staph), CC0 (ambulance), CC BY-SA 4.0 (stethoscope), CC BY-SA 3.0 (sharps bin). All allowed. Each
  image viewed: no needle in skin, no vial, no product label, no identifiable person. The ambulance shows "112" and
  "GGD"; a registration plate is visible (public emergency vehicle, not a private person). The hand-washing file's
  public-domain status on Commons rests on a stock-photo site attributing it to CDC; acceptable, but weaker than a
  PHIL number.

### Claims changed

1. **Fever after an injection, and "we chose the faster level"** (warning-signs page, JSON, injection-safety table): the
   page said that where guidance differed, the faster level was always chosen. Not true: NHS cellulitis says 999/A&E
   for cellulitis with fever or shivering, while the site uses "urgent" (Dutch GP advice: call the huisarts or
   huisartsenpost straight away). Fixed by adding "call 112 if you also have a fast heartbeat or fast breathing" to
   `fever-after-injection` and `red-streaks`, rewording the provenance paragraph to say where the slower Dutch level was
   kept and why (citing Thuisarts and NHS), and saying "straight away" instead of "today" for cellulitis and red lines in
   the injection-safety table and in the "urgent" explanation (Thuisarts: "bel direct").
2. **Priapism threshold** changed from 4 hours to "more than 3 hours" (NHS: more than 3 to 4 hours).
3. **"If you are not sure, call the huisartsenpost"**: wrong during office hours (the huisartsenpost is the
   out-of-hours service; Rijksoverheid). Now: call your GP, or the huisartsenpost outside office hours.
4. **"Some regions now call it the huisartsen-spoedpost"**: not supported; now "Newer Dutch health websites call it...".
5. **Anaphylaxis "needs adrenaline straight away"** changed to "usually starts within minutes and needs emergency
   treatment straight away" (NHS).
6. **MHRA fake pens**: "people were treated in hospital" changed to "a few people" (MHRA: "a very small number").
7. **Multi-dose vial 28 days**: "unless the maker gives a different date" (CDC) was blended with FDA advice for
   compounded products not to go past 28 days even if the instructions say longer. Split into two bullets, each with
   its own source.
8. **Aggregation**: "Shaking, heat and freezing can make them clump": freezing is not in Zapadka; now "shaking and
   changes in temperature". "A freeze-dried powder is ... not indestructible" replaced with Zapadka's actual point:
   freeze-drying can itself increase clumping after mixing. A repeated light-protection sentence was removed.
9. **Storage**: "For authorised peptide medicines, the label is clear" generalised from the Wegovy label alone; now
   "The Wegovy label is an example", and the limited time out of the fridge below 30 °C is mentioned, so the fridge rule
   is not overstated.
10. **Dosing-error paragraph**: now says the FDA reports concern compounded semaglutide.
11. **Fungal outbreak**: "In 2012, a US pharmacy made..." (manufacture date not in the source) and "Those patients were
    not careless" (patients did not inject themselves) reworded: "US health officials traced an outbreak ... to steroid
    injections from one pharmacy" and "The problem was not how the injections were given"; date given as 1 July 2013.
12. **Single-dose vial "has no preservative"**: now "usually has no preservative" (page and glossary).
13. **Skin to avoid**: "broken, with a wound, rash or eczema" had no source; now "broken, cut or affected by eczema,
    because germs get in more easily there", citing NHS cellulitis (broken skin) and NHS skin abscess (eczema).
14. **"Some product leaflets ... advise an alcohol swab"**: no leaflet was cited; Egrifta SV IFU added. DRUGSinfo says
    "ontsmetten" (disinfect), so the sentence now reads "an alcohol swab or other disinfection".
15. **Sterile abscesses**: species, n and design added (one report of two children after aluminium-adjuvanted vaccines).
16. **Blanco 2013**: "Almost all of them" was ambiguous; now "almost all of the people with lumps"; "observational" added.
17. **Sharps disposal**: "Do not put a full container in the household waste, even when it is closed" went beyond
    apotheek.nl; now says what apotheek.nl says (needles in a container are medicine waste, which goes to the pharmacy
    or a kca point, not the household waste).
18. **PEP**: "a short course of pills that can stop an HIV infection from taking hold" changed to "a month of daily
    pills that makes an HIV infection much less likely" (Thuisarts). "A quick test can make treatment unnecessary" (not
    stated in the source) changed to "helps the doctor decide whether you need PEP". Glossary PEP: "must start within
    hours" changed to "works best if started within hours".
19. **Pregnancy**: added that the single BPC-157 rat study found no birth defects but did not test fertility or
    development after birth (PCAC briefing), so the page is honest in both directions.
20. **Cancer**: Hsieh 2017 used cells, chick eggs and rats (now stated). Cha 2003 tested thymosin beta-4 overexpression
    in mouse melanoma cells; "the protein behind TB-500" replaced with "the natural protein that TB-500 is based on" plus
    "TB-500 itself was not tested in that study" (FDA TB-500 briefing: not the same substance).
21. **Eating disorders**: Jebeile 2025 covered obesity or type 2 diabetes (page said obesity only); long sentence split;
    the case report is now described as one case of semaglutide misuse.
22. **Kidney disease**: added that kidney disease did not change semaglutide exposure in a clinically relevant way
    (Wegovy SmPC 5.2), so "may stay longer" is not overstated; fluid loss damages the kidneys "in rare cases" (SmPC).
23. **Blood thinners**: "In animal studies of BPC-157, clotting times changed" now "In 28-day studies in rats and dogs,
    BPC-157 changed a blood clotting test" (aPTT). "GLP-1 medicines can change the INR" overgeneralised: the SmPC says
    warfarin's INR was not affected in a clinically relevant way, but lower INR was reported with acenocoumarol;
    rewritten to match.
24. **Red-lines table**: "PT-141 raises blood pressure" now "briefly raises"; "melanotan II has caused a racing heart"
    now "one case report of a racing heart after melanotan II"; under-18 row "almost no data" now "long-term effects in
    young people are unknown" (adolescent trials of authorised GLP-1 medicines exist).
25. **Strict liability**: "it does not matter whether you meant to take it" now "that is a rule violation, even if you
    did not mean to take it" (intent still affects the sanction under the Code).
26. **Pen sharing**: `fda-label-ozempic` added to the cite for "never share a pen, even if you change the needle" (the
    Wegovy EU leaflet only says never share pens or needles).
27. **Index page**: DRUGSinfo added as a source for abscess prevention (WHO covers blood-borne viruses).
28. **Media**: hand-washing alt text said "white coat" (it is a white protective gown) and the caption said "soap and
    water" (no soap is visible); both corrected in `src/i18n/en/media.json`.
29. **Changing-mole warning**: "in case reports" added.

### Checked and left unchanged

- Guardrails: no doses, volumes, conversions, protocols, sourcing hints, testimonials or superlatives. Studied doses
  are not quoted (Nelson 2012's dose deliberately omitted). "Safely" appears only about disposal and seeing a doctor.
  No PCAC vote appears in these files, so the five canonical elements did not apply.
- Internal links all point to planned routes; no `# ` h1 in any body.
- B1: summaries pass the validator's Flesch check; body sentences are mostly under 20 words (a few of 21 to 25 remain).
- Validator: 0 errors in these files. 8 warnings, all `related:` routes other groups have not written yet
  (`talking-to-your-doctor`, `safety/product-risk`, `safety/if-something-goes-wrong`, `legal/sport-and-doping`). The
  full-site run also warns that `insulin-glp1-hypo` is used on `safety/before-you-consider` without that route in
  `src/data/explainers.yaml` `pages` (that file's owner must add it).

### Open items for the reviewer added by the fact-check

- `mainline-steroids-safe-injecting` is allowlisted and is the only source for "injecting performance drugs into a vein
  can kill", but the Mainline page itself gives steroid injection technique, needle gauges and a maximum volume per
  site, and the foundation is closing. Consider replacing it with a Jellinek or Trimbos page that makes the same points.
- The shared "urgent" UI label reads "Get medical help today", while Thuisarts says "bel direct" for cellulitis and
  sepsis signs. The page text now says "straight away"; the label in `src/i18n/en/vocab.json` (not owned here) may need
  the same change.
- Whether `red-streaks` and `fever-after-injection` should be "emergency" (NHS) rather than "urgent" with a 112 trigger
  (Dutch GP advice) remains a medical decision.

---

## Restructure into the new page structure (21 October 2026)

Owner decision of 21 October 2026 (CONTENT-GUIDE §5.2 and §9.1; model: `compounds/en/semaglutide.mdx`): every
section opens with `<Lead question>` and a one-sentence B1 answer, then one figure, at most about 80 words of open
prose, and the depth in `<InDetail>` folds. This was a restructure, not a rewrite: no sentence, `<Cite>`, `<Claim>`,
table, study or source was removed, and no new claim was added. Files touched: the six safety pages and these notes.
`src/data/heroes.yaml`, `src/data/media.yaml` and `src/i18n/en/media.json` already held a photo, alt text and caption
for all six routes (see "Media" above), so nothing was added there. Sources and glossary files were not changed.

### What each page now looks like

| Page | Leads | Folds | Figures (one per section) |
|---|---|---|---|
| `safety` (index) | 3 | 1 | Diagram `what-clean-steps-can-fix` (what clean steps can and cannot fix); `PageList`; a small table of the five guidance bodies and what each is used for. The stop callout stays first and open. |
| `safety/warning-signs` | 5 | **0** | Diagram `three-levels-of-help` (wraps the three-level list), Diagram `infection-spreads` (wraps the infection paragraphs as a 4-step chain), Checklist (while you wait), the existing Checklist (what to bring), Diagram `where-to-report` (reporting schemes as a table), the provenance list as a table. `<WarningSigns />` and the stop callout stay open; the stop callout now has `id="stop-now"`. |
| `safety/before-you-consider` | 14 | 15 | Diagram `red-lines-overview` (unchanged, open), TimeStrip (stop before a planned pregnancy: Wegovy 2 months, Mounjaro 1 month, experimental peptides "not known"), Compare (under 18), Compare (cancer: BPC-157 / TB-500 / growth hormone boosters), Explainer `insulin-glp1-hypo`, Compare (PT-141 / melanotan II), Diagram `appetite-and-restriction`, Compare (kidneys: semaglutide / unapproved), Compare (thyroid: EU / US label), Diagram `weak-immune-system`, Diagram `blood-thinners`, Compare (sport), Diagram `rules-for-everyone`, Checklist (questions for your doctor). |
| `safety/sterile-technique` | 10 | 6 | Diagram `contamination-to-infection` (unchanged), Checklist (before you start), Checklist (handling the vial: the old bullet list), TimeStrip (how long an opened vial may be used), Compare (sterile vs bacteriostatic water: the old table), Diagram `mix-gently` (the old mixing list), KeyNumber 2–8 °C (Wegovy label), Checklist (when to throw a vial away), KeyNumber 749 (2012–2013 outbreak). |
| `safety/injection-safety` | 6 | 5 | Diagram `injection-layer-and-places` (wraps the label sentences), two KeyNumbers (64% and 5%, Blanco 2013), Diagram `skin-to-avoid`, Checklist (needle-stick), Diagram `normal-reaction-or-infection` (unchanged, open), IconArray 25 vs 14 in 100 (tesamorelin vs placebo; inside a fold), Diagram `mild-or-severe-allergy` (open: it contains emergency advice). |
| `safety/sharps-disposal` | 4 | 4 | Diagram `needles-never-here`, Checklist (use it safely), stop callout (open, unchanged) plus TimeStrip (hours after a prick: RIVM 1 h / 72 h; Thuisarts PEP 2 h / 72 h), Compare (DE / BE / UK / US). |

Structural changes worth knowing: on `before-you-consider` "### Tell your doctor" became its own `## Tell your doctor`
section (so the checklist is that section's figure), and the three "Never …" `###` headings became the rule column of
the `rules-for-everyone` table and the titles of three folds. On `sharps-disposal` the four country `###` sections sit
in one fold, each still with its `<JurisdictionCard>`. No other heading text changed; no page links to an anchor on these
pages (grep of `src` and `docs`), so the changed table of contents breaks nothing.

### Nothing lost: the check against git HEAD

Script (session scratchpad, not committed): for each page, `git show HEAD:<file>` against the working copy. It turns
every HEAD body into plain text (tags removed, fold titles kept, table rows split into cells), splits it into sentences
and cells, and checks that each one occurs, normalised (lower case, letters and digits only), in the new body. It also
counts every `<Cite>` id, and checks every `<Claim level>…</Claim>`, `<Q>`/`<Seq>`, internal link and component
occurrence, and the frontmatter keys.

| Page | HEAD sentences and cells | Missing | `<Cite>` ids HEAD → now (distinct) | Claims, links, components lost | Frontmatter changed |
|---|---|---|---|---|---|
| index | 24 | 0 | 11 → 20 (9 → 9) | 0 | none |
| warning-signs | 139 | 0 | 77 → 77 (50 → 50) | 0 | none |
| before-you-consider | 201 | 0 | 60 → 97 (34 → 34) | 0 | none |
| sterile-technique | 158 | 0 | 56 → 56 (22 → 22) | 0 | none |
| injection-safety | 120 | 0 | 52 → 52 (25 → 25) | 0 | none |
| sharps-disposal | 100 | 0 | 41 → 46 (15 → 15) | 0 | none |

Extra citations are on the new figures and reuse ids already on the same page; no new source id was introduced on any
page. On warning-signs, the single citation group `mhra-yellow-card,bfarm-risiken-melden,fda-medwatch` was split into
one id per table row. Three row labels of the sterile-technique water table were extended into questions for the
Compare format ("What is in it" → "What is in it: is there a preservative?"); the original label text is kept at the
start of each row and every cell's original text follows its `<Verdict>`.

One `<Claim>` moved from open text into a fold: on before-you-consider, `<Claim level="hypothesis">Whether these
peptides could feed a hidden or treated tumour in people has never been studied.</Claim>` now sits in the fold "What the
lab and animal studies found, and what nobody knows". The open cancer Compare says the same thing in every column
("Could it feed a tumour in people? Unknown: never studied"), and the advice "If you have had cancer, or have an
unexplained lump, do not use them" stays open. Reviewer: move it back to open text if you prefer the badge visible.

### Visible words, before and after (folds closed)

Generic pages have no short-version formula yet, so this adapts the compound-page formula in
`src/pages/[locale]/compounds/[slug].astro`: `mdxToPlain(body without <InDetail>)` + the text in props (`question`,
`title`, `detail`, `label`, `value`, `who`, `text`, `axis`, `a`, `b`, and here also `caption`) + explainer title, steps
and summary + the summary items. The `<WarningSigns />` list and `<PageList />` come from i18n/data and are not counted.

| Page | Before (HEAD, no folds) | After, folds closed | After, everything open |
|---|---|---|---|
| index | 310 | 430 | 483 |
| warning-signs | 1,326 | 1,513 (no folds by design) | 1,513 |
| before-you-consider | 2,035 | 1,982 | 3,109 |
| sterile-technique | 1,559 | 1,496 | 2,062 |
| injection-safety | 1,242 | 1,103 | 1,555 |
| sharps-disposal | 1,018 | 839 | 1,326 |

Why the drop is modest: these pages were already mostly checklists, action tables and stop-now lists, which must stay
open; the new leads and figure titles add words. Open prose outside figures is now at most about 80 words per section
except: warning-signs (no folds), injection-safety "Change the spot every time" (96: the caveat that the evidence is
from insulin, plus the four practical bullets), and sharps-disposal "In the Netherlands" (110: the three return
options). Before-you-consider stays near 2,000 because the 12-row red-lines table (about 290 words) stays open as the
page's overview and each of its 13 sections now has a lead and a small figure.

### Verification of the facts on the new figures (21 October 2026)

Every number on a figure repeats a fact the page already stated, with that sentence's own source, re-checked today:

- **Blanco 2013** (PubMed 23886784, DOI 10.1016/j.diabet.2013.05.006, abstract): 430 outpatients injecting insulin,
  injection sites examined by a diabetes nurse; LH in 64.4%; "Of the patients who correctly rotated sites, only 5% had
  LH"; 98% of those with LH did not rotate or rotated incorrectly; MeSH Spain; first author affiliated with Novartis
  Pharma. The KeyNumbers say "observational study in Spain" and carry level `human-limited` (uncontrolled), and the open
  text says the evidence is from insulin and hardly studied for other peptides.
- **Smith 2013** (PubMed 23252499, DOI 10.1056/NEJMoa1213978): preservative-free methylprednisolone acetate from a
  single compounding pharmacy; "examination of unopened vials later revealed fungus"; as of 1 July 2013, 749 cases in
  20 states, 61 deaths. KeyNumber level `human-limited` (outbreak investigation, uncontrolled).
- **EGRIFTA SV label** (openFDA, effective 29 July 2026): "The incidence of injection site reactions was 25% in EGRIFTA
  treated patients and 14% in placebo-treated patients during the first 26 weeks"; trial population "HIV-infected
  patients with lipodystrophy and excess abdominal fat" (740 treated, 543 in the 26-week placebo-controlled phase). The
  IconArray detail names this population ("adults with HIV and extra belly fat"); level `human-controlled`.
- **EU Wegovy product information** (EMA PDF, downloaded today): "Store in a refrigerator (2 °C – 8 °C). Do not
  freeze. Keep away from the cooling element"; "discontinued at least 2 months before a planned pregnancy"; adolescents
  aged 12 years and above. **EU Mounjaro product information**: "discontinued at least 1 month before a planned
  pregnancy due to the long half-life".
- **FDA, unapproved GLP-1 drugs** (content current as of 1 October 2026, fetched today): multi-dose vials within 28
  days of first use, discard even if medication remains; a new sterile needle and syringe for every dose; do not use an
  injectable GLP-1 that arrives warm; "research purposes" products are "of unknown quality".
- **RIVM piercing guideline / Thuisarts PEP / WHO toolkit** (as verified on 20 October, notes above): treatment ideally
  within 1 hour and no later than 72 hours (RIVM); PEP preferably within 2 hours, not after 72 hours (Thuisarts, WHO).
- Compare cells on before-you-consider and sharps-disposal repeat the page's own sentences and sources (Hsieh 2017,
  Cha 2003, PCAC TB-500 briefing, EGRIFTA SV, Vyleesi, EMA medicines search, Nelson 2012, Wegovy and Ozempic labels,
  WADA 2026/2027 lists and Codes, gesund.bund.de, GOV.UK, FDA sharps pages). Two cells state an inference from the
  page's facts and say so plainly: melanotan II "No EU label, because it is not authorised", and growth hormone boosters
  "banned at all times" (the WADA lists name CJC-1295, ipamorelin and tesamorelin under S2, prohibited at all times, as
  checked by the fact-check of 20 October).

### Emergency number

No English 112 phone mention existed on these pages before or after. Rendered check (dev server, 375 px and desktop):
the only "112" on any of the six pages is the title of the source `ec-112-emergency-number` ("112: the European
emergency number") in the source list of warning-signs, which the validator does not flag and which was there at HEAD.
Reviewer: keep it (it is a title, and the callout says "the one for an ambulance in the country you are in"), or cite a
different page.

### Rendering check

Dev server (`localhost:4321`), all six routes return 200; at 375 px no page scrolls sideways; leads, folds, Compare,
KeyNumber, IconArray, TimeStrip (numeric axes 0–3 months, 0–28 days, 0–72 hours) and the explainer render; time-strip
texts and key-number values read as intended. Generic pages show the folds but not the "Open all details" control (see
contract issues in the structured return).

### Decisions for the reviewer

1. **Warning-signs page kept fully unfolded.** The assignment said "keep the warning-signs page and every stop-now
   block unfolded". I read that as the whole page: it got leads and figures that wrap existing lists (no duplicated
   text), but no folds, so its open word count rose by 187 (leads and captions).
2. **One figure per section, with these exceptions:** the "What is normal" section on injection-safety has the action
   table open and the tesamorelin IconArray in a fold (the table holds emergency advice and must stay open; two open
   figures would break the rule); the stop callout on sharps-disposal comes before its TimeStrip; "Next steps" on
   sterile-technique has a lead and a link list but no figure.
3. **Intros without a lead.** Page intros of 80 words or fewer before the first `##` (sterile-technique,
   injection-safety, sharps-disposal, warning-signs) have no lead; the summary box already answers "what is this page".
4. **Diagram ids are new design work.** Thirteen new `<Diagram id>`s render as structured text until a designer draws
   them (listed in the structured return of this pass).

### Open questions added by the restructure

1. Is the sterile-technique TimeStrip clear enough that "28 days" is a maximum, not a target? Its title and texts say
   "thrown away 28 days after first use" and "never past 28 days".
2. The `2–8 °C` KeyNumber is the Wegovy label's rule, introduced "for example". Could a reader take it as storage advice
   for unlabelled products? The lead says "Follow the leaflet" and the open text says nobody knows how products from
   outside a pharmacy were stored.
3. The under-18 Compare puts "Wegovy from age 12, on prescription" beside "There is nothing to go on" for unapproved
   peptides. Honest in both directions, but confirm it does not read as an invitation for teenagers.

---

## Fact-check log (independent fact-checker, 21 October 2026: the restructure)

Scope: the six safety pages after the 21 October restructure (leads, folds and the new figures), these notes,
`src/data/sources/safety-a.yaml` (73 ids: 16 PubMed, 57 web), the reused sources from other groups that the new
figures rely on, and the six page photos.

### Sources re-checked

- **PubMed (16 of 16)**, `get_article_metadata` by PMID: Morgan 2006, Manning 2010, Zapadka 2017, Rosenberg 2006,
  Smith 2013, Diao 2013, Blanco 2013, Frid 2016, Klein 2009, Dreyer 2019, Nelson 2012, Cardones 2009, Jebeile 2025,
  Schaefer 2025, Guerdjikova 2024, Haider 2026. Authors, title, journal, volume, pages, DOI and PMID all match. No
  fabricated or mismatched DOI. Also re-checked for the new cancer Compare: Hsieh 2017 (PMID 27847966; HUVEC tube
  formation, chick CAM, rat hind-limb ischaemia) and Cha 2003 (PMID 14625258; mouse B16-F10 melanoma cells
  overexpressing thymosin beta-4: more lung nodules and 4.4-fold more tumour vessels).
- **Web (57 of 57)**: fetched with curl on 21 October 2026, converted to text and searched for the cited statement.
  Every NHS "page last reviewed" date, MedlinePlus review date, Thuisarts "laatst gewijzigd" date, FDA "content
  current as of" date, apotheek.nl date, KNMG date, gesund.bund.de "Stand" and Mainline `dateModified` matches the
  notes. The two CDC pages (403 to curl) were read with WebFetch (dated 26 March 2024 and 12 April 2024).
  `rivm.nl` refused connections from this machine; the RIVM piercing guideline text was read in the Internet Archive
  copy of 22 April 2026 (needle-stick steps and "idealiter binnen 1 uur en niet later dan 72 uur" confirmed).
- **WHO toolkit**: English PDF re-downloaded through the IRIS API and searched: discard a preservative-free
  multi-dose vial "within 24 hours of opening, or after the time recommended by the manufacturer"; discard if
  undated; one-hand scoop; "allow injury to bleed freely"; PEP not effective beyond 72 hours; transmission "in the
  absence of visible blood contamination".
- **Labels**: EU Wegovy and Mounjaro product information PDFs (EMA, downloaded today); US Ozempic label PDF
  (accessdata.fda.gov, 209637s038); DailyMed Egrifta SV, Vyleesi, Bacteriostatic Water and Sterile Water.
- **Other reused sources**: FDA "concerns with unapproved GLP-1 drugs" (WebFetch, content current 1 October 2026);
  WADA Prohibited Lists 2026 and 2027 (Internet Archive copies of the wada-ama.org PDFs; the live host returned an
  empty 202 response); FDA PCAC briefings for BPC-157, TB-500 and KPV (fda.gov PDFs); MHRA fake pens; FDA compounded
  semaglutide dosing errors; reporting-scheme URLs (Lareb, Yellow Card, BfArM, MedWatch, EMA NAION, EMA search: all 200).
- **Photos**: Commons licences re-queried through the API: public domain (hand-washing, Bacillus plates, staph SEM),
  CC0 (ambulance), CC BY-SA 4.0 (stethoscope), CC BY-SA 3.0 (sharps bin). All allowed. Hand-washing and sharps-bin
  images viewed again: no needle, vial, product, brand or face. Alt text and captions accurate.

### Claims changed (21 October 2026)

1. **Multi-dose vial, CDC row** (sterile-technique TimeStrip): "throw it away 28 days after first use, even with liquid
   left (CDC)". The CDC page says to discard within 28 days "unless the manufacturer states another date" and does not
   say "even with liquid left" (that is the FDA's wording). Now: "unless the maker gives another date (CDC)". The fold
   bullet that attributed "even if there is liquid left" to the CDC was corrected the same way.
2. **FDA 28-day advice misattributed in scope** (TimeStrip row and fold bullet): the page said the FDA advice applies
   to "a product from outside a pharmacy". The FDA page gives it for compounded GLP-1 medicines in multi-dose vials,
   which come from (compounding) pharmacies. Now: "Compounded GLP-1 medicine in a multi-dose vial (US)" and "For
   compounded GLP-1 medicines in multi-dose vials, the FDA is stricter ...". This error was already in HEAD.
3. **Warm deliveries**: "complaints about GLP-1 products that arrived warm" now "compounded GLP-1 products" (FDA:
   "certain compounded GLP-1 drugs have arrived warm").
4. **Lead "A multi-dose vial: no longer than 28 days"** now "usually no more than 28 days" (CDC allows the maker's own
   date); the TimeStrip title likewise says "usually".
5. **"Mistakes are common"** (mixing powders): no source quantifies this. Now "Mistakes happen, and some have been
   serious", citing the FDA dosing-error alert already used in the fold below.
6. **Eating-disorder diagram, step 1** ("GLP-1 type products make you less hungry and full sooner") cited Jebeile 2025,
   whose abstract does not say this. Now cites the Wegovy SmPC 5.1 ("reduces feelings of hunger", "increases feelings
   of satiety, fullness") and Haider 2026 ("potent appetite-suppressing effects").
7. **Cancer Compare**: the row "Pushes growth in lab or animal studies?" answered "yes" for growth hormone boosters with
   a human label fact about tesamorelin, and the Egrifta label was the only source for CJC-1295 and ipamorelin. The row
   is now "Pushes blood vessel growth or growth signals?"; the cell says tesamorelin raises GH and IGF-1 (Egrifta
   label) and that the WADA list classes CJC-1295 and ipamorelin as growth hormone releasing factors (S2.2.4, checked
   in the 2026 list). The fold sentence was corrected the same way. Title adjusted to match.
8. **Cancer lead "No."** answered "Can I use them if I have, or had, cancer?" for all products, but the page's red line
   is for healing and growth peptides (GLP-1 medicines are not red-lined for cancer, apart from MTC/MEN 2). Now "Not
   healing or growth peptides. They push growth signals that could help a tumour grow." The page's first lead and the
   second summary item were narrowed the same way ("So is cancer, for healing and growth peptides").
9. **Thyroid**: the lead "GLP-1 medicine labels warn about both" was wrong for the EU label, which has no MTC warning.
   Now "Labels warn about pancreatitis. The US label also warns about thyroid cancer." The EU column now gives the EU
   label's own position: the relevance for humans "is considered to be low, but cannot be completely excluded" (SmPC
   5.3), so the page is honest in both directions; the fold says the same.
10. **Rules-for-everyone diagram**: "Never share needles ... | The next person can get HIV ..., even with a new needle"
    read oddly for needles; now "Blood on them can pass on HIV and hepatitis B or C. A shared vial or pen can do this
    even with a new needle." The citations for "looks wrong" and "never stop a prescribed medicine" sat on reasons
    their sources do not state (Thuisarts says "Stop niet zomaar met je medicijnen", not that the condition returns);
    the cites now sit on the rule they support.
11. **Blanco KeyNumber**: value "64%" now "64.4%", exactly as the abstract gives it (CONTENT-GUIDE §9.1); the fold
    sentence was split for B1 and keeps "nearly two in three".
12. **PEP TimeStrip**: the bar from 2 to 72 hours was labelled "after 72 hours it no longer works", which describes the
    time after the bar. Now "still possible up to 72 hours; after that it no longer works" (Thuisarts, WHO).
13. **Injection-site lead and diagram caption**: "Where do peptide medicines go? Into the fat just under the skin" was
    broader than the page ("most"). Now "Most go into the fat just under the skin. Never inject them into a vein."
14. **PT-141 lead**: "raises blood pressure for hours" now "for some hours" (Vyleesi: peak at 2 to 4 hours, usually
    resolves within 12 hours), consistent with the Compare cell.
15. **Index leads**: "Why give safety advice ...?" now actually answers ("Because clean steps prevent many
    infections ..."); "Official health bodies" now "Mostly official health bodies and Dutch GPs" (Thuisarts is the
    Dutch GP college's site, and two harm-reduction organisations are also cited).
16. **B1**: four sentences of 22 to 24 words split (index stop callout, the tesamorelin and Blanco fold sentences, the
    strict-liability fold sentence).
17. **Sources file**: the `rivm-hygiene-piercing` note said "Last revised February 2026"; the guideline was fully
    revised in 2021 with an interim change in February 2026 (note corrected, archive copy recorded).
    `nhs-cancer-symptoms` URL updated to the page the old address now redirects to (`/conditions/cancer/`; quote
    re-confirmed there).

### Checked and left unchanged

- Pregnancy TimeStrip (Wegovy "at least 2 months", Mounjaro "at least 1 month" before a planned pregnancy; EU PI
  section 4.6), Wegovy age 12+, 2 to 8 °C, kidney Compare (renal impairment did not change PK in a clinically relevant
  way; more GI effects with moderate impairment; not recommended in severe impairment), INR with acenocoumarol, PT-141
  Compare (Vyleesi contraindications), sport Compare (S0 names BPC-157; S2.2.4 names CJC-1295, ipamorelin and
  tesamorelin; both prohibited at all times in the 2026 and 2027 lists), the 749 KeyNumber (Smith 2013: 749 cases in 20
  states, 61 deaths, fungus in unopened vials), the tesamorelin IconArray (25% vs 14%, first 26 weeks, HIV-infected
  adults with lipodystrophy and excess abdominal fat; rotation "to decrease injection site reactions"), the 5%
  KeyNumber, PCAC briefing facts (one rat teratology study, no malformations, no complete reproductive-cycle studies;
  aPTT changes in 28-day rat and dog studies; no reproductive studies for TB-500 or KPV), water Compare, sharps Compare.
- Guardrails: no doses, protocols, sourcing hints, testimonials or superlatives; no commerce words in link text;
  "safe" only in "'No data' does not mean 'safe'" and about disposal. No PCAC vote on these pages, so the five
  canonical elements did not apply. No English emergency phone number; the only "112" is a source title.
- Internal links all go to planned routes; no `# ` heading in any body.
- Not scaremongering: the pregnancy, cancer, thyroid and eating-disorder sections state where evidence is reassuring
  (no birth defects in the one BPC-157 rat study; EU thyroid risk "considered low"; eating behaviour mostly improved or
  unchanged in Jebeile 2025).

### Validator

`npx tsx scripts/validate-content.ts --only safety`: 0 errors, 8 warnings (the same `related:` routes other groups have
not written yet). `--only sources`: 0 errors, 0 warnings. Full repository: 0 errors.

### Open items for the reviewer (added 21 October 2026)

- The sharps "needles-never-here" diagram says "not down the toilet or the sink" but cites only the FDA, which names
  the toilet; the sink is common sense rather than sourced.
- The mild-allergy advice "Stop using the product" is right for an unapproved product, but Thuisarts advises not to
  stop a prescribed medicine on your own. A reader on a prescribed medicine should call the prescriber first; consider
  adding "If a doctor prescribed it, call them before you stop."
- `rivm.nl` was unreachable from the fact-checker's machine; re-check the live page once more before publication.
