# Research: eu-status (27 October 2026)

Topic: the EU and Dutch regulatory status of the 21 compounds on this site, the EU products, EU safety actions and
shortages, and EU medicines law changes, on 27 October 2026. For the compound pages (status table, *At a glance*,
badge, products), `legal/eu`, `legal/whats-changing` (EU part), the timeline and the tracker of the Dutch site.

Files: this file; sources in `research/nl/sources/eu-status.yaml` (42 new entries plus 3 added by the fact-check, header lists the reused ids);
one status file per compound in `research/nl/status/<slug>.yaml` (rows for EU and NL, EU products, differences from
the data file, suggested one-line notes in English, and what was searched).

Method. Every regulator, register and law page below was fetched on 27 October 2026 and read (section 3). EMA data
were taken from EMA's own downloads (medicines JSON, orphan-designation JSON, shortages JSON, the monthly list of
applications under evaluation, the additional-monitoring list), product information was read in Dutch and English with
`pdftotext`, the Dutch register (Geneesmiddeleninformatiebank) was searched with the CBG's own search URL, and the EU
trials register (CTIS) through its public API and, for per-country statuses, in the built-in browser. EUR-Lex refuses
scripts (HTTP 202, empty), so EU acts were read through the Publications Office's CELLAR resolver for the same CELEX
number. Nothing in this file is taken from memory; where a source could not be read, the point is in section 5.

Wording: "authorised" means a marketing authorisation (*handelsvergunning*). "EU-wide" or "central" means granted by
the European Commission under Regulation 726/2004; it is valid in every member state, the Netherlands and Belgium
included (`eu-regulation-726-2004`, art. 13(1): "shall be valid throughout the Union").

---

## 1. Key facts

### A. Status of the 21 compounds (EU and Netherlands), true on 27 October 2026

1. **Searches.** EMA medicines JSON, 2,754 records, timestamp 2026-10-27T06:02:09Z (all authorised, refused,
   withdrawn, suspended and opinion-stage centrally assessed medicines); EMA orphan JSON, 3,310 records,
   2026-10-27T06:05:14Z; EMA list of initial applications under evaluation, extracted 5 October 2026 (EMA/222468/2026,
   the latest monthly list; no November list yet); CTIS public portal; Geneesmiddeleninformatiebank (CBG). Each of the
   data files' names, INNs, codes and brands was searched (lists in each status file).
   `ema-medicines-json`, `ema-orphan-designations-json`, `ema-under-evaluation-2026-10`, `cbg-gib-search-status-2026-10-27`
2. **Semaglutide: authorised in the EU since 8 February 2018** (Ozempic). Five EU medicines contain semaglutide, all
   held by Novo Nordisk A/S and all "Authorised": Ozempic (EU/1/17/1251, 8 Feb 2018), Rybelsus (EU/1/20/1430,
   3 Apr 2020), Wegovy (EU/1/21/1608, 6 Jan 2022; tablets 1.5/4/9/25 mg and a 7.2 mg pen added by Commission decision of
   14 Jul 2026), **Kayshild** (EU/1/26/2019, 26 Mar 2026, MASH, conditional marketing authorisation) and **Kyinsu**
   (EU/1/25/1992, 24 Nov 2025, insulin icodec + semaglutide). The Netherlands: authorised through these EU
   authorisations; the Geneesmiddeleninformatiebank lists 33 semaglutide product lines, all with EU numbers, no national
   product. `ema-medicines-json`, `ema-epar-ozempic`, `ema-epar-rybelsus`, `ema-epar-wegovy`, `ema-epar-kayshild`,
   `ema-epar-kyinsu`, `ec-union-register-wegovy`, `ec-union-register-kayshild`, `ec-union-register-kyinsu`,
   `cbg-gib-search-semaglutide-2026-10-27`
3. **Tirzepatide: authorised in the EU since 15 September 2022** as Mounjaro (EU/1/22/1685, holder Eli Lilly Nederland
   B.V., Utrecht). One marketing authorisation covers single-dose pens, single-dose vials (*injectieflacon*) and the
   multi-dose KwikPen, each 2.5 to 15 mg. No other EU tirzepatide medicine (no "Zepbound" in the EU). Netherlands: 18
   product lines in the Geneesmiddeleninformatiebank, all EU/1/22/1685. `ema-epar-mounjaro`, `ema-pi-mounjaro-nl`,
   `ec-union-register-mounjaro`, `cbg-gib-search-tirzepatide-2026-10-27`
4. **Tesamorelin: EU status "withdrawn" (application), since 21 June 2012, not "refused".** EMA record Egrifta,
   EMEA/H/C/002427, "Application withdrawn", applicant Ferrer Internacional S.A., withdrawal 21/06/2012; the CHMP's
   provisional view was that it could not be approved, but no opinion was adopted. No Dutch product. `ema-egrifta-withdrawal`,
   `ema-medicines-json`, `cbg-gib-search-status-2026-10-27`
