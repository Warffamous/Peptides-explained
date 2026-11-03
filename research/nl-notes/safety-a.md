# Notes: group safety-a (Dutch site, 27 October 2026)

Pages written (all `translation: { method: adapted, from: en, review: pending }`, `reading_level: B1`,
`reviewed_by: pending-medical-review`, `last_reviewed: 2026-10-27`, the day the Dutch facts were checked):

- `src/content/pages/nl/safety/index.mdx`
- `src/content/pages/nl/safety/warning-signs.mdx`
- `src/content/pages/nl/safety/if-something-goes-wrong.mdx`
- `src/content/pages/nl/safety/before-you-consider.mdx`

Other files: `src/i18n/nl/glossary/nl-safety-a.json` (2 terms). No new sources (every id reused; no
`src/data/sources/nl-safety-a.yaml` was needed). No host added to `config/link-allowlist.json`.

Checks: `npx tsx scripts/validate-content.ts --only <each file>` → 0 errors, 0 warnings for all five files.
`npx tsx scripts/check-locale-residue.ts --only safety --details` → 0 hits. Because the script reported 0 hits for
every file, I also ran the scanner's own `scanMdx` with the `nl` config on my four pages (0 hits) and on copies with
the markers stripped (only `warn` hits, all deliberate: NHS as a cited source, the UK fake-pen alert, the Australian
health alert and TGA test, the US approval of tesamorelin and bremelanotide, the FDA's tesamorelin safety study),
and on a planted test string (it catches error and warn terms). Every such line carries
`{/* residue-ok: … */}`. No error or frame term is on any page.

Sources read for the label facts: the Dutch EU product information of Wegovy, Ozempic and Mounjaro (EMA PDFs,
fetched with curl and read with pdftotext on 27 October 2026; ids `ema-pi-wegovy-nl`, `ema-pi-ozempic-nl`,
`ema-pi-mounjaro-nl`, already registered by the eu-status research). Wording relied on: Wegovy 4.2 ("niet
aanbevolen ... ernstige nierinsufficiëntie (eGFR < 30 ...) waaronder ... terminale nierinsufficiëntie"), 4.4
(pancreatitis "Voorzichtigheid is geboden bij patiënten met een voorgeschiedenis van pancreatitis"; "mag niet worden
gebruikt als vervanging van insuline"; hypoglycaemia with sulfonylurea or insulin; not studied in type 1 diabetes),
4.5 (lower INR with acenocoumarol; "frequente controle van de INR aanbevolen"), 4.6 (stop "ten minste 2 maanden
voor een geplande zwangerschap"; not during breastfeeding), 4.8 (moderate renal impairment: more GI side effects),
5.1 (appetite), 5.2 (renal impairment: no clinically relevant effect; single dose 0,5 mg, mild to severe and
dialysis), 5.3 (C-cell tumours in rats and mice; "De relevantie voor de mens wordt klein geacht, maar kan niet
volledig uitgesloten worden"), 6.6 (not if not clear and colourless; not if frozen); the FlexTouch leaflet "Deel
nooit uw pen of uw naalden met andere mensen". Ozempic 4.3 (hypersensitivity only), 4.4 ("Semaglutide is geen
vervanger voor insuline"), 5.1 (glucose-dependent), 5.3 (same C-cell wording), leaflet (never share pen or
needles). Mounjaro 4.3 (hypersensitivity only), 4.4 (pancreatitis: not studied, caution; hypoglycaemia; dehydration
and acute renal failure), 4.6 (stop "ten minste één maand voor een geplande zwangerschap"; breastfeeding "kan
worden overwogen"), 5.3 (rat C-cell tumours, "De relevantie ... voor de mens is niet bekend").

---

## safety/index (adapted)

- **Came back from the saved material (23 October):** `drugsinfo-injecteren` in the figure's cite line; the
  "Dutch sources" rows (Thuisarts, RIVM) of the table; the fold "How Dutch harm-reduction services work" in a new form.
- **Rewritten for the Netherlands:** the stop callout names the Dutch help levels (112; huisarts or huisartsenpost;
  stop and make an appointment). The needle-programme paragraph now rests on Rijksoverheid and the Trimbos inventory.
  The fold "Finding a harm-reduction service in your country" became "Spuitomruil, vragen over drugs en drugs testen in
  Nederland": spuitomruil (at least 29 locations in 19 cities, an undercount; also some pharmacies and GGD’en), the
  Drugs Infolijn (0900-1995, € 0,10 per minute, weekdays 9 to 17; chat and e-mail free), treatment through the
  huisarts, and drug checking (DIMS and Jellinek test no medicines, steroids or other performance drugs; we found no
  public Dutch service that tests a peptide vial). Table: healthdirect and Health Canada rows replaced by RIVM,
  Thuisarts and Lareb.
- **"research chemical"**: written as STYLE-NL §2.4 says (“alleen voor onderzoek” op het etiket).
- **Dropped citations:**
  - `uk-ni-pha-harm-reduction-booklet`, `ie-hse-anabolic-steroids-reducing-harm`, `au-healthdirect-needlestick`
    (needle-programme paragraph): UK, Irish and Australian help framing → `rijksoverheid-verslavingszorg-drugs`,
    `trimbos-2026-harm-reduction-nederland`.
  - In the fold: `uk-nhs-drug-addiction-help`, `us-samhsa-national-helpline`, `uk-frank-contact`, `uk-wales-dan-247`,
    `uk-scot-nhsinform-injecting-advice`, `ca-hc-get-help-substance-use`, `au-health-aod-hotline`,
    `nz-healthnz-safe-sharps-disposal`, `uk-wales-wedinos-about`: country help services → `trimbos-2026-harm-reduction-nederland`,
    `drugsinfo-drugs-infolijn`, `rijksoverheid-verslavingszorg-drugs`, `drugsinfo-hulpkaart`, `dims-welke-drugs`,
    `dims-voorwaarden`, `jellinek-drugstestservice`.
  - Table and closing paragraph: `au-healthdirect-needlestick` (healthdirect row), `ca-hc-medeffect-reporting` (Health
    Canada row): Australian and Canadian framing → `rivm-hygiene-piercing`, `thuisarts-spoed-wie-bellen`,
    `thuisarts-wondroos`, `lareb-bijwerkingen-melden`.
- **Kept as evidence:** WHO, CDC (vials), NHS (skin infection), `fda-unapproved-glp1-concerns`, `smith-2013-fungal-methylprednisolone`.
- **Anchor:** `/nl/safety/product-risk/#als-je-al-een-product-hebt` (English `#if-you-already-have-a-product`),
  checked in the Dutch target file on 27 October; the ladder link uses the brief's fixed
  `#wat-een-labrapport-wel-en-niet-zegt`.

## safety/warning-signs (adapted)

- **Came back:** the Dutch help levels (huisarts overdag, huisartsenpost ’s avonds, ’s nachts, in het weekend en op
  feestdagen, the newer name huisartsen-spoedpost), "always call the huisartsenpost before the SEH unless life is in
  danger", eigen risico (GP and huisartsenpost no; SEH yes), Dutch medical secrecy, Lareb as the reporting route, the
  Thuisarts sources in the provenance table, the fever example ("Thuisarts: bel direct je huisarts of de
  huisartsenpost"). All re-checked against research/nl/nl-help.md facts 1–9, 10–17, 19–24 and 54; nl-care fact 51.
- **Rewritten for the Netherlands:**
  - Stop callout: the English line "Your local emergency number is the one for an ambulance in the country you are in"
    became the Thuisarts line "Je kunt 112 dag en nacht bellen. De telefonist vertelt je wat je moet doen tot de
    ambulance er is."
  - Three levels: `emergency` "Bel direct 112", `urgent` "Bel direct je huisarts of de huisartsenpost" (brief item 2:
    "bel direct", not "vandaag"), `stop` "Stop en maak een afspraak met je huisarts" (the `vocab.json` labels).
  - The fold "Medical help today: who to contact in each country" became "Je huisarts en de huisartsenpost: zo werkt
    het": office hours 8 to 17, the practice's urgent line, no national huisartsenpost number (where to find it, as
    `pages.jurisdiction.helpNote.NL`), triage, eigen risico (€ 385 in 2026; € 400 from 1 January 2027).
  - Effects of the substance: the EU product information is cited next to the US labels; a Dutch case report
    (`stammers-2026-insulin-falsified-semaglutide`: two people in a coma from insulin in semaglutide obtained without
    a prescription) was added after the UK fake-pen alert, which stays as evidence (marked).
  - Privacy paragraph: the four countries' privacy rules → WGBO art. 7:457 and the KNMG pages.
  - Reporting: the four-country table became a Lareb table (who may report, also when the product did not come from a
    pharmacy, Lareb does not tell your doctor, Lareb gives no medical advice) plus the brief's Belgian line "In België
    meld je een bijwerking bij het FAGG." and a link to `/nl/legal/be/`.
  - Provenance: Thuisarts example for fever, plus one sentence saying where the site is faster than Thuisarts (sepsis
    signs: Thuisarts "neem direct contact op", the site "bel direct 112"; nl-help fact 17 and §4.1).
- **Left out (unsourced, nl-help §2.15 and §6.6):** "Calling too often is better than calling too late". In its place:
  "Aan de telefoon kijkt een doktersassistent of arts hoe ernstig het is" (Rijksoverheid, fact 9). "Stay with the
  person until help arrives" stays, now sourced to Thuisarts ("De telefonist vertelt je wat je moet doen tot de
  ambulance er is").
- **Dropped citations:**
  - Stop callout and level 1: `us-medlineplus-when-to-use-er` (US "when to use the emergency room") →
    `rijksoverheid-urgent-medical-help`, `thuisarts-spoed-wie-bellen` (plus `thuisarts-pijn-op-borst`,
    `thuisarts-verlamming`, `thuisarts-dikke-ogen-lippen`).
  - Level 2 and "not sure": `uk-nhs-111-online`, `uk-nhs-what-happens-when-you-call-111`, `au-healthdirect-helpline`,
    `us-medlineplus-when-to-use-er`, `au-healthdirect-cellulitis` → `thuisarts-spoed-wie-bellen`,
    `rijksoverheid-huisartsenpost-seh`, `rijksoverheid-urgent-medical-help`, `thuisarts-wondroos`, `thuisarts-sepsis`.
  - Fold: `uk-wales-nhs-111`, `uk-scot-suicide-prevention-support`, `uk-ni-gp-out-of-hours`, `ca-help-healthlink-bc`,
    `ca-help-health811-ontario`, `ca-help-quebec-info-sante`, `ca-help-nl-healthline`, `ca-help-nwt-811`,
    `au-vic-nurse-on-call`, `au-qld-13health` (and the ids above) → `thuisarts-spoed-wie-bellen`,
    `thuisarts-in-case-of-emergency`, `rijksoverheid-huisartsenpost-seh`, `rijksoverheid-eigen-risico-2026`,
    `nl-zvw-art-19-eigen-risico-2027`.
  - Infection step 4: `au-healthdirect-cellulitis` → `thuisarts-sepsis`.
  - Privacy: `hhs-hipaa-your-rights`, `gmc-confidentiality-duties`, `gmc-confidentiality-framework`,
    `opc-privacy-laws-summary`, `oaic-health-information` → `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`,
    `nl-wgbo-art-457-confidentiality`.
  - Reporting diagram: `fda-medwatch`, `us-fda-reporting-serious-problems`, `mhra-yellow-card`,
    `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event`,
    `au-tga-report-adverse-events-consumers` → `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`,
    `cbg-bijwerking-melden`, `fagg-melden-bijwerking-patient` (Belgian line).
  - Provenance: `au-healthdirect-cellulitis` (fever example and infection row), `au-healthdirect-needlestick`
    (needle-stick row), `mhra-2026-02-semaglutide-naion` (UK regulator on NAION) → `thuisarts-sepsis`,
    `thuisarts-steenpuist`, `thuisarts-wondroos`, `rivm-hygiene-piercing`, `thuisarts-hiv-pep`,
    `ema-prac-2025-06-naion` (the EU reader's regulator; the snapshot's source).
- **Added for the Netherlands:** `thuisarts-voedselallergie` (own allergy pen, then call), `thuisarts-hypo-diabetes-type-2`,
  `thuisarts-buikpijn`, `thuisarts-naar-de-huisarts` (bring a list of everything you use), `ema-pi-wegovy-nl`,
  `ema-pi-mounjaro-nl`.
- **Cross-page anchors:** `/nl/safety/if-something-goes-wrong/#hulp-en-melden-in-nederland` (my own heading on that
  page; the English `#help-and-reporting-in-your-country`); `/nl/safety/product-risk/#als-je-al-een-product-hebt`
  (checked in the Dutch file).

## safety/if-something-goes-wrong (adapted)

- **Came back:** the whole Dutch frame of the saved page: the help table (112; huisarts; huisartsenpost, call first;
  SEH through the huisarts or huisartsenpost), the fold "Costs, and the poison centre" (now "Eigen risico, en advies
  bij vergiftiging"), the Dutch secrecy figure (WGBO, KNMG, police, the drunk-driver example, Lareb does not share),
  the fold "The rules behind this", and the Dutch reporting table (Lareb; the IGJ’s Landelijk Meldpunt Zorg; a fake
  product to the pharmacist or the LMZ). Re-checked: nl-help facts 1–9, 18–28, 54; nl-care facts 51–52.
- **Rewritten:**
  - Where to get help: the "health advice line" paragraph became how the huisartsenpost answers (a trained assistant,
    triage outcomes) and where its number is (no national number).
  - Poisoning: the NVIC advises professionals only; the public calls the huisarts or the huisartsenpost, who can reach
    the NVIC day and night; 112 if life is in danger (nl-help fact 18).
  - Secrecy fold: the KNMG grounds are listed as the source has them (five; "serious harm to someone else", as the
    registry note says, not "to you or someone else" as the saved page had it). The saved sentence "We found no Dutch
    rule that makes a doctor report a patient to the police (checked 22 October 2026)" was **not** reused: research/nl
    did not re-check it. The page keeps the English "what we did not check" form instead.
  - Report: the LMZ is now a section of igj.nl (nl-help fact 25); anonymous reporting by phone (fact 26); a pharmacist
    must report suspected falsification within 24 hours (fact 28; that the pharmacist is the public's route is our
    reading).
  - "Help and reporting in your country": `<JurisdictionCards which="full" />` → `<JurisdictionCard code="NL" />`
    (the EU card has no help services); "Ireland and New Zealand" → "België" (112; 1733 in most regions; the
    Antigifcentrum advises the public, 070 245 245, free, day and night; side effects to the FAGG; link
    `/nl/legal/be/`), then `<JurisdictionCards which="notes" />`. Belgian facts from research/nl/be-notes.md facts
    20–27 and its "short lines" (fact-checked).
- **Dropped citations:**
  - Stop callout: `us-medlineplus-when-to-use-er` → `rijksoverheid-urgent-medical-help`, `thuisarts-spoed-wie-bellen`.
  - Help diagram and paragraph: `us-medlineplus-when-to-use-er`, `uk-nhs-111-online`,
    `uk-nhs-what-happens-when-you-call-111`, `au-healthdirect-helpline` → `rijksoverheid-urgent-medical-help`,
    `thuisarts-spoed-wie-bellen`, `rijksoverheid-huisartsenpost-seh`, `thuisarts-in-case-of-emergency`.
  - Fold "Health advice and poison advice, by country": `us-hrsa-poison-help`, `us-hrsa-poison-help-about`,
    `uk-wales-nhs-111`, `uk-scot-suicide-prevention-support`, `uk-ni-gp-out-of-hours`, `uk-npis-members-of-public`,
    `ca-help-healthlink-bc`, `ca-help-health811-ontario`, `ca-help-quebec-info-sante`, `ca-infopoison-centres`,
    `au-vic-nurse-on-call`, `au-qld-13health`, `au-healthdirect-poisoning` (and the ids above) →
    `rijksoverheid-huisartsenpost-seh`, `rijksoverheid-eigen-risico-2026`, `nl-zvw-art-19-eigen-risico-2027`,
    `nvic-umcutrecht`, `rijksoverheid-urgent-medical-help`. (`nhs-poisoning` stays, cited elsewhere on the page.)
  - Secrecy figure: `hhs-hipaa-your-rights`, `gmc-confidentiality-duties`, `opc-privacy-laws-summary`,
    `oaic-health-information` → `nl-wgbo-art-457-confidentiality`, `knmg-beroepsgeheim`,
    `knmg-beroepsgeheim-doorbreken`, `lareb-bijwerkingen-melden`.
  - Secrecy fold: `gmc-confidentiality-duties`, `gmc-confidentiality-framework` (why confidentiality matters, UK
    guidance), `ecfr-45-164-524`, `uk-govuk-data-protection`, `nhs-constitution-england`,
    `oaic-access-health-information`, `cpsa-cma-code-of-ethics` (record access) → `knmg-beroepsgeheim` (why it exists),
    `nl-wgbo-art-457-confidentiality`, `knmg-beroepsgeheim-doorbreken`, `nl-wgbo-art-454-456-records`,
    `thuisarts-naar-de-huisarts`.
  - Report diagram: `fda-medwatch`, `us-fda-reporting-serious-problems`, `fda-report-a-problem-form`,
    `fda-report-a-problem`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`,
    `ca-hc-complaints`, `au-tga-report-adverse-event`, `au-tga-report-adverse-events-consumers`, `au-tga-report-breach`
    (and `mhra-2023-fake-weight-loss-pens` in that row; it stays cited in "Why each detail matters") →
    `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `cbg-bijwerking-melden`, `igj-online-medicijnen`,
    `igj-2025-illegal-online-medicines`, `igj-landelijk-meldpunt-zorg`, `igj-lmz-informeren`, `igj-lmz-contact`,
    `cbg-fmd-vervalsing-melden`.
  - Ireland and New Zealand notes: `ie-hse-urgent-emergency-care`, `ie-npic-poisons`, `ie-npic-contact`,
    `ie-hpra-report-side-effect`, `nz-healthnz-healthline`, `nz-national-poisons-centre`, `nz-medsafe-report-a-problem`,
    `nz-otago-nzphvc-carm` → the Belgian note: `be-112-andere-noodnummers`, `be-fod-1733-dokter-van-wacht`,
    `be-antigifcentrum-over-ons`, `be-antigifcentrum-wanneer-bellen`, `fagg-melden-bijwerking-patient`.
- **Kept as evidence (marked where the country is named):** `vic-health-2026-retatrutide-liver`,
  `au-tga-2026-09-retatrutide-counterfeit`, `antonacci-2026-falsified-semaglutide-coma`,
  `buzzi-2026-retatrutide-case-report`, `stammers-2026-insulin-falsified-semaglutide` (now "Artsen in Nederland"),
  `who-2024-falsified-semaglutide`, `zinzi-2026-counterfeit-semaglutide-eudravigilance`, `fda-label-wegovy` (with
  `ema-pi-wegovy-nl` added), `fda-sharps-disposal-steps` (with `apotheek-medicijnafval` added), `nhs-*`.
- **Own anchor:** `## Hulp en melden in Nederland` → `#hulp-en-melden-in-nederland` (linked from warning-signs and
  from this page).

## safety/before-you-consider (adapted)

The reader's label on the Dutch page is the EU product information (in Dutch). The US labels stay as evidence (trial
data, warnings) and as the contrast where the US and EU differ; the Canadian and UK product information (the
English page's second frame) are replaced by the EU product information.

- **Came back:** the saved page's EU-label structure (EU label vs US label on the thyroid, "Not in the EU" for
  melanotan II, the EU pregnancy times), each fact re-read in today's Dutch EU product information (see the top).
- **Rewritten:**
  - Pregnancy: TimeStrip rows "EU-productinformatie" for Wegovy (2 months) and Mounjaro (1 month). Dropped the US
    label's "stop when pregnancy is found, if used for weight loss" and "the US label gives no time" (US framing).
    Added the EU Mounjaro line that breastfeeding "kan worden overwogen" (honest to the Dutch label; see medical
    question 4).
  - Under 18: EU Wegovy from 12 years, obesity and more than 60 kg, on prescription.
  - Cancer: unchanged science; tesamorelin's US approval as one marked world-context line with its EU/NL status
    ("in de EU en Nederland niet, gecontroleerd op 27 oktober 2026"); the FDA's 10-year study kept as evidence (marked).
  - Diabetes: EU product information for the glucose-dependent action, the hypoglycaemia warning with insulin or
    sulfonylureas, "geen vervanging voor insuline", type 1 not studied. The 40-week tirzepatide monotherapy trial stays,
    attributed to the US product information.
  - Heart: the "approved?" row now answers for the Netherlands (both no; bremelanotide approved in the US as Vyleesi,
    marked world context); "no official label" now rests on the EU and NL searches.
  - Kidney: EU 4.2/4.4/4.8/5.2 (no relevant PK change, single dose, mild to severe and dialysis; more GI side effects
    with moderate kidney disease; not recommended with severe kidney disease including end-stage). The English
    marked EMA-evidence line is now the reader's label.
  - Thyroid: Compare "EU-productinformatie (Wegovy, Ozempic)" vs "Amerikaanse productinformatie": the EU does not
    contraindicate MTC/MEN 2 and calls the human risk small but not excluded; the US forbids use. Fold adds the
    Mounjaro EU wording.
  - Pancreatitis: EU Wegovy and Mounjaro 4.4 (caution; Mounjaro not studied in that group).
  - INR: EU Wegovy 4.5.
  - Tell your doctor: Dutch secrecy (KNMG, WGBO 7:457); link to `/nl/talking-to-your-doctor/#je-rechten-geheimhouding-en-toestemming`
    (English `#your-rights-privacy-and-consent`; heading checked in the Dutch file on 27 October).
- **Dropped citations:**
  - `ca-pm-wegovy-2026-10-02` (pregnancy, teens, diabetes, kidney ×4, thyroid, pancreatitis, INR) and
    `ca-pm-mounjaro-2026-06-23` (pregnancy, pancreatitis): Canadian product monographs as the reader's label →
    `ema-pi-wegovy-nl`, `ema-pi-mounjaro-nl`, `ema-pi-ozempic-nl`.
  - `fda-label-wegovy` from the TimeStrip `source` and from the teen approval claim (US approval as the reader's frame)
    → `ema-pi-wegovy-nl`; `fda-label-wegovy` stays cited for the animal finding, the hypoglycaemia warning, type 1,
    kidney side effects, appetite, the thyroid contrast and a product that looks wrong.
  - `uk-emc-smpc-ozempic-0-25mg`, `uk-emc-smpc-wegovy-flextouch-0-25mg`, `uk-emc-smpc-mounjaro-kwikpen-2-5mg` (UK
    product information on the thyroid) → `ema-pi-wegovy-nl`, `ema-pi-ozempic-nl`, `ema-pi-mounjaro-nl`.
  - `openfda-drugsfda-search-melanotan-2026-10-26`, `mhra-2024-foi-melanotan-ii`, `ca-hc-2026-04-think-twice-peptides`,
    `au-tga-2026-08-melanotan-ii-safety-alert` (melanotan II not approved in the US, UK, Canada, Australia) →
    `cbg-gib-search-status-2026-10-27`, `ema-medicines-search`, `ema-medicines-json` (NL and EU rows, 27 October 2026).
  - `hhs-hipaa-your-rights`, `gmc-confidentiality-duties`, `gmc-confidentiality-framework`, `opc-privacy-laws-summary`,
    `oaic-health-information` (Tell your doctor) → `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`,
    `nl-wgbo-art-457-confidentiality`.
- **Added:** `ema-egrifta-withdrawal` and `cbg-gib-search-status-2026-10-27` (tesamorelin EU/NL status),
  `drugsinfo-injecteren` and `ema-pi-ozempic-nl`/`ema-pi-wegovy-nl` (never share; the leaflet sentence),
  `thuisarts-dikke-ogen-lippen` ("Stop niet zomaar met je medicijnen"; the saved page's source, next to the NHS page).
- **Kept as evidence:** every study, claim level, WADA source and US label fact of the English page.

---

## UNRESOLVED points and how the pages handle them

| Point (research) | Handling |
|---|---|
| Whether the Drugs Infolijn advises on peptides (nl-help §5.1) | index fold: "Of de Drugs Infolijn ook over peptiden adviseert, staat niet op de site." |
| Whether needle exchanges serve people who inject peptides or other performance drugs (§5.2) | index fold: "We vonden ook niet of een spuitomruil mensen helpt die peptiden … spuiten. Vraag het daar." |
| No public list of exchange locations (§5.3) | "Een openbare lijst met adressen vonden we niet." |
| Free needle containers; pharmacy take-back of needles it did not supply (§5.4) | Not stated (only "een gebruikte naald gaat in een naaldencontainer"). |
| What an insurer sees (§5.7); Lareb form fields (§5.8) | Left out. |
| 0800-0113, 116 117, regional huisartsenpost or GGD numbers, the NVIC number | Never printed. |
| InEen's finder completeness (§5.13); hospital steroid consultation (§5.14) | Not linked, left out. |
| Saved "no Dutch rule makes a doctor report a patient to the police (22 October)" (not re-checked in research/nl) | Not reused; the page says what we did not check. |
| Belgian 1733 coverage (be-notes §5) | "in de meeste regio’s"; the BE card's helpNote says the rest. |
| Whether DIMS or Jellinek would refuse a peptide vial (peptides not named; nl-help §4.8) | "Peptiden noemen ze niet. Maar een flacon met een peptide … valt volgens ons onder wat deze diensten niet testen." (our reading, labelled) |

## Open questions for the reviewers

Medical reviewer:

1. Levels faster than Thuisarts (sepsis signs, very low blood sugar with confusion, pancreatitis, severe
   breathlessness or palpitations: the site says 112, Thuisarts says bel direct de huisarts). Kept; the provenance
   section says so for sepsis (nl-help §6.1).
2. Severe allergic reaction: "Gebruik die [adrenalinepen]. Bel daarna meteen 112." Thuisarts names 112, the huisarts or
   the huisartsen-spoedpost; we chose 112 at the `emergency` level. Agree?
3. Low blood sugar: the NHS/ADA steps stay (sugar if the person can swallow; nothing by mouth if not; recovery
   position; 112). Thuisarts also describes honey or syrup inside the cheeks for helpers of people with diabetes: not
   added. Agree?
4. before-you-consider says "breastfeeding: all products". The EU Mounjaro product information says breastfeeding use
   "kan worden overwogen". The page says so in the fold and keeps the red line. Keep, or soften the red line for
   authorised medicines?
5. MTC/MEN 2: the red-line table keeps "GLP-1-achtige: should not use" although the EU product information does not
   contraindicate it (it is a US contraindication). The row and the Compare say this openly. Keep the site's
   conservative line?
6. "Calling too often is better than calling too late" left out (unsourced); "Blijf bij de persoon" kept with the
   Thuisarts 112 line. Agree (nl-help §6.6)?
7. "Rijd niet zelf naar het ziekenhuis. Laat iemand anders rijden, of bel 112" (while waiting) next to the Dutch rule
   "SEH only through the huisarts or huisartsenpost unless life is in danger": is the combination clear enough?

Legal reviewer:

8. Naming DIMS and Jellinek and saying they test no medicines or performance drugs (nl-help §6.10).
9. "Is zelf een middel gebruiken een van de uitzonderingen? Nee. De KNMG noemt het niet." Our reading of the KNMG list.
10. The pharmacist as the public's route for a suspected fake product from a pharmacy (our reading of the CBG duty,
    nl-help fact 28).
11. Printed numbers: 0900-1995 with its price (the Drugs Infolijn's own page), Belgian 1733 and 070 245 245 (the FOD
    and Antigifcentrum pages; be-notes "short lines"). The LMZ phone number is not printed (nl-help §6.8): the page
    says "Dan bel je het meldpunt" without the number.
12. The brief's publisher line is not on these pages (about pages only), so not used here.

## Style terms (STYLE-NL lacks them; the word used)

| English | Nederlands (used) |
|---|---|
| growth hormone booster(s) | middel(en) die groeihormoon verhogen (no "booster") |
| GLP-1 type product(s) (class, incl. unapproved products) | GLP-1-achtig middel, GLP-1-achtige middelen (STYLE's "GLP-1-medicijnen" kept for the authorised ones) |
| sulfonylurea tablets | sulfonylureumderivaten (tabletten zoals gliclazide) |
| clean steps (injecting) | schoon werken |
| slurred speech · very drowsy | onduidelijk praten · heel suf |
| racing heart | een jagend hart |
| chick eggs (CAM assay) | bevruchte kippeneieren |
| tanning peptides | peptiden voor een bruine huid (as `warning-signs.json`) |
| appetite-lowering products · restriction (eating disorder) · treatment team | eetlustremmers, middelen die de eetlust remmen · het beperken van eten · je behandelaars |
| unexplained lump | een bult zonder verklaring, een onverklaarde bult |
| kidney failure (end-stage) | nierfalen; "als je nieren bijna niet meer werken" |
| competitive sport | wedstrijdsport |
| doctor's right to silence | verschoningsrecht |
| triage assistant | een getrainde assistent |
| glucose tablets | druivensuiker |
| "Will the doctor report me?" | "Geeft de arts mij aan?" |
| a seller you doubt | een verkoper waar je aan twijfelt |
| performance and image enhancing drugs | middelen voor sport en uiterlijk; middelen om beter te presteren (DIMS: "prestatieverhogende middelen") |
| needle exchange count "an underestimate" | "bijna zeker te laag" |

## For the final sweep (files I do not own)

1. **Anchors into other groups' pages** (checked in the Dutch files on 27 October; re-check if those headings change):
   `/nl/safety/product-risk/#als-je-al-een-product-hebt` (index, warning-signs) and
   `/nl/talking-to-your-doctor/#je-rechten-geheimhouding-en-toestemming` (before-you-consider). Other Dutch pages that
   want the contact cards can link `/nl/safety/if-something-goes-wrong/#hulp-en-melden-in-nederland`.
2. **Source registry notes** (not mine; nl-help §7.3): `thuisarts-verlamming` (remove "also if the symptoms have gone");
   `thuisarts-pijn-op-borst` (last changed 27 October 2026); `mainline-steroids-safe-injecting` (Mainline stopped by
   14 May 2026; not cited on my pages); `accessed` 2026-10-27 for `rijksoverheid-urgent-medical-help`,
   `rijksoverheid-huisartsenpost-seh`, `lareb-bijwerkingen-melden`, `knmg-beroepsgeheim`, `thuisarts-wondroos`,
   `thuisarts-sepsis`, `thuisarts-dikke-ogen-lippen`, `thuisarts-hiv-pep`, `rivm-hygiene-piercing`, `nvic-umcutrecht`,
   `lareb-2021-illegal-medicines`, `igj-online-medicijnen`, `igj-2025-illegal-online-medicines`,
   `knmg-beroepsgeheim-doorbreken`, `thuisarts-naar-de-huisarts` (all re-read by the nl-help research that day).
3. **`src/data/product-check.yaml`**: `local_sources.NL` for `stop` (`thuisarts-wondroos`, `thuisarts-sepsis`,
   `thuisarts-dikke-ogen-lippen`) as nl-help §7.4 proposes (the Dutch `<ProductCheck />` on before-you-consider
   numbers its sources with the page's).
4. **Glossary:** my file adds `trimbos-instituut` and `jellinek`. `verschoningsrecht` was dropped from my file because
   `nl-guides.json` added the same id the same day; `dims`, `antigifcentrum` and `dokter-van-wacht` are in
   `nl-about.json` and `nl-legal-core.json`. No Dutch entry exists for "steenpuist" (boil); the word is everyday Dutch
   and appears only in the provenance table.
5. **STYLE-NL:** merge the style terms above (one row each in §2).
6. **Residue check:** `scripts/check-locale-residue.ts` reported 0 hits in 0 files, with and without `--only`. I
   checked that it does scan `src/content/pages/nl/` (`scanLocaleSources`) and that the scanner catches planted terms,
   so 0 means clean. No action needed.
7. **Hero captions** (`src/i18n/nl/media.json`): `ambulance-den-haag` and `huisartsenpost-oss` already say "Bel dan
   direct 112" and the huisartsenpost hours: no change needed.

## Check (independent, 27 October 2026)

Independent fact-check and edit of the four pages, the glossary file and these notes. Read first: the brief (with
"Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §1b, §4.1, §9–§13, research/nl/nl-help.md, nl-care.md,
eu-status.md, be-notes.md (each with its fact-check section), research/nl-notes/merge.md, the safety-en-a manifest
and the 23 October snapshots of the four pages, and the current English pages.

**How:** every `<Cite>`, `<Claim>`, number, study and figure of the English page was listed and matched (a script diff
of cite ids per page; claim levels: before-you-consider 2 × animal and 1 × hypothesis on both sides; the other pages
have none). Every id that is only on English is US/UK/CA/AU/IE/NZ help, reporting, privacy-law or label framing and is
in the writer's "Dropped citations" lists above. Fetched today (curl, page text read): the Dutch EU product
information of Wegovy, Ozempic and Mounjaro (EMA PDFs, pdftotext: 4.1, 4.2, 4.4, 4.5, 4.6, 4.8, 5.2, 5.3, 6.6 and the
pen leaflets), thuisarts.nl/spoed-wie-bel-je, thuisarts.nl/dutch-healthcare/in-case-of-emergency, the Rijksoverheid
Q&A "huisartsenpost of spoedeisende hulp", jellinek.nl drugstestservice, drugs-test.nl/welke-drugs, wetten.overheid.nl
BW Book 7 (version 8 October 2026: art. 7:456 and 7:457), trimbos.nl/over-trimbos (glossary only). Registry entries
read against the research: `nl-zvw-art-19-eigen-risico-2027`, `stammers-2026-insulin-falsified-semaglutide`,
`knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`, `thuisarts-naar-de-huisarts`, `zin-huisarts-zvw`,
`cbg-gib-search-status-2026-10-27`, `ema-egrifta-withdrawal`, `ema-medicines-json`, `ema-prac-2025-06-naion`,
`jebeile-2025-glp1-eating-behaviour`, `igj-2026-10-stolen-medicines`, the five Belgian ids, and the EU/NL rows of
`pt-141`, `melanotan-ii` and `tesamorelin` (data files, as_of 2026-10-27). Anchors checked in the Dutch target files:
`/nl/safety/product-risk/#als-je-al-een-product-hebt` and `#wat-een-labrapport-wel-en-niet-zegt` (headings on lines
253 and 132), `/nl/talking-to-your-doctor/#je-rechten-geheimhouding-en-toestemming` (line 143),
`#hulp-en-melden-in-nederland` (own heading). No Dutch page links into this group's headings, so the one heading
change below breaks nothing (grep of `src/content/**/nl` and `src/i18n/nl`). No new source and no new allowlist host
were needed (`src/data/sources/nl-safety-a.yaml` does not exist; every id is reused).

Confirmed as written (no change): every EU product-information statement on before-you-consider (pregnancy: 2 months
Wegovy, 1 month Mounjaro, Mounjaro breastfeeding "kan worden overwogen"; teens from 12 years and > 60 kg; "niet
onderzocht ... met diabetes type 1 ... Gebruik bij deze patiënten wordt niet aanbevolen"; "geen vervanger voor
insuline"; not recommended with severe renal impairment including end-stage; single 0,5 mg dose, mild to severe and
dialysis; more GI side effects with moderate renal impairment; pancreatitis caution, Mounjaro not studied; INR with
acenocoumarol; C-cell tumours, "relevantie voor de mens wordt klein geacht" / Mounjaro "niet bekend"; Ozempic 4.3
hypersensitivity only; "Deel nooit uw pen of uw naalden met andere mensen"); the NL and EU status of bremelanotide,
melanotan II and tesamorelin; the help levels, the NVIC (professionals only), Lareb, the LMZ, the CBG falsification
duty, spuitomruil (29 locations, 19 cities, undercount), the Drugs Infolijn (0900-1995, € 0,10/min, weekdays 9–17,
chat and mail free), DIMS and Jellinek exclusions (Jellinek also "anoniem", four cities: glossary entry correct), the
eigen risico (€ 385 in 2026, € 400 from 1 January 2027), WGBO 7:457 and the KNMG grounds (five), the Belgian facts.

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| index | Caption "Een slecht product maakt het niet beter." | "Een slecht product wordt er niet beter van." | Wrong meaning (it said a bad product does not make clean work better) | EN caption |
| index | Drug checking: `<Cite id="dims-welke-drugs,dims-voorwaarden" />` | `dims-welke-drugs` only | `dims-voorwaarden` is about own-use and Dutch-only conditions, not about what DIMS does not test | nl-help fact 40 |
| index | "bij het DIMS"; "de testservice van Jellinek" | "bij het DIMS (Drugs Informatie en Monitoring Systeem)"; "Jellinek, een instelling voor verslavingszorg" | B1 rule 7: explain on first use | nl-about glossary `dims`; jellinek.nl (read today) |
| index | Lead "Lees daarna eerst wie …" | "Lees daarna, voor al het andere, wie …" | "daarna eerst" contradicts itself; EN "before anything else" | EN Lead |
| warning-signs | TL;DR "plotselinge verlamming" | "plotselinge verlamming aan één kant" | EN "sudden weakness on one side" (the stroke sign) | EN TL;DR; `thuisarts-verlamming` |
| warning-signs | TL;DR q "Jeuk, uitslag of een veranderende moedervlek?"; q "Roodheid die groeit, rode strepen of pus?" | "Jeukende uitslag of veranderende moedervlek?"; "Groeiende roodheid, rode strepen, pus?" | The stop sign is an itchy rash, not itch alone (`hives-swelling`); word limit | EN TL;DR; nl `warning-signs.json` |
| warning-signs | TL;DR a "… Die zeggen je wat je moet doen." | "… Vertrouw je gevoel als er iets ernstig mis lijkt." | The second half of the EN answer ("trust that feeling") was missing; the page body already says it | EN TL;DR; `nhs-sepsis` (page close) |
| warning-signs | TL;DR answers 5 and 6 | shortened, same meaning | The TL;DR was 127 words after the restorations (limit 120) | validator |
| warning-signs | "Ga niet zelf naar de spoedeisende hulp" | "Ga niet op eigen houtje naar de spoedeisende hulp" | "zelf" reads as "do not go in person" | `rijksoverheid-huisartsenpost-seh` |
| warning-signs | Fold: "Voor spoed heeft de praktijk meestal een apart nummer. Dat staat op de website …" | "De praktijk heeft een apart nummer voor spoed. Dat staat meestal op de website …" | "meestal" was on the wrong fact | Thuisarts: "Je huisarts heeft een telefoonnummer voor spoed. Dit telefoonnummer staat meestal op de website" |
| warning-signs | Fold: "Bel altijd eerst, voordat je erheen gaat." | "Ga er niet zomaar heen: neem eerst contact op. De huisartsenpost zegt of je moet langskomen." | Not on the cited Thuisarts page; contact can also be by mail or chat | Rijksoverheid: "De huisartsenpost geeft aan of u moet langskomen"; Thuisarts |
| warning-signs | Fold: "Een getrainde assistent … beslist samen met de arts" | "Je spreekt eerst een assistent. Op de huisartsenpost is die extra opgeleid voor spoed. De assistent stelt vragen en bespreekt met je wat er nodig is." | Thuisarts says the post's triagist and you discuss what is needed; "decides with the doctor" is not on the page | `thuisarts-spoed-wie-bellen` (read today) |
| warning-signs, if-something-goes-wrong | Eigen risico: GP and huisartsenpost care outside it, SEH inside | + "Bloedonderzoek dat de huisarts buiten de praktijk laat doen, valt er ook onder." | Without it "GP care is free" overstates; lab tests count | nl-help fact 49, nl-care fact 54; `zin-huisarts-zvw` |
| warning-signs | Infection step 2: "Soms ontstaat er een holte met pus. Dat is een bult met pus (abces)." | "Soms ontstaat er een bult met pus (abces)." | Said the same thing twice | EN step 2 |
| warning-signs | — | + "Op 20 oktober 2026 waarschuwde de Inspectie Gezondheidszorg en Jeugd (IGJ) voor gestolen insulinepennen … ook als middel tegen obesitas. Gebruik kan levensgevaarlijk zijn, schrijft de IGJ." | The research marks it for warning-signs; it is the Dutch case of the "pen with insulin" sign. Neutral IGJ item, no seller named | nl-help fact 28a; `igj-2026-10-stolen-medicines` (= nl-help's `igj-2026-10-gestolen-medicijnen`, merge.md) |
| warning-signs | "Rijd niet zelf naar het ziekenhuis. Laat iemand anders rijden, of bel 112 voor een ambulance." | "… Bel 112 voor een ambulance. Stuurt je huisarts of de huisartsenpost je naar het ziekenhuis? Laat dan iemand anders rijden." | Reconciles the line with the Dutch rule (no SEH without the huisarts or huisartsenpost unless 112); writer's medical question 7 | `nhs-sepsis`, `thuisarts-spoed-wie-bellen`, `rijksoverheid-huisartsenpost-seh` |
| warning-signs | "Die moet geheimhouden wat die … Bijvoorbeeld als iemand anders door je zwijgen ernstige schade kan krijgen." | "De arts moet zwijgen over wat die tijdens het werk over jou te weten komt. … Een arts mag bijvoorbeeld praten als dat de enige manier is om ernstige schade bij iemand anders te voorkomen." | The exception is the doctor's conflict of duties, not the patient's silence | KNMG (`knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`) |
| warning-signs | Lareb row: "Ook mensen die illegale medicijnen gebruikten, kunnen …" | "Volgens Lareb kunnen ook mensen die illegale geneesmiddelen gebruiken, er een bijwerking melden." | Attribute Lareb's own category; STYLE §5.6 ("medicijn" for an unapproved product) | `lareb-2021-illegal-medicines` |
| warning-signs | "hoge koorts"; "fasciitis necroticans" | "heel hoge koorts"; "necrotiserende fasciitis" | EN "very high temperature"; one term with `src/i18n/nl/warning-signs.json` | EN; nl UI strings |
| warning-signs, if-something-goes-wrong | Link text "de noten over België" | "de korte notities over België" | "noten" does not mean notes here; the target page is titled "korte notities" | `/nl/legal/be/` frontmatter |
| warning-signs, if-something-goes-wrong, before-you-consider | ‘afslankpennen’, ‘niet zou moeten’, ‘lifecoach’, ‘ander’, ‘Geen gegevens’/‘veilig’, ‘herstel’ | double quotes “…” | STYLE-NL §4.1 (double quotes for quoted words and claims; EN uses double quotes) | STYLE-NL §4.1 |
| if-something-goes-wrong | TL;DR "verlamming" | "verlamming aan één kant" | EN "sudden weakness on one side" (the word limit kept the shorter form here) | EN TL;DR |
| if-something-goes-wrong | TL;DR "Jeuk, uitslag, moedervlek die verandert?" / "Stop dan en maak …" | "Jeukende uitslag of veranderende moedervlek?" / "Stop dan met het product en ga binnen enkele dagen naar je huisarts." | As above; "stop" needs its object | EN TL;DR |
| if-something-goes-wrong | TL;DR "Ja: een bijwerking bij Lareb, een product dat nep lijkt bij je apotheek of de IGJ." | "Ja, als het kan: bijwerkingen bij Lareb, mogelijke nepproducten bij apotheker of IGJ." | EN "Yes, if you can" (reporting is voluntary); the page names the apotheker, not the apotheek; the old line read as "a product that seems fake at your pharmacy" | EN; nl-help facts 19, 28 |
| if-something-goes-wrong | TL;DR "De arts wil je behandelen, niet beoordelen." | "De arts behandelt je en oordeelt niet." | Word limit (122 → 120) | validator |
| if-something-goes-wrong | Help table: "Kies voor spoed"; "Bel eerst, voordat je erheen gaat" | "Bel het spoednummer van de praktijk"; "Neem eerst contact op: die zegt of je moet langskomen" | B1 (the menu choice made no sense alone); sourced wording | Thuisarts; Rijksoverheid (read today) |
| if-something-goes-wrong | "Dan stelt een getrainde assistent je vragen. Die beslist samen met de arts …: een advies, een afspraak op de post …" | "Dan spreek je eerst een assistent die extra is opgeleid voor spoed. Die stelt je vragen. Daarna bespreken jullie wat er nodig is: een advies, een huisarts die je terugbelt, …" | As on warning-signs | `thuisarts-spoed-wie-bellen`, `thuisarts-in-case-of-emergency` |
| if-something-goes-wrong | "Artsen krijgen de vraag om deze details op te schrijven." | "Soms vraagt de overheid artsen om deze details op te schrijven." | Calque of "Doctors are asked" | EN |
| if-something-goes-wrong | "GLP-1-achtige middelen kunnen samen met insuline …" | "Bijvoorbeeld: GLP-1-achtige middelen …" | EN "For example" (one case, not the only one) | EN |
| if-something-goes-wrong | `## Waarom je open kunt zijn` | `## Waarom je open kunt zijn tegen een arts` | The chapter name lacked its object (EN "with a doctor"); no inbound links | EN heading |
| if-something-goes-wrong | Row "Is zelf een middel gebruiken een van de uitzonderingen? Nee. De artsenfederatie KNMG noemt het niet." | "Is het een uitzondering als je zelf een middel gebruikt? Nee, niet volgens de lijst van de artsenfederatie KNMG. Een arts mag het geheim alleen doorbreken in de situaties die daar staan, …" | Word order; makes the basis of the "Nee" explicit (our reading of the KNMG list, legal question 9) | `knmg-beroepsgeheim-doorbreken` |
| if-something-goes-wrong | Row "Kan een arts iets doen als je iemand anders in gevaar brengt? Ja. Bijvoorbeeld als …" | "Mag een arts het geheim doorbreken als je iemand anders in gevaar brengt? Soms, onder strenge voorwaarden. Een voorbeeld: …" | "Ja" overstated the KNMG's conflict-of-duties ground, which has strict conditions | `knmg-beroepsgeheim-doorbreken` |
| if-something-goes-wrong | Dossier: "Je mag het inzien en een kopie krijgen." | + "Alleen wat de privacy van iemand anders raakt, mag de arts weglaten." | EN "with a few exceptions" was dropped; WGBO 7:456: "De verstrekking blijft achterwege voor zover dit noodzakelijk is in het belang van de bescherming van de persoonlijke levenssfeer van een ander" | wetten.overheid.nl BWBR0005290, version 8 October 2026 (read today); `nl-wgbo-art-454-456-records` |
| if-something-goes-wrong | BE: "in de meeste regio’s 1733" | "in een groot deel van België 1733" | The FOD's own words; "most regions" is not stated | be-notes fact 26 |
| before-you-consider | Red-line table "sulfonylureumderivaten (tabletten)" | "sulfonylureumderivaten (diabetestabletten zoals gliclazide)" | B1 rule 7: explain on first use (the explanation was only in a fold) | `sola-2015-sulfonylureas`; snapshot |
| before-you-consider | "een voor een"; "In de EU Wegovy vanaf 12 jaar" | "één voor één"; "In de EU: Wegovy vanaf 12 jaar" | STYLE §3 (één); grammar | STYLE-NL |
| before-you-consider | "niets om op te bouwen" (×3, incl. the Compare title) | "niets om op af te gaan"; Compare title "Voor niet-goedgekeurde peptiden zijn er geen gegevens." | Calque of "nothing to go on"; the title was 19 words | EN; validator |
| before-you-consider | "In de tienerjaren bouw je het grootste deel van sterke botten op." | "De tienerjaren zijn de belangrijkste tijd om sterke botten op te bouwen." | Ungrammatical, and "grootste deel" is in neither the English nor the source ("key time") | EN; `haider-2026-glp1-adolescents` |
| before-you-consider | Wegovy teens: "goedgekeurd vanaf 12 jaar, voor tieners met obesitas … die meer dan 60 kg wegen, op recept" | + "naast minder calorieën eten en meer bewegen" | Advertising test: an authorised medicine's indication in the SmPC's wording ("als aanvulling op een caloriearm dieet en meer lichaamsbeweging") | `ema-pi-wegovy-nl` 4.1 (read today) |
| before-you-consider | "De productinformatie (van tesamorelin) verbiedt het gebruik bij actieve kanker" (×2) | "De Amerikaanse productinformatie …" | Only a US label exists; a Dutch reader would take "de productinformatie" as an EU text | `dailymed-egrifta-sv-label`; tesamorelin EU row |
| before-you-consider | "In de VS is het goedgekeurd als medicijn, in de EU en Nederland niet" | + "In de EU trok het bedrijf zijn aanvraag in 2012 in" | STYLE §2.4: say whether the application or the authorisation was withdrawn (EU row `withdrawn`, since 2012-06-21) | `ema-egrifta-withdrawal`; `src/data/compounds/tesamorelin.yaml` |
| glossary `trimbos-instituut` | "Een Nederlands instituut dat onderzoek doet naar drugsgebruik en de hulp daarbij." | "Een Nederlands kennisinstituut voor mentale gezondheid en voor het gebruik van alcohol, tabak en drugs. Het doet onderzoek, …" | Too narrow; the institute's own description | trimbos.nl/over-trimbos (read today) |

Validator (`--only pages/nl/safety/` and `--only nl-safety-a`): 0 errors, 0 warnings. Residue
(`check-locale-residue.ts --only safety/ --details`): 0 error, 0 frame, 0 warn. Because the script prints "0 file(s)",
I also ran the scanner's own `scanMdx` with the `nl` config on the four pages as they are (0 hits each) and with every
marker stripped (warn hits only: NHS as a cited source, "In het VK" for the MHRA fake-pen alert, "In Australië" for the
Victorian alert and the TGA test, "In de VS"/FDA for the tesamorelin and bremelanotide world-context lines and the FDA
safety study). Every marked line is evidence or world context as the brief allows.

### Remaining concerns for the reviewers

1. **Breastfeeding red line** ("Alle" products) against the EU Mounjaro SmPC: "Over het algemeen kan het gebruik van
   tirzepatide tijdens het geven van borstvoeding worden overwogen" (read today). The page says so in the fold; the
   red-line table stays stricter than the label of an authorised medicine (advertising test item 1 wants SmPC
   consistency). Medical reviewer (writer's question 4).
2. **MTC/MEN 2 red line** ("GLP-1-achtige: niet gebruiken") although the EU SmPC has no contraindication; the row and
   the Compare say so openly. Medical reviewer (writer's question 5).
3. **Faster levels than Thuisarts** (sepsis signs, very low blood sugar with confusion, pancreatitis, severe
   breathlessness or palpitations at `emergency`; pus lump at `urgent`): kept, as nl-help §4.1 resolves; the
   provenance section names sepsis only. Medical reviewer (nl-help §6.1).
4. **"Calling too often is better than calling too late"** (English warning-signs and if-something-goes-wrong) is left
   out of both Dutch pages: no Dutch source (nl-help §2.15, §6.6). The English sentence has no source either.
5. **Belgian note on if-something-goes-wrong** is four sentences and prints 1733 and 070 245 245 (the FOD's and the
   Antigifcentrum's own numbers, be-notes "short lines"). It sits where English has its Ireland/New Zealand notes, with
   `<JurisdictionCards which="notes" />`. The brief allows Belgium "as short notes only": the owner may prefer one line
   plus the link.
6. **"Nee, niet volgens de lijst van de KNMG"** (own use is no ground to break secrecy) is our reading of the KNMG's
   list; the page also says what we did not check (police rules). Legal reviewer (writer's question 9).
7. **`thuisarts-dikke-ogen-lippen` for "Stop nooit zelf met een voorgeschreven medicijn"**: the Thuisarts sentence
   ("Stop niet zomaar met je medicijnen") stands in the context of a medicine that may cause an allergic reaction. It
   supports the rule, but a general source would be cleaner (the NHS page is cited beside it).
8. **Allergic reaction "Bel daarna meteen 112"** where Thuisarts names "112, je huisarts of de huisartsen-spoedpost"
   (writer's question 2); and the NHS/ADA low-sugar first aid without Thuisarts's honey-in-the-cheek step (question 3).
9. **`mhra-2026-02-semaglutide-naion` replaced** by the EMA's PRAC conclusion (`ema-prac-2025-06-naion`) in the
   provenance table: both are regulator evidence; the PRAC is the reader's regulator and the source the MHRA itself
   refers to (safety-en-a manifest). If the reviewer wants strict parity, the MHRA id can be added back as evidence
   with a marker.
10. In the TL;DR of if-something-goes-wrong, "Lareb" and "IGJ" appear before their full names in the body (word
    limit); the glossary tooltips explain them.

### Style terms (add to the writer's list)

| English | Nederlands (used) |
|---|---|
| (go to the SEH) on your own | op eigen houtje |
| nothing to go on | niets om op af te gaan / er zijn geen gegevens |
| necrotising fasciitis (page text) | necrotiserende fasciitis (as `src/i18n/nl/warning-signs.json`) |
| link text to `/nl/legal/be/` | de korte notities over België |
