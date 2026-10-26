# Refocus notes: group safety-en-a (24 October 2026)

Pages: `safety/if-something-goes-wrong`, `safety/warning-signs`, `safety/index`, `safety/sharps-disposal`; also
`src/i18n/en/warning-signs.json`, `src/i18n/en/glossary/safety-a.json`, `src/data/sources/en-safety-en-a.yaml`, the two
hero photos (entries added to `src/data/media.yaml`, `src/data/heroes.yaml`, `src/i18n/en/media.json`) and one
allowlist host. Manifest of what left: `research/for-nl-site/MANIFEST-safety-en-a.md`.

Runs: a first run (cut off) drafted if-something-goes-wrong, warning-signs, index, the sources file, the photos and
the allowlist entries. This second run reviewed that draft against the content brief, re-verified every new source
(curl or the built-in browser, own tab), fixed the claims that the sources did not support, and wrote
sharps-disposal, the glossary, the manifest and these notes. Nothing in `src/data/sources/refocus-*.yaml`,
`src/data/jurisdictions.yaml` or another group's file was edited.

## 1. What changed, per page

### safety/if-something-goes-wrong
- Country-neutral: "written for the Netherlands" is gone. Intro names the four countries plus Ireland and New Zealand.
- Stop callout: the five signs unchanged, never folded; cite line now NHS "When to call 999" and MedlinePlus "When to
  use the emergency room" instead of the Dutch government page.
- "Where to get help": a four-row urgency table (emergency number / help today / not sure / can wait), no number
  printed. Fold "Health advice and poison advice, by country" (US, UK by nation, Canada, Australia), naming each
  service (NHS 111, NHS 111 Wales, NHS 24, NI GP out-of-hours, provincial lines, healthdirect, Nurse-on-Call, 13 HEALTH,
  Poison Help, the Canadian poison centres, the Poisons Information Centre). `<WarningSigns />` follows, unfolded.
- "What to tell the doctor": checklist unchanged; the GLP-1 + insulin fact now cites the FDA Wegovy label (5.4).
- "Bring the product": the German state-lab example is replaced by the TGA's test of a vial sold as retatrutide
  (it held semaglutide, no retatrutide); "Dutch doctors" became "Doctors who treated two people…" (same cite).
- "Why you can be open with a doctor": the Dutch WGBO/KNMG Compare became a per-country table (HIPAA Privacy Rule;
  GMC duties; provincial and territorial laws in Canada; Australian privacy law). Fold: why confidentiality matters
  (GMC paras 1 and 22), the UK exceptions (GMC para 9), and an explicit "we did not check each country's rules on
  when a doctor may or must tell the police".
- "Report what happened": table per country for side effects (MedWatch, Yellow Card, Canada Vigilance, TGA) and for
  a product you think is fake (FDA report-a-problem form, Yellow Card, Health Canada complaint process, TGA breach
  report). The EudraVigilance study (Zinzi 2026) stays as evidence, marked `residue-ok`.
- New section "Help and reporting in your country": `<JurisdictionCards which="full" />`, then a short Ireland/New
  Zealand paragraph and `<JurisdictionCards which="notes" />`. Anchor `#help-and-reporting-in-your-country` is linked
  from warning-signs.
- Hero: `hospital-emergency-entrance` (default) instead of the huisartsenpost (kept for `nl`).

### safety/warning-signs
- Every warning sign and the stop callout are unchanged and unfolded (`warning-signs.json` needed no change: it has
  no country framing; see question 1 for the level labels in `vocab.json`).
- Help levels: (1) call your local emergency number; (2) medical help today: your doctor, or a health advice line or
  urgent-care service when they are closed, with a fold table naming the services in the US, UK, Canada and
  Australia; (3) stop and contact your doctor soon (within days).
