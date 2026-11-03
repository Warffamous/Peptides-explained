# Notes: basics-b (Dutch site, 27 October 2026)

Group basics-b wrote the Dutch versions of two basics pages:

| Page | File | Method |
|---|---|---|
| basics/pharmacokinetics | `src/content/pages/nl/basics/pharmacokinetics.mdx` | `translated` |
| basics/why-not-a-pill | `src/content/pages/nl/basics/why-not-a-pill.mdx` | `translated` |

Both follow the current English page (24 October 2026): same frontmatter fields, the same five or six `##`
chapters in the same order, the same diagrams (same ids), key numbers, comparison tables, folds, claim levels
and studies. Every English `<Cite>` id is kept on `pharmacokinetics`; on `why-not-a-pill` only the six
UK/Canada/Australia status cites left (below). `related` keys are the English ones (all Dutch routes in the
brief). `reviewed_by: pending-medical-review` and `last_reviewed: 2026-10-24` as on English (brief, "Files and
frontmatter"); the Dutch status facts carry their own date in the text ("gecontroleerd op 27 oktober 2026").

No new source file (`src/data/sources/nl-basics-b.yaml`) and no new glossary file
(`src/i18n/nl/glossary/nl-basics-b.json`) were needed: every source the pages cite was already registered, and
every glossary term the English pages link has a Dutch entry (checked by script against all
`src/i18n/nl/glossary/*.json`; the only English term without a Dutch entry, ARTG, was in a dropped Australian
row). No allowlist host was added.

Validator: `npx tsx scripts/validate-content.ts --only pages/nl/basics/` → 0 errors, 0 warnings (the earlier
`related: "… does not exist (yet) in nl"` warnings went away once the other groups' Dutch pages were written;
the TL;DR, Lead and superlative warnings of the first drafts were fixed: "het best" tripped the English
superlative pattern and became "het meest actief"). Residue: `npx tsx scripts/check-locale-residue.ts
--only pages/nl/basics/ --details` → 0 error, 0 frame, 0 warn hits. Every FDA, "in de VS" and "in het VK" line
carries `{/* residue-ok: FDA evidence */}` or `{/* residue-ok: world context */}` (frontmatter: `# residue-ok:`).

## What was checked today (27 October 2026)

- **Dutch product information, read with curl + pdftotext** (EMA, Dutch PDFs; registered ids
  `ema-pi-rybelsus-nl`, `ema-pi-wegovy-nl`):
  - Rybelsus SmPC 4.1: "volwassenen met onvoldoende gereguleerde diabetes mellitus type 2 om glykemische
    controle te verbeteren als toevoeging aan dieet en lichaamsbeweging"; 4.2 "op een lege maag ... na een
    nuchtere periode van minstens 8 uur", "met een slok water (maximaal een half glas water, overeenkomend met
    120 ml)", "minstens 30 minuten wachten voordat ze iets eten, drinken of andere orale geneesmiddelen
    gebruiken"; 4.3 only hypersensitivity; 4.4 "Bij verdenking op pancreatitis moet het gebruik van semaglutide
    worden gestaakt" and "2-4% van de patiënten zullen niet worden blootgesteld"; 4.6 not in pregnancy, stop
    "ten minste 2 maanden voor een geplande zwangerschap", not during breastfeeding; 4.8 "misselijkheid (zeer
    vaak), diarree (zeer vaak) en braken (vaak)"; 4.9 "Een verlengde periode van observatie en behandeling ...
    halfwaardetijd van semaglutide van ongeveer 1 week", "geen specifiek antidotum"; 5.2 "Steady-state
    blootstelling werd bereikt na 4-5 weken", "Natriumsalcaprozaat faciliteert de absorptie van semaglutide,
    gebaseerd op in-vitrogegegevens", "coëfficiënt van de variatie was ongeveer 100%", "nog ongeveer 5 weken na de
    laatste dosis in de circulatie"; switching oral/subcutaneous "kan niet gemakkelijk worden voorspeld".
  - Wegovy SmPC 5.2: half-life "ongeveer 1 week", "albuminebinding, wat resulteert in verlaagde renale klaring en
    bescherming tegen metabole afbraak", "gestabiliseerd tegen afbraak door het DPP-4-enzym", plasma albumin
    "> 99%", "Het enzym neutrale endopeptidase (NEP) is geïdentificeerd als één van de actieve metabole enzymen",
    "Ongeveer 3% ... in de urine als intacte semaglutide", "nog ongeveer 7 weken na de laatste dosis"; tablets:
    "absolute biologische beschikbaarheid ... ongeveer 1-2%", the same intake rules as Rybelsus; 4.6 stop "ten
    minste 2 maanden voor een geplande zwangerschap"; leaflet: "minstens twee maanden van tevoren stopzetten".
- **EMA Foundayo page** (`ema-epar-foundayo-opinion`, fetched with curl today): status "Opinion", positive opinion
  adopted 15/10/2026, SmPC to be published "after the marketing authorisation has been granted by the European
  Commission": no Commission decision on 27 October 2026 (as `research/nl/eu-status.md` fact 11 and its
  fact-check say).

