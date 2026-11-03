# Final sweep, area "shared" (27 October 2026)

Fixer for shared data and tooling: non-Dutch source files, `src/data/compounds/*.yaml` (EU/NL parts only),
`product-check.yaml`, `media.yaml`, `jurisdictions.yaml`, `explainers.yaml`, organ cards, `src/i18n/nl/tracker.json`,
`src/i18n/nl/timeline.json`, `scripts/`. No English page, no Dutch page, no build, no commit.

Checks after the changes: `validate-content.ts` (all) 0 errors, 170 warnings, the same as before the sweep (1,918
sources: one duplicate id removed); `--only nl` 0 errors and the same 18 warnings; `--only en` 0 errors and the same
117 warnings; `--only retatrutide` and `--only nl/safety` 0 errors; `check-locale-residue.ts --only nl --details`
0 hits.

## How facts were checked

Read on 27 October 2026 (UTC), with curl into a scratch folder, unless the line says the fact-checked research:

- EU law through the Publications Office CELLAR resolver: Directive 2001/83 consolidations 2022-01-01 and 2025-01-01
  (English) and 2025-01-01 (Dutch); 2026-01-01 returns 404. Arts. 1, 2, 3, 6, 8, 10, 40, 46, 48, 51, 54, 54a, 55, 59, 85c,
  86, 87, 88, 104, 107a and 111 compared between the two English consolidations: all the same except art. 5 (art. 5a,
  the Northern Ireland derogation, deleted; 5(1) unchanged) and art. 111 (one phrase in a later paragraph deleted;
  111(1) unchanged). Arts. 10 and 86–88, which the English about pages cite, are unchanged, so the URL could move.
  Dutch art. 86(2) last indent: "informatie betreffende gezondheid of ziekten bij de mens." (no condition).
  Also 699/2014 (art. 5), 726/2004 consolidation 2022-01-28 (art. 13(1)), 536/2014 (arts. 4, 61, 63), 65/65 (art. 22),
  178/2002 Dutch (art. 2), 1223/2009 Dutch and English (art. 2(1)(a), 2(2)).
- Union list of novel foods: SPARQL query of the Publications Office: latest consolidation of 32017R2470 is
  02017R2470-20260810; that text lists nicotinamide riboside chloride and has no "mononucleotide" or "NMN".
- CosIng search API: substance 55687, COPPER TRIPEPTIDE-1, Active, SKIN CONDITIONING, annexNo, cosmeticRestriction and
  otherRestrictions empty.
- EMA pages: conditional marketing authorisation (scope; "valid for one year and can be renewed annually"); Kayshild
  EPAR (conditional; yearly review; "long-term safety data ... are not yet available"); falsified Ozempic news
  (wholesalers in the EU and the UK; "serial numbers were shown to be inactive"; "no evidence that any falsified pens
  have been dispensed to patients from legal pharmacies"; no insulin named); Wegovy EPAR (product information last
  updated 26/10/2026; latest procedure R/0000336288, 21/09/2026). The under-evaluation spreadsheet: "Data extracted
  5 October 2026", EMA/222468/2026, EMEA/H/C/006847, 006902, 006910 (semaglutide), 006632 (orforglipron); the November
  list 404.
- FDA: PCAC meeting page ("Content current as of: 08/06/2026", no minutes or vote summary among the event materials);
  GLP-1 concerns page (990 reports for compounded semaglutide and more than 730 for compounded tirzepatide as of
  31 May 2026; "likely ... underreported"; no mention of insulin).
- IGJ/CBG warning of 3 September 2025: metadata dateModified 2025-11-24; "Betrouwbare online verkopers van
  geneesmiddelen herken je aan het onderstaande logo."
- wetten.overheid.nl BWBR0005290 (version "Geldend van 08-10-2026 t/m heden"): art. 7:456 exception.
- ClinicalTrials.gov API v2: NCT07531251 recruiting, sites in the US, Canada and the UK only; NCT05162768 sites include
  Nijmegen, Netherlands.
- From the fact-checked research (re-read there on 27 October 2026): the EMA JSON counts and records
  (eu-status.md facts 1–11 and fact-check), the orphan designations, the CBG compassionate-use list (nl-care.md §7 and
  fact-check), Lareb (nl-help.md fact 21), Thuisarts and RIVM (nl-help.md §7.3, ui-safety.md check table), Mainline
  (nl-help.md fact 37), IGJ artsenverklaring pages (nl-care.md facts 21–28), the WOG date (nl-mvt-2003-geneesmiddelenwet),
  the Flemish decree numbering (be-notes.md fact 32), the Council documents (tracker sources).