- Dutch paragraphs (huisartsenpost before the emergency department, eigen risico) removed.
- Confidentiality paragraph: per-country (HIPAA, GMC, Canadian provincial laws, OAIC) with the UK exception.
- Reporting table: US, UK, Canada, Australia; link to the cards for Ireland and New Zealand.
- "Where this list comes from": Dutch GP sources replaced by healthdirect (cellulitis, needle-stick), the CDC (PEP)
  and the MHRA (NAION); the fever example now contrasts Australian ("urgent medical help") and UK ("call an
  ambulance") advice; the level stays "medical help today" with the emergency escalation written into the sign.
- GLP-1 pancreatitis and fluid loss now cite the FDA labels (Wegovy 5.2/5.5, Mounjaro 5.2/5.5) instead of the EU labels.
- Hero: `vital-signs-monitor` (default) instead of the Dutch ambulance (kept for `nl`).

### safety/index
- Stop callout: "contact your doctor" instead of "call your GP".
- "How Dutch harm-reduction services work" removed (manifest). New visible paragraph: what a needle and syringe
  programme does, that some welcome people who inject performance and image enhancing drugs, that local drug services
  test for HIV and hepatitis, and "ask your doctor, a pharmacist or your local health service". Fold "Finding a
  harm-reduction service in your country": one official link per country where the research has one (FRANK and DAN
  24/7 for the UK, Health Canada's "Get help with substance use", the National Alcohol and Other Drug Hotline for
  Australia, Health NZ's sharps page; the US: no official national list found). A short drug-checking paragraph names
  WEDINOS (Public Health Wales) as one official example, says it was set up for unknown drugs and new psychoactive
  substances (so ask first whether it can test a peptide), says we did not check the other countries, and points to
  the lab-report ladder on product-risk.
- "Where this advice comes from": Thuisarts and RIVM rows replaced by healthdirect and Health Canada.

### safety/sharps-disposal (rewritten)
- Summary: four items, all ≤ 18 words, no country as default.
- "Never loose in a bin, the recycling or the toilet": the never-list (FDA, healthdirect, Health NZ) plus one line that
  the rules on a closed container in the household bin conflict (never in the ACT and NZ; allowed in some Queensland
  council areas), so the reader checks the local rule. This follows the research's fact-check: a blanket "never in the
  household rubbish" would contradict Queensland and BC guidance.
- "A sharps container, and how to use it": the checklist unchanged; where to get one; fold on what to use until you
  have one (FDA, NSW, healthdirect, BCCDC; no glass, no thin drinks bottle or can).
- "Where a full container goes": a per-country table (US FDA steps; UK by nation; Canada by province with Ontario as
  example; Australia by state), then a fold with US, UK, Canada (Ontario, Manitoba, BC), Australia (NSW, Victoria,
  Queensland, WA, ACT) and Ireland/New Zealand notes. Gaps stated as not found / not checked (NI home disposal; SA,
  Tasmania, NT; no Health Canada page; no current Irish page).
- "After a needle-stick injury": country-neutral stop steps (let it bleed freely, do not squeeze or rub; soap and
  plenty of water for at least 30 seconds; clean dressing; go straight to a doctor or the nearest emergency department).
  TimeStrip: PEP as soon as possible, no later than 72 hours (CDC, NHS, WHO). Fold: PEP for 28 days, where to ask in
  the US (CDC) and UK (NHS), hepatitis B vaccine and immune globulin if unvaccinated (WHO), no PEP for hepatitis C but
  early testing (WHO), source-person test with consent and no delay of PEP (WHO).

### Glossary (`safety-a.json`)
Removed: `klein-chemisch-afval`, `huisarts`, `huisartsenpost`, `ggd`; Dutch aliases and sentences in `cellulitis`,
`sepsis`, `needle-stick-injury`, `sharps-container`, `medical-confidentiality` (manifest). Added: `needle-syringe-programme`
(aliases incl. needle exchange, syringe services program, NSP), `health-advice-line`, `urgent-care-centre`,
`drug-checking`. `medical-confidentiality` rewritten country-neutral (aliases "duty of confidentiality", "medical
secrecy"; "confidentiality" alone was not used because it would auto-link in unrelated senses).

### Photos
`vital-signs-monitor` (US Navy, public domain; Commons description: a monitor on a simulated patient at Naval Hospital
Pensacola, 11 February 2014) and `hospital-emergency-entrance` (Kenneth C. Zirkel, CC BY-SA 4.0, Newport Hospital,
Rhode Island, 2022). Licence, author and description re-read from the Commons API on 24 October 2026; both images
viewed: no people. The hospital photo shows the hospital's own name; it is a hospital, not a seller.

## 2. New facts and their sources

All in `src/data/sources/en-safety-en-a.yaml` unless marked [refocus] (merged research ids, reused).

| Fact | Source id | How verified (24 October 2026) |
|---|---|---|
| Needle-stick first aid: wash with soap and water ≥ 30 s, plenty of water, clean dressing, do not squeeze or rub, go straight to a doctor or ED; risk very low, higher if the source is infected or injects drugs; home users raise the risk for others; no glass containers; all states and territories have an NSP | `au-healthdirect-needlestick` | built-in browser ("Last reviewed: March 2026") |
| Let the wound bleed freely; hepatitis B PEP (vaccine ± HBIG if unvaccinated, none if vaccinated); no PEP for hepatitis C, early testing; source-person test with consent, do not delay PEP | `who-2010-injection-toolkit` (existing) | WHO IRIS text bitstream of the English PDF (Table 4.1, 4.2, sections 4.3–4.5) |
| PEP must start within 72 hours; every hour counts; 28 days; ask a provider, ER doctor or urgent care; includes needle sharing | `cdc-hiv-pep` | built-in browser (dated 2 December 2024) |
| UK: emergency HIV medicine (PEP) within 72 hours from sexual health clinics and A&E | `nhs-hiv-and-aids` | curl (last reviewed 9 July 2025) |
| Skin infection with fever: urgent medical help (Australia) | `au-healthdirect-cellulitis` | curl (last reviewed December 2024) |
| NAION with semaglutide; sudden loss of sight: urgently attend eye casualty or the emergency department | `mhra-2026-02-semaglutide-naion` | curl (GOV.UK, 5 February 2026) |
| US HIPAA Privacy Rule limits who can see health information; covers most doctors, clinics, hospitals, pharmacies | `hhs-hipaa-your-rights` | built-in browser |
| UK doctors' ethical and legal duty; patients may avoid help if they fear disclosure | `gmc-confidentiality-duties` | built-in browser (paras 1–7) |
| UK exceptions (consent, law, public interest e.g. serious harm); confidential care is in the public interest | `gmc-confidentiality-framework` (NEW in this run) | built-in browser (paras 9, 22) |
| Canada: provinces and territories have their own health privacy laws | `opc-privacy-laws-summary` | curl (modified 2018-01-31) |
| Australia: strict rules on how a health service collects, uses and discloses health information | `oaic-health-information` | curl |
| US: a fake or mislabelled product is reported through the FDA's report-a-problem form ("Product quality or mislabeling issues"); the old unlawful-sales page redirects there | `fda-report-a-problem` | curl (fda.gov page, content current 05/11/2026; old URL 302 to contact.fda.gov) and built-in browser (contact.fda.gov form text) |
| UK: a product you suspect is not genuine can be reported to the Yellow Card scheme | `mhra-2023-fake-weight-loss-pens` (existing) | GOV.UK content API (quotation in the release) |
| GLP-1: pancreatitis, hypoglycaemia with insulin, acute kidney injury from fluid loss | `fda-label-wegovy`, `fda-label-mounjaro` (existing) | label PDFs downloaded with curl, sections 5.2, 5.4/5.3, 5.5 |
| WEDINOS: official Welsh drug-checking service (Public Health Wales), for unknown/new psychoactive substances, samples from anyone in Wales, anonymous | `uk-wales-wedinos-about` (NEW in this run) | curl (wedinos.wales home and About pages) |
| Help services, poison services, reporting routes, sharps rules for every country | [refocus] `us-*`, `uk-*`, `ca-*`, `au-*`, `ie-*`, `nz-*`, `fda-sharps-*`, `govuk-clinical-waste-collection` | taken from the fact-checked research notes; the two corrections of its fact-check applied (Queensland/BC/WA household bin; WA only for found needles, so WA is described with NSEPs and disposal units only) |
| No official US national list of syringe services programs | – (a "not found" statement) | web search and the CDC SSP URLs (404; CDC page archived January 2025 per a mirror), 24 October 2026 |

Claims of the first run that the sources did not support, fixed in this run: "calling too often is better than calling
too late" was cited to the advice-line sources (now uncited editorial advice, as on the original page); the
warning-signs "stay with the person" cite and an "urgent treatment centre" example (not in `nhs-111`) removed; the UK
exceptions were cited to the GMC page that does not list them (new source `gmc-confidentiality-framework`); "most
provinces have a nurse line" became "most provinces and territories run their own health advice line" (Nunavut:
none found; Health811 is not described as nurse-only); the checklist no longer cites `uk-nhs-when-to-call-999`; the
NZ reporting line now says CARM and "you can report" (Medsafe "encourages" consumers; it does not say "anyone").

## 3. Removed sections

All listed with their cite ids in `research/for-nl-site/MANIFEST-safety-en-a.md`. Summary: the Dutch help route
(huisarts, huisartsenpost, SEH, eigen risico, NVIC), Dutch medical secrecy (WGBO, KNMG), Dutch reporting (Lareb, IGJ),
the Germany and Belgium rows and cards, Dutch harm-reduction services (Trimbos, Mainline), the Dutch sharps route
(apotheek, klein chemisch afval, GGD) and the RIVM/Thuisarts needle-stick timings; four glossary entries and the Dutch
aliases.

## 4. No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` vs now)

| Page | Before | After | Removed (all European framing; each listed in the manifest) |
|---|---|---|---|
| if-something-goes-wrong | 33 | 55 | bfarm-ozempic-falsification, bfarm-risiken-melden, ema-2023-falsified-ozempic, ema-epar-wegovy, gesund-bund-notfallnummern, igj-2023-falsified-ozempic, igj-2025-illegal-online-medicines, igj-online-medicijnen, knmg-beroepsgeheim, knmg-beroepsgeheim-doorbreken, lareb-2021-illegal-medicines, lareb-bijwerkingen-melden, nl-wgbo-art-454-456-records, nl-wgbo-art-457-confidentiality, nvic-umcutrecht, rijksoverheid-huisartsenpost-seh, rijksoverheid-urgent-medical-help, thuisarts-naar-de-huisarts |
| warning-signs | 49 | 63 | bfarm-risiken-melden, ema-epar-mounjaro, ema-epar-wegovy, ema-prac-2025-06-naion, knmg-beroepsgeheim, lareb-bijwerkingen-melden, lareb-home, rijksoverheid-huisartsenpost-seh, rijksoverheid-urgent-medical-help, rivm-hygiene-piercing, thuisarts-dikke-ogen-lippen, thuisarts-hiv-pep, thuisarts-pijn-op-borst, thuisarts-sepsis, thuisarts-verlamming, thuisarts-wondroos |
| index | 9 | 17 | drugsinfo-injecteren, mainline-steroids-safe-injecting, rivm-hygiene-piercing, thuisarts-wondroos |
| sharps-disposal | 15 | 22 | apotheek-medicijnafval, apotheek-nadroparine, drugsinfo-injecteren, ema-epar-wegovy, gesund-bund-arzneimittel-entsorgen, rijksoverheid-kca, rivm-hygiene-piercing, thuisarts-hiv-pep |

Kept although European: `stammers-2026-insulin-falsified-semaglutide` (Dutch case report: science, "Dutch" dropped),
`zinzi-2026-counterfeit-semaglutide-eudravigilance` (EudraVigilance study: evidence, marked), `frid-2016-fitter-recommendations`
(international expert recommendations). The four EU-label/EMA cites that left (`ema-epar-wegovy`, `ema-epar-mounjaro`,
`ema-prac-2025-06-naion`, `ema-2023-falsified-ozempic`) supported label or regulator advice for the reader; the same
facts are now cited to the FDA labels and the MHRA (the falsified-pen warning has no direct replacement: the fake
product routes are now per country).

## 5. Validation

- `npx tsx scripts/validate-content.ts --only <each owned file>`: **0 errors**. Warnings:
  - if-something-goes-wrong (3) and index (6): "inline outbound link … prefer <Cite id>". Kept on purpose: these are
    reporting forms and help services the reader needs to reach (CONTENT-GUIDE §10 allows a genuinely needed link,
    on the allowlist); each also has its `<Cite>`. Hosts: fda.gov, canada.ca, tga.gov.au, talktofrank.com,
    dan247.org.uk, health.gov.au, healthnz.govt.nz, wedinos.wales (added to the allowlist with a "why").
  - The sources file had two "no DOI" warnings for the GMC guidance entries; their type is now `regulator` (the GMC is
    the UK's statutory medical regulator), which clears them.
- Residue grep from the brief on all owned files: **0 real hits**. The pattern's `nada\b` matches "Canada" and `epar`
  matches "department"; those are false positives. One allowed hit: "Europe's side-effect database" (evidence, with
  `{/* residue-ok: … */}`). No emergency number printed (only service names such as "NHS 111").
- A full `astro build` (into the scratchpad) stopped at `start-here` on an unknown source id of another group in
  progress (`cpsa-cma-code-of-ethics`); the four safety pages were not rendered in that build. The repo-wide validator
  shows 11 errors, all in files of other groups (`about/funding`, `start-here`).

## 6. Open questions for the medical and legal reviewers

1. **Level labels.** The WarningSigns component prints the level labels from `src/i18n/en/vocab.json`
   (`warningAction.urgent` "Get medical help today", `warningAction.stop` "Stop and contact a doctor"); the brief's
   third level is "stop and contact your doctor soon". The page text says "soon (within days)". Owner of `vocab.json`:
   consider "Stop and contact your doctor soon".
2. **Fever after an injection** stays at "medical help today", with "call your local emergency number" written into
   the sign when there is a fast heartbeat or fast breathing. UK guidance for a skin infection with fever is to call an
   ambulance; Australian guidance is urgent medical help. Medical reviewer: keep or raise to "emergency"?
3. **Needle-stick first aid:** "let it bleed freely" (WHO) and "do not squeeze or rub" (healthdirect) are combined;
   the old "do not suck" (RIVM) was dropped for lack of a source in the four countries. Acceptable?
4. **Confidentiality:** we did not check, for any of the four countries, when a doctor may or must tell the police about
   use of an unauthorised product; the page says so. Legal reviewer: is a sentence per country possible?
5. **Household bin rules** conflict (ACT and NZ never; some Queensland councils allowed; BC as a last resort). The page
   says "check your local rule". Reviewer: is the BC last-resort line appropriate to print?
6. **Drug checking:** WEDINOS is the only official service named (Wales only; built for psychoactive substances). Should
   the page name services in Canada, Australia or the US, or drop the paragraph? We did not research them.
7. **Hero and media notes:** `sharps-bin-yellow` in `media.yaml` still lists `apotheek-medicijnafval` among its caption
   sources, and `media.json` still holds the Dutch captions of `ambulance-den-haag` and `huisartsenpost-oss` (both
   photos now show only on `nl`). This group may only add entries to those files; the media owner may want to tidy them.
8. **Other glossary files** (`safety-b.json`, `final-qa.json`, `guides.json`) still point `see_also` at `huisarts` /
   `huisartsenpost`, which no longer exist on English (harmless: the glossary page skips them).
