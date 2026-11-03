# Notes: group "about" (Dutch site, 27 October 2026)

Pages written:

| Dutch file | From | Method |
|---|---|---|
| `src/content/pages/nl/about/editorial-policy.mdx` | `src/content/pages/en/about/editorial-policy.mdx` (current) | `adapted` (publisher line and legal fold rewritten for Dutch law; review register = BIG-register) |
| `src/content/pages/nl/about/funding.mdx` | `src/content/pages/en/about/funding.mdx` (current) | `translated` (as assigned; the commerce sentence and the status paragraph were adapted, see below) |
| `src/content/pages/nl/the-case-for-reform.mdx` | `src/content/pages/en/the-case-for-reform.mdx` (current) + Dutch proposals of `research/for-nl-site/snapshot-2026-10-23/content/pages-en/the-case-for-reform.mdx` | `adapted` (owner's signed opinion; every difference listed under "For the owner") |
| `src/i18n/nl/glossary/nl-about.json` | new | 3 entries: `eudravigilance`, `basispakket`, `dims` |

No new sources: every id used already exists (`src/data/sources/*.yaml`, including the merged `nl-research-*.yaml`), so
`src/data/sources/nl-about.yaml` was not created. `config/link-allowlist.json` was not changed (every host used is already
allowed). No English file was touched. No build, commit or push.

Validation (27 October 2026): `npx tsx scripts/validate-content.ts --only <each file>` → 0 errors, 0 warnings for all four
files. `npx tsx scripts/check-locale-residue.ts --only <each page> --details` → 0 error, 0 frame, 0 warn hits. Every FDA,
MHRA, TGA, "in de VS", "in het VK", "503A" and "$" line on the reform page carries `{/* residue-ok: … */}` (history,
evidence, PCAC framing or world context); the scanner was tested by removing the PCAC markers once (10 warn hits
appeared; markers restored).

`last_reviewed` is 2026-10-27 on all three pages (English about pages: 2026-10-24) because the Dutch publisher line, the
2026 case law and the Dutch facts were checked on 27 October; `reviewed_by` as on English (`editorial-board` on the
about pages, `pending-medical-review` on the reform page). Change it back if the sweep wants the English dates.

Facts checked by me today (beyond the research files): Telecommunicatiewet art. 11.7a (wetten.overheid.nl BWBR0009950,
"Geldend van 15-08-2026 t/m heden", lid 1 and 3 as cited); Directive 2001/83 art. 10(1) (CELLAR, 2025-01-01
consolidation: 8 years before a generic may rely on the data, 10 years before marketing, at most 11); the EMA
conditional-marketing-authorisation page ("valid for one year and can be renewed annually", specific obligations); the
EMA 2021 repurposing pilot news ("could be a wasted opportunity for public health"; only authorised medicines); the
European Commission's 50-years timeline (1965 Directive 65/65 after thalidomide; 2008 thalidomide authorised for
multiple myeloma) and the EMA EPAR page of Thalidomide BMS ("marketing authorisation valid throughout the EU on
16 April 2008"). All HTTP 200 on 27 October 2026.

---

## 1. about/editorial-policy (adapted)

**Base:** the current English page, same structure: intro, six `##` sections, the same seven figures (`claim-levels-explained`,
`source-order`, `Compare`, `review-status`, `translation-model`, `correction-steps`, `facts-and-opinion`) and the same seven
folds, same `related` keys.

**Came back from the saved material (snapshot of 23 October, re-checked):** the BIG-register as the register of the medical
reviewer (now with `bigregister-over-het-register`, nl-care fact 5); the Dutch law as the site's law without the
readers'-countries paragraph.

**Rewritten for the Netherlands:**

- **Publisher line (owner decision, brief "Added after step 1", item 1).** The fold "Waarom de grens hier ligt" opens with the
  brief's draft word for word ("We maken deze site in Nederland. … met wat niemand weet."), cited to
  `nl-gnw-art-84-85-advertising` and `nl-rvs-2026-1072-publieksreclame-website`. It replaces the English "A link to a shop, a
  price or a tip about where to get a product would give our information that purpose. Without them, our information
  stays information." (the content guide's "the absence of commerce is what makes the content legal"). Added after it:
  the statutory definition (art. 1, quoted), the IGJ's reading ("iedereen kan reclame maken"; information must not praise;
  `igj-geneesmiddelenreclame-wat-is`), Damgaard (kept), the Raad van State ruling of 25 February 2026 and the Rechtbank
  Amsterdam ruling of 10 April 2026 (nl-law fact 17a), and a five-point list of what that means for our pages (the brief's
  advertising test: effect only with evidence level, uncertainty and risks; no success stories; SmPC indication, side
  effects and contraindications for authorised medicines; off-label named as off-label, never a benefit; nothing beyond the
  evidence for a compound without a handelsvergunning). It ends: "Dit is onze lezing … Een onafhankelijke jurist heeft die
  nog niet gecontroleerd."
- Compare row "Namen van verkopers …": "That could count as advertising. The law forbids that … in the Netherlands, where we
  publish, and in the UK, Canada and Australia" → "Dat kan reclame zijn, ook als we zelf niets verkopen. De Nederlandse wet
  verbiedt reclame voor geneesmiddelen zonder handelsvergunning." Row label without "links to shops" (commerce word in a
  table head): "Namen van verkopers, links naar verkopers of tips om er een te kiezen?"
- "Who checks our work": "a named doctor on a public medical register" → "een arts met naam, die in het BIG-register staat";
  the fold's list of US/UK/CA/AU registers → the BIG-register (wettelijk, openbaar; only registered people may use the
  protected title; anyone can look it up). Diagram date "24 October 2026" → "27 oktober 2026" (status unchanged: nothing
  reviewed yet).
- "Translations" table: the "Laws, approvals and help services" row now names both sites (Dutch: NL and the EU, notes on
  Belgium; English: US, UK, Canada, Australia, notes on Ireland and New Zealand); "Emergency advice": "De Nederlandse
  pagina’s noemen 112. De Engelse pagina’s noemen geen nummer, omdat ze in meer landen worden gelezen." The last paragraph
  keeps "the English page is the reference for the science" and adds that law, rules and help are the Dutch page's own
  (STYLE-NL §5.2 note).
- "Words we avoid": "words that make a compound sound like a cure" → "woorden die een stof aanprijzen of laten klinken als
  een middel dat geneest"; the last bullet adds "met de belangrijkste bijwerkingen".
- Diagram `source-order` item 4 "anyone with something to sell" → "iemand die er geld aan verdient".

**Citations dropped** (all US/UK/CA/AU framing of the readers' countries' advertising rules):

