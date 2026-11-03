# Notes: group history-a (Dutch site, 27 October 2026)

Pages: `src/content/pages/nl/history/index.mdx` (translated), `src/content/pages/nl/history/timeline.mdx`
(translated), `src/content/pages/nl/history/how-we-got-here.mdx` (adapted). Extra task: 11 new timeline events in
`src/data/timeline.yaml` with Dutch text in `src/i18n/nl/timeline.json`. New glossary file
`src/i18n/nl/glossary/nl-history-a.json` (4 entries). No new source file: every source was already registered
(`src/data/sources/nl-history-a.yaml` was not needed). No host added to the allowlist.

Validator (`--only pages/nl/history/`, `--only timeline`, `--only nl-history-a`): 0 errors, 0 warnings.
Residue check (same filters, `--details`): 0 error, 0 frame, 0 warn hits.

Checked myself today (27 October 2026), beyond the research files: the 2003 explanatory memorandum to the
Geneesmiddelenwet (PDF, pdftotext: "Sinds de inwerkingtreding van de WOG in 1963 …", "Enkele andere Europese landen
waren Nederland daarin reeds voorgegaan", "Het CBG bestaat al sinds 1963", and §4.3 "De criteria voor toelating …
waren een bewezen therapeutische werking, veiligheid bij normaal gebruik en farmaceutische kwaliteit. In essentie worden
deze criteria tot op heden nog steeds toegepast"); Directive 65/65/EEC through CELLAR (art. 5 refusal grounds, art. 7
120 days, art. 10 five years renewable by five, art. 22 eighteen months, the recitals); the EMA page on conditional
marketing authorisation ("eligible if they are intended for treating, preventing or diagnosing seriously debilitating or
life-threatening diseases. This includes orphan medicines … a public health emergency"); the CBG Ozempic shortage page
(update of 2 December 2024 quoted; "(off-label) gebruikt … als afslankmiddel"; "Het is niet duidelijk of het
off-labelgebruik het tekort aan Ozempic veroorzaakt"); the CBG NAION news of 6 June 2025 ("geneesmiddelenbewakingscomité
PRAC, onderdeel van het EMA"; "NAION is een zeldzame ziekte waarbij er minder bloed naar de oogzenuw gaat").

## history/index — translated

- **Kept:** structure (Lead, section-map diagram, four paragraphs, `## De pagina’s over geschiedenis`, `<PageList />`),
  every science cite (`fda-history-100-years-insulin`, `vargesson-2015-thalidomide`, `us-pl-87-781-drug-amendments-1962`).
- **Came back from 23 October:** the EU sentence (Directive 65/65, `eu-directive-65-65`) and the authorised-medicine
  sentence cited to EU law (`eu-directive-2001-83-original`).
- **Rewritten for the Netherlands:** "the UK, Canada and Australia began to collect reports … licence laws" became the
  EEC licence of 1965 and the Dutch registration duty of 1963 (WOG 1958); the unlicensed-product sentence now rests on
  the IGJ and the EMA/HMA instead of the MHRA, Health Canada and the TGA.
- **Dropped citations** (all US/UK/CA/AU framing of the readers' own countries):
  - `fda-drugsatfda-ozempic` (US approval as the example) → `ema-epar-ozempic`.
  - `uk-mhra-2014-yellow-card-50`, `ca-hc-canada-vigilance`, `au-tga-mcewen-2007-history`, `uk-medicines-act-1968-enacted`,
    `au-tg-act-1989-asmade-details` (the English readers' countries' responses) → `eu-directive-65-65`, `nl-wog-1958`,
    `nl-mvt-2003-geneesmiddelenwet`.
  - `fda-2006-promoting-safe-effective-drugs`, `uk-hmr-2012-reg-58`, `ca-fdr-c08-004-notice-of-compliance`,
    `au-tg-act-artg-registration-listing` (what approval checks, per English country) → `eu-directive-2001-83-original`,
    `nl-mvt-2003-geneesmiddelenwet`.
  - `mhra-2026-01-seizures-2025`, `ca-hc-2026-04-think-twice-peptides`, `au-tga-2026-06-peptide-compliance-priority`
    (enforcement in the English readers' countries) → `igj-online-medicijnen`, `igj-2025-illegal-online-medicines`,
    `ema-hma-2025-09-illegal-glp1` (neutral official sources; no seller named).

## history/timeline — translated

- **Kept:** structure (Lead, two figures, two folds, `## De tijdlijn` with `<Timeline />`, `## Patronen die opvallen`
  with its figure and fold), the insulin/80-medicines facts, the US 1938/1962/1992 history (marked), and the FDA PCAC
  vote in full canonical framing (CONTENT-GUIDE §1, five points; STYLE-NL §5.4 wording; point 5: "Geen van deze
  peptiden is een goedgekeurd medicijn in Nederland of de EU. … Een Amerikaanse lijst verandert niets buiten de VS.").
- **The `<Timeline />` component** shows only global, NL, EU and WADA events on Dutch (40 events with the 11 added below),
  so both figures now give examples that the Dutch timeline actually shows: the 1963 Dutch registration, the 1965 EEC
  licence, the EU approvals (exenatide 2006, semaglutide 2018, tirzepatide 2022), the falsified Ozempic pens (2023) and
  the Ozempic shortage (over in the Netherlands on 2 December 2024). The PCAC vote itself is a US event and not on the
  Dutch timeline: the fold says so.
- **Came back from 23 October:** the European Commission's thalidomide-impetus sentence (`ec-legal-framework-medicines`),
  conditional authorisation 2006 and PRIME 2016 (`ema-conditional-marketing-authorisation`, `ema-prime`), the EU date
  rule in "Zo lees je de datums" (`ema-epar-ozempic`), the EMA falsified-Ozempic alert, the PCAC point 5 for the EU and
  the Netherlands.
- **Rewritten for the Netherlands:** the "Demand, then unlicensed supply" paragraph (US compounding, UK seizures,
  Health Canada, TGA) became the EU/NL story: the EMA shortage listing from October 2022, the CBG's account (demand,
  off-label use for weight loss, cause unclear), the end of the Dutch shortage, the EMA and IGJ falsified-pen alerts of
  October 2023, the EMA/HMA and IGJ/CBG warnings of 3 September 2025. The UK EAMS sentence became the EU's conditional
  authorisation (2006) and PRIME (2016).
- **Dropped citations:**
  - Figure "four threads": `uk-hansard-1963-04-04-safety-of-drugs`, `fda-drugsatfda-humulin-r`, `fda-drugsatfda-byetta`,
    `fda-drugsatfda-ozempic`, `ca-sbd-ozempic`, `fda-drugsatfda-mounjaro`, `fda-glp1-compounding-policy`,
    `mhra-2023-fake-weight-loss-pens` (examples of events the Dutch timeline does not show) → `nl-mvt-2003-geneesmiddelenwet`,
    `eu-directive-65-65`, `ema-epar-byetta`, `ema-epar-ozempic`, `ema-epar-mounjaro`, `ema-2023-falsified-ozempic`,
    `cbg-ozempic-shortage`. (`us-pl-87-781-drug-amendments-1962` left this cite line but stays in the intro.)
  - Intro: `uk-medicines-act-1968-enacted`, `ca-hc-canada-vigilance`, `au-tg-act-1989-asmade-details` →
    `nl-mvt-2003-geneesmiddelenwet`, `eu-directive-65-65`, `nl-geneesmiddelenwet-2007-version`.
  - "Zo lees je de datums": `fda-drugsatfda-ozempic`, `ca-sbd-ozempic`, `au-tga-pmr-search-status-a-2026-10-24`,
    `uk-mhra-ma-granted-2021` (US/CA/AU/UK date rules) → `ema-epar-ozempic`, plus `ema-epar-kayshild`,
    `ema-wegovy-procedural-steps` (new product/new form rule) and `nl-mvt-2003-geneesmiddelenwet` (the 1963 day unknown).
  - Figure "cause and effect" and its fold: `uk-hansard-1963-04-04-safety-of-drugs`, `uk-mhra-2014-yellow-card-50`,
    `au-tga-mcewen-2007-history`, `ca-hc-canada-vigilance` (UK/AU committees and reporting) →
    `ec-legal-framework-medicines`, `eu-directive-65-65`, `nl-wog-1958`, `nl-mvt-2003-geneesmiddelenwet`;
    `uk-hmr-2012-reg-167c` (UK EAMS) → `ema-conditional-marketing-authorisation`, `ema-prime`.
  - "Demand" paragraph: `fda-glp1-compounding-policy` (US compounding as a route: brief, "What leaves"),
    `mhra-2023-fake-weight-loss-pens`, `mhra-2026-01-seizures-2025`, `ca-hc-2026-04-think-twice-peptides`,
    `au-tga-2026-06-peptide-compliance-priority`, `au-tga-2026-09-retatrutide-counterfeit` → `ema-shortage-ozempic`,
    `cbg-ozempic-shortage`, `ema-2023-falsified-ozempic`, `igj-2023-falsified-ozempic`, `ema-hma-2025-09-illegal-glp1`,
    `igj-2025-illegal-online-medicines`.
  - PCAC point 5: `uk-mhra-substance-index-status-c-2026-10-23`, `mhra-products-search-status-d-2026-10-23`,
    `ca-dpd-search-status-c-2026-10-23`, `ca-dpd-search-canada-legal-2026-10-23`, `au-artg-search-status-c-2026-10-23`,
    `au-artg-search-status-d-2026-10-23` (the English countries' status searches) → `ema-medicines-search`,
    `ema-medicines-json`, `cbg-gib-search-status-2026-10-27` (the EU and NL rows' own sources); `nl-gmw-art-40-handelsvergunning`
    added to "changes nothing outside the US". The four FDA briefing ids stay.

## history/how-we-got-here — adapted

- **Kept (history stays, brief "What stays"):** every US section (1937/1938, thalidomide, Kelsey, 1962 Compare, the
  three folds), the UK, Canada and Australia section with its figure and three folds (as law history, marked), the
  costs section (Darrow, Wong, Wouters, DiMasi, Downing, Andersson, Verbaanderd, the EMA pilot), the cost-of-speed fold
  (Gyawali, Davis, Darrow, the EMA ten-year review), the "too strict" figure. Every science cite and number is there,
  in Dutch number format.
- **Came back from 23 October (re-checked against research/nl/ and the primary texts):**
  - Fold "Nederland in 1958: een register voor verpakte medicijnen" (`nl-wog-1958`), **corrected**: the saved "We could
    not confirm when the register started to work" is now "the registration duty took effect in 1963; the day is not
    known" (nl-care fact 76 and §2 item 13; `nl-mvt-2003-geneesmiddelenwet`, dated 10 December 2003 per the fact-check),
    plus "Het CBG bestaat sinds 1963" and "enkele andere Europese landen hadden zo’n regel al eerder" (same memorandum).
  - Section `## Het antwoord van Europa` (Lead, TimeStrip of the NL and EU laws and the EMA, the Commission's
    thalidomide sentence) and its three folds: "Wat richtlijn 65/65 eiste", "De Nederlandse lijn: van 1958 tot nu"
    (Geneesmiddelenwet of 8 February 2007 in force 1 July 2007, art. 132; art. 40), "Eén geneesmiddelenbureau voor
    Europa" (Regulation 2309/93, 1 January 1995, Regulation 726/2004, semaglutide and tirzepatide EU-wide; new: the EMA
    in Amsterdam since 2019, `ema-history`). The TimeStrip now shows the WOG as adopted 1958 / registration duty
    1963–2007. Placed before the UK/CA/AU section (the reader's own region first).
  - The three-checks figure got a column "Eerst verplicht: Nederland en de EEG" (NL 1963 for harm and effect, EEC 1965
    for all three; NL is left out of the quality row, because the WOG test in `nl-wog-1958` names effect and harm only).
  - The faster-routes Compare is the 23 October one (conditional authorisation EU, accelerated approval US,
    compassionate use EU/NL, artsenverklaring NL), re-checked and on English's four questions; the fold "De wegen in
    meer detail" has the 23 October EU/NL bullets, updated (IGJ "ontheffing" since 9 September 2025; 8 weeks, about 4;
    CUP approval now indefinite under MEB 49, `cbg-2024-cup-nieuw-beleid`, `cbg-cup-vragen-en-antwoorden`).
  - `further_reading: [ec-pharma-legislation-timeline]` came back.
- **New Dutch/EU additions (one sentence each):** EU and Dutch consent rules in the consent fold
  (`eu-regulation-536-2014`, `nl-wmo-art-2-6-7`); the Lareb reporting sentence (STYLE-NL §5.1 fixed phrase,
  `cbg-bijwerking-melden`) where English had the Yellow Card's "anyone can still report"; the EU pack safety features
  (unique code and seal since 9 February 2019, `eu-regulation-2016-161`, `cbg-fmd-vervalsing-melden`) in the
  product-not-name fold.
- **Rewritten:** the UK fold no longer names the UK reporting scheme (the residue config makes its name an `error` on
  Dutch: it is another country's reporting route); it says "een systeem om vermoede bijwerkingen te melden". The Canada
  fold and figure no longer name Canada's reporting programme (same reason). "What the caution costs" became "De
  keerzijde van voorzichtigheid" (STYLE-NL §7: no "kost/kosten" in headings, Lead questions, TL;DR questions or figure
  titles; the KeyNumber title and label avoid them too).
- **Dropped citations:**
  - Intro: `ca-food-and-drug-regulations` (Canada as one of the readers' approval frames; dropped from the page; the
    other three country ids of that sentence stay in the UK/CA/AU section) → `eu-directive-2001-83-original`,
    `nl-gmw-art-40-handelsvergunning`, `nl-mvt-2003-geneesmiddelenwet`.
  - UK fold: `mhra-yellow-card` ("anyone can still report this way": the UK reader's reporting route) → the Lareb
    sentence with `cbg-bijwerking-melden` in "Wat de controles je geven".
  - Faster-routes Compare: `fda-expanded-access`, `fda-expanded-access-patients`, `uk-hmr-2012-reg-167c`,
    `mhra-eams-overview`, `au-tga-access-unapproved-goods-practitioners`, `au-tga-sas-individual-patients` (US expanded
    access, UK EAMS and the Australian SAS as routes: brief, "What leaves"; "Special Access Scheme" and "Authorised
    Prescriber" are `error` patterns on Dutch) → `ema-conditional-marketing-authorisation`, `ema-compassionate-use`,
    `cbg-compassionate-use-criteria`, `cbg-cup-vragen-en-antwoorden`, `igj-leveren-op-artsenverklaring`,
    `igj-qa-zonder-handelsvergunning`.
  - Fold "De wegen in meer detail": `usc-21-360bbb-0a`, `fda-right-to-try` (Right to Try), `au-tg-regs-reg-12a-sas-category-a`,
    `au-tg-act-s19-access-approvals`, `au-tga-authorised-prescriber` (SAS and Authorised Prescribers), plus the expanded
    access and EAMS ids above → `ema-accelerated-assessment`, `ema-prime`, `ema-conditional-marketing-authorisation`,
    `eu-directive-2001-83-original`, `ema-epar-scenesse`, `ema-compassionate-use`, `cbg-*`, `igj-leveren-op-artsenverklaring`;
    one US bullet (treatment use 1987, accelerated approval 1992) stays as history.
  - Fold "Waarom deze wegen …": `ctgov-expanded-access-search-2026-10-23` (US expanded-access records),
    `mhra-eams-scientific-opinions`, `mhra-eams-expired-opinions`, `au-tga-peptides-health-practitioners` →
    `ema-medicines-json`, `ema-under-evaluation-2026-10`, `cbg-compassionate-use-list` (checked 27 October 2026, none of the
    site's compounds; nl-care fact 39), `igj-qa-zonder-handelsvergunning`.
  - "Wat de controles je geven": `uk-mhra-2014-yellow-card-50`, `ca-hc-canada-vigilance`, `au-tga-mcewen-2007-history`
    left that figure's and that paragraph's cite lines (reporting in the readers' countries) → `eu-directive-65-65`,
    `ema-history`, `cbg-bijwerking-melden`; all three stay on the page in the UK/CA/AU section.

## UNRESOLVED points and how the pages handle them

- **The day in 1963 the WOG registration duty took effect** (nl-care §5 item 8, fact-check): written as unknown on
  how-we-got-here ("hebben we niet gevonden"), in the timeline's date fold, and in the new event's text ("is niet
  bekend"); the event `nl-wog-registration-1963` has `year: 1963` and no `date`.
- **Whether an artsenverklaring could work for a substance authorised nowhere, without IB/IMPD or GMP proof**
  (nl-care fact-check): written as "weten we niet" in the fold "Waarom deze wegen …".
- **Parliament's second-reading deadline on the EU package** (eu-status fact-check: no deadline should be given): the
  event `eu-council-pharma-position` says only "Nu is het Europees Parlement aan zet, in een tweede lezing"; no date.
- **"In voorraad hebben" for own-use vials** (merge §9): avoided; the Geneesmiddelenwet fold says art. 40 forbids "de
  handel" in an unauthorised medicine, not the list of verbs.
- **The EMA's 2028 expectation vs the Council's 24 months** (eu-status §4 conflict 1): the event text uses the Council
  text ("24 maanden na de inwerkingtreding"), not 2028.

## New timeline events (extra task)

All 11 from merge.md §7, ids as proposed, inserted in date order with a comment each; no existing event changed
(`git diff` shows 97 added lines, none removed). Dates re-checked against research/nl/ (eu-status §1 facts 2, 4, 12,
14, 19, 26–28, 35, 36 and the fact-check; nl-care fact 76): 2012-06-21, 2013-01-02, 2019-02-09, 2022-01-31,
2025-06-06, 2025-12-11, 2026-03-26, 2026-07-14, 2026-09-28, 2024-12-02, 1963 (year only). Sources: the merge's, plus
`cbg-fmd-vervalsing-melden` (safety features, Dutch reporting duty), `cbg-2025-06-naion-semaglutide` (Dutch NAION
wording), `ema-pi-kayshild-nl` and `ema-pi-wegovy-nl` (the Dutch SmPC indications), `council-st-7106-2026-rev2` and
`council-st-7105-2026-rev2` on the agreement event (what the acts repeal), `ep-oeil-2023-0132-cod` on the Council event
(second reading). Categories as proposed (the tesamorelin withdrawal is `approval`, as the merge proposed; its title says
"aanvraag … ingetrokken"). Advertising test: Kayshild and the Wegovy tablets carry the Dutch SmPC indication, "alleen op
recept", conditional/extra monitoring for Kayshild; the Ozempic shortage text presents weight loss as off-label; NAION
is a risk with the CBG's advice; no event names an effect.

## Open questions for the reviewers

1. (Legal) The Compare row "Alleen bij ernstige ziekte?" answers "Niet per se" for the artsenverklaring, on the IGJ's
   wording (medical necessity, no adequate authorised alternative, "uiterste gevallen", "terughoudend"). Is that the
   right reading of Regeling Gnw art. 3.17?
2. (Legal) "Het CBG bestaat ook sinds 1963" follows the memorandum ("Het CBG bestaat al sinds 1963"), while the 1958
   act names the "College ter beoordeling van verpakte geneesmiddelen". Is it right to call that college "het CBG"?
3. (Medical/editorial) The how-we-got-here page keeps the UK, Canada and Australia section in full as law history. The
   owner may prefer it shorter on the Dutch site; the brief keeps "other law history where English has it".
4. (Editorial) `last_reviewed` is 2026-10-27 on all three pages (the Dutch facts were checked today); English has
   2026-10-24. Change if "as on English" was meant literally.
5. (Medical) Lead and TL;DR wording "veiligheidstests doorstond", "moest … laten zien dat een nieuw medicijn veilig was":
   "veilig" is used only for what the 1938 law required, never as a claim about a compound.

## Style terms (STYLE-NL lacks these; the word I used)

| English | Dutch used | Note |
|---|---|---|
| explanatory memorandum | memorie van toelichting | glossary `memorie-van-toelichting` (new) |
| registration duty (WOG) | registratieplicht | the memorandum's "registratie (= handelsvergunning)" |
| proprietary medicinal product | kant-en-klaar medicijn (“farmaceutische specialiteiten”) | the Dutch term of Directive 65/65 as the memorandum writes it |
| royal decree | een besluit van de regering (een koninklijk besluit) | explained inline, no glossary entry (Belgium uses the same term) |
| user fees | user fees | as the existing glossary entry `user-fee` |
| accelerated approval | accelerated approval | as the existing glossary entry; "versnelde beoordeling" is the EU's accelerated assessment |
| expert committee | deskundigencommissie | |
| the European Economic Community | de Europese Economische Gemeenschap (EEG) | no glossary alias "EEG" (it also means the brain test) |
| caution has costs (heading) | De keerzijde van voorzichtigheid | STYLE §7 bans "kost/kosten" in headings |
| drug lag | drug lag | as the existing glossary entry |
| case for reform (link text) | ons standpunt over hervorming | STYLE §2.1 |

## For the final sweep (files I do not own)

1. `src/i18n/nl/timeline.json`, existing entries `nl-wog-1958` and `nl-geneesmiddelenwet-2007` (not changed: "never
   change an existing event"): they write "Wet op de Geneesmiddelenvoorziening"; STYLE-NL §4.2 (capital on the first
   word only) and the act's own short title give "Wet op de geneesmiddelenvoorziening". `nl-wog-1958` could also point
   to the new event: "De registratieplicht ging in 1963 in."
2. `src/data/sources/about.yaml`, `ema-conditional-marketing-authorisation`: add to the note the scope read today
   ("seriously debilitating or life-threatening diseases … orphan medicines … a public health emergency") and
   `accessed: 2026-10-27`; how-we-got-here cites it for "Alleen bij ernstige ziekte? Ja".
3. `src/data/sources/nl-research-nl-care.yaml`, `nl-mvt-2003-geneesmiddelenwet` (merge owner): add the §4.3 sentence on
   the criteria ("bewezen therapeutische werking, veiligheid bij normaal gebruik en farmaceutische kwaliteit …
   tot op heden nog steeds toegepast") and "Het CBG bestaat al sinds 1963" (§ on chapter 2); history/index and
   how-we-got-here cite it for these.
4. `src/data/sources/history.yaml`, `eu-directive-65-65`: add art. 22 (eighteen months to comply) and "renewed for
   five-year periods" (art. 10) to the note (read through CELLAR today); `nl-wog-1958`: the nl-care note (1963 from the
   memorandum) is still pending there (merge §9).
5. `src/data/heroes.yaml`: `history/timeline` uses `fda-lab-1960s` (a US lab) on Dutch too; optional `{ default:
   fda-lab-1960s, nl: <a European archive photo> }` if one is registered. No change needed for validity.
6. Already listed by the merge and relevant here: `ema-under-evaluation-2026-10` and `ema-medicines-json` notes are
   narrower than what the EU rows (and these pages) cite them for; `eu-regulation-726-2004` note lacks art. 13(1).

## Check (independent, 27 October 2026)

Independent fact-check and edit of the three pages, the 11 new timeline events (`src/data/timeline.yaml`, unchanged by
me) and their Dutch text (`src/i18n/nl/timeline.json`), and `src/i18n/nl/glossary/nl-history-a.json` (unchanged). Read
first: the brief (with "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1–§13, research/nl/nl-care.md (§M facts 75–77 and
the fact-check), nl-law.md, eu-status.md (§B–§E, §4, the fact-check), merge.md §6–§7, MANIFEST.md and
MANIFEST-about-history-en.md, the 23 October snapshot of how-we-got-here, and the current English pages.

**Fetched today, with what they say:** Directive 65/65/EEC through CELLAR (art. 3; art. 4(8) "physico-chemical,
biological or microbiological tests; pharmacological and toxicological tests; clinical trials"; art. 5; art. 7 "within
120 days … extended for a further ninety days"; art. 10 "valid for five years and shall be renewed for five-year
periods"; art. 22 "within eighteen months of its notification"); the CBG Ozempic page ("Het tekort is ontstaan door een
snel gestegen vraag", "Het is niet duidelijk of het off-labelgebruik het tekort aan Ozempic veroorzaakt", "Ozempic is
alléén goedgekeurd voor gebruik bij suikerziekte (diabetes type 2)", the update of 2 December 2024 verbatim); the EMA page
on conditional marketing authorisation ("eligible if they are intended for treating, preventing or diagnosing seriously
debilitating or life-threatening diseases. This includes orphan medicines … a public health emergency"; "valid for one
year and can be renewed annually"; the ten-year review "can help speed up patient access"); the CBG NAION news of
6 June 2025 ("‘Zeer zeldzaam’ betekent dat de bijwerking voor kan komen bij 1 op de 10.000 mensen"; the "contact opnemen
met hun arts … moet de behandeling gestopt worden" sentence); the CBG FMD page ("Vanaf 9 februari 2019 … receptplichtige
medicijnen"; the 24-hour IGJ report for pharmacists, wholesalers and manufacturers). Every other fact was checked against
research/nl/ (the fact-checks win) and the registry notes of the cited ids. A side check: the Verdict component prints
the word itself (`src/components/mdx/Verdict.astro`, `src/i18n/nl/figures.json`: "Ja", "Nee").

### Changes

| Page / file | Before | After | Why | Source |
|---|---|---|---|---|
| history/index | "In de EEG moest elk kant-en-klaar medicijn vanaf 1965 eerst een handelsvergunning hebben." | "In 1965 besloot de EEG dat elk kant-en-klaar medicijn eerst een handelsvergunning (een goedkeuring als medicijn) moest hebben." | The directive was adopted in 1965 with 18 months to transpose, so "vanaf 1965" overstated; B1 term explained on first use (STYLE §1 rule 7) | `eu-directive-65-65` (art. 22, CELLAR) |
| history/index, history/timeline | "mocht een medicijn hier vanaf 1963 alleen met een registratie op de markt komen" | "een nieuw medicijn" | The memorandum: "voor de eerste keer in het handelsverkeer te brengen" | `nl-mvt-2003-geneesmiddelenwet` |
| history/index | "Eind jaren 1950" | "Eind jaren vijftig" | Dutch idiom | — |
| history/index | link text "de risico’s van een product" | "productrisico" (and "alarmsignalen") | Link text names the Dutch target page (its title) | `src/content/pages/nl/safety/product-risk.mdx` |
| history/timeline, figure "vier draden" | "Exenatide (2006), semaglutide (2018) en tirzepatide (2022), alle drie goedgekeurd in de EU" | "…: de jaren waarin de EU ze goedkeurde" | Byetta's EU authorisation was withdrawn on 1 January 2026; the old cell read as a present status | `ema-epar-byetta` |
| history/timeline, intro | "Vanaf 1965 eiste de EEG in alle lidstaten een handelsvergunning." | "In 1965 besloot de EEG dat alle lidstaten een handelsvergunning moesten eisen." | As in index | `eu-directive-65-65` |
| history/timeline, fold "Zo lees je de datums" | "…en de Nederlandse en Europese gebeurtenissen opnieuw op 27 oktober 2026." | "De Nederlandse en Europese gebeurtenissen die er op 27 oktober 2026 bij kwamen, en een deel van de oudere, controleerden we die dag." | Overclaim: not every older EU event was re-checked today (merge.md §7 lists seven) | merge.md §7 |
| history/timeline, figure "oorzaak en gevolg", row 2 | "Bewijs dat een medicijn werkt (VS, 1962); een handelsvergunning … (EEG, 1965)" | adds "deskundigencommissies en meldingen van bijwerkingen (VK en Australië, 1963–1964)", marked history; cite line + `uk-hansard-1963-04-04-safety-of-drugs`, `uk-mhra-2014-yellow-card-50`, `au-tga-mcewen-2007-history` | Science/history parity: English has it, and law history stays where English has it (brief, "What stays"); it is not reader framing (no route, reporting scheme or help service is named) | the three ids |
| history/timeline, fold "Eerst schade, dan regels" | the UK/AU/CA response left out | "Ook andere landen reageerden op thalidomide. Het VK en Australië stelden in 1963 deskundigencommissies in … Het VK, Australië en Canada begonnen in 1964 en 1965 meldingen van vermoede bijwerkingen te verzamelen." (marked history) | Same; the writer's "dropped" list for this fold is undone (those four ids are cited again) | `uk-hansard-1963-04-04-safety-of-drugs`, `au-tga-mcewen-2007-history`, `uk-mhra-2014-yellow-card-50`, `ca-hc-canada-vigilance` |
| history/timeline, same fold | "nadat Elixir of Sulfanilamide in 1937 107 mensen had gedood"; "de jaren 1980" | "kwam na de dood van 107 mensen, onder wie veel kinderen, door Elixir of Sulfanilamide in 1937"; "de jaren tachtig" | Two numbers side by side; Dutch idiom | — |
| history/timeline, fold "Eerst vraag" | "het EMA en de Europese medicijnautoriteiten" | "het EMA en de hoofden van de nationale medicijnautoriteiten in Europa (HMA)" | Who issued the warning | `ema-hma-2025-09-illegal-glp1` |
| history/how-we-got-here, TL;DR 2 | "… in studies met een controlegroep werkt, en veiligheidstests doorstond." | "… werkt en veiligheidstests heeft doorstaan." | Tense agreement | — |
| history/how-we-got-here, TL;DR 4 | "Nee. Studies testen één product. Een product van buiten de legale keten valt niet onder dat bewijs." | "Nee. Studies testen één product, niet elk product met die naam van buiten de legale keten." | English "One with that name" was lost; my first fix made the validator warn (19 words; TL;DR 122 words); now 16 words and the TL;DR is under 120 | English page |
| history/how-we-got-here, TL;DR 6 | "Geen enkele is een kortere weg …" | "Geen ervan is een kortere weg …" | Dutch grammar | — |
| history/how-we-got-here, Kelsey fold | "meer dan twaalf kinderen" | "meer dan 12 kinderen" | STYLE §3 (digits from 2) | — |
| history/how-we-got-here, Compare 1962 | "Niet in de geneesmiddelenwet" | "Niet in de Amerikaanse wet op medicijnen van toen" | On the Dutch site "Geneesmiddelenwet" names the Dutch act | — |
| history/how-we-got-here | "… ook klinische, door deskundigen." | "… door deskundigen met de juiste opleiding." | English "qualified experts" | `us-pl-87-781-drug-amendments-1962` |
| history/how-we-got-here, Lead "Hoe reageerde Europa?" | "Vanaf 1965 moest een kant-en-klaar medicijn eerst een handelsvergunning krijgen …" | "In 1965 besloot de EEG: een kant-en-klaar medicijn moet eerst een handelsvergunning krijgen, op basis van testresultaten." | As in index | `eu-directive-65-65` |
| history/how-we-got-here, fold "Wat richtlijn 65/65 eiste" | "chemische en microbiologische tests"; "binnen 120 dagen" | "fysisch-chemische, biologische of microbiologische tests"; "binnen 120 dagen, in uitzonderlijke gevallen 90 dagen later" | The directive's art. 4(8) and art. 7 (the 23 October text had shortened them) | `eu-directive-65-65` (CELLAR) |
| history/how-we-got-here, fold "Waarom het bewijs bij een product hoort" | "In de legale keten hebben dozen met receptmedicijnen sinds 9 februari 2019 …" | "In Nederland hebben dozen met receptmedicijnen in de legale keten sinds 9 februari 2019 …" | Art. 50 let Belgium, Greece and Italy apply the rules as late as 9 February 2025 | `eu-regulation-2016-161`, `cbg-fmd-vervalsing-melden` |
| history/how-we-got-here, KeyNumber title | "Volgens één telling vraagt een nieuw medicijn ongeveer een miljard dollar" | "Volgens één telling is er per nieuw medicijn ongeveer een miljard dollar nodig" | Unidiomatic "vraagt" (the commerce word "kost" stays out, STYLE §7) | `wouters-2020-rd-investment` |
| history/how-we-got-here, fold "Stoffen die niemand laat testen" | "een proef" | "een proefproject" | "pilot"; "proef" reads as an experiment | `ema-2021-repurposing-pilot` |
| history/how-we-got-here, Compare "snelle wegen" (all 16 cells) | "<Verdict is="yes" /> Ja, …", "<Verdict is="no" /> Nee, …" | the cell text without the repeated "Ja,"/"Nee," | The component prints the word, so the page showed "Ja Ja, …" and "Nee Nee, …" | `Verdict.astro`, `figures.json` |
| same Compare, artsenverklaring, row 1 | "Nee, het is niet beoordeeld op werking, veiligheid en kwaliteit" | "Het is in Nederland niet goedgekeurd, en niet getoetst op werking, veiligheid en kwaliteit" | The declaration's wording ("niet is getoetst aan criteria …"); the medicine may be authorised abroad | `igj-leveren-op-artsenverklaring`; nl-care fact 22 |
| same Compare, artsenverklaring, row 3 | "met de productinformatie of een onderzoekersdossier en een GMP-certificaat" | "met de productinformatie; heeft het middel nergens een handelsvergunning, dan met het dossier voor onderzoekers (Investigator’s Brochure of IMPD) en een GMP-certificaat" | The GMP certificate is not always needed; "onderzoekersdossier" is not the IGJ's term | `igj-qa-zonder-handelsvergunning`; nl-care fact 24 |
| same Compare, conditional MA, row 4 | "… weesgeneesmiddelen en noodsituaties …" | "… levensbedreigende ziekten, ook weesgeneesmiddelen, en voor noodsituaties voor de volksgezondheid" | The EMA page: "This includes orphan medicines" (a subset, not a separate group) | `ema-conditional-marketing-authorisation` (fetched today) |
| history/how-we-got-here, fold "De wegen in meer detail" | accelerated assessment "hoogstens 150 dagen in plaats van 210"; PRIME "zodat hun studies de juiste vragen beantwoorden"; conditional "het voordeel van een medicijn dat er nu al is" | 210 days "de pauzes niet meegeteld", the CHMP can shorten it to 150; PRIME "overlegt al vroeg … ontwikkelplan verbeteren, en kan de beoordeling sneller"; "dat nu al beschikbaar is" | Wording brought back to the sources (PRIME: "early dialogue … to optimise development plans and speed up evaluation"; "benefit of immediate availability") | `ema-accelerated-assessment`, `ema-prime`, `ema-conditional-marketing-authorisation` |
| same fold, US bullet | "Accelerated approval op een vroeg teken van effect kan sinds 1992, als het bedrijf het echte voordeel later bevestigt." | "… voor een ernstige aandoening … op een vroeg teken dat het voordeel voorspelt, zoals een tumor die kleiner wordt. Het bedrijf moet het echte voordeel later met studies bevestigen." | Science parity: English's "serious condition", the marker example and the confirmatory studies | `fda-2006-promoting-safe-effective-drugs`, `fda-accelerated-approval-program` |
| history/how-we-got-here, fold "Waarom deze wegen …" | "een onderzoekersdossier"; "zonder onderzoekersdossier of GMP-bewijs" | "het dossier voor onderzoekers (Investigator’s Brochure of IMPD)"; "zonder zo’n dossier of GMP-certificaat" | The IGJ's terms | `igj-qa-zonder-handelsvergunning` |
| history/how-we-got-here, link texts | "van dier naar mens"; "de risico’s van een product" | "de kloof tussen dier en mens"; "productrisico" | The Dutch target pages' titles | the Dutch target files |
| timeline.json `eu-safety-features` | "dozen met medicijnen op recept in de EU" | "… in Nederland en de meeste andere EU-landen" | On 9 February 2019 Belgium, Greece and Italy were still deferred (art. 50) | `eu-regulation-2016-161` (note), eu-status fact 35 |
| timeline.json `kayshild-approval-eu` | "Kayshild is alleen op recept en staat onder extra toezicht." | "Kayshild is alleen op recept. Het staat onder aanvullende monitoring, zodat nieuwe informatie over de veiligheid snel bekend wordt." | The SmPC's term and its standard sentence; "toezicht" is the IGJ's word on this site | `ema-pi-kayshild-nl` ("onderworpen aan aanvullende monitoring") |
| timeline.json `wegovy-tablets-eu` | "met dezelfde BMI-grenzen als bij de pen" | "… als bij de pen voor volwassenen" | The pen is also for adolescents, with other criteria | `ema-pi-wegovy-nl` (4.1) |
| timeline.json `eu-council-pharma-position` | "Nu is het Europees Parlement aan zet …" | "Daarna was het Europees Parlement aan zet …" | An event describes the situation on its date ("Zo lees je de datums") | `ep-oeil-2023-0132-cod` |

### Checked and confirmed (no change)

- **Science parity** (every English cite id, claim, number and caveat): index, timeline and how-we-got-here keep every
  science and history id of the English pages except the reader-frame ids the writer listed (now minus the four restored
  on the timeline). Numbers checked in Dutch format: 107; 10.000; 46; tot 40%; 60 dagen; 4.000; 115, 8 and 33; 1,5% and
  20%; 760; ongeveer 8 jaar; 13,8% and 41.040; 985 and 1.336 miljoen dollar; 2.558 miljoen dollar; 303, 352 and 366
  dagen; 2 op de 3, 6 op de 7; 93, 19 and 39; 68 and 5,4 jaar; 80,6% and 52,8%; 8–6–1 (PCAC). The PCAC paragraph has
  all five points with STYLE §5.4 wording and point 5 for NL/EU.
- **Dutch and EU facts:** WOG of 28 July 1958 (art. 3, 29, 37); registration duty and CBG from 1963, day unknown
  (memorandum dated 10 December 2003); Geneesmiddelenwet of 8 February 2007 in force 1 July 2007, art. 132, art. 40;
  Regulation 2309/93 (1 January 1995); EMA in Amsterdam since 2019; Regulation 726/2004 central route; Directive 2001/83
  repealing 65/65; WMO arts. 2, 6 and 7; Regulation 536/2014 arts. 28(3) and 29; Lareb "in opdracht van het CBG" and the
  STYLE §5.1 phrase; CUP (manufacturer only, cohort, indefinite since MEB 49); artsenverklaring (ontheffing since
  9 September 2025, 8 weeks, about 4, "uiterste gevallen", "terughoudend"); none of the site's compounds in a CBG CUP
  (nl-care fact 39); EMA Ozempic shortage first published 19 October 2022; EMA 18 October and IGJ 25 October 2023
  falsified pens; EMA/HMA and IGJ/CBG warnings of 3 September 2025.
- **The 11 new events:** dates, jurisdictions, categories and sources against merge.md §7 and eu-status/nl-care (all
  ids exist; the validator passes). The texts match the sources: the Egrifta withdrawal and the CHMP's provisional view;
  Directive 2011/62 from 2 January 2013; the CTR from 31 January 2022, CTIS from 31 January 2023, consent; NAION "zeer
  zeldzaam", up to 1 in 10.000, the CBG's advice; the agreement of 11 December 2025 (not yet law); Kayshild's Dutch 4.1
  indication, conditional, prescription only; the Wegovy tablets (adults, C(2026) 5102) and the new pen; the Council
  position of 28 September 2026, 24 months after entry into force (the Council text, not the EMA's 2028; eu-status §4
  conflict 1), no Parliament deadline; the Ozempic shortage over on 2 December 2024, with off-label use presented as
  off-label; WOG 1963 without a day. No existing event changed.
- **Rules:** no link to /en/ or to legal/us, uk, ca, au or ireland-and-new-zealand; every internal link is a Dutch route
  whose file exists; no cross-page anchor; no help, reporting, route or insurance of another country (the UK and Canadian
  reporting schemes stay unnamed); no Belgian content; "je" only; no word of STYLE §5.6 used as a claim ("veilig" only
  for what the 1906, 1938 and 1962 laws required); no commerce word in a title, heading, Lead, TL;DR question, fold
  title, figure title or label.
- **Advertising test:** no compound is praised; the authorised products named in events and folds (Ozempic, Wegovy,
  Kayshild, Mounjaro, Scenesse, Byetta) carry no effect claim; where an indication is named it is the Dutch SmPC's.
- **Glossary** (4 entries): ids match English (`fdca`, `notice-of-compliance`, `artg`) or are new Dutch kebab-case
  (`memorie-van-toelichting`); every `see_also` id exists in Dutch; B1, country named, under 400 characters.
- **Validator** (`--only history`, `--only timeline`, `--only nl-history-a`): 0 errors, 0 warnings (the warning
  "related: the-case-for-reform does not exist (yet) in nl" went away once that page was written by its group).
  **Residue** (`--only history`, `--only timeline`, `--only nl-history-a`, `--details`): 0 error, 0 frame, 0 warn. I also
  scanned the pages with every marker removed (the scanner's own `scanMdx`): the only hits are the marked FDA/VS/503A
  history and PCAC lines, as intended.

### Remaining concerns for the reviewer

1. The writer's open questions 1–5 stand (artsenverklaring "Niet per se"; calling the 1963 college "het CBG"; the
   length of the UK/CA/AU history; `last_reviewed` 2026-10-27; "veilig" in the legal-requirement sense).
2. By restoring the UK/AU/CA thalidomide responses on the timeline (one figure-row part and one fold sentence) I followed
   the brief's "history stays where English has it". If the owner wants the Dutch timeline page to stay NL/EU only,
   remove them and list the four ids as dropped again.
3. Not restored, on purpose: the TGA finding that a vial sold as retatrutide held semaglutide
   (`au-tga-2026-09-retatrutide-counterfeit`) and the UK, Canadian and Australian enforcement of 2025–2026. They are
   another country's enforcement; the Dutch fold uses the EMA/HMA and IGJ/CBG warnings instead. A reviewer may want the
   TGA lab finding back as world context (it is evidence of mislabelling).
4. `tesamorelin-withdrawal-eu` has category `approval` (as merge.md §7 proposed), so the filter "Goedkeuringen" shows a
   withdrawn application. `regulation` may fit better; left for the owner, since the merge chose it.
5. Source notes narrower than the claims they carry here (the claims rest on the 27 October fact-checks):
   `ema-medicines-json` (note: BPC-157 only, accessed 20 October), `ema-under-evaluation-2026-10` (bremelanotide only),
   `cbg-compassionate-use-list` (retatrutide only, accessed 20 October; nl-care fact 39 searched all names on
   27 October), `cbg-ozempic-shortage` (accessed 20 October; re-read today, the quotes above confirmed),
   `ema-conditional-marketing-authorisation` (the scope sentence quoted above is not in its note).
6. The Compare "snelle wegen" says "Gecontroleerd op 24 en 27 oktober 2026": the accelerated-approval column rests on
   the English page's check (`fda-accelerated-approval-program`, re-fetched 26 October), not on a fetch of today.

### For the final sweep (files I do not own)

- Other Dutch pages repeat the verdict word after `<Verdict>` (the page shows "Ja Ja," or "Nee Nee."):
  `src/content/pages/nl/compounds/index.mdx` line 27, `src/content/compounds/nl/nad-precursors.mdx` line 122,
  `src/content/compounds/nl/retatrutide.mdx` line 172, `src/content/compounds/nl/ss-31.mdx` line 116.
- The writer's sweep items 1–6 above stand (the capital in "Wet op de Geneesmiddelenvoorziening" in two existing
  timeline texts; source-note additions; heroes).
- `src/data/sources/history.yaml`, `eu-directive-65-65`: the note can add art. 4(8) "physico-chemical, biological or
  microbiological tests", art. 7's extra ninety days, art. 10 "renewed for five-year periods" and art. 22 (eighteen
  months), all read through CELLAR today.
