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

A third run (26 October 2026) reviewed the committed draft (checkpoint `1b7304f`) against the brief again, re-checked
the help, reporting and sharps claims against the source notes of the merged research and against
`research/refocus/feeds-help-extras.md` §2, and made these fixes:

- **if-something-goes-wrong:** Irish poisons line "8am to 10pm" became "every day from 08:00 to 22:00" (24-hour time;
  `ie-npic-poisons`, `ie-npic-contact`). UK poison row: "your doctor or a pharmacist" became "the same services or your
  doctor. In Northern Ireland, a pharmacist can also help" (`uk-npis-members-of-public` names a pharmacist only for
  Northern Ireland).
- **safety/index:** "Local drug services can also test for HIV and hepatitis" is now "In England, …" (the only source,
  `uk-nhs-drug-addiction-help`, is NHS England). US bullet: added SAMHSA's National Helpline (free, confidential, day and
  night; information and referral to local treatment, support groups and community organisations), the official US
  link the research has (`us-samhsa-national-helpline`, read from an archive capture by the research and its
  fact-check; samhsa.gov blocks scripts). The "no current national list of syringe services programs on an official
  US site" statement was re-checked: a web search on 26 October 2026 found no CDC or other federal locator (only a
  non-official directory, which is not named), and the old CDC SSP URLs answer HTTP 403 to scripts.
- **sharps-disposal:** summary item and the "Where does a full container go?" lead: "Ask your pharmacy or local
  council" became "Ask your pharmacy, or check your local rules" ("council" does not fit US or Canadian readers).
  TimeStrip: "after 72 hours it no longer works" became "after 72 hours it is too late to start" (the sources say PEP
  must start within 72 hours; none of the three notes records the stronger wording).
- Checked and kept: `uk-nhs-when-to-call-999` (re-fetched 26 October 2026 with curl) says 999 is for life-threatening
  emergencies "like serious road traffic accidents, strokes and heart attacks" and to use NHS 111 when unsure; it
  supports the general rule in the stop callouts and the urgency table, while the specific signs rest on the NHS
  condition pages cited with it. `nhs-hiv-and-aids` re-fetched: PEP within 72 hours, from sexual health clinics and A&E.
- No new source entries; no change to `warning-signs.json` (no country framing in it; every sign and level unchanged),
  the manifest (nothing more was cut), the glossary, the photos or the allowlist (samhsa.gov is covered by `.gov`).

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
| index | 9 | 18 | drugsinfo-injecteren, mainline-steroids-safe-injecting, rivm-hygiene-piercing, thuisarts-wondroos |
| sharps-disposal | 15 | 22 | apotheek-medicijnafval, apotheek-nadroparine, drugsinfo-injecteren, ema-epar-wegovy, gesund-bund-arzneimittel-entsorgen, rijksoverheid-kca, rivm-hygiene-piercing, thuisarts-hiv-pep |

Kept although European: `stammers-2026-insulin-falsified-semaglutide` (Dutch case report: science, "Dutch" dropped),
`zinzi-2026-counterfeit-semaglutide-eudravigilance` (EudraVigilance study: evidence, marked), `frid-2016-fitter-recommendations`
(international expert recommendations). The four EU-label/EMA cites that left (`ema-epar-wegovy`, `ema-epar-mounjaro`,
`ema-prac-2025-06-naion`, `ema-2023-falsified-ozempic`) supported label or regulator advice for the reader; the same
facts are now cited to the FDA labels and the MHRA (the falsified-pen warning has no direct replacement: the fake
product routes are now per country).

## 5. Validation

