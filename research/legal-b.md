# Research notes — group legal-b

Pages: `/legal/de`, `/legal/uk`, `/legal/us`, `/legal/sport-and-doping`, `/legal/whats-changing`.
Data: `src/data/tracker.yaml`, `src/i18n/en/tracker.json`, `src/data/sources/legal-b.yaml`,
`src/i18n/en/glossary/legal-b.json`.
Media (shared files): heroes `legal/de` → `reichstag-berlin-west`, `legal/uk` → `palace-of-westminster-dusk`,
`legal/us` → `fda-white-oak-building`, `legal/sport-and-doping` → `athletics-track-lanes`,
`legal/whats-changing` → `flags-european-parliament-strasbourg` (registered by the second, interrupted run; kept
after checking each image: no products, needles, vials or identifiable people; licences public domain, CC0,
CC BY-SA 2.5/3.0/4.0). This run only shortened four captions in `src/i18n/en/media.json` that failed the reading-ease
warning; the FDA caption was checked against the Commons file description (Building 62, White Oak campus,
Silver Spring, Maryland).

Written on 22 October 2026 (third run of this group). Two earlier runs were interrupted; the second left
`de.mdx`, `uk.mdx` and a re-verified `legal-b.yaml`, but no notes, no `us.mdx`, `sport-and-doping.mdx`,
`whats-changing.mdx`, tracker or glossary. Per the brief, everything inherited was treated as unverified: every URL
in `legal-b.yaml`, and every reused source our pages cite, was fetched again today and read for what we cite it
for (section 2). All pages carry `reviewed_by: pending-legal-review`.

---

## 1. Key facts, with source ids

### Germany

| Fact | Source id |
|---|---|
| § 2(1) AMG: medicine by presentation (Nr. 1) or by function, "pharmakologische, immunologische oder metabolische Wirkung" (Nr. 2a); § 2(3a): in doubt, a product that also fits another category is a medicine | `de-amg-2` |
| § 4(1) Fertigarzneimittel; § 4(17) Inverkehrbringen = "Vorrätighalten zum Verkauf oder zu sonstiger Abgabe, das Feilhalten, das Feilbieten und die Abgabe an andere"; § 4(40) falsified medicine | `de-amg-4` |
| § 21(1): Fertigarzneimittel only with a German or EU authorisation; § 21(2) exceptions (pharmacy production up to 100 packs a day on frequent prescription, clinical trials, compassionate use under Art. 83 Reg. 726/2004, etc.) | `de-amg-21` (bpc-157.yaml) |
| § 5: ban on placing "bedenkliche" medicines on the market or using them on another person; § 8: quality, misleading presentation, falsified medicines | `de-amg-5`, `de-amg-8` |
| § 73(1): only authorised medicines may be brought in, to pharma companies, wholesalers, pharmacies; mail order to end users only from an EU/EEA pharmacy allowed to do mail order. § 73(1b): falsified medicines never. § 73(2) Nr. 2: research institutions' own needs; Nr. 6: on entry, "in einer dem üblichen persönlichen Bedarf entsprechenden Menge"; Nr. 6a: from EU/EEA, may be marketed in the country of origin, without commercial or professional brokerage, personal amount. § 73(3): pharmacy import on individual order, small amount, lawfully marketed in the country of origin, no identical medicine available in Germany; prescription needed from outside EU/EEA. § 73(4): for Nr. 6 and 6a the AMG does not apply except §§ 5, 8, 13–20a, 52a, 64–69, 78 | `de-amg-73` |
| Penalties: § 95 (up to 3 years; 1–10 in especially serious cases; § 5 and § 8 breaches); § 96 Nr. 5 (§ 21 breach, up to 1 year), Nr. 18e (bringing in falsified medicines); § 97(2) Nr. 8 + (3): import contrary to § 73(1), fine up to €25,000 | `de-amg-95`, `de-amg-96`, `de-amg-97` |
| HWG § 3a: advertising for medicines that need but lack authorisation is "unzulässig"; § 10(1): prescription-only medicines only to professionals; § 15(1) Nr. 1 and (3): fine up to €50,000 | `de-hwg-3a`, `de-hwg-10`, `de-hwg-15` |
| AntiDopG § 2(1): manufacture, trade, sale, supply, prescription of substances in Annex I of the UNESCO convention (as published in BGBl II) for doping in sport; § 2(3): acquire, possess or bring in a "nicht geringe Menge" of an Anlage substance for doping in sport (no athlete status required); § 3: self-doping; § 4: penalties (up to 3 years; up to 2 years for § 3(4); 1–10 years e.g. supply to under-18s, commercial/gang; negligence up to 1 year; § 4(7) self-doping penalties only for testing-pool athletes or people with substantial sport income; § 4(8) no penalty if possession given up before use); § 6: ministry sets amounts and extends the Anlage by regulation | `de-antidopg-2` (tb-500.yaml), `de-antidopg-3`, `de-antidopg-4`, `de-antidopg-6` |
| AntiDopG Anlage (BGBl. 2023 I Nr. 67): GH fragments (AOD-9604), GHRH (sermorelin, somatorelin, tesamorelin, mod-GRF, CJC-1295), GHS (ipamorelin and others), GHRPs (hexarelin), thymosin-β4 and derivatives (TB-500); also insulins. Not listed: BPC-157, MOTS-c, GLP-1 agonists, KPV, melanotan II, PT-141, epitalon, Semax, Selank, GHK-Cu, SS-31, thymosin α1 | `de-antidopg-anlage` (tb-500.yaml) |
| DmMV 2023 (in force 16 March 2023): a "nicht geringe Menge" exists for each of the groups above (stated for the free compound). **The amounts are deliberately not printed on the site or in these notes** (no amounts, guide §1); the reviewer can read them in the DmMV Anlage, sections II.2.3–II.3 | `de-dmmv-2023` |
| WADA 2026 list as Annex I, BGBl. 2025 II Nr. 312 (announcement of 18 December 2025, issued 23 December 2025, in force 1 January 2026; follows BGBl. 2024 II Nr. 503 of 13 December 2024). S0 names BPC-157; S2 TB-500, CJC-1295, AOD-9604, hexarelin; S4.4.1 MOTS-c | `de-bgbl-2025-ii-312` |
| BfArM: only legal-supply-chain falsifications; Länder supervise trade, seize and test; police, customs and prosecutors pursue crimes; recall power since 2019; mail-order register and EU logo | `bfarm-arzneimittelfaelschungen` |
| Side-effect reporting: joint BfArM/PEI portal nebenwirkungen.bund.de or paper form; reports by professionals and patients; portal fault 7–9 October 2026, re-report requested | `bfarm-risiken-melden` |
| Cologne lab, 337 black-market products 2010–2013 with customs; 12.8% of findings peptide hormones and growth factors (mostly hGH and GHRPs); thymosin β4 found; "Several substances are of fake/non-approved nature" | `krug-2014-black-market-germany` (PubMed 25168622) |