## basics/pharmacokinetics

- **Saved material (23 October):** the saved page cited the EU product information (`ema-epar-wegovy`,
  `ema-epar-rybelsus`) where English now cites the US labels (MANIFEST-about-history-en, "basics/pharmacokinetics").
  For a Dutch reader the EU product information is their own: the Dutch page keeps every US-label cite
  (evidence, brief "What stays") and adds the Dutch product information wherever it says the same, read today
  (above): albumin binding, NEP, 3% in urine, half-life about one week, steady state after 4 to 5 weeks, 5 to 7
  weeks in the blood after the last dose, overdose and no antidote, stop 2 months before a planned pregnancy.
- **Not brought back:** the saved "Byetta, authorised in the EU until 1 January 2026" (`ema-epar-byetta`): a status
  fact the research of 27 October does not confirm, and not needed for the science; the Dutch page keeps the
  English `dailymed-byetta-label` for the same facts.
- **Rewritten for the Netherlands:**
  - KeyNumber "about 1 week": who-line "Amerikaanse en Europese productinformatie van Wegovy", source
    `fda-label-wegovy,ema-pi-wegovy-nl`.
  - TL;DR item 3: "De productinformatie van Wegovy zegt: stop minstens 2 maanden voor een geplande zwangerschap"
    (English: "Wegovy's US label says ..."); body and both labels say the same.
  - New line in the last fold: "Geen van de drie is in Nederland als medicijn goedgekeurd, en ook niet voor de
    hele EU (gecontroleerd op 27 oktober 2026)" (`cbg-gib-search-status-2026-10-27`, `ema-medicines-json`;
    eu-status.md fact 9), so "niet-goedgekeurd" is the Dutch answer, not the US one.
  - "A doctor can still help" → "Je huisarts kan toch helpen" (ally, STYLE-NL §5.3), plus STYLE-NL §5.1's
    sentence "Je kunt een bijwerking ook zelf melden bij Bijwerkingencentrum Lareb." (`lareb-bijwerkingen-melden`,
    re-checked by nl-help on 27 October 2026).
  - "the FDA evaluated ... US pharmacy compounding" stays as evidence (the briefing documents' findings); the PCAC
    vote is not mentioned on this page (nor on English), so the five-point framing is not needed.
- **Dropped citations:** none.
- **Added citations:** `ema-pi-wegovy-nl`, `ema-pi-rybelsus-nl`, `cbg-gib-search-status-2026-10-27`,
  `ema-medicines-json`, `lareb-bijwerkingen-melden` (all registered).

## basics/why-not-a-pill

- **Saved material (23 October):** the Compare row "Authorised in the EU?" (Rybelsus since 2020; orforglipron
  recommended by the CHMP on 15 October 2026, no Commission decision) and the fold text "the EU label for
  Rybelsus asks people to take the tablet on an empty stomach after fasting for at least eight hours, with no
  more than half a glass of water" came back, each re-checked (eu-status.md facts 2, 11, 12 and the fact-check;
  the Dutch SmPCs and the EMA page read today).
- **Rewritten for the Netherlands:**
  - Compare "small-molecule pill": the UK, Canada and Australia rows became one row **"Goedgekeurd in Nederland
    en de EU?"**: semaglutide tablets yes (Rybelsus since 3 April 2020, Wegovy tablets since 14 July 2026; a
    central authorisation is valid in the Netherlands, Regulation 726/2004 art. 13(1)); orforglipron "Nog niet":
    positive EMA opinion of 15 October 2026, no Commission decision on 27 October 2026. The US row became a short
    world-context row **"Al goedgekeurd buiten de EU?"** (US since 2019 for Rybelsus; orforglipron US since
    1 April 2026, UK since 10 August 2026), marked `residue-ok: world context` (brief, "What stays": why the EU
    row says something else). Detail line: "Status gecontroleerd op 27 oktober 2026."
  - TL;DR item 5: "In Nederland en de EU nog niet goedgekeurd." (English: "Approved in the US and UK.").
  - Fold "De regels in de productinformatie": the Dutch/EU SmPC intake rules (lege maag, liefst na minstens 8 uur
    niet eten, slok water, hooguit een half glas (120 ml), 30 minuten wachten) with `ema-pi-rybelsus-nl`,
    `ema-pi-wegovy-nl`; the US label kept as "dezelfde soort regels" and for the 50 ml/240 ml study result.
    "4 ounces" (US unit) is gone.
  - **Advertising test (brief, "Added after step 1", item 1):** wherever the page names the effect of the
    authorised tablet (PIONEER 1; TL;DR item 4), it now also gives the Dutch SmPC indication (Rybelsus: adults with
    insufficiently controlled type 2 diabetes, with diet and exercise), the most common side effects with their
    EU frequency words (misselijkheid and diarree zeer vaak, overgeven vaak), the pancreatitis stop rule and the
    contraindication (hypersensitivity), plus pregnancy and breastfeeding. TL;DR item 4: "Ja, bij diabetes type 2,
    vaak met misselijkheid als bijwerking." Orforglipron (no handelsvergunning): its phase 2 result stays with its
    claim level, design, funding and the 10 to 17 in 100 who stopped; the EMA assessment is stated as an advice
    with "no Commission decision, so no approval in the Netherlands" in the same bullet.
  - KeyNumber "about 1–2%": "Ozempic tablets" is a US product only (status file semaglutide.yaml, "There is no
    'Ozempic tablets' product in the EU"): who-line "Wegovy-tabletten en de Amerikaanse Ozempic-tabletten",
    source plus `ema-pi-wegovy-nl` (Dutch SmPC: "ongeveer 1-2%").
  - Semax: after "In Rusland ... als neusdruppels" a line "In Nederland en de EU is Semax geen goedgekeurd medicijn
    (gecontroleerd op 27 oktober 2026)" (`cbg-gib-search-status-2026-10-27`, `ema-medicines-json`; eu-status.md
    fact 9).
  - Heading "Capsules, sprays and drops sold online" → "Capsules, sprays en druppels met peptiden" ("verkocht" is
    a commerce word in a heading, STYLE-NL §7); fold "What the tablet costs" → "De keerzijde van de tablet"
    ("kost" is on the §7 list).