## Changed

- SH-01 `eu-directive-2001-83` (shared.yaml): URL to the 1 January 2025 consolidation; accessed 2026-10-27; a note
  listing the articles the pages cite it for (each one re-read), with the art. 86(2) language difference.
- SH-02 `eu-regulation-699-2014`: last sentence replaced with the art. 5 date (1 July 2015); accessed 2026-10-27.
- SH-03 `eu-regulation-726-2004`: art. 13(1) added; accessed 2026-10-27.
- SH-04 `ema-under-evaluation-2026-10` (pt-141.yaml): note rewritten for every compound; accessed 2026-10-27.
  explainers.yaml (incretin-three-receptors, not placed on any page) and organ-cards/retatrutide.yaml now use this id;
  the organ card also has `NL: [cbg-gib-search-status-2026-10-27]`. After compounds-a and site switched their cites,
  no page or data file cited `ema-2026-10-under-evaluation`, so its entry in retatrutide.yaml was removed (a comment
  says where it went). Two header comments still name the old id (about.yaml, a record of the 22 October re-read;
  nl-research-eu-status.yaml, not editable); they are comments, not citations.
- SH-05 `ema-medicines-json`, SH-06 `ema-orphan-designations-json`, SH-07 `cbg-compassionate-use-list`: notes rewritten
  as given (BPC-157 and TB-500 search terms kept; orphan substances and conditions copied from eu-status.md fact 6 and
  the ss-31, thymosin-alpha-1 and nad-precursors status files); accessed 2026-10-27.
- SH-08 `lareb-bijwerkingen-melden`: the no-medical-advice quotes added.
- SH-09 `ema-2023-falsified-ozempic`: what the pages cite it for (EU and UK wholesalers, the word is "the EU and the UK",
  not only EU), the "no evidence ... dispensed" sentence (it is on the page) and "names no insulin"; accessed 2026-10-27.
- SH-10 `ema-epar-wegovy`: renewal 21 September 2026, product information 26 October 2026.
- SH-11 safety-a.yaml: `thuisarts-verlamming`, `thuisarts-pijn-op-borst`, `mainline-steroids-safe-injecting`,
  `rivm-hygiene-piercing` notes corrected as given.
- SH-12 accessed dates: every id named as reused and re-fetched on 27 October 2026 in the headers of the five
  nl-research-*.yaml files (nl-care ids marked * skipped, except `nl-wog-1958`, `eu-regulation-536-2014` and
  `eu-regulation-726-2004`, which the nl-care fact-check, the eu-status fact-check and this sweep re-read) set to
  2026-10-27: 141 `accessed:` lines in 17 files by this date pass (plus the entries edited by hand above); nothing
  else in those entries changed (checked by diff). Not changed: `ema-epar-kayshild`
  (refocus-ireland-nz.yaml) and `ctgov-nct05162768` (refocus-status-d.yaml), which may not be edited;
  `ema-medicines-search` and `ema-epar-scenesse`, listed as reused in the eu-status header but not shown as re-opened
  in its verification log (the EMA JSON was read instead).
- SH-13 notes from nl-care §7: `igj-leveren-op-artsenverklaring`, `igj-qa-zonder-handelsvergunning`, `nl-wog-1958`,
  `ctgov-nct07531251` (also re-read in the API), `ctgov-nl-be-peptide-search-2026-10-22` (kept for Belgium; be-notes
  re-ran the Belgian searches on 27 October with the same result).
- SH-14 `be-flemish-antidoping-decree-2012`: the consolidated numbering (art. 2, 55° and 56°) added. The item's first
  sentence ("This is the original 2012 text") was not repeated: the note already says so.
- SH-15 / SH-03 (second list) product-check.yaml `stop`: `local_sources.NL` = thuisarts-wondroos, thuisarts-sepsis,
  thuisarts-dikke-ogen-lippen. Checked with the plugin's own function: on nl the stop item lists the three NHS pages
  and then the three Thuisarts pages; on en it is unchanged.
- SH-16 / LS-11 timeline.json and tracker.json: "Wet op de geneesmiddelenvoorziening" (two places), "groep S0" (two
  places), "de veiligheidscommissie van het EMA (PRAC)".
- LF-05 tracker.json `eu-pharma-reform`: first sentence names both acts (directive 2001/83/EG and verordening (EG)
  nr. 726/2004); both Council documents are already the item's sources.