| Cite id | Where | Why | Replaced by |
|---|---|---|---|
| `uk-hmr-2012-reg-279` | Compare row 2; fold "Why the line is where it is" | UK advertising rule | `igj-geneesmiddelenreclame-wat-is` (row); the Dutch case law (fold) |
| `ca-food-and-drug-regulations` | same | Canadian rule | same |
| `au-tg-act-advertising` | same | Australian rule | same |
| `au-tg-regs-reg-7-advertising-prescribed-goods` | fold | Australian rule | `nl-rvs-2026-1072-publieksreclame-website`, `nl-rbams-2026-5160-publieksreclame-journalistiek` |
| `ca-hc-advertising-distinction-2023` | fold (Health Canada's guidance paragraph) | Canadian guidance; the Dutch equivalent is the 2026 case law | as above |

Added: `nl-rvs-2026-1072-publieksreclame-website`, `nl-rbams-2026-5160-publieksreclame-journalistiek`,
`igj-geneesmiddelenreclame-wat-is`, `bigregister-over-het-register`.

## 2. about/funding (translated, with two adaptations)

**Base:** the current English page, same four sections, same five figures and two folds, same `related` keys.

**Came back from the saved material:** the EU/NL status of BPC-157 in the "Why it has to be this way" paragraph (the
snapshot cited `ema-medicines-search`; now `ema-medicines-json`, `ema-medicines-search`, `cbg-gib-search-status-2026-10-27`,
the NL and EU row sources of `src/data/compounds/bpc-157.yaml`, as_of 2026-10-27).

**Adapted (list for the owner):**

- Diagram `why-no-commerce`, item 3: adds "In 2026 vonden Nederlandse rechters boetes terecht voor een informatiewebsite en
  voor journalistieke artikelen die medicijnen op recept aanprezen. Dat ze zelf niets verkochten, maakte niet uit." Item 4:
  "So we earn nothing from any product. Without money from sales, our information stays information." → "Daarom verdienen
  we niets aan een product, en schrijven we niets wat een middel aanprijst. We beschrijven het bewijs, met de risico’s en
  met wat niemand weet." (The English sentence contradicts the 2026 case law; brief item 1.) Caption "How a paid link could
  turn facts into an advert" → "Hoe geld of aanprijzen van feiten reclame kan maken."
- The status paragraph: "not approved medicines in the US, the UK, Canada or Australia" → "in Nederland en de EU geen
  goedgekeurd medicijn"; "The UK, Canada and Australia have similar rules" dropped; added "Maar ook zonder geld kan een
  tekst reclame zijn, als die een middel aanprijst" (`igj-geneesmiddelenreclame-wat-is`, `nl-rvs-2026-1072-…`); link "the law
  in your country" → "de Nederlandse wet" (`/nl/legal/nl/`).
- Lead "Why so strict?": "We publish from the Netherlands, whose law bans ads for unlicensed medicines" → "De Nederlandse
  wet verbiedt reclame voor middelen zonder handelsvergunning" (18-word limit; "we maken deze site in Nederland" is in the
  paragraph below).
- Compare title and row labels rephrased without commerce words (STYLE-NL §7): "no income from anyone who sells …" →
  "geen geld van wie verdient aan medicijnen, peptiden of behandelingen"; "Sells anything …?" → "Vraagt deze site ergens geld
  voor …?"; "Tells you where to get a product?" → "Helpt deze site je een verkoper te vinden?"; "codes that give money off"
  → "codes waarmee je minder betaalt"; "affiliate schemes" (an English commerce token) → "betaalde doorverwijzingen".
- Second-reason fold: "a source that earns money when you buy" → "wie geld verdient als jij iets koopt" (STYLE-NL §5.6:
  never "bron" for a seller); "We want to be one source with no such reason" → "Wij willen informatie geven zonder zo’n
  reden".
- Privacy: the cookie-settings, "Toestaan" and "Niet toestaan" labels are quoted as the Dutch UI strings give them
  (`src/i18n/nl/common.json`). Telecommunicatiewet art. 11.7a re-checked today (unchanged).

**Citations dropped:**

| Cite id | Why | Replaced by |
|---|---|---|
| `fda-pcac-2026-bpc157-briefing` | cited for the US status of BPC-157 | `ema-medicines-json`, `ema-medicines-search`, `cbg-gib-search-status-2026-10-27` |
| `uk-mhra-substance-index-status-c-2026-10-23` | UK status | same |
| `ca-dpd-search-status-c-2026-10-23` | Canadian status | same |
| `au-artg-search-status-c-2026-10-23` | Australian status | same |
| `uk-hmr-2012-reg-279`, `ca-food-and-drug-regulations`, `au-tg-act-advertising` | "similar rules" in the readers' countries | `igj-geneesmiddelenreclame-wat-is`, `nl-rvs-2026-1072-publieksreclame-website`, `nl-rbams-2026-5160-publieksreclame-journalistiek` |

## 3. the-case-for-reform (adapted; the owner's signed opinion)

**Base:** the current English page: same frontmatter fields (TL;DR of six pairs), same seven `##` sections, same figures
(`reform-position-in-brief`, Photo `kelsey-kennedy-1962`, KeyNumbers Wong, MHRA, Zinzi, Wouters, `hidden-use-chain`,
`six-proposals`, `what-we-do-not-argue`, `what-would-change-our-mind`), same 15 folds, same `related` keys. Every study,
`<Claim level>`, number and caveat of the English page is kept (Wong, Begley, Gyawali, Davis, Kim, Kelsey, McBride, Webb,
MHRA seizures, Zinzi, Coutinho, Weber, Ashraf, Piatkowski, TGA tests, Janvier, Pope 2004, Hazell, FDA under-reporting,
Wouters, the BPC-157 briefing, TRIUMPH-1, RECOVERY x2, Maghsoudi, Endocrine Society 2014, the full PCAC framing).
Where the English made proposals or comparisons for the US, the UK, Canada or Australia, the Dutch proposals of the
23 October version came back, every fact re-checked against `research/nl/` (sources: nl-care §L, nl-law §1.2–1.5,
nl-help D, I, N; eu-status A, E).

### For the owner: every difference from the English page

1. **Intro.** "Our proposals are principles, not one country's law: the problems look much the same in the United States,
   the United Kingdom, Canada and Australia, and for each proposal we name something like it that already exists in one of
   them." → "Onze voorstellen zijn principes, niet de wet van één land. Bij elk voorstel noemen we iets wat er in Nederland
   of de EU al op lijkt."
2. **TL;DR.** Translated. Answer 2 shortened ("Geheim gebruik betekent volgens ons onbekende producten en ongemelde schade").
   Question 5 "Do you call these products harmless?" → "Zeggen jullie dat deze producten geen kwaad kunnen?" (STYLE-NL §5.6
   bans "onschadelijk"); the same question heads "What we do not argue".
3. **Position diagram.** Row 1 also cites the IGJ/CBG warning of September 2025 (`igj-2025-illegal-online-medicines`). Row 4
   "Products labelled 'for research purposes' are sold for use in people, with dosing instructions" → "Producten met
   'alleen voor onderzoek' op het etiket zijn toch bedoeld voor mensen: ze komen met instructies voor de dosis" (no
   commerce verb in a table row label). The paragraph under it: "the ban on selling and advertising unapproved medicines"
   → "geneesmiddelen zonder handelsvergunning".
4. **The case for caution.** Main text unchanged (Kelsey, Kefauver-Harris). Fold "Why evidence before marketing matters"
   adds two sentences from the 23 October version, re-checked: the first European medicines directive (65/65/EEG, 1965;
   `ec-pharma-legislation-timeline`, `eu-directive-65-65`) and the Dutch rule since 1963 (no first marketing without
   registration, i.e. a handelsvergunning; CBG set up in 1963; `nl-mvt-2003-geneesmiddelenwet`, nl-care fact 76). "53
   'landmark' cancer studies" → "53 kankerstudies die als mijlpaal golden" (avoids the banned hype word "baanbrekend").
5. **Thalidomide's second lesson** adds "In 2008 werd het in de EU goedgekeurd voor myeloom" (23 October version; EMA EPAR
   of Thalidomide BMS checked today: EU authorisation 16 April 2008; cited to `ec-pharma-legislation-timeline`).
6. **People are already using these products.** After the Coutinho sentence: "Ook voor Nederland vonden we geen goede
   telling", with the minister of VWS's answer of 5 October 2026 (no good estimate of use outside regular care;
   `tk-2026-ah-249-antwoord-afslankmedicatie`). Then the Dutch signs: IGJ and CBG, September 2025 (illegal online offers of
   medicines rising, especially for obesity and type 2 diabetes) and the Douane, August 2026 (besides slimming products,
   other peptides are popular: experimental compounds recommended on social media). The Canadian, Australian and UK 2026
   examples stay as one world-context paragraph after them (same cites).
7. **Hidden from doctors.** "In the US, the UK, Canada and Australia, doctors must keep what you tell them confidential,
   apart from a few exceptions set by law" → "In Nederland moeten artsen geheimhouden wat je hun vertelt (het
   beroepsgeheim), op een paar uitzonderingen na die de wet en de beroepsregels noemen" (KNMG, WGBO art. 7:457). Pope
   2004: "their dealers" → "de mensen die hun de steroïden verkochten" (STYLE-NL: no "dealer"; no "betrouwbaar").