- **Dropped citations (all UK/Canada/Australia framing, brief "What leaves"):**

  | Cite id | Where on English | Why it went | Replaced by |
  |---|---|---|---|
  | `uk-mhra-substance-index-status-a-2026-10-24` | Compare, "Approved in the UK?", semaglutide tablet | UK status row | NL/EU row: `ema-epar-rybelsus`, `ec-union-register-rybelsus`, `ec-union-register-wegovy`, `eu-regulation-726-2004`, `cbg-gib-search-semaglutide-2026-10-27` |
  | `ca-dpd-extract-search-status-a-2026-10-24` | Compare, "Approved in Canada?", semaglutide tablet | Canadian status row | the NL/EU row above |
  | `ca-pm-rybelsus-2026-07-13` | same | Canadian status row | the NL/EU row above |
  | `ca-hc-sur-search-status-a-2026-10-24` | Compare, "Approved in Canada?", orforglipron | Canadian status row | NL/EU row: `ema-epar-foundayo-opinion`, `ema-chmp-2026-10-highlights` |
  | `au-artg-rybelsus-346198` | Compare, "Approved in Australia?", semaglutide tablet | Australian status row | the NL/EU row above |
  | `au-artg-search-orforglipron-2026-10-26` | Compare, "Approved in Australia?", orforglipron | Australian status row | `ema-epar-foundayo-opinion`, `ema-chmp-2026-10-highlights` |

  Kept as evidence or world context: `fda-drugsatfda-rybelsus`, `fda-2026-foundayo-approval`,
  `mhra-2026-08-orforglipron-authorised` (also the "with or without food" source), every FDA label and briefing.
- **Added citations:** `ema-pi-rybelsus-nl`, `ema-pi-wegovy-nl`, `ec-union-register-rybelsus`,
  `ec-union-register-wegovy`, `eu-regulation-726-2004`, `cbg-gib-search-semaglutide-2026-10-27`,
  `ema-epar-foundayo-opinion`, `ema-chmp-2026-10-highlights`, `cbg-gib-search-status-2026-10-27`,
  `ema-medicines-json` (all registered).

## UNRESOLVED points and how the pages handle them

- **Foundayo (orforglipron) Commission decision**: not taken on 27 October 2026. The page says so with the date
  ("had op 27 oktober 2026 nog niet besloten"), never "approved in the EU". When the Commission decides, three
  places change (see "For the final sweep").
- **Whether the Wegovy tablets are on the Dutch market** (eu-status.md §5 item 4: the CBG register shows
  authorisation, not availability): the page says only "goedgekeurd ... sinds 14 juli 2026", never "verkrijgbaar"
  or "in de handel".
- **National authorisations in other member states** were not searched (eu-status.md §5 item 7): the pages write
  "in Nederland ... en ook niet voor de hele EU" / "In Nederland en de EU", never "in geen enkel EU-land".
- **Rybelsus paediatric extension** (under evaluation since 12 September 2026, outcome unknown): not mentioned;
  the page gives today's indication (adults).

## Open questions for the medical or legal reviewer

