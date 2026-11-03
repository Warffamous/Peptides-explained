# Review: the Dutch site (27 October 2026)

The Dutch site is written: 40 pages, 21 compound pages, every UI string and the glossary, under `/nl/`. Each page
group was written and then fact-checked by a second agent. A final sweep (8 file areas, 118 items, each area checked
again by an independent agent) followed on 27 and 28 October 2026.

**Published on 3 November 2026** (your yes: "I would like it to be uploaded"). The pages went live as they stood
after the sweep, with three decisions applied first because they fix errors or belong to publishing: O8 (the
harm-reduction title on PT-141, SS-31 and tesamorelin, code change approach A), O13 (approach A, the ipamorelin
sentence) and O16 (the publication entry `nl-v1-publication`, and the re-checks of section 8 run on 3 November).
Every other decision below, and the reform page (R0–R27), still waits for your answer; an answer now changes the
live pages in the next upload.

**How to answer.** Tick one box per line, or reply with the numbers, for example "O1 A, O2 approve, R0 approve all".
The recommended choice comes first. Sections 2 to 4 are for a lawyer, a doctor and a medical translator later; they
do not block publishing, because every Dutch page says "review pending", as on English.

**Where to look.** Start the local site (`npm run dev`) and open http://localhost:4321/nl/. The last full build
(27 October, 23:27) is from before the sweep, so do not judge the pages from `dist/`.

---

## 1. For the owner

### 1.1 Decisions

**O1 · Publisher line: where it stands.** Keep the brief's publisher line word for word where it is now?
- Recommended: A.
- [ ] A. Approve as placed now · [ ] B. Approve, and put it word for word on /nl/about/funding/ too · [ ] C. Only on
  /nl/about/ and /nl/about/editorial-policy/; the other pages link to it · [ ] D. Don't approve: I will send a new text
- Now: word for word on /nl/about/, /nl/about/editorial-policy/ and /nl/legal/nl/ (section "Reclame en
  voorlichting"). /nl/about/funding/ keeps a shorter version ("Maar ook zonder geld kan een tekst reclame zijn, als
  die een middel aanprijst") and shows the 2026 rulings in its diagram. /nl/legal/whats-changing/ uses the test
  sentence "Ook wie niets verkoopt, kan reclame maken: de rechter kijkt of een tekst een middel aanprijst". The
  trainers' fold on /nl/talking-to-your-doctor/ says the same in the IGJ's words. Sources:
  `nl-gnw-art-84-85-advertising`, `nl-rvs-2026-1072-publieksreclame-website`. STYLE-NL §5.2 holds the same text.

**O2 · Explain "handelsvergunning" in the publisher line.** Add "(goedkeuring als medicijn)" after
"handelsvergunning", on all three pages at once?
- Recommended: approve (B1 pages explain a term where it first appears; STYLE-NL §1.7).
- [ ] Approve · [ ] Don't approve (the glossary tooltip explains it)
- Pages: /nl/about/, /nl/about/editorial-policy/, /nl/legal/nl/.

**O3 · CONTENT-GUIDE §1 and the 2026 case law.** Replace "The absence of commerce is what makes the content legal"
with the 2026 rule, and have the live English pages checked against it in a separate review?
- Recommended: A.
- [ ] A. Approve both · [ ] B. Change the guide only · [ ] C. Don't approve
- Suggested wording: "Selling nothing is necessary but not enough: a text is advertising if it praises a medicine.
  Every page stays balanced (each effect with its evidence level, uncertainty and risks), uses the official
  product-information wording for authorised medicines, shows off-label use as off-label, names no dose and praises
  no product."
- Why: the Raad van State (25 February 2026, ECLI:NL:RVS:2026:1072) upheld fines on a non-commercial information
  website for praising, one-sided wording. The Rechtbank Amsterdam (10 April 2026) upheld fines on a magazine article
  and a newspaper article built on personal stories about off-label semaglutide. The Rechtbank Noord-Nederland
  (21 April 2026) upheld a fine on a private person (research/nl/nl-law.md fact 17a). The guide says Dutch law
  governs the site wherever the reader lives, so this matters for English too.
- Nothing in English was changed. The English review would start with the line "Without money from sales, our
  information stays information" (/en/about/funding/, item 4; already replaced on /nl/about/funding/) and the
  passages on authorised medicines. CONTENT-GUIDE §1b (Dutch part) already points to this decision.

**O4 · Belgium: how much outside /nl/legal/be/.** Keep the Belgian mentions outside /nl/legal/be/, and the length of
/nl/legal/be/ itself, as they are now?
- Recommended: A.
- [ ] A. Approve as now · [ ] B. Cut every Belgian mention outside /nl/legal/be/ to one pointer line per page ·
  [ ] C. Also shorten /nl/legal/be/ (now about 1,900 words; the English page for Ireland and New Zealand has about
  1,800 for two countries)
- Already done in the sweep: the 4-sentence Belgian help note on /nl/safety/if-something-goes-wrong/ is now one line
  ("Woon je in België? Bel bij levensgevaar ook daar 112 …") plus the Belgian contact card. 1733 and 070 245 245
  appear only on /nl/legal/be/.
- What stays: one pointer line on /nl/start-here/ and /nl/talking-to-your-doctor/; the fixed line "In België meld je
  een bijwerking bij het FAGG" with a link on most compound pages; 3 one-line mentions on /nl/legal-routes/ and 1 on
  /nl/legal/research-use-only/; Belgian evidence where it is evidence (the FAGG warning on /nl/compounds/retatrutide/,
  an FDA country list on /nl/compounds/tb-500/, "een Belgisch lab voor volksgezondheid" on /nl/compounds/epitalon/).
  /nl/legal/be/ holds the Belgian help numbers and the legal lines of L17.
- No Belgian line was added on /nl/safety/sharps-disposal/ ("KGA"): no Belgian source was researched.

**O5 · World context on compound pages.** Shorten five foreign-route passages to one or two sentences each, and keep
the other world-context passages that serve as evidence?
- Recommended: A (the brief says world context "once and short"; the science stays the same).
- [ ] A. Approve · [ ] B. Keep everything as it is · [ ] C. Cut all world context to one sentence per page
- Shorten: the US fold on /nl/compounds/pt-141/; the fold "Wat de FDA in 2024 concludeerde" on
  /nl/compounds/cjc-1295/; the 2024 US vote fold on /nl/compounds/ipamorelin/; the FDA paragraph on
  /nl/compounds/ghk-cu/; the UK, Canada and Australia paragraph on /nl/compounds/melanotan-ii/.
- Keep as evidence: the US approval stories on /nl/compounds/tesamorelin/ and /nl/compounds/ss-31/; the US fold on
  /nl/compounds/bpc-157/; the US items on /nl/compounds/tirzepatide/; the UK, CA and AU history on
  /nl/history/how-we-got-here/ and /nl/history/timeline/; the world lines on /nl/legal/sport-and-doping/; the world
  evidence on /nl/start-here/ and /nl/basics/why-not-a-pill/ (also the US approval dates of desmopressin, 1978, and
  ciclosporin, 1983 and 1990, kept as history; EU dates were not researched); the FDA warning-letter line on
  /nl/compounds/ss-31/; the USADA source next to the Dopingautoriteit's list on /nl/compounds/nad-precursors/.
- Not consistent now: /nl/compounds/ghk-cu/ keeps the TGA and Health Canada warnings, while /nl/compounds/aod-9604/
  and /nl/compounds/hexarelin/ dropped the Canadian seizure lines. Left out (say if you want them back): the TGA
  finding that a "retatrutide" vial held semaglutide; TGA reports of allergic reactions; Health Canada "TB-500"
  notices; UK, Canadian and Australian enforcement of 2025–2026 on /nl/history/timeline/.

**O6 · Review date on Dutch pages.** Set `last_reviewed: 2026-10-27` on every Dutch page?
- Recommended: A (the day all Dutch, EU and Belgian facts were checked; `reviewed_by` stays pending).
- [ ] A. 2026-10-27 everywhere · [ ] B. The English page's date everywhere (the brief's "as on English")
- Now mixed: 27 pages say 2026-10-27; 9 say 2026-10-24 (/nl/about/, /nl/about/corrections/,
  /nl/basics/how-signalling-works/, /nl/basics/pharmacokinetics/, /nl/basics/what-is-a-peptide/,
  /nl/basics/why-not-a-pill/, /nl/evidence/evidence-grading/, /nl/safety/monitoring/, /nl/safety/product-risk/);
  3 say 2026-10-22 (/nl/basics/, /nl/evidence/how-to-read-a-study/, /nl/evidence/); 1 says 2026-10-20
  (/nl/history/the-croatian-lab/).

**O7 · Five Dutch wording choices.** Keep these as they are?
- Recommended: approve all five.
- [ ] Approve all five · [ ] Change the ones I name
- (a) The box title "In het kort" (Thuisarts calls its first block that; English is "TL;DR"). (b) The standing
  notice "Alleen informatie, geen medisch advies. Ben je nu ziek? Bel bij levensgevaar 112, en anders je huisarts of
  de huisartsenpost." (no "not a substitute for a clinician who knows you"). (c) The page name "Veilig injecteren"
  for /nl/safety/injection-safety/ ("veilig" describes a practice, not a compound; "Veiliger injecteren" would mean
  changing the title, the nav label and link texts on 8 pages). (d) "### Wat je wel kunt doen" inside "## Zelf
  invoeren" on /nl/legal-routes/, although its checklist covers every route (the page may have only its seven fixed
  `##` anchors). (e) The stop box title "Stop en zoek hulp" on /nl/compounds/tesamorelin/ and /nl/compounds/pt-141/,
  as their English pages say "Stop and get help" (/nl/compounds/semaglutide/, /nl/compounds/tirzepatide/ and
  /nl/compounds/retatrutide/ say "Zoek direct medische hulp", as their English pages say "Get medical help now"; the
  other 16 say "Stop en zoek hulp als je dit merkt").

**O8 · Harm-reduction title on PT-141, SS-31 and tesamorelin.** Approve a small code change so that a compound
page's harm-reduction title and intro follow approval in the reader's own countries?
- Recommended: A.
- [ ] A. Approve the code change · [ ] B. Instead give every authorised compound a neutral Dutch title, such as
  "Zo gebruik je het volgens de regels" · [ ] C. Keep as is
- Why: `src/components/mdx/Section.astro` shows "Veilig en legaal gebruiken" and hides the intro (no doses, no
  seller, not advice) for every compound whose data says `category: authorised`. For PT-141, SS-31 and tesamorelin
  that is a US approval; none is authorised in the Netherlands or the EU. So the Dutch title promises a safe, legal
  route. The checkers call this the riskiest line under the advertising test. With the change, a compound approved
  in none of the reader's countries gets the normal title "Als iemand het toch gaat gebruiken" and the intro. The
  English pages stay the same (all three are approved in the US). Thymosin alpha-1 is not affected (its category is
  `authorised-nationally`).