- `npx tsx scripts/validate-content.ts --only <each owned file>`: **0 errors**. Warnings:
  - if-something-goes-wrong (3) and index (7 after the third run): "inline outbound link … prefer <Cite id>". Kept on
    purpose: these are reporting forms and help services the reader needs to reach (CONTENT-GUIDE §10 allows a
    genuinely needed link, on the allowlist); each also has its `<Cite>`. Hosts: fda.gov, canada.ca, tga.gov.au,
    samhsa.gov, talktofrank.com, dan247.org.uk, health.gov.au, healthnz.govt.nz, wedinos.wales (added to the allowlist
    with a "why").
  - Third run (26 October 2026): 0 errors in every owned file; the repo-wide validator shows 0 errors (180 warnings,
    none in this group's files except the link warnings above).
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
9. **SAMHSA's National Helpline** (added for the US on safety/index in the third run) describes itself as a referral
   service for people facing substance use disorders. It is the only official US link the research has; FRANK (UK)
   and Health Canada's directory have the same flavour. Reviewer: is it the right US link for someone who injects a
   peptide, or should the US bullet keep only "ask your doctor, a pharmacist or your local health department"? Its
   page was read only from an Internet Archive capture (samhsa.gov blocks scripts and the browser).
10. **Stop-callout sources:** `uk-nhs-when-to-call-999` supports the general rule (life-threatening emergencies, NHS 111
    when unsure), not each listed sign; the signs rest on the NHS condition pages cited beside it. Acceptable?
    (Resolved by the fact-check in section 7: the source is no longer cited.)

## 7. Adversarial fact-check (26 October 2026)

An independent fact-check of the whole group against the content brief. Method: cite ids diffed against
`git show nl-source-2026-10-23:<path>` for all four pages; every claim on the four pages compared with the note of
its cited source (78 source notes read); 20 sources re-read live. Tools: curl with a browser user agent (healthdirect
cellulitis, NHS HIV and AIDS, NHS cellulitis, MedlinePlus "When to use the emergency room", OPC, OAIC, WEDINOS, FDA
report-a-problem, and the old FDA unlawful-sales URL, which answers 302 to contact.fda.gov); the GOV.UK content API
(MHRA fake pens 2023, MHRA NAION 2026); the FDA label PDFs with pdftotext (Wegovy 218316s007: 5.2, 5.4, 5.5;
Mounjaro 215866s044s045: 5.2, 5.3, 5.5); the WHO IRIS DSpace API (the toolkit's text bitstream: Table 4.1, Table 4.2,
4.5.2, 4.5.3 and the PEP counselling box); the Commons API (both hero photos: licence, author, description); and the
built-in browser, in its own tab, for pages that are rendered by scripts or answer 403 (healthdirect needlestick, CDC
PEP, GMC framework paras 9 and 22, HHS "Your Rights Under HIPAA", the contact.fda.gov form). A web search for an
official US national list of syringe services programs was repeated: it found only state directories (Massachusetts,
Vermont, Washington) and a non-official national map, so the page's "not found" statement stands.
`warning-signs.json` is identical to nl-source-2026-10-23: every sign, level and stop-now block is kept, none folded.

### Fixed in place

- **An emergency number printed through a source title.** `uk-nhs-when-to-call-999` has the title "When to call 999",
  which the page's source list prints. Its research note says it "is never printed on the English site". It was
  removed from the four cite lines that used it (if-something-goes-wrong: the stop callout and the urgency table;
  warning-signs: the stop callout and level 1). The general rule now rests on `us-medlineplus-when-to-use-er`
  (re-read: stopped breathing, severe chest pain or pressure, a seizure, sudden weakness on one side go to the
  emergency department) and on the NHS condition pages already cited; "not sure" rests on `nhs-111` and
  `au-healthdirect-helpline`. This resolves open question 10.
- **Science restored (sharps-disposal, fold "What the doctor will do").** Hepatitis C: "blood tests in the following
  weeks and months" had left with the Dutch rewrite, but it is WHO science (toolkit 4.5.3: HCV RNA at 4 to 6 weeks,
  anti-HCV and ALT at 4 to 6 months). It is back, cited to `who-2010-injection-toolkit`. What PEP does had left with
  the Thuisarts cite; it is back in a sourced form: "PEP is medicine that helps prevent an HIV infection after a prick
  like this" (`cdc-hiv-pep`: "PEP is medicine that prevents HIV after a possible exposure").
- **Science restored (if-something-goes-wrong, fold "Why confidentiality matters").** The right to see your record and
  get a copy had left with the WGBO cite. It is back for the four countries, with the ids that the
  talking-to-your-doctor group verified (`ecfr-45-164-524`, `nhs-constitution-england`, `cpsa-cma-code-of-ethics`,
  `oaic-access-health-information`), in that page's wording ("with a few exceptions").