8. **The cost of waiting.** Section title → "Wachten heeft gevolgen", Lead question "Is traag toezicht zonder gevolgen?",
   fold "Costs for people now" → "Gevolgen voor mensen nu", KeyNumber title without "kost" (STYLE-NL §7 keeps kosten, kost
   and prijs out of headings, questions, fold and figure titles). Content of the main text unchanged.
9. **Fold "Why some compounds may never get a sponsor".** US data protection (5 years, 4 with a patent challenge) and
   Canada (8 years) → the EU rule: a copy relying on the original's data may be filed after 8 years and marketed after 10
   (at most 11) (`eu-directive-2001-83` art. 10, checked today); plus the pending EU reform: political agreement in December
   2025, not law on 27 October 2026 (awaiting Parliament's second reading), Council text 8 years of data protection plus 1
   year of market protection (`ema-pharma-reform-page`, `council-st-7106-2026-rev2`, `ep-oeil-2023-0132-cod`; eu-status
   facts 28–31). The 23 October text said "the new rules expected to apply from 2028"; that date is not used (eu-status
   conflict 1: the application date depends on publication).
10. **Fold "Costs for people now".** NICE/NHS (tirzepatide, up to 12 years) and the UK seizure sentence → the Dutch gap
    (23 October version, re-checked): Wegovy authorised in the EU since 2022 with its SmPC indication in B1 (weight
    management with a reduced-calorie diet and more activity, among others adults with obesity, or overweight with a
    weight-related condition; `ema-epar-wegovy`, `ema-pi-wegovy-nl`); the Zorginstituut's July 2024 advice not to reimburse
    it (unclear health gain, long-term effect and stopping; up to €1,3 billion a year); the reassessment (first WAR
    discussion 5 October 2026; date of the advice not known); new: liraglutide can be reimbursed for obesity under strict
    conditions (`nl-regeling-zorgverzekering-bijlage-2-glp1`; nl-care §2 item 10, so readers are not told no obesity
    medicine is ever reimbursed); the CBG on GLP-1 medicines used for slimming without a prescription. "Whether the two are
    linked has not been measured" kept.
11. **Retatrutide (same fold).** The TRIUMPH-1 result is unchanged. **Added** (advertising test, brief item 1: an effect is
    never named without its risks): TRIUMPH-2 side effects (diarrhoea 27–34 vs 13 in 100, nausea 14–28 vs 8, stopping for
    side effects or death 4–12 vs 5; `bellido-2026-triumph-2`, the same numbers as the English retatrutide page) and "Wat
    gebruik na 80 weken doet, weet niemand." "In September 2026 Australia's regulator said it had not been approved by the
    TGA or by any comparable regulator" → "In Nederland en de EU is retatrutide geen goedgekeurd medicijn: het wordt alleen
    in klinisch onderzoek gebruikt, en op de lijst van het EMA van 5 oktober 2026 stond geen aanvraag" (data rows EU and NL
    `investigational`, as_of 2026-10-27).
12. **Diagram `six-proposals`.** Caption "Something like each one already exists in the US, the UK, Canada or Australia"
    → "… in Nederland of de EU". The right-hand column is the 23 October version's, re-checked: (1) the EMA's 2021
    repurposing pilot, (2) the Dutch DIMS, possible since the 1990s, (3) Lareb takes reports about products from the
    internet, (4) Dutch medicines law is written around trade and advertising, (5) the first Dutch "anabolenpoli" (2010),
    (6) the EU conditional marketing authorisation. (English: RECOVERY, Canberra and WEDINOS, the TGA, FDA/MHRA/Health
    Canada/TGA enforcement, Alberta's CPSA, the four countries' conditional routes.)
13. **Fold 1 (public trials).** Adds the EMA 2021 pilot paragraph (23 October version; only authorised medicines). RECOVERY
    stays as evidence of what a public trial can do (results, Claim levels and numbers unchanged). The proposal sentence is
    the current English one.
14. **Fold 2 (testing services).** Canberra (ACT) and WEDINOS → DIMS: since the 1990s (Brunt 2011, more than 100.000
    samples by 2011) and today (12 participants, 34 test locations, ruim 17.500 samples in 2025; `trimbos-dims-monitoring`).
    **Added:** DIMS and Jellinek do not test medicines, steroids or anabolics (`dims-welke-drugs`,
    `jellinek-drugstestservice`), and "We vonden geen openbare dienst in Nederland die een flacon met een peptide test"
    (nl-help fact 41; the research notes this strengthens the proposal). The ACT's line "drug checking does not make drugs
    safe" → the page's own sentence "Testen maakt een product niet veilig." Maghsoudi, Janvier, Weber and the proposal are
    unchanged.
15. **Fold 3 (side-effect reporting).** The four national schemes, the FDA's "these or any medications", the TGA's page and
    its retatrutide test → Lareb (anyone may report, also products from the internet; Lareb does not share the report with
    your doctor or pharmacist; users of illegal medicines may report) and the CBG (reports can lead to a changed leaflet, a
    warning or withdrawal). The proposal is the current English one ("welcome; explain what happens to the reporter's
    details; publish what the reports show").
16. **Fold 4 (enforcement).** The four countries' sale bans and their law pages → the Geneesmiddelenwet (art. 40(2): stock,
    offer, sell, supply, import; art. 84 advertising; fines up to €1,1 miljoen; using is not named as an offence, importing
    is, with no own-use exception; link `/nl/legal/nl/`). "What we support is longer, healthier human lives" kept.
    Examples: MHRA (1,500 websites), Health Canada (border) and the TGA (Federal Court) → the minister's answer of 5 October
    2026 (the IGJ takes websites down and fines where possible; a joint approach with the OM, police and NVWA) and Europol's
    SHIELD VI (April–November 2025, the Netherlands took part; 66 websites in total). The FDA warning stays (evidence).
17. **Fold 5 (guidance for doctors).** GMC (UK), CPSA (Alberta), Ahpra (Australia) → the first Dutch anabolenpoli (2010),
    the NHG's guidance for GPs on weight-loss medicines obtained elsewhere (authorised medicines, not peptides), and "We
    vonden geen richtlijn van het NHG of de KNMG speciaal voor patiënten die niet-goedgekeurde peptiden gebruiken" (nl-care
    §5 item 9). The Endocrine Society and the proposal are unchanged.
18. **Fold 6 (conditional routes).** The FDA, MHRA, Health Canada and TGA routes, US expanded access and Australia's SAS →
    the EU conditional marketing authorisation (1 year, renewable; specific obligations), Dutch compassionate-use
    programmes only by a manufacturer (CBG), and the artsenverklaring, applied for by a Dutch manufacturer, wholesaler or
    pharmacist, never the patient (IGJ). The proposal and the cancer-approval sentence are unchanged.
19. **"What we do not argue".** Table row 1 "That the rules for selling medicines should be loosened" → "Dat de regels voor
    het op de markt brengen van medicijnen soepeler moeten" (no commerce word in a row label); "Licensing protects …" → "De
    handelsvergunning beschermt …". Row 6 (US compounding) unchanged.
20. **PCAC fold.** The canonical framing in full (STYLE-NL §5.4). Point 5: "None of these peptides is an approved medicine
    in the US, the UK, Canada or Australia … it changes nothing in the UK, Canada or Australia" → "Geen van deze peptiden is
    een goedgekeurd medicijn in Nederland of de EU. … Een Amerikaanse lijst verandert niets buiten de VS. … In Nederland en
    de EU blijven de Geneesmiddelenwet en de Europese wet gelden."
21. **"What would change our mind".** Row 2 "Testing services are used mainly to market products" → "Testdiensten vooral
    worden gebruikt als reclame voor producten" (no "aanprijzen/prijzen" in a row label).
22. **Links** go to the Dutch routes (`/nl/safety/product-risk/`, `/nl/talking-to-your-doctor/`,
    `/nl/safety/if-something-goes-wrong/`, `/nl/legal/nl/`, `/nl/safety/monitoring/`, `/nl/legal-routes/`,
    `/nl/about/corrections/`, `/nl/about/editorial-policy/`). The page hero on Dutch is the Tweede Kamer photo
    (`src/data/heroes.yaml`, not changed by me).