- SH-17 EU rows: semaglutide (+ ema-epar-kyinsu, ec-union-register-kayshild, ec-union-register-kyinsu); cjc-1295
  (+ ctis-cjc-1295-search-2026-10-27); nad-precursors (+ eu-op-novel-food-acts-search-2026-10-27, comment "still the
  latest on 27 October 2026" after the SPARQL and text check); ghk-cu (comment: cosmetics clause re-read 27 October).
- SH-02 (second list) semaglutide EU products: "Wegovy (injection)", "Wegovy (tablets)" and "Kyinsu (with insulin
  icodec)" now "Wegovy", "Wegovy" and "Kyinsu" (EU rows only; the table shows the route and the Dutch indication lines).
- SH-19 notes: `eu-regulation-536-2014` (arts. 4, 61(1), 63(1)), `eu-directive-65-65` (art. 22),
  `ema-conditional-marketing-authorisation` (scope, one-year validity), `cosing-copper-tripeptide-1`,
  `eu-regulation-178-2002-food-law`, `eu-regulation-1223-2009-cosmetics` (re-reads); accessed 2026-10-27.
- SH-20 notes: `nl-wgbo-art-454-456-records` (art. 7:456 exception), `igj-2025-illegal-online-medicines` (dateModified
  24 November 2025, from the page metadata; the logo advice is not repeated here), `fda-pcac-2026-07-meeting` (no
  minutes posted, checked 27 October 2026), `fda-unapproved-glp1-concerns` (990, more than 730, "likely ...
  underreported"; the tirzepatide page cites the 730); accessed 2026-10-27.
- SH-21 scripts/lib/load.ts: Dutch idioms added to NON_COMMERCE_PHRASES, JSDoc updated. The inverted form "stel … op
  prijs" is written with a lookbehind, so only "op prijs" is removed and a real token between the words (for example
  "bestelling") is still caught. Tested on 12 phrases (all as expected); nl and en validator output unchanged.
- SH-22 scripts/validate-content.ts: four Dutch seller patterns as warnings ("legit" was already covered). The
  "betrouwbare" pattern is `betrouwba(?:re|ar)` so "een betrouwbaar lab" is caught too; "betrouwbaarheidsinterval" is
  not. The only Dutch hit (product-risk.mdx, the lab-report ladder) is in quotes and skipped; no new warning.
- SH-23 media.yaml `huisartsenpost-oss` (+ thuisarts-spoed-wie-bellen); jurisdictions.yaml NL regulator "College ter
  Beoordeling van Geneesmiddelen (CBG)".

## Skipped

- SH-18 (WADA `as_of` of ipamorelin, Semax, Selank): WADA rows show on every locale, English too (regulatory table and
  the "checked" date of At a glance), and this area may edit only the EU/NL/BE parts of compound data. Left for the
  owner (decision). If CB-02 changed "op 22 oktober 2026" on the Semax and Selank pages, the Dutch text and the WADA row
  now disagree until the owner decides.
- SH-19 (e) `ema-epar-kayshild` and SH-20 (e) `ctgov-nct05162768`: both live in refocus-*.yaml. The documented override
  (CONTENT-GUIDE §11, en-finish.yaml) gives a reader title; that file's own header says the notes stay in the refocus
  files, and a repeated entry replaces the whole entry (src/lib/data.ts keeps the first), so a note copy would shadow
  the refocus note. Notes are not shown to readers. Facts confirmed today, for whoever owns those files: Kayshild
  "has been given conditional authorisation"; "Every year, the Agency will review any new information"; "long-term
  safety data on the use of Kayshild in people with MASH are not yet available"; NCT05162768 site countries include the
  Netherlands (Nijmegen; ClinicalTrials.gov API, 27 October 2026).
- SH-01 (second list) src/components/mdx/Section.astro: outside every file area; not edited. The orchestrator should
  assign it.

## For others

- nl/compounds/semaglutide.mdx: "Sommige nep-pennen bevatten insuline" cites fda-unapproved-glp1-concerns among four
  sources; that FDA page does not mention insulin (the other three may).
- `cjeu-2015-abcur` (legal-a.yaml): nl-care asked for a neutral title; titles of shared sources are not changed in this
  sweep. It is not cited on Dutch pages.

## Check (independent, 2026-10-27)

Independent checker for area "shared". I read the real changes with `git diff` (shared data, scripts) and
`diff -u` against `research/nl-notes/_baseline-step5/` (`src/i18n/nl/tracker.json`, `timeline.json`). I checked all
24 applied items and the 4 skipped ones. English pages, compound pages and strings were not touched
(`git status --short src/content/pages/en src/content/compounds/en src/i18n/en` is empty). No build, no commit.