- With it: remove the stop-gap sentence "Dit deel is er om schade te beperken. Het is geen advies om tesamorelin te
  gebruiken." from /nl/compounds/tesamorelin/; and let `src/components/mdx/AuthorisedProducts.astro` link
  /nl/legal-routes/#recept and #artsenverklaring instead of the page without an anchor. No file area of the sweep
  owned these components.
- Pages: /nl/compounds/pt-141/, /nl/compounds/ss-31/, /nl/compounds/tesamorelin/.

**O9 · Product and brand names on the Dutch tables.** Leave the shared brand lists and the English Mounjaro label
link for now, and fix them later with a per-language name list?
- Recommended: A (the page text already explains each point, for example that Zepbound does not exist in the EU).
- [ ] A. Leave now, fix later · [ ] B. Fix now in the shared data (this also changes English)
- Already done: the EU product rows now say "Wegovy", "Wegovy" (the route column tells injection from tablets) and
  "Kyinsu" instead of "Wegovy (injection)", "Wegovy (tablets)", "Kyinsu (with insulin icodec)". English does not show
  EU rows.
- Still shared: the semaglutide brand list (Ozempic, Wegovy, Rybelsus: no Kayshild, no Kyinsu); the tirzepatide
  brand list (Mounjaro, Zepbound: Zepbound is US and Canada only); Mounjaro's label link is the English EPAR page
  (`ema-pi-mounjaro-nl` would suit Dutch readers).
- Pages: /nl/compounds/semaglutide/, /nl/compounds/tirzepatide/.

**O10 · Source titles that name a company, and SEC filings.** Give four sources neutral titles, and set one rule
for both languages on filings by a compound's developer?
- Recommended: A.
- [ ] A. Approve the titles; allow a developer's own filing only when it is the only source of a trial result
  (never a seller's) · [ ] B. Approve the titles; drop every SEC filing · [ ] C. Don't approve
- Titles: `cjeu-2009-hecht-pharma` (cited 3 times on /nl/legal/research-use-only/; no English page cites it) →
  "Judgment of 15 January 2009, Case C-140/07 (medicinal product by function)". `cjeu-2015-abcur` (not cited) →
  "Judgment of 16 July 2015, Joined Cases C-544/13 and C-545/13". `ema-epar-ghryvelin` (Dutch pages use
  `ema-pi-ghryvelin-nl`) → "Ghryvelin (macimorelin): EPAR – medicine overview". `rijksoverheid-online-aanbieder-controleren`
  (title vouches for sellers) stays uncited.
- Filings: the CohBar SEC filings are the only source of the CB4211 results on /nl/compounds/mots-c/ and the English
  page. `sec-lilly-2026-q2-results` and `sec-lilly-2025-q4-results` are cited on the English retatrutide page and
  its US data row; without them /nl/compounds/retatrutide/ lacks the TRIUMPH-3 announcement. A new title is set by
  repeating the id in `src/data/sources/en-finish.yaml`.

**O11 · Link allowlist.** Add www.aifa.gov.it, so /nl/compounds/thymosin-alpha-1/ can cite AIFA's current Zadaxin
record, and keep two Dutch lists unlinked?
- Recommended: A.
- [ ] A. Approve · [ ] B. Approve, and also link the huisartsenspoedposten list on the NL card · [ ] C. Don't add AIFA
- Why: the eu-status fact-check found that AIFA confirms the Italian authorisation is current; the page now rests on
  the FDA briefing of 2024 and the EMA text of 2003. www.huisartsenspoedposten.nl says its list may be incomplete;
  the Thuisarts route on the card is enough. www.aanbiedersmedicijnen.nl (the official list of registered online
  sellers) would be a positive seller sign (CONTENT-GUIDE §1a). The legal reviewer may overrule the last point.

**O12 · Sport status of KPV, epitalon and melanotan II.** Keep their WADA data rows at "prohibited (S0)", shown on the
pages as our reading of S0 plus "ask the Dopingautoriteit"?
- Recommended: A (S0 covers any substance no health authority has approved for human use; none of the three is
  approved anywhere).
- [ ] A. Keep "prohibited (S0)" · [ ] B. Change to "unclear" (English and Dutch pages change together)
- The rows drive the sport tile on both languages. The wording is in L10.
- Pages: /nl/compounds/kpv/, /nl/compounds/epitalon/, /nl/compounds/melanotan-ii/, /nl/legal/sport-and-doping/.

**O13 · Sport check date of ipamorelin, Semax and Selank.** Keep their WADA rows at `as_of: 2026-10-22`, and fix
the one Dutch sentence that says 27 October?
- Recommended: A.
- [ ] A. Keep 22 October; change the ipamorelin sentence to "Status in Nederland en de EU gecontroleerd op
  27 oktober 2026, de sport op 22 oktober 2026" · [ ] B. Move the three WADA rows to 27 October (the English pages
  then show the new date too; only if the rows are re-checked that day)
- Why: WADA rows show on English as well, so the sweep did not touch them. /nl/compounds/semax/ and
  /nl/compounds/selank/ already say "de sport op 22 oktober 2026"; /nl/compounds/ipamorelin/ says all three were
  checked on 27 October.

**O14 · SS-31 and retatrutide: "investigational".** Keep the EU and NL rows as "investigational", shown as "alleen
gebruikt in klinisch onderzoek"?
- Recommended: A (a CTIS trial is authorised for the Netherlands, 2025-523837-25-00; the page says it does not
  recruit here yet).
- [ ] A. Keep "investigational" · [ ] B. Change SS-31 to "not authorised"
- Pages: /nl/compounds/ss-31/, /nl/compounds/retatrutide/, /nl/legal/eu/.

**O15 · UK patient pages in the Dutch product check.** On the Dutch site, move the NHS pages of the product check's
"stop" and "keep" items to the UK-only list, and keep the Dutch Thuisarts pages?
- Recommended: approve for "stop" now (Thuisarts already backs it); for "keep", first find one Dutch source (for
  example NVIC or Thuisarts), else it keeps the NHS cite.
- [ ] Approve · [ ] Don't approve
- Why: the NHS pages give UK help routes (111, 999); the Dutch text gives none, and the compound pages already
  dropped the same NHS ids. English stays exactly the same. File: `src/data/product-check.yaml`.
- Pages: every Dutch page with the product check, for example /nl/safety/before-you-consider/ and
  /nl/compounds/bpc-157/.

**O16 · Corrections log and re-checks at publishing.** When you approve publishing, also add a Dutch publication
entry to the corrections log and run the re-checks in section 8 first?
- Recommended: approve.
- [ ] Approve · [ ] Don't approve
- Entry: `nl-v1-publication` (kind publication, all routes, locales [nl]) in `src/data/corrections.yaml`, Dutch text
  in `src/i18n/nl/corrections.json`. The two existing entries stay English-only. Until then /nl/about/corrections/
  shows no start date.

**O17 · English issues found during the Dutch work.** Approve a separate fix of these on the English site (this sweep
may not edit English)?
- Recommended: approve.
- [ ] Approve · [ ] Don't approve
- /en/basics/how-signalling-works/: the Compare row "Binds the receptor?" prints "Yes Yes".
  /en/safety/before-you-consider/: a Compare cell prints "Unknown Unknown". /en/compounds/kpv/: mechanism step 6
  says "rodent … wounds"; the wound study was in rabbits. /en/compounds/pt-141/: "warning letters to several online
  sellers"; one letter naming PT-141 is verified. The English "recreational athlete" glossary entry dates the idea to
  the 2027 Code, but the Dutch 2025 rules already define it. The English retatrutide liver card says "adults with
  obesity"; its data note says obesity or overweight and at least 10% liver fat. /en/compounds/cjc-1295/ (4
  inline-link warnings) and /en/compounds/melanotan-ii/ (5 validator warnings). The English glossary entry
  `deletion-sequence` (`src/i18n/en/glossary/safety-b.json`) counts a truncated sequence as a kind of deletion
  sequence; the EMA synthetic-peptides guideline lists them separately (the Dutch entry keeps the same meaning, so
  both would change together). The SEC titles are in O10; O3 is separate.

**O18 · FDA warning letters cited through the index.** Keep citing the FDA's warning-letters index for what the
letters say, on both languages?
- Recommended: A (the letters' own pages name the seller in their title and URL, which CONTENT-GUIDE §11 bars; §11
  asks for "a neutral official source" for enforcement, and the source note lists the 4 letters that were read).
- [ ] A. Keep as now · [ ] B. Keep, and add to the source title that the link opens a search and the letters are
  listed in the note · [ ] C. Cut each line to what the index page itself shows
- Why: §11 also says "the link must show the claim". Lines such as "Geen medicijnautoriteit heeft het beoordeeld" and
  "niet-goedgekeurde nieuwe geneesmiddelen" are in the letters, not on the index page (`fda-warning-letters-index`,
  `src/data/sources/legal-b.yaml`; research/nl-notes/pt-141.md). The English pages do the same.
- Pages: /nl/compounds/pt-141/, /nl/compounds/tesamorelin/, /nl/compounds/ss-31/, /nl/legal/research-use-only/
  (English also /en/compounds/tirzepatide/).

### 1.2 The reform page: every difference from the English page

/nl/the-case-for-reform/ is your signed opinion. No position changed: the six proposals, the "we do not argue" list,
the four "would change our mind" rows, "aimed at sellers and false claims, not at users" and "longer, healthier
human lives" are the English page's. Every study, number and evidence level of the English page is kept. The
differences are below. Full detail: `research/nl-notes/about.md` ("For the owner", items 1–26, and the check's
29 wording fixes). The legal questions on this page are L3, L4, L6, L12 and L13; the NHG quote is M11.

**R0 · The whole page.** Approve the Dutch text with all differences below?
- Recommended: approve all (no position changed; each difference is a Dutch or EU example, a source, or wording).
- [ ] Approve all · [ ] Approve, except the lines I mark "Don't approve" · [ ] Don't approve

Mark a line only if you do not approve it.

- **R1 · Intro.** English names the US, the UK, Canada and Australia. Dutch: "Onze voorstellen zijn principes, niet
  de wet van één land. Bij elk voorstel noemen we iets wat er in Nederland of de EU al op lijkt." [ ] Don't approve
- **R2 · TL;DR.** Translated; answer 2 shorter. Question 5 "Do you call these products harmless?" → "Zeggen jullie
  dat deze producten geen kwaad kunnen?" (STYLE-NL bans "onschadelijk"); the same question heads "Wat we niet
  beweren". [ ] Don't approve
- **R3 · Position diagram.** Row 1 also cites the IGJ/CBG warning of September 2025. Row 4 has no selling verb ("…
  ze komen met instructies voor de dosis"). The paragraph under it says "geneesmiddelen zonder handelsvergunning".
  [ ] Don't approve
- **R4 · The case for caution.** The fold adds the first European medicines directive (1965) and the Dutch rule
  since 1963 (no marketing without registration; the CBG set up in 1963). "53 landmark cancer studies" → "53
  kankerstudies die als mijlpaal golden". [ ] Don't approve
- **R5 · Thalidomide's second lesson.** Adds "In 2008 werd het in de EU goedgekeurd voor myeloom". [ ] Don't approve
- **R6 · People are already using these products.** Adds that there is no good Dutch count either (minister of VWS,
  5 October 2026), the IGJ/CBG warning of September 2025 and the Douane article of August 2026. The Canadian,
  Australian and UK examples stay as one world-context paragraph. [ ] Don't approve
- **R7 · Hidden from doctors.** The four countries' confidentiality → the Dutch beroepsgeheim (KNMG, WGBO
  art. 7:457). Pope 2004 "their dealers" → "de mensen die hun de steroïden verkochten". [ ] Don't approve
