# Research notes: the History section (index, timeline, how we got here)

Group: history. Date: 22 October 2026 (brief dated 20 October 2026). Written from scratch: no earlier draft of these
files existed (git status showed none of them). `history/the-croatian-lab` was not touched; it is linked from the
index and the "how we got here" page.

Files written:

- `src/content/pages/en/history/index.mdx` (template index, B1, order 0)
- `src/content/pages/en/history/timeline.mdx` (B2, order 1; renders `<Timeline />`)
- `src/content/pages/en/history/how-we-got-here.mdx` (B2, order 2)
- `src/data/timeline.yaml` (43 events) and `src/i18n/en/timeline.json` (title and 1–3 sentences per event)
- `src/data/sources/history.yaml` (45 new sources; 47 after the fact-check added `us-fdc-act-1938` and
  `nobel-1977-medicine-press`)
- `src/i18n/en/glossary/history.json` (20 terms; 19 after the fact-check removed the unused `precautionary-principle`)
- `research/history.md` (this file)

Shared files touched (entries added, nothing else changed): `src/data/heroes.yaml` (three route keys and a comment),
`src/data/media.yaml` (three entries written by `npm run media:commons`, then `sources:` and a comment added by hand),
`src/i18n/en/media.json` (alt text and caption for the three images), and three new images in `src/assets/media/`.
Note: the owner's commit dd840bd ("muscle tissue artwork") swept the three new media.yaml entries into git while this
group was working; they are unchanged.

---

## 1. Page structure

| Page | Sections (each opens with `<Lead>`, then one figure) | Folds |
|---|---|---|
| `history` | intro: Diagram "which page answers which question"; "The history pages": `<PageList section="history" />` | none (about 200 words) |
| `history/timeline` | intro: Diagram of the four threads; "The timeline": `<Timeline />`; "Patterns worth noticing": Diagram of three cause-and-effect pairs | "How to read the dates", "What this timeline leaves out", "The pattern, event by event" (contains the full PCAC framing) |
| `history/how-we-got-here` | intro: Diagram of the three checks and when each was first required; "Before 1962": KeyNumber 107 deaths; "Thalidomide": three KeyNumbers; "1962": Compare before/after; "Europe's answer": TimeStrip of EU and Dutch laws; "What the checks give you": Diagram of what each check protects against; "What the caution costs": three KeyNumbers; "Faster routes": Compare of four routes; "Too strict, or not strict enough?": Diagram of the record on each side | 15 folds |

Word counts (our script, Cite tags removed): index about 200; timeline about 790 (270 visible with folds closed, plus
the 43 events); how-we-got-here about 2,860 including about 470 words of table text (about 2,390 words of prose; about
960 visible with folds closed).

No `<ProductCheck />`: none of the three pages discusses using a product. The "how we got here" page links to
`/en/safety/product-risk/` where it explains why a vial with the name of an authorised medicine is not covered by its
evidence (21 CFR 314.126(d)).

The reform question is described, not argued; the page links to `/en/the-case-for-reform/` (written by the about group)
as the site's signed opinion.

---

## 2. Key facts and their sources

### How we got here

