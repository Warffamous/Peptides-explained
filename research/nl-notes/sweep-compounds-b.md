# Final sweep, area compounds-b (28 October 2026)

Files: `src/content/compounds/nl/{pt-141,melanotan-ii,cjc-1295,ipamorelin,mots-c,epitalon,thymosin-alpha-1,semax,selank,ghk-cu,aod-9604,hexarelin,ss-31,nad-precursors}.mdx`
and the new `src/data/sources/nl-sweep-compounds-b.yaml` (1 source). `config/link-allowlist.json` was not touched
(the register's host is already allowed). No `##` or `###` heading was renamed or reordered except the CB-03 block move.

Checks: `npx tsx scripts/validate-content.ts --only nl`: 0 errors and 0 warnings in this area (the 1 error, in
retatrutide, and 18 warnings are in other areas' files). `npx tsx scripts/check-locale-residue.ts --only nl --details`:
0 error/frame hits, 0 warn hits.

Dates: the clock read 28 October 2026 (shortly after midnight) when I fetched the 2 web pages below, so the new source
and the PCAC sentence say 28 October.

## Changed

- **CB-01 (b), LS-35 (b), pt-141.** "slecht geregelde hoge bloeddruk" changed to "hoge bloeddruk die niet onder controle
  is" in `grade_rationale.safety` and in the risks, men's risks and "who should not use it" lines. The TL;DR answer
  (line 13) keeps the short form because of the 18-word limit (STYLE-NL §2.5). "pen voor één keer" changed to "pen voor
  één dosis" (fact tile, Compare, ProductCheck). "een peptide om bruin te worden" changed to "een peptide voor een bruine
  huid". "blozen" changed to "een rood en warm gezicht (flushing)" on first use (study finding diamond-2004), in the
  chart label ("Rood en warm gezicht (flushing)"), in the fold title ("Misselijkheid, een rood gezicht en hoofdpijn";
  `InDetail` makes no anchor from its title, and no link uses it) and in the fold text.
- **LS-05.** "onderzoeksdossier" changed to "onderzoekersdossier" on aod-9604, ghk-cu and hexarelin (the IGJ's
  artsenverklaring documents: the Investigator's Brochure). **pt-141 differs:** there the word stood for the US
  "investigational new drug application" (English page), which is an application to the FDA, not an Investigator's
  Brochure. "onderzoekersdossier" would be wrong there. I wrote: "De aanvraag bij de FDA om de neusspray te mogen testen
  bij mannen met erectieproblemen werd in 2017 ingetrokken." Same fact and cite (fda-2019-vyleesi-multidiscipline-review),
  inside the existing `residue-ok: FDA evidence` paragraph.
- **CB-02 (b) / LS-04.** Russia wording now "toegelaten" (STYLE-NL §2.4 row "registered as a medicine (Russia)", added in
  this sweep): epitalon (the Deigin list: "die in Rusland zijn toegelaten"; the PCAC point 5 line), mots-c and
  ipamorelin ("Semax is in Rusland als medicijn toegelaten").
- **CB-03, ipamorelin.** In the fold "Nederland en de Europese Unie" the `### Nederland` block now comes before
  `### Europese Unie`. Headings unchanged; the Belgium line and the legal callout stay at the end of the fold.
- **CB-04 (a), melanotan-ii.** Fetched the Geneesmiddeleninformatiebank search for "melanotan" (same URL form as
  `cbg-gib-search-status-2026-10-27`): "1 product gevonden dat voldoet aan uw zoekopdracht: SCENESSE 16 mg,
  implantaat", EU/1/14/969, AFAMELANOTIDE; the result list names no company. Registered as
  `cbg-gib-search-melanotan-2026-10-28` in `src/data/sources/nl-sweep-compounds-b.yaml` and cited in `### Nederland`
  ("Zoek je op "melanotan", dan vind je alleen Scenesse") instead of the tesamorelin link.
- **CB-04 (b), melanotan-ii.** Re-fetched the FDA PCAC early-announcement page: still "Content current as of
  04/15/2026", meeting "before the end of February 2027", same 5 substances, no date, Federal Register notice, docket
  or materials. So the sentence now says "Op 28 oktober 2026 waren er nog geen datum, dossier of vergaderstukken."
  **For the shared area:** `fda-pcac-2027-early-announcement` (legal-b.yaml) still has accessed 2026-10-22 and "unchanged
  on 22 October 2026" in its note. It can move to 28 October (page unchanged).
- **LF-06, thymosin-alpha-1.** WADA note now: "Niet met naam op de lijst. Het is in Italië en andere landen als medicijn
  goedgekeurd, dus S0 geldt niet. Andere groepen kunnen het wel verbieden; we vonden geen uitspraak: vraag het de
  Dopingautoriteit." (eu-status fact 8: AIFA lists ZADAXIN "AUTORIZZATA"; same as /nl/legal/sport-and-doping/ line 145.)
  The body text never said "misschien", so it needed no change.
- **LF-08, epitalon.** Lines 93, 169 and 263 use the item's wording ("volgens de tekst van S0 …"); cites kept.
- **HR-03, mots-c.** Low blood sugar: "Word je suf of verward? Dan moet iemand direct 112 bellen. Helpt de suiker niet,
  maar ben je helder? Bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." Added nhs-low-blood-sugar
  to the cite.
- **HR-04, ipamorelin.** Heart rhythm item: "Bel direct 112. Komen hartkloppingen steeds terug, maar gaan ze vanzelf
  over en voel je je daarna goed? Maak dan een afspraak met je huisarts." Added nhs-heart-palpitations; kept
  thuisarts-hartkloppingen.
- **HR-05 and HR-06, cjc-1295.** Severe headache with vomiting or blurred vision: "Bel direct 112." Fainting: added "Kom
  je niet binnen een minuut weer bij, of had je pijn op de borst, een heel snelle hartslag of een aanval met schokken?
  Dan moet iemand direct 112 bellen." Added nhs-headaches, medlineplus-malignant-hypertension, nhs-fainting and
  thuisarts-flauwvallen to the cite.
- **HR-08.** (a) selank and semax: inserted "Alleen jeukende bulten of een dik gezicht, en adem je normaal? Stop met het
  product en maak een afspraak met je huisarts." (b) aod-9604, ghk-cu, hexarelin: the item's new line, with the STYLE-NL
  hives term from LS-14 ("je krijgt jeukende bulten (netelroos)", "Alleen jeukende bulten of een dik gezicht"), so all
  5 pages say the same thing.
  **Beyond the listed files (same reason, same sentence):** nad-precursors, epitalon, mots-c and thymosin-alpha-1 had an
  allergic item with a 112 line for the throat or breathing but no level for hives alone. I added the same stop-level
  sentence. Each of these pages renders the allergic warning-sign group (hives-swelling = stop) and already cites
  thuisarts-dikke-ogen-lippen; their English stop lists, like the 5 HR-08 pages, give no 112 for hives alone.
- **HR-09, nad-precursors and ss-31.** Fever item: the item's text (bacteria in the blood → huisarts or huisartsenpost;
  drowsy, confused or very fast breathing → sepsis → 112).
- **LS-08.** "status als weesgeneesmiddel" changed to "aanwijzing als weesgeneesmiddel" (aod-9604 ×2, ghk-cu, hexarelin ×2,
  melanotan-ii).
- **LS-10.** "onderdeel S2" changed to "groep S2" (aod-9604 ×2, hexarelin ×2); cjc-1295 WADA note "groep S2.2.4". Also
  ghk-cu "Onderdeel S0" changed to "Groep S0" (same STYLE-NL §2.4 row; not in the item list).
- **LS-14.** Hives: aod-9604, ghk-cu, hexarelin (with HR-08); cjc-1295 glance tile "Jeukende bulten, dik gezicht of
  keel, moeilijk ademen" (8 words), line 430 "jeukende bulten (netelroos)", 517 "jeukende bulten", 552 "Jeukende bulten
  of jeuk"; epitalon, mots-c, thymosin-alpha-1 "Jeukende bulten (netelroos)"; nad-precursors and ss-31 "Jeukende bulten
  (netelroos)". Also ss-31 "Alleen bultjes of uitslag?" changed to "Alleen jeukende bulten of uitslag?" (same term).
- **LS-16.** cjc-1295 "hartfilmpje (ECG)".
- **LS-25.** Curly double quotes in cjc-1295 (TL;DR, Compare detail, ProductCheck extra) and ipamorelin (study limitation).
- **LS-30.** melanotan-ii: "Het Wereld Anti-Doping Agentschap (WADA) en de Britse antidopingorganisatie …" (first body
  mention).
- **LS-35 (a), cjc-1295.** "congresabstracts" (grade_rationale.safety, TimeStrip); regulatory Lead "Is het legaal in
  Nederland?". **(c), ss-31.** KeyNumber `who` "Open vervolgstudie (open-label) van TAZPOWER"; also the
  grade_rationale "een open vervolgstudie bij 8 tot 10 van die patiënten" (same STYLE-NL term).
- **CB-05 / LS-38, digits (STYLE-NL §3).** Counts from 2 up are now digits in prose, tables, attributes and frontmatter
  text on all 14 pages (about 190 changes; for example "7 aminozuren", "2 weken", "3 studies", "2 keer per dag", "10
  andere landen", and "5 … 1 … 1" in the pt-141 row of pregnancy outcomes). Unchanged on purpose: words at the start
  of a sentence, a table cell's sentence or a title ("Twee studies …", "Drie mannen", "Vier maanden na …", the KeyNumber
  title "Twee van de drie gezonde mannen werden bruin", the bold "Zeven besproken, zes aanbevolen."); pronoun uses ("de
  twee werken", "geen van de drie", "alle drie komen"); fixed phrases ("alle drie de studies", "alle vier de geteste
  toedieningswegen", "twee kanten op", "eind jaren tachtig", "jaren negentig"); fractions ("een derde", "een vijfde");
  "één"; "een paar honderd". No heading, quote, `<Q>` value or source title changed. Validator word limits pass.

## Skipped

- **CB-01 (a).** STYLE-NL §2.1 fixes the stop callout title "as the English page has it". English pt-141 says "Stop and
  get help", so "Stop en zoek hulp" is right.
- **CB-01 (c).** Already done: line 293 says "Die afweging kan elke vrouw met haar arts bespreken".
- **CB-02 (a) and the "goedgekeurd" half of (b).** They conflict with STYLE-NL §2.4 as merged in this sweep (Russia:
  "toegelaten", not "goedgekeurd" or "geregistreerd") and with LS-04. I followed STYLE-NL and LS-04.
- **CB-02 (c).** Depends on SH-18. On 28 October `src/data/compounds/semax.yaml` and `selank.yaml` still have the WADA
  row `as_of: 2026-10-22`, so "de sport op 22 oktober 2026" stays. If the shared area moves the rows, change that line
  in both status folds (semax.mdx line 186, selank.mdx line 180).
- **CB-02 (d).** STR-07 has now added "pijnappelklieren" to `pineal-gland`. I left the epitalon `<Term id="pineal-gland">`
  (Compare table): I cannot check without a build whether the linker reaches that table cell, and the Term link works
  either way.
- **cjc-1295, hives at 112.** Not changed to the stop level: the English cjc-1295 callout itself says "hives all over …
  Call your local emergency number", so the Dutch 112 follows the English action level (nl-help §4.1).

## Left for others

- Shared area: `fda-pcac-2027-early-announcement` accessed and note (above); the semax/selank WADA `as_of`.
- cjc-1295 line 562 still says the rat pregnancy study is "bekend uit een abstract" (English "known from an abstract").
  STYLE-NL keeps "abstract" for how-to-read-a-study only. I did not change it, because the source does not show whether
  it was a conference abstract.
- ss-31 still sends hives alone to "Stop met het middel en bel direct je huisarts" (label hypersensitivity warning;
  stubs-b2 open question for the medical reviewer). Not in the items.
- ipamorelin line 564 and selank write "een infectie of vervuiling"; STYLE-NL §2.6 prefers "besmet" for germs. Not in
  the items.
- pt-141 YAML comment (line 18) still says "slecht geregelde"; it is a comment and does not show on the page.

## Check (independent, 2026-10-27)

Checker: independent pass over the fixer's report, against the baseline (`research/nl-notes/_baseline-step5/`, word diff
of all 14 pages) and the new `src/data/sources/nl-sweep-compounds-b.yaml`. The clock read 28 October 2026 for the web
checks below. English files: `git status --short src/content/pages/en src/content/compounds/en src/i18n/en` is empty.

**Verified, no change needed**

- CB-04 (a): re-fetched the Geneesmiddeleninformatiebank search for "melanotan" (the source's URL): 1 product,
  SCENESSE 16 mg implantaat, EU/1/14/969, AFAMELANOTIDE, no company named. The new source entry and the melanotan-ii
  sentence match. Host already allowlisted.
- CB-04 (b): re-fetched the FDA PCAC early announcement (the URL in `fda-pcac-2027-early-announcement`, legal-b.yaml):
  "Content current as of 04/15/2026", meeting "before the end of February 2027", the same 5 substances, no date, no
  Federal Register notice, no docket, no materials. "Op 28 oktober 2026 waren er nog geen datum, dossier of
  vergaderstukken" is right. The source entry still says accessed 2026-10-22 ("unchanged on 22 October 2026"): shared
  area should move it to 2026-10-28.
- HR-04 (ipamorelin): NHS heart palpitations (reviewed 17 March 2026, fetched today): 999/A&E if palpitations "do not go
  away" or come with chest pain, breathlessness or fainting; GP if they keep coming back or last more than a few minutes.
  Matches the new line and `warning-signs.json` (palpitations-severe = emergency, palpitations-recurring = stop).
- HR-06 (cjc-1295): NHS fainting (reviewed 17 August 2026, fetched today): 999 if someone "cannot be woken up within 1
  minute", has chest pain or palpitations, or a seizure. Matches the new line and `warning-signs.json` fainting-serious.
- HR-05 (cjc-1295): 112 follows the page's own WarningSigns item very-high-blood-pressure (emergency) and
  medlineplus-malignant-hypertension. Note: NHS headaches (fetched today) puts "headache and vision or eye problems" and
  "headache and is being sick" at urgent GP/111, and 999 only for loss of vision, sudden extremely painful headache, etc.
  So nhs-headaches supports the signs, not the 112 level. Medical reviewer.
- HR-03 (mots-c): 112 for "suf of verward" follows `warning-signs.json` very-low-blood-sugar (emergency) and NHS (999 if
  not responding normally); Thuisarts says 112 only when unconscious (nl-help fact 12). The site's faster level; this
  replaces the stubs-a1 medical question "112 only when unconscious. Agree?". Medical reviewer.
- HR-08 (9 pages) and HR-09 (nad-precursors, ss-31): each page cites thuisarts-dikke-ogen-lippen / thuisarts-sepsis next
  to the callout; levels match `warning-signs.json` (hives-swelling = stop; sepsis-signs = emergency). The 4 extra pages
  are a fair extension (same English stop list).
- LF-06 (thymosin-alpha-1) matches eu-status fact 8 (AIFA ZADAXIN "AUTORIZZATA") and /nl/legal/sport-and-doping/ line
  145. LF-08 (epitalon) keeps "Vraag het de Dopingautoriteit".
- LS-04/05/08/10/14/16/25/30/35, CB-01 (b), CB-02 (b), CB-03: terms match STYLE-NL §2.3 to §2.6 rows; pt-141 TL;DR keeps
  "slecht geregelde" (STYLE-NL §2.5 allows it under the word limit). pt-141 LS-05 rewording matches English ("an
  investigational new drug application for the nasal spray"). CB-03 only reorders `### Nederland` / `### Europese Unie`
  inside the fold; no heading text changed on any of the 14 pages (heading lists compared with the baseline).
- CB-05/LS-38: 186 word-to-digit changes counted in the word diff; none inside a quotation; "één" became "1" only in the
  pt-141 row of numbers (STYLE-NL §3 allows it). Digit-first Compare cells (semax, selank, hexarelin "7/6 aminozuren")
  are fragments, as cjc-1295 and tb-500 cells already were; left.
- Skips CB-01 (a), CB-01 (c), CB-02 (a), (c), (d): confirmed (STYLE-NL §2.1 row; line 293; §2.4 Russia row; semax.yaml
  and selank.yaml WADA rows still as_of 2026-10-22).
- All cited source ids on the 14 pages resolve; all 14 pages compile as MDX and their frontmatter parses as YAML.

**Fixed by the checker**

- ipamorelin: "tussen 2008 en 2014 2 fase 2-studies" and "tot 30 september 2023 2 meldingen" (two numbers side by side
  after the digit pass) reordered: "deed 2 fase 2-studies in de VS, tussen 2008 en 2014" and "Tot 30 september 2023
  stonden er in de databank … 2 meldingen". melanotan-ii: "van 2012 tot 2022 16 meldingen" became "16 meldingen van
  vermoedelijke bijwerkingen in de jaren 2012 tot 2022". Same facts and cites.
- ipamorelin stop list: first body use of hives now "jeukende bulten (netelroos)" (STYLE-NL §2.5; LS-14 missed this page).
- ipamorelin and selank: "(een infectie of vervuiling)" became "(een infectie of een besmet product)" (STYLE-NL §2.6:
  "vervuild" is the doping term; English "infection or contamination").
- cjc-1295 line 562: "bekend uit een abstract" became "bekend uit een congresabstract". Checked in the FDA memo
  (fda.gov/media/183819, fetched today): the rat study "was published as an abstract only", reference Iordanova 2006,
  P942, The Toxicologist 90(1):192, the Society of Toxicology meeting abstracts, like the other 3 developer abstracts the
  page already calls "congresabstracts".

**Runs after the fixes**: `validate-content --only nl`: 0 errors, 18 warnings, none in this area.
`check-locale-residue --only nl --details`: 0 error/frame hits, 0 warn hits.

**Still open**: shared area: `fda-pcac-2027-early-announcement` accessed date and note; semax/selank WADA `as_of` (then
both "de sport op 22 oktober 2026" lines). Medical reviewer: HR-03, HR-04, HR-05 levels (faster than Thuisarts or NHS
in places, as `warning-signs.json`); ss-31 hives alone at "bel direct je huisarts" (label warning) while 9 other pages now
say "maak een afspraak".