- **R8 · The cost of waiting.** Title "Wachten heeft gevolgen", question "Is traag toezicht zonder gevolgen?", fold
  "Gevolgen voor mensen nu" (no "kost" in titles; STYLE-NL §7). Main text unchanged. [ ] Don't approve
- **R9 · Fold "why some compounds may never get a sponsor".** US and Canadian data protection → the EU rule (a copy
  may be filed after 8 years and sold after 10, at most 11) and the pending EU reform (Council text: 8 years of data
  protection plus 1 of market protection; not law on 27 October 2026). Title "misschien nooit", as the English
  "may never". [ ] Don't approve
- **R10 · Fold "Gevolgen voor mensen nu".** NICE and the NHS → the Dutch gap: Wegovy authorised in the EU since 2022
  (with its SmPC indication), the Zorginstituut's advice of July 2024 not to reimburse it (reasons, up to €1,3
  billion a year), the reassessment, liraglutide reimbursable for obesity under strict conditions, the CBG on GLP-1
  medicines used for slimming without a prescription. [ ] Don't approve
- **R11 · Retatrutide (same fold).** TRIUMPH-1 unchanged. Added for the advertising test: the TRIUMPH-2 side effects
  and "Wat gebruik na 80 weken doet, weet niemand." The TGA sentence → the NL/EU status (only in trials; not on the
  EMA list of 5 October 2026). The seizure sentence now says "in het VK" (the raid was in the UK). [ ] Don't approve
- **R12 · Six proposals diagram.** Examples from the Netherlands or the EU: the EMA's 2021 repurposing pilot, DIMS,
  Lareb, Dutch medicines law, the first Dutch anabolenpoli (2010), the EU conditional authorisation (English:
  RECOVERY, Canberra and WEDINOS, the TGA, four regulators, Alberta's college, four conditional routes).
  [ ] Don't approve
- **R13 · Fold 1 (public trials).** Adds the EMA 2021 pilot paragraph; RECOVERY stays as evidence. [ ] Don't approve
- **R14 · Fold 2 (testing services).** Canberra and WEDINOS → DIMS (since the 1990s; 2025 figures). Adds that DIMS
  and Jellinek test no medicines, steroids or anabolics, and "We vonden geen openbare dienst in Nederland die een
  flacon met een peptide test". (The attribution of one sentence is R24.) [ ] Don't approve
- **R15 · Fold 3 (side-effect reporting).** The four national schemes → Lareb (anyone may report, also products from
  the internet; Lareb does not tell your doctor) and the CBG. Proposal unchanged. [ ] Don't approve
- **R16 · Fold 4 (enforcement).** The four countries' bans → the Geneesmiddelenwet (art. 40(2), art. 84, fines up to
  €1,1 million; using is not an offence, importing is, with no own-use exception). Examples: the minister's answer of
  5 October 2026 and Europol's SHIELD VI instead of the MHRA, Health Canada and the TGA. The FDA warning stays.
  [ ] Don't approve
- **R17 · Fold 5 (guidance for doctors).** GMC, Alberta and Ahpra → the first Dutch anabolenpoli, the NHG guidance on
  weight-loss medicines obtained elsewhere, and "no NHG or KNMG guideline for unapproved peptides was found". The
  Endocrine Society's points are reported as its view ("Volgens de vereniging …"), as in English. [ ] Don't approve
- **R18 · Fold 6 (conditional routes).** The four countries' routes → the EU conditional authorisation, Dutch
  compassionate use (only through a manufacturer) and the artsenverklaring (applied for by a manufacturer,
  wholesaler, pharmacist or dispensing GP, never the patient). "Ook toegang buiten een studie hangt niet af van de
  patiënt, maar van anderen, vaak van een bedrijf." [ ] Don't approve
- **R19 · What we do not argue.** Row 1 "Dat de regels voor het op de markt brengen van medicijnen soepeler moeten"
  (no selling word); "De handelsvergunning beschermt …". Row 6 (US compounding) unchanged. [ ] Don't approve
- **R20 · FDA vote fold.** The full five-point framing; point 5 for the Netherlands and the EU ("Een Amerikaanse lijst
  verandert niets buiten de VS"). Semax "registered as a medicine in Russia" → "in Rusland toegelaten als medicijn"
  (as on every Dutch page; T3). [ ] Don't approve
- **R21 · What would change our mind.** Heading "Wat ons van mening zou doen veranderen" (conditional, as the
  English). Row 2 "Testdiensten vooral worden gebruikt als reclame voor producten". [ ] Don't approve
- **R22 · Links and photo.** All links go to Dutch pages; the hero is the Tweede Kamer photo. [ ] Don't approve
- **R23 · Sweep, wording only.** The EMA list cited by its kept id (same document); "Bijwerkingencentrum Lareb" at
  first mention; 9 numbers as digits; "ontwikkeltrajecten" in the Wong 2019 key number. No fact, number or argument
  changed. [ ] Don't approve

Four open choices on this page:

- **R24 · "Testen maakt een product niet veilig."** It is now the site's own sentence; English attributes it to the
  ACT Government (Canberra, which the Dutch page no longer names). Recommended: A.
  [ ] A. Keep it as our own sentence · [ ] B. Restore the ACT Government attribution
- **R25 · "kunnen ook anderen over de streep trekken"** (serious-arguments fold) is a little stronger than the English
  "might draw in others". The sentence before already says "aantrekken". Recommended: A.
  [ ] A. Keep · [ ] B. Change to "kunnen ook anderen aantrekken"
- **R26 · "Veelbelovende stoffen wachten soms jaren op een sponsor"** (table row; English "Promising compounds"). The
  row cites the FDA briefing on BPC-157, and STYLE-NL rules out "veelbelovend" in our own voice. Recommended: A.
  [ ] A. Change to "Stoffen die het onderzoeken waard zijn, wachten soms jaren op een sponsor" · [ ] B. Keep
- **R27 · HHS notice (FDA vote fold, added 3 November 2026).** Because of the HHS notice of 30 October 2026 (FR Doc.
  2026-22192), the fold now adds 3 short sentences of plain fact: HHS published a draft for a temporary policy that
  is not binding; HHS does not intend to act against compounding with the 6 peptides while the formal rule is
  missing; this applies only under strict conditions (such as a prescription for a named patient and a registered
  manufacturer) and changes nothing in the Netherlands or the EU. Before them, the rulemaking sentence says "volgens
  de wet pas" instead of "pas legaal", followed by a check of 3 November 2026 (not on the 503A list; no rule
  proposed). No opinion is added. The English reform page does not have this yet. If this change reaches the live
  page after its first upload, the page's last paragraph promises a corrections-log entry for it, with
  `opinion.updated` set to that date. Recommended: approve.
  [ ] Approve · [ ] Don't approve

---

## 2. For the legal reviewer

Each line asks whether the Dutch text is right as written. Recommended answer first.

**L1 · The 2026 advertising rulings in plain Dutch.** Approve the summaries as written?
- [ ] Approve · [ ] Approve with the changes I name
- The five-point list "what this means for our pages" and "in wervende woorden … benadrukten" (RvS para. 6.3) on
  /nl/about/editorial-policy/; the test sentence on /nl/about/ and /nl/legal/whats-changing/; the Rb Amsterdam case on
  /nl/legal/nl/ and /nl/about/funding/ (no brand, no publisher named; the ruling may be under appeal, so the pages
  state only what the court decided); the Rb Noord-Nederland case (a church minister, ivermectin, a video channel) as
  an influencer example on /nl/evidence/conflicts-of-interest/. Also: the B1 summary of Damgaard (CJEU 2009) on the
  about pages (nl-law §6.8), and whether /nl/about/ should also name the SmPC test or leave it to editorial-policy.

**L2 · The Rb Amsterdam bullet on /nl/legal/whats-changing/.** Keep the two sentences that say what each semaglutide
medicine is approved for?
- [ ] Approve · [ ] Don't approve (keep only "Het ging om 2 semaglutide-medicijnen op recept.")
- The ruling does not state the second medicine's indication, so that sentence rests on the Dutch SmPC
  (`ema-pi-ozempic-nl`, `ema-pi-wegovy-nl`). "onder meer" covers adolescents from 12. The old "onder voorwaarden" was
  wrong (Wegovy has a standard authorisation). Optional: add "als aanvulling op een caloriearm dieet en meer
  lichaamsbeweging" from SmPC 4.1.

**L3 · Authorised medicines under the advertising test.** Do these passages pass (balanced, in line with the Dutch
SmPC, off-label shown as off-label)?
- Recommended: approve, except two changes: replace "2,4 mg" and "7,2 mg" on /nl/basics/how-signalling-works/ with
  the no-number wording in `research/nl-notes/basics-a.md` (no doses on a basics page); cut the semaglutide paragraph
  "Dat Wegovy niet wordt vergoed, heeft gevolgen …" to the Zorginstituut's reasons.