**Re-read today against the primary source** (curl into a scratch folder; EU acts through the CELLAR resolver):
- Directive 2001/83, 2025 consolidation, English and Dutch: the English art. 86(2) last indent has "provided that
  there is no reference, even indirect, to medicinal products"; the Dutch one ends at "informatie betreffende
  gezondheid of ziekten bij de mens." (confirmed: the Dutch text has no condition). Art. 5(1) and 107a(1) as the note
  says.
- Regulation 699/2014 art. 5: "shall enter into force on the seventh day following that of its publication ... It
  shall apply as from 1 July 2015" (confirmed). 726/2004 art. 13(1), 536/2014 arts. 4, 61(1), 63(1), 65/65 art. 22
  ("within eighteen months of its notification"), 178/2002 Dutch art. 2 (d: "geneesmiddelen"): as the notes say.
- 1223/2009 Dutch art. 2(2): as the note says, but the quote had been reordered ("[mogen]" moved). **Fixed:** the note
  now quotes the sentence word for word ("Voor de toepassing van lid 1, onder a), mogen stoffen of mengsels ...").
- EMA orphan JSON (3,310 records): EU/3/21/2430, EU/3/22/2614, EU/3/02/110, EU/3/23/2786 with the substances,
  conditions and dates the tb-500.yaml note gives; no record contains "thymosin", "timbetasin", "LKKTETQ" or "TB-500",
  so the kept TB-500 sentence still holds next to the thymalfasin designation.
- Union list of novel foods, consolidation of 10 August 2026: nicotinamide riboside chloride listed, no
  "mononucleotide".
