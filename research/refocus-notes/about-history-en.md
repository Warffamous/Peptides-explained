# Fact-check handoff: about-history-en (English refocus)

Group: about, history, basics and evidence pages, the timeline and corrections data, three glossaries.
First run 24 October 2026 (cut off before these notes were written; its draft was committed in the checkpoint
`1b7304f`). Second run 26 October 2026: the whole draft was reviewed against `research/refocus-spec/content-brief.md`,
corrected and finished, and every new fact below was checked again against its source. What was cut is in
`research/for-nl-site/MANIFEST-about-history-en.md`; the originals are at the tag `nl-source-2026-10-23`.

Files written: the 17 pages listed in the assignment, `src/data/timeline.yaml`, `src/i18n/en/timeline.json`,
`src/data/corrections.yaml`, `src/i18n/en/corrections.json`, `src/i18n/en/glossary/history.json` and `evidence.json`
(`basics.json` unchanged: no European term), `src/data/sources/en-about-history-en.yaml` (3 sources), the manifest
and these notes. Not touched: `media.yaml`, `heroes.yaml`, `media.json` (no page of this group has a European photo;
the heroes are unchanged) and `config/link-allowlist.json` (every host used is already allowlisted, including
`api.parliament.uk`, `www.ourcommons.ca`, `dhpp.hpfb-dgpsa.ca`, `.gc.ca`, `.canada.ca`, `.gov.au`, `.gov.uk`).

## 1. What changed, per page