| Fact | Source id | Checked how |
|---|---|---|
| 1937: Elixir of Sulfanilamide (diethylene glycol) killed 107 people, many children; 1938 FD&C Act required new drugs to be shown safe before marketing | `fda-history-milestones`, `fda-2006-promoting-safe-effective-drugs` | Both FDA pages fetched with curl, text extracted |
| 1938 law did not say what kind of tests were needed | `junod-2008-fda-clinical-trials-history` | FDA PDF read in full (pdftotext) |
| Before 1962 manufacturers did not have to prove effectiveness ("For the first time, drug manufacturers are required to prove ...", 1962 entry) | `fda-history-milestones` | as above |
| Kefauver hearings on "the sorry state of science supporting drug effectiveness" (Temple quoted) | `fda-2006-promoting-safe-effective-drugs` | as above |
| Dutch WOG of 28 July 1958, art. 3: register of packaged medicines; registration if reasonably assumed to have the claimed effect and not harmful in use; sale of unregistered packaged medicines prohibited; art. 29: the board | `nl-wog-1958` | Staatsblad 1958, 408 downloaded from repository.overheid.nl (identical to the officielebekendmakingen copy), read with pdftotext |
| Thalidomide: sold in 46 countries; over 10,000 children with severe birth defects 1957–1962; infant mortality up to 40% in severe embryopathy; Lenz and McBride 1961; banned November 1961; sensitive window days 20–36 after fertilisation; mice less sensitive than rabbits and primates; trade names | `vargesson-2015-thalidomide` | PMC full text (PMC4737249) read |
| Kelsey: joined FDA 1960; refused approval for inadequate evidence despite pressure; drug never marketed in the US; 1962 President's Award | `fda-kelsey-history` (about.yaml) | FDA history page fetched and read |
| US sample programme: thousands of doctors, patients not told; more than a dozen US thalidomide babies believed born | `junod-2008-fda-clinical-trials-history` | FDA PDF |
| Public Law 87-781, approved 10 October 1962: "substantial evidence" = adequate and well-controlled investigations; consent with exceptions ("not feasible", "contrary to the best interests") | `us-pl-87-781-drug-amendments-1962` | Statutes at Large PDF from govinfo.gov, read in full |
| 1962: FDA must specifically approve the application; Temple: "a revolutionary requirement" (paraphrased on the page, see §5); GMP formalised; adverse-event reporting; advertising moved to FDA | `fda-2006-promoting-safe-effective-drugs` | as above |
| 1966: NAS review of about 4,000 drugs approved 1938–1962 | `fda-history-milestones` | as above |
| Evidence rules: "uncontrolled studies are not acceptable evidence" | `junod-2008-fda-clinical-trials-history` | FDA PDF |
| 21 CFR 314.126 (a) purpose; (b) controls, randomisation, blinding; (d) test drug standardised; (e) uncontrolled studies not acceptable as sole basis | `ecfr-21-314-126` | eCFR versioner API (ecfr.gov blocks scripted page loads; the API returned the XML with compression) |
| Common Rule (policy of 1981, adopted government-wide 1991): consent documentation, IRBs | `fda-history-milestones` | as above |
| Directive 65/65/EEC of 26 January 1965: art. 3, 4(8), 5, 7, 10; recitals | `eu-directive-65-65` | CELLAR resolver (EUR-Lex returns 202 to scripts) |
| EC: thalidomide was much of the impetus; "no medicinal product must ever again be marketed without prior authorisation" | `ec-legal-framework-medicines` | health.ec.europa.eu page fetched |
| Directive 2001/83 of 6 November 2001: art. 5, 6(1), 22, 26, 128 (repeals 65/65) | `eu-directive-2001-83-original` | CELLAR, original text (the consolidated text is `eu-directive-2001-83`) |
| Regulation 2309/93 of 22 July 1993; procedures in force 1 January 1995; EMA "founded in 1995"; PRAC 2012 | `eu-regulation-2309-93`, `ema-history` | CELLAR; EMA page fetched |
| Geneesmiddelenwet: Wet van 8 februari 2007 (Stb. 2007, 93), in force 1 July 2007 (Stb. 2007, 227); art. 132 withdraws the WOG | `nl-geneesmiddelenwet-2007-version` | wetten.overheid.nl version of 2007-07-01 and its "informatie" page |
| Today's Dutch rule (art. 40) | `nl-gmw-art-40-handelsvergunning` (guides.yaml) | reused |
| Central route mandatory for biotech and new substances for diabetes | `eu-regulation-726-2004` (legal-a.yaml) | reused |
| About 8 years from start of clinical testing to approval (1983–2018); review times >3 years (1983) to <1 year (2017); ≥2 pivotal trials 80.6% → 52.8%; "increasingly accepted less data and more surrogate measures" | `darrow-2020-fda-approval-history` | PubMed abstract |
| 13.8% phase 1 to approval | `wong-2019-clinical-trial-success` (guides.yaml) | reused |
| $985m median, $1,336m mean (2018 $), 63 of 355 | `wouters-2020-rd-investment` (about.yaml) | reused; matches PubMed abstract |
| $2,558m capitalised, $1,395m out-of-pocket (2013 $), 106 drugs, 10 firms | `dimasi-2016-rd-costs` | PubMed abstract |
| Drug-lag review: US, Sweden, Norway slow; UK, West Germany fast; US and Norway far fewer new drugs | `andersson-1992-drug-lag` | PubMed abstract |
| FDA first review 303 d vs EMA 366 d (2001–2010); 121 of 190 (63.7%) first approved in the US | `downing-2012-regulatory-review` | PubMed abstract |
| Developers "rarely interested" in off-patent research | `verbaanderd-2021-repurposing-funding` | PubMed abstract |
| EMA repurposing pilot 2021, authorised medicines only | `ema-2021-repurposing-pilot` (about.yaml) | reused |
| BPC-157 development stopped at phase 2; no approved product anywhere | `fda-pcac-2026-bpc157-briefing` (bpc-157.yaml) | reused, as on the-croatian-lab |
| Accelerated assessment 150 vs 210 days; PRIME (guidance first published 7 March 2016); conditional MA (one year, renewable; specific obligations; 10-year review says it can speed access); compassionate use (Art. 83; groups; not named-patient) | `ema-accelerated-assessment`, `ema-prime`, `ema-conditional-marketing-authorisation` (about.yaml), `ema-compassionate-use` | EMA pages fetched |
| Scenesse: authorised 22 December 2014 under exceptional circumstances; reviewed yearly | `ema-epar-scenesse` | EMA EPAR page and EMA medicines JSON |
| Dutch CUP criteria; only a manufacturer can apply; no approved Dutch CUP for any peptide on this site | `cbg-compassionate-use-criteria` (guides.yaml), `cbg-compassionate-use-list` (retatrutide.yaml) | CUP list re-fetched and text-searched for 21 peptide names (only "nad" matched, inside "nadere") |
| Named-patient route: doctor's declaration, IGJ exemption | `igj-leveren-op-artsenverklaring` (guides.yaml) | reused |
| US accelerated approval 1992; treatment IND 1987; PDUFA 1992 | `fda-2006-promoting-safe-effective-drugs`, `junod-2008-fda-clinical-trials-history` | as above |
| Accelerated cancer approvals: 19 of 93 confirmed survival | `gyawali-2019-accelerated-approval` | PubMed abstract |
| EMA cancer approvals 2009–2013: 49% still uncertain after median 5.4 years | `davis-2017-ema-cancer-approvals` (about.yaml) | reused |