- [ ] Approve with the two changes · [ ] Approve all as written · [ ] Change the ones I name
- Passages: /nl/start-here/ step 1 (SmPC indication, "zeer vaak" side effects, pancreatitis, pregnancy, and the
  Zorginstituut's "werkt voor gewichtsverlies"); the GLP-1 fold on /nl/basics/how-signalling-works/ (about 110–150
  words English lacks) and the semaglutide animation text there and on /nl/compounds/semaglutide/ (effects named,
  side effects in the risks section); /nl/safety/monitoring/ (Wegovy indication in the blood-fats fold; no indication
  line for Mounjaro); the SELECT example and the independence bullet on /nl/evidence/how-to-read-a-study/ and
  /nl/evidence/evidence-grading/; "voor de onderzochte toepassingen" on /nl/evidence/the-translation-gap/;
  /nl/basics/why-not-a-pill/ (TL;DR item 4 with one side effect; the tablet intake rules stated as the product
  information's rules; Wegovy tablets named without their indication); /nl/compounds/semaglutide/ (the
  reimbursement paragraph; the CBG-worded off-label statement); /nl/compounds/tirzepatide/ (TL;DR "Werkt het? Ja,
  voor bloedsuiker en gewicht …"; the comparisons with semaglutide and dulaglutide; the reimbursement gap);
  /nl/compounds/retatrutide/ (tirzepatide's weight effect with its SmPC lines); /nl/compounds/ipamorelin/
  (Ghryvelin with its SmPC indication, side effect, contraindication and QT warning); /nl/the-case-for-reform/ and
  /nl/about/editorial-policy/ (the Wegovy indication; RECOVERY and thalidomide uses in a signed opinion piece);
  riluzole named in the ALS fold (Scott 2008). Also nl-law §6.6: neutral reporting of trial evidence for
  unregistered uses (semaglutide, tirzepatide, tesamorelin) next to the authorised indication and main risks.

**L4 · Evaluative lines on compounds without a Dutch handelsvergunning.** Do they pass (no praise beyond the stated
evidence level)?
- Recommended: approve, except one change: on /nl/compounds/pt-141/ turn "1 dosis per 24 uur" and "niet vaker dan
  8 keer per maand" into "De Amerikaanse productinformatie beperkt hoe vaak het mag" (the site names no schedules).
- [ ] Approve with the one change · [ ] Approve all as written · [ ] Change the ones I name
- Lines: /nl/compounds/bpc-157/ ("Dit onderzoek is niet waardeloos", "veelbelovend" attributed to reviewers);
  /nl/compounds/retatrutide/ ("Het bewijs is niet zwak", with the risks in the same paragraph) and its weight result
  on /nl/the-case-for-reform/ with TRIUMPH-2 side effects; /nl/compounds/pt-141/ ("58 op 100 zeiden dat het hielp",
  next to the null result); /nl/compounds/ghk-cu/ (a positive gel result next to two null results);
  /nl/compounds/melanotan-ii/ (fold "Wat de biologie wel opleverde"); /nl/compounds/tesamorelin/ (unregistered uses
  reported neutrally; no "Yes" in the TL;DR; "most promising" removed); /nl/compounds/cjc-1295/ (developer quote
  "veilig en redelijk goed te verdragen"; the English "shows that this route can work" is now only the fact of
  tesamorelin's US approval plus the CHMP's doubt); /nl/compounds/ipamorelin/ ("Amerikaanse klinieken … prijzen het aan", answered
  at once); /nl/compounds/ss-31/ ("Het Amerikaanse medicijn heeft de minste onzekerheden"); /nl/compounds/mots-c/ and
  /nl/compounds/epitalon/ ("online aangeprezen voor …"); /nl/compounds/semax/ ("In de VS verkocht voor …");
  /nl/compounds/nad-precursors/ ("Klinieken bieden NAD+-infusen aan"); /nl/compounds/kpv/ (no "veelbelovend",
  "sterkste", "betrouwbaar"); /nl/basics/ and /nl/basics/what-is-a-peptide/ ("buiten de apotheek verkocht");
  /nl/basics/why-not-a-pill/ (orforglipron's phase 2 weight range and its US and UK approvals).

**L5 · The ban on selling and importing.** The Geneesmiddelenwet decides per product whether it is a geneesmiddel
(unresolved, nl-law 5.4). How should pages say it?
- Recommended: A, then make the pages consistent.
- [ ] A. Plain in the TL;DR; once in the body, say the law decides per product (presentation or function test) ·
  [ ] B. Plain everywhere (as most pages do now) · [ ] C. "Volgens onze lezing" everywhere (as melanotan II does now)
- Plain now: /nl/compounds/bpc-157/ ("Verkopen en invoeren zijn verboden"), /nl/compounds/tb-500/ (art. 1(1)(b);
  Customs: "Onderzoeksdoeleinden spelen dan geen rol"), /nl/compounds/kpv/, /nl/compounds/cjc-1295/ (never says in
  words that it is a geneesmiddel; leaves out the narrow art. 40(3) exceptions), /nl/compounds/ss-31/ (conditional),
  /nl/start-here/ TL;DR ("Zelf invoeren mag ook niet"), /nl/legal/nl/ ("Nee" for passing on and for own-use import;
  "Met opzet is het een misdrijf", art. 40(2) with the WED). Qualified: /nl/compounds/melanotan-ii/. Also: should
  the "Zelf invoeren" paragraph on /nl/compounds/semaglutide/ cite art. 40(2)? /nl/compounds/epitalon/ is in the
  same group.

**L6 · Possession and own use.** Approve these lines (they quote the law and state the unknown as unknown)?
- [ ] Approve · [ ] Change the ones I name
- /nl/start-here/ (possession of a few vials is legally unsettled); /nl/compounds/ipamorelin/ and /nl/legal/nl/
  ("Gebruiken staat niet in dat verbod … Of bezit voor eigen gebruik mag, is niet duidelijk"); /nl/the-case-for-reform/
  fold 4 ("in voorraad te hebben", then "Gebruiken noemt de wet niet als overtreding. Invoeren wel …");
  /nl/compounds/cjc-1295/. Also nl-law §6.7: the Dopingautoriteit's "gedoogt het bezit van doping voor eigen
  gebruik" is quoted only for doping substances, never for other medicines. Agree?

**L7 · Dutch treatment routes.** Approve the readings as written?
- [ ] Approve · [ ] Change the ones I name
- /nl/legal-routes/, /nl/start-here/, /nl/talking-to-your-doctor/: art. 67 and the 2023 Beleidsregel in B1 ("de wet
  verbiedt het, maar sinds april 2023 treedt de minister daar niet tegen op als …"; phone consults not mentioned); a
  prescription from another EU/EEA state is a valid Dutch recept (add that the pharmacist checks it?); "volgens ons
  in de praktijk niet" for an artsenverklaring for a peptide approved nowhere; tesamorelin, bremelanotide and
  elamipretide named as examples where that route exists; "Nederland heeft geen apart medisch noodprogramma"
  (art. 40(3)); travellers ("Ook dan blijft een geneesmiddel zonder handelsvergunning verboden"); "machtiging van je
  zorgverzekeraar" to keep the two meanings of "artsenverklaring" apart (no Zorgverzekeraars Nederland page read);
  Mounjaro: artsenverklaring and magistrale bereiding do not fit (KNMP); the EU row "in geen enkele lidstaat in de
  handel" (Directive art. 6(1)); "Recept en off-label: die wegen gaan over goedgekeurde medicijnen"
  (/nl/compounds/mots-c/, /nl/compounds/epitalon/, /nl/compounds/thymosin-alpha-1/). Left out: that a pharmacy-made
  semaglutide for weight is not reimbursed.
- Compound pages: /nl/history/how-we-got-here/ ("Niet per se"), /nl/compounds/retatrutide/ ("in de praktijk alleen
  legaal binnen een studie"), /nl/compounds/tb-500/, /nl/compounds/pt-141/ ("Alleen een smalle"),
  /nl/compounds/thymosin-alpha-1/, /nl/compounds/ss-31/, /nl/compounds/semax/, /nl/compounds/tesamorelin/,
  /nl/compounds/tirzepatide/, /nl/compounds/mots-c/, /nl/the-case-for-reform/ (fold 6).

**L8 · Customs and parcels.** Approve the wording, and keep Customs' page of 31 August 2026 uncited (its URL
carries "kopen" and "bestellen")?
- Recommended: A.
- [ ] A. Approve both · [ ] B. Approve the wording; allow an exception for that Customs URL · [ ] C. Change the
  lines I name
- /nl/legal/nl/: a parcel "kan worden tegengehouden, gemeld bij de IGJ of in beslag genomen" (it does not say that
  Customs' flow chart releases some own-use parcels; nl-law §6.4). /nl/legal-routes/#zelf-invoeren: what Customs
  "can" do, and the active-substance row (a powder treated as a werkzame stof: parcel seized, recipient a suspect;
  is that reading of art. 38 and Customs ch. 8, 12.4.4 and 13 right? nl-law §6.5). Van Bennekom's "external form"
  applied to vials, labelled as our reading (/nl/legal/research-use-only/). /nl/compounds/tirzepatide/ ("Een pakket
  uit een land buiten de EU valt niet onder die regel"). /nl/legal/sport-and-doping/ ("Dan kan een pakket dat de
  Douane tegenhoudt zo een dopingzaak worden"). Using the page's shortlink to get past the token rule is not
  recommended.

**L9 · Other legal readings.** Approve as written?
- [ ] Approve · [ ] Change the ones I name
- /nl/legal/eu/ and /nl/legal/nl/: Directive 2001/83 art. 86(2) reads differently in Dutch and English (the English
  adds "provided that there is no reference, even indirect, to medicinal products"; re-read in the 2025
  consolidation); the pages say only that, and do not rely on Gnw art. 83(d) (nl-law §6.3). "een stop opleggen" for
  the IGJ's "bevel" (art. 115). /nl/talking-to-your-doctor/: WGBO 7:460 ("opzeggen mag alleen om gewichtige redenen").
  /nl/safety/before-you-consider/ and /nl/safety/if-something-goes-wrong/: "Is zelf een middel gebruiken een van de
  uitzonderingen? Nee" (KNMG); the pharmacist as the route for a suspected fake pen from a pharmacy (also
  /nl/compounds/tirzepatide/: "Denk je dat een pen van de apotheek nep is? Vertel het je apotheker.").
  /nl/compounds/semaglutide/: "Generieke semaglutide mag nu niet legaal in Nederland op de markt komen"; the 2027
  Regeling leaving item 146 unchanged ("kan nog veranderen"). /nl/compounds/tirzepatide/: online prescribing only
  under strict conditions. /nl/compounds/semax/ and /nl/compounds/selank/: "Een toelating buiten de EU telt niet".
  /nl/compounds/ghk-cu/: a cream can fall under the Gnw when presented as a remedy; "Toegestaan als cosmetisch
  ingrediënt? Ja" (CosIng; the annexes were not read). /nl/compounds/aod-9604/: "Wordt een product aangeprezen voor
  afvallen of herstel? Dan valt het volgens onze lezing meestal al onder de omschrijving van een geneesmiddel" (as
  /nl/legal/nl/). /nl/compounds/aod-9604/, /nl/compounds/ss-31/,
  /nl/compounds/nad-precursors/: Regulation 178/2002 "geconsumeerd" excludes injection; NMN not authorised in the EU.
  /nl/basics/what-is-a-peptide/: the EMA 2025 guideline draws the line by manufacture, not size.
  /nl/safety/sharps-disposal/: a closed or full needle container never goes in the restafval.
  /nl/evidence/conflicts-of-interest/: gunstbetoon and the Transparantieregister Zorg (one IGJ page; a bill is
  pending).

**L10 · Sport: one wording for unnamed peptides.** Use "volgens de tekst van S0 altijd verboden; WADA noemt het niet
met naam, vraag het de Dopingautoriteit" on every Dutch page, instead of a plain "altijd verboden"?
- Recommended: approve (WADA's own words: "may still be prohibited"; nl-law §5.10).
- [ ] Approve · [ ] Don't approve
- Now: /nl/compounds/kpv/, /nl/compounds/epitalon/ and /nl/compounds/retatrutide/ already say "volgens de tekst van
  S0" (applied in the sweep); /nl/compounds/melanotan-ii/ says "volgens onze lezing"; the row on
  /nl/legal/sport-and-doping/ says "ja (onder S0)". If approved, melanotan II and the sport row follow. The data rows
  are O12.

**L11 · Sport and doping readings.** Approve them, and keep the tracker item `nl-ndr-2027` at "rulemaking" until the
2027 NDR text is published?
- Recommended: A.
- [ ] A. Approve both · [ ] B. Approve the readings; set `nl-ndr-2027` to "adopted" · [ ] C. Change the readings I name
- /nl/legal/sport-and-doping/: gym users who are not members of a federation are "Meestal niet" bound (our reading of
  Wuab art. 2(1) and NDR 2025 art. 71.10, which goes beyond the Dopingautoriteit's "alle leden van de
  topsportbonden"); the refusal sanction "doorgaans 2 jaar, misschien 4", attributed to the Dopingautoriteit (the
  Code starts from 4 years, or 2 if not intentional; not re-read); the Canadian 2025 BPC-157/TB-500 case as a foreign
  example (also /nl/compounds/bpc-157/, /nl/compounds/tb-500/). `nl-ndr-2027` already says "rulemaking"
  (/nl/legal/whats-changing/).

**L12 · EU reform and open safety signals before they are final.** May /nl/legal/whats-changing/, /nl/legal/eu/ and
/nl/the-case-for-reform/ describe the agreed EU pharma reform (six points of the Council's first-reading position)
and the open PRAC signals, dated and marked "nog geen wet" or "nog niet afgerond"?
- Recommended: approve.
- [ ] Approve · [ ] Remove until published or concluded
- Council position adopted 28 September 2026, published 1 October; Parliament's second reading pending (indicative
  23 November 2026). The pages give no deadline under TFEU art. 294(7) and draw no conclusion on the new magistral
  rule (art. 1(5)) for Dutch pharmacy preparations (eu-status §6.2, §6.4). The medical wording is M14.

**L13 · Sources that name a business in their body text.** Keep citing them, never quoting the names?
- Recommended: A (CONTENT-GUIDE §11 bars titles and URLs; the brief's "any page naming a seller or company" needs
  your reading).
- [ ] A. Keep citing without quoting names · [ ] B. Replace the Customs article with
  `igj-2026-04-nps-websites-offline` and `douane-hvgem-geneesmiddelen-h7-vaststelling-geneesmiddel` where they
  support the sentence ·
  [ ] C. Drop them
- `douane-2026-08-illegale-online-handel-medicijnen` (names a webshop): /nl/legal/nl/, /nl/legal-routes/,
  /nl/the-case-for-reform/, /nl/compounds/bpc-157/, /nl/compounds/kpv/, /nl/compounds/cjc-1295/,
  /nl/compounds/ipamorelin/, and /nl/compounds/melanotan-ii/ (which quotes one sentence).
  `nl-rbams-2026-5160-publieksreclame-journalistiek` (names a publisher and brands). `lareb-2021-illegal-medicines`
  (names 3 illegal products; cited only for "users of illegal medicines can report"). `igj-2026-10-stolen-medicines`
  (a side box links a media item whose title names the manufacturer; /nl/start-here/, /nl/compounds/semaglutide/).
  Also left out on purpose: the IGJ's August 2026 order against a peptide webshop and its February 2026 peptide
  statements (media only; nl-law §6.1).

**L14 · Names used for identification.** Approve naming these organisations, trials and products as neutral facts?
- [ ] Approve · [ ] Remove the ones I name
- PLIVA and Parke-Davis (/nl/history/the-croatian-lab/); RegeneRx, ReGenTree and NL005 (/nl/compounds/tb-500/); Eli
  Lilly, LY3437943 and its expanded-access programme (/nl/compounds/retatrutide/); TRIUMPH-Outcomes and
  SYNERGY-Outcomes (/nl/legal-routes/, /nl/compounds/retatrutide/; SYNERGY-Outcomes also /nl/compounds/tirzepatide/); DIMS and Jellinek, named to say they test no peptides or medicines
  (/nl/safety/product-risk/, /nl/safety/); the Raad voor Accreditatie (/nl/safety/product-risk/; no register
  linked, no lab named); the
  spuitomruil, the Drugs Infolijn and Lareb (/nl/safety/sterile-technique/, /nl/safety/injection-safety/,
  /nl/safety/sharps-disposal/); Wegovy for label facts only on the safety pages; the FDA warning-letters index
  (/nl/compounds/tesamorelin/, /nl/compounds/pt-141/, /nl/compounds/ss-31/, /nl/legal/research-use-only/; how it is
  cited is O18).

**L15 · Help numbers and quotations.** Approve as written?
- [ ] Approve · [ ] Change the ones I name
- 0900-1995 with its price, as on the Drugs Infolijn's own page (/nl/safety/if-something-goes-wrong/); the Belgian
  1733 and 070 245 245 (now only on /nl/legal/be/); the Landelijk Meldpunt Zorg number not printed (nl-help §6.8; is
  there any risk for someone who reports a seller they bought from? §6.9). Quotes: the IGJ advice in the "u" form
  ("Hebt u medicatie online gekocht? Gebruik die niet …", /nl/safety/product-risk/); the trial registry's English
  self-description and one Douane sentence (/nl/compounds/melanotan-ii/).

**L16 · Seller warning signs on /nl/safety/product-risk/.** Are the seller column ("Verkoopt een receptmedicijn
zonder recept", "Is geen apotheek") and the line on IGJ or CBG logos used falsely acceptable as negative-only signs
(CONTENT-GUIDE §1a)?
- Recommended: approve (they only say what is a bad sign, never what makes a seller good; the lab-report ladder
  follows STYLE-NL §5.5 exactly).
- [ ] Approve · [ ] Remove the seller column

**L17 · Belgian notes.** Approve the legal lines on /nl/legal/be/?
- Recommended: approve, and leave out the KB of 1974 (which peptides it covers is unresolved).
- [ ] Approve, without the KB of 1974 · [ ] Approve, and mention the KB of 1974 · [ ] Change the lines I name
- The TL;DR line on art. 16 §1 2° ("kan een geldboete krijgen"); the fine of up to € 25.000 for recreational athletes
  outside a federation under the Flemish decree; only the FAGG's Q&A on the logo is linked, not its list of online
  pharmacies; reporting to the FAGG (be-notes §6.1–6.5).

**L18 · "Approved nowhere".** Soften "nergens goedgekeurd" and "Geen enkel land heeft het goedgekeurd" to "voor zover
bekend", unless the line is attributed (for example to the TGA)?
- Recommended: approve (other member states' national registers were not searched; no official worldwide source
  exists).
- [ ] Approve · [ ] Keep as on English
- Pages: /nl/compounds/retatrutide/ (lede, description, what-it-is), /nl/compounds/kpv/, /nl/legal/sport-and-doping/
  ("Geen medicijnautoriteit heeft het goedgekeurd").

**L19 · The Raad van State in plain Dutch.** /nl/legal/nl/ says "de hoogste bestuursrechter". Change it to the
glossary and editorial-policy wording, "de hoogste rechter in veel zaken tegen de overheid, zoals een boete van een
minister"?
- Recommended: approve (the Netherlands has more than one highest administrative court; raadvanstate.nl could not be
  read on 27 October, so this is wording only).
- [ ] Approve · [ ] Keep "de hoogste bestuursrechter"
- Pages: /nl/legal/nl/, /nl/about/editorial-policy/.

---

## 3. For the medical reviewer

**M1 · Urgent help wording.** For "urgent, not life-threatening" the pages say "Bel direct je huisarts. Is de
praktijk dicht? Bel dan de huisartsenpost." It replaced STYLE-NL's earlier "zoek vandaag nog hulp" (Thuisarts says
"bel direct"; brief item 2; nl-help fact 17). The warning-sign label is "Bel direct je huisarts of de huisartsenpost".
- [ ] Approve · [ ] Don't approve
- Pages: /nl/safety/warning-signs/, /nl/safety/if-something-goes-wrong/ and every compound stop box.

**M2 · Help levels faster than Thuisarts.** Keep the site's faster levels (nl-help fact 17: a faster level never
harms the reader), as the sweep has now aligned them?
- Recommended: A.
- [ ] A. Keep the faster levels · [ ] B. Follow Thuisarts everywhere (and change `src/i18n/nl/warning-signs.json`)
- 112 now: pancreatitis signs on /nl/compounds/semaglutide/, /nl/compounds/tirzepatide/ and
  /nl/compounds/retatrutide/ (was "bel direct"; Thuisarts names no 112 for belly pain); sudden loss of sight
  (semaglutide); low blood sugar with drowsiness or confusion (/nl/compounds/mots-c/, /nl/compounds/semaglutide/,
  /nl/compounds/tirzepatide/, /nl/safety/product-risk/; Thuisarts: 112 only when unconscious); a racing or irregular heart that does not settle (/nl/compounds/ipamorelin/,
  /nl/compounds/hexarelin/; Thuisarts: "bel direct je huisarts" for palpitations alone); a very bad
  headache with vomiting or blurred vision (/nl/compounds/cjc-1295/; note: the cited NHS page puts this at urgent
  GP/111, the page's own blood-pressure warning sign at emergency); fainting without coming round within a minute
  (/nl/compounds/cjc-1295/, /nl/compounds/ipamorelin/; Thuisarts: GP after 3 minutes); sepsis signs (/nl/compounds/nad-precursors/, /nl/compounds/ss-31/, the
  safety pages); severe breathlessness; priapism (M3); allergic reactions (Thuisarts: 112, huisarts or spoedpost).
- "Bel direct" now: a pus lump (Thuisarts: an appointment unless there is fever); fever after an injection;
  jaundice (/nl/compounds/pt-141/); unusual bleeding and eye pain after nose drops (/nl/compounds/semax/); one
  swollen leg and darker skin (/nl/compounds/bpc-157/). Also: "Rijd niet zelf … of bel 112" next to the rule that the
  SEH is reached through the huisarts.

**M3 · Priapism.** Keep "Bel direct 112"?
- Recommended: approve (needs treatment within hours; Thuisarts has no page; the NHS says A&E; STYLE-NL never sends
  readers to the SEH on their own).
- [ ] Approve · [ ] Huisarts or huisartsenpost
- Pages: /nl/compounds/pt-141/, /nl/compounds/melanotan-ii/.

**M4 · Hives or a swollen face, breathing normal.** Keep the levels as the sweep set them?
- Recommended: A.
- [ ] A. Keep as now · [ ] B. Appointment everywhere, also tesamorelin and SS-31 · [ ] C. As A, but CJC-1295's "hives
  all over" also at the appointment level
- Now: "Stop en maak een afspraak met je huisarts" on /nl/compounds/bpc-157/, /nl/compounds/kpv/,
  /nl/compounds/tb-500/, /nl/compounds/selank/, /nl/compounds/semax/, /nl/compounds/aod-9604/,
  /nl/compounds/ghk-cu/, /nl/compounds/hexarelin/, /nl/compounds/nad-precursors/, /nl/compounds/epitalon/,
  /nl/compounds/mots-c/, /nl/compounds/thymosin-alpha-1/ and the safety pages (as `warning-signs.json` and Thuisarts).
  "Bel direct je huisarts" on /nl/compounds/tesamorelin/ and /nl/compounds/ss-31/ (their US labels warn of serious
  reactions). 112 for hives all over on /nl/compounds/cjc-1295/ (as its English page).

**M5 · Very high blood sugar.** Keep "Bel direct je huisarts" (not 112) for very high sugar with vomiting, fast
breathing or drowsiness?
- Recommended: approve (Thuisarts names 112 only for unconsciousness; the NHS says urgent help).
- [ ] Approve · [ ] 112 when someone is very drowsy or confused
- Pages: /nl/compounds/ipamorelin/, /nl/compounds/tesamorelin/. (Retatrutide sends ketoacidosis in type 1 diabetes
  to 112, as the English; no Dutch page checked.) Also on /nl/compounds/tesamorelin/: "Slechter zien, als je diabetes
  hebt: bel direct je huisarts" (no Thuisarts page checked for this sign).

**M6 · The 113 line.** Keep "bel gratis 113 of kijk op 113.nl" in the mood paragraph of both GLP-1 pages (not on
English)?
- Recommended: approve (113's own page prints it; never 0800-0113).
- [ ] Approve on both · [ ] Remove from both
- Pages: /nl/compounds/semaglutide/, /nl/compounds/tirzepatide/ (added in the sweep).

**M7 · Pregnancy and breastfeeding on /nl/safety/before-you-consider/.** The Lead answers "Nee" to "Mag ik ze
gebruiken als ik zwanger ben of borstvoeding geef?", while the EU Mounjaro SmPC says breastfeeding use "kan worden
overwogen" (the fold says so).
- Recommended: B (for an authorised medicine the advertising test asks for SmPC wording).
- [ ] A. Keep "Nee" · [ ] B. Lead: "Niet zwanger worden of zijn. Borstvoeding: bespreek het met je arts; bij de andere
  stoffen weet niemand het."

**M8 · EU and US labels.** Approve how the pages show where the EU and US labels differ, and the stricter red lines?
- Recommended: approve (each difference is stated openly, with "Bespreek met je arts").
- [ ] Approve · [ ] Change the ones I name
- MTC/MEN 2 "niet gebruiken", though the EU SmPC has no contraindication (/nl/safety/before-you-consider/,
  /nl/compounds/semaglutide/); the pill (EU: not clinically relevant; US: a barrier method for 4 weeks;
  /nl/compounds/tirzepatide/, /nl/safety/monitoring/, and should /nl/compounds/retatrutide/ put the EU text first?); EU and US heart-rate
  numbers (/nl/safety/monitoring/); the 89% bioavailability from the US label only and "5 tot 7 weken"
  (/nl/basics/why-not-a-pill/, /nl/basics/pharmacokinetics/); NAION in PRAC wording only, without the SmPC's "about
  1 extra case per 10.000 patiëntjaren"; "niet tijdens de zwangerschap" next to the 4.3 contraindication
  (/nl/evidence/how-to-read-a-study/); Kayshild described as approved on ESSENCE; the Scenesse side effects
  (/nl/compounds/melanotan-ii/); should Mounjaro show the black triangle (eu-status §6.9)?

**M9 · Weight of harms next to benefits.** Approve as written?
- Recommended: approve; name Rybelsus on /nl/evidence/the-translation-gap/ if you want it complete.
- [ ] Approve · [ ] Change the ones I name
- The side-effect line under the SELECT example (16,6 vs 8,2 in 100 stopped for adverse events, plus the GI side
  effects; /nl/evidence/how-to-read-a-study/); "behalve riluzole had geen enkel middel bij patiënten gewerkt" (ALS
  fold); only Ozempic and Wegovy named on /nl/evidence/the-translation-gap/; the minimum side-effect line on
  /nl/legal-routes/; the US Wegovy label next to the Dutch SmPC on /nl/start-here/ (or the SmPC alone).

**M10 · First aid and injection steps.** Approve as written?
- [ ] Approve · [ ] Change the ones I name
- Severe allergy: own adrenaline pen, then 112. Low blood sugar: NHS and ADA steps, without Thuisarts's honey or syrup
  in the cheeks for helpers (add it?). After a needle-stick: "Ontsmet de wond daarna (70% alcohol of
  jodiumoplossing)" (LCI; on both /nl/safety/sharps-disposal/ and /nl/safety/injection-safety/: keep or drop on
  both), "minstens 30 seconden" and "Knijp er niet in en wrijf er niet over" (healthdirect) next to LCI's "goed
  doorbloeden (niet stelpen)", then huisarts or GGD, or the huisartsenpost when closed. Mild allergic reaction: add
  "Stop niet zomaar met je medicijnen"? The DRUGSinfo sentence on hitting an artery (/nl/safety/injection-safety/).
  Left out because unsourced: "Calling too often is better than calling too late" and "Stay with the person until
  help arrives". Pages also: /nl/safety/if-something-goes-wrong/, /nl/safety/warning-signs/,
  /nl/compounds/retatrutide/, /nl/compounds/ipamorelin/, /nl/compounds/tesamorelin/.

**M11 · GPs, the NHG and check-ups.** Approve as written?
- [ ] Approve · [ ] Change the ones I name
- The NHG "facultatief" reading in Thuisarts's words (/nl/talking-to-your-doctor/, /nl/compounds/semaglutide/, and
  "Een huisarts hoeft die niet zelf voor te schrijven" on /nl/legal-routes/). The
  NHG sentence of October 2025 (the GP is not responsible for periodic checks of medication obtained elsewhere, but
  helps recognise side effects) on /nl/talking-to-your-doctor/, /nl/safety/monitoring/, /nl/safety/product-risk/,
  /nl/the-case-for-reform/ (fold 5), /nl/legal-routes/ and /nl/compounds/tirzepatide/: safe on a site read by people
  using unlicensed products? "Je huisarts kan je helpen om bloedonderzoek te kiezen" (product check). "Voor de huisarts zelf betaal je niets, maar
  bloedonderzoek in een lab gaat van je eigen risico af" (/nl/compounds/bpc-157/): true for every test on the list?

**M12 · Cancer screening "due for your age".** Five wordings are in use. Pick one for all pages.
- Recommended: A (no source on these pages says the Dutch bevolkingsonderzoek covers what the English means).
- [ ] A. "de controles op kanker die bij je leeftijd passen" · [ ] B. "het bevolkingsonderzoek naar kanker dat bij je
  leeftijd hoort"
- Now: /nl/compounds/tesamorelin/ (A), /nl/compounds/cjc-1295/ (B), /nl/compounds/epitalon/ ("… die bij je leeftijd
  horen"), /nl/compounds/bpc-157/ ("onderzoek naar kanker dat bij je leeftijd past"), /nl/compounds/ipamorelin/
  ("Onderzoek naar kanker dat bij jouw leeftijd hoort").

**M13 · Foreign medical sources as evidence.** Keep non-Dutch sources for what a sign or test means (never as a
help route) where no Dutch source is registered, and replace each when one is?
- Recommended: approve.
- [ ] Approve · [ ] Thuisarts only: drop lines without a Dutch source
- NHS pages on priapism, headaches, moles, cancer symptoms, high blood sugar; MedlinePlus on rhabdomyolysis and the
  lab tests (/nl/safety/monitoring/); the FDA's online-pharmacy advice for two cells on /nl/safety/product-risk/;
  hexarelin's growth-hormone risks from the FDA's CJC-1295 briefing (/nl/compounds/hexarelin/); the PRAC NAION page
  instead of the MHRA one (/nl/safety/warning-signs/). Also /nl/compounds/pt-141/, /nl/compounds/melanotan-ii/,
  /nl/compounds/tb-500/, /nl/compounds/tesamorelin/.

**M14 · Open PRAC signals.** Keep them only on /nl/legal/whats-changing/, dated and marked open, and off the compound
pages until PRAC concludes? Please also check their plain-Dutch wording (cardioembolic stroke, lithium levels,
peripheral neuropathy, ischaemic colitis; volvulus closed).
- Recommended: A.
- [ ] A. Approve · [ ] B. Add one dated line on each GLP-1 page too · [ ] C. Remove everywhere until PRAC concludes
- /nl/compounds/semaglutide/ removed the open ischaemic-colitis signal (eu-status §6.10).

**M15 · Specific wordings.** Approve as written?
- [ ] Approve · [ ] Change the ones I name
- "Bij muizen hielpen ze tumoren" (/nl/compounds/nad-precursors/ TL;DR, as the English simplifies); "Deels"
  (/nl/compounds/ss-31/); "vooral in studies bij ratten en muizen" (/nl/history/the-croatian-lab/); "veilig" only for
  what the 1906 and 1938 US laws required (/nl/history/how-we-got-here/); "Sneller herstel bij dieren met colitis of
  een wond" (/nl/compounds/kpv/; the wound study was in rabbits); "Jeukende bulten, dik gezicht of keel, moeilijk
  ademen" (/nl/compounds/tesamorelin/ stop sign); "bloedingen of blauwe plekken zonder reden"
  (/nl/compounds/bpc-157/); "een Belgisch lab voor volksgezondheid" for Vanhee 2015 (/nl/compounds/epitalon/;
  English "a national laboratory"); nothing about NAD+ infusions in Dutch clinics (no Dutch source).

**M16 · "Een lab kan testen wat erin zat."** Remove this sentence from the product check's "keep the vial" item?
- Recommended: A ("Moet je naar een arts? Neem ze dan mee." stays). No Dutch public service tests a peptide vial
  (nl-help facts 40–41), and no source says a doctor can have one tested.
- [ ] A. Remove it · [ ] B. Replace with "Een arts kan het dan laten onderzoeken." · [ ] C. Keep it
- File: `src/i18n/nl/product-check.json`. Pages: every page with the product check, for example
  /nl/safety/before-you-consider/.

---

## 4. For the medical translator

**T1 · Technical terms.** Approve these Dutch renderings (now fixed in STYLE-NL §2)?
- [ ] Approve all · [ ] Change the ones I name
- intrinsieke activiteit (efficacy), potentie, partiële agonist, biased agonisme, desensitisatie, "eilandjes van
  Langerhans uit dieren"; odds, oddsratio and "kans (odds)" in B1 labels; "goed opgezette studie" and "eerlijke
  studies" (fair trials); "bewijs van redelijke kwaliteit" (GRADE moderate); "een plotselinge beschadiging van de
  oogzenuw" (NAION gloss); "publicatie" (PubMed record); "oorspronkelijke studies"; "toonaangevend" and
  "spraakmakend" (landmark, high-profile); "de studies waarop de goedkeuring rust" (pivotal trials); plaatjesremmers,
  stollingsstoornis; "hypoactief seksueel verlangen" (HSDD); "veilig en redelijk goed te verdragen" (a developer
  quote). Pages: /nl/basics/how-signalling-works/, /nl/evidence/the-translation-gap/,
  /nl/evidence/how-to-read-a-study/, /nl/evidence/conflicts-of-interest/, /nl/history/the-croatian-lab/,
  /nl/safety/product-risk/, /nl/compounds/semax/, /nl/compounds/pt-141/, /nl/compounds/cjc-1295/,
  /nl/compounds/ipamorelin/, /nl/compounds/tesamorelin/, the glossary.

**T2 · English terms kept.** Approve keeping these in English, each with a Dutch explanation?
- [ ] Approve · [ ] Change the ones I name
- "umbrella review" (against STYLE-NL §2.8, but it is the glossary term), "Qualified Person", "second opinion",
  outsourcing facility, proof of concept, Investigator's Brochure/IMPD ("onderzoekersdossier"),
  "groeihormoon-releasing peptiden", "Groeihormoon Releasing Factors" for S2.2.4. The Dutch legal term for the EU
  "qualified person" and the Dutch full name of the EPAR were not found.
- Pages: /nl/evidence/the-translation-gap/ (umbrella review); /nl/basics/what-is-a-peptide/ and
  /nl/safety/product-risk/ (Qualified Person); /nl/talking-to-your-doctor/ and /nl/safety/monitoring/ (second
  opinion); /nl/compounds/ipamorelin/ (outsourcing facilities, proof of concept); /nl/legal-routes/,
  /nl/history/how-we-got-here/, /nl/compounds/cjc-1295/, /nl/compounds/epitalon/, /nl/compounds/mots-c/,
  /nl/compounds/ipamorelin/ (Investigator's Brochure); /nl/compounds/cjc-1295/, /nl/compounds/ipamorelin/,
  /nl/compounds/tesamorelin/ (groeihormoon-releasing; "Releasing Factors" on tesamorelin only).

**T3 · Semax and Selank in Russia.** Write "in Rusland als medicijn toegelaten" (not "goedgekeurd" or
"geregistreerd")?
- Recommended: approve ("goedgekeurd" is the site's own grade word, which these profiles withhold; every Dutch page
  already says "toegelaten").
- [ ] Approve · [ ] Don't approve
- Pages: /nl/compounds/semax/, /nl/compounds/selank/, /nl/start-here/, /nl/legal-routes/, /nl/legal/whats-changing/,
  /nl/the-case-for-reform/ and the compound pages that mention it.

**T4 · The GLP-1 class.** "GLP-1-achtige middelen" for a class that includes unapproved products, "GLP-1-medicijnen"
only for authorised medicines, never "GLP-1-middelen"?
- Recommended: approve (the pages follow it now).
- [ ] Approve · [ ] Don't approve
- Pages: /nl/safety/before-you-consider/, /nl/safety/monitoring/, /nl/compounds/tirzepatide/,
  /nl/talking-to-your-doctor/.

**T5 · "hartfilmpje (ECG)".** Capitals everywhere, as Thuisarts writes it?
- Recommended: approve (all pages and the glossary now say "ECG").
- [ ] Approve · [ ] Use "ecg" (Woordenlijst)
- Pages: /nl/compounds/cjc-1295/, /nl/compounds/retatrutide/, /nl/compounds/ss-31/, /nl/compounds/ipamorelin/.

**T6 · The EMA's safety committee.** Keep "de veiligheidscommissie van het EMA (PRAC)" at first mention?
- Recommended: approve (plain B1; the official Dutch committee name could not be checked, EUR-Lex did not load).
- [ ] Approve · [ ] Use the official Dutch name (please give it)
- Pages: /nl/compounds/semaglutide/, /nl/compounds/tirzepatide/ (this form); /nl/evidence/conflicts-of-interest/
  ("De veiligheidscommissie (PRAC) van het Europees Geneesmiddelenbureau (EMA)", its only EMA mention);
  /nl/legal/whats-changing/ ("Het PRAC is de commissie van het Europees Geneesmiddelenbureau (EMA) die …");
  /nl/evidence/evidence-grading/ (without "(PRAC)": the page never uses the short form). Later mentions on
  /nl/compounds/semaglutide/ say "de veiligheidscommissie (van het EMA)", where STYLE-NL §2.7 says "het PRAC". Approve
  keeps all of these as they are.

---

## 5. What we could not find out

These are shown on the pages as unknown, or left out. No decision needed; tell us if you know an answer.

**Dutch law and enforcement**
- U1. Whether a few vials kept for own use count as "in voorraad hebben" under Gnw art. 40(2) (nl-law 5.1).
  /nl/legal/nl/, /nl/start-here/
- U2. Any fine or prosecution of a private person for a small own-use import: none found. Private persons were fined
  only for advertising (5.2). /nl/legal/nl/
- U3. Which parcels Customs reports to the IGJ, and how often own-use parcels are released (5.3).
  /nl/legal-routes/#zelf-invoeren
- U4. Whether Customs treats a freeze-dried vial sold "for research" as a medicine or as a werkzame stof (5.4).
  /nl/legal/research-use-only/
- U5. What happens to parcels sent from inside the EU (5.5); Customs' clearest page cannot be cited (commerce words
  in its URL). /nl/legal/nl/, /nl/legal-routes/
- U6. A traveller carrying a medicine authorised in another EU state but not in the Netherlands, or US-prescribed
  Egrifta (5.13). /nl/legal-routes/, /nl/compounds/tesamorelin/
- U7. How many IGJ reports concern peptides: the IGJ cannot split its figures (5.14). /nl/legal/nl/
- U8. Whether the Rb Amsterdam ruling of 10 April 2026 is under appeal; the reasons for the IGJ fine of
  28 September 2026 (5.15, 5.16). /nl/about/editorial-policy/, /nl/about/funding/
- U9. Whether the KOAG/KAG and CGR codes bind a non-commercial publisher (5.12).
- U10. Any Dutch court ruling on the unauthorised peptides: none found. The IGJ's February 2026 peptide statements
  exist in media only (5.6, 5.7).
- U11. The date of the next indexation of the fine categories (5.8). /nl/legal/nl/
- U12. Whether the Transparantieregister Zorg is statutory (bill 35410 pending). /nl/evidence/conflicts-of-interest/
- U13. Whether the artsenverklaring needs a BIG-registered doctor in so many words. /nl/legal-routes/#artsenverklaring

**Sport**
- U14. The text of the Nationaal Dopingreglement 2027: announced for 1 January 2027, not published (5.9).
  /nl/legal/sport-and-doping/, /nl/legal/whats-changing/
- U15. Whether WADA's S0 covers KPV, epitalon, melanotan II, Semax and Selank: "vraag het de Dopingautoriteit" (5.10).
  /nl/legal/sport-and-doping/

**EU status and procedures**
- U16. National authorisations in other EU member states (retatrutide, tesamorelin, KPV): only "no EU-wide
  authorisation" is established; no official worldwide source for retatrutide (eu-status 5.7, nl-law 5.11).
  /nl/compounds/retatrutide/, /nl/compounds/kpv/
- U17. Outcomes of the open PRAC signals and the minutes of the PRAC meeting of 26–29 October 2026; the Mounjaro pill
  variation EMA/VR/0000340438; the Rybelsus and Kyinsu procedures. /nl/legal/whats-changing/,
  /nl/compounds/tirzepatide/
- U18. The European Parliament's second-reading vote and the Official Journal dates of the EU pharma package.
  /nl/legal/whats-changing/, /nl/legal/eu/
- U19. The European Commission's decision on Foundayo (orforglipron). /nl/basics/why-not-a-pill/
- U20. European Pharmacopoeia monographs for the site's peptides.
- U21. Whether the Russian registrations of Semax and Selank are still current (not re-checked on 27 October).
  /nl/compounds/semax/, /nl/compounds/selank/

**Trials**
- U22. Whether and when 4TAZPower (SS-31) recruits in the Netherlands, and whether Spain joins; whether
  SYNERGY-Outcomes recruits Dutch participants; the status and start of NL-OMON51992. /nl/compounds/ss-31/,
  /nl/compounds/retatrutide/, /nl/legal-routes/#klinisch-onderzoek
- U23. That the TRIUMPH-3 results were announced: no citable source without the company name (O10).
  /nl/compounds/retatrutide/

**Care and reimbursement**
- U24. Whether Kayshild, Kyinsu, the Wegovy tablets and the 7,2 mg pen are on the Dutch market; GVS or hospital
  reimbursement of Kayshild and Kyinsu. /nl/compounds/semaglutide/
- U25. The 2027 basispakket and any 2027 decision on obesity medicines; the Zorginstituut's advice on Wegovy and
  Mounjaro; whether a supplementary insurance pays for Wegovy. /nl/compounds/semaglutide/,
  /nl/compounds/tirzepatide/, /nl/start-here/
- U26. Whether the IGJ would grant an ontheffing for bremelanotide, tesamorelin or elamipretide; an artsenverklaring
  for a substance authorised nowhere. /nl/legal-routes/#artsenverklaring
- U27. NHG or KNMG guidance on unlicensed peptides; whether a GP will order checks for someone using one (nl-help
  5.6). /nl/talking-to-your-doctor/, /nl/safety/monitoring/

**Help services**
- U28. Whether spuitomruil services serve people who inject peptides; whether needle containers from the pharmacy are
  free; what the Drugs Infolijn says about peptides; the hospital steroid consultation. /nl/safety/sharps-disposal/,
  /nl/safety/if-something-goes-wrong/
- U29. Who funds DIMS today; who runs www.mijnbijwerking.nl (the CBG now points to it next to lareb.nl).
- U30. The end date of 0800-0113 (we print only 113); 116 117 (not printed).
- U31. Dutch patient pages for priapism (Thuisarts: 404), a sudden severe headache, general cancer signs and blurred
  vision with high blood sugar; a Dutch source for "at least 30 seconds" of bleeding after a prick (M13, M10); a
  general Dutch source for "Stop niet zelf met een voorgeschreven medicijn" (/nl/safety/before-you-consider/ cites
  Thuisarts's page on allergic swelling, which says it in that context, and an NHS page).
- U32. A Dutch source for the English caveat "a new treatment may turn out no better, or worse"; the full text of
  Piatkowski 2026 (not readable by script). /nl/legal-routes/

**History**
- U33. The day in 1963 the WOG registration duty came into force (only the year is known). /nl/history/timeline/

**Belgium**
- U34. Which peptides count as "hormonale" or "anabole" under the KB of 1974, and its enforcement; art. 16 fine
  amounts; NADO Vlaanderen's basis for a lone gym user; needle exchange in Flanders; the anti-doping bodies of the
  French- and German-speaking communities; Mounjaro reimbursement for obesity in Belgium after May 2026; how far 1733
  reaches; whether the FAGG itself approves medicines. /nl/legal/be/

---

## 6. Changes outside the Dutch files

No English page, English compound page or English string was edited (`git status` on `src/content/pages/en`,
`src/content/compounds/en` and `src/i18n/en` is empty). These shared changes were made.

**Seen on the English site once it is rebuilt**
- X1. Shared source entries: 32 sources cited on English pages now show "accessed 27 October 2026" (each was re-read
  that day; the date shows where a source has no DOI). `eu-directive-2001-83` now links the consolidation of
  1 January 2025 (the articles the English pages cite are unchanged). Notes changed too; readers do not see notes.
  One duplicate id (`ema-2026-10-under-evaluation`) was removed; no English page cited it.
- X2. The commerce check (`scripts/check-no-commerce.ts`) tests every language's tokens on every page. The Dutch list
  grew from 10 to 31 tokens (for example "prijs", "winkel", "webshop", "te koop"), so they are now also tested on
  English links and headings. The validator found no new hit; the full check runs on the rebuild (section 8).

**Not seen on the English site**
- X3. A new locale setting `fallback: false` (`src/schemas/index.ts`, `src/lib/config.ts` `fallsBack`,
  `src/lib/content.ts`, `src/lib/i18n.ts`, `src/pages/[locale]/[...slug].astro`,
  `src/components/layout/LanguageSwitcher.astro`, `config/locales.json`). The complete Dutch preview now builds no
  English fallback pages: the US, UK, Canada, Australia and Ireland/NZ law pages and 61 foreign glossary terms no
  longer appear under /nl/. On those 5 English law pages the "Nederlands" link in the preview goes to /nl/. The live
  build (`build:live`) does not build Dutch at all, so live English is unchanged until Dutch is published.
- X4. `config/locales.json`: Dutch is now full NL and EU, notes BE (was full NL, EU, BE). README and the locale table
  in CONTENT-GUIDE say the same. CONTENT-GUIDE §1 itself is unchanged (O3).
- X5. `scripts/validate-content.ts`: a product needs a Dutch indication only where the language shows it; timeline,
  tracker and corrections text only where shown; four Dutch seller patterns (warnings). The English output is
  unchanged (0 errors, 117 warnings).
- X6. `scripts/lib/load.ts`: Dutch idioms such as "op prijs stellen" and "tot nader order" are not commerce in
  headings and labels; "afrekenen met iDEAL" still is.
- X7. Product check: optional per-language heading anchors (`src/schemas/product-check.ts`,
  `src/components/mdx/ProductCheck.astro`, `scripts/lib/product-check.ts`). English uses the data's anchors, as
  before. `src/data/product-check.yaml`: Dutch Thuisarts sources for the "stop" item (English unchanged).
- X8. `src/components/layout/ConsentBanner.astro`: the privacy link uses the language's own heading anchor (Dutch
  `#je-privacy`; English still `#your-privacy`).
- X9. `src/layouts/DocLayout.astro`: pages written natively in Dutch (/nl/legal/nl/, /nl/legal/eu/, /nl/legal/be/)
  get no "translation not checked" notice and no link to an English page, because none exists.
- X10. `src/data/compounds/*.yaml`: only the EU and NL rows (re-checked, `as_of: 2026-10-27`; SS-31 now
  investigational) and EU products (neutral names; Kayshild and Kyinsu added). WADA, US, UK, CA and AU rows are
  unchanged.
- X11. `src/data/tracker.yaml` and `src/data/timeline.yaml`: new EU and NL items, and two EU/NL items updated; shown
  only on Dutch. `src/data/jurisdictions.yaml`: NL card with help services, BE card. `src/data/media.yaml`,
  `src/data/explainers.yaml`, `src/data/organ-cards/retatrutide.yaml`: EU/NL sources only.
- X12. `config/link-allowlist.json`: 26 official Dutch, EU and Belgian hosts added. `config/locale-residue.json`: a
  Dutch entry added.
- X13. `src/data/sources/nl-stubs-b2.yaml`: a database-query URL replaced by the EUR-Lex page of Regulation (EU)
  2017/2470 (the commerce check had flagged the query URL).
- X14. `.claude/launch.json`: a local preview server for the build (port 4323). Not part of the site.

**At publishing (not before)**
- X15. When Dutch is published, every English page that has a Dutch version gets hreflang links to it, and the live
  English site shows the language switcher. The 5 English law pages have no Dutch version.

---

## 7. What was checked

- **The sweep.** 8 file areas, 118 items (legal 8, safety 8, learn 7, site 8, compounds-a 22, compounds-b 23, strings
  14, shared 28). Each area's work was checked by a second, independent agent, which made 25 further fixes. Logs:
  `research/nl-notes/sweep-*.md`.
- **What it changed** (against a copy of the Dutch files taken before the sweep, `research/nl-notes/_baseline-step5/`; a local copy, not committed): 30 of 40 pages, 21 of 21 compound pages, 28 UI
  and glossary files, 5 Dutch source files and STYLE-NL; 1 new source file (`nl-sweep-compounds-b.yaml`, one
  Geneesmiddeleninformatiebank search). No `##` or `###` heading was renamed.
- **Facts.** Every changed fact was re-read on 27 or 28 October 2026 in its primary source (court rulings on
  data.rechtspraak.nl, the Dutch SmPCs, EUR-Lex/CELLAR, EMA, FDA, IGJ, Thuisarts, NHS, Dopingautoriteit) or taken
  from the fact-checked research in `research/nl/`.
- **Validator** (run again for this list): `--only nl` 0 errors, 18 warnings (word-count aims: 2 compound ledes, 1
  TL;DR, 3 intro lines, 3 captions; the rest are guideline sources without a DOI). `--only en` 0 errors, 117
  warnings, the same as before the sweep.
- **Residue check** (`--only nl --details`): 0 error or frame hits, 0 warnings. No US, UK, Canadian or Australian
  framing as the reader's frame.
- **Glossary:** 47 Dutch files, 796 terms; no duplicate ids, no shared forms, no missing links.
- **Links and anchors:** all 10 anchors other pages link into /nl/safety/ exist; the product-check anchors
  (`#wat-een-labrapport-wel-en-niet-zegt`, `#wanneer-je-een-flacon-weggooit`) and the cookie banner's `#je-privacy`
  exist; the seven fixed anchors of /nl/legal-routes/ are the only route anchors used.
- **Language:** "je" throughout, no "u" outside quotes; B1 on the safety and legal pages.
- **Translation status:** all 61 Dutch files say `review: pending` (22 + 16 translated, 20 adapted, 3 native).
- **Build, commerce and HTML checks:** not run after the sweep (this step may not build). The last preview build
  (27 October, 23:27, before the sweep) had 65 Dutch pages and no foreign law pages under /nl/. Before the pages were
  written, the commerce check's source scan found no URL that breaks the allowlist or the Dutch tokens. Run all three
  on a fresh build (section 8).

---

## 8. Before publishing

**Done on 3 November 2026 (publishing day).**
- The small fixes below: the semaglutide insulin cite, the ipamorelin sport date (O13), the tesamorelin stop-gap
  sentence (with O8), the `igj-2023-falsified-ozempic` date, "veelbelovend" on editorial-policy and the-translation-gap,
  "eind jaren vijftig", and `ctis` in the glossary. STYLE-NL §8 item 6 was left as it is: it records history.
- The re-checks (O16), each read on the official site on 3 November 2026: no Commission decision on Foundayo yet;
  no PRAC outcome on the GLP-1 signals (highlights of 30 October); no outcome for Mounjaro EMA/VR/0000340438; no
  official sign of an appeal against the Rb Amsterdam ruling (none can be ruled out: the Raad van State has no public
  register of pending appeals); no PCAC minutes and no 503A rule; 4TAZPower still not recruiting. The pages' check
  dates now say 3 November 2026. New sources and re-checked copies of "DO NOT EDIT" entries:
  `src/data/sources/nl-recheck-2026-11.yaml`.
- New on 30 October 2026, found by the re-check: the US health department (HHS) published a draft, interim,
  non-binding policy not to act against licensed pharmacies and doctors compounding BPC-157, epitalon, KPV, MOTS-c,
  Semax or TB-500 under strict conditions, while the 503A rule is missing (FR Doc. 2026-22192; the policy's Appendix A).
  The 12 Dutch passages on US compounding say so now (one writer and one independent checker per page group). The
  reform page's factual sentence changed too: see R27. The English pages are a separate task (owner's yes needed).
- The corrections entry `nl-v1-publication`; README and CONTENT-GUIDE now say Dutch is published.


- [ ] You answer section 1 (O1–O18) and approve the reform page (R0–R27).
- [ ] Apply your answers in one pass, then run `npx tsx scripts/validate-content.ts` and
  `npx tsx scripts/check-locale-residue.ts --details` (0 errors).
- [ ] Small fixes left by the sweep (no decision needed):
  - /nl/compounds/semaglutide/: drop `fda-unapproved-glp1-concerns` from the cite on "nep-pennen … insuline" (that FDA
    page does not mention insulin; the other three sources stay).
  - `fda-pcac-2027-early-announcement` (`src/data/sources/legal-b.yaml`): accessed and note to 28 October 2026 (page
    re-read, unchanged), to match /nl/compounds/melanotan-ii/. This date also shows on English.
  - `thuisarts-pijn-op-borst`: the page changed on 28 October (112 wording unchanged); re-date at the next check.
  - /nl/compounds/ipamorelin/: the sport date (O13).
  - /nl/compounds/tesamorelin/: remove the stop-gap sentence once O8 is in.
  - STYLE-NL §8 item 6 still opens with "Russia … goedgekeurd" as history; §2.4 and every page say "toegelaten".
- [ ] Re-checks on the day before publishing (O16): the FDA PCAC page for minutes (/nl/compounds/bpc-157/,
  /nl/compounds/tb-500/, /nl/compounds/kpv/, /nl/compounds/semax/, and the 2027 line on /nl/compounds/melanotan-ii/);
  CTIS 4TAZPower member states; the PRAC minutes of 26–29 October 2026 (tracker `eu-glp1-safety-reviews`,
  /nl/legal/whats-changing/); the Commission decision on Foundayo (/nl/basics/why-not-a-pill/: Compare row, TL;DR
  item 5, "Bewijs bij mensen"); the Mounjaro pill wording EMA/VR/0000340438 (/nl/compounds/tirzepatide/); any appeal
  against the Rb Amsterdam ruling (/nl/about/editorial-policy/, /nl/about/funding/ item 3).
- [ ] Corrections log: entry `nl-v1-publication` (locales [nl]) with its Dutch text (O16).
- [ ] Review dates per O6.
- [ ] Reviews: the legal, medical and medical-translator questions (sections 2–4) do not block publishing. The pages
  say "review pending" (`reviewed_by` pending, `translation.review: pending`), as on English.
- [ ] Full build: `npm run build`, then `npm run check` (commerce, HTML, residue on `dist/`). Look at /nl/ at phone
  width: the home page, a compound page, /nl/safety/product-risk/, /nl/safety/if-something-goes-wrong/,
  /nl/legal/nl/, and the cookie banner link to /nl/about/funding/#je-privacy.
- [ ] Your publish yes (a separate question).
- [ ] Set `"status": "published"` for `nl` in `config/locales.json`, run the validator again (published languages are
  checked strictly), then `npm run build:live` and check `dist-live/` (Dutch pages present; English the same except
  the hreflang links and the language switcher, X15).
- [ ] Commit in this repo. Leave out the empty `intro.txt` at the repo root (20 October, not part of this work) and
  the scratch page `research/nl-notes/residue-test/`.
- [ ] Deploy as for English: delete `dist-live/_headers`, replace the Lovable repo's `public/` with `dist-live/`,
  push, check that the project's latest commit matches, then `deploy_project`. Check the live /nl/ pages, the cookie
  banner and the Dutch share card (`public/og/nl.png`).