| Page | Change |
|---|---|
| about/index | Audience: "the United States, the United Kingdom, Canada and Australia, with notes for Ireland and New Zealand" (body and summary). Publisher line in the fold (marked `residue-ok: publisher`; the page is in `allowFiles`): published from the Netherlands, so Dutch law decides what it may say; that is why it sells nothing, links to no seller and gives no doses; several readers' countries have similar rules (UK, Canada, Australia). The first run had dropped "what to check, which tests matter, and when to get help"; restored. |
| about/editorial-policy | Reviewer: "a registered doctor", register named and shown (US state medical board licence, GMC register, Canadian provincial college of physicians and surgeons, Ahpra), not BIG. Dutch advertising law kept only as the publisher's law; Compare row now names "the Netherlands, where we publish" plus the UK, Canada and Australia. Fold adds the UK/CA/AU rules and Health Canada's 2023 advertising guidance. Translations section: each language covers its own readers' countries. |
| about/funding | Publisher line in the Lead, the paragraph after the diagram and the privacy paragraph (all marked). "No licence in the EU" replaced by "not approved in the US, the UK, Canada or Australia" (BPC-157's status sources). The diagram's cites moved under it. Privacy section (host statistics, consent banner, cookies) unchanged: it already matched the live set-up. |
| about/corrections | Lead: "One clarification so far." Log entry added (below). |
| history/index | "The US and Europe" → the US 1962 law, side-effect reporting in the UK, Canada and Australia, and the UK and Australian licensing laws; "an authorised medicine has passed checks" cited to the FDA, UK, Canadian and Australian rules. |
| history/how-we-got-here | NL fold, "Europe's answer" (TimeStrip and three folds) and the EU/NL columns of the routes Compare removed (manifest). New section "The UK, Canada and Australia" (Lead, one diagram, three folds). Routes Compare rebuilt for the US (accelerated approval, expanded access), the UK (EAMS) and Australia (SAS); Canada's Special Access Program is not described here (brief: routes page only), only linked through `/en/legal-routes/`. Drug-lag fold: Health Canada's review time and the US-first share for Canada added. Thalidomide and US history unchanged. |
| history/timeline | Intro, "How to read the dates", "What this timeline leaves out" and the cause-and-effect diagram rewritten for the four countries; "The latest event" → "One of the most recent events" (October 2026 events now follow the PCAC vote); the PCAC paragraph gives the canonical framing with the four countries. |
| basics/what-is-a-peptide, how-signalling-works, pharmacokinetics, why-not-a-pill | "EU label"/"EU product information" as the default reference → the US labels for the same facts; facts only the European product information gives stay, attributed and marked `residue-ok: EMA evidence`. why-not-a-pill: the "Authorised in the EU?" row → UK, Canada and Australia rows. |
| evidence/the-translation-gap, evidence-grading, conflicts-of-interest | EMA guideline and safety-committee sentences kept as evidence, attributed and marked; semaglutide's first approval now the FDA's (2017); the MHRA's February 2026 NAION warning added beside the EMA committee. |
| evidence/index, evidence/how-to-read-a-study, basics/index | No change needed (no European framing). |
| Glossary history.json | Dutch and EU-only terms removed (manifest); `conditional-marketing-authorisation` and `exceptional-circumstances-authorisation` no longer say "EU" and add "Not every country has this kind of licence."; `orphan-medicine`: "Some countries have laws ..., such as the US since 1983." evidence.json: `mabel` "Some regulators ask for it". |

## 2. New facts and their sources

Checked again on 26 October 2026 unless noted. "(merged)" = a fact-checked source from `src/data/sources/refocus-*.yaml`
whose note was compared with the sentence; "(read)" = the document itself was re-read in this run.

### About pages
- UK: no advertisement for a medicinal product without a UK marketing authorisation: `uk-hmr-2012-reg-279`.
- Canada: "No person shall sell or advertise a new drug unless" a notice of compliance (C.08.002): `ca-food-and-drug-regulations` (merged).
- Australia: advertising unregistered prescribed goods (reg 7) and S3/S4/S8 substances is an offence and civil penalty: `au-tg-act-advertising`, `au-tg-regs-reg-7-advertising-prescribed-goods` (merged).
- Health Canada: an educational message about an unauthorised product may be promotional if it does not caution that safety and effectiveness are still under investigation and that Health Canada has not authorised it: `ca-hc-advertising-distinction-2023` (read with WebFetch, 26 October 2026; published 2023-07-31).
- BPC-157 not approved in the US, UK, Canada or Australia: `fda-pcac-2026-bpc157-briefing`, `uk-mhra-substance-index-status-c-2026-10-23`, `ca-dpd-search-status-c-2026-10-23`, `au-artg-search-status-c-2026-10-23` (its data rows' sources).
- Publisher line: `nl-gnw-art-84-85-advertising`, `nl-gnw-art-1-reclame`, `cjeu-2009-damgaard`, `eu-directive-2001-83`, `nl-telecommunicatiewet-art-11-7a` (unchanged sources).

### Corrections entry `tesamorelin-approval-answer` (clarification, 24 October 2026, route compounds/tesamorelin, locale en)
The old English answer was "Not in the EU. Approved only in some countries outside the EU." (old `beginner.json`,
`authorised-elsewhere`), and the old page had no Canada row (`git show nl-source-2026-10-23:src/data/compounds/tesamorelin.yaml`).
Dates in the entry: US approval 10 November 2010 (`fda-drugsatfda-egrifta`), Canada NOC 29 April 2014 (`ca-noc-egrifta`),
no longer sold since 30 September 2022 (`ca-sbd-egrifta`, `ca-dpd-egrifta-din-02438712`); not approved in the UK or
Australia (the page's UK and AU rows). The current tesamorelin data and page say the same (checked 26 October 2026).
The entry names "the EU status" once, allowed by the existing `allowStrings` entry.

### history/how-we-got-here: the UK, Canada and Australia
- UK 1963: the government accepts an independent Committee on Safety of Drugs, voluntary scheme, two dissenters, review of drug law "with a view to legislation": `uk-hansard-1963-04-04-safety-of-drugs` (merged); "set up in 1963": `uk-tna-mh171-csd-csm` (merged).
- UK 1964: Yellow Card scheme "in the wake of the thalidomide disaster": `uk-mhra-2014-yellow-card-50`; introduced by Sir Derrick Dunlop: `uk-mhra-2015-yellow-card-digital`; anyone can report: `mhra-yellow-card` (merged).
- UK Medicines Act 1968, Royal Assent 25 October 1968, Part II "Licences and Certificates Relating to Medicinal Products": `uk-medicines-act-1968-enacted` (read: legislation.gov.uk contents and enacted text, 26 October 2026).
- UK today: reg 58(4) efficacy, benefit-risk, composition: `uk-hmr-2012-reg-58` (new; read 26 October 2026).
- MHRA formed 1 April 2003 by merging the MCA and MDA: `uk-si-2003-1076-mhra-trading-fund` (merged).
- Canada: thalidomide licensed for prescription use and removed from the market in 1962 (years only, see section 6): `ca-hesa-2017-05-09-thalidomide-evidence` (merged; archive capture).
- Canada: 115 children born 1961–62 with thalidomide-linked malformations, 8 stillborn, 33 died: `webb-1963-canadian-thalidomide` (read: PubMed 14076167, CMAJ 1963;89(19):987-92).
- Canada: reports of suspected side effects collected since 1965, today the Canada Vigilance Program; professionals and consumers report: `ca-hc-canada-vigilance` (merged). The first run said "the national health department ... has collected"; the source says only that the Program "has collected reports ... since 1965", so the wording no longer names who collected them in 1965.
- Canada today: NOC needs safety test reports and "substantial evidence of the clinical effectiveness": `ca-fdr-c08-004-notice-of-compliance` (merged).
- Australia: McBride's Lancet letter, December 1961, about 1.5% against almost 20% "multiple severe abnormalities": `mcbride-1961-thalidomide-letter`, `au-tga-mcewen-2007-history` (read: the TGA history PDF re-downloaded and the quoted paragraph checked; the first run's sentence was ungrammatical and dropped "multiple severe abnormalities"; fixed).
- Australia: ADEC appointed 3 June 1963; ADR scheme from August 1964, 760 reports by December 1966; TGA named August 1989; the Act in effect 15 February 1991: `au-tga-mcewen-2007-history`, `au-tg-act-1989-asmade-details` (merged).
- Australia: a medicine must, with exceptions, be on the ARTG before import or supply: `au-tg-act-s19b-19d-offences` (merged; added in this run because `au-tg-act-artg-registration-listing` alone does not say it); registration needs quality, safety and efficacy "satisfactorily established": `au-tg-act-artg-registration-listing` (merged).
- Today a new medicine must answer the three questions in all four countries: `fda-2006-promoting-safe-effective-drugs`, `uk-hmr-2012-reg-58`, `ca-fdr-c08-004-notice-of-compliance`, `ca-food-and-drug-regulations`, `au-tg-act-artg-registration-listing`.
- Drug lag: first review medians FDA 303, EMA 366, Health Canada 352 days; 121 of 190 (63.7%) first in the US vs Europe; 132 of 154 (85.7%, "about six in seven") first in the US vs Canada: `downing-2012-regulatory-review` (read: PubMed 22591257).
- Routes Compare and fold: accelerated approval (serious conditions, surrogate endpoint, confirmatory studies): `fda-accelerated-approval-program` (new; read 26 October 2026, content current as of 25 August 2026); expanded access: `fda-expanded-access`, `fda-expanded-access-patients`; Right to Try: `fda-right-to-try`, `usc-21-360bbb-0a`; EAMS: `uk-hmr-2012-reg-167c`, `mhra-eams-overview`, `mhra-eams-scientific-opinions`, `mhra-eams-expired-opinions`; Australia SAS and Authorised Prescriber: `au-tga-access-unapproved-goods-practitioners`, `au-tga-sas-individual-patients`, `au-tg-regs-reg-12a-sas-category-a`, `au-tg-act-s19-access-approvals`, `au-tga-authorised-prescriber`, `au-tga-peptides-health-practitioners`; expanded-access records: `ctgov-expanded-access-search-2026-10-23` (all merged; each cell compared with its note).

### history/timeline (page) and timeline data
Events added by this group, each one jurisdiction's action (texts in `src/i18n/en/timeline.json`):

| id | Date | Tag | Sources |
|---|---|---|---|
| `au-mcbride-letter` | 1961 (December) | AU | `mcbride-1961-thalidomide-letter`, `au-tga-mcewen-2007-history` |
| `ca-thalidomide-withdrawn` | 1962 | CA | `ca-hesa-2017-05-09-thalidomide-evidence`, `webb-1963-canadian-thalidomide` |
| `uk-committee-on-safety-of-drugs` | 1963 | UK | `uk-hansard-1963-04-04-safety-of-drugs`, `uk-tna-mh171-csd-csm` |
| `au-drug-evaluation-committee` | 1963-06-03 | AU | `au-tga-mcewen-2007-history` |
| `uk-yellow-card` | 1964 | UK | `uk-mhra-2014-yellow-card-50`, `uk-mhra-2015-yellow-card-digital` |
| `au-adverse-reaction-reporting` | 1964 (August) | AU | `au-tga-mcewen-2007-history` |
| `ca-adverse-reaction-reporting` | 1965 | CA | `ca-hc-canada-vigilance` |
| `uk-medicines-act-1968` | 1968-10-25 | UK | `uk-medicines-act-1968-enacted` |
| `au-therapeutic-goods-act` | 1991-02-15 | AU | `au-tga-mcewen-2007-history`, `au-tg-act-1989-asmade-details`, `au-tg-act-artg-registration-listing` |
| `uk-mhra-formed` | 2003-04-01 | UK | `uk-si-2003-1076-mhra-trading-fund` |
| `tesamorelin-approval-ca` | 2014-04-29 | CA | `ca-noc-egrifta`, `ca-sbd-egrifta` |
| `semaglutide-approval-ca` | 2018-01-04 | CA | `ca-sbd-ozempic` |
| `semaglutide-approval-au` | 2019-08-28 | AU | `au-tga-pmr-search-status-a-2026-10-24`, `au-artg-ozempic-308324` |
| `wegovy-approval-uk` | 2021-09-24 | UK | `uk-mhra-ma-granted-2021` |
| `tirzepatide-approval-uk` | 2022-09-26 | UK | `uk-mhra-ma-granted-2022` |
| `tesamorelin-ca-no-longer-sold` | 2022-09-30 | CA | `ca-sbd-egrifta`, `ca-dpd-egrifta-din-02438712` |
| `tirzepatide-approval-ca` | 2022-11-24 | CA | `ca-sbd-mounjaro` |
| `tirzepatide-approval-au` | 2022-12-23 | AU | `au-tga-pmr-search-status-a-2026-10-24` |
| `au-bpc-157-schedule-4` | 2024-06-01 | AU | `au-tga-2024-05-final-decisions-notice`, `au-tga-2024-05-scheduling-final-decisions` |
| `uk-illicit-factory-retatrutide` | 2025-10-24 (announcement) | UK | `mhra-2025-retatrutide-seizure` (read: GOV.UK API; the raid day is not given, so the text says "announced") |
| `ca-peptides-advisory-2026` | 2026-04-09 | CA | `ca-hc-2026-04-think-twice-peptides` |
| `au-peptides-compliance-priority` | 2026-06-10 | AU | `au-tga-2026-06-peptide-compliance-priority` |
| `au-counterfeit-retatrutide-2026` | 2026-09-14 | AU | `au-tga-2026-09-retatrutide-counterfeit` (new in this run; read with Node fetch 26 October 2026: unmarked vial, no retatrutide, undeclared semaglutide about 8 times the ARTG products' level, hospital treatment) |
| `uk-counterfeit-pens-2026` | 2026-10-14 | UK | `mhra-2026-10-counterfeit-pens` (read: raid "On October 14", release 15 October; the first run dated the event 15 October, now 14) |

`fda-pcac-2026-vote` now also tags `mots-c`, `semax` and `epitalon` (all have data files). The approval splits, the
`falsified-ozempic-uk` event and the `jurisdictions` tags on the older events are the data group's (MANIFEST-data.md);
this group checked that their English texts name only shown jurisdictions. English now shows 13 global and 2 WADA events,
plus US 19, UK 10, Canada 7 and Australia 9 (the 12 EU, 3 NL and 1 DE events stay in the data, hidden on English).

Other timeline text changes: `ca-adverse-reaction-reporting` (wording as above), `tesamorelin-approval-ca` ("after a
panel of outside experts reviewed an earlier negative decision": the SBD's Notice of Non-Compliance, NON/W of 1 March
2013 and the Reconsideration Panel of 23 August 2013), `uk-illicit-factory-retatrutide` ("announced", the first factory
found in the UK, "more than 2,000" pens).

### basics and evidence (US labels; all read from the FDA PDFs or DailyMed on 26 October 2026)
- `fda-label-wegovy` (218316s007lbl.pdf): >99% albumin-bound; proteolytic cleavage and beta-oxidation; about 3% intact in urine; half-life about 1 week; present 5 to 7 weeks after the last dose; 89% absolute bioavailability (injection), about 1 to 2% (tablet); similar exposure abdomen/thigh/upper arm; overdose "prolonged period of observation"; stop at least 2 months before a planned pregnancy; delays gastric emptying; higher variability with the tablet (27–186 vs 51–110 nmol/L); 50 mL vs 240 mL water; longer post-dose fast.
- `fda-label-rybelsus-ozempic-tablets` (213051Orig1s030lbl.pdf): steady state after 4 to 5 weeks; SNAC; absorption mainly in the stomach; 0.4–1% (Rybelsus), 1–2% (Ozempic tablets); empty stomach in the morning, up to 4 ounces of water, wait at least 30 minutes.
- `fda-label-ozempic`: peptide backbone produced by yeast fermentation (same wording in the Wegovy label).
- `dailymed-byetta-label`: eliminated by glomerular filtration with proteolytic degradation (nonclinical), terminal half-life 2.4 hours, twice daily.
- `ecfr-21-211-165`: each batch tested for identity and strength before release (merged).
- why-not-a-pill status rows: Rybelsus US 20 September 2019 (`fda-drugsatfda-rybelsus`), UK (`uk-mhra-substance-index-status-a-2026-10-24`), Canada 2020 (`ca-dpd-extract-search-status-a-2026-10-24`, `ca-pm-rybelsus-2026-07-13`), Australia 7 February 2022 (`au-artg-rybelsus-346198`); orforglipron UK 10 August 2026 (`mhra-2026-08-orforglipron-authorised`, new; read through the GOV.UK content API), Canada under review, not authorised (`ca-hc-sur-search-status-a-2026-10-24`), Australia not on the ARTG on 24 October 2026 (`au-artg-search-status-a-2026-10-24`).
- evidence-grading: Ozempic first US approval 5 December 2017 (`fda-drugsatfda-ozempic`); MHRA NAION warning 5 February 2026 (`mhra-2026-02-semaglutide-naion`, merged), also in conflicts-of-interest.

## 3. Removed sections

All in the manifest, with the tag/snapshot location: the NL 1958 fold, "Europe's answer" (TimeStrip, the Commission's
thalidomide-impetus paragraph, the Directive 65/65, Dutch-line and "one agency for Europe" folds), the EU/NL route
columns and their fold bullets, the EU/NL sentences of "Why these routes rarely help", the European Community entries of
two diagrams, the EU timeline-page sentences, the EU label wording in basics and evidence, four glossary entries
(`wet-op-de-geneesmiddelenvoorziening`, `directive-65-65`, `accelerated-assessment`, `prime-scheme`).

## 4. No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` against the working tree, 26 October 2026)

| Page | Before | After | Removed (all European framing, all in the manifest) |
|---|---|---|---|
| about/index | 1 | 5 | none |
| about/editorial-policy | 6 | 11 | none |
| about/funding | 8 | 13 | `ema-medicines-search` |
| about/corrections | 0 | 0 | none |
| history/index | 8 | 16 | `ema-epar-ozempic`, `eu-directive-2001-83-original`, `eu-directive-65-65` |
| history/how-we-got-here | 40 | 55 | `cbg-compassionate-use-criteria`, `cbg-compassionate-use-list`, `ec-legal-framework-medicines`, `ema-accelerated-assessment`, `ema-compassionate-use`, `ema-epar-mounjaro`, `ema-epar-ozempic`, `ema-epar-scenesse`, `ema-history`, `ema-medicines-search`, `ema-prime`, `eu-directive-2001-83-original`, `eu-directive-65-65`, `eu-regulation-2309-93`, `eu-regulation-726-2004`, `igj-leveren-op-artsenverklaring`, `nl-geneesmiddelenwet-2007-version`, `nl-gmw-art-40-handelsvergunning`, `nl-wog-1958` (+ `ec-pharma-legislation-timeline` from further_reading) |
| history/timeline | 37 | 48 | `ec-legal-framework-medicines`, `ema-2023-falsified-ozempic`, `ema-conditional-marketing-authorisation`, `ema-epar-ozempic`, `ema-medicines-search`, `ema-prime`, `eu-directive-65-65`, `nl-geneesmiddelenwet` |
| basics/index | 9 | 9 | none |
| basics/what-is-a-peptide | 41 | 42 | `ema-epar-byetta` (same facts from `dailymed-byetta-label`) |
| basics/how-signalling-works | 23 | 24 | none |
| basics/pharmacokinetics | 22 | 24 | `ema-epar-byetta` (same facts from `dailymed-byetta-label`) |
| basics/why-not-a-pill | 27 | 34 | `ema-epar-wegovy` (same numbers from `fda-label-wegovy`), `ema-epar-foundayo-opinion` (EU status row) |
| evidence/index | 5 | 5 | none |
| evidence/how-to-read-a-study | 30 | 30 | none |
| evidence/the-translation-gap | 30 | 30 | none |
| evidence/evidence-grading | 16 | 17 | `ema-epar-ozempic` (EU approval date; now the FDA's) |
| evidence/conflicts-of-interest | 20 | 21 | none |

No study, number, claim badge or caveat that is not European framing was dropped. Where an EU label number was
replaced, the US label gives the same number (checked). No EU or NL row or timeline event was deleted.

## 5. Checks run

- `npx tsx scripts/validate-content.ts` (whole site, 26 October 2026): 0 errors; no warning in any file of this group
  (summary lengths and reading ease, Lead lengths, residue, cites, routes all clean).
- MDX: every page of this group compiles with `@mdx-js/mdx`.
- Residue grep from the brief on every owned file: the only hits are the publisher line on the three about pages
  (`allowFiles`), "German"/"Germany" in thalidomide and drug-lag history (marked `residue-ok: history`), EMA and
  "European" as evidence (marked `residue-ok: EMA evidence`), "EU Court of Justice" in the publisher fold (marked), the
  corrections entry's "EU status" (`allowStrings`), and false positives of the raw pattern (`nada\b` in "Canada", `ema`
  and `nl` inside cite ids, `epar` in "separate"). 0 unmarked hits.
- No emergency number printed; no help-service number; no commerce word in headings, titles or labels; no seller named.

## 6. Unverified or left out

- Canada 1962 sale ban (Schedule H) and the 1963 efficacy rule (SOR/63-386): only source found is the Federal Court of
  Appeal decision, whose title names a company; left out. The page says the year is not given.
- Canadian thalidomide dates: the court (22 November 1960; 6 April 1962) and Health Canada's 2017 testimony
  (1 April 1961; 2 March 1962) conflict; years only.
- Committee on Safety of Drugs start date (often 1 January 1964): no primary source; only "set up in 1963".
- McBride letter issue day: not in Crossref; "December 1961".
- Not added for lack of a merged source in `src/data/sources/`: afamelanotide (Scenesse) approved in Canada on 9 July 2026,
  Health Canada's May 2026 type I recall of GHK-Cu and BPC-157 powder, the first Health Canada peptide advisory of
  December 2023 (its record names a seller).

## 7. Open questions for the reviewers

Legal:
1. Publisher line: "Several of our readers' countries have similar rules: in the UK, Canada and Australia, the law also
   forbids advertising a medicine that is not licensed there." Australia's rule is in s 42DL(10)/(12) and reg 7 (S3/S4/S8
   substances; unregistered prescribed goods); Canada's in C.08.002 ("sell or advertise a new drug"). Is the one-line
   summary fair? The US is left out on purpose (no general ban on independent information about unapproved drugs was
   sourced; 21 CFR 312.7 concerns sponsors).
2. Health Canada's 2023 guidance lists two cautions for educational messages (safety and effectiveness still under
   investigation; not authorised by Health Canada). The editorial policy now promises both on Canadian topics: do the
   Canadian pages and compound rows meet that?
3. The privacy paragraph rests on Telecommunicatiewet art. 11.7a as the publisher's law; the consent banner was
   checked live on 23 October (memory note), but a lawyer's check is still open.
4. The corrections entry calls the tesamorelin change a "clarification" (the old answer was not false about the EU, but
   it hid the US approval and lacked Canada). Would the editor rather log it as "substantive"?

Medical/editorial:
5. Reviewer register wording (editorial policy): "a registered doctor", examples a US state medical board licence, the
   GMC register, a Canadian provincial college of physicians and surgeons, Ahpra. Confirm before a reviewer is named.
6. evidence-grading says regulators concluded NAION is a very rare side effect (EMA committee 2025, MHRA 2026). The US
   Wegovy label of 06/2026 has no NAION warning (`fda-label-wegovy` note); the page does not say so. Add a US line?
7. `au-counterfeit-retatrutide-2026` gives "about 8 times the level in approved semaglutide products" (a product-risk
   fact from the TGA alert, not a dose). Keep the number, or say "much more"?
8. Glossary `conditional-marketing-authorisation` / `exceptional-circumstances-authorisation`: "Not every country has
   this kind of licence" is deliberately general (the terms are used only in EMA-evidence contexts on English); the
   per-country equivalents (UK conditional MA, Canada NOC/c, Australia provisional registration) were not sourced here.

## 8. Fact-check (independent, adversarial), 26 October 2026

Scope: every file of the group, diffed against `git show nl-source-2026-10-23:<path>`; every new or changed fact
compared with its source record and, where the record did not quote the fact, with the document itself.

### Sources re-opened in this pass
- FDA labels, downloaded with curl and read with pdftotext: Wegovy 218316s007lbl.pdf (albumin > 99%; proteolytic
  cleavage and beta-oxidation; about 3% intact in urine; half-life about 1 week; present 5 to 7 weeks after the last
  dose; 89% bioavailability; about 1% to 2% for the tablet; similar exposure abdomen/thigh/upper arm; "delays gastric
  emptying"; overdose "prolonged period of observation"; stop at least 2 months before a planned pregnancy; tablet
  range 27-186 vs 51-110 nmol/L; yeast fermentation; no NAION, "optic" or "ischemic" text anywhere in the label) and
  Rybelsus/Ozempic tablets 213051Orig1s030lbl.pdf (steady state after 4 to 5 weeks; SNAC; absorption mainly in the
  stomach; 0.4% to 1% Rybelsus, 1% to 2% Ozempic tablets; empty stomach in the morning, up to 4 ounces of water, wait
  at least 30 minutes; the 50 mL vs 240 mL and post-dose-fast studies are in this label too). All confirmed.
- DailyMed Byetta SPL (XML): "predominantly eliminated by glomerular filtration with subsequent proteolytic
  degradation" (nonclinical), terminal half-life 2.4 hours, twice daily. Confirmed.
- PubMed: Downing 2012 (PMID 22591257; 303/366/352 days; 121 of 190, 63.7%; 132 of 154, 85.7%) and Webb 1963
  (PMID 14076167; 115 children, 8 stillborn, 33 died). Confirmed.
- legislation.gov.uk: Medicines Act 1968 enacted contents (Part II "Licences and Certificates Relating to Medicinal
  Products") and enacted XML (EnactmentDate 1968-10-25); HMR 2012 reg 58(4)(a)-(d). Confirmed.
- api.parliament.uk Hansard, 4 April 1963 written answer: the committee's functions, "We accept these
  recommendations", the voluntary scheme, two members' Note of Dissent, the review "with a view to legislation".
  Confirmed.
- GOV.UK content API: MHRA release of 24 October 2025 ("the first illicit production facility for weight loss
  medicine discovered in the UK", Northampton, "more than 2,000 unlicensed retatrutide and tirzepatide pens"; the raid
  day is not given); MHRA release of 15 October 2026 ("On October 14, over 12,000 fake retatrutide and tirzepatide
  pens", packaging for around 30,000 more, Birmingham); MHRA release of 10 August 2026 (orforglipron). Confirmed.
- fda.gov Accelerated Approval Program page (serious conditions, surrogate endpoint, confirmatory studies). Confirmed.
- Health Canada 2023 advertising guidance (WebFetch; curl to canada.ca timed out): the first of its three conditions
  is that the message "does not caution that the product's safety and effectiveness are still under investigation"
  and that Health Canada has not granted market authorisation (published 2023-07-31). The editorial-policy sentence
  matches.
- Not reachable from this machine today: the TGA counterfeit-retatrutide alert (curl and WebFetch timed out). The
  timeline text was checked against the fact-checked note of `au-tga-2026-09-retatrutide-counterfeit`
  (refocus-australia.yaml: 14 September 2026, unmarked vial, no retatrutide, semaglutide at about 8 times the ARTG
  products' level, hospital treatment for uncontrollable vomiting). Consistent.
- Source records compared (notes): all UK, Canadian and Australian history sources; the route sources (FDA expanded
  access, Right to Try, 21 USC 360bbb-0a, HMR reg 167C, the MHRA EAMS pages, the TGA SAS and Authorised Prescriber
  pages, TG Regs 12A, TG Act s 19, 19B/19D and 25); the approval-date sources (MHRA 2021 and 2022 lists, the SBDs for
  Ozempic, Mounjaro and Egrifta, NOC and DPD records, TGA registrations, ARTG entries); the advertising-law sources
  (HMR reg 279, FDR C.08.002, TG Act 42DL, TG Regs reg 7); the Canadian advisory RA-81874 (every peptide named in the
  event is on its list); the TGA compliance-priority release; the BPC-157 scheduling notice (48 referrals since
  1 July 2022; 1 June 2024); and the status data for BPC-157, KPV, TB-500, MOTS-c, Semax and epitalon (not authorised
  in the US, the UK, Canada and Australia in src/data/compounds/*.yaml). All consistent.

### Fixed in place
1. `corrections.json` (tesamorelin entry): "no longer sold there since 30 September 2022" asserted that no Egrifta
   was sold in Canada after that day; research/refocus/status/tesamorelin.yaml says remaining stock could lawfully
   be sold until lot expiry and "Do not write that it was or was not". Now "the company stopped selling it there on
   30 September 2022" (the manufacturer's discontinuation date, `ca-sbd-egrifta`).
2. `history/how-we-got-here.mdx`: "expanded access for only two of the compounds on this site ... none for ... any
   other compound on this site" overstated the search: `ctgov-expanded-access-search-2026-10-23` covered the peptides
   (plus semaglutide and tirzepatide), not NAD precursors. Now "peptides".
3. `history/timeline.mdx` and `timeline.json` (`fda-pcac-2026-vote`): "None of them / None of these peptides is an
   approved medicine in the US, the UK, Canada or Australia" could include emideltide (DSIP), whose UK, Canadian and
   Australian status was not checked. Now "None of the six" (the six recommended, each checked in the status data).
4. `about/editorial-policy.mdx` (B1 page): the 43-word Health Canada sentence is now three short sentences;
   "Australia's Ahpra register" now says what Ahpra is ("the register of Australia's health practitioner regulator").
5. Glossary `conditional-marketing-authorisation`: "It lasts one year at a time" is the EU and UK rule, presented as
   general. The definition now gives the rules per country (UK one year at a time; Australia's provisional
   registration two years at a time; Canada's notice of compliance with conditions), from the sources the-case-for-
   reform already cites (`mhra-conditional-marketing-authorisation`, `au-tga-provisional-registration`,
   `ca-hc-noc-c-fact-sheet`). Manifest row updated.

### No-loss check (repeated)
Cite ids, `<Claim>` and `<KeyNumber>` counts compared per page with the tag (script, 26 October 2026). Claims and key
numbers: equal on every page. Removed cite ids: exactly the European ids listed in section 4 and the manifest
(how-we-got-here 19 plus `ec-pharma-legislation-timeline`; timeline 8; history/index 3; funding 1; what-is-a-peptide
and pharmacokinetics `ema-epar-byetta`; why-not-a-pill `ema-epar-wegovy` and `ema-epar-foundayo-opinion`;
evidence-grading `ema-epar-ozempic`). Each replaced number was found in the US label. No timeline event was deleted
(74 ids, each with English text); the EU, NL and DE events stay, hidden on English.

### Residue, guardrails, links, validator
- The brief's grep on all owned files: no unmarked hit. Every `residue-ok` marker sits on publisher-law text (about
  pages), thalidomide or drug-lag history, or EMA and European product information used as evidence. The remaining
  raw hits are cite ids, "separate" (epar), "Canada" (nada) and the hidden EU and NL timeline texts.
- No dose amounts, schedules or seller help added; no emergency or help-line number; no commerce word in headings,
  titles or labels; no source whose title or URL names a seller. Every internal link is on the brief's route list.
- `npx tsx scripts/validate-content.ts --only` for about, history, basics, evidence, timeline, corrections and the
  three glossaries: 0 errors, 0 warnings (after the fixes).

### Still open (for the reviewers; nothing is asserted on the pages)
- evidence-grading: the US Wegovy label (06/2026) has no NAION text (confirmed in the PDF). The page names only the
  EMA committee and the MHRA, which is accurate; whether to mention the US label's silence is the medical reviewer's
  call (the Ozempic label was not checked for NAION).
- Glossary `exceptional-circumstances-authorisation` still says "The regulator reviews it every year" (the EU rule);
  the UK also has such licences (title of `mhra-conditional-marketing-authorisation`), but its review period was not
  checked.
- why-not-a-pill: "Health Canada has not authorised" orforglipron rests on the submission being listed as under review
  on 24 October 2026 (`ca-hc-sur-search-status-a-2026-10-24`); the DPD extract search did not include orforglipron.
- The legal and medical questions in section 7 stand.