5. **Retatrutide: investigational in the EU and the Netherlands.** No EMA record, not on the list of applications
   under evaluation (5 October 2026). CTIS lists nine retatrutide trials; three are not ended: TRIUMPH-5
   (2024-511450-49-00; Germany, Poland; "Ongoing, recruitment ended"), SYNERGY-Outcomes (2025-522674-36-00; 15 member
   states; **Netherlands "Authorised, recruiting"**, decision 4 February 2026, Dutch start 22 September 2026) and a phase
   1 trial in Germany. TRIUMPH-Outcomes (NCT06383390, 28 Dutch site entries on ClinicalTrials.gov, "Active, not
   recruiting") gives EU CT number 2023-508630-34-00, but CTIS shows no public information for it. No Dutch
   compassionate-use programme (CBG list, page date 10 July 2026). `ema-under-evaluation-2026-10`,
   `ctis-2024-511450-49-00`, `ctis-2025-522674-36-00`, `ctgov-nct06383390`, `ctgov-nct07165028`, `cbg-compassionate-use-list`
6. **SS-31 (elamipretide): not authorised in the EU or the Netherlands; in phase 3 trials in the EU, one approved for
   the Netherlands.** No EMA medicine record and no application under evaluation; two orphan designations (EU/3/21/2430,
   Barth syndrome, 20 May 2021; EU/3/22/2614, mitochondrial DNA depletion syndrome, 16 May 2022). CTIS: ReNEW
   (2024-511482-11-00, dry AMD, phase 3; Germany, Spain, Italy, Czechia, Hungary, "Ongoing, recruitment ended") and
   4TAZPower (2025-523837-25-00, Barth syndrome, phase 3b/4; Netherlands, Italy, France, Ireland, all "Authorised,
   recruitment pending"; Dutch decision 27 July 2026). `ema-orphan-elamipretide-eu-3-21-2430`, `ctis-2024-511482-11-00`,
   `ctis-2025-523837-25-00`
7. **PT-141 (bremelanotide): not authorised in the EU or the Netherlands, and no EU application on record** (EMA records
   include refused and withdrawn applications; none for bremelanotide; none under evaluation). `ema-medicines-json`,
   `ema-under-evaluation-2026-10`, `cbg-gib-search-status-2026-10-27`
8. **Thymosin alpha-1 (thymalfasin): no EU-wide authorisation; not authorised in the Netherlands; authorised nationally in
   Italy (Zadaxin).** The EMA orphan page (EU/3/02/110, 30 July 2002) says it "is authorised in Italy". AIFA's database
   (read 27 October 2026, host not allowlisted, not registered) lists ZADAXIN, AIC 028364026, "AUTORIZZATA",
   authorised 16 May 1996, marketed. The only CTIS trial (cystic fibrosis, Italy) has ended. `national_authorisations`
   in the data file stays as it is. `ema-orphan-thymalfasin-eu-3-02-110`, `ctis-2024-518102-41-00`
9. **The other 13 (AOD-9604, BPC-157, CJC-1295, epitalon, GHK-Cu, hexarelin, ipamorelin, KPV, melanotan II, MOTS-c,
   Selank, Semax, TB-500) and NAD+ precursors: not authorised in the EU or the Netherlands.** No EMA medicine record, no
   application under evaluation, no CTIS trial, no Dutch product ("Geen producten gevonden"). One orphan designation for
   NMN (EU/3/23/2786, sickle cell disease, 20 June 2023), which is not an authorisation. `ema-medicines-json`,
   `ema-orphan-designations-json`, `cbg-gib-search-status-2026-10-27`
10. **Afamelanotide is not melanotan II.** Scenesse (afamelanotide, a different melanocortin peptide) is authorised in the
    EU since 22 December 2014 for erythropoietic protoporphyria (exceptional circumstances, additional monitoring); the
    Dutch register's search for "melanotan" returns only SCENESSE 16 mg implantaat. `ema-medicines-json`, `ema-epar-scenesse`
11. **Under EMA review on 27 October 2026, among the site's compounds: only generic semaglutide.** Three generic
    applications: EMEA/H/C/006847 (type 2 diabetes, evaluation started 21 May 2026), 006902 (type 2 diabetes,
    18 June 2026) and 006910 (weight management, 18 June 2026); the CHMP's October agenda had 006902 and 006910 at the
    Day 120 list of questions. No compound of this site has an initial application under review. (Orforglipron, a
    non-peptide GLP-1 agonist and not a compound of this site, got a positive CHMP opinion on 15 October 2026 as
    Foundayo; no Commission decision yet.) `ema-under-evaluation-2026-10`, `ema-chmp-2026-10-agenda`,
    `ema-chmp-2026-10-highlights`, `ema-epar-foundayo-opinion`
    *Fact-check addition:* also under CHMP evaluation, an **extension of indication for Rybelsus** to children and
    adolescents from 10 years with type 2 diabetes (EMA/VR/0000369826, evaluation started 12 September 2026), besides
    the Kyinsu extension (fact 15) and the Mounjaro variation (fact 17). `ema-ext-indication-under-evaluation-2026-09`

### B. Authorised EU products: what changed in 2025-2026

12. **Wegovy.** Tablets (1.5, 4, 9, 25 mg; adults only) and the 7.2 mg pen: CHMP opinion 21 May 2026, Commission
    decision 14 July 2026 (C(2026) 5102). Five-year renewal: CHMP outcome 23 July 2026, Commission decision
    21 September 2026 (C(2026) 6826); the Dutch SmPC now says "Datum van laatste verlenging: 21 september 2026". The
    product information was last updated on 26 October 2026. Presentations in the Dutch SmPC: single-dose pens 0,25 to
    2,4 mg and 7,2 mg, FlexTouch pens, prefilled syringes, tablets. `ema-wegovy-procedural-steps`, `ec-union-register-wegovy`,
    `ema-pi-wegovy-nl`, `ema-2026-wegovy-tablets`
13. **Wegovy indications (EU, Dutch SmPC 4.1).** Pens: adults with BMI ≥ 30, or 27 to < 30 with at least one
    weight-related comorbidity; adolescents from 12 years with obesity and over 60 kg; 5.1 includes cardiovascular risk
    reduction and obesity-related heart failure. Tablets: adults, same BMI criteria. `ema-pi-wegovy-nl`
14. **Kayshild** (semaglutide for non-cirrhotic MASH with fibrosis F2-F3): CHMP opinion 29 January 2026, conditional
    marketing authorisation 26 March 2026 (C(2026) 2197); under additional monitoring. Dutch SmPC: "geregistreerd in het
    kader van een zogeheten ‘voorwaardelijke toelating’". `ema-epar-kayshild`, `ec-union-register-kayshild`, `ema-pi-kayshild-nl`
15. **Kyinsu** (insulin icodec + semaglutide, type 2 diabetes): authorised 24 November 2025 (C(2025) 8233); the CHMP
    recommended an extension of indication at its 12-15 October 2026 meeting (COMBINE 4; "pending EC decision").
    `ema-epar-kyinsu`, `ec-union-register-kyinsu`, `ema-chmp-2026-10-highlights`, `ema-chmp-2026-10-agenda`
16. **Ozempic** latest Commission decision: yearly update of 12 October 2026 (C(2026) 7309); product information last
    updated 25 August 2026. Dutch 4.1: type 2 diabetes in adults; 5.1 cross-reference includes cardiovascular and renal
    events. Rybelsus: product information last updated 22 April 2026. `ec-union-register-ozempic`, `ema-pi-ozempic-nl`,
    `ema-pi-rybelsus-nl`
17. **Mounjaro in 2026.** Only new indication: type 2 diabetes in children and adolescents from 10 years (CHMP opinion
    11 December 2025, Commission decision 22 January 2026, C(2026) 527). SUMMIT (HFpEF; outcome 29 January 2026) and
    SURPASS-CVOT (outcome 25 June 2026) added data to sections 4.1/4.4/4.8/5.1 without a separate indication. Pending:
    a variation updating SmPC 4.5 and 4.6 on oral-contraceptive exposure (obesity and delayed gastric emptying), "For
    adoption" at the October 2026 CHMP; no outcome published by 27 October 2026. `ema-mounjaro-procedural-steps`,
    `ema-mounjaro-procedural-steps-archive`, `ec-union-register-mounjaro`, `ema-chmp-2026-10-agenda`,
    `ema-2026-mounjaro-hfpef-outcome`, `ema-2026-mounjaro-cvot-outcome`
18. **Additional monitoring (black triangle), EMA list Rev. 147 of 25 September 2026:** Mounjaro (since September 2022,
    new active substance), Kayshild, Kyinsu are on it; Wegovy is struck through (removed). The Mounjaro SmPC (Dutch and
    English) carries the black-triangle sentence. `ema-additional-monitoring-list`, `ema-pi-mounjaro-nl`

### C. EU safety actions (PRAC) that the EU labels carry, and open reviews

19. **NAION (semaglutide).** PRAC, 6 June 2025: NAION is a "very rare" side effect of Ozempic, Rybelsus and Wegovy
    ("may affect up to 1 in 10,000 people"). The Dutch SmPCs of Ozempic, Rybelsus, Wegovy and Kayshild now have a
    section "Niet-arteritische anterieure ischemische opticusneuropathie (NAION)": "Bij plotseling verlies van het
    gezichtsvermogen moet een oftalmologisch onderzoek worden uitgevoerd en moet de behandeling met semaglutide worden
    gestaakt indien NAION wordt bevestigd". For Wegovy the warning came through a worksharing variation (outcome
    25 September 2025, Commission decision 16 February 2026, C(2026) 1195; for Ozempic the same worksharing
    EMA/VR/0000287437 is covered by C(2026) 7309 of 12 October 2026). The Mounjaro and Kyinsu SmPCs have no NAION section.
    `ema-prac-2025-06-naion`, `ema-pi-wegovy-nl`, `ema-pi-ozempic-nl`, `ema-wegovy-procedural-steps`
20. **Aspiration under anaesthesia (all GLP-1 agonists).** PRAC, July 2024: no causal association established, but
    product-information wording on residual gastric content before general anaesthesia or deep sedation. All six Dutch
    SmPCs read (Ozempic, Rybelsus, Wegovy, Kayshild, Kyinsu, Mounjaro) carry "Aspiratie in verband met algemene (algehele)
    anesthesie of diepe sedatie". `ema-prac-2024-07-aspiration`, `ema-pi-mounjaro-nl`, `ema-pi-wegovy-nl`
21. **Gastroparesis (semaglutide; corrected by the fact-check: not Wegovy only).** New warning, sections 4.4 and 4.8:
    patients with gastroparesis may have more severe gastrointestinal effects; "semaglutide wordt niet aanbevolen bij
    ernstige gastroparese". In the Dutch SmPCs of Ozempic, Rybelsus, Wegovy and Kayshild (not Kyinsu). Ozempic and
    Rybelsus: worksharing EMA/VR/0000249026, outcome 23 October 2025; Wegovy: EMA/VR/0000257476, outcome 23 October 2025,
    Commission decision 16 February 2026 (C(2026) 1195). Mounjaro: caution only (not studied in severe gastrointestinal
    disease, including severe gastroparesis). `ema-wegovy-procedural-steps`, `ema-pi-wegovy-nl`, `ema-pi-ozempic-nl`,
    `ema-pi-rybelsus-nl`, `ema-pi-kayshild-nl`, `ec-union-register-ozempic`
22. **PSUR outcome, January 2026 (Ozempic, Rybelsus, Wegovy):** benefit-risk "remains unchanged"; terms of the
    authorisations maintained; the holder must keep monitoring medication errors and literature on Wernicke
    encephalopathy, liver damage, chronic cough and eye problems, and submit a pooled analysis of all cardiovascular
    outcome trials. `ema-prac-2026-01-minutes`
23. **Signals closed or open in 2026.** Closed: tirzepatide and warfarin/acenocoumarol (INR decreased): "current evidence
    is insufficient to establish a causal relationship", no label change (April 2026). Open on 27 October 2026, no
    outcome public: peripheral neuropathies (semaglutide; new signal May 2026, review requested); gastrointestinal
    volvulus (semaglutide; new signal May 2026); semaglutide and cardioembolic stroke (post-authorisation measure, "For
    adoption" at the PRAC meeting of 26-29 October 2026, in progress today); lithium with GLP-1 agonists, raised lithium
    levels (class signal, EPITT 20275, new in June 2026, "For adoption" the same week). `ema-prac-2026-04-minutes`,
    `ema-prac-2026-05-minutes`, `ema-prac-2026-10-agenda`
    *Fact-check corrections:* the lithium signal is EPITT 20275 (not 20280, which is cefpodoxime). **Volvulus is no longer
    open:** at the PRAC of 28 September-1 October 2026 the recommendation was "Reassess in the next PSUR (submission by
    29 August 2027)", no product-information change (published 26 October 2026). **New signal:** semaglutide and ischaemic
    colitis (EPITT 20309, Ozempic, Kayshild, Rybelsus, Wegovy), supplementary information requested by 1 December 2026.
    Peripheral neuropathies: still open (information was due 22 July 2026; no outcome found). `ema-prac-signals-2026-09-28`
24. **Suicidal thoughts.** PRAC, April 2024: evidence "does not support a causal association"; no label change (no
    new action found in 2025-2026 documents read). `ema-prac-2024-04-suicidal-thoughts`
25. **"Misuse".** No PRAC action specific to misuse or off-label weight-loss use was found in the 2026 minutes and
    agendas read; the January 2026 PSUR outcome asks for monitoring of medication errors (fact 22). The CBG's position
    remains that these medicines should be used only as authorised, and says buying prescription medicines online
    without a prescription "mag volgens de wet niet". `ema-prac-2026-01-minutes`, `cbg-glp1-position`, `cbg-afslankmedicijnen`
    *Fact-check addition:* EMA and the Heads of Medicines Agencies warned on 3 September 2025 of "a sharp rise in the
    number of illegal medicines marketed as GLP-1 receptor agonists such as semaglutide, liraglutide and tirzepatide",
    sold via fraudulent websites and social media, and pointed buyers to the EU common logo. A public warning, not a PRAC
    label action. `ema-hma-2025-09-illegal-glp1`

### D. Shortages (Ozempic, Wegovy, Mounjaro)

26. **EMA shortages catalogue (27 October 2026):** Ozempic "Shortage resolved" (first published 19 October 2022, last
    updated 13 January 2026: "the information and recommendations which were issued during the shortage no longer
    apply"); Rybelsus resolved; no entry for Wegovy, Mounjaro, Kayshild or Kyinsu. `ema-shortages-json`, `ema-shortage-ozempic`
27. **Netherlands.** The CBG's Ozempic page gives as its last shortage update 2 December 2024: "De startdosering van
    Ozempic is per 2 december 2024 weer beschikbaar in Nederland. Het tekort is daarmee opgelost." (Fact-check: the page
    itself was last modified on 20 January 2025, with an update on the PRAC's NAION review.) No CBG page on a Wegovy or Mounjaro
    shortage was found, and the CBG/IGJ report on shortages in 2025 (19 March 2026) does not mention GLP-1 medicines.
    KNMP Farmanco's public shortage list (271 entries on 27 October 2026) has no semaglutide or tirzepatide entry.
    `cbg-ozempic-shortage`, `cbg-meldpunt-tekorten-2025`, `knmp-farmanco-tekorten-2026-10-27`

### E. EU medicines law

28. **The EU pharmaceutical package is not law on 27 October 2026.** Two acts: a new **Directive "on the Union code
    relating to medicinal products for human use, and repealing Directives 2001/83/EC and 2009/35/EC"** (2023/0132(COD))
    and a new **Regulation** "laying down Union procedures for the authorisation and supervision of medicinal products for
    human use and establishing rules governing the European Medicines Agency, ... repealing Regulations (EC) No 141/2000,
    (EC) No 726/2004 and (EC) No 1901/2006" (2023/0131(COD)). Steps: Commission proposals 26 April 2023 (COM(2023)192
    and 193); Parliament first reading 10 April 2024; political agreement 11 December 2025; Coreper letter 19 March 2026
    and committee approval 18 March 2026; Coreper approval of the Council position 23 September 2026; **Council position at
    first reading adopted 28 September 2026** (4196th Council meeting; fact-check: qualified majority, 26 member states
    for, none against, Malta abstaining, for both acts; the Netherlands and Belgium voted for), published 1 October 2026
    (7105/2/26 REV 2, 7106/2/26 REV 2); referral to Parliament's committee for the second reading announced 8 October
    2026; committee draft report (OEIL's label; PE796.189) 12 October 2026. Status: "Awaiting Parliament 2nd reading". Forecast: plenary 23 November 2026
    (OEIL labels it "Indicative plenary sitting date"). Not published in the Official Journal. `ep-oeil-2023-0132-cod`,
    `ep-oeil-2023-0131-cod`, `council-st-7105-2026-rev2`, `council-st-7106-2026-rev2`, `council-st-13737-2026-vote`,
    `council-st-13739-2026-vote`, `ema-pharma-reform-page`
29. **What happens next (law, not prediction).** If Parliament approves the Council's position (or takes no decision)
    within three months of the communication, the act "shall be deemed to have been adopted in the wording which
    corresponds to the position of the Council" (TFEU art. 294(7)(a); the period can be extended by one month,
    art. 294(14)). Both acts enter into force on the twentieth day after publication in the Official Journal. The
    Regulation applies 24 months after entry into force (some articles earlier); the Directive must be transposed and
    applied 24 months after entry into force, and Directive 2001/83/EC is repealed with effect from that date.
    `eu-tfeu-art-294`, `council-st-7105-2026-rev2` (art. 187), `council-st-7106-2026-rev2` (art. 220, 222, 223)
30. **EMA's own timeline is older than the Council text.** The EMA page (updated 28 September 2026, introduction only)
    still says the acts "are expected to enter into force in 2026" with a transition "until 2028" and "2028 New
    pharmaceutical legislation becomes applicable". The Council text ties application to 24 months after entry into
    force, so the date depends on publication (section 4, conflict 1). `ema-pharma-reform-page`, `council-st-7106-2026-rev2`
31. **What the agreed text keeps and changes for this site (Council position; not yet law).** Same two-limb definition
    of a medicinal product (new Directive art. 5(1)(1), old art. 1(2)); medicines law prevails over other Union acts in
    conflict (art. 1(4)); a medicine needs a national or a centralised authorisation (art. 6(1)); the named-patient
    ("special needs") exemption stays (art. 4(1), old art. 5(1)), with a new duty to encourage safety reporting, and new
    temporary national exemptions for shortages (art. 4(2)); magistral and officinal formulas stay outside the Directive
    but may not include biotechnology or advanced-therapy products (art. 1(5)), and magistral formulas may be prepared in
    advance for up to 7 days or 3 weeks (art. 2(2)); member states must still prohibit "any advertising of a medicinal
    product in respect of which a marketing authorisation has not been granted" (art. 179(1)) and public advertising of
    prescription medicines (art. 180(1)); distance selling and the common logo continue (art. 175-177), including that
    the medicines "comply with the national legislation of the Member State of destination"; eight years of data
    protection plus one year of market protection (art. 83). In the new Regulation: compassionate use may cover "a single
    patient or group of patients" (art. 27(2), old art. 83 covered "a group of patients"); the EU route becomes mandatory
    for every medicine with a new active substance (Annex I, point 3). `council-st-7106-2026-rev2`, `council-st-7105-2026-rev2`,
    `eu-regulation-726-2004`
32. **Current law until the new acts apply:** Directive 2001/83/EC (latest consolidation 1 January 2025; no 2026
    consolidation exists) and Regulation 726/2004. Art. 6(1): "No medicinal product may be placed on the market of a
    Member State unless a marketing authorisation has been issued by the competent authorities of that Member State ...
    or an authorisation has been granted in accordance with Regulation (EC) No 726/2004"; art. 87(1): member states
    "shall prohibit any advertising of a medicinal product in respect of which a marketing authorization has not been
    granted". `eu-directive-2001-83`, `eu-regulation-726-2004`
33. **Critical Medicines Act** (2025/0102(COD), a regulation): Commission proposal 11 March 2025; Parliament's
    first-reading amendments and referral back for negotiations 20 January 2026; provisional agreement in the night of
    11 to 12 May 2026; committee approval of the agreed text 14 July 2026; status "Awaiting Parliament's position in 1st
    reading"; indicative plenary 23 November 2026. Not adopted. It concerns supply security of critical medicines
    (procurement, strategic projects, stocks), not the authorisation of any compound here. `ep-oeil-2025-0102-cod`,
    `ec-2026-ip-26-1017-cma`
34. **HTA Regulation (EU) 2021/2282:** applies from 12 January 2025. Joint clinical assessments from 12 January 2025 for
    new active substances for cancer and for advanced-therapy medicines; from **13 January 2028** for orphan medicines;
    from **13 January 2030** for all other medicines in scope. `eu-regulation-2021-2282-hta`
35. **Falsified-medicines rules.** Directive 2011/62/EU applies from 2 January 2013; the common EU logo for online sale
    (design in Implementing Regulation 699/2014, in force from the seventh day after publication on 25 June 2014;
    fact-check correction: art. 5 says "It shall apply as from 1 July 2015"); safety features (unique identifier and anti-tampering
    device on prescription medicines) apply from 9 February 2019, and in Belgium, Greece and Italy "at the latest from
    9 February 2025" (Delegated Regulation 2016/161, art. 50). In the EU each pack's serial number is checked in an
    EU-wide system: the falsified Ozempic pens found at wholesalers in 2023 showed "inactive" serial numbers when scanned
    (EMA, 18 October 2023). `eu-directive-2011-62`, `eu-regulation-699-2014`, `eu-regulation-2016-161`,
    `ema-2023-falsified-ozempic`
36. **Clinical Trials Regulation (EU) 536/2014 and CTIS.** In application since 31 January 2022 (repealed Directive
    2001/20/EC); new applications only through CTIS from 31 January 2023; trials approved under the old Directive had
    to move to the Regulation and CTIS by 31 January 2025; CTIS has a public portal. Pending change: the **European
    Biotech Act** proposal (COM(2025)1022, 16 December 2025, 2025/0406(COD)) would amend Regulation 536/2014; status
    "Awaiting committee decision", indicative plenary 14 December 2026. The pharmaceutical package also amends Regulation
    536/2014 (title of the Regulation). `ema-clinical-trials-regulation`, `eu-regulation-536-2014`, `ep-oeil-2025-0406-cod`,
    `council-st-7105-2026-rev2`
37. **Belgium (notes page only):** central EU authorisations are valid in Belgium as in every member state
    (Regulation 726/2004 art. 13(1)), so semaglutide's and tirzepatide's EU products are authorised there too; the
    Belgian national register was not searched here. `eu-regulation-726-2004`

---

## 2. What changed since 23 October 2026

Compared with the saved pages (`research/for-nl-site/snapshot-2026-10-23/content/pages-en/legal/{eu,whats-changing}.mdx`
and the saved compound notes), `research/for-nl-site/MANIFEST-data.md`, the earlier research (`research/legal-a.md`,
`semaglutide.md`, `tirzepatide.md`, `tesamorelin.md`, `retatrutide.md`, `stubs-a.md`, `stubs-b.md`) and the EU/NL rows
now in `src/data/compounds/*.yaml` (as_of 2026-10-20 to 2026-10-23).

**New since 23 October (dated after it):**

- Wegovy product information updated on 26 October 2026 (EPAR page; the Dutch SmPC read today has "laatste verlenging:
  21 september 2026"). EMA's medicines JSON shows Wegovy last updated 26/10/2026.
- PRAC meeting of 26-29 October 2026 in progress, with two GLP-1 items "For adoption" (semaglutide and cardioembolic
  stroke; lithium interaction). Outcome not yet public.
- (Added by the fact-check) PRAC signal recommendations of the 28 September-1 October 2026 meeting, published
  26 October 2026: semaglutide and volvulus concluded ("Reassess in the next PSUR", no label change); new signal of
  semaglutide and ischaemic colitis (`ema-prac-signals-2026-09-28`).
- EMA data downloads re-dated 27 October 2026 (same record counts as on 20-23 October: 2,754 medicines, 3,310 orphan
  designations).

**Facts that were already true on 23 October but are missing or wrong in the saved material or data:**

1. **Semaglutide products incomplete.** The data file lists four EU products (Ozempic, Rybelsus, Wegovy injection,
   Wegovy tablets) and its brands are [Ozempic, Wegovy, Rybelsus]. Missing: **Kayshild** (EU, 26 March 2026, MASH,
   conditional) and, at the editor's choice, **Kyinsu** (EU, 24 November 2025, with insulin icodec). The saved EU note
   ("Ozempic 8 Feb 2018, Rybelsus 3 Apr 2020, Wegovy injection 6 Jan 2022, Wegovy tablets 14 Jul 2026") is therefore
   incomplete. `research/semaglutide.md` said of Kayshild "I could not identify the product": it is identified now
   (`ema-epar-kayshild` was registered by the refocus on 24 October).
2. **Council position date.** The saved pages say "1 October 2026. The Council publishes its formal position" and "The
   Council published its position on 1 October 2026". Correct, but the Council **adopted** it on 28 September 2026
   (Coreper 23 September); 1 October is the publication. Write both, or "adopted on 28 September".
3. **"We have not yet read a final, published text."** The agreed texts are now public as the Council's first-reading
   positions (7105/2/26 REV 2, 7106/2/26 REV 2). They are still not law and not in the Official Journal; the Dutch
   page may describe them as the agreed text that Parliament will vote on (fact 31), with that caveat.
4. **"The EMA expects ... time until 2028."** Still what EMA's page says, but the Council text makes application
   **24 months after entry into force**; with no plenary vote before 23 November 2026 and no publication yet, "2028" is
   an expectation, not a date (section 4, conflict 1).
5. **SS-31.** The saved EU note "EU orphan designations only (2021, 2022)" is incomplete: two EU phase 3 trials
   (ReNEW; 4TAZPower, approved for the Netherlands on 27 July 2026). Proposed row change not-authorised ->
   investigational (status file; editor's decision).
6. **Retatrutide.** The saved EU note began "Not authorised;" while the row is investigational; the Dutch arm of
   SYNERGY-Outcomes (CTIS 2025-522674-36-00) has been authorised since 4 February 2026 and recruiting since
   22 September 2026, which no saved note or source records (NCT07165028 on ct.gov is in the data, but not the CTIS
   record).
7. **Wegovy:** five-year renewal 21 September 2026 and removal from the additional-monitoring list (September 2026),
   gastroparesis warning (Commission decision 16 February 2026): not in the saved notes.
8. **Ozempic shortage.** Saved: "Ozempic shortage resolved 2 Dec 2024" (CBG). Still true for the Netherlands; add that
   EMA's catalogue lists the EU shortage as resolved (last updated 13 January 2026), and that no Wegovy or Mounjaro
   shortage is listed by EMA or Farmanco (27 October 2026).
9. **Mounjaro:** the pending oral-contraceptive SmPC variation (October 2026 CHMP agenda) and the closed warfarin signal
   are new to the Dutch material; the saved EU note on tirzepatide (15 Sep 2022; weight management 11 Dec 2023;
   children 22 Jan 2026) is still correct.
10. **NL rows' sources.** The semaglutide and tirzepatide NL rows cite reimbursement (FK, ZIN) and shortage pages as the
    source of the authorisation; better: the EPAR + Regulation 726/2004 art. 13(1) + the CBG register search (status files).
11. **as_of** of every EU and NL row: 2026-10-20/22/23 -> 2026-10-27. No status changes except the SS-31 proposal.

**Saved facts re-checked and still correct:** tesamorelin EU "Application withdrawn on 21 June 2012" (withdrawn, not
refused); thymosin alpha-1 EU not-authorised with Italy national (MANIFEST-data); PT-141 no EU entry; semaglutide and
tirzepatide EU dates; falsified-medicines dates (2 January 2013; logo; 9 February 2019; Belgium, Greece, Italy by
9 February 2025); CTR dates (31 January 2022, 2023, 2025); reform steps (26 April 2023, 11 December 2025, 18 March 2026,
1 October 2026, 23 November 2026 indicative); EU contact card (`src/data/jurisdictions.yaml`: EMA; Directive 2001/83/EC
consolidated 1 January 2025, still the latest consolidation).

**Saved facts NOT re-checked here (outside this topic; do not reuse without their own check):** the GHK-Cu cosmetics
clause; the NMN/NR novel-food clauses; "no European Pharmacopoeia monograph" (AOD-9604, KPV); reimbursement clauses in
the semaglutide and tirzepatide NL notes; the artsenverklaring route clauses (PT-141, tesamorelin); Belgian clauses.

---

## 3. Verification log

All read on 27 October 2026. "curl" = fetched with curl, HTTP status shown; "browser" = built-in browser, own tab.

| Source id / URL | Result | Wording or data relied on |
|---|---|---|
| `ema-medicines-json` (medicines-output-medicines_json-report_en.json) | curl 200, 6.8 MB | meta total_records 2754, timestamp 2026-10-27T06:02:09Z; records for Ozempic, Rybelsus, Wegovy, Kayshild, Kyinsu, Mounjaro, Egrifta, Foundayo, Scenesse as quoted in facts 2-4, 10, 11; 0 hits for the other compounds' names |
| `ema-orphan-designations-json` | curl 200, 2.1 MB | 3,310 records, 2026-10-27T06:05:14Z; EU/3/21/2430, EU/3/22/2614, EU/3/02/110, EU/3/23/2786 |
| `ema-under-evaluation-2026-10` (…under-evaluation-october-2026_en.xlsx) | curl 200; November list 404 | "Data extracted 5 October 2026"; EMA/222468/2026; semaglutide rows 006847, 006902, 006910 (generic: Y); orforglipron 006632 |
| EMA page "Medicines for human use under evaluation" | curl 200 | 2026 monthly lists January to October; October latest |
| `ema-epar-ozempic`, `-rybelsus`, `-wegovy`, `-mounjaro`, `-kayshild`, `ema-epar-kyinsu` (EPAR pages) | curl 200 each | holder, opinion and MA dates, revision numbers (22, 17, 20, 22), product-information dates (25/08/2026, 22/04/2026, 26/10/2026, 21/09/2026, 09/04/2026, 12/02/2026); Wegovy "available as pre-filled pens ... and as tablets ... the tablets are only intended for adults"; Kayshild/Kyinsu additional monitoring; Kayshild conditional |
| `ema-egrifta-withdrawal` (EPAR/egrifta) | curl 200 | "On 21 June 2012, Ferrer Internacional, S.A. officially notified the ... CHMP that it wishes to withdraw its application" |
| `ema-epar-foundayo-opinion` (EPAR/foundayo) | curl 200 | status Opinion, positive, 15/10/2026 |
| `ema-pi-*-nl` (six Dutch product-information PDFs) and the English PDFs | curl 200 each; pdftotext -enc UTF-8 | 4.1 texts, NAION, aspiratie, gastroparese, section 9 dates, "Aan medisch voorschrift onderworpen geneesmiddel", Mounjaro "onderworpen aan aanvullende monitoring", Kayshild "voorwaardelijke toelating" |
| `ema-wegovy-procedural-steps` | curl 200 (PDF) | EMA/R/0000336288 outcome 23/07/2026, CD 21/09/2026; EMA/X/0000296344 and 0000304416 21/05/2026, CD 14/07/2026; EMA/VR/0000257476 gastroparesis (23/10/2025, CD 16/02/2026); NAION worksharing (25/09/2025, CD 16/02/2026) |
| `ema-mounjaro-procedural-steps`, `-archive` | curl 200 (PDF) | EMA/VR/0000281937 children ≥10 (CD 22/01/2026); EMA/VR/0000310637 SURPASS-CVOT 25/06/2026; II/0038 SUMMIT 29/01/2026; X/0015 KwikPen (CD 19/04/2024); II/0007 weight management (CD 11/12/2023) |
| Rybelsus procedural steps (current and archive) | curl 200 | used for context only (2024 new strengths; T1D restriction removed; dysaesthesia added 27/11/2025); not registered |
| `ec-union-register-ozempic` … `-kyinsu` (h1251, h1430, h1608, h1685, h2019, h1992) | curl 200 each | status ACTIVE; decisions C(2026) 7309 (12/10/2026), C(2026) 6826 (21/09/2026), C(2026) 5102 (14/07/2026), C(2026) 527 (22/01/2026), C(2026) 2197 (26/03/2026), C(2025) 8233 (24/11/2025) |
| `ema-chmp-2026-10-highlights` | curl 200 | "Six new medicines recommended for approval; another five ... extension"; Foundayo; Kyinsu "pending EC decision" |
| `ema-chmp-2026-10-agenda` (agenda-chmp-meeting-12-15-october-2026_en.pdf) | curl 200 (two other URL spellings 404) | items quoted in fact 11, 15, 17 |
| CHMP highlights 14-17 September 2026 | curl 200 | no semaglutide or tirzepatide item (not registered) |
| `ema-prac-2026-01-minutes`, `-04-`, `-05-`; PRAC minutes March, July, Aug-Sep 2026; agenda June 2026 | curl 200 each | quotes in facts 22-23; March and Aug-Sep minutes: no GLP-1 item; July: Kyinsu and Wegovy variations only |
| `ema-prac-2026-10-agenda` | curl 200 | items 6.4.2-6.4.4 and lithium item 4.2.2 (EPITT 20275; fact-check correction of "20280") "For adoption" |
| PRAC highlights June, July, Aug-Sep, 28 Sep-1 Oct 2026 | curl 200 | no semaglutide, tirzepatide or GLP-1 mention (not registered) |
| `ema-prac-2025-06-naion`, `ema-prac-2024-07-aspiration`, `ema-prac-2024-04-suicidal-thoughts`, `ema-2023-falsified-ozempic` | curl 200 each | "very rare side effect ... up to 1 in 10,000"; "new measures to minimise the risk of aspiration"; falsified pens "serial numbers were shown to be inactive" |
| `ema-shortages-json` (shortages-output-json-report_en.json) | curl 200 | 85 records, 2026-10-27T18:32:12Z; entries quoted in fact 26 |
| `ema-shortage-ozempic` | curl 200 | "The shortage affecting Ozempic has been resolved"; last updated 13/01/2026 |
| `ema-additional-monitoring-list` (xlsx) and its page | curl 200 | Rev. 147, 25 September 2026; strikethrough on Wegovy read from cell formatting |
| `ema-pharma-reform-page` | curl 200 | "expected to enter into force in 2026"; "until 2028 ... transition period"; update history 28 September 2026 |
| `ema-clinical-trials-regulation` | curl 200 | "entered into application on 31 January 2022"; CTIS from 31 January 2023; transition 31 January 2025 |
| `ema-orphan-elamipretide-eu-3-21-2430`, `ema-orphan-thymalfasin-eu-3-02-110` | curl 200 | sponsor transfer to Atnahs Pharma Netherlands B.V.; "authorised in Italy" sentence |
| `ep-oeil-2023-0132-cod`, `ep-oeil-2023-0131-cod` | curl 200 | "Awaiting Parliament 2nd reading"; key events and forecast as in fact 28 |
| `ep-oeil-2025-0102-cod` | curl 200 | "Awaiting Parliament's position in 1st reading"; 14/07/2026; forecast 23/11/2026 |
| `ep-oeil-2025-0406-cod` | curl 200 | "Awaiting committee decision"; COM(2025)1022 16/12/2025; forecast 14/12/2026 |
| `council-st-7105-2026-rev2`, `council-st-7106-2026-rev2` | curl 200 (PDF, 1.9 and 2.3 MB) | "Adopted by the Council on 28 September 2026"; articles quoted in facts 29 and 31 |
| `council-st-13737-2026-vote`, `council-st-13739-2026-vote` | curl 200 (PDF) | meeting, date, Coreper 23.09.2026; vote table not machine-readable |
| Council press release 28 September 2026 (consilium.europa.eu/en/press/press-releases/2026/09/28/…) | curl 403 (Cloudflare bot check); WebFetch 403 | not read, not registered |
| `ec-2026-ip-26-1017-cma` | curl 200 (PDF) | "welcomes the landmark political agreement ... last night"; "subject to formal approval" |
| `eu-regulation-2021-2282-hta` | CELLAR 32021R2282 200 (EUR-Lex 202 empty) | art. 36 and 7(2) dates |
| `eu-tfeu-art-294` | CELLAR 12016E294 200 | art. 294(7)(a) and (14) |
| `eu-regulation-726-2004` | CELLAR 02004R0726-20220128 200 | art. 13(1) "valid throughout the Union"; art. 83 "to a group of patients" |
| `eu-directive-2001-83` | CELLAR 02001L0083-20250101 200; 02001L0083-20260101 404 | art. 6(1), 87(1) as quoted in fact 32 |
| `eu-directive-2011-62`, `eu-regulation-699-2014`, `eu-regulation-2016-161` | CELLAR 32011L0062, 32014R0699, 32016R0161 200 | art. 2 (2 January 2013); art. 1 and entry into force; art. 50 (9 February 2019, 9 February 2025) |
| `cbg-geneesmiddeleninformatiebank` (home) | curl 200 | — |
| `cbg-gib-search-*` (Geneesmiddeleninformatiebank quick searches, 32 terms) | curl 200 each | result lists; "Geen producten gevonden die voldoen aan uw zoekopdracht" for the terms in the source note; the three registered URLs re-opened and re-checked |
| `cbg-afslankmedicijnen` | curl 200 | quotes in the source note |
| `cbg-ozempic-shortage` | curl 200 | update of 2 December 2024 (quoted, fact 27) |
| `cbg-glp1-position`, `cbg-compassionate-use-list` | curl 200 | CUP list sort date 10 July 2026; no retatrutide, LY3437943, tirzepatide, semaglutide, elamipretide, tesamorelin, bremelanotide or thymalfasin |
| `cbg-meldpunt-tekorten-2025` (PDF) | curl 200 | no GLP-1 mention |
| `knmp-farmanco-tekorten-2026-10-27` | curl 200 (list empty without script); browser (own tab) | 271 dated rows; liraglutide 4 mentions, semaglutide 0, tirzepatide 0 |
| CTIS public API search (POST euclinicaltrials.eu/ctis-public-api/search) and retrieve | 200 | 9 retatrutide trials; 2 elamipretide; 1 thymosin alpha 1; 0 for the other terms; 2023-508630-34-00 returns an empty record |
| `ctis-2025-522674-36-00`, `ctis-2024-511450-49-00` (portal pages) | browser | per-country status tables quoted in the source notes; status codes 2/3/4/5/8 mapped from these pages |
| `ctis-2025-523837-25-00`, `ctis-2024-511482-11-00`, `ctis-2024-518102-41-00` | API 200 | member-state status codes and first decision dates |
| `ctgov-nct06383390`, `ctgov-nct07165028`, `ctgov-nct06662383` (ClinicalTrials.gov API v2) | 200 | statuses, secondary ids (EU CT numbers), Dutch site counts |
| AIFA medicines API (api.aifa.gov.it …/formadosaggio/ricerca?query=zadaxin) | 200 | ZADAXIN, AIC 028364026, AUTORIZZATA, 1996-05-15T22:00Z, flagCommercio 1 (not registered: host not allowlisted) |
| www.aanbiedersmedicijnen.nl | curl 200 | Ministry of VWS/CIBG register of online sellers ("Aanbiederslijst online medicijnen") — not registered (section 6) |

---

## 4. Conflicts and how resolved

1. **When the reform applies.** EMA's page: entry into force "expected" in 2026, applicable 2028. Council text:
   application 24 months after entry into force, which depends on Parliament's vote (indicative 23 November 2026) and
   publication. *Resolved:* write "24 months after the new law enters into force; it was not yet in force on
   27 October 2026"; attribute "2028" to the EMA as an expectation if it is used at all.
2. **Council "position published 1 October" vs "adopted 28 September".** OEIL records publication on 1 October; the
   Council documents say adopted 28 September. *Resolved:* both true; use 28 September for adoption.
3. **OEIL's forecast label** "Indicative plenary sitting date, 1st reading" for a second-reading file. *Resolved:* quote
   the date as indicative and do not call it a first reading.
4. **Mounjaro additional monitoring.** EMA medicines JSON field "additional_monitoring: No"; EMA's list (Rev. 147) and the
   EU product information (Dutch and English) say it is under additional monitoring. *Resolved:* follow the list and
   the label.
5. **Commission decision dates in EMA JSON vs Union Register.** Ozempic: JSON "european_commission_decision_date
   11/06/2026"; Union Register shows a later decision C(2026) 7309 of 12 October 2026 (yearly update). *Resolved:* the
   Union Register is the Commission's own record; the JSON field lags.
6. **Tesamorelin: withdrawn or refused?** The CHMP's provisional view was negative, but no opinion was adopted and EMA's
   status is "Application withdrawn". *Resolved:* `withdrawn` (vocabulary: "authorisation or application withdrawn").
7. **SS-31 row word.** Data: EU/NL not-authorised; UK/CA rows of the same file: investigational for open trials.
   *Not resolved here:* proposed investigational; editor decides (status file).
8. **Retatrutide note vs row.** Saved note "Not authorised" vs row investigational. *Resolved:* note starts
   "Investigational: not authorised and ...".
9. **Commission press release on the CMA calls the pharma reform "recently adopted".** It was agreed, not adopted
   (Council documents, OEIL). *Resolved:* do not repeat "adopted".
10. **Two source ids for one document** (`ema-under-evaluation-2026-10` and `ema-2026-10-under-evaluation`, same URL,
    accessed 22 and 20 October). *Resolved for this research:* cite `ema-under-evaluation-2026-10`; the merge should
    keep one (section 7).

---

## 5. UNRESOLVED (write as unknown, or leave out)

1. ~~The Council vote count on 28 September 2026~~ **Resolved by the fact-check:** the annex images of 13737/26 and
   13739/26 were extracted and read: 26 for, 0 against, 1 abstention (Malta), qualified majority, for both acts.
2. Whether and when Parliament approves the package (23 November 2026 is indicative), the Official Journal date, and so
   the dates of entry into force and application. Also whether the TFEU three-month period runs from 8 October 2026
   (the announcement OEIL records); this research did not establish the start date, so no deadline is given.
3. TRIUMPH-Outcomes (NCT06383390) in CTIS: the EU CT number 2023-508630-34-00 shows no public information, so its EU
   and Dutch authorisation status under the Regulation is unknown (ClinicalTrials.gov lists 28 Dutch site entries).
4. Whether Kayshild, Kyinsu, the Wegovy tablets and the 7.2 mg Wegovy pen are actually on the Dutch market: the CBG
   register shows authorisation, not availability (G-Standaard not checked).
5. Outcomes of the open PRAC items (cardioembolic stroke, lithium interaction, peripheral neuropathies and, new since
   1 October 2026, ischaemic colitis; volvulus was concluded, see the fact-check) and of
   the Mounjaro oral-contraceptive variation; the Commission decision on Kyinsu's new indication; the CHMP outcome on
   the generic semaglutide applications.
6. Any current CBG statement on GLP-1 shortages in 2025-2026: none was found (only the 2023 page with its update of
   2 December 2024). Farmanco's logged-in view (for pharmacists) was not seen.
7. National authorisations in EU member states other than the Netherlands (and Italy for thymalfasin) were not
   searched. Write "no EU-wide authorisation" and "not authorised in the Netherlands", never "not authorised in any EU
   country".
8. NMN novel-food status after 10 August 2026; GHK-Cu cosmetics status; European Pharmacopoeia monographs: not
   re-checked here (other topics).
9. Content of the Critical Medicines Act and the Biotech Act texts (only the procedure files were read); the
   Commission communications on the Council position (COM(2026)526 and 527) were not read.
10. Whether the Italian Zadaxin authorisation is current can be cited only through the EMA orphan page (a 2003 text)
    and the FDA's 2024 briefing, unless aifa.gov.it is allowlisted.

---

## 6. Open questions for the legal or medical reviewer

**Legal**

1. Should `legal/eu` describe the agreed reform articles (Council position, new numbering) before publication in the
   Official Journal, or describe only the direction ("the same licence rule and advertising ban; wider compassionate
   use; a central route for every new active substance") and cite the Council documents as "the agreed text, not yet
   law"?
2. New Directive art. 1(5): magistral formulas "shall not include" biotechnology products or advanced therapies. Does
   this matter for Dutch pharmacy preparations of peptides (most peptides on this site are synthetic)? This research
   does not draw a conclusion.
3. The common logo links to the national register of online sellers (in the Netherlands www.aanbiedersmedicijnen.nl,
   Ministry of VWS/CIBG). Linking that list may be "help finding a seller" under content guide §1; recommendation: name
   the logo check and the register in text, without a link, unless the reviewer allows it.
4. TFEU art. 294(7): from which date does Parliament's three-month period run here, and may the page give a deadline?
5. SS-31 and retatrutide: is "investigational" (only within registered trials) the right legal description for the
   Netherlands, given the named-patient route (artsenverklaring) also exists in law?

**Medical**

6. SS-31 EU/NL rows: investigational (open phase 3 trials, one approved for the Netherlands) or not-authorised?
7. Should the semaglutide page list Kyinsu (a fixed combination with insulin icodec) as a semaglutide product?
8. NAION: the PRAC frequency "very rare (up to 1 in 10,000)" and the SmPC's "about two-fold relative risk, about 1
   extra case per 10,000 patient-years" (type 2 diabetes) should be presented together; is that the reviewer's choice?
9. Should the Mounjaro page mention the black triangle (additional monitoring), and the Wegovy page that it was removed?
10. Should open PRAC signals (neuropathy, volvulus, cardioembolic stroke, lithium) be mentioned before PRAC concludes?
    Recommendation: not on compound pages; at most a dated "under review" line on `legal/whats-changing`.

---

## 7. Suggested data changes

**Compound data files** (details and exact rows in `research/nl/status/<slug>.yaml`)

- All EU and NL rows: `as_of: 2026-10-27`; add the searches of today (`cbg-gib-search-status-2026-10-27` on NL rows,
  `ema-orphan-designations-json` and `ema-under-evaluation-2026-10` on EU rows where missing).
- `semaglutide.yaml`: add product `kayshild` (EU, 2026-03-26, subcutaneous, EPAR, `ema-epar-kayshild`) and add Kayshild to
  `names.brands`; optionally `kyinsu` (EU, 2025-11-24, `ema-epar-kyinsu`). NL row sources -> `ema-epar-ozempic`,
  `eu-regulation-726-2004`, `cbg-gib-search-semaglutide-2026-10-27`, `cbg-afslankmedicijnen`. Each added product needs a
  Dutch `indications` line (status file gives the SmPC wording).
- `tirzepatide.yaml`: product unchanged; NL row sources as for semaglutide (with `cbg-gib-search-tirzepatide-2026-10-27`);
  EU row add `ec-union-register-mounjaro`.
- `ss-31.yaml`: EU and NL `status: investigational` (proposal; needs euclinicaltrials.eu on the allowlist for its sources).
- `retatrutide.yaml`: add `ctis-2025-522674-36-00` to NL and EU rows (with the allowlist entry); EU row: replace
  `ema-2026-10-under-evaluation` by `ema-under-evaluation-2026-10` if the merge keeps that id.
- `tesamorelin.yaml`, `thymosin-alpha-1.yaml`, `pt-141.yaml`: rows confirmed; no change except as_of.
- Regulatory notes (NL, EU): the status files give one English line each; writers translate. Notes with a bracketed
  clause need that clause from another research file or a re-check.

**Sources**

- Merge `research/nl/sources/eu-status.yaml` into `src/data/sources/nl-research-eu-status.yaml` (or the group file the
  merge uses). Reused ids are listed in its header; when the merge updates `accessed` for `ema-medicines-json`,
  `ema-orphan-designations-json` and the EPAR ids, use 2026-10-27 and today's record counts.
- Duplicate: `ema-under-evaluation-2026-10` (pt-141.yaml) and `ema-2026-10-under-evaluation` (retatrutide.yaml) are the
  same xlsx. Keep one (suggest `ema-under-evaluation-2026-10`, whose note is the fuller one) and point the other's uses to it.
- `eu-regulation-726-2004`: its note does not mention art. 13(1); add "Art. 13(1): a central authorisation 'shall be
  valid throughout the Union' and confers the same rights and obligations in each member state" (read 27 October 2026).

**`config/link-allowlist.json`**

- `euclinicaltrials.eu` — "EU Clinical Trials Information System (CTIS) public portal, run by the EMA under Regulation
  (EU) 536/2014: the official EU register of trial authorisations". (The `.europa.eu` suffix comment names CTIS, but the
  portal is on euclinicaltrials.eu, which the suffix does not cover.)
- `farmanco.knmp.nl` — "KNMP Farmanco: the Dutch pharmacists' association's public list of medicine shortages
  (non-commercial professional body)". Optional; without it, drop `knmp-farmanco-tekorten-2026-10-27` and say only that
  EMA's catalogue lists no Wegovy or Mounjaro shortage.
- Optional: `www.aifa.gov.it` (and `api.aifa.gov.it`) — "Agenzia Italiana del Farmaco, Italy's medicines regulator:
  national authorisations (Zadaxin)".
- Not recommended without the legal reviewer (question 3): `www.aanbiedersmedicijnen.nl`.

**`src/data/jurisdictions.yaml`**

- EU card: keep as is (EMA; Directive 2001/83/EC, consolidated 1 January 2025: still the latest consolidation and still
  the law on 27 October 2026). When the new Directive is published, change `medicines_law` to it (and note the
  application date).
- NL and BE cards: nothing from this topic.

**Tracker (`src/data/tracker.yaml`, EU)**

- `eu-pharma-reform`: keep `status: rulemaking`, `updated: 2026-10-12`, `next_milestone: 2026-11-23`; add sources
  `council-st-7105-2026-rev2`, `council-st-7106-2026-rev2`. Dutch text: "De Raad stelde zijn standpunt vast op
  28 september 2026 (gepubliceerd op 1 oktober); het Europees Parlement moet het nog goedkeuren (indicatieve datum
  23 november 2026). Daarna gelden de nieuwe regels 24 maanden na de inwerkingtreding."
- Optional new items (only if the editor wants them on a peptide tracker): `eu-critical-medicines-act` (rulemaking;
  updated 2026-07-14; next 2026-11-23; `ep-oeil-2025-0102-cod`, `ec-2026-ip-26-1017-cma`); `eu-biotech-act-clinical-trials`
  (proposed; updated 2026-05-18; next 2026-12-14; `ep-oeil-2025-0406-cod`); `eu-glp1-safety-reviews` (watching; open
  PRAC items; `ema-prac-2026-10-agenda`, `ema-prac-2026-05-minutes`).

**Timeline (`src/data/timeline.yaml`, EU events; text in `src/i18n/nl/timeline.json`)**

- `tesamorelin-withdrawal-eu` — 2012-06-21, category approval (or regulation), `[EU]`, compounds [tesamorelin],
  sources [ema-egrifta-withdrawal].
- `eu-falsified-medicines-directive` — 2013-01-02, regulation, `[EU]`, [eu-directive-2011-62].
- `eu-safety-features` — 2019-02-09, regulation, `[EU]`, [eu-regulation-2016-161].
- `eu-clinical-trials-regulation` — 2022-01-31, regulation, `[EU]`, [ema-clinical-trials-regulation, eu-regulation-536-2014].
- `semaglutide-naion-eu` — 2025-06-06, safety, `[EU]`, [semaglutide], [ema-prac-2025-06-naion].
- `eu-pharma-reform-agreement` — 2025-12-11, regulation, `[EU]`, [ema-pharma-reform-page].
- `kayshild-approval-eu` — 2026-03-26, approval, `[EU]`, [semaglutide], [ema-epar-kayshild, ec-union-register-kayshild].
- `wegovy-tablets-eu` — 2026-07-14, approval, `[EU]`, [semaglutide], [ema-wegovy-procedural-steps, ec-union-register-wegovy].
- `eu-council-pharma-position` — 2026-09-28, regulation, `[EU]`, [council-st-7106-2026-rev2, council-st-7105-2026-rev2].
- `glp1-shortages-eu` — 2022-10-19 (EMA's Ozempic shortage entry first published), market, `[EU]`, [semaglutide],
  [ema-shortage-ozempic]; and `ozempic-shortage-end-nl` — 2024-12-02, market, `[NL]`, [semaglutide], [cbg-ozempic-shortage].
- Existing EU events re-checked: `semaglutide-approval-eu` 2018-02-08, `wegovy-approval-eu` 2022-01-06,
  `tirzepatide-approval-eu` 2022-09-15, `afamelanotide-approval` 2014-12-22, `falsified-ozempic-alerts` 2023-10-18: correct.

**Pages**

- `legal/eu` (native Dutch): "Wat verandert er" section: Council adoption 28 September 2026; Parliament's second reading
  pending (indicative 23 November 2026); application 24 months after entry into force; current law until then. The
  "fake medicines" strip and the trials paragraph are confirmed. Add one line that central EU approvals count in every
  member state (fact 37) for the Belgian notes page.
- `legal/whats-changing` (EU part): as above; open PRAC reviews only as dated "under review" lines, if at all.
- Compound pages: badges and *At a glance* unchanged for every compound (none changes between authorised and not);
  SS-31's status table word changes only if the proposal is accepted.

---

## Fact-check (independent, 27 October 2026)

Adversarial check of this file, `research/nl/sources/eu-status.yaml` and the 21 files in `research/nl/status/`. Every
source was re-opened today with curl (EMA, Union Register, CBG, Council, OEIL, CELLAR, CTIS public API, ClinicalTrials.gov
API v2, Farmanco, AIFA); nothing was taken from the research text or from memory. The browser was not needed.

### What was checked

- **EMA data:** medicines JSON (2,754 records; re-generated 2026-10-27T18:19:10Z): the records quoted for Ozempic,
  Rybelsus, Wegovy, Kayshild, Kyinsu, Mounjaro, Egrifta, Foundayo and Scenesse match (numbers, holders, dates, status,
  revision, last update); 0 hits for every other compound's names, codes and brands. Orphan JSON (3,310 records):
  EU/3/21/2430 (20/05/2021), EU/3/22/2614 (16/05/2022), EU/3/02/110 (30/07/2002), EU/3/23/2786 (20/06/2023) confirmed;
  nothing for the other compounds. Under-evaluation list EMA/222468/2026 ("Data extracted 5 October 2026"): the three
  generic semaglutide rows and orforglipron confirmed; November list 404. Shortages JSON (85 records): Ozempic and
  Rybelsus "Shortage resolved" with the dates given; no Wegovy, Mounjaro, Kayshild or Kyinsu entry. Additional-monitoring
  list Rev. 147 of 25 September 2026: Kayshild, Kyinsu, Mounjaro listed; Wegovy struck through (cell formatting).
- **EPAR pages and procedural steps:** holders, opinion and authorisation dates, revision numbers and product-information
  dates confirmed for all six semaglutide and tirzepatide products; Egrifta "On 21 June 2012 ... wishes to withdraw" and
  the CHMP's provisional negative view confirmed (so `withdrawn`, not `refused`, is right). Wegovy X/0000296344 and
  X/0000304416 (21/05/2026, CD 14/07/2026), R/0000336288 (23/07/2026, CD 21/09/2026); Mounjaro VR/0000281937
  (11/12/2025, CD 22/01/2026), VR/0000310637 (25/06/2026), II/0038 (29/01/2026), X/0015 (CD 19/04/2024), II/0007
  (CD 11/12/2023): all confirmed. The 2026 Q&As on Mounjaro HFpEF (30 January 2026) and SURPASS-CVOT (26 June 2026)
  and the Wegovy-tablets news (22 May 2026) re-read: correct.
- **Union Register** (data embedded in the six pages, parsed): status ACTIVE, EU numbers, holders and every decision
  number and date quoted, from C(2018) 911 to C(2026) 7309, confirmed.
- **Dutch product information** (six PDFs, pdftotext): 4.1 texts, NAION, aspiration, conditional approval (Kayshild), black
  triangle (Mounjaro, Kayshild, Kyinsu; not Wegovy), section 9 dates and presentations (Wegovy pens, FlexTouch,
  prefilled syringes, 7,2 mg pen, tablets; Mounjaro pens, vials, KwikPen) confirmed.
- **CHMP and PRAC:** CHMP highlights and agenda of 12-15 October 2026; PRAC minutes of January, April, May, June, July and
  August-September 2026; PRAC agendas of 28 September-1 October and 26-29 October 2026; PRAC signal recommendations of
  the May, June, July, August-September and September-October meetings; the 2024-2025 PRAC items (NAION, aspiration,
  suicidal thoughts); EMA's monthly lists of extensions of indication under evaluation, September 2025 to
  September 2026.
- **CBG:** Geneesmiddeleninformatiebank searches re-run with the registered URLs (semaglutide 33 lines, all EU numbers:
  4 × EU/1/17/1251, 8 × EU/1/20/1430, 15 × EU/1/21/1608, 1 × EU/1/25/1992, 5 × EU/1/26/2019; tirzepatide
  18 × EU/1/22/1685; tesamorelin "Geen producten gevonden"); afslankmedicijnen (published 3 March 2026, modified
  4 August 2026; quotes confirmed); compassionate-use list (modified 10 July 2026; none of the site's compounds); GLP-1
  position page; Ozempic shortage page; 2025 shortage report (PDF; "licht gestegen"; no GLP-1 mention).
- **Dutch law:** wetten.overheid.nl BWBR0021505, "Geldend van 09-09-2025 t/m heden": the version of
  `nl-gmw-art-40-handelsvergunning` is the one in force today; art. 40(1)-(3) wording as cited.
- **EU law:** Council documents ST 7105/2/26 REV 2 and 7106/2/26 REV 2 (subject lines "Adopted by the Council on
  28 September 2026"; Regulation art. 27(2), 185, 187 and Annex I point 3; Directive art. 1(4), 1(5), 2(2), 4(1)-(2),
  5(1)(1), 6(1), 83, 175-177, 179(1), 180(1), 220, 222 and 223, all quoted correctly); vote notes 13737/26 and 13739/26;
  OEIL 2023/0131, 2023/0132, 2025/0102 and 2025/0406 (statuses, key events, forecasts as quoted); EMA reform page (text
  and update history); IP/26/1017; through CELLAR: TFEU art. 294, Regulation 726/2004 (consolidation 2022-01-28;
  art. 13(1), 83), Directive 2001/83 (consolidation 2025-01-01; art. 6(1), 87(1)), Directive 2011/62, Implementing
  Regulation 699/2014, Delegated Regulation 2016/161 (art. 50 and recital 44, which names Belgium, Greece and Italy),
  Regulation 536/2014 (art. 2(2)(25), 36, 98, 99) and Regulation 2021/2282 (art. 7(2), 36). A SPARQL query of the
  Publications Office confirmed the latest consolidations: 2001/83 → 2025-01-01, 726/2004 → 2022-01-28,
  536/2014 → 2022-12-05.
- **Trials:** CTIS public API (search and retrieve) for all 21 compounds: 9 retatrutide trials, 2 elamipretide,
  1 thymosin alpha 1, 0 for the others; per-country codes, decisions and notifications of 2025-522674-36-00,
  2024-511450-49-00, 2025-523837-25-00, 2024-511482-11-00, 2024-518102-41-00 and 2024-518470-13-00 confirmed;
  2023-508630-34-00 returns `{}`. ClinicalTrials.gov: NCT06383390 (Active, not recruiting; EU CT number
  2023-508630-34-00; 28 Dutch site entries; last update 8 October 2026), NCT07165028 (Recruiting; 6 Dutch sites, only
  Utrecht recruiting), NCT06662383, NCT07531251 and NCT06373731 confirmed.
- **Other:** Farmanco public list (271 dated entries; liraglutide, no semaglutide or tirzepatide); AIFA API (Zadaxin,
  AIC 028364026, AUTORIZZATA, 1996-05-15T22:00Z, marketed, RR, class C, IM/SC), as the status file says.
- **Source hygiene:** all 45 entries of `research/nl/sources/eu-status.yaml` validate against `sourceSchema`; all rows and
  products of the 21 status files validate against `regulatoryEntrySchema` and `authorisedProductSchema`, and every
  source id they use exists (tsx, against `src/schemas/index.ts`). Every new id is unique across `src/data/sources/` and
  `research/nl/sources/`. No title or URL names a seller or company.

### What was corrected (before → after, with source)

1. **Gastroparesis warning** (fact 21; semaglutide status notes): "Gastroparesis (Wegovy)" → the warning ("semaglutide
   wordt niet aanbevolen bij ernstige gastroparese") is in the Dutch SmPCs of Ozempic, Rybelsus, Wegovy and Kayshild;
   Ozempic and Rybelsus by worksharing EMA/VR/0000249026 (outcome 23 October 2025), Wegovy by EMA/VR/0000257476
   (CD 16 February 2026, C(2026) 1195). `ema-pi-ozempic-nl`, `ema-pi-rybelsus-nl`, `ema-pi-kayshild-nl`, the Ozempic
   procedural steps, `ec-union-register-ozempic`, `ec-union-register-wegovy`. Source notes updated.
2. **Lithium signal number** (fact 23, verification log, `ema-prac-2026-10-agenda`, tirzepatide notes): EPITT 20280 →
   **EPITT 20275** (20280 is the cefpodoxime-PPI signal printed just before it; the June 2026 minutes and signal
   recommendations confirm).
3. **Volvulus is no longer open** (fact 23, section 5 item 5, `ema-prac-2026-05-minutes`): "open, no outcome public" →
   concluded at the PRAC of 28 September-1 October 2026: "Reassess in the next PSUR (submission by 29 August 2027)", no
   label change (published 26 October 2026). New source `ema-prac-signals-2026-09-28`.
4. **Missed new signal:** semaglutide and **ischaemic colitis** (EPITT 20309; Ozempic, Kayshild, Rybelsus, Wegovy), new at
   that PRAC; supplementary information by 1 December 2026. Same source. Peripheral neuropathies stay open.
5. **Missed EU review:** a Rybelsus **extension of indication** to children and adolescents from 10 years with type 2
   diabetes, EMA/VR/0000369826, evaluation started 12 September 2026 (fact 11). New source
   `ema-ext-indication-under-evaluation-2026-09`. (A web search attributed an "80 mg pen" line extension on the October
   CHMP agenda to Wegovy; the agenda shows it belongs to another company's product, and there is no Wegovy item.)
6. **"Misuse"** (fact 25): "no action found" → add the EMA/HMA public warning of 3 September 2025 on illegal GLP-1
   products (semaglutide, liraglutide, tirzepatide) sold online, with the common-logo advice. New source
   `ema-hma-2025-09-illegal-glp1`.
7. **CBG Ozempic page date** (fact 27, semaglutide notes): "last updated on 2 December 2024" → the last *shortage* update
   is 2 December 2024; the page itself was last modified on 20 January 2025 (an update on the PRAC NAION review).
   `cbg-ozempic-shortage`.
8. **Common-logo date** (fact 35): "to be applied in every member state at the latest a year later" → Implementing
   Regulation 699/2014 art. 5: "It shall apply as from 1 July 2015". `eu-regulation-699-2014`.
9. **Council vote** (fact 28; section 5 item 1 resolved; notes of `council-st-13737-2026-vote` and
   `council-st-13739-2026-vote`): "not read" → for both acts 26 for, 0 against, 1 abstention (Malta), qualified majority;
   the Netherlands and Belgium voted for (annex images extracted and read).
10. **OEIL label** (fact 28): "draft recommendation 12 October 2026" → "committee draft report (PE796.189)", as OEIL
    lists it.
11. **CHMP agenda section** (`ema-chmp-2026-10-agenda`): orforglipron "Section 3.2 (opinions)" → section 3.1, item 3.1.1.
12. **SYNERGY-Outcomes** (`ctis-2025-522674-36-00`, retatrutide status file): the title had words not in the record
    ("; tirzepatide and retatrutide") → the record's public title. "15 member states" → 15 countries (14 EU member states
    and Norway). Netherlands: CTIS has a start-of-trial notification of 22 September 2026 (under Regulation 536/2014
    art. 2(2)(25), the first act of recruitment) but no first-visit notification yet; the suggested NL note now says the
    trial "started in the Netherlands on 22 September 2026" instead of "has been recruiting".
13. **CTIS titles** of `ctis-2025-523837-25-00` and `ctis-2024-511482-11-00`: shortened paraphrases → the records' full
    titles.
14. **Company names in authors:** the six `ema-pi-*-nl` entries had "European Medicines Agency / Novo Nordisk A/S" (or
    "/ Eli Lilly Nederland B.V.") → "European Medicines Agency", as the registered EPAR ids have it (brief: no source that
    names a company). The holder stays in the products' `holder` field, where the schema needs it.
15. **Data-file comparison** (semaglutide and tirzepatide status files): the NL rows also cite `ema-epar-ozempic` and
    `ema-epar-mounjaro`; the research's list of those rows' sources had left them out.
16. **SS-31** (status file): "without the allowlist entry the EU row cannot cite the trials" → it can, through the
    registered `ctgov-nct06373731` (ReNEW, the same trial as CTIS 2024-511482-11-00, with sites in five EU member
    states); only the Dutch 4TAZPower authorisation needs CTIS.
17. **Mounjaro additional monitoring** (tirzepatide status file, conflict 4): confirmed, and the EPAR page also lacks the
    "Additional monitoring" box, so EMA's web record and its list disagree; follow the list and the SmPC.

Everything else in sections 1-4 and 7 and in the status files was confirmed as written, including all 21 EU and NL
statuses and dates; tesamorelin `withdrawn` since 2012-06-21; thymosin alpha-1 `not-authorised` with the Italian national
authorisation (AIFA confirms it is current); the Kayshild and Kyinsu product facts; all EU-law dates and article
numbers; and the shortage findings.

### For the merge (not edited here: other owners' files)

- `eu-directive-2001-83` (src/data/sources/shared.yaml) still points to the **2022-01-01 consolidation**; the latest is
  2025-01-01 (the one `src/data/jurisdictions.yaml` links). The articles quoted (6(1), 87(1)) are the same in both, but
  the merge should point the id at `CELEX:02001L0083-20250101` and set `accessed: 2026-10-27`.
- Tracker item `eu-glp1-safety-reviews` (if used): add `ema-prac-signals-2026-09-28`; the open items are cardioembolic
  stroke, lithium (EPITT 20275), peripheral neuropathies (EPITT 20270) and ischaemic colitis (EPITT 20309); volvulus is
  closed.
- Allowlist: the advice is unchanged (euclinicaltrials.eu for the five `ctis-*` ids; farmanco.knmp.nl for the Farmanco
  id; aifa.gov.it optional).

### Marked UNRESOLVED (write as unknown, or leave out)

- Outcomes of the PRAC meeting of 26-29 October 2026 (cardioembolic stroke LEG; lithium EPITT 20275), of the peripheral
  neuropathy signal (EPITT 20270) and of the new ischaemic colitis signal (EPITT 20309): none public on 27 October 2026.
- Outcome of the Mounjaro oral-contraceptive variation (EMA/VR/0000340438; on the PRAC agenda of 28 September-1 October
  and the CHMP agenda of 12-15 October 2026): no outcome and no new Union Register procedure on 27 October 2026.
- Outcome of the Rybelsus paediatric extension (EMA/VR/0000369826): evaluation started 12 September 2026; no date known.
- Whether Dutch participants have yet been enrolled in SYNERGY-Outcomes (start of trial notified 22 September 2026; no
  first-visit notification in CTIS; one Dutch site listed as recruiting on ClinicalTrials.gov).
- From which date Parliament's second-reading period under TFEU art. 294(7) runs (OEIL records the announcement in
  plenary on 8 October 2026); no deadline should be given.
- Items 2-4 and 6-10 of section 5 stay unresolved as written; item 1 is resolved and item 5 is updated above.