- EMA: falsified-Ozempic news (wholesalers "in the EU and the UK"; "the serial numbers were shown to be inactive";
  "There is no evidence that any falsified pens have been dispensed to patients from legal pharmacies"; no insulin);
  conditional MA page (scope; "Conditional marketing authorisations are valid for one year and can be renewed
  annually"); Wegovy EPAR (product information last updated 26/10/2026; latest procedure R/0000336288, 21/09/2026).
- FDA: GLP-1 concerns page (990 and "more than 730" as of 31 May 2026; "likely that adverse events from compounded
  versions of these drugs are underreported"; no insulin; "Content current as of: 10/01/2026"); PCAC page ("Content
  current as of: 08/06/2026", no minutes).
- IGJ: illegal-online-offers news (DCTERMS.modified and dateModified 2025-11-24); artsenverklaring page ("Sinds
  9 september 2025 ... 'ontheffing'", the Spoedprocedure, a separate application per medicine and per indication); Q&A
  ("in de Nederlandse taal", BIG-register check, a declaration signed by a doktersassistente is not accepted, "Ook als
  er sprake is van bijvoorbeeld een FDA-registratie", "De IGJ heeft geen rol bij het proces van vergoedingen", patients
  outside the inclusion criteria "buiten het klinische onderzoek").
- WGBO art. 7:456 (version from 08-10-2026): the quoted exception is word for word.
- Thuisarts verlamming ("Bel direct 112, je huisarts of de huisartsen-spoedpost"; "Zijn de klachten snel weer helemaal
  weg? Bel toch nog je huisarts."; last changed 7 Sep 2026); Lareb (both quotes); Mainline home page ("Helaas stopt
  Mainline spoedig"; the 14 May date rests on nl-help fact 37). `mainline-steroids-safe-injecting` is cited on no page.

**From the fact-checked research:** EMA medicines JSON and under-evaluation list (eu-status facts 1-11 and its
verification log), CBG compassionate-use list (nl-care fact 39: 43 programmes, latest 5 December 2025), the WOG 1963
date (nl-care fact 76, `nl-mvt-2003-geneesmiddelenwet`), NCT07531251 = 4TAZPower = CTIS 2025-523837-25-00 (nl-care,
ss-31 status file), the Flemish decree numbering (be-notes fact 32), the Council documents (tracker sources; art. 185 of
7105/2/26 repeals 726/2004).

**SH-12 date pass:** a script listed all 151 `accessed: 2026-10-27` lines added in non-Dutch source files and matched
each id against the "Reused" lists in the five `nl-research-*.yaml` headers. All are named there, except six that the
fixer re-read itself (ema-conditional-marketing-authorisation, eu-directive-65-65, fda-unapproved-glp1-concerns,
fda-pcac-2026-07-meeting, cosing-copper-tripeptide-1, eu-regulation-178-2002-food-law); the ones I could re-read
above hold. The nl-care '*' ids that were changed (nl-wog-1958, eu-regulation-536-2014, eu-regulation-726-2004) were
re-read on 27 October by the nl-care fact-check (its "History" and "EU" lines) or in this sweep. In legal-b, basics,
melanotan-ii, stubs-a and tesamorelin only `accessed:` lines changed.

**Ids and data:** every id the changes add exists (ctgov-nl-peptide-search-2026-10-27,
be-flemish-antidoping-decree-consolidated, nl-mvt-2003-geneesmiddelenwet, ema-epar-kyinsu,
ec-union-register-kayshild/-kyinsu, ctis-cjc-1295-search-2026-10-27, eu-op-novel-food-acts-search-2026-10-27,
cbg-gib-search-status-2026-10-27, thuisarts-spoed-wie-bellen). `ema-2026-10-under-evaluation` is cited nowhere now
(only two comments name it). The two EU "Wegovy" rows keep the difference in the route cell and the Dutch indications
(`wegovy-tablets`: "alleen bij volwassenen"); Kyinsu's indication says "Bevat ook de insuline icodec". The
product-check `stop` item's Thuisarts pages match its Dutch text (red spot, fever, swollen face, trouble breathing).
tracker.json and timeline.json parse and follow STYLE-NL ("groep S0", "de veiligheidscommissie van het EMA (PRAC)",
"Wet op de geneesmiddelenvoorziening"); no "u".

**Scripts, fixed:**
- `scripts/lib/load.ts`: the exemption "afrekenen met" also removed the checkout phrase ("Afrekenen met iDEAL", "met je
  creditcard"), so such a heading would pass. It now has a negative lookahead for means of payment (iDEAL, creditcard,
  PayPal, Klarna, Bancontact, pin, contant, crypto, "je pas/kaart" ...); the idiom stays exempt. JSDoc updated.
- `scripts/validate-content.ts`: the Dutch "betrouwbare" pattern missed the IGJ's own phrase "betrouwbare online
  verkopers" and "een betrouwbaar laboratorium" (the English pattern has "laboratory"); it now allows one word between
  and has `laborato(?:rium|ria)`. The "waar te koop" pattern missed the most common phrasing; it now also catches "waar
  koop je", "waar bestel je" and "waar kun/kan je|ik ... kopen/bestellen" (up to 40 characters between). Tested on 24
  phrases (13 commerce, 11 seller), all as expected; "betrouwbaarheidsinterval", "een betrouwbare bron" and "Waar kun je
  een bijwerking melden?" do not match. No Dutch page or string has any of these phrases.

**Validators after the fixes:** `validate-content.ts --only nl` 0 errors, 18 warnings (as before); `--only en` 0
errors, 117 warnings (as before); `check-locale-residue.ts --only nl --details` 0 hits.

**Skipped items:** agreed. SH-18 is English-visible (WADA rows); SH-19 (e) and SH-20 (e) are in refocus files whose
header says "do not edit this file"; Section.astro is outside every area.

**For others (not this area):**
- compounds-b, `nl/compounds/ipamorelin.mdx` line ~391: the Compare `detail` says "Status in Nederland, de EU en de
  sport, gecontroleerd op 27 oktober 2026", but the WADA row is `as_of: 2026-10-22` (SH-18 decision pending). Semax and
  Selank say "de sport op 22 oktober 2026", which matches the data.
- compounds-a, `nl/compounds/semaglutide.mdx`: the fixer's point stands. The FDA GLP-1 page does not mention insulin
  (re-read today), so it should not support "Sommige nep-pennen bevatten insuline".
- `thuisarts-pijn-op-borst`: the page changed again ("Laatst gewijzigd: 28 okt 2026"). The 112 wording is unchanged
  ("Bel 112: je hebt pijn of een zwaar drukkend gevoel op je borst ..."). The note ("Last changed 27 October 2026") is
  right for its accessed date. Re-date it at the next check.
- product-check `stop` and `keep`: on nl the base `sources` still cite NHS pages (nhs-cellulitis, nhs-sepsis,
  nhs-anaphylaxis, nhs-poisoning) next to the Thuisarts pages. They are cited for the medical facts, and the Dutch text
  gives no UK route. Compound groups dropped the same NHS ids from their Dutch stop signs. Moving them to
  `local_sources.UK` would leave English unchanged, but the item said to keep `sources`, so this is left as is.
- docs/STYLE-NL.md §7 lists "afrekenen met" as exempt. It still is, except before a means of payment.