### United Kingdom

| Fact | Source id |
|---|---|
| Reg. 2: medicinal product by presentation or function | `uk-hmr-2012-reg-2` |
| Reg. 46: no sale, supply or offer of an unauthorised medicinal product; no possession if you know or have reason to believe it will be supplied to another; reg. 47: up to two years on indictment | `uk-hmr-2012-reg-46` (bpc-157.yaml), `uk-hmr-2012-reg-47` |
| Reg. 17(1): manufacturer's licence needed to import into GB from a non-approved country; reg. 17(6): "does not apply to a person who imports a medicinal product for administration to himself or herself or to any other person who is a member of that person's household" | `uk-hmr-2012-reg-17` |
| Reg. 167 specials (unsolicited order, prescriber's specification, patient under their direct care, no advertisement, licence holder); MHRA guidance of 29 January 2025: "clinical in nature", "may not have been assessed by the MHRA", notify before import | `uk-hmr-2012-reg-167`, `mhra-specials-guidance` |
| Reg. 214 (POM only on prescription; parenteral administration to others only by/under an appropriate practitioner), reg. 255(4),(5) (possession with intent to supply; two years on indictment) | `uk-hmr-2012-reg-214`, `uk-hmr-2012-reg-255` |
| Reg. 279: no advertisement unless a UK MA, COR or THR (or reg. 174 authorisation) is in force | `uk-hmr-2012-reg-279` |
| MDA 1971 Sch. 2 Part III (e): HCG, clenbuterol, non-human CG, somatotropin, somatrem, somatropin, zeranol, zilpaterol. Searched for every compound on this site: none named | `uk-mda-1971-sch-2` |
| MHRA: retatrutide not authorised, "anyone selling this product is doing so illegally" (24 July 2026); 2025: almost 20 million doses seized (17 million in 2024), 5,680 GLP-1 pens, >1,500 websites and accounts disrupted, >1,200 posts removed (26 January 2026); May 2026 raid near Northampton, ~12,000 doses, two arrests under HMR 2012, "peptide products"; 14 October 2026 Birmingham, >12,000 fake retatrutide and tirzepatide pens, packaging for ~30,000 more; October 2025 first factory (5,000 pens); February 2026 (~2,000 doses) | `mhra-2026-07-no-summer-shortcut`, `mhra-2026-01-seizures-2025`, `mhra-2026-05-largest-seizure`, `mhra-2026-10-counterfeit-pens` |
| Powder-in-vial GLP-1 products not authorised (first published 5 June 2025, updated 5 February 2026) | `mhra-glp1-what-you-need-to-know` (semaglutide.yaml) |
| Yellow Card: "Anyone can report"; MHRA gives no medical advice; NHS 111 for worries | `mhra-yellow-card` |
| UKAD strict liability wording; 2027 list summary (published 21 September 2026; S0 clarification; not all experimental peptides named; substance@ukad.org.uk) | `ukad-athlete-responsibilities`, `ukad-2027-list-summary` |

### United States

| Fact | Source id |
|---|---|
| Drug = intended for diagnosis, cure, mitigation, treatment or prevention of disease, or (not food) to affect structure or function (§ 321(g)(1)); new drug = not generally recognised as safe and effective (§ 321(p)) | `usc-21-321` |
| No interstate commerce in a new drug without an approved application (§ 355(a)); penalties up to 1 year, 3 years with prior conviction or intent to defraud/mislead (§ 333(a)) | `usc-21-355`, `usc-21-333` |
| Intended use = objective intent shown by labelling, ads, statements, circumstances | `ecfr-21-201-128` (legal-a.yaml) |
| 503A conditions incl. bulk-substance rule (monograph, component of approved drug, or 503A list); "essentially copies" limit; 503B: outsourcing facility compounds sterile drugs, registered, "may or may not obtain prescriptions"; bulk substances from 503B list or shortage list | `usc-21-353a`, `usc-21-353b` |
| 21 CFR 216.23(a): six substances, none a peptide; unchanged since 21 March 2019 | `ecfr-21-216-23` |
| Interim categories 1–3; category 1 only for the no-action policy; final rule February 2019, proposed rule September 2019; no categorisation for nominations on or after 7 January 2025 (page current 14 May 2026) | `fda-503a-bulks-page` (bpc-157.yaml) |
| Category 2 page (current 22 April 2026): "nominated but withdrawn … previously in category 2": AOD-9604, BPC-157, LL-37, CJC-1295, dihexa, emideltide, epitalon, GHK-Cu (injectable), ipamorelin acetate, KPV, PEG-MGF, melanotan II, MOTS-c, selank, semax, thymosin α1, TB-500; current 503B category 2: ipamorelin acetate (29 September 2023) | `fda-category-2-safety-risks` (bpc-157.yaml) |
| Categories list of 14 May 2026: none of these peptides in categories 1–3 except GHK-Cu (non-injectable) in category 1; NAD and NADH in category 1 | `fda-503a-categories-2026-05` (bpc-157.yaml) |
| PCAC 23–24 July 2026: seven peptide groups and the uses FDA reviewed (BPC-157 UC; KPV wound healing and inflammatory conditions; TB-500 wound healing; MOTS-c obesity and osteoporosis; emideltide opioid withdrawal, chronic insomnia, narcolepsy; Semax cerebral ischaemia, migraine, trigeminal neuralgia; epitalon insomnia) | `fr-2026-07361-pcac-notice` (shared) |
| 14 voting questions (free base and acetate for each) | `fda-pcac-2026-questions` |
| FDA staff proposed "NOT be included" for all 14; no final determination until committee input considered | `fda-pcac-2026-briefing-intro` |
| What a 503A listing means (not approved, no label, no CGMP, no AE reporting, any route unless limited; each salt separate) | `fda-pcac-2026-presentations-day1` |
| Meeting page "Content current as of 08/06/2026": no minutes, no vote results | `fda-pcac-2026-07-meeting` (shared) |
| Next PCAC meeting before end of February 2027: LL-37, GHK-Cu, dihexa acetate, melanotan II, PEG-MGF; "non-binding recommendations" | `fda-pcac-2027-early-announcement` |
| Semax "a registered drug in Russia" | `fda-pcac-2026-semax-briefing` |
| GLP-1: tirzepatide shortage resolved 19 December 2024 (503A grace to 18 February 2025 or the court's decision, whichever was later: it ended after the 5 March 2025 ruling; 503B to 19 March 2025); semaglutide resolved 21 February 2025 (503A grace ended after the 24 April 2025 court ruling; 503B to 22 May 2025); neither now on the 503B or shortage list (1 April 2026) | `fda-glp1-compounding-policy` |
| 503B exclusion proposal (press release 30 April 2026; FR notice 1 May 2026; comments to 30 July 2026) | `fda-2026-503b-glp1-exclusion-proposal`, `fr-2026-08552-503b-glp1`, `fr-2026-12937-503b-comment-extension` |
| 990 AE reports compounded semaglutide, >730 tirzepatide (to 31 May 2026); salt forms; counterfeit Ozempic; "for research purposes" products with dosing instructions | `fda-unapproved-glp1-concerns` |
| Warning letters (March and August 2026) | `fda-warning-letters-index` |
| Personal importation policy (current 18 August 2025) | `fda-personal-importation` |
| Import refusal and destruction ≤ $2,500 | `usc-21-381` |
| MedWatch | `fda-medwatch` |

### Sport

| Fact | Source id |
|---|---|
| Strict liability (Art. 2.1.1), sanctions (10.2.1, 10.2.2), contaminated source (10.6.1.2) and its comment, comment to 10.5 on mislabelled supplements, recreational athletes (10.6.1.3 and definition) | `wada-code-2027`, `wada-code-2021` |
| 2027 Code and Standards approved 5 December 2025 in Busan, in force 1 January 2027 | `wada-2027-code-standards-page`, `wada-istue-2027` |
| 2027 list: S0 wording adds "peptides" as an example; BPC-157; S0 Specified; S2 non-Specified; S2.2.3 AOD-9604; S2.2.4 CJC-1293, CJC-1295, sermorelin, tesamorelin, ipamorelin, examorelin (hexarelin); S2.3 TB-500; S4.4.1 MOTS-c; specified definition | `wada-2027-list-en` (bpc-157.yaml) |
| 2026 list: same S0 rule without "peptides" in the examples | `wada-2026-list-en` |
| BPC-157 added to S0 for 2022 | `wada-2022-list-modifications` |
| Explanatory note for 2027 | `wada-2027-list-explanatory-note` |
| GLP-1 agonists in the 2026 and 2027 Monitoring Programs | `wada-2026-monitoring-program`, `wada-2027-monitoring-program` |
| ISTUE 2023 and 2027: four criteria, all must be met; legality not considered; no mention of S0 | `wada-istue-2023`, `wada-istue-2027` |
| Dutch testing: any federation member can be tested; most at top level; random lower-level tests; Belgium tests far more, incl. surprise gym tests; refusal usually 2 years, maybe 4, also valid in NL; Dutch gyms hardly any tests | `dopingautoriteit-controles-belgie`, `dopingautoriteit-eigen-kracht` |
| First violation from a warning to four years; consequences of a ban; report suspected contaminated supplements at once and keep them | `dopingautoriteit-positieve-test` |
| 2027 list news (28 September 2026), Dutch translation from 1 January 2027 in the Dopingwaaier app | `dopingautoriteit-2027-list-news` |
| Swiss border: 1,190 products, 146 labelled peptide hormones/growth factors, <20% contained the claimed substance in the claimed amount | `weber-2017-swiss-border` (PubMed 28156209) |

### Tracker

The 12 items and their sources are in `src/data/tracker.yaml`. `updated` is the date of the latest verified
official step (all items were checked on 22 October 2026). `next_milestone` only where an official source gives a
date: 2027-02-28 (FDA: "before the end of February 2027"), 2026-11-23 (OEIL indicative plenary date), 2027-01-01
(WADA list, Code and ISTUE). `compounds` lists only compounds with a page (bpc-157, kpv, tb-500, semaglutide,
tirzepatide, retatrutide) so the tracker never links to a missing route; MOTS-c, Semax, epitalon and the 2027 PCAC
substances are named in the text.

---

## 2. Verification log (22 October 2026)

Method: a script fetched every URL in `legal-b.yaml` plus every reused id our pages cite (87 URLs) with curl into a
scratch folder; all returned HTTP 200. HTML was converted to text (with a Latin-1 fallback for
gesetze-im-internet.de), PDFs with `pdftotext`. Each page was read for the specific sentence we cite.

- **gesetze-im-internet.de**: AMG §§ 2, 4, 5, 8, 21, 73, 95, 96, 97; HWG §§ 3a, 10, 15; AntiDopG §§ 2, 3, 4, 6 and
  Anlage; DmMV 2023 (main text and Anlage). All wording above matches. § 73(2) Nr. 2 (research institutions) was
  added to the DE page this run.
- **recht.bund.de**: BGBl. 2025 II Nr. 312 HTML page and its PDF (`regelungstext.pdf`): dates, in-force date, S0
  BPC-157, S2 items and MOTS-c in S4.4.1 confirmed; the German translation ("S0 Nicht zugelassene Stoffe") is in the
  same PDF.
- **bfarm.de**: both pages read in full (the reporting page includes the 7–9 October 2026 portal fault notice).
- **legislation.gov.uk**: regs. 2, 17, 46, 47, 167, 214, 255, 279 ("up to date with all changes known to be in
  force on or before" 18–22 October 2026); MDA Sch. 2 searched for 21 compound names and "peptide": no hits.
- **GOV.UK**: four MHRA press releases (dates from the pages), specials guidance and GLP-1 guidance (dates from the
  GOV.UK content API: 29 January 2025; 5 June 2025 / 5 February 2026).
- **law.cornell.edu**: 21 U.S.C. §§ 321, 333, 353a, 353b, 355, 381 (exact quotes checked).
- **eCFR**: 21 CFR 216.23 through the versioner API (`full/2026-10-15`, with compression); version history shows
  21 March 2019 as the last change. (The HTML page is a script shell.)
- **Federal Register API**: FR Docs 2026-07361, 2026-08552, 2026-12937 (metadata and full text of 2026-07361);
  search re-run for FDA documents since 24 July 2026 (phrases compounding, 503A, 503B, bulk drug substances,
  Pharmacy Compounding Advisory Committee, peptide): no 503A rule, no 503B final determination, no PCAC meeting
  notice. Note updated in `federalregister-fda-search-2026-10-22`.
- **fda.gov**: PCAC meeting page (still "Content current as of 08/06/2026", no minutes), materials page, 2027
  early announcement, briefing intro, questions, day-1 slides, Semax briefing, 503A page, Category 2 page,
  categories PDF, GLP-1 policy page, GLP-1 concerns page, 503B press release, personal importation, MedWatch,
  warning-letter index. Two warning letters read in full: MARCS-CMS 721806 (31 March 2026) and 735067
  (24 August 2026).
- **wada-ama.org**: Code 2021, Code 2027 (October 2026 PDF; linked from the 2027 Code page), ISTUE 2023, ISTUE 2027
  (linked from the 2027 Code page; approved 5 December 2025), 2026 and 2027 lists, 2022 and 2027 explanatory notes,
  2026 and 2027 Monitoring Programs, Prohibited List page, 2027 Code and International Standards page (new source
  `wada-2027-code-standards-page`).
- **ukad.org.uk**, **dopingautoriteit.nl** (four pages), **igj.nl** (two pages, also fetched the August 2026 IGJ
  order, see 3.4), **ema.europa.eu**, **OEIL** (both procedure files: status "Awaiting Parliament 2nd reading",
  Council position 1 October 2026, committee referral 8 October 2026, committee draft report 12 October 2026,
  indicative plenary 23 November 2026).
- **PubMed**: `krug-2014-black-market-germany` (PMID 25168622, DOI 10.1007/s00228-014-1743-5, Eur J Clin Pharmacol
  70(11):1303-11) and `weber-2017-swiss-border` (PMID 28156209, DOI 10.1080/10826084.2016.1263665, Subst Use Misuse
  52(6):742-753): authors, title, journal, year, volume, pages, DOI and PMID match the registry.
- **Commons API**: description of the FDA building photo (Building 62, White Oak, Silver Spring, Maryland).

Corrections to the inherited files:
- `legal-b.yaml`: header rewritten; `de-dmmv-2023` note no longer says amounts are kept in these notes;
  `federalregister-fda-search-2026-10-22` note replaced with today's search; `fda-warning-letters-index` note now
  lists only letters this group read in full and adds the injection sentence; `wada-code-2027` note adds
  Art. 10.6.1.2, the comment to Art. 10.5 and the recreational-athlete definition, and corrects which page links the
  PDF; `wada-istue-2027` note adds the approval line; `usc-21-321` note adds § 321(p); new
  `wada-2027-code-standards-page`.
- `de.mdx`: summary item 3 rewritten (the medicines law does not *name* self-use; self-doping by elite athletes is
  a crime under the AntiDopG, covered in item 4); § 73 luggage row reworded ("This exception does not mention a
  licence"; §§ 5, 8 and the doping law still apply), research-institution bullet added; Krug figure corrected
  (12.8% of *findings*, not of products); MOTS-c S4 now cited to the German gazette.
- `uk.mdx`: 16 readability warnings fixed; thymosin alpha-1 added to the MDA search row; Compare title no longer
  says the law "lets you" import (reg. 17(6) is an exemption from a licence requirement, not a permission).

---

## 3. Conflicts and how they were resolved

1. **PCAC vote counts.** No FDA page gives them (meeting page unchanged since 6 August 2026). RAPS (23 July 2026,
   read for checking only, not allowlisted, not cited) reports 8–6–1 for BPC-157 and KPV; other groups' notes cite
   law-firm summaries agreeing on 8–6–1 for TB-500, but reported counts for epitalon differ (7–4–1 vs 7–5–1).
   Resolution: we print only BPC-157's 8–6–1 (canonical, "as reported from the public meeting") and the
   six-of-seven outcome, and say why the others are not printed. Whether free-base and acetate votes differed is
   unknown.
2. **"Reclassification" of peptides to category 1.** Trade press and law-firm alerts describe a 27 February 2026
   announcement by the HHS Secretary that about 14 of 19 category 2 peptides would move to category 1. FDA's own
   pages show the nominations withdrawn ("previously in category 2") and none of the peptides in category 1 on
   14 May 2026 (except non-injectable GHK-Cu). We could not find the HHS statement on hhs.gov or fda.gov.
   Resolution: we report only what FDA documents show, and the tracker page has a "What we do not track" note.
3. **Date peptides entered category 2.** Secondary sources say 29 September 2023; the FDA page gives dates only for
   substances still in category 2 (ipamorelin acetate, 503B: 29 September 2023). We give no date for the withdrawn
   ones.
4. **Semax under S0.** S0 covers substances with no approval by any government health authority; FDA says Semax is
   registered in Russia. We mark Semax "unknown" and advise asking the anti-doping organisation, rather than
   claiming it is or is not banned. The same logic may apply to Selank and thymosin alpha-1, but we had no verified
   source for their registration status, so they are not in the table.
5. **"Contaminated product" vs "contaminated source".** The 2021 Code uses "Contaminated Product"; the 2027 Code
   uses "Contaminated Source" with a wider definition. The sport page cites the 2027 wording and says the
   label-disclosure point is our reading.
6. **Search counts in the old FR note** (24 "compounding" results) differ from today's exact-phrase search (15);
   both found no relevant rule. The note now records today's method and counts.

### 3.4 Sources deliberately not cited

- **FDA warning letters** name sellers and web addresses: cited through the index only (as legal-a does).
- **IGJ order of 24 August 2026** (bevel and, on 31 August, a last onder dwangsom against an online seller of
  retatrutide, tirzepatide and semaglutide; the IGJ says it had "meerdere meldingen" of harm after retatrutide).
  The page names the seller and lists its web domains, so citing it would link readers to a seller. Not used;
  flagged for the editor (contract_issues).
- Law-firm alerts, trade press, AJMC, RAPS, Time: used only to look for primary documents.

---

## 4. Warnings and validator notes

`npx tsx scripts/validate-content.ts --only legal/` and `--only legal-b` and `--only tracker`: 0 errors,
0 warnings in this group's files (22 October 2026). Earlier "related route does not exist yet" warnings for
`legal/sport-and-doping` and `legal/whats-changing` disappeared once those pages existed. Four media captions of
this group's photos were shortened to clear reading-ease warnings in `media.json`.

Body word counts (prose without tags): DE ~2,320, UK ~1,380, US ~2,360, sport ~1,770, what's changing ~1,690.

`<ProductCheck />` is not used on these legal pages: none of them discusses using a product. The sport page links
to product risk instead.

---

## 5. Open questions for the legal reviewer

1. **DE § 73(2) Nr. 6/6a** for peptides with no authorisation anywhere: how customs and courts apply "üblicher
   persönlicher Bedarf" and whether Nr. 6a can ever apply (it needs lawful marketing in the country of origin).
   The page gives our reading of the text and says so.
2. **DE § 2(3) AntiDopG "zum Zwecke des Dopings beim Menschen im Sport"**: does gym training without competitions
   count as "Sport"? The page leaves this open.
3. **UK personal import**: reg. 17(6) removes the manufacturer's-licence requirement; we found no MHRA public
   guidance on whether customs may still stop such parcels (e.g. under customs powers). Also: does the
   Psychoactive Substances Act 2016 matter for Semax or Selank imports, or are they exempt as medicinal products?
   Not addressed on the page.
4. **US personal importation** in practice for peptides (refusal and destruction rates): no FDA data found.
5. **PCAC**: confirm vote counts and per-salt outcomes when FDA minutes appear; check for any FDA decision or
   proposed rule; add the date of the next PCAC meeting when noticed.
6. **EU reform**: once the final texts are in the Official Journal, update the tracker and say what changes for
   unlicensed medicines (we did not read a final text and claim nothing about content).
7. **WADA status of Semax, Selank, thymosin alpha-1, PT-141 (bremelanotide) and GHK-Cu**: worth a written query to
   the Dopingautoriteit or WADA, so the sport table can move them out of "ask".

---

## 6. Diagrams and explainers

Diagrams (text equivalents in the pages; designers draw later): `de-medicine-two-tests`, `de-licence-chain`,
`de-import-routes`, `de-enforcement-map`, `uk-medicinal-product-two-tests`, `uk-regulation-46`, `uk-personal-import`,
`uk-specials-conditions`, `uk-class-c-hormones`, `us-drug-two-tests`, `us-approval-chain`, `us-compounding-routes`,
`us-pcac-2026-outcomes`, `us-warning-letter-logic`, `us-personal-import`, `who-is-tested-nl-be`,
`strict-liability-chain`, `tue-four-tests`, `tracker-status-ladder`, `us-503a-steps`, `eu-reform-steps`,
`europe-enforcement-watch`.

Proposed explainer (not built): `us-503a-pathway` — 5 steps: (1) nomination of an ingredient; (2) FDA review and
category; (3) advisory committee vote (advice only); (4) FDA proposed rule and public comments; (5) final rule adds
it to the 503A list, and pharmacies may then compound it on prescription (still not an approved medicine). Sources:
`fda-503a-bulks-page`, `fda-pcac-2026-briefing-intro`, `fda-pcac-2026-presentations-day1`, `usc-21-353a`.

---

## 7. Fact-check log (independent fact-checker, 22 October 2026)

Scope: `legal/de`, `legal/uk`, `legal/us`, `legal/sport-and-doping`, `legal/whats-changing`, `src/data/tracker.yaml`,
`src/i18n/en/tracker.json`, `src/data/sources/legal-b.yaml`, `src/i18n/en/glossary/legal-b.json` and these notes.
Everything was treated as unverified.

### 7.1 What was checked, and how

- **Sources (93 URLs).** Every URL in `legal-b.yaml` plus every reused id the five pages and the tracker cite was
  fetched again with curl (all HTTP 200, except EUR-Lex, see 7.3) and converted to text (HTML parser; `pdftotext`
  for PDFs). Each was read for the exact sentence it supports. Extra documents fetched: BGBl. 2025 II Nr. 312
  `regelungstext.pdf`; 21 CFR 216.23 and 201.128 through the eCFR versioner API (text of 15 October 2026; version
  list for § 216.23: last change 21 March 2019); Federal Register API metadata for FR Docs 2026-07361, 2026-08552,
  2026-12937 and the full text of 2026-07361 and 2026-08552; 21 U.S.C. § 331 on law.cornell.edu; GOV.UK content API
  for the specials guidance; Wikimedia Commons API for the five hero images; Dopingautoriteit "Doping en de wet".
- **Scholarly sources.** `krug-2014-black-market-germany` (PMID 25168622) and `weber-2017-swiss-border` (PMID
  28156209) compared with PubMed: authors, title, journal, year, volume, issue, pages and DOI match exactly.
- **Federal Register searches re-run** (FDA documents since 24 July 2026): compounding 15, "503A" 3, "503B" 6,
  "Pharmacy Compounding Advisory Committee" 7, "bulk drug substances" 2, peptide 2, semaglutide 1. None is a 503A
  proposed or final rule, a 503B final determination or a PCAC meeting notice; counts match the source note. A
  further search (FDA proposed and final rules containing "bulk drug substances" since 1 January 2019) confirms that
  the last proposed rule on the 503A list is FR Doc. 2019-18951 of 5 September 2019, as the US page says.
- **FDA warning letters.** MARCS-CMS 721806 (31 March 2026) and 735067 (24 August 2026) fetched from fda.gov and
  read: every statement the US page and the tracker attribute to "letters of March and August 2026" is in them
  (research-use labels, website claims as evidence of intended use under 21 CFR 201.128, unapproved new drugs under
  section 505(a), bacteriostatic water as a drug, injection bypassing the body's defences, seizure and injunction;
  the six products named). The letters are still not registered (they name sellers); see 7.4.
- **PCAC (all five canonical elements)** checked on `us.mdx`, `whats-changing.mdx` and the tracker item against the
  meeting page (still "Content current as of 08/06/2026", no minutes or vote results), the voting questions (14
  votes, free base and acetate for each of seven groups), the briefing introduction (FDA staff proposed "NOT be
  included" for all 14 forms; all nominations withdrawn, FDA proceeded anyway), the day-1 slides and 21 CFR
  216.23(d). The BPC-157 count 8-6-1 and the six-of-seven outcome remain "as reported from the public meeting".
- **Regulatory statuses and dates** re-verified: FDA category pages (category 2 page current 22 April 2026;
  ipamorelin acetate 503B category 2 since 29 September 2023; categories PDF of 14 May 2026: no peptide of ours in
  any category except GHK-Cu non-injectable in category 1); 2027 PCAC early announcement (current 15 April 2026);
  GLP-1 policy page (current 1 April 2026); 503B proposal (FR 1 May 2026, comments extended to 30 July 2026);
  WADA 2026 and 2027 lists, explanatory notes, Monitoring Programs, Codes 2021 and 2027, ISTUE 2023 and 2027;
  UKAD; Dopingautoriteit; OEIL (both files "Awaiting Parliament 2nd reading"); EMA reform page; MHRA press
  releases (dates from the pages); IGJ. Retatrutide is still not approved anywhere (MHRA, 15 October 2026; news
  reports read for checking only say no application has been filed), so S0 still applies to it.
- **Statutes.** AMG §§ 2, 4, 5, 8, 21, 73, 95, 96, 97; HWG §§ 3a, 10, 15; AntiDopG §§ 2, 3, 4, 6 and Anlage; DmMV
  2023; HMR 2012 regs 2, 17, 46, 47, 167, 214, 255, 279; MDA 1971 Sch. 2; 21 U.S.C. §§ 321, 331, 333, 353a, 353b,
  355, 381. Every legal statement on the pages was compared with the statute text.
- **Guardrails** (§1, §1a, §6): no amounts, schedules, protocols, sourcing hints, testimonials or superlatives found;
  the DmMV amounts and US fine amounts stay unprinted; no seller named. Link texts contain no commerce words;
  internal links all go to planned routes; no `# ` headings.
- **Media.** Commons licences confirmed (CC BY-SA 3.0, CC BY-SA 2.5, public domain (FDA), CC BY-SA 4.0, CC0); the
  images show buildings, a running track and flags only.
- **Validator:** 0 errors and 0 warnings for `legal/de`, `legal/uk`, `legal/us`, `legal/sport-and-doping`,
  `legal/whats-changing`, `tracker` and `legal-b` after the changes below.

### 7.2 Errors found and fixed

1. **UK Class C list incomplete** (`uk.mdx` diagram, `uk-mda-1971-sch-2` note, section 1 of these notes): MDA
   Sch. 2 Part III para 1(e) also lists zilpaterol (inserted 23 December 2009 by SI 2009/3209) and non-human
   chorionic gonadotrophin. Both added. The conclusion (no peptide on this site is listed) is unchanged.
2. **Tirzepatide 503A grace period wrong on the US time strip.** The FDA's grace period ran "until February 18,
   2025, or until the date of the district court's decision ..., whichever is longer"; the court ruled on
   5 March 2025 and the FDA then said the period had ended. The span now ends on 5 March 2025 with that wording;
   section 1 of these notes corrected.
3. **Specials guidance date.** The GOV.UK content API gives first publication 6 May 2014 and last update
   29 January 2025; the note said "Published 29 January 2025". Corrected.
4. **`usc-21-333` note** still carried the unverified clause that "later federal law changed" the fine amounts,
   although the writer reported it removed. Removed; § 331(d) wording verified and recorded.
5. **`krug-2014` note** said "12.8% of products"; the abstract says 12.8% "accounted for" peptide hormones without
   stating the base. Note aligned with the page ("of what it found").
6. **PCAC element 5 incomplete.** The tracker item lacked "a listing would allow pharmacy compounding on
   prescription; it is not an approval and says nothing about efficacy", and the US page lacked "not an approval".
   Both added (the US page now also cites 21 CFR 216.23(d)); the tracker item's sources gained
   `fda-pcac-2026-presentations-day1` and `nl-geneesmiddelenwet`.
7. **Overstatements and imprecision.**
   - US summary item 3 and Compare row ("these peptides") were ambiguous: tesamorelin and semaglutide are parts of
     approved drugs. Both now name BPC-157 and the peptides voted on in 2026.
   - "Nobody has checked what is in it" (DE, UK, US, sport) was too absolute. Now "no regulator has checked what is
     in it". (`nl.mdx` has the same sentence; not ours, flagged in 7.4.)
   - The sport Compare row generalised the Code's comment on mislabelled supplements to all products. It is now
     attributed to the Code and says "supplement".
   - The Weber KeyNumber's data card now says most seized products were labelled as anabolic agents, so "less
     than 20%" is not read as a peptide-only figure.
   - The sport KeyNumber label said "unless you show no intent"; under the 2027 Code the athlete must also show how
     the substance entered the body. Corrected.
   - UK: "Some growth hormones are Class C" became "Growth hormone and a few other hormones"; the KeyNumber said
     "illegal drugs" for illegally traded medicines. Corrected. The friend, resale and group-order examples of
     "supply" are now marked as our reading, after the law's own words (sell, supply, arrange).
   - DE: "no exception covers selling it as a product" is now marked as our reading. The BfArM sentence now follows
     the page (BfArM cannot seize or test; the Länder do; police, customs and prosecutors pursue crimes). The claim
     that the German anti-doping law reaches further than Dutch law now cites `de-antidopg-2` and
     `dopingautoriteit-doping-en-de-wet` (re-fetched: no prosecution for use in NL; possession for own use tolerated).
   - US: the 990-reports KeyNumber title now says "reports of side effects"; the Lead on GLP-1 copies says "Not as
     a rule" (FDA does not act on four or fewer prescriptions a month); the $2,500 border destruction limit notes
     "or a higher limit set by regulation" (§ 381).
   - Tracker: the title "peptides moved out of category 2" could be read as a move to category 1 (the most common
     misreport); now "peptide nominations withdrawn, none in category 1".
   - What's changing: "five more substances are due" became "on the agenda of a meeting planned before the end of
     February 2027".
   - Glossary `nicht-geringe-menge`: "owning more than this amount" became "this amount or more" (the DmMV amount
     is the threshold itself).
8. **B1 readability.** Five prose sentences of 25-31 words were split (DE § 2 and § 73 folds, US penalties fold and
   the "none of the seven" sentence, sport recreational-athlete fold). New KeyNumber, summary and Lead texts were
   scored with `src/lib/readability.ts` (all 60 or more).
9. **Warning-letter claims.** The first step of the US diagram now also cites `fda-unapproved-glp1-concerns`,
   which says the FDA warned sellers of products falsely labelled "for research purposes" or "not for human
   consumption".

### 7.3 Checked and found correct (selection)

All AMG, HWG, AntiDopG and DmMV statements (including § 73(2) Nr. 2, 6, 6a, § 73(3), § 73(4) and the penalty
table); the AntiDopG annex rows (six peptides on this site named; BPC-157, MOTS-c and GLP-1 agonists not); BGBl.
2025 II Nr. 312 (issued 23 December 2025, in force 1 January 2026, S0 BPC-157, S2 items, S4.4.1 MOTS-c); the BfArM
reporting page (joint portal, paper form, fault 7-9 October 2026); all HMR regulations and penalties; MHRA figures
(12,000+ pens, packaging for 30,000, 5,000 / 2,000 / 12,000, almost 20 million doses, 5,680 pens, 1,500+ sites);
specials conditions; Yellow Card wording; 21 U.S.C. quotes; 503A and 503B conditions; six substances on the 503A
list; FDA category definitions and the 7 January 2025 cut-off; the use reviewed for each peptide; 14 FDA "NOT be
included" proposals; the 2027 PCAC substances; semaglutide GLP-1 dates; the 503B proposal's reason; 990 and 730+
reports to 31 May 2026; personal-importation wording; MedWatch wording; WADA S0 wording 2026 vs 2027 (only the
word "peptides" added), specified and non-specified classes, S2 and S4.4.1 names, the eight named peptides,
Monitoring Program item 6 in 2026 and 2027; Code 2021 and 2027 sanction rules, strict liability, contaminated
source, recreational athlete; ISTUE 2023 and 2027 criteria and the legality comment; UKAD and Dopingautoriteit
statements; OEIL dates; EMA reform dates; IGJ figures.

EUR-Lex (`eu-directive-2001-83`) answered curl and WebFetch with a bot challenge (HTTP 202), so it could not be
re-read. Its two uses (UK page: "the same two tests as in EU law"; What's changing: the directive's definition,
licence rule and advertising ban) rely on the shared registry entry verified on 20 October 2026 and are standard
(Art. 1(2), 6(1), 87(1)).

### 7.4 Open issues for the editor and the legal reviewer

- **Warning letters cited through the index.** The index page does not itself contain the statements it supports;
  the two letters do (verified above). Registering the letters with neutral titles would make the citations exact,
  but links a page that names a seller. Editor decision still needed (shared with legal-a).
- **Canonical PCAC element 5** ("None of these is an approved medicine") conflicts with the FDA's Semax briefing
  ("a registered drug in Russia"). The pages follow the primary source; the guide's wording should change.
- `nl.mdx` (legal-a) still says "nobody has checked what is in it"; suggest the same change there.
- The writer's report counted 42 glossary entries; the file has 41 (no entry missing that the pages need).