**No position changed.** All six proposals, the "we do not argue" list, the four "would change our mind" rows, the
enforcement line ("aimed at sellers and false claims, not at users") and "longer, healthier human lives" are the English
page's.

### Citations dropped from the reform page (34; all US/UK/CA/AU framing)

| Cite id | Where in English | Why | Replaced by |
|---|---|---|---|
| `hhs-hipaa-your-rights`, `gmc-confidentiality-duties`, `cpsa-cma-code-of-ethics`, `mba-good-medical-practice-2020` | fold "Hidden from doctors" | the four countries' confidentiality rules | `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`, `nl-wgbo-art-457-confidentiality` |
| `ecfr-21-314-108`, `ca-fdr-c08-004-1-data-protection` | fold "sponsor" | US and Canadian data protection | `eu-directive-2001-83`, `ema-pharma-reform-page`, `council-st-7106-2026-rev2`, `ep-oeil-2023-0132-cod` |
| `nice-ta1026-tirzepatide` | fold "Costs for people now" | UK funding | `ema-epar-wegovy`, `ema-pi-wegovy-nl`, `zin-2024-wegovy-not-reimbursed`, `zin-wegovy-reassessment`, `nl-regeling-zorgverzekering-bijlage-2-glp1`, `cbg-glp1-position` |
| `au-act-drug-checking`, `uk-wales-wedinos-about` | diagram row 2, fold 2 | Australian and Welsh precedents | `brunt-2011-dims`, `trimbos-dims-monitoring`, `dims-welke-drugs`, `jellinek-drugstestservice` |
| `au-tga-report-adverse-events-consumers`, `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting` | diagram row 3, fold 3 | the four countries' reporting routes | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `cbg-bijwerking-melden` |
| `au-tga-media-releases-peptide-log-2026-10-24` | diagram row 4, fold 4 | Australian enforcement precedent | `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-84-85-advertising`, `tk-2026-ah-249-antwoord-afslankmedicatie`, `europol-2026-02-shield-vi` |
| `usc-21-355`, `uk-hmr-2012-reg-46`, `ca-food-and-drug-regulations`, `au-tg-act-s19b-19d-offences` | fold 4; PCAC fold | the four countries' sale bans | `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-84-85-advertising`, `nl-gnw-art-101-fines`, `rijksoverheid-fine-categories-2026`, `eu-directive-2001-83` |
| `ca-cpsa-2026-04-injectable-peptides`, `gmc-2021-deciding-safe-to-prescribe`, `au-ahpra-prescribing-unapproved-guidance`, `au-ahpra-2026-09-peptide-prescribing` | diagram row 5, fold 5 | the countries' guidance for doctors | `dopingautoriteit-2025-harm-reduction-chair`, `nhg-2025-gewichtsreducerende-medicatie` |
| `fda-accelerated-approval-program`, `mhra-conditional-marketing-authorisation`, `ca-hc-noc-c-fact-sheet`, `au-tga-provisional-registration` | diagram row 6, fold 6 | the four countries' conditional routes | `ema-conditional-marketing-authorisation` |
| `fda-expanded-access-patients`, `au-tga-sas-individual-patients` | fold 6 | US and Australian single-patient access | `cbg-compassionate-use-criteria`, `cbg-cup-vragen-en-antwoorden`, `igj-qa-zonder-handelsvergunning` |
| `uk-mhra-substance-index-status-c-2026-10-23`, `mhra-products-search-status-d-2026-10-23`, `ca-dpd-search-status-c-2026-10-23`, `ca-dpd-search-canada-legal-2026-10-23`, `au-artg-search-status-c-2026-10-23`, `au-artg-search-status-d-2026-10-23` | PCAC fold | UK/CA/AU status searches | `ema-medicines-json`, `ema-medicines-search`, `cbg-gib-search-status-2026-10-27` |

Kept on the page but no longer used for one English sentence: `au-tga-2026-09-retatrutide-counterfeit` (no longer for
"not approved by the TGA" or as the fold-3 example; still for the product test), `mhra-2026-01-seizures-2025` (no longer
in folds 4 and "Costs"; still the KeyNumber and the seizure fold), `ca-hc-2026-04-think-twice-peptides` (no longer in
fold 4; still evidence of use), `fda-unapproved-glp1-concerns` (no longer in fold 3), `recovery-*` (no longer as a
precedent in the diagram; still the fold-1 evidence).

Added (43): `bellido-2026-triumph-2`, `brunt-2011-dims`, `cbg-bijwerking-melden`, `cbg-compassionate-use-criteria`,
`cbg-cup-vragen-en-antwoorden`, `cbg-gib-search-status-2026-10-27`, `cbg-glp1-position`, `council-st-7106-2026-rev2`,
`ctis-2025-522674-36-00`, `dims-welke-drugs`, `dopingautoriteit-2025-harm-reduction-chair`,
`douane-2026-08-illegale-online-handel-medicijnen`, `ec-pharma-legislation-timeline`, `ema-2026-10-under-evaluation`,
`ema-conditional-marketing-authorisation`, `ema-epar-wegovy`, `ema-medicines-json`, `ema-medicines-search`,
`ema-pharma-reform-page`, `ema-pi-wegovy-nl`, `ep-oeil-2023-0132-cod`, `eu-directive-2001-83`, `eu-directive-65-65`,
`europol-2026-02-shield-vi`, `igj-2025-illegal-online-medicines`, `igj-qa-zonder-handelsvergunning`,
`jellinek-drugstestservice`, `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`, `lareb-2021-illegal-medicines`,
`lareb-bijwerkingen-melden`, `nhg-2025-gewichtsreducerende-medicatie`, `nl-gmw-art-40-handelsvergunning`,
`nl-gnw-art-101-fines`, `nl-gnw-art-84-85-advertising`, `nl-mvt-2003-geneesmiddelenwet`,
`nl-regeling-zorgverzekering-bijlage-2-glp1`, `nl-wgbo-art-457-confidentiality`, `rijksoverheid-fine-categories-2026`,
`tk-2026-ah-249-antwoord-afslankmedicatie`, `trimbos-dims-monitoring`, `zin-2024-wegovy-not-reimbursed`,
`zin-wegovy-reassessment`.

Saved (23 October) items **not** brought back: `bfarm-ozempic-falsification` (German regulator; the English TGA test is
kept), the snapshot's "the new rules expected to apply from 2028" for the EU reform (see item 9), and the snapshot's
"Using a product is not itself named as an offence" without the fines amount (now with the 2026 maximum, nl-law fact 22).
Everything else of the 23 October Dutch text came back, re-checked.

---

## 4. UNRESOLVED points and how the pages handle them

