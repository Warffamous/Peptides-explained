# Research notes: the Croatian-lab history page and the landing page (restructure)

Group: history-landing. Date: 21 October 2026. Task: restructure two existing pages into the new page structure
(CONTENT-GUIDE §5.2 and §9.1; model `src/content/compounds/en/semaglutide.mdx`). This is a restructure, not a
rewrite: every sentence, `<Cite>`, table and source of the HEAD versions is still on the page; only leads, figure
labels and two summary items are new wording.

Files written:

- `src/content/pages/en/history/the-croatian-lab.mdx`
- `src/content/pages/en/index.mdx`
- `research/history-landing.md` (this file)

Shared files touched (entries added with Edit, nothing rewritten): `src/data/heroes.yaml` (landing hero `""`),
`src/data/media.yaml` (entry `insulin-crystals`, written by `npm run media:commons`, credit line shortened by hand),
`src/i18n/en/media.json` (alt text and caption for `insulin-crystals`), and the new image
`src/assets/media/insulin-crystals.jpg`. No source file and no glossary file was changed: both pages reuse source ids
that already exist (see "Sources used" below), and no new technical term was introduced.

---

## 1. What each page now looks like

### `history/the-croatian-lab`

| Section | Lead (question, then answer) | Open figure | Folds |
|---|---|---|---|
| (intro, before the first heading) | "Why a page about one research group?" One group did most of the research on BPC-157. Other labs have rarely checked its results. | `<EvidenceGrade compound="bpc-157" foldWhy />` (the reasons per axis now sit in the card's own fold, as on compound pages) | none (the intro paragraph stays open, 82 words) |
| Counting the literature | "How much of the research comes from this one group?" Most of it. About 85 in 100 lab and animal papers come from the Zagreb group. | Row of three `<KeyNumber>`: 175 of 235 (74%), 85 of 96 before 2016 (89%), about 140 of 160 primary papers (about 85%) | "How we counted, and who wrote the 177 records" (method + the existing Diagram `bpc-157-literature-by-source`); "Independent work is clustered too"; "What this count cannot tell you" |
| Why volume is not the same as independence | "Why does it matter that one group did most of the work?" Shared methods can make the same mistake every time. A second lab can catch it. | `<Compare>` one group vs separate laboratories (3 rows, built from the section's own sentences; Ioannidis cited on the bias row) | "Replication is how science catches its own mistakes"; "Shared methods produce shared errors, and incentives are shared too"; "Publication bias affects whole fields" (with three KeyNumbers: Sena 2%, Begley 6 of 53, Errington 85%); "Breadth cuts both ways, and reviews are only echoes" |
| What the independent work shows so far | "What has independent work found?" Some effects in cells and in rats. Nothing has been confirmed in people. | Diagram `bpc-157-independent-work` (table: what was tested, who, what it showed), with one citation line for all nine sources of the list | "Each independent finding, with its limits" (the original bullet list, unchanged) |
| Being fair to the group | "Does this mean the group did something wrong?" No. We found no sign of wrongdoing. This page describes the evidence, not the people. | Diagram `what-single-group-dominance-means` (what the page says / does not say) | "How the group answers its critics, and why human evidence is missing" |
| What would change the picture | "What would settle the question?" Other labs repeating the key tests, and trials in people, all published in full. | Diagram `what-would-change-the-bpc-157-picture` (five needs and what each would add) | "Each of the five steps in full" (the original list). The tip callout "Reading any BPC-157 claim" stays open. |

The old `###` headings became fold titles (four kept verbatim at the start of the title, one extended). The bathroom-scale
sentences moved out of their paragraph to sit open under the Compare, as the plain picture of the section. "That is
well above the 70% threshold…" moved from the end of the count paragraph to sit open under the key numbers; the
sentence before it ("Counted that way…") stays in the fold, after the Diagram it refers to.

### Landing page (`""`)

| Section | Lead | Figure | Folds |
|---|---|---|---|
| The most important distinction | "Does the same name mean the same product?" No. The same name can mean a checked medicine or an unchecked vial. | `<Compare>` semaglutide from a pharmacy vs "research semaglutide" sold online (3 rows) | none |
| Who this is for | "Who is this site for?" Anyone who uses peptides, is curious, gets asked about them, or is worried about someone. | Table: the four audience bullets (verbatim) beside a starting page for each | none |
| Where to start | "Where should I begin?" Read Start here first. It is the one page everyone should read. (the HEAD sentence, now the answer, with its link) | `<Callout type="stop">` "Is something wrong right now?" holding the HEAD sentence "If something is wrong right now, go to the warning signs." | none |

The landing page has no depth to fold. It had **no citations at HEAD**; the restructure sources its existing claims and
the new Compare with ids already used on the semaglutide, BPC-157 and TB-500 pages (section 3).

---

## 2. Key facts on the new figures, with source ids

Every number on a figure repeats a fact the page already stated, with that sentence's own source, re-checked today.

| Figure fact | Source id | Checked how (21 October 2026) |
|---|---|---|
| 235 PubMed records, 1992–2026; Sikirić an author on 175 (74.5%) | `pubmed-bpc157-count-2026-10-20` | Query re-run with NCBI E-utilities esearch (count 235; with `Sikiric P[au]` 175; with an entry-date limit of 20 October 2026, 235 and 175, so nothing new since the dated search). esummary of all 235: author lists with diacritics normalised give 175 Sikirić records; years 1992 to 2026. |
| Before 2016: 85 of 96 (89%) | same | esummary print year (`pubdate`) ≤ 2015: 96 records, 85 with Sikirić (88.5%). Note: a `1900:2015[dp]` search gives 97 and 86, because `[dp]` also matches the electronic date; the one extra record is PMID 26698393 (epub 15 December 2015, issue 15 January 2016). The page counts by print year, so 85 of 96 stands. |
| 177 non-review records; 140 with Sikirić or Seiwerth; about 140 of 160 primary experimental (about 85%) | same | esummary publication types: excluding Review, Systematic Review, Comment, Letter, Editorial, Historical Article, Meta-Analysis and Published Erratum leaves 177, of which 140 have Sikirić P or Seiwerth S. 140 / (140 + 4 + 19) = 86%, written "about 85%" as before. |
| 2024–2026: most new records not from Zagreb; more than half of those reviews or commentaries | same | 52 records 2024–2026, 18 with Sikirić; of the other 34, 19 (56%) are tagged review, comment, letter or editorial. |
| Only 2% of 525 animal stroke publications reported no significant effect; about one in seven experiments unpublished; about a third of the efficacy | `sena-2010-publication-bias` | PubMed abstract (PMID 20361022): "Only ten publications (2%) reported no significant effects on infarct volume"; non-publication rate 14%; "around one-third of the efficacy". 525 publications from 16 systematic reviews (used in the `who` line). |
| 6 of 53 "landmark" preclinical cancer studies confirmed | `begley-2012-preclinical-standards` | nature.com article text (PubMed record has no abstract): "Fifty-three papers were deemed 'landmark' studies"; "scientific findings were confirmed in only 6 (11%) cases". First author affiliated with Amgen (PubMed), hence "scientists at one company". |
| 50 experiments; median effect 85% smaller | `errington-2021-replicability` | PubMed abstract (PMID 34874005): "50 experiments from 23 papers were repeated"; "the median effect size in the replications was 85% smaller than the median effect size in the original experiments". |
| "claimed research findings may often be simply accurate measures of the prevailing bias" | `ioannidis-2005-false-findings` | PubMed abstract (PMID 16060722), quoted verbatim. |
| Turkey 2026: 32 rats, repaired tendons, 4 tendons per group per analysis, one collagen measure higher | `bicer-2026-achilles` | PubMed abstract (PMID 42542926): 32 rats, transection and repair, 8 per group; BPC-157 "numerically lower scores without reaching statistical significance". The 4-per-analysis split and the type I collagen result (p = 0.009) are from the full text, as recorded in the source note by the BPC-157 group. |
| Hamstring trial recruiting; results expected after February 2027 | `ctgov-nct07437547` | ClinicalTrials.gov (MCP `get_trial_details`): status RECRUITING, start 2 February 2026, primary completion 14 February 2027, 120 planned, randomised, double-blind, placebo-controlled phase 2. |
| No approved BPC-157 product in any country; most BPC-157 evidence is from rodent models | `fda-pcac-2026-bpc157-briefing` | FDA PDF (www.fda.gov/media/193343/download) downloaded and searched: "A search in globalEDGE did not yield BPC-157 (free base) or BPC-157 acetate as a component of an approved product in any country"; the nonclinical section lists rodent studies across organ systems. |
| TB-500: no approved product in the countries checked and not authorised by EMA; no human data | `fda-pcac-2026-tb500-briefing` | Re-fetched by the fact-checker on 21 October 2026 (PDF, pdftotext): "no approved products containing TB-500 in Canada, Australia, the United Kingdom, Belgium, Ireland, France, Norway, Germany, Spain, and Italy"; "no products containing TB-500 that have been authorized for use in the European Union". The same briefing says FDA found **no** in-vivo pharmacology studies of TB-500 for wound healing, so it does **not** support "evidence comes mostly from animals"; it now supports only the authorisation sentence (see the fact-check log). |
| Semaglutide authorised in the EU, prescription only; "benefits are greater than its risks" | `ema-epar-ozempic`, `ema-epar-rybelsus`, `ema-epar-wegovy` | EMA Wegovy page fetched: "This medicine is authorised for use in the European Union"; "can only be obtained with a prescription"; "Wegovy's benefits are greater than its risks". Ozempic and Rybelsus from the semaglutide group's notes. |
| Benefits and drawbacks weighed for the authorised groups; online "you do not know what you buy … unclear what is in it" | `cbg-glp1-position` | CBG page fetched (Dutch): "Voor deze groepen zijn de voordelen en nadelen van de medicijnen afgewogen"; "Want je weet niet wat je koopt"; "Het is onduidelijk wat erin zit". |
| Unapproved versions not reviewed for safety, effectiveness and quality; "research purposes" products of unknown quality | `fda-unapproved-glp1-concerns` | FDA page fetched (content current as of 1 October 2026): "unapproved versions do not undergo FDA's review for safety, effectiveness and quality before they are marketed"; "of unknown quality and may be harmful". |
| UK: GLP-1 powder in vials not authorised | `mhra-glp1-what-you-need-to-know` | GOV.UK page fetched (updated 5 February 2026): "Products supplied as a powder in vials which must be mixed with a liquid prior to injection are not authorised". |

---

## 3. Sources used (no new ids)

Croatian page: the same 22 distinct ids as at HEAD; 29 citation markers became 41 (the extra markers are the citation
line under the independent-work table and under the five-steps table, the Ioannidis cell in the Compare, and the
`source` props of the KeyNumbers, which reuse ids already on the page).

Landing page: 0 citations at HEAD, now 19 markers of 9 ids, all registered by other groups: `ema-epar-ozempic`,
`ema-epar-rybelsus`, `ema-epar-wegovy`, `mhra-glp1-what-you-need-to-know`, `cbg-glp1-position`,
`fda-unapproved-glp1-concerns` (semaglutide), `fda-pcac-2026-bpc157-briefing` (BPC-157),
`fda-pcac-2026-tb500-briefing` (TB-500) and `ema-medicines-search` (shared). They source sentences that were already on
the landing page; they add no claim.

---

## 4. Verification log

- **PubMed count**: re-run with E-utilities (esearch, esummary JSON for all 235 PMIDs) in the session scratchpad;
  the script is not committed. Results in section 2.
- **PubMed metadata** (MCP `get_article_metadata`): Sena 2010, Errington 2021, Macleod 2015, Ioannidis 2005, Begley
  2012, Biçer 2026. Authors, titles, journals, years, DOIs and PMIDs match the registry entries in
  `src/data/sources/bpc-157.yaml`.
- **Begley 2012**: nature.com article HTML fetched with curl; both quoted sentences found.
- **ClinicalTrials.gov**: NCT07437547 via MCP, status unchanged since 20 October.
- **FDA BPC-157 briefing**: PDF downloaded with curl, converted with pdftotext, searched.
- **Regulator pages fetched** with WebFetch: EMA Wegovy EPAR, CBG standpunt, FDA unapproved GLP-1 page, MHRA GLP-1
  page. All hosts are on `config/link-allowlist.json` (the ids were already registered and validated).
- **Not used**: EUR-Lex (Directive 2001/83/EC art. 26, which would source "a regulator has checked its quality")
  returned an empty page to both curl and WebFetch, so the landing cites the EPAR product information and the CBG page
  for that sentence instead (see open question 3).
- **Readability**: every lead, figure title, key-number label and caption was scored with `src/lib/readability.ts`
  before writing (all 60 or more, all 18 words or fewer).
- **Rendering**: dev server (`localhost:4321`), both routes return 200; at 375 px neither page scrolls sideways; leads,
  key numbers, Compare (cards on a phone), diagrams, folds, the grade card's fold, the stop callout and the new landing
  hero render.

---

## 5. Nothing lost: the check against git HEAD

Script (session scratchpad, not committed): for each page, `git show HEAD:<file>` against the working copy. It turns
the HEAD body into plain text (tags removed, table rows split into cells), splits it into sentences and cells, and
checks that each occurs, normalised (lower case, letters and digits only), in the new body (fold titles included). It
also compares `<Cite>` ids, `<Claim>` and `<Q>`/`<Seq>` elements, internal links, component counts and frontmatter lines.

| Page | HEAD sentences and cells | Missing | `<Cite>` markers HEAD → now (distinct ids) | Claims, Q, links, components lost | Frontmatter changed |
|---|---|---|---|---|---|
| the-croatian-lab | 133 | 0 | 29 → 41 (22 → 22) | 0 | summary item 1 reworded |
| index (landing) | 19 | 0 | 0 → 19 (0 → 9) | 0 | summary item 3 reworded |

Summary items reworded for the readability check (no new claim; nothing stronger):

- Croatian lab, item 1: "Most research on BPC-157 comes from one research group at the University of Zagreb in
  Croatia." (reading ease 53) → "Most research on BPC-157 comes from one group of scientists in Zagreb, Croatia." (70).
  The university and the School of Medicine stay in the intro paragraph.
- Landing, item 3: "Some peptides are authorised medicines. Many sold online are experimental and have never been
  properly tested in people." (38) → "Some peptides are approved medicines. Many sold online were never tested well in
  people." (61). "Approved" is the word the At-a-glance tiles use; "experimental" was dropped from the summary only.

The Diagram caption on the Croatian page was also reworded for reading ease ("Who produced the 177 non-review
BPC-157 records in PubMed (search of 20 October 2026)" → "Who wrote the 177 PubMed records on BPC-157 that are not
reviews. Our search of 20 October 2026.").

## 6. Visible words, before and after (folds closed)

Formula of `src/lib/reading.ts` (the reading-time line): `mdxToPlain(body without <InDetail>)` + text in props
(`question`, `title`, `detail`, `label`, `value`, `who`, `text`, `axis`, `a`, `b`) + summary items. Not counted by
that formula: figure captions, fold titles and everything components render from data (the evidence-grade card).

| Page | Before (HEAD, no folds) | After, folds closed | After, everything open | Not in the formula (after, folds closed) |
|---|---|---|---|---|
| the-croatian-lab | 1,850 | 1,098 | 2,653 | captions 45, fold titles 77 |
| index (landing) | 246 | 424 | 424 | none |

Open prose outside figures and leads, per section (Croatian page): intro 82, counting 13, why volume 26, independent
work 43, being fair 81, what would change 72 (plus the 42-word tip callout, kept open as practical advice). Landing:
the distinction 87 (two short paragraphs, kept open because they are the page's core message), who this is for 0,
where to start 18.

The landing page grew from 246 to 424 visible words: it had no figure, and now has a 3-row comparison, a 4-row
audience table, three leads and a stop callout. It has no depth to fold.

## 7. Emergency number

No 112 (or 999/911) on either page before or after. The new stop callout on the landing page points to the
warning-signs page; the warning-signs page and the components carry the "call your local emergency number" wording.

## 8. Media

- **Landing hero `insulin-crystals`**: "Insulincrystals.jpg" on Wikimedia Commons, NASA Marshall Space Flight Center
  photo ID 9901879, public domain (US government work), 1024 × 717 px. No product, vial, pen, needle or person.
  Registered with `npm run media:commons` (focal 45% 42%). Alt text describes the crystals; caption "Insulin crystals,
  seen up close. The photo comes from NASA." makes no claim beyond what the source file says, so `sources: []`.
- Rejected candidates: the 1962 NLM reading room photo (Flickr Commons "No restrictions": refused by the tool, not a
  licence we accept); the 2008 NLM reading room photo (CC BY-SA, a person browsing shelves who might be
  identifiable); a 400 px LibreTexts helix model (unknown author); exterior photos of the NLM building (a US flag and
  a US building say little to a European reader).
- **Croatian lab** keeps its existing hero `zagreb-medical-school`.

## 9. Conflicts between sources and pages, and how they were handled

1. **RESOLVED by the fact-checker (21 October 2026): the sentence was replaced; see the fact-check log.**
   **"These results have not been repeated by anyone else" (Croatian page, cell-signalling bullet) vs the BPC-157
   page.** The BPC-157 compound page (other group) now says: "Other groups have since reported two of the same
   effects. The Xi'an laboratory saw more vessel-like tubes in cultured human endothelial cells" (`zhang-2026-fbxo22`),
   and an Ankara team found nitric-oxide-mediated relaxation of human artery rings (`yildirim-2026-mammary-artery`), as
   in the Taiwanese rat aorta. The Croatian sentence is therefore at least out of date. Because this task forbids
   rewriting, the sentence is kept, in its fold, but the new open table deliberately does **not** repeat "not repeated"
   (it says only "Plausible pro-healing signals"). **Reviewer: replace the sentence**, for example with "Two of the same
   effects have since been reported elsewhere: more vessel-like tubes in human endothelial cells (Xi'an, 2026) and
   nitric-oxide-dependent relaxation of human artery rings (Ankara, 2026). The specific signalling findings have not
   been repeated." with `<Cite id="zhang-2026-fbxo22,yildirim-2026-mammary-artery" />`.
2. **`[dp]` vs print year** for the before-2016 count (97/86 vs 96/85): explained in section 2; the page's 85 of 96
   (print year) stands, and both round to 89%.
3. **"Who took part" on bibliometric key numbers.** The KeyNumber data card labels `who` as "Who took part". For a
   literature count that is odd; following the BPC-157 page, the `who` lines start "Not people: …". Level is left out
   on these key numbers (a count of papers is not a claim level). A neutral data-card label for non-trial numbers would
   be better (contract issue).
4. **"The developer" in "What the independent work shows".** The developer PLIVA was Zagreb-based, so its phase 2 trial
   is not independent of Zagreb in the strict sense; the HEAD list nonetheless put it under "Humans" in that section.
   Kept; the new table names it "The developer (its trial)" and the lead asks about "independent work", not "labs
   outside Zagreb".

## 10. Open questions for the named reviewer

1. ~~Conflict 1 above: replace the "not repeated by anyone else" sentence.~~ Done by the fact-checker (fact-check log).
2. ~~"The one controlled human result" (five-steps list).~~ Done by the fact-checker: the FDA briefing's Appendix 1
   lists a placebo-controlled phase 1 study (32 healthy volunteers) as well as the phase 2 trial, so the wording is
   now "the only controlled test of whether it works in people".
3. ~~"Quality" on the landing.~~ Resolved by the fact-checker: the Wegovy EPAR's public assessment report (linked from
   the registered EPAR page) says "The quality of Wegovy is considered acceptable" and that the application "is
   considered approvable from the quality point of view" (§2.4.5). The `ema-epar-wegovy` registry title still reads
   "overview and product information"; the semaglutide group may want to widen it to "EPAR" (not this group's file).
4. The landing Compare uses the UK regulator's statement on powder-in-vial GLP-1 products. No EU or Dutch regulator
   page with the same explicit wording was found among the registered sources; the CBG page covers "you do not know
   what is in it".
5. The landing's stop callout ("Is something wrong right now?") makes the warning-signs route prominent but is red on a
   landing page. Keep, or move it to the top of the page as on the safety index, or turn it into a plain note.
6. The audience table on the landing suggests a starting page per audience (before-you-consider, start-here, compounds,
   warning signs and talking-to-your-doctor). This is navigation, not a claim, but it is new wording: confirm the
   choices. `start-here` and `talking-to-your-doctor` are planned routes that do not exist yet.

## 11. Validator

`npx tsx scripts/validate-content.ts --only croatian`: 0 errors, 1 warning (`related: evidence/evidence-grading`, a
route another group has not written yet). `--only "pages\en\index"`: 0 errors, 1 warning (`related: start-here`, not
written yet). `--only media`: 0 errors; the two warnings are another group's `human-pancreatic-islet` caption. The
`insulin-crystals` caption scores 75. Full repository: 0 errors.

---

## 12. Fact-check log (independent fact-checker, 21 October 2026)

Scope: `src/content/pages/en/history/the-croatian-lab.mdx`, `src/content/pages/en/index.mdx`, this file, and the
group's media additions (`insulin-crystals` in `media.yaml`, `heroes.yaml`, `media.json`). The group has no sources
file of its own; every cited id is registered by another group, so each was checked against its primary record.

### Sources checked (31 ids, all on the two pages)

| Source ids | How checked | Result |
|---|---|---|
| sikiric-1993-bpc-origin, chang-2011-tendon-fibroblasts, he-2022-pharmacokinetics, ioannidis-2005-false-findings, jozwiak-2025-review, sena-2010-publication-bias, begley-2012-preclinical-standards, errington-2021-replicability, macleod-2015-risk-of-bias, hsieh-2017-vegfr2, hsieh-2020-src-cav1-enos, xu-2020-preclinical-safety, veljaca-1995-colitis, bicer-2026-achilles, poolton-2026-human-sr, staresinic-2003-achilles, klicek-2008-fistula, cerovecki-2010-ligament, sikiric-2025-comment, zhang-2026-fbxo22, yildirim-2026-mammary-artery | PubMed MCP `get_article_metadata` by PMID | Authors, title, journal, year, volume/pages, DOI and PMID match the registry for all 21. Veljaca 1995 has no DOI in PubMed (the registry is PMID-only, correct). |
| bicer-2026-achilles (details) | Full text via doi.org (jointdrs.org) | "four tendons per group were designated for biomechanical testing and four … for histological processing"; "effective sample size … n = 4 per group"; BPC-157 vs control load to failure adjusted p = 0.389; "Type I collagen intensity was higher in the BPC-157 (p = 0.009)"; the Zagreb model "unrepaired"; "no financial support". All page statements confirmed. |
| jozwiak-2025-review (patent) | PMC full text (efetch PMC11859134) | The patent table lists one application: "New BPC peptide salts with organo-protective activity…", Sikiric, P.; et al., WO 1998/052973. The page said "members of the Zagreb group are named inventors on patent applications": **corrected** to one 1998 application naming Sikirić. |
| poolton-2026-human-sr and the three Lee reports | PubMed (PMIDs 34324435, 39325560, 40131143) | All three first-authored by Edwin Lee, Florida (one US clinician), none with a comparison group. Confirmed. |
| fda-pcac-2026-bpc157-briefing | PDF re-downloaded (fda.gov/media/193343/download), pdftotext | "no approved product … in any country"; "did not identify carcinogenicity studies"; GI, cardiovascular, tendon and neuroprotective effects in rodents (breadth sentence); the UC phase 2 known only from "a single meeting abstract" (Ruenzi 2005, 53 randomised); Appendix 1 also lists a **placebo-controlled phase 1** (Veljaca 2002/2003, 32 healthy volunteers, meeting abstracts). |
| fda-pcac-2026-tb500-briefing | PDF re-downloaded (fda.gov/media/193349/download) | No approved product in ten named countries; not authorised by EMA; FDA found no in-vivo pharmacology studies of TB-500 for wound healing and no human studies. |
| ctgov-nct07437547 | ClinicalTrials.gov MCP | Recruiting; phase 2; randomised, double-blind, placebo-controlled; 120 planned; start 2 February 2026; primary completion 14 February 2027 (estimated). Confirmed. |
| pubmed-bpc157-count-2026-10-20 | NCBI E-utilities esearch, re-run 21 October 2026 | 235 records; 175 with Sikiric P; `[dp]` up to 2015: 97/86 (by print year 96/85, as explained in section 2); 177 non-review, of which 140 with Sikirić or Seiwerth; 2024–2026: 52, 18 with Sikirić, 34 others of which 19 review/comment/letter/editorial; Pang J (Taiwan) 5; Xi'an affiliation 5 (15052688, 25995620, 32334036, 36588717, 41606641); Hahm KB (Korea) 3, all with Sikirić. Every figure on the page confirmed. |
| ema-epar-ozempic, ema-epar-rybelsus, ema-epar-wegovy | EMA EPAR pages fetched with curl; Wegovy public assessment report PDF | All three "authorised for use in the European Union" and "can only be obtained with a prescription". Wegovy: "benefits are greater than its risks"; assessment report §2.4.5: "The quality of Wegovy is considered acceptable … approvable from the quality point of view". |
| cbg-glp1-position | WebFetch | "Voor deze groepen zijn de voordelen en nadelen van de medicijnen afgewogen"; "Want je weet niet wat je koopt"; "Het is onduidelijk wat erin zit". No date shown on the page. |
| fda-unapproved-glp1-concerns | WebFetch | "unapproved versions do not undergo FDA's review for safety, effectiveness and quality before they are marketed"; "for research purposes" products "of unknown quality"; content current as of 1 October 2026. |
| mhra-glp1-what-you-need-to-know | curl (gov.uk) | "Products supplied as a powder in vials which must be mixed with a liquid prior to injection are not authorised"; updated 5 February 2026. |
| ema-medicines-search | Registry entry; not re-fetched (a supporting id for "no authorisation" only). | No change. |

Sources wrong in the registry: none. Two sources were misapplied on the pages (Józwiak for plural patent applications;
the TB-500 briefing for "mostly from animals"); both are fixed below.

### Changes made

Croatian-lab page:

1. **Cell-signalling bullet** (was "These results have not been repeated by anyone else"): replaced. Two of the same
   effects were reported independently in 2026: Xi'an, more tube formation in human endothelial cells
   (`zhang-2026-fbxo22`); Ankara, nitric-oxide-mediated relaxation of human internal mammary artery rings from 12 men
   (`yildirim-2026-mammary-artery`). Huang 2015 (Xi'an, PMID 25995620, not registered) had already reported HUVEC
   migration and tube formation, so the old sentence was wrong even at HEAD. New closing sentence: "We found no
   independent repeat of the specific signalling pathways the Taiwanese laboratory described." The open table row now
   names Xi'an and Ankara, and both ids were added to the citation line under it.
2. **Claim badges added** (the page had none): `in-vitro` on the Taiwanese, Xi'an and Ankara findings; `animal` on the
   Parke-Davis colitis result and the Biçer tendon result.
3. **Biçer 2026**: "first independent test" → "first independent test in living animals" (Chang 2011 had already
   tested tendon explants and cells). "32 rats" → "32 rats in four groups (8 given BPC-157)" in the fold and in the
   open table, so the n of the BPC-157 comparison is visible.
4. **Veljaca 1995**: added "The abstract does not give the number of rats" (species, n and design rule).
5. **Humans bullet**: the UC trial now reads "with 53 patients, was reported only as a meeting abstract".
6. **"Confirms" → "supports the idea"** in "So independent work … does something to cells and to some rodent
   injuries": the independent rodent evidence is one 1995 abstract and one 2026 study whose main BPC-157 outcomes were
   not significant.
7. **"The one controlled human result"** → "the only controlled test of whether it works in people" (fold list and
   open diagram): the FDA briefing also lists a placebo-controlled phase 1 safety study.
8. **Uncited sentence** "the industrial development of PL 14736 never progressed beyond a phase 2 trial in the 2000s"
   now cites `fda-pcac-2026-bpc157-briefing` (phase 1 abstracts 2002/2003, phase 2 abstract 2005, no later trials).
9. **Patent sentence**: → "Sikirić is named as an inventor on a 1998 international patent application for salts of
   the peptide."
10. **Sena key number**: title "found no effect" → "saw no clear effect" (the paper: no *significant* effect on infarct
    volume); reworded for reading ease (68).
11. **Errington**: the 85% figure applies to effects first reported as positive; the prose and the key number's `who`
    line now say so.

Landing page:

1. "Nobody has checked what is in it" (prose and Compare cell) → "No regulator has checked what is in it": the cited
   CBG and FDA pages say the contents are unclear or of unknown quality, not that nobody ever tested a vial.
2. Compare row 2, online column: the FDA statement is now attributed to the US regulator (it concerns FDA review
   only), reworded for B1 without the word "safe" (the validator flagged it).
3. Compare row 3, pharmacy column: "Assessed by the regulator" → "The EU regulator checked how well it is made before
   it was allowed", backed by the Wegovy assessment report (§2.4.5).
4. "Their evidence comes mostly from animals": `fda-pcac-2026-tb500-briefing` removed from this citation, because that
   briefing found no in-vivo pharmacology studies of TB-500 for wound healing. It stays on the preceding "no
   authorisation" sentence, which it supports for the EU and ten named countries (BPC-157 is the sentence's named
   example, and its briefing says "any country").
5. Stop callout: added "If it is severe, call your local emergency number." (CONTENT-GUIDE §1 wording; no number
   printed). A reader who arrives in an emergency should not be told only to read another page.

Distinct source ids on the Croatian page are now 24 (the 22 at HEAD plus `zhang-2026-fbxo22` and
`yildirim-2026-mammary-artery`, both registered by the BPC-157 group and re-verified above). This supersedes the
"22 distinct ids" in section 3.

### Media

- `insulin-crystals`: Commons file page read through the API: `{{PD-USGov-NASA}}`, author NASA/Marshall, photo ID
  9901879, description "Insulin crystals, from NASA's website". Public domain is an allowed licence. Image viewed:
  faceted, see-through crystals on a pale blue background; no product, vial, pen, needle or person. Alt text and
  caption are accurate and do not repeat each other; no change.

### Guardrails and tone

- No dosing guidance, protocols, sourcing hints, testimonials or superlatives on either page. "Test several doses"
  (five-steps fold) describes study design, not use. No commerce words in link text. No 112, 999 or 911.
- The PCAC vote is not mentioned on either page, so the five-element framing does not apply.
- Balance: the Croatian page calls the independent work "encouraging in places", now credits the 2026 repeats, and
  says plainly that no misconduct is alleged. It is not scaremongering. The landing page stays neutral.
- Internal links go only to planned routes. `start-here`, `talking-to-your-doctor` and `evidence/evidence-grading` are
  not written yet (validator warnings only).

### Validator

`npx tsx scripts/validate-content.ts --only croatian`: 0 errors, 1 warning (related route `evidence/evidence-grading`
not written yet). `--only "pages\en\index"`: 0 errors, 1 warning (related route `start-here` not written yet). Full
repository: 0 errors.

### Remaining for the named reviewer

- The open table's "People" row and the "Humans" bullet sit under "independent work", although the developer (PLIVA)
  was a Zagreb company (section 9, point 4). Consider moving them under their own heading.
- Veljaca 1995 (Parke-Davis) is counted as independent. The BPC-157 group notes that a "Veljaca M" later led PLIVA's
  phase 1 abstracts. If this is the same person, the 1995 paper may reflect an industry partnership with the developer.
- Huang 2015 (Xi'an, PMID 25995620, DOI 10.2147/DDDT.S82030) also reports HUVEC migration and tube formation. It is not
  registered; the BPC-157 group could add it as further support for the replaced sentence.
- The `ema-epar-wegovy` registry title reads "overview and product information"; the quality statement is in the
  EPAR's public assessment report on the same EPAR page. The semaglutide group may want to widen the title.