### Timeline: every date and how it was checked

| Event id | Date on page | Source and check |
|---|---|---|
| insulin-first-treatment | 1922 | FDA "100 Years of Insulin" (clinical studies by January 1922); PubMed record of the March 1922 CMAJ report |
| nobel-1923-insulin | 1923 | nobelprize.org summary |
| us-food-drug-cosmetic-act-1938 | 1938 | FDA milestones |
| oxytocin-synthesis | 1953 | Crossref record of DOI 10.1021/ja01115a553 (October 1953); Nobel 1955 summary |
| insulin-structure | 1955 | PubMed 13249947 (August 1955); Nobel 1958 summary and presentation speech |
| nl-wog-1958 | 28 July 1958 | Staatsblad 1958, 408 (date of the act) |
| thalidomide-withdrawn | 1961 | Vargesson 2015 (banned November 1961) |
| kefauver-harris-1962 | 10 October 1962 | Public Law 87-781 ("Approved October 10, 1962") |
| solid-phase-synthesis | 1963 | Crossref record of DOI 10.1021/ja00897a025 (July 1963); Nobel 1984 press release |
| eu-directive-65-65 | 26 January 1965 | the directive (CELLAR) |
| gnrh-sequence | 1971 | PubMed 4936338 (18 June 1971) |
| somatostatin-discovery | 1973 | PubMed 4682131 (5 January 1973) |
| nobel-1977-peptide-hormones | 1977 | nobelprize.org summary |
| recombinant-human-insulin | 28 October 1982 | Drugs@FDA BLA 018780 ORIG-1; FDA insulin history page; openFDA |
| leuprolide-approval | 9 April 1985 | Drugs@FDA NDA 019010 ORIG-1; openFDA |
| glp1-insulin-release | 1987 | Holst, Mojsov, Kreymann (PubMed; semaglutide group's ids) |
| octreotide-approval | 21 October 1988 | Drugs@FDA NDA 019667 ORIG-1; openFDA |
| exendin-4-discovery | 1992 | Eng 1992 (PubMed); Byetta US label section 11 |
| us-accelerated-approval | 1992 | FDA Consumer 2006; Junod |
| ema-founded | 1995 | EMA history; Regulation 2309/93 art. 74 |
| eu-directive-2001-83 | 6 November 2001 | the directive (CELLAR) |
| exenatide-approval | 28 April 2005 | Drugs@FDA NDA 021773 ORIG-1; EU 20 November 2006 and withdrawal 1 January 2026 from `ema-epar-byetta` and the EMA medicines JSON |
| eu-conditional-authorisation | 2006 | EMA conditional MA page (Regulation 507/2006; ten-year review 2006–2016). The CELLAR resolver returned 404 for 32006R0507, so no exact date is given |
| nl-geneesmiddelenwet-2007 | 1 July 2007 | wetten.overheid.nl "informatie" page |
| liraglutide-approval | 30 June 2009 | `ema-epar-victoza`; FDA 25 January 2010 from Drugs@FDA NDA 022341 |
| tesamorelin-approval | 10 November 2010 | Drugs@FDA BLA 022505; Egrifta SV label (GHRF analogue, indication); EMA medicines JSON: EU application withdrawn 21 June 2012 |
| afamelanotide-approval | 22 December 2014 | EMA EPAR and JSON; FDA 8 October 2019 from Drugs@FDA NDA 210797 |
| ema-prime-launched | 7 March 2016 | EMA PRIME page: guidance first published 7 March 2016 (reflection paper adopted February 2016) |
| semaglutide-approval | 5 December 2017 | `fda-drugsatfda-ozempic`; EU 8 February 2018 `ema-epar-ozempic` |
| wada-tb500-s2 | 1 January 2018 | WADA 2018 summary of modifications |
| bremelanotide-approval | 21 June 2019 | Drugs@FDA NDA 210557; Vyleesi label (melanocortin receptor agonist, HSDD); no EMA record in the medicines JSON |
| wegovy-approval | 4 June 2021 | `fda-drugsatfda-wegovy`; EU 6 January 2022 `ema-epar-wegovy` |
| wada-bpc157-s0 | 1 January 2022 | WADA 2022 summary of modifications; 2026 List |
| glp1-shortages | 2022 | FDA: "in shortage since 2022 due to increased demand" (both products) |
| tirzepatide-approval | 13 May 2022 | `fda-drugsatfda-mounjaro`; EU 15 September 2022 `ema-epar-mounjaro` |
| fda-category-2-peptides | 29 September 2023 | FDA category 2 page: GHRP-2, GHRP-6 and ipamorelin acetate added to 503B category 2 on 29 September 2023; BPC-157, TB-500, KPV listed only as "previously in category 2" with no date |
| falsified-ozempic-alerts | 18 October 2023 | EMA alert; IGJ 25 October; MHRA 26 October; BfArM |
| zepbound-approval | 8 November 2023 | `fda-drugsatfda-zepbound` |
| who-falsified-alert | 20 June 2024 | WHO news item |
| lasker-glp1 | 2024 | Friedman PNAS (19 September 2024); Knudsen's affiliation from her JAMA essay's PubMed record |
| glp1-shortages-end | 21 February 2025 | FDA compounding-policy page (tirzepatide resolved 2 October 2024, re-confirmed 19 December 2024; semaglutide 21 February 2025; 503A discretion ended after 24 April 2025; 503B 22 May 2025) |
| unlicensed-supply-seizures | 26 January 2026 | MHRA press releases of 26 January and 29 May 2026; Belcourt 2025 (PubMed abstract) |
| fda-pcac-2026-vote | 23 July 2026 | FDA meeting page (re-fetched 22 October 2026: content current as of 6 August 2026, still no minutes or vote results); vote counts written "as reported from the public meeting" per CONTENT-GUIDE §1 |

Compound tags: only slugs with a data file can be used (validator). On 22 October 2026 those were bpc-157, kpv,
retatrutide, semaglutide, tb-500 and tirzepatide. Leuprolide, octreotide, tesamorelin (`tesamorelin` route),
bremelanotide (`pt-141` route) and afamelanotide events are untagged; tag `tesamorelin-approval` with `tesamorelin` and
`bremelanotide-approval` with `pt-141` once those data files exist.

---

## 3. Verification log

- **PubMed tools** (lookup by citation, then get_article_metadata for every PMID): Banting 1922, Ryle 1955, Matsuo
  1971, Brazeau 1973, Vargesson 2015 (plus PMC full text), Kim 2011 (reused from about.yaml), Andersson 1992, Downing
  2012, DiMasi 2016, Wouters 2020, Darrow 2020, Gyawali 2019, Verbaanderd 2021, Friedman 2024, Knudsen 2024, Belcourt
  2025. Every author list, title, journal, volume, pages, DOI, PMID and PMCID in `history.yaml` was copied from these
  records.
- **Crossref** (api.crossref.org/works/<DOI>) for the two JACS papers not in PubMed (du Vigneaud 1953, Merrifield 1963).
- **Nobel summaries** fetched for 1923, 1955, 1958, 1977 and 1984; the award sentences are quoted in the notes.
- **FDA**: milestones page, "Promoting Safe & Effective Drugs for 100 Years", Kelsey page, "100 Years of Insulin",
  Junod PDF, category 2 page, GLP-1 compounding-policy page, PCAC meeting page; Drugs@FDA overview pages for 7
  applications (ORIG-1 dates), cross-checked with openFDA. The old consumer-update URL "Kefauver-Harris Amendments
  Revolutionized Drug Development" now returns 404; it is not cited.
- **US law**: Public Law 87-781 from govinfo.gov (Statutes at Large, 76 Stat. 780); 21 CFR 314.126 via the eCFR API.
- **EU law**: Directive 65/65/EEC, Directive 2001/83/EC (original), Regulation 2309/93 via the CELLAR resolver;
  EUR-Lex URLs kept in the registry because publications.europa.eu is not the address readers should follow.
- **EMA**: history, PRIME, conditional MA, accelerated assessment, compassionate use, Scenesse EPAR; the medicines
  JSON (2,754 records) searched for 22 peptide names.
- **Netherlands**: Staatsblad 1958, 408 (repository.overheid.nl); Geneesmiddelenwet 2007 version and "informatie"
  page; CBG approved-CUP list.
- **DailyMed**: Byetta, Egrifta SV and Vyleesi labels (sections 1 and 11).
- **Allowlist**: every URL in `history.yaml` is on `config/link-allowlist.json` (fda.gov, govinfo.gov and nlm.nih.gov
  via `.gov`; eur-lex, ema and health.ec via `.europa.eu`; repository.overheid.nl and wetten.overheid.nl via
  `.overheid.nl`; www.nobelprize.org; doi.org). The validator confirms (0 errors).

---

## 4. Conflicts and how they were resolved

1. **Oxytocin: eight or nine amino acids?** The 1953 title calls it an "octapeptide amide" (the two linked cysteines
   were counted as one cystine); today it is counted as nine residues. The site gives no residue count for oxytocin
   (glossary says "a short peptide hormone").
2. **First insulin publication: February or March 1922?** The FDA page says the first publication was in February 1922
   (Banting and Best's laboratory work); the first clinical report (CMAJ) is dated March 1922 in PubMed. The timeline
   says "clinical tests by January 1922" and "first clinical report in March 1922".
3. **When did thalidomide's withdrawal happen?** Vargesson: banned in November 1961, withdrawn in the UK in November
   1961 and from most of the world by 1962. The site says "withdrawn from November 1961".
4. **"Kennedy signed" vs "became law".** The statute says "Approved October 10, 1962"; the photo record (JFK Library)
   shows the signing. The timeline says the amendments "became US law" on that date.
5. **Category 2 date for BPC-157.** Secondary sources say 29 September 2023; the FDA page dates only the entries still
   in category 2 (GHRP-2, GHRP-6, ipamorelin acetate: 29 September 2023) and lists BPC-157, TB-500 and KPV as
   "previously in category 2" without a date. The event is dated by the dated entries and says plainly that the FDA
   gives no date for BPC-157, TB-500 and KPV (same conclusion as the bpc-157 and legal-b groups).
6. **Source ids registered by the about group in parallel.** `kim-2011-thalidomide-review`, `fda-kelsey-history`,
   `wouters-2020-rd-investment` and `ema-conditional-marketing-authorisation` were registered in `about.yaml` while this
   group was writing; this group reuses them instead of registering duplicates. If the about group renames them, the
   history pages and `timeline.yaml` must follow.
7. **Two cost estimates.** DiMasi 2016 ($2,558 million, confidential survey data, 2013 $) and Wouters 2020 ($985 million
   median, public data, 2018 $) differ by more than a factor of two; both are given, with their methods.

---

## 5. Validator warnings and false positives

The final runs show 0 errors and 0 warnings for `--only history` and `--only timeline`. Wording changed to clear
warnings (not waived):

- Temple's phrase "a revolutionary requirement" triggered the hype-vocabulary rule; the page paraphrases it ("a
  radical change from what had gone before") and the exact quote stays in the source note.
- "contrary to the best interests" (Public Law 87-781) triggered the superlative rule; paraphrased as "not in the
  person's interest", exact wording in the source note.
- Summary, lead, KeyNumber and caption texts were rewritten until each scored Flesch 60 or more.
- `related: history/how-we-got-here` warned only until that page existed.

---

## 6. Media

| Route | Media id | What | Licence |
|---|---|---|---|
| `history` | `banting-best-1924` | Charles Best and Frederick Banting, about 1924 (University of Toronto Library) | Public domain; people: true (historical public figures) |
| `history/timeline` | `fda-lab-1960s` | An unnamed FDA scientist testing for impurities under UV light, 1960s (FDA History Office) | Public domain; people: true (not a patient context) |
| `history/how-we-got-here` | `kennedy-1962-drug-amendments` | Kennedy hands the pen to Kefauver after signing the 1962 Drug Amendments; Frances Kelsey second from left among those standing (Abbie Rowe, JFK Library) | Public domain; people: true |

Considered and rejected: a peptide synthesizer photo (CC BY-SA; reagent bottles with a manufacturer's labels:
brand-like text), the 1955 Nobel laureates photo (CC0 but the tool accepts identifiable people only from public-domain
files), the Toronto Medical Building (public domain, but no description to support a caption). Overlap to flag: the
about group's `the-case-for-reform` hero `kelsey-kennedy-1962` is a different photo from the same week of 1962
(Kennedy and Kelsey at the award). Readers going from "how we got here" to the reform page will see Kennedy twice; the
owner may prefer `fda-lab-1960s` for "how we got here" and another picture for the timeline.

---

## 7. Open questions for the reviewers

**Legal reviewer**

1. When did the registration articles of the Wet op de Geneesmiddelenvoorziening (art. 3, 29) actually come into
   force, and when did the College ter beoordeling van (verpakte) geneesmiddelen start registering? The act of 1958
   does not say, and we found no official page with the date, so the page gives none. Secondary memory says the CBG
   dates from 1963; unverified, not used.
2. Exact date of Commission Regulation (EC) No 507/2006 (conditional marketing authorisation): the CELLAR resolver
   returned 404 for CELEX 32006R0507; the timeline gives the year only.
3. The page says the 1938 US drug law contained no consent requirement for trial participants (inferred from the FDA's
   description of the 1962 consent provision as new and from Junod's account of the sample programme). Fact-check:
   Junod describes informed consent as a provision Senator Javits added to the 1962 law itself, 'something that had not
   happened in the case of thalidomide', and the 1938 text (`us-fdc-act-1938`, sec. 505) contains no consent clause.
   Still worth a legal reviewer's glance.
4. Resolved by the fact-check: the Compare row now reads "No. Sales could start if the FDA did not act within 60
   days", from the 1938 Act itself (sec. 505(c): an application 'shall become effective on the sixtieth day after the
   filing thereof' unless postponed, to at most 180 days) and Junod.

**Medical/editorial reviewer**

5. The fact-check changed "Insulin, the first of them" to "Insulin, one of the first" (neither the FDA insulin page
   nor Muttenthaler 2021 says insulin was the first peptide medicine, and crude pituitary extracts may have been used
   earlier). The index summary still says "Peptide medicines are a hundred years old", which Muttenthaler supports
   ("since the introduction of insulin almost a century ago").
6. "Substances nobody pays to test" applies Verbaanderd 2021 and the EMA repurposing pilot (both about off-patent
   authorised medicines) to unpatentable or abandoned peptides. The page labels this as "our reading, not a finding of
   these sources". Please check that the inference is fair.
7. The Lasker event names Knudsen's Novo Nordisk affiliation (from her JAMA essay's PubMed record) as a disclosure.
   The award's own site (laskerfoundation.org) is not on the link allowlist; a PNAS account is cited instead.
8. The thalidomide figures (over 10,000 children, 46 countries, up to 40% infant mortality in severe cases) come from
   one review (Vargesson 2015). Kim and Scialli 2011 say "thousands"; the FDA says "thousands of babies". The site uses
   the review's "over 10,000" and attributes it.

---

## 8. Proposals (not built)

No new explainer is proposed: the section explains history and law, not a mechanism, and `<Timeline />` already
renders the dates. No AI illustration is requested; the three pages use public-domain photographs.

---

## 9. Fact-check log (independent fact-checker, 22 October 2026)

Scope: `history/index.mdx`, `history/timeline.mdx`, `history/how-we-got-here.mdx`, `src/data/timeline.yaml`,
`src/i18n/en/timeline.json`, `src/data/sources/history.yaml`, `src/i18n/en/glossary/history.json`, this file, and the
three history heroes (registry entries, alt text, captions). The writer's draft was treated as unverified.

### What was checked, and how

- **Every PubMed-indexed source in `history.yaml`** (13) re-looked up with get_article_metadata by PMID: Banting 1922,
  Ryle 1955, Matsuo 1971, Brazeau 1973, Friedman 2024, Knudsen 2024, Vargesson 2015, Andersson 1992, Downing 2012,
  Darrow 2020, DiMasi 2016, Gyawali 2019, Verbaanderd 2021. Authors, title, journal, year, volume, pages, DOI, PMID and
  PMCID all match the records. No DOI or PMID errors found.
- **Reused PubMed sources the pages lean on** (other groups' files, not edited): Kim 2011, Wouters 2020, Wong 2019 (PMC
  full text: 13.8% overall, 41,040 industry development paths), Davis 2017, Muttenthaler 2021, Holst 1987, Mojsov 1987,
  Kreymann 1987 (seven volunteers), Eng 1992, Belcourt 2025 (an editorial; vials of semaglutide and tirzepatide sold
  "for research purposes" without a prescription). All match.
- **Crossref** for the two JACS papers (du Vigneaud 1953, Merrifield 1963): title, authors, volume, pages and month match.
- **Vargesson 2015 full text (PMC4737249)** read for every thalidomide number and statement: 46 countries; over 10,000
  children 1957-1962; infant mortality "as high as 40%" in severe embryopathy; Lenz and McBride 1961; banned November
  1961, off most markets by 1962; days 20-36 after fertilisation; mice less sensitive than primates and rabbits;
  Distaval (UK and Australia), Softenon (Europe), Contergan (Germany); "advertised as completely safe"; free samples.
  It also says what testing Grünenthal did "remains a matter of contention".
- **FDA pages re-fetched with curl**: Milestones (current 30 January 2023), "Promoting Safe & Effective Drugs for 100
  Years" (current 23 April 2019), Kelsey (current 1 February 2018), "100 Years of Insulin", category 2 page, GLP-1
  compounding-policy page, PCAC meeting page (content current as of 6 August 2026: seven briefing documents, questions,
  agenda, roster, presentations; **still no minutes or vote results**), BPC-157 briefing PDF. The Junod PDF was read in
  full again (pdftotext).
- **Laws read from the official text**: Public Law 87-781 (govinfo, "Approved October 10, 1962"; substantial-evidence
  definition and consent clause quoted correctly); the 1938 Federal Food, Drug, and Cosmetic Act (govinfo, 52 Stat.
  1040, new); 21 CFR 314.126 (eCFR versioner API, version of 1 October 2026); Directive 65/65/EEC, Directive
  2001/83/EC (original) and Regulation 2309/93 via the CELLAR resolver; Staatsblad 1958, 408; Geneesmiddelenwet version
  of 1 July 2007 and its "informatie" page (Stb. 2007, 93; in force 1 July 2007 by Stb. 2007, 227; art. 132 withdraws
  the WOG).
- **Dates**: every FDA ORIG-1 date in the timeline re-checked against openFDA (Humulin R 1982-10-28, Lupron 1985-04-09,
  Sandostatin 1988-10-21, Byetta 2005-04-28, Victoza 2010-01-25, Egrifta 2010-11-10, Vyleesi 2019-06-21, Scenesse
  2019-10-08, Ozempic 2017-12-05, Wegovy 2021-06-04, Mounjaro 2022-05-13, Zepbound 2023-11-08). EU dates re-checked in
  the EMA medicines JSON (2,754 records, downloaded 22 October 2026): Victoza 30/06/2009, Byetta 20/11/2006 (withdrawn
  01/01/2026), Scenesse 22/12/2014 (exceptional circumstances: yes), Ozempic 08/02/2018, Wegovy 06/01/2022, Mounjaro
  15/09/2022, Egrifta application withdrawn 21/06/2012; no bremelanotide record. All match the timeline.
- **EMA and Commission pages re-fetched**: History of EMA, accelerated assessment (210 to 150 days), PRIME (first
  published 7 March 2016; reflection paper adopted February 2016), compassionate use, conditional MA (one year,
  renewable; 10-year review "can help speed up patient access"), Scenesse EPAR, repurposing pilot (28 October 2021,
  authorised off-patent medicines only), the Commission's legal-framework page and its 1965 timeline page.
- **UK, Dutch and US labels**: MHRA press releases of 26 January 2026 (almost 20 million doses; 17 million in 2024;
  5,680 GLP-1 pens) and 29 May 2026 (largest seizure; retatrutide, tirzepatide, peptide products); CBG approved-CUP list
  (no peptide on this site); DailyMed Byetta, Egrifta SV (GHRF analogue; excess abdominal fat in adults with HIV and
  lipodystrophy) and Vyleesi (melanocortin receptor agonist; acquired, generalised HSDD in premenopausal women) labels.
- **Nobel pages**: 1923, 1955, 1958 and 1977 summaries (award wording matches) and the 1977 press release (new).
- **PCAC vote**: the timeline page fold and `timeline.json` both carry all five canonical elements (date, committee,
  8-6 with one abstention, BPC-157, 503A list; seven considered, six recommended, "as reported from the public meeting";
  advisory, non-binding, against FDA staff's recommendation; compounding still prohibited until adoption and
  rulemaking; not approved in the EU, UK or US, Semax registered in Russia, not a marketing authorisation, nothing about
  efficacy, nothing changes in the EU or the Netherlands). `timeline.json` did not name the seventh peptide; fixed.
- **Media**: the three Commons file pages queried through the Commons API: all public domain. Banting is the man with
  round glasses on the right, so "Best (left)" is correct. Captions and alt text match the Commons and JFK Library
  descriptions. No product, vial or injecting imagery.

### What was wrong and what changed

1. **"Is it made properly? First required: US 1962"** (how-we-got-here diagram) was wrong. The 1938 Act already let the
   FDA refuse an application whose manufacturing methods, facilities and controls could not preserve the drug's
   "identity, strength, quality, and purity" (sec. 505(b)(4), 505(d)(3)). Now "US 1938 (formal manufacturing rules in
   1962)", citing the new source `us-fdc-act-1938`.
2. **"Must the FDA approve it first? Before 1962: Not specifically"** was vague; now "No. Sales could start if the FDA
   did not act within 60 days" (1938 Act sec. 505(c); Junod).
3. **The 1938 fold** said "the FDA reviewed the preclinical and clinical results"; Junod says animal studies were not
   required. Rewritten from the statute: application with safety-test reports and manufacturing description; refusal
   grounds; "adequate tests by all methods reasonably applicable" without naming tests.
4. **Directive 65/65 overstated** as "a licence before any medicine went on sale" in "Europe". It covered proprietary
   (ready-made, branded, packed) medicines in the EEC member states, with 18 months to transpose (art. 1, 3, 22). Lead,
   fold, diagram, TimeStrip label, timeline text and glossary now say so ("European Community", "ready-made").
5. **"The animal tests of the time did not reveal it"** was stronger than Vargesson, who says what Grünenthal tested is
   still debated. Rewritten; the toxicity-testing consequence now also rests on Kim 2011.
6. **"Withdrawn from November 1961"** changed to "Withdrawals began in November 1961, and by 1962 it was off the market
   in most of the world" (page and timeline text).
7. **"up to 40% ... died young"** changed to "died in their first year" (the source says infant mortality).
8. **Darrow KeyNumber** said "1983 to 2018" and "from the start of testing in people"; the source says review times
   1983-2017 and "from the authorization of clinical testing to approval". Fixed in the KeyNumber and in the fold.
9. **Wong KeyNumber**: added "company-run" (the 41,040 paths are industry-sponsored).
10. **Gyawali**: "by 2019" and "others confirmed only an early marker" made more exact (19 survival, 39 surrogate only,
    others delayed, pending or ongoing). The caution-versus-speed diagram said "fast-tracked" (Fast Track is a
    different FDA programme); now "based on early signs of benefit".
11. **BPC-157 sentence** ("industrial development never went beyond a phase 2 trial") reworded to what the FDA briefing
    actually shows: no human trial beyond a 2005 phase 2 study reported only as a meeting abstract, and no approved
    product in any country.
12. **"No company has filed an application"** for peptides sold online overreached (the EMA JSON lists outcomes, not
    pending evaluations). Now "the EMA has no record of an EU authorisation or application".
13. **"Rules adopted after this review"** changed to "In 1970, during this review" (Junod: the 1970 evidence rules).
14. **Timeline summary** said the timeline "ends in October 2026"; the last event is 23 July 2026. Fixed.
15. **"Insulin, the first of them"** was unsupported; now "one of the first", with Muttenthaler's "more than 80 peptide
    medicines" since.
16. **`timeline.json`**: user fees "let companies pay" changed to PDUFA "required companies to pay"; octreotide "in rats
    and monkeys it resisted breakdown" corrected (resistance was shown in lab tests, longer action in rats and monkeys);
    GnRH from pig and somatostatin from sheep hypothalamus (somatostatin tested in lab and in rats); Humulin wording
    follows the FDA page; Lasker "for her role in developing"; the 1938 Act dated 25 June 1938; the PCAC text names
    emideltide (DSIP) as the peptide not recommended; Kefauver-Harris and 65/65 texts made exact.
17. **Somatostatin name** was not supported by the Brazeau abstract; added `nobel-1977-medicine-press` to the
    somatostatin and GnRH events.
18. **Product framing (CONTENT-GUIDE §1a)**: "a vial sold online with the name of an authorised medicine" changed to "a
    product from outside the legal supply chain that carries the name of an authorised medicine"; "peptides sold
    online" to "sold as research chemicals". "Helps nobody meanwhile" to "cannot help most patients in the meantime".
19. **"Today every authorised medicine ... has answered these three questions"** changed to "a new medicine must answer
    these three questions before it can be authorised in the EU or approved in the US".
20. **Glossary**: removed `precautionary-principle` (used on no page; its definition was non-standard and unsourced);
    "can never be shown" changed to "cannot be shown" (exceptional circumstances, per the EMA wording); PDUFA "set
    review deadlines" changed to "goals for how fast reviews are done"; Directive 65/65 defined as the EEC's first
    medicines law, for ready-made medicines; case-duplicate aliases removed (autolinking is case-insensitive).
21. **WOG fold**: added that art. 37 leaves commencement to a later royal decree (read in the Staatsblad).

### Checked and left as written

- All Nobel wording; the GLP-1 1987 trio (pig pancreas, rat pancreas, seven human volunteers); Kelsey (FDA page: one
  of "a handful of medical officers", "constant pressure", "highest recognition attainable for a U.S. civil servant");
  "more than a dozen" US thalidomide babies (Junod); 4,000 drugs and the NAS review (1966); the Common Rule (1981/1991);
  Downing (303 vs 366 days; 121 of 190); Andersson; DiMasi ($2,558 million, 2013 $); Wouters ($985 million median,
  $1,336 million mean, 2018 $); Davis (49% uncertain after a median 5.4 years); Darrow (80.6% to 52.8%; quoted
  conclusion); Verbaanderd ("rarely interested"); the EMA and CBG route descriptions; the GLP-1 shortage dates; MHRA
  numbers; WADA rows; the FDA category 2 wording (no date for BPC-157, TB-500, KPV).
- Balance: the page states the costs of caution (drug lag, eight years, 13.8%, cost estimates, untested substances) and
  the costs of speed (Gyawali, Davis, Darrow) with numbers on both sides; nothing scaremongering was found. No dosing,
  sourcing hints, testimonials or hype words. No `# ` heading; every internal link is a planned route.

### Validator

`npx tsx scripts/validate-content.ts --only history` and `--only timeline`: 0 errors, 0 warnings. Full run: 0 errors;
15 warnings, all in other groups' files.

### Notes for other groups (not edited: outside this group's files)

- `dailymed-egrifta-sv-label` and `dailymed-vyleesi-label` (safety-a.yaml) support the timeline's indication and class
  wording (checked in the DailyMed SPL XML), but their notes do not record it.
- `fda-category-2-safety-risks` (bpc-157.yaml): the page also dates GHRP-2, GHRP-6, ipamorelin acetate, kisspeptin-10
  and ibutamoren (503A) to 29 September 2023.
- EUR-Lex returns a bot challenge and the CELLAR resolver still returns 404 for Regulation 507/2006, so its exact date
  is still not stated.