- **Ontario sharps (table row).** "Pharmacies and other sites must take back sharps" put the legal duty on pharmacies.
  O. Reg. 298/12 puts it on producers (s. 3(1); free of charge, s. 4(3); a sharp outside a sharps container may be
  refused, s. 3(2)). Now: "the law requires free collection of sharps in a sharps container, at pharmacies and other
  sites". The fold already said "the companies that supply sharps … must run free collection".
- **UK cellulitis wording (warning-signs, "Where this list comes from").** The NHS says: call 999 or go to A&E if you
  have cellulitis with "a very high temperature, or you feel hot, cold or shivery". The page said "with fever … call
  an ambulance". Now: "with a very high temperature or shivering is to call an ambulance or go to an emergency
  department".
- **New Zealand: what CARM is.** "CARM is the centre that monitors side effects" had no source in its cite.
  `nz-otago-nzphvc-carm` (Centre for Adverse Reactions Monitoring, contracted by Medsafe) was added.
- **safety/index: section length.** The new harm-reduction paragraph took the opening section from 109 to 170 visible
  words. Its two detail sentences now open the fold "Finding a harm-reduction service in your country", with their
  cites: programmes that welcome people who inject performance and image enhancing drugs ("such as steroids", from the
  HSE steroids page), and HIV and hepatitis testing in England. Nothing was deleted.

### Checked and kept

- Removed cite ids (nl-source → now): every one is Dutch, German, Belgian or EU, and each is in the manifest. The
  other "removed" ids in a raw diff (`where-to-get-help-nl`, `where-to-report-nl`, `help-in-other-countries`) are
  diagram ids. Ids now (cites and figure ids together): if-something-goes-wrong 38 → 64, warning-signs 53 → 66, index
  10 → 19, sharps-disposal 16 → 24.
- Every help, poison, reporting and sharps statement matches its source note and research/refocus/feeds-help-extras.md
  §2 with its fact-check: the Queensland, BC and WA household-bin corrections are applied; WA is described only with
  NSEPs and disposal units; SA, Tasmania, the NT, Northern Ireland home disposal, Nunavut and a Health Canada sharps
  page are written as not found or not checked; SAMHSA is read from an archive capture only, as the research says.
- New sources in `en-safety-en-a.yaml`: the quotations were confirmed live for healthdirect needlestick (last reviewed
  March 2026), healthdirect cellulitis (December 2024), CDC PEP (2 December 2024), NHS HIV (9 July 2025), MHRA NAION
  (5 February 2026), HHS HIPAA (30 May 2025), GMC paras 9 and 22, OPC (2018-01-31), OAIC, FDA report-a-problem
  (05/11/2026; form option "Product quality or mislabeling issues") and WEDINOS. No metadata errors found.
- Residue grep (the brief's pattern, UTF-8 locale): 0 real hits. The matches are `nada` (Canada), `epar` (department)
  and `nl` inside the cite id `ca-help-nl-healthline`. The one `residue-ok` marker sits on genuine evidence (Zinzi
  2026, a study of the EudraVigilance database: 234 reports, hypoglycaemia reported disproportionately often), and the
  validator accepts it.
- No emergency number in page text, i18n strings or (now) source titles of these pages. Services are named ("NHS 111",
  "Health811", "Info-Santé 811", "13 HEALTH"), which the brief allows. No doses, no seller help, no commerce words in
  headings, link texts or labels. The drug-checking paragraph keeps to the lab-report ladder ("a result covers only
  the sample that was tested"). Every internal link is a route in the brief; these pages use no legal-routes anchors.
- Validator: 0 errors in every owned file and 0 errors repo-wide. The only warnings in owned files are the 10
  deliberate inline links to reporting forms and help services (allowlisted hosts).

### Still open (for the reviewers)

- `sharps-bin-yellow` (the sharps hero) still lists the Dutch `apotheek-medicijnafval` among its caption sources in
  `src/data/media.yaml`, so that Dutch-language title appears on the English /sources/ page. This group may only add
  entries to media.yaml; the media owner should drop it from the caption sources (open question 7).
- The title of `nhs-111`, "When to use NHS 111 online or call 111", is printed in the source lists, and 111 is also New
  Zealand's emergency number. It is the NHS service's name, which the brief allows; flagged for the editor.
- Fever after an injection stays at "medical help today", although NHS guidance sends a skin infection with a very
  high temperature or shivering to emergency care (open question 2).
- Open questions 1 and 3 to 9 above stand.