| Point (research file) | Handling |
|---|---|
| Number of Dutch users of peptides (nl-law 5.14; minister's answer 4 and 6) | "Ook voor Nederland vonden we geen goede telling", with the minister's statement; no figure |
| IGJ action against a peptide webshop, August 2026; IGJ peptide warning of February 2026 (nl-law 5.6, brief item 5) | Not mentioned. Enforcement in general terms only (minister's answer, Europol) |
| Possession for own use / "in voorraad hebben" (nl-law 5.1) | Left out; fold 4 says only that using is not named as an offence and importing is |
| Whether the Rb Amsterdam judgment of 10 April 2026 is under appeal (nl-law 5.15) | The pages say what the court decided, not that it is final; the Raad van State ruling (final) leads |
| Date and content of the Zorginstituut advice on Wegovy (nl-care 5.3) | "wanneer het advies komt, is nog niet bekend" |
| 2027 reimbursement of obesity medicines (nl-care 5.2) | Nothing said about 2027 |
| SYNERGY-Outcomes recruitment in the Netherlands (nl-care, eu-status) | Not claimed; `ctis-2025-522674-36-00` is cited only for "only in clinical research" |
| Application date of the EU pharmaceutical reform (eu-status conflict 1, 5) | No date: "nog geen wet; het Parlement moet nog stemmen in de tweede lezing" |
| NHG/KNMG guidance on unlicensed peptides (nl-care 5.9) | "We vonden geen richtlijn … (gezocht op 27 oktober 2026)" |
| A Dutch public service that tests a peptide vial (nl-help 41) | "We vonden geen openbare dienst in Nederland die een flacon met een peptide test (gecontroleerd op 27 oktober 2026)" |

## 5. Open questions for the legal and medical reviewer

1. **Publisher line and the advertising list (editorial-policy, funding).** Is the five-point list in "Waarom de grens hier
   ligt" a fair reading of Gnw art. 84–85, the IGJ page and the 2026 rulings? Is it right to name the Raad van State and
   the Rechtbank Amsterdam rulings on an about page (no party is named; the Amsterdam text names the publisher and brands,
   nl-law 6.12)?
2. **"De beweerde goede kanten … in wervende woorden"** as a B1 rendering of "in wervende bewoordingen benadrukken van
   gestelde positieve eigenschappen" (RvS para. 6.3).
3. **Reform, fold 4:** "Gebruiken staat niet als overtreding in de wet. Invoeren wel, en voor eigen gebruik geldt geen
   uitzondering" (art. 40(2); the traveller exemption of art. 18(6)(a) lifts only the art. 18 licence). Fair at B2?
4. **Reform, `douane-2026-08-illegale-online-handel-medicijnen`** is cited for "other peptides are popular"; its body names
   a webshop in a criminal case (nl-law 6.12). The name is never quoted. Acceptable?
5. **Reform, Wegovy line:** the SmPC indication is given (B1, "onder meer"), no effect is named. Does the advertising test
   (brief item 1) also require the main side effects here, or is the link to the semaglutide page enough?
6. **Reform, retatrutide:** an investigational medicine (art. 84(1): no advertising at all). The weight figure is kept with
   its Claim level, and side effects, stopping and the 80-week limit were added. Medical reviewer: the TRIUMPH-2 numbers
   are from the abstract (as on the English retatrutide page).
7. **Reform, fold 6:** is it fair to present the artsenverklaring as "access outside a study does not lie with the patient"
   (the IGJ: only a Dutch manufacturer, wholesaler, (hospital) pharmacist or dispensing GP may apply)?
8. **Editorial policy:** "Alleen wie daarin staat, mag een beschermde titel als arts voeren" (BIG-register page). Correct?
9. **Medical reviewer:** RECOVERY dexamethasone wording ("een ontstekingsremmer (corticosteroïd)") and the hydroxychloroquine
   sentence order (the Claim now gives the result first, then why it had been proposed).

## 6. Style terms (STYLE-NL lacks these; the word used)

| English | Dutch used | Note |
|---|---|---|
| reference pages · opinion page · fact pages | naslagpagina’s · opiniepagina · feitenpagina’s | "Opinie" as in §2.1 |
| the editor · editorial board | de redacteur · de redactie | |
| reviewer (who signs off) | controleur | "Gecontroleerd door" for the line |
| drug-checking service (proposal) | testdienst (testdiensten voor peptiden) | glossary `drug-checking` is "drugs testen"; "drugstestservice" is Jellinek's own word |
| affiliate schemes | betaalde doorverwijzingen | "affiliate" is an English commerce token |
| data protection (regulatory) · market protection | bescherming van de onderzoeksgegevens · marktbescherming | not "gegevensbescherming" (that is privacy, AVG) |
| platform trial | platformonderzoek (één onderzoek dat meerdere middelen naast elkaar test) | |
| cross-sectional study | dwarsdoorsnedeonderzoek (keek naar één moment) | |
| landmark study | studie die als mijlpaal gold | "baanbrekend" is banned (§5.6) |
| weight-loss pens · fake weight-loss jabs | afslankpennen · nep-afslankprikken | §2.4 has "nep-pen", "namaakpen" |
| accelerated approval (FDA) | versnelde goedkeuring | glossary alias of `accelerated-approval` |
| Cochrane review | Cochrane-review (een systematische review van het internationale netwerk Cochrane) | |
| promotional wording (court) | wervende woorden | from "wervende bewoordingen" (RvS) |
| host (website) · statistics cookie | webhost · statistiekcookie | as `common.json` "webhost" |
| hype words | hypewoorden | |

## 7. For the final sweep (files I do not own)

1. **`docs/STYLE-NL.md` §5.2** still has the older publisher line ("… Die wet verbiedt reclame voor een medicijn zonder
   handelsvergunning. Daarom verkopen we niets …"). The about pages use the brief's newer draft (item 1 of "Added after step
   1"). Update §5.2 to the brief's text so other writers (about/index) use the same words.
2. **`docs/CONTENT-GUIDE.md` §1** ("The absence of commerce is what makes the content legal") is contradicted by the 2026
   case law (nl-law §4 conflict 1, 6.2). Owner decision; not edited here.
3. **`src/i18n/nl/glossary/nl-about.json`**: three new entries (`eudravigilance`, `basispakket`, `dims`); check for
   collisions when merging (none on 27 October; `public-advertising` and `raad-van-state` were added by the
   legal/sport/changing group, so not duplicated here).
4. **Source registry (owners of those files):** `eu-directive-2001-83` (shared.yaml) still points to the 2022-01-01
   consolidation (eu-status "For the merge"); art. 10 cited here was read in the 2025-01-01 consolidation (same text).
   `ema-under-evaluation-2026-10` (pt-141.yaml) and `ema-2026-10-under-evaluation` (retatrutide.yaml) are the same
   document (eu-status); the reform page uses the latter, whose note names retatrutide. `ema-medicines-json` (bpc-157.yaml),
   `lareb-bijwerkingen-melden` (safety-a.yaml), `knmg-beroepsgeheim` (safety-a.yaml) and `igj-2025-illegal-online-medicines`
   (safety-b.yaml) have `accessed` dates of 20–22 October, although the research re-read them on 27 October: update
   `accessed` if wanted.
5. **No change needed** to `config/link-allowlist.json`, `src/data/heroes.yaml` (the about heroes and the Tweede Kamer hero
   already have Dutch captions in `src/i18n/nl/media.json`), `src/i18n/nl/media.json` (`kelsey-kennedy-1962` caption
   exists) or `config/locale-residue.json`.

---

## Check (independent, 27 October 2026)

Independent fact-check and edit of the three pages and the glossary file, against the current English pages, the brief
(including "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §9, §11–13, the research of 27 October 2026
(fact-check sections first) and the snapshot of 23 October. No English file, shared data file, STYLE-NL, CONTENT-GUIDE,
brief or research file was edited; `config/link-allowlist.json` was not changed (every host cited is already allowed); no
build, commit or push.

**What I checked.** (1) Science parity: every `<Cite>`, `<Claim>`, study, number, caveat and figure of the three English
pages, one by one. All evidence cites are on the Dutch pages (reform: every evidence id of the English page, incl. Wong,
Begley, Gyawali, Davis, Kim, Kelsey, McBride, McEwen, Webb, MHRA ×2, Zinzi, Coutinho, Weber, Ashraf, Piatkowski, TGA ×3,
Janvier, Pope 2004 and 2014, Hazell, FDA GLP-1, Wouters, the BPC-157 briefing, TRIUMPH-1, RECOVERY ×2, Maghsoudi, the full
PCAC set); every number matches (13,8%, 41.040, 53/6, 93/19, 68/24/33, 115, 5.680, 20 miljoen, 234, 89 op de 100,
1.190/146, 80/43/56%, 37/12/94%, 8–14%/99%/29–39%, 51/165/190%, 985 miljoen dollar, 63/355, 2.339, 17,6–25,0 vs 3,9%,
6.425, 22,9 vs 25,7%, 4.716, 27,0 vs 25,0%, 90 studies); the `<Claim>` levels of RECOVERY, TRIUMPH-1 and Maghsoudi are
unchanged (`human-controlled`, `human-limited`). The dropped cites in the writer's tables are all US/UK/CA/AU framing
(confirmed one by one). (2) Every Dutch, EU and Belgian fact against nl-law (facts 11–17a, 22, 29–30, 36–38, §4 conflict
1, §5), nl-care (facts 36, 38, 57–61, 68–76, §5), nl-help (facts 19–24, 40–41, 54), eu-status (facts 2, 5, 12–13, 25,
28–32) and the status files (semaglutide: the Dutch SmPC wording for Wegovy; retatrutide: EU and NL `investigational`,
as_of 2026-10-27); every cited id exists, and every source entry used for a Dutch or EU fact was read for what it is cited
for. No new source entries (`src/data/sources/nl-about.yaml` not created; confirmed). (3) The brief's rules, the
advertising test, the legal line, commerce words, links (every `/nl/` target file opened; no `/en/`, no
legal/us/uk/ca/au/ireland link; no cross-page anchor used). (4) Language: "je" only (no "u"), B1 on the about pages and in
every TL;DR, Lead and caption, STYLE-NL terms, number and date format.

**Fetched today to confirm facts not fully in the research:** Zorginstituut news of 16 July 2024
(`zin-2024-wegovy-not-reimbursed`, HTTP 200): "bewezen effectief" for weight, but which patients gain most is unclear,
"geen studies naar het verantwoord afbouwen", "niet bekend of langdurig gebruik blijvend effectief is", costs "kunnen
oplopen tot 1,3 miljard euro per jaar" (supports the page's sentence). CBG standpunt (`cbg-glp1-position`, 200): "Ook
worden deze medicijnen steeds vaker gebruikt als afslankmiddel, zonder recept en buiten de geregistreerde indicatie"
(supports the page). BIG-register "Over het BIG-register" (200): "Alleen wie in het BIG-register staat, mag een
beschermde beroepstitel voeren"; arts is one of the titles; "Iedereen kan het register raadplegen" (wording corrected,
below). EMA conditional marketing authorisation (200): "where the benefit of immediate availability of the medicine
outweighs the risk inherent in the fact that additional data are still required"; "valid for one year and can be renewed
annually" (wording corrected, below). EC 50-years timeline, Dopingautoriteit news of 4 July 2025, Lareb's reporting page
and the Trimbos DIMS page: HTTP 200.

### Changes made

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| editorial-policy, fold "Hoe we een bron controleren" | "Elke andere link wordt geblokkeerd als de site wordt gebouwd." | "Bij het bouwen van de site blokkeert een controle elke andere link." | STYLE-NL §1.3: at most one passive verb a sentence; say who does it | — |
| editorial-policy, fold "Wie het onderzoek betaalde" | link text "belangenverstrengeling" | "belangenconflicten" | the Dutch target page's own name (`/nl/evidence/conflicts-of-interest/`: "Belangenconflicten") | — |
| editorial-policy, after the Compare | "en we geven geen preek" | "en we preken niet" | idiom | — |
| editorial-policy, fold "Waarom de grens hier ligt", the 2026 rulings | "De Raad van State oordeelde in februari 2026 …"; "Doorslaggevend was dat de teksten in wervende woorden de beweerde goede kanten … benadrukten"; "De rechtbank Amsterdam oordeelde in april 2026 dat boetes voor artikelen in een tijdschrift en een krant …"; "gebruikt buiten de indicatie waarvoor het is goedgekeurd"; "uit de officiële productinformatie (de SmPC)" | the Raad van State explained in B1 ("de hoogste rechter in veel zaken tegen de overheid, zoals een boete van een minister", as the glossary entry `raad-van-state`); full dates 25 februari and 10 april 2026; "vooral … benadrukten, in wervende woorden: woorden die mensen willen overhalen"; "een artikel in een tijdschrift en een artikel in een krant"; "voor iets anders dan waarvoor het is goedgekeurd (off-label)"; contra-indicaties explained at first use; "samenvatting van de productkenmerken (SmPC). Dat is de officiële informatie over een medicijn voor artsen." | B1 (every term explained at first use, STYLE-NL §1.7); STYLE-NL §2.4 term for SmPC; precision (two articles; the ruling dates the brief gives); a B1 gloss of "wervende bewoordingen" | nl-law fact 17a; `nl-rvs-2026-1072-publieksreclame-website`, `nl-rbams-2026-5160-publieksreclame-journalistiek` (notes: a magazine article and a regional newspaper article; para. 6.3, 7.7, 10.1) |
| editorial-policy, five-point list | bullet 3 explained contra-indicaties | explanation moved to first use (paragraph above) | one explanation, at first use | — |
| editorial-policy, "Wie ons werk controleert" and the AI fold | "We laten geen pagina zien als gecontroleerd voordat …" (twice) | "We noemen een pagina pas gecontroleerd als …" | calque of "present as reviewed" | — |
| editorial-policy, fold "Wat de controleregel op elke pagina betekent" | "Alleen wie daarin staat, mag een beschermde titel als arts voeren, en iedereen kan het register bekijken." | "Alleen wie daarin staat, mag een beschermde beroepstitel voeren, zoals arts. Iedereen kan het register bekijken." | the source's own words ("beschermde beroepstitel"; arts is one of them); answers the writer's question 8 | `bigregister-over-het-register` (fetched today) |
| editorial-policy, last paragraph | "Die pagina staat aangegeven als opinie." | "Die pagina is gemarkeerd als opinie." | unidiomatic | — |
| funding, diagram `why-no-commerce`, caption | "Hoe geld of aanprijzen van feiten reclame kan maken." | "Hoe geld of wervende woorden van feiten reclame kunnen maken." | grammar (a noun and a verb-noun joined); keeps "-prijzen" (nl token "prijzen", STYLE-NL §7) out of a caption | — |
| funding, diagram item 1 | "De wet die voor ons geldt, telt elke poging om mensen een medicijn te laten voorschrijven, meegeven of gebruiken." | "Volgens de wet die voor ons geldt, is elke poging … reclame." | "telt" lacked "als reclame": the sentence did not say what the law counts | `nl-gnw-art-1-reclame` |
| funding, diagram item 3 | "… voor een informatiewebsite en voor journalistieke artikelen die medicijnen op recept aanprezen. Dat ze zelf niets verkochten, maakte niet uit." | "… voor een informatiewebsite en voor artikelen in een tijdschrift en een krant. Die prezen medicijnen op recept aan. Dat de makers die middelen zelf niet verkochten, maakte niet uit." | a newspaper publisher does sell something (newspapers); the courts found that they did not sell the medicines and had no commercial aim in them; B1 split | nl-law fact 17a; the same two rulings |
| funding, fold "De tweede reden" | "die de gewone kwaliteitscontroles niet verklaren" | "… niet kunnen verklaren" | the English "cannot explain" | `lundh-2017-industry-sponsorship` |
| funding, same fold | "betaalde promotors" | "mensen die betaald worden om ze aan te prijzen" | Dutch "promotor" reads as a PhD supervisor | — |
| funding, diagram `funding-sources` | "De gever en het bedrag" | "De geldgever en het bedrag" | the English "funder"; "geldgever" as in the paragraph below | — |
| funding, diagram `what-happens-when-you-read` | "Twee kortlevende technische cookies" | "Twee technische cookies van onze webhost die snel verlopen" | calque | — |
| funding, fold "De details" | "… heeft de server die je een pagina stuurt het internetadres … nodig om de pagina naar je toe te sturen" | "… heeft de server het internetadres van je apparaat nodig om je een pagina te kunnen sturen" | repetition (stuurt … sturen) | — |
| reform, description | "waarom verbieden zonder informatie mensen slechter achterlaat" | "waarom mensen met een verbod zonder informatie slechter af zijn" | calque of "leave people worse off"; ≤ 170 characters | — |
| reform, TL;DR answer 4 and the paragraph under the position diagram | "Elk voorstel houdt het verbod op …" | "Het verbod op … blijft bij elk voorstel." / "Bij elk voorstel blijft het verbod … gelden." | "houdt het verbod" is a calque of "keeps the ban"; the TL;DR stays at 120 words | — |
| reform, intro | "dat sommige regels van nu werken tegen de mensen die ze moeten beschermen" | "dat sommige regels van nu de mensen tegenwerken die ze moeten beschermen" | word order | — |
| reform, diagram `reform-position-in-brief`, rows 3 and 5 (right column) | "Bijwerkingen melden voor elk product, en die meldingen ook echt welkom heten"; "Richtlijnen die artsen helpen deze patiënten te controleren" | "Een meldsysteem voor bijwerkingen waar meldingen over elk product welkom zijn"; "Richtlijnen die artsen helpen bij de controles van deze patiënten" | the English proposals ("reporting that welcomes reports about any product"; "check on": "controleren" can also read as "police") | — |
| reform, "Voorzichtigheid, serieus genomen" | "een beoordelaar van de FDA, Frances Kelsey"; "de Kefauver-Harris Amendments aan te nemen:" | "Frances Kelsey, beoordelaar bij de Amerikaanse medicijnautoriteit FDA"; "… aan te nemen, een wijziging van de Amerikaanse wet:" | STYLE-NL §2.7 first mention of the FDA; the English name explained | — |
| reform, fold "Waarom bewijs vóór de markt telt" | "In Canada telde een rapport uit 1963 115 kinderen"; "In Europa volgde in 1965 de eerste Europese medicijnrichtlijn"; "Vroege resultaten en zelfverzekerde experts zijn slechte gidsen."; "53 kankerstudies die als mijlpaal golden probeerden te herhalen"; "Na een mediaan van meer dan vijf jaar" | "… uit 1963 in totaal 115 kinderen"; "In 1965 volgde de eerste Europese richtlijn voor medicijnen"; "Op vroege resultaten en zelfverzekerde experts kun je slecht afgaan."; "probeerden 53 kankerstudies te herhalen die als mijlpaal golden"; "Na een opvolging van meer dan vijf jaar (mediaan)" | two numbers side by side; repetition; calque; word order (tangconstructie, STYLE-NL §1.2); calque | — |
| reform, KeyNumber Wong | title "De meeste medicijnplannen die bij mensen getest worden, eindigen nooit in een goedkeuring"; label and counted "medicijnplannen", "medicijnprogramma’s" | title "De meeste plannen voor een medicijn die bij mensen worden getest, eindigen zonder goedkeuring"; "ontwikkelprogramma’s" in label and counted | "medicijnplan" is not a Dutch word; one term for the counted unit | `wong-2019-clinical-trial-success` |
| reform, fold "De serieuze argumenten tegen ons standpunt" | "Hulp kan nieuwe gebruikers trekken. … kunnen anderen aantrekken." | "Hulp kan nieuwe gebruikers aantrekken. … kunnen ook anderen over de streep trekken." | "gebruikers trekken" is not idiomatic | — |
| reform, fold "De tweede les van thalidomide" | "in arme gebieden zonder goed medisch toezicht krijgen kinderen van zwangere vrouwen met lepra die het middel gebruiken nog steeds aangeboren afwijkingen" | "op het platteland zonder goed medisch toezicht veroorzaakt het nog steeds aangeboren afwijkingen, als zwangere vrouwen met lepra het gebruiken" | science parity: the English and the source say "rural areas", not "poor areas"; long relative clause | `kim-2011-thalidomide-review` |
| reform, KeyNumber Zinzi | "komen mogelijk terug in" | "duiken mogelijk op in" | "terugkomen" reads as "return" | — |
| reform, world-context paragraph | "noemde de Canadese medicijnautoriteit peptiden die ze in beslag had genomen, en kreeg de Australische meldingen … na niet-goedgekeurde peptideproducten" | "maakte de Canadese medicijnautoriteit bekend welke injecteerbare peptiden ze in beslag had genomen. De Australische kreeg meldingen … na het gebruik van niet-goedgekeurde peptideproducten." | the English "listed injectable peptides it had seized" ("injectable" was lost); "na … producten" lacked a verb | `ca-hc-2026-04-think-twice-peptides`, `au-tga-2026-04-peptide-responsibilities` |
| reform, diagram `hidden-use-chain`; fold "Gevolgen voor mensen nu" (TRIUMPH-2) | "20 van de 100", "56 van de 100", "94 van de 100", "27 tot 34 van de 100", "14 tot 28 van de 100", "4 tot 12 van de 100" | "… op de 100" throughout | STYLE-NL §3, natural frequencies ("44 op de 100 mensen") | the same sources |
| reform, fold "Onbekende producten" | link text "risico’s van het product" | "productrisico" | the Dutch target page's own name | — |
| reform, fold "Waarom ongemelde schade onzichtbaar blijft" | "De Amerikaanse medicijnautoriteit FDA zegt zelf dat bijwerkingen van GLP-1-medicijnen die apotheken zelf maken …" | "De FDA zegt zelf dat bijwerkingen van GLP-1-medicijnen die Amerikaanse apotheken zelf maken …" | the full name is now at first mention; a Dutch reader must not read this as Dutch pharmacies | `fda-unapproved-glp1-concerns` |
| reform, KeyNumber Wouters | value "$985 miljoen"; label "het geld voor één nieuw medicijn"; counted "gegevens over het geld" | value "985 miljoen dollar" (as on `/nl/history/how-we-got-here/`); label "wat het maken van één nieuw medicijn vraagt, met mislukte pogingen meegeteld" (16 words; no "kost" in a label, STYLE-NL §7); counted "gegevens over de uitgaven" | consistency across the Dutch site; precision; label limit | `wouters-2020-rd-investment` |
| reform, "Wachten heeft gevolgen" | "dat bedrijven soms geen reden hebben om nieuw gebruik … te onderzoeken als die niet meer door een octrooi of door de bescherming van hun onderzoeksgegevens worden beschermd" | "dat bedrijven soms de prikkel missen om nieuw gebruik te onderzoeken van oude medicijnen die geen octrooi en geen bescherming van hun onderzoeksgegevens meer hebben" | the EMA's "lack the incentives"; "beschermd … bescherming" | `ema-2021-repurposing-pilot` |
| reform, fold title | "Waarom sommige stoffen nooit een sponsor krijgen, …" | "Waarom sommige stoffen misschien nooit een sponsor krijgen, …" | the English "may never": the title had become a certainty | — |
| reform, same fold, the EU reform | "Over nieuwe Europese geneesmiddelenwetgeving bereikten het Europees Parlement en de lidstaten … Op 27 oktober 2026 is die nog geen wet: het Parlement moet nog stemmen in de tweede lezing. In de tekst van de lidstaten …" | "Over de herziening van de Europese geneesmiddelenwetgeving bereikten het Europees Parlement en de Raad, waarin de ministers van de lidstaten zitten, … Op 27 oktober 2026 is die herziening nog geen wet: de tweede lezing in het Parlement moet nog komen. In de tekst van de Raad …" | STYLE-NL §2.4 fixed name; under TFEU art. 294(7)(a) the act can be adopted without a vote, so "moet nog stemmen" overstated it; wording as on `/nl/legal/whats-changing/` | eu-status facts 28–29, 31; `ep-oeil-2023-0132-cod`, `council-st-7106-2026-rev2` |
| reform, fold "Gevolgen voor mensen nu", last sentence | "Toch werden producten die als retatrutide werden verkocht, al gemaakt en in beslag genomen." | "Toch werden in het VK al producten gemaakt en in beslag genomen die als retatrutide werden verkocht." (with `{/* residue-ok: evidence (a UK seizure) */}`) | right after the NL/EU status sentence a Dutch reader would read it as Dutch; the source is the MHRA raid | `mhra-2026-05-largest-seizure` |
| reform, diagram `six-proposals` row 1; fold 1 | "In een proef die in 2021 begon, … die oude medicijnen onderzoeken"; "een proef", "De proef ging alleen over …" | "In een proefproject dat in 2021 begon, … die nieuw gebruik van oude medicijnen onderzoeken"; "proefproject" | "proef" also means a trial or an animal experiment on this site; the pilot is about new uses of authorised off-patent medicines | `ema-2021-repurposing-pilot` |
| reform, under the six-proposals diagram | "Elk voorstel antwoordt op een van de argumenten" | "Elk voorstel is een antwoord op een van de argumenten" | idiom | — |
| reform, fold 2 | "Sinds de jaren negentig kunnen mensen die drugs gebruiken die in Nederland laten testen. Het ministerie van VWS maakt dat mogelijk via …" | "Sinds de jaren negentig kunnen mensen in Nederland hun drugs laten testen. Het ministerie van VWS maakte dat mogelijk via …" | ambiguous double "die"; the source (Brunt 2011) says the ministry made it possible; no source read today says who funds DIMS now | `brunt-2011-dims`, `trimbos-dims-monitoring` |
| reform, fold 3 | "Wat ontbreekt, is vertrouwen en gebruik." | "Wat ontbreekt, zijn vertrouwen en gebruik." | agreement | — |
| reform, fold 4 | "Gebruiken staat niet als overtreding in de wet. Invoeren wel, en voor eigen gebruik geldt geen uitzondering." | "Gebruiken noemt de wet niet als overtreding. Invoeren wel, en ook voor eigen gebruik geldt daarop geen uitzondering." | clearer that the missing exception is on importing (art. 40(2)), not on using | nl-law facts 36, 38 |
| reform, fold 5 | "de Endocrine Society, een Amerikaanse medische vereniging, … Hun gezondheidsrisico’s worden sterk onderschat. En er is observationeel onderzoek nodig, …" | "de Endocrine Society, een medische vereniging, … Volgens de vereniging worden hun gezondheidsrisico’s sterk onderschat, en is observationeel onderzoek nodig, …" | "Amerikaanse" was added (the English says "a medical society"); the split sentences turned the Society's view into the site's own statements | `pope-2014-ped-endocrine-statement` |
| reform, fold 6 | "als het voordeel van een medicijn dat nu al beschikbaar is groter is dan het risico van wat nog onbekend is"; "Ook toegang buiten een studie ligt niet in handen van de patiënt."; "vraagt een fabrikant, groothandel of apotheker in Nederland de ontheffing aan" | "als het voordeel van snelle beschikbaarheid groter is dan het risico dat er nog gegevens ontbreken"; "Ook toegang buiten een studie hangt niet af van de patiënt, maar van anderen, vaak van een bedrijf."; "… fabrikant, groothandel, apotheker of apotheekhoudende huisarts in Nederland …" | mistranslation of the EMA test (the benefit of immediate availability against the risk that data are missing); the English point is that access "depends on companies too" (answers the writer's question 7); the IGJ's full list of applicants | `ema-conditional-marketing-authorisation` (fetched today); `cbg-compassionate-use-criteria`; `igj-qa-zonder-handelsvergunning` (nl-law fact 6) |
| reform, "Wat we niet beweren", Lead | "We pleiten niet voor soepelere regels, en ook niet dat iemand iets moet gebruiken." | "We pleiten niet voor soepelere regels, en we zeggen niet dat iemand iets moet gebruiken." | "pleiten … dat" is ungrammatical | — |
| reform, paragraph under that diagram | "We zijn ervoor dat we meer weten: … Zodat mensen kunnen handelen op feiten in plaats van op reclame." | "We willen dat we meer weten: … Dan kunnen mensen afgaan op feiten in plaats van op reclame." | calque; a "Zodat" fragment as a sentence | — |
| reform, `##` heading | "Wat ons van mening doet veranderen" | "Wat ons van mening zou doen veranderen" | the English "would change": conditional (the heading's anchor changes; no page links it) | — |

Nothing was changed in `src/i18n/nl/glossary/nl-about.json`: the three entries are correct, B1, under 400 characters and
without collisions; `dims` and `basispakket` are ids that `nl-safety-a.json` and `nl-safety-c.json` already name in
`see_also`, and every `see_also` target exists (`lareb`, `pharmacovigilance`, `eigen-risico`, `zorginstituut`, `gvs`,
`drug-checking`).

### Additions to "For the owner" (differences from the English page introduced by this check)

23. Reform, retatrutide paragraph: the English "while products sold as retatrutide were already being made and seized"
    now says "in het VK" (the cited raid was in the UK), marked as evidence.
24. Reform, fold 5: the Endocrine Society's points are again all reported as its view ("Volgens de vereniging …"), as in
    the English; the writer's "Amerikaanse" is gone.
25. Reform, fold 6: "Ook toegang buiten een studie hangt niet af van de patiënt, maar van anderen, vaak van een bedrijf"
    (closer to the English "depends on companies too" than the writer's "ligt niet in handen van de patiënt").
26. Reform, heading "Wat ons van mening zou doen veranderen" (conditional, as the English).

No position changed in this check.

### Validation (after the changes)

- `npx tsx scripts/validate-content.ts --only pages/nl/about/editorial-policy`, `--only pages/nl/about/funding`,
  `--only pages/nl/the-case-for-reform`, `--only glossary/nl-about`: 0 errors, 0 warnings each (two warnings caused by my
  first edits, TL;DR 121 words and a KeyNumber label of 20 words, were fixed).
- `npx tsx scripts/check-locale-residue.ts --only <each page> --details` and `--only nl-about --details`: 0 error/frame
  hits, 0 warn hits.

### Remaining concerns for the reviewer

1. **`last_reviewed` 2026-10-27 on the two about pages** (English 2026-10-24). The brief says "as on English"; the writer
   chose the date the Dutch legal facts were checked. Kept; the sweep decides.
2. **Advertising test and authorised medicines named with an effect but without side effects:** RECOVERY (dexamethasone
   lowered deaths; hydroxychloroquine did not), thalidomide ("nuttig bij lepra en bij multipel myeloom"; its harms are
   the section's subject) and the Wegovy indication line (writer's question 5). Kept for science parity (the English is
   unchanged). Legal reviewer: is trial evidence about another indication, in a signed opinion piece, "informatie"?
3. **Funding page and the brief's publisher line:** the funding page does not repeat the brief's draft word for word; it
   keeps the English "Dutch law decides what it may say", adds "Maar ook zonder geld kan een tekst reclame zijn, als die
   een middel aanprijst", and has the 2026 rulings in the diagram. Editorial-policy has the line verbatim. Owner: is that
   enough for the funding page?
4. **Rb Amsterdam (10 April 2026) under appeal?** (nl-law 5.15): both about pages say only what the court decided; the
   Raad van State ruling is final. If the appeal succeeds, editorial-policy and funding item 3 must change.
5. **Reform fold 4 lists "in voorraad te hebben"** among the acts art. 40(2) forbids (the law's own words). Whether a
   private person with a few vials has them "in voorraad" is UNRESOLVED (nl-law 5.1); the page says nothing either way.
   Legal reviewer: is the list, followed by "Gebruiken noemt de wet niet als overtreding", fair?
6. **NHG quote** ("de periodieke controles horen bij wie het voorschreef", reform fold 5): the medical reviewer should
   confirm that it is safe on a page read by people who use unlicensed products (nl-care 6.7).
7. **"Testen maakt een product niet veilig."** (reform fold 2) stands as the site's own sentence where the English
   attributes it to the ACT Government (writer's item 14). Owner decision.
8. **Two source ids for one EMA document:** `ema-2026-10-under-evaluation` (retatrutide.yaml; used here, its note names
   retatrutide) and `ema-under-evaluation-2026-10` (pt-141.yaml; used by the retatrutide data rows). For the sweep.
9. **`accessed` dates** of `zin-2024-wegovy-not-reimbursed` and `cbg-glp1-position` (semaglutide.yaml, 2026-10-20): both
   re-read today and unchanged; the owner of that file may update them (as the writer's §7 item 4 lists for others).
10. **Sources whose body names a business** (`douane-2026-08-illegale-online-handel-medicijnen`,
    `nl-rbams-2026-5160-publieksreclame-journalistiek`): cited without ever quoting the names (nl-law 6.12; the writer's
    question 4).
11. **"kunnen ook anderen over de streep trekken"** (reform, serious-arguments fold) is idiomatic but slightly stronger
    than "might draw in others"; the owner may prefer "kunnen ook anderen aantrekken".