1. **Advertising test, TL;DR item 4 of why-not-a-pill** ("Ja, bij diabetes type 2, vaak met misselijkheid als
   bijwerking. Slechts 1 tot 2% komt in het bloed."): is one side effect in an 18-word answer balanced enough, with
   the full indication, side effects and contraindication in the fold below? (medical/legal)
2. **Intake rules from the SmPC** (lege maag, 8 uur, 120 ml, 30 minuten): stated as the product information's
   rules, with "De arts die het voorschrijft, legt uit hoe dit in je dag past." English states the US label's
   rules the same way. Acceptable under CONTENT-GUIDE §1 and §6? (legal)
3. **89% subcutaneous bioavailability** stays attributed to the US label only: the Dutch Wegovy SmPC read today
   gives no absolute subcutaneous figure. (medical: fine to keep the US number?)
4. **"5 tot 7 weken"**: the Dutch SmPCs say about 5 weeks (Rybelsus) and about 7 weeks (Wegovy, 2,4 mg and
   tablets), the US label 5 to 7 weeks; the page writes "ongeveer 5 tot 7 weken" with all three sources. (medical)
5. **Rybelsus SmPC 5.2, new formulation (a slip in the Dutch text):** pdftotext of the Dutch PDF reads "De
   geschatte biologische beschikbaarheid van semaglutide bedraagt na orale toediening ongeveer 12%" for the
   1,5/4/9 mg tablets (the older 3/7/14 mg: "ongeveer 1%", 25/50 mg "maximaal 2%"). The English EU SmPC, read
   today, says "approximately 1-2%" for the same section, so the Dutch "12%" is a missing dash in the Dutch
   translation (or its PDF). Never quote "12%"; the page does not use the Rybelsus 5.2 figure (it keeps English's
   "about 1–2%" from the Wegovy labels, now also the Dutch Wegovy SmPC's "ongeveer 1-2%", and "0,4% tot 1%" for the
   older Rybelsus tablets from the US label). (for the semaglutide writers)
6. **Semax wording:** the FDA briefing says "a registered drug in Russia"; STYLE-NL §2.4 avoids "geregistreerd",
   so the page writes "In Rusland is Semax als medicijn toegelaten". (medical/legal: acceptable?)
7. **Desmopressin (US 1978) and ciclosporin (US since 1983, capsules 1990)** stay as history/world context with the
   marker, as on English. (editor: fine, or prefer the EU dates if the writers want them; not researched here)

## Style terms (STYLE-NL lacks these; the word used)

| English | Dutch used | Note |
|---|---|---|
| first-pass metabolism | first-passeffect | the glossary term (`first-pass-metabolism`) |
| clearance · volume of distribution · steady state | klaring · verdelingsvolume · steady state | glossary terms; "evenwicht" in explaining text |
| elimination · excretion · absorption · distribution | eliminatie · uitscheiding (excretie) · opname (absorptie) · verspreiding (distributie) | in the ADME table the letter terms first, the plain word in brackets |
| proteases · neutral endopeptidase | proteasen · neutrale endopeptidase | glossary |
| kidney filter | nierfilter | glossary alias of `glomerulus` |
| gastric juice · simulated stomach fluid | maagsap · nagebootst maagsap | |
| gut lining · gut wall · brush border | darmslijmvlies · darmwand · borstelzoom | |
| helper substance (SNAC) | hulpstof | the SmPC's word; the glossary's `permeation-enhancer` term is "opnameversterker" |
| antidote | tegengif (antidotum) | the SmPC says "antidotum" |
| molecular weight | molecuulmassa | STYLE-NL §2.5 molecule data ("molecuulmassa") |
| oral spray · nasal drops | mondspray · neusdruppels | |
| European product information · US label | Europese productinformatie · Amerikaanse productinformatie | STYLE-NL §2.4 has "Amerikaanse productinformatie" |
| boxed warning | boxed warning (de zwaarste soort waarschuwing) | glossary term kept English |
| partial agonist | partiële agonist | glossary |
| cyclosporin | ciclosporine | Dutch INN spelling (Kompas) |
| death cap | groene knolamaniet | |
| lizard venom | het gif van een hagedis | |
| reactive hook | reactief haakje | |
| a promising animal result | een resultaat bij dieren | "veelbelovend" left out (advertising test) |
| the cost (of the tablet) | de keerzijde | "kost(en)" is a §7 word in fold titles |

## For the final sweep (files this group does not own)

- **When the European Commission decides on Foundayo:** update `why-not-a-pill.mdx` (Compare row "Goedgekeurd in
  Nederland en de EU?", TL;DR item 5, the "Bewijs bij mensen" bullet's last sentence) and the timeline/tracker if
  an EU event is added there.
- `src/data/sources/basics.yaml`: `ema-epar-foundayo-opinion` (`accessed: 2026-10-22`) was re-read on
  27 October 2026 (still "Opinion"); its owner may set `accessed: 2026-10-27`.
- `src/data/sources/bpc-157.yaml`: `ema-medicines-json`'s note names only BPC-157 searches of 20 October; these
  pages cite it (with `cbg-gib-search-status-2026-10-27`) for "not authorised EU-wide" of TB-500, KPV and Semax, as
  the eu-status research did. The merge may update `accessed` and the note (eu-status.md §7 already suggests it).
- `src/data/sources/legal-a.yaml`: `eu-regulation-726-2004`'s note does not mention art. 13(1) ("shall be valid
  throughout the Union"), which why-not-a-pill cites it for; eu-status.md §7 suggests the note line.
- Link texts to pages of other groups, written before those pages existed: "[de kloof tussen dieronderzoek en
  mensen](/nl/evidence/the-translation-gap/)", "[de risico's van het product zelf](/nl/safety/product-risk/)",
  "[controles die je kunt laten doen](/nl/safety/monitoring/)", "[hoe signalen in het lichaam
  werken](/nl/basics/how-signalling-works/)", "[wat een peptide is](/nl/basics/what-is-a-peptide/)": no anchors
  used; align the wording with those pages' Dutch titles if wanted.
- Heroes: `basics/pharmacokinetics: wooden-hourglass` and `basics/why-not-a-pill: gastric-mucosa-he` already have
  Dutch alt text and captions in `src/i18n/nl/media.json`; nothing to change.
- `last_reviewed` is 2026-10-24 on both pages (as English, brief); if the editor prefers the date of the Dutch
  status check, set 2026-10-27.

## Check (independent, 27 October 2026)

An independent fact-check and edit of both pages, the writer's notes and the sources they cite. No source file
(`src/data/sources/nl-basics-b.yaml`) or glossary file (`src/i18n/nl/glossary/nl-basics-b.json`) exists, and none was
needed: every cited id is registered. No allowlist host was added (`www.lareb.nl`, `www.ema.europa.eu`,
`ec.europa.eu`, `eur-lex.europa.eu`, `www.geneesmiddeleninformatiebank.nl` are already on it).

### What was checked

- **Science parity, page by page, against the current English pages.** Every English `<Cite>` id is on the Dutch
  `pharmacokinetics` page; on `why-not-a-pill` exactly the six UK/Canada/Australia status ids are gone (listed
  above, all framing). Claim levels match in kind, number and order (pharmacokinetics: in-vitro, animal, animal;
  why-not-a-pill: in-vitro, human-limited, in-vitro, human-controlled, animal). Key numbers (7), diagrams (5, same
  ids), Compare tables (3) and folds match. Every number was compared with the English text (1,5–2 min; > 99%; 3%;
  4 tot 5 weken; 5 tot 7 weken; 2 maanden; 5,3–15,2 min; 2,4 uur; 13 uur; 4,7 dagen; positie 8; 15 min; 72 uur;
  5,8 tot 8,1 dagen; 89%; 55%; 16.000; 246 tot 19.000; the 50/75/88/94/97 and 50/25/13/6/3 table; 45 tot 90 keer;
  0,4% tot 1%; 1%; pH 2 tot 3 and 5; 30 min; 500; 1.202; 1978; 1983; 1990; 0,16%; 5%; 3%; 703; 26 weken; 50 ml
  tegen 240 ml; 100%; 2 tot 4 op de 100; 77%; 883 dalton; LY3502970; 272; 36 weken; −9,4% tot −14,7%; −2,3%;
  10 tot 17 op de 100; 4.740; 3.765; 29 tot 49 uur; 2015; 2019; 1 april 2026; 10 augustus 2026): all the same.
- **Dutch product information, re-read by me today** (curl + pdftotext of
  `ema.europa.eu/nl/documents/product-information/rybelsus-epar-product-information_nl.pdf` and
  `wegovy-epar-product-information_nl.pdf`; the English Rybelsus PDF for the 5.2 figure): every sentence the pages
  cite to `ema-pi-rybelsus-nl` or `ema-pi-wegovy-nl` was found: Rybelsus 4.1 (indication), 4.2 (lege maag,
  "aanbevolen wordt na een nuchtere periode van minstens 8 uur", "slok water (maximaal een half glas water,
  overeenkomend met 120 ml)", 30 minuten, "andere orale geneesmiddelen"), 4.3 (only hypersensitivity), 4.4
  (pancreatitis: "Bij verdenking op pancreatitis moet het gebruik van semaglutide worden gestaakt"; "2-4% van de
  patiënten zullen niet worden blootgesteld"), 4.6 (not in pregnancy or breastfeeding; stop 2 months before a
  planned pregnancy), 4.8 ("misselijkheid (zeer vaak), diarree (zeer vaak) en braken (vaak)", in clinical studies),
  4.9 (prolonged observation, half-life about 1 week, "geen specifiek antidotum"), 5.2 (day-to-day fluctuation,
  steady state 4-5 weeks, SNAC "gebaseerd op in-vitrogegegevens", CV about 100%, NEP, 3% in urine, "nog ongeveer
  5 weken"; switching "kan niet gemakkelijk worden voorspeld"). Wegovy 5.2 (half-life about 1 week, albumin binding
  and DPP-4, > 99%, NEP "geïdentificeerd", 3% in urine, "nog ongeveer 7 weken" after the 2,4 mg injection and after
  the tablet, tablets "ongeveer 1-2%", **"De absolute biologische beschikbaarheid van semaglutide bedroeg 89%"** and
  "Vergelijkbare blootstelling ... in de buik, dij of bovenarm"), 4.6 (stop 2 months before a planned pregnancy).
  The writer's note on the Dutch Rybelsus 5.2 "ongeveer 12%" is right: the English SmPC says "approximately 1-2%".
- **EU and Dutch status** against `research/nl/eu-status.md` (facts 2, 9, 11, 12; §5 items 4 and 7; the
  fact-check), `research/nl/status/semaglutide.yaml` and the registered ids: Rybelsus EU since 3 April 2020, Wegovy
  tablets by Commission decision of 14 July 2026, a central authorisation valid in the Netherlands (art. 13(1)),
  BPC-157, TB-500, KPV and Semax with no EU or Dutch authorisation. The EMA Foundayo page was fetched again today:
  status "Opinion", "Opinion adopted 15/10/2026", "Opinion status Positive", no Commission decision.
- **Lareb** against `research/nl/nl-help.md` facts 19 and 22 and conflict 5 (cite both Lareb pages and write "ook
  als je product niet van een apotheek komt").
- **Links:** every `/nl/` target exists; link texts compared with the targets' Dutch titles; no anchors used; no
  `/en/` link; no link to a US/UK/CA/AU/IE/NZ legal page.
- **Rules:** commerce words in titles, headings, Lead questions, fold and figure titles, labels and link texts
  (none); STYLE-NL §5.6 words (none; "We noemen geen doseringen." is the allowed policy line); "u" (none); no dose,
  schedule, reconstitution or seller hint; Belgium not needed on these pages; no help line or emergency number
  needed (no stop-now content).
- **Residue markers:** a scan of both pages with every `residue-ok` marker stripped finds 10 + 8 warn hits (FDA,
  "in de VS", "in het VK"), each one evidence or world context, each covered by its marker; no error or frame hit.

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| pharmacokinetics | description "… waarom veel peptiden nooit bij mensen zijn gemeten" | "… waarom veel niet-goedgekeurde peptiden nooit bij mensen zijn gemeten" (shortened to fit 170 characters) | science parity: English says "many unapproved peptides"; the Dutch made it all peptides | English page |
| pharmacokinetics | TL;DR 2 "De halfwaardetijd is ongeveer één week. Na het stoppen blijft het 5 tot 7 weken in het bloed." | "Na het stoppen nog ongeveer 5 tot 7 weken. De halfwaardetijd is ongeveer een week." | "about" was lost before 5 to 7 weeks; the answer to "how long" now comes first (B1) | English page; `fda-label-wegovy`, `ema-pi-wegovy-nl`, `ema-pi-rybelsus-nl` |
| pharmacokinetics | TL;DR 3 and body "stop minstens 2 maanden voor een geplande zwangerschap" | "… vóór een geplande zwangerschap" | "voor" can be read as "for" | Dutch spelling |
| pharmacokinetics | TL;DR 4 "De FDA vond … geen meting bij mensen" | "De Amerikaanse FDA vond … geen halfwaardetijd bij mensen" | English: "no half-life measured in people"; FDA explained for a B1 reader | English page; STYLE-NL §2.7 |
| pharmacokinetics | "Je meet het tegen een injectie direct in een ader, die telt als 100%." | "Het wordt vergeleken met een injectie direct in een ader: die telt als 100%." | calque ("meten tegen") | STYLE-NL §1.8 |
| pharmacokinetics | clearance "… van het medicijn wordt ontdaan" | "… wordt gezuiverd" | stiff word | STYLE-NL §1.6 |
| pharmacokinetics | "uitscheiding (excretie) is alleen het lichamelijk verwijderen" | "… is alleen het afvoeren uit het lichaam" | "lichamelijk" means "bodily", not "physical removal" | English page |
| pharmacokinetics | "Elke halfwaardetijd sluit de helft van het gat" (heading, caption, body) | "… dicht de helft van het gat" | Dutch idiom is "een gat dichten" | — |
| pharmacokinetics | ladder table "DPP-4 geblokkeerd op positie 8" | "Knipplek van DPP-4 op positie 8 geblokkeerd" | the cutting site is blocked, not the enzyme | `lau-2015-semaglutide-discovery`, English page |
| pharmacokinetics | "Dulaglutide koppelt twee GLP-1-achtige ketens aan …" | "In dulaglutide zijn twee GLP-1-achtige ketens gekoppeld aan …" | the molecule does not do the coupling | `ema-epar-trulicity` |
| pharmacokinetics | KeyNumber 89%: who "Amerikaanse productinformatie van Wegovy", source `fda-label-wegovy` | who "Amerikaanse en Europese productinformatie van Wegovy", source `fda-label-wegovy,ema-pi-wegovy-nl`; the same EU id added to the Compare cell "89%" | **wrong in the writer's notes** (open question 3): the Dutch Wegovy SmPC 5.2 does give "De absolute biologische beschikbaarheid van semaglutide bedroeg 89%" | `ema-pi-wegovy-nl` (read today) |
| pharmacokinetics | fold "Plek": "meldt de Amerikaanse productinformatie een vergelijkbare blootstelling …" | "melden de Amerikaanse en de Europese productinformatie …", with `ema-pi-wegovy-nl` | the Dutch SmPC says the same; the reader's own product information | `ema-pi-wegovy-nl` 5.2 |
| pharmacokinetics | heading "Veel peptiden zijn nooit bij mensen gemeten" | "Veel niet-goedgekeurde peptiden zijn nooit bij mensen gemeten" | science parity (English: "Many unapproved peptides have no human data"); no page links this heading's anchor (grep) | English page |
| pharmacokinetics | "Halfwaardetijden bij dieren gelden niet voor mensen." | "… zijn niet over te zetten naar mensen." | English "do not transfer"; same words as the BPC-157 fold | English page |
| pharmacokinetics | link texts "de kloof tussen dieronderzoek en mensen", "de risico's van het product zelf", "controles die je kunt laten doen" | "de kloof tussen dier en mens", "productrisico", "controles" | the Dutch targets' titles (`nav_title`) | the Dutch target files |
| pharmacokinetics | "Je kunt een bijwerking ook zelf melden bij Bijwerkingencentrum Lareb." (`lareb-bijwerkingen-melden`) | "Je kunt een bijwerking zelf melden bij Bijwerkingencentrum Lareb, ook als je product niet van een apotheek komt." (`lareb-bijwerkingen-melden,lareb-2021-illegal-medicines`) | the context is unapproved peptides; Lareb's FAQ names only medicines "die in Nederland verkrijgbaar zijn": nl-help conflict 5 says cite both and add this clause | nl-help.md facts 19, 22, conflict 5 |
| why-not-a-pill | TL;DR 4 q "Werkt de semaglutidetablet?" a "Ja, bij diabetes type 2, vaak met misselijkheid als bijwerking. Slechts 1 tot 2% komt in het bloed." | q "Werkt de semaglutidetablet bij diabetes type 2?" a "Ja, in studies daalde de bloedsuiker. Misselijkheid komt zeer vaak voor. Er komt maar 1 tot 2% binnen." | science parity (English: "in trials it lowered blood sugar": the effect and its evidence were lost); advertising test (the effect with its evidence and its main side effect, in the SmPC's frequency word: nausea is "zeer vaak"); 18 words | English page; `aroda-2019-pioneer-1`; `ema-pi-rybelsus-nl` 4.1, 4.8 |
| why-not-a-pill | diagram step 1 "Zuur kan de vorm van een eiwit ontvouwen." | "Zuur kan een eiwit uit zijn vorm brengen (ontvouwen)." | one unfolds a protein, not its shape | — |
| why-not-a-pill | "alleen stabiel bij een smalle zuurgraad"; "stopt boven pH 5" | "alleen stabiel binnen een klein bereik van zuurgraad"; "werkt niet meer boven pH 5" | English "a narrow range of acidity", "stops working" | English page |
| why-not-a-pill | "Een groot molecuul dat sterk door water wordt aangetrokken, komt moeilijk door …" | "Zowel een groot formaat als een sterke aantrekking tot water maakt het voor een peptide moeilijk om door … te komen." | science parity: English names two separate barriers ("both make it hard") | English page; `zhu-2021-oral-delivery` |
| why-not-a-pill | KeyNumber 89%: who and source US only | "Amerikaanse en Europese productinformatie van Wegovy", `fda-label-wegovy,ema-pi-wegovy-nl` | as on pharmacokinetics | `ema-pi-wegovy-nl` 5.2 |
| why-not-a-pill | "Een overzichtsartikel … schat de gewone biologische beschikbaarheid via de mond op ongeveer 1%, en wisselend." | "Volgens een overzichtsartikel over peptidemedicijnen om te slikken, met hulpstoffen voor de opname, is de biologische beschikbaarheid via de mond meestal ongeveer 1%, en die wisselt." | unidiomatic ("gewone", "en wisselend") | — |
| why-not-a-pill | "zegt dat SNAC semaglutide helpt opgenomen te worden" | "zegt dat SNAC de opname van semaglutide helpt" | unidiomatic | — |
| why-not-a-pill | intake rules: "vraagt de Europese productinformatie je de tablet … in te nemen … Je slikt hem … Daarna wacht je … andere tabletten inneemt" | "vraagt de Europese productinformatie mensen om … Ze slikken de tablet … Daarna wachten ze … andere medicijnen innemen" | the "je" form read as an instruction to the reader about a prescription medicine (CONTENT-GUIDE §2: neutral third person on mechanism pages; English: "asks people to"); SmPC says "andere orale geneesmiddelen", not only tablets | `ema-pi-rybelsus-nl` 4.2, `ema-pi-wegovy-nl` 4.2 |
| why-not-a-pill | "langere wachttijd voor het eten" | "… vóór het eten" | ambiguity | — |
| why-not-a-pill | SmPC paragraph: "De bijwerkingen die het vaakst worden gemeld …"; "moet je ermee stoppen"; "Je mag het niet gebruiken als je overgevoelig bent …, en ook niet tijdens de zwangerschap of als je borstvoeding geeft." | "In de studies waren de bijwerkingen die het vaakst werden gemeld …"; "moet het gebruik stoppen"; "Rybelsus mag niet worden gebruikt bij overgevoeligheid … (de contra-indicatie). Ook tijdens de zwangerschap en de borstvoeding mag het niet worden gebruikt." | SmPC 4.8 reports clinical studies; SmPC 4.4 addresses the prescriber ("moet het gebruik … worden gestaakt"), so not an instruction to the reader; keeps the contraindication apart from the 4.6 statements | `ema-pi-rybelsus-nl` 4.3, 4.4, 4.6, 4.8 |
| why-not-a-pill | Compare detail "Status gecontroleerd op 27 oktober 2026." | "Status in Nederland en de EU gecontroleerd op 27 oktober 2026." | the US/UK world-context row was checked by the English research (22 to 26 October), not today | the cited ids' `accessed` dates |
| why-not-a-pill | link texts "hoe signalen in het lichaam werken", "de risico's van het product zelf" (twice) | "hoe signalen werken", "productrisico" | the Dutch targets' titles | the Dutch target files |
| why-not-a-pill | Claim: "door klachten van maag en darmen stopten 10 tot 17 op de 100" | "door bijwerkingen van maag en darmen …" | English "side effects" | `wharton-2023-orforglipron-phase2`, English page |
| why-not-a-pill | Compare detail (BPC-157): "de beoordeling van de FDA uit 2026" | "… van de Amerikaanse medicijnautoriteit FDA uit 2026" | first mention of the FDA on the page | STYLE-NL §2.7 |
| why-not-a-pill | "In Nederland en de EU is Semax geen goedgekeurd medicijn" | "In Nederland is Semax geen goedgekeurd medicijn, en ook niet voor de hele EU" | national authorisations in other member states were not searched: never imply "in no EU country" | eu-status.md §5 item 7, fact 9 |

Validator after the changes: `npx tsx scripts/validate-content.ts --only pages/nl/basics/pharmacokinetics` and
`--only pages/nl/basics/why-not-a-pill`: 0 errors, 0 warnings each (also `--only pages/nl/basics/`: 0 and 0).
Residue: `npx tsx scripts/check-locale-residue.ts --only pages/nl/basics/<page> --details`: 0 error/frame, 0 warn
hits for each page.

### The writer's open questions, after the check

- **3 (89%)**: resolved. The Dutch Wegovy SmPC 5.2 gives 89%; both pages now cite it next to the US label.
- **4 (5 tot 7 weken)**: consistent with the sources (Rybelsus about 5 weeks, Wegovy about 7 weeks, US label 5 to 7);
  the TL;DR now keeps "ongeveer". Fine to keep.
- **1 (TL;DR 4)**: rewritten (above); the reviewer still decides whether 18 words with one side effect are balanced
  enough, with the full SmPC indication, side effects, the pancreatitis rule and the contraindication in the fold.
- **2, 6, 7** stay open for the reviewer as the writer wrote them; for 2 the rules are now described in the third
  person ("vraagt … mensen"), as English does.

### Remaining concerns for the reviewer

1. **Advertising test, orforglipron (no handelsvergunning in the Netherlands):** the fold gives the phase 2
   weight-change range (−9,4% to −14,7% against −2,3%) with its claim level, design, funding, the 10 to 17 in 100 who
   stopped, and the boxed warning in the next bullet; the Compare row "Al goedgekeurd buiten de EU?" names the US
   and UK approvals (world context, marked). Both as on English. Legal reviewer: is the weight figure acceptable on a
   Dutch page for a medicine the Commission has not yet authorised?
2. **"veelbelovend" left out** (pharmacokinetics, last sentence): English says "a promising animal result"; the Dutch
   says "een resultaat bij dieren". Neutral, but a little weaker than English's "uncertainty in both directions"
   (CONTENT-GUIDE §1). Kept as the writer chose it.
3. **Wegovy tablets named without their indication** (Compare row, KeyNumber): no effect is claimed there, so no
   indication was added; if the reviewer reads the brief as "every EU product named gets its SmPC indication", add
   "(gewichtsbeheersing bij volwassenen)" from `ema-pi-wegovy-nl` 4.1.
4. **`ema-medicines-json`** (registry note names only the BPC-157 searches of 20 October) is cited for "not
   authorised EU-wide" of TB-500, KPV and Semax, as the fact-checked eu-status research does; the note should be
   updated in the merge (writer's sweep item, kept).
5. **`last_reviewed: 2026-10-24`** kept as on English (brief); the Dutch status facts carry their own date.

### For the final sweep (added by the check)

- `src/data/sources/nl-research-eu-status.yaml`, `ema-pi-wegovy-nl`: its note does not mention 5.2 "De absolute
  biologische beschikbaarheid van semaglutide bedroeg 89%" and "Vergelijkbare blootstelling ... in de buik, dij of
  bovenarm", which both basics pages now cite it for (read 27 October 2026).
- `src/data/sources/safety-a.yaml`, `lareb-bijwerkingen-melden` (`accessed: 2026-10-20`) and
  `src/data/sources/safety-b.yaml`, `lareb-2021-illegal-medicines` (`accessed: 2026-10-22`): re-read by the nl-help
  research on 27 October 2026; their owners may set `accessed: 2026-10-27`.
