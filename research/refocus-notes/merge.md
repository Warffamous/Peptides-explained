# Refocus merge: research into the site data (24 October 2026)

Agent: `merge:data`. Inputs: `research/refocus/` (fact-checked research; every file's "Fact-check (independent)"
section and `factcheck:` block applied), `research/refocus-spec/content-brief.md`, the lead's editorial decisions of
24 October 2026. Nothing under `research/refocus/` was edited; it stays as the record.

Result: `npm run validate` 0 errors (87 warnings, explained in section 9), `npm run build` passes (138 pages),
`scripts/check-no-commerce.ts dist` passes, `scripts/check-html.ts dist` 0 errors. `STRICT_LOCALE_ROWS = true`.

## 0. Files written

| File | What |
|---|---|
| `src/data/sources/refocus-{australia,canada,extras,ireland-nz,status-a,status-b,status-c,status-d,us-uk-routes}.yaml` | new: the research source files, merged (section 1) |
| `src/data/compounds/*.yaml` (all 21) | CA and AU rows for every compound, UK rows for the 9 that had none, schedules, products (section 3) |
| `src/data/jurisdictions.yaml` | CA, AU, IE, NZ entries; US and UK help services (section 4) |
| `config/link-allowlist.json` | 7 suffixes and 63 hosts added (section 2) |
| `scripts/validate-content.ts` | `STRICT_LOCALE_ROWS = true` only |
| `src/content/compounds/en/{semaglutide,tirzepatide,tesamorelin}.mdx` | **outside my nominal ownership**: only new keys in the frontmatter `indications:` map (section 5) |
| `research/for-nl-site/MANIFEST-merge.md` | nothing European was cut (data stays) |
| `src/data/feeds.yaml` | not changed (lead's decision; section 6) |

## 1. Sources

Each `research/refocus/sources/<name>.yaml` became `src/data/sources/refocus-<name>.yaml` (header comment added; YAML
comments of the research files kept). Entries after the merge: australia 76, canada 88, extras 87, ireland-nz 64,
status-a 87, status-b 28, status-c 34, status-d 25 (one added by the merge), us-uk-routes 50.

### 1.1 Duplicate ids across research files (joined into one entry; the other copies' notes appended, newest `accessed` kept)

au-tg-regulations-1990-sch-5-item-1 (status-c → australia), au-poisons-standard-2026-10 (status-b, -c, -d → australia),
au-customs-prohibited-imports-regs (status-b, -c → australia), au-tga-2024-09-counterfeit-ozempic-pens (status-a →
australia), ca-food-and-drugs-act, ca-hc-cosmetic-drug-interface-guidance, ca-hc-cosmetic-ingredient-hotlist (status-c →
canada), ca-cdsa, ca-pdl-human (status-b, -c → canada), ca-hc-recalls-database (status-b → canada),
ca-food-and-drug-regulations, ca-hc-2026-04-think-twice-peptides, au-tga-2026-04-peptide-responsibilities,
au-tga-2026-06-cmo-peptide-statement, au-tga-2026-08-peptide-seizure (status-c → status-b), au-poisons-standard-2015-06,
au-poisons-standard-2015-02 (status-d → status-b). Titles and URLs were identical in every copy.

### 1.2 Ids already in `src/data/sources/` (not re-registered; the existing id is used)

- `ctgov-nct07531251`, `ctgov-nct06373731` (stubs-b.yaml, same URL). The research copies carry more detail (sites in
  Calgary and Bristol; NCT06373731's UK and New Zealand sites; the registry's own sentence that NCT07531251 is meant
  to confirm the US accelerated approval). That detail is in `research/refocus/sources/status-d.yaml` only; the owner
  of stubs-b.yaml (compounds-e) may extend those notes.
- Kept although its URL equals an existing entry's: `federalregister-fda-search-2026-10-23` (same Federal Register
  search page as `federalregister-fda-search-2026-10-22`, but a different search on a different day with different
  results; merging would lose the 23 October findings). The per-batch DPD/NOC/recalls search records that share a URL
  stay separate for the same reason (as the research fact-checks decided).

### 1.3 Dropped entries (not in any `src/data/sources` file)

| Id | Reason | Where the fact goes now |
|---|---|---|
| ca-hc-2026-07-injunction-statement | seller rule: URL names the seller | not cited (the research already said DO NOT CITE); RA-74731 summary in `ca-hc-recalls-database` |
| ca-hc-2025-01-semaglutide-pyridoxine-recall | seller rule: the page's Product line and "Companies" field name the compounding pharmacy | RA-76830 summarised, without names, in `ca-hc-recalls-database` |
| ca-hc-2026-05-ghk-cu-bpc-157-api-recall (canada and status-c copies) | seller rule: "Companies" field names the ingredient supplier | RA-82047 summarised in `ca-hc-recalls-database`; the GHK-Cu CA row cites the index |
| ca-lnhpd-nr-licence | seller rule (the licence record names the product and the company) and not re-verifiable (LNHPD down on 23 and 24 October) | the NAD+ CA row cites the DPD search, NMN monograph and NHPR Schedule 2; **open:** a neutral LNHPD search record once the LNHPD is back |
| au-tga-2026-07-peptide-promoters-notice | commerce token "suppliers" in title and URL | not cited (the research already said DO NOT LINK) |
| nz-sports-tribunal-2025-foster | names a private individual (an athlete who admitted supplying peptides to another person) | the NZ notes page may describe the case without a source of this kind, or cite `nz-sic-2026-06-peptides-trend` for what it says |
| us-cms-ipay2027-negotiated-prices | commerce token "prices" in the URL; no neutral CMS address (the programme pages also carry "price" in the path) | the Medicare negotiated-price fact has no linkable source; leave it out or ask the lead |
| uk-emc-search-status-a-2026-10-24, uk-emc-smpc-ozempic-0-25mg, uk-emc-smpc-rybelsus-3mg, uk-emc-smpc-wegovy-flextouch-0-25mg, uk-emc-smpc-wegovy-7-2mg, uk-emc-smpc-wegovy-tablets-1-5mg, uk-emc-smpc-mounjaro-kwikpen-2-5mg, uk-emc-search-2026-10-24 | host www.medicines.org.uk (emc, run by Datapharm, a company) is not an official regulator, legislation site or health service, so it was not allowlisted | UK product labels link the MHRA Products substance pages instead (section 3); UK licence numbers and dates come from the MHRA lists of granted licences where they exist. **Owner decision:** if emc is accepted, re-add these entries from `research/refocus/sources/status-a.yaml` and `us-uk-routes.yaml` |
| ie-rte-2026-10-15-peptides | news host (RTÉ) | the Irish 2026 seizure figures were news-only anyway (ireland-nz.md 4.8): leave them out or attribute without a link |
| nz-nzherald-2026-07-02-peptide-seizures | news host (commercial newspaper) | as above for the New Zealand parcel counts |
| ie-hse-pharmacy-needle-exchange | live page HTTP 404 (archive copy only) | Irish sharps: `ie-hse-anabolic-steroids-reducing-harm` |
| ie-hse-2023-pq-sharps | live URL redirects to a "Website update" page (archive only) | as above |
| ca-dsc-egrifta-discontinuation-170025 | live page HTTP 403 (bot check) on 23 and 24 October; read only in an Internet Archive copy; the lead treats its "business reasons" as unverified | the tesamorelin CA row rests on the SBD (PAAT), the DPD records and the Food and Drug Regulations |

Kept, with a note for writers:
- `ca-hc-2026-08-generic-semaglutide-recall` (RA-82536, Apo-Semaglutide): names only the marketing-authorisation holder
  of an authorised generic, which the products table names anyway.
- `au-tga-2026-10-prescription-import-infringements`: title and URL are neutral; the body names two companies. Cite it
  only for the individual-importer facts and never name the companies.
- `ie-hpra-buying-prescription-medicines-online`: the page's own URL contains "buying"; the entry now uses the HPRA's
  short address `https://online-medicine-safety.hpra.ie/`, which redirects (HTTP 301) to it; re-read on 24 October 2026
  (quotes confirmed). Its title still contains "buying"; titles are not link text (SourceRef links the host name), so
  check-no-commerce passes.

### 1.4 Notes edited (links to hosts that cannot be allowlisted removed; the facts kept)

- `ca-hc-feed-news-atom`: the feed's localhost self link → "a localhost address".
- `au-nsw-ptg-act-1966`, `au-nsw-mptg-act-2022`: Internet Archive URLs → "Internet Archive snapshot <timestamp> of the
  official whole-Act page".
- `nz-medsafe-report-a-problem`: the third-party CARM form host → "an online CARM form on a third-party host (not linked)".
- `ca-hc-recalls-database`: RA-76830 and RA-82047 added (from the dropped entries' verified notes, no names).
- `uk-mhra-substance-index-status-a-2026-10-24`: merge re-read of both substance pages; used as the UK label link.

### 1.5 New entry (by the merge)

`ca-dpd-extract-search-merge-2026-10-24` (refocus-status-d.yaml): Health Canada's official DPD data extract (files
dated 5 October 2026; 12 archives, 236,823 rows) unzipped inside the canada.ca page in the built-in browser on
24 October 2026 and searched for every batch d name (MOTS-c, epitalon, Semax, Selank, thymalfasin/Zadaxin, AOD-9604,
elamipretide and codes, NR, NMN, NAD+): no product, ingredient or company match; controls found (semaglutide brands,
Theratechnologies as owner of the two cancelled Egrifta DINs). Added to the CA rows of aod-9604, epitalon, mots-c,
nad-precursors, selank, semax, ss-31 and thymosin-alpha-1.

## 2. Allowlist (`config/link-allowlist.json`)

Suffixes: `.gov.au`, `.govt.nz`, `.gc.ca`, `.canada.ca`, `.hpra.ie`, `.hse.ie`, `.nhs.uk` (all restricted to
government or public-health bodies).
Hosts (63): Health Canada's portal and registers (dhpp.hpfb-dgpsa.ca, pdf.hres.ca, hpr-rps.hres.ca), pCPA, Sport
Integrity Canada, NAPRA and three provincial regulators (Alberta College of Pharmacy, CPSA, Ontario College of
Pharmacists), the Federal Court of Appeal, the House of Commons of Canada, the Canadian Register of Historic Places,
Canada's poison centres and their directory, the provincial and territorial health lines and governments, Toward the
Heart (BCCDC), 9-8-8, the 988 Lifeline (US), ANZCTR and ISRCTN (WHO primary registries), the GMC and GPhC, the SMC,
UK Parliament (Hansard), the Scottish and Welsh Governments, NHS inform, Breathing Space, the Public Health Agency NI,
NPIS, FRANK, DAN 24/7, Samaritans, the Irish Statute Book, the Law Reform Commission, Revenue, Sport Ireland, the Irish
NPIC, Sport Integrity Commission NZ, Sport NZ, the Sports Tribunal of NZ, CARM (University of Otago), the NZ National
Poisons Centre and the Alcohol Drug Helpline. Each has a one-line "why".
**Not added:** www.medicines.org.uk (emc; owner decision), news hosts (www.rte.ie, www.nzherald.co.nz),
healthproductshortages.ca (entry dropped), web.archive.org, the CARM form host.

## 3. Status merge, per compound

All new rows `as_of: 2026-10-23` (as recorded). EU/NL/DE/BE rows untouched. Existing UK rows that the research
re-checked got the re-check source added and `as_of: 2026-10-23` (no status changed).

| Compound | UK | CA | AU (schedule) | Products added | Notes / conflicts |
|---|---|---|---|---|---|
| aod-9604 | new: not-authorised | not-authorised | not-authorised (S4 + Appendix D, first listed from 1 June 2015) | – | note avoids "since" (editions between June 2015 and Oct 2026 not read one by one) |
| bpc-157 | +MHRA index | not-authorised | not-authorised (S4 + App. D from 1 June 2024) | – | the dropped RA-82047 recall is in the index |
| cjc-1295 | +MHRA search | not-authorised | not-authorised, **no schedule field** | – | lead: CAS mismatch (the named CAS is the form without DAC) → legal review (section 7) |
| epitalon | +MHRA search | not-authorised | not-authorised (unscheduled) | – | – |
| ghk-cu | new: not-authorised (as a medicine; cites the GB cosmetics rules) | not-authorised (cites the recalls index instead of the dropped RA-82047 page) | not-authorised, **no schedule field** | – | COPPER COMPOUNDS entry → legal review |
| hexarelin | new: not-authorised | not-authorised | not-authorised (S4 + App. D from 1 June 2015) | – | – |
| ipamorelin | +MHRA search | not-authorised | not-authorised (S4 + App. D from 1 June 2015) | – | – |
| kpv | +MHRA index | not-authorised | not-authorised (unscheduled) | – | – |
| melanotan-ii | +MHRA index | not-authorised | not-authorised (S4 from 1 June 2018, not App. D) | – | Customs Sch 8 item 4 "aphrodisiacs" → legal review |
| mots-c | new: not-authorised | not-authorised | not-authorised (unscheduled) | – | – |
| nad-precursors | new: not-authorised | not-authorised | not-authorised | – | lead: drug-sense rows (NHP licences / AUST L listings explained on the page); `ca-lnhpd-nr-licence` dropped |
| pt-141 | +MHRA index | not-authorised | not-authorised (unscheduled) | – | "aphrodisiacs" → legal review |
| retatrutide | +MHRA index (investigational) | investigational | investigational, **no schedule field** | – | not named in the Poisons Standard; only the TGA advertising page calls it prescription-only → legal review |
| selank | new: not-authorised | not-authorised | not-authorised (unscheduled) | – | – |
| semaglutide | `since: 2018-02-08` added (EU-wide authorisation while the UK was a member; GB licence from 1 January 2021) | authorised since 2018-01-04 (PDL since 12 March 2018) | authorised since 2019-08-28 (S4) | US 5, UK 4, CA 7, AU 3 | see 3.1 |
| semax | new: not-authorised (FSA records the MHRA's view that it is a medicine) | not-authorised | not-authorised (unscheduled) | – | – |
| ss-31 | new: investigational | investigational | not-authorised | – | whether the UK arm has an MHRA trial authorisation was not checked (registry only) |
| tb-500 | +MHRA index | not-authorised | not-authorised (S4 + App. D from 1 June 2016; thymosin beta-4 has its own entry) | – | what "TB-500" means chemically in the entry: unresolved, both readings caught |
| tesamorelin | +GOV.UK search | **discontinued**: authorised_since 2014-04-29, since 2022-09-30 (PDL since 25 April 2014) | not-authorised, **no schedule field** | CA: Egrifta, marketed_until 2022-09-30 | see 3.2 |
| thymosin-alpha-1 | new: not-authorised | not-authorised | not-authorised (unscheduled) | – | the data file's "UK search not settled" comment replaced: the status-d fact-check settled it (quoted searches empty; earlier hits were fuzzy) |
| tirzepatide | `since: 2022-09-26` added (first GB licences) | authorised since 2022-11-24 (PDL since 8 March 2023) | authorised since 2022-12-23 (S4; Appendix L label warning in the note) | UK 1, CA 2, AU 1 | see 3.1 |

### 3.1 Semaglutide and tirzepatide products

- Every label URL was re-opened on 24 October 2026: the three FDA labels (pdftotext: Ozempic "Revised: 05/2026",
  Rybelsus/Ozempic tablets "Revised: 1/2026", Wegovy), six Canadian monographs on pdf.hres.ca, three Health Canada
  Regulatory Decision Summaries (decision dates 2026-04-28, 2026-05-01, 2026-06-25; "solid phase chemical synthesis
  and not by recombinant DNA"), five ARTG entries (dates and sponsors), and the MHRA Products substance pages.
- **UK label link:** the MHRA Products substance page (SEMAGLUTIDE / TIRZEPATIDE), which lists every UK product with
  its SmPC and leaflet files, because emc is not allowlisted. UK dates: Ozempic and Rybelsus 1 January 2021 (GB
  licences converted at the end of the EU transition; the date was read on emc by the research, so it now rests on
  that reading plus `uk-mhra-uk-wide-licensing`; recorded in a data comment), Wegovy pens 24 September 2021 and
  Wegovy tablets 11 June 2026 (MHRA lists), Mounjaro 26 September 2022 (MHRA list).
- **Canadian generics:** the three with a decision summary (Dr. Reddy's, Apo-Semaglutide, Sevmia) link that summary.
  **Not listed:** Poviztra (CA), Aspen-Semaglutide, Semaglutide Injection (Aspen) and Sandoz Semaglutide: their only
  label link is the DPD product page, which could not be opened (DPD down); add them when the DPD is back.
- **Not listed: Plosbrio and Poviztra (AU)**: on the ARTG since 23 April 2026, but no PI, registration record or
  other TGA page gives their indications, so the table could not say what they are for.
- US: Ozempic tablets kept as a separate product (the research's choice); the editor may fold it into Rybelsus.

### 3.2 Tesamorelin, Canada (lead's decision applied)

`status: discontinued`, `authorised_since: 2014-04-29` (NOC 15555), `since: 2022-09-30` (end of marketing and
cancellation of DIN 02438712, the only marketed DIN). The data comment records that the never-marketed 2 mg DIN
02423677 was cancelled on 13 July 2023, and that both cancellations followed the manufacturer's notice that it had
stopped selling (C.01.014.6(1)(a)), not a safety action. "Business reasons" is not stated anywhere in the data. The
built tile reads exactly as the spec's target ("Approved in the US. Canada approved it, but it is no longer sold
there. Not approved in the UK or Australia.").

### 3.3 Schedules (lead's rule: only where the instrument names the substance)

Added: AU S4 for aod-9604, bpc-157, hexarelin, ipamorelin, melanotan-ii, semaglutide, tb-500, tirzepatide; CA
Prescription Drug List for semaglutide, tesamorelin, tirzepatide. Schedule notes are rendered in the status table, so
they are short reader text; dates and details are in data comments. **Not added** (section 7): tesamorelin and CJC-1295
(AU), retatrutide (AU), GHK-Cu (AU).

## 4. `jurisdictions.yaml`

New: CA, AU (full) and IE, NZ (notes): regulator, side-effect reporting, anti-doping body, medicines law, emergency
numbers as data (CA 911; AU 000 and 112; IE 112 and 999; NZ 111; never printed on English), help services by kind.
US and UK: help services added. Every URL was opened again on 24 October 2026 (curl, or the built-in browser).
Exceptions and gaps:
- SAMHSA National Helpline (US): HTTP 403 to every tool here, including the browser; kept because the research read
  it (archive capture of 11 October 2026, re-read by its fact-checker); FindTreatment.gov (live) added beside it.
- Health811 (Ontario): "Access Denied" to scripts and the browser; the link is the one ontario.ca gives.
- sportintegrity.nz: Cloudflare bot check (not bypassed); the research's fact-checker read it in a normal browser.
- **Not listed:** NHS 24 (Scotland; nhs24.scot showed an "Under Maintenance" page), Alberta Health Link (connection
  refused), New Brunswick Tele-Care 811, Prince Edward Island 811, Yukon 811 (bot checks), Nunavut (no line found).
  The UK and Canada pages should name these in text.
- UK poisons: the NPIS does not advise the public, so the card links the NHS page on poisoning.

## 5. Indications added to three English compound pages (outside my nominal file list)

The validator requires a localised `indications` entry for every product in the data file (an error otherwise, and
`npm run build` runs the validator), so adding the products forced 24 new keys in the frontmatter of
`src/content/compounds/en/semaglutide.mdx` (19), `tirzepatide.mdx` (4) and `tesamorelin.mdx` (1). Nothing else in
those files was touched. Each text was written from the product's own label or decision document, read on
24 October 2026: FDA labels (indications sections), Canadian monographs (section 1), Health Canada decision summaries,
TGA prescription-medicine registration records (Ozempic, Rybelsus, Wegovy, Mounjaro), MHRA press releases (Wegovy CV
and MASH, Wegovy tablets, Mounjaro weight). The UK Ozempic and Rybelsus lines are deliberately minimal (the UK SmPCs
were not read for indications). **compounds-a and compounds-b own these lines and may reword them.**

## 6. Feeds (not changed; for the follow-up decision)

Confirmed working on 24 October 2026 by the research (`refocus-extras.yaml`, ids in brackets):
- MHRA news (Atom): https://www.gov.uk/search/news-and-communications.atom?organisations%5B%5D=medicines-and-healthcare-products-regulatory-agency (`uk-mhra-feed-news-atom`)
- MHRA Drug Safety Update (Atom): https://www.gov.uk/drug-safety-update.atom (`uk-mhra-feed-drug-safety-update-atom`)
- MHRA alerts (low yield): https://www.gov.uk/drug-device-alerts.atom
- Health Canada news (Atom): https://api.io.canada.ca/io-server/gc/news/en/v2?dept=departmentofhealth&sort=publishedDate&orderBy=desc&publishedDate%3E=2021-07-23&pick=50&format=atom&atomtitle=Health%20Canada (`ca-hc-feed-news-atom`; items link www.canada.ca, now allowlisted through `.canada.ca`)
- Health Canada recalls RSS (only the newest 3 items): https://recalls-rappels.canada.ca/en/feed/health-products-alerts-recalls; complete alternative: the open-data JSON https://recalls-rappels.canada.ca/sites/default/files/opendata-donneesouvertes/HCRSAMOpenData.json (needs a new fetcher kind)
- TGA safety alerts: https://www.tga.gov.au/feeds/alert/safety-alerts.xml; TGA media releases: https://www.tga.gov.au/feeds/article/media-releases.xml (needs a name filter); TGA all alerts, news, consultations (lower value)
Seller names in titles: Health Canada 29 July 2026 (injunction) and TGA 28 September 2026 (Federal Court) items name
businesses; the commerce filter does not catch company names. Draft entries: feeds-help-extras.md 1.3.

## 7. Questions for the legal reviewer (no schedule field written for these)

1. **Tesamorelin (AU):** not named; the Schedule 4 / Appendix D group entry "GROWTH HORMONE RELEASING HORMONES (GHRHs)"
   covers it on our reading only. Same for Customs (Prohibited Imports) Schedule 7A item 4 (GHRHs "and synthetic
   analogues", ODC permit).
2. **CJC-1295 (AU):** the entry names "CJC-1295 (CAS No. 863288-34-0)", the form without DAC; is the DAC molecule a
   derivative of the named entry or caught by the GHRH group entry? (Either gives S4 + Appendix D.) Schedule 7A item 4
   as for tesamorelin.
3. **Retatrutide (AU):** not named; only the TGA's advertising page says derivatives of semaglutide or dulaglutide
   "such as retatrutide" are prescription-only. Also: does the October 2024 compounding ban on "GLP-1 receptor agonist
   analogues" cover retatrutide or tirzepatide?
4. **GHK-Cu (AU):** do the "COPPER COMPOUNDS" entries (Schedules 4 and 6, with copper-content exceptions) cover a
   copper-peptide complex? Can GHK-Cu be introduced in Australian cosmetics (AICIS)?
5. **Melanotan II and bremelanotide (AU):** can Customs Schedule 8 item 4 ("aphrodisiacs ... substantially of the same
   character") apply?
6. **Ipamorelin and hexarelin (AU):** can Customs Schedule 7A item 1 ("anabolic or androgenic substances", undefined)
   reach a growth hormone secretagogue?
7. **Canada:** the legal basis of Health Canada's "injectable peptides are regulated as prescription drugs" for
   peptides not on the Prescription Drug List (pages should say "Health Canada says"; the rows rest on the no-DIN rule).
8. **TB-500 (AU):** what molecule the entry "TB-500" means (no sequence or CAS); both readings are caught.

## 8. Health Canada databases (lead: try once more)

Tried again on 24 October 2026 (afternoon): DPD API HTTP 503; DPD, NOC and LNHPD web search redirect to
construction.hres.ca; LNHPD API 503; the NHPID host (NMN monograph PDF) did not answer. The DPD part was checked
independently in the official DPD data extract (1.5): the batch d CA rows (aod-9604, epitalon, mots-c, nad-precursors,
selank, semax, ss-31, thymosin-alpha-1) no longer rest on the first run alone. **Re-check before publishing** (when the
databases are back): the NOC database for the batch d compounds (never searched for AOD-9604, epitalon, MOTS-c, Selank,
Semax, thymalfasin, elamipretide, NR/NMN/NAD+); the NOC re-check for the batch c compounds (bpc-157, tb-500, kpv,
ghk-cu, melanotan-ii, pt-141; first run only); the LNHPD (whether NR and NMN products are licensed; the NMN monograph's
current status); the DPD brand searches named in the research (TP-7, Selanc, MEHFPGP, Epithalone, MTP-131, Bendavia,
SS-31, "Thymosin alpha"); current Canadian monographs for Mounjaro (after the June 2026 paediatric decision), Zepbound,
Poviztra, the Aspen and Sandoz semaglutides.

## 9. Validator warnings (87, none an error)

- Mine: 29 "has no DOI or PMID" in refocus-*.yaml (type `guideline` or `book` from regulators, NICE, SMC, GMC, GPhC,
  NAPRA, Revenue, Sport Integrity Commission NZ, the TGA history): official guidance with no DOI; the type is accurate,
  so it was kept.
- 9 "no regulatory row for BE (shown on preview locale nl)": aod-9604, ghk-cu, hexarelin, mots-c, nad-precursors,
  selank, semax, ss-31, thymosin-alpha-1 have no BE row; there is no Belgian research in this round and EU/NL/DE/BE
  rows are not mine to add. For the Dutch site.
- The rest belong to other groups' files: regulatory_notes for EU/NL/DE/BE in the English compound pages, the
  European legal pages and their cards, readability items, and media/pages JSON.

## 10. Open items for other groups and the lead

- **UI string:** the status table renders a schedule as "Schedule {code} · note", which reads "Schedule Prescription
  Drug List" for Canada and "Schedule S4" for Australia. Suggest `compound.regulatoryTable.schedule` = "{code}" with
  codes "Schedule 4 (S4)" / "Prescription Drug List", or a per-jurisdiction label (glossary-ui-media-en owns the string;
  the codes are data and can be changed with it).
- **Notes column:** the English compound pages have no `regulatory_notes` for CA and AU yet (content groups).
- **Retatrutide, sport (conflict, not changed):** the data's WADA row says prohibited (S0); Sport Integrity Australia's
  retatrutide page (re-read by the australia-legal fact-check) says "Retatrutide is not listed on the Prohibited List".
  Not listed by name and prohibited under S0 are compatible readings, but the pages must not contradict SIA without
  explaining (compounds-a, legal/sport-and-doping).
- **emc** (www.medicines.org.uk): owner decision (section 1.3).
- Thymosin alpha-1's existing `fact` text on the English page ("Approved in Italy, and some countries in Asia and
  elsewhere") and its description still mention the Netherlands (compounds-e).
- Semaglutide UK row cites `ema-epar-ozempic` for its 8 February 2018 date (the EU authorisation that then covered the
  UK): a citation, not text; the content group should mark any sentence about it with the residue-ok marker.

## 11. No-loss check

Compared with HEAD (= nl-source-2026-10-23 for these files): no regulatory row, product, study or source id was
removed from any compound data file, `jurisdictions.yaml` or the three MDX files. The only changed lines are the 12
existing UK rows (sources added, `as_of` updated, `since` added for semaglutide and tirzepatide) and two comments
(thymosin-alpha-1 header, jurisdictions header). EU/NL/DE/BE rows are byte-identical. Source ids: every research id is
either in a refocus-*.yaml file, already in `src/data/sources/`, or listed in 1.3 with its reason.

## 12. Independent check of the merge (24 October 2026)

Checker: `merge:check` (independent of `merge:data`). Inputs: the merge report, this file, `research/refocus/` (every
`factcheck:` block and "Fact-check (independent)" section), `research/refocus-spec/content-brief.md` and
`data-model.md`. Nothing under `research/refocus/` was edited. Tools: a comparison script (research `rows`, `schedule`
and `products` against `src/data/compounds/<slug>.yaml`), curl and Node fetch (PDFs read with pdftotext), and the
built-in browser in its own tab for script-rendered or bot-checked pages.

Result after the fixes below: `npx tsx scripts/validate-content.ts` **0 errors**, 87 warnings (the same 87 as in
section 9; the new sources add none); `astro build` 138 pages; `check-no-commerce` passed; `check-html` 0 errors.

### 12.1 What was checked, and what held

- **Rows (21 compounds × UK, CA, AU).** Every status, `since`, `authorised_since`, `as_of` and source list matches the
  research row or the research's suggestion for an existing row, with only the deviations this file already records
  as lead decisions: tesamorelin CA `since` 2022-09-30 (research 2023-07-13; the fact-check left the choice to the
  editor) and `ca-dsc-egrifta-discontinuation-170025` dropped; `ca-lnhpd-nr-licence` dropped from the NAD+ CA row;
  RA-82047 replaced by `ca-hc-recalls-database` (GHK-Cu CA); `ca-dpd-extract-search-merge-2026-10-24` added to the batch
  d CA rows. Semaglutide UK `since` 2018-02-08 and tirzepatide UK `since` 2022-09-26 are the research's suggestions.
- **Schedules.** All 11 schedule fields (AU S4: aod-9604, bpc-157, hexarelin, ipamorelin, melanotan-ii, semaglutide,
  tb-500, tirzepatide; CA Prescription Drug List: semaglutide, tesamorelin, tirzepatide) match the research's code,
  dates and sources; the shortened reader notes say nothing the research does not. The three PDL dates were re-read on
  hpr-rps.hres.ca/pdl-phu.php today (Semaglutide 2018-03-12, Tirzepatide 2023-03-08, "Tesamorelin or its salts or
  derivatives" 2014-04-25). Omitted by the lead's rule, as recorded: CJC-1295, tesamorelin, retatrutide, GHK-Cu (AU).
- **Sources.** 539 refocus entries = the 560 research ids minus the 20 dropped (1.3) minus the 2 already registered
  (1.2), plus the merge's own search record. No duplicate id in `src/data/sources/`; every merged entry's type,
  authors, title, container, year, URL, DOI, PMID, language and `verified` equal the research copy, except the
  documented HPRA short address (whose `accessed` moved to 2026-10-24); no research note was lost or shortened. Shared
  URLs are intentional (sections of one Act on legislation.gov.au; per-batch DPD-extract and submissions-under-review
  search records). The refocus files are LF with a final newline. (`kpv.yaml`, `semaglutide.yaml` and `shared.yaml`
  in `src/data/sources/` are CRLF in the working copy; not merge files, untouched.) Stale "HOST NOT ALLOWLISTED" phrases
  remain in about 150 notes; the file headers say so, and notes are not rendered on the site.
- **Product labels.** Every label URL was fetched. FDA labels (209637s038 "Revised: 05/2026", 213051Orig1s030,
  218316s007), the MHRA substance pages (rendered in the browser: SEMAGLUTIDE lists Ozempic, Rybelsus and Wegovy pens
  and tablets; TIRZEPATIDE lists Mounjaro pens, vials and KwikPens, each with its SmPC and leaflet files), the ARTG
  entries (308324, 346198, 356286, 439430) and the Egrifta monograph 00029988 (still the one the DHPP page links for
  cancelled DIN 02438712) are the official product information. Problems are in 12.2.
- **jurisdictions.yaml.** CA, AU, IE and NZ match the research proposals (canada-legal 14, australia-legal 11.4,
  ireland-nz, feeds-help-extras 2.1 to 2.10), including the emergency numbers as data (CA 911; AU 000, 112; IE 112, 999;
  NZ 111) and the reporting routes the brief names. All 61 URLs of the US, UK, CA, AU, IE and NZ entries were fetched:
  57 answered HTTP 200 with the named service's page; legislation.govt.nz (AWS WAF challenge to scripts) loaded the
  Medicines Act 1981 in the browser ("Latest version as at 10 July 2026"); SAMHSA (403 also in the browser),
  health811.ontario.ca (403) and sportintegrity.nz (Cloudflare check, not bypassed) are the known exceptions of
  section 4. The built US and UK cards print no emergency number (only service names such as "NHS 111").
- **Built pages** (tesamorelin, semaglutide, tirzepatide, pt-141, ss-31, thymosin-alpha-1, bpc-157): badge,
  At-a-glance tile, fact sheet "Approved in", status table and products table agree with the data. Tesamorelin reads
  exactly as the spec ("Approved in the US. Canada approved it, but it is no longer sold there. Not approved in the UK
  or Australia. Only with a prescription."; fact sheet "US since 2010; Canada 2014–2022"; CA row "Approved 29 April
  2014 · no longer sold since 30 September 2022"; Egrifta CA tagged "No longer sold"). Prose issues for the content
  groups, not data: the hard-coded line "All statuses were checked on 22 October 2026" under the tesamorelin, pt-141,
  thymosin-alpha-1 and bpc-157 tables (the CA, AU and UK rows say 23 October 2026); EU/Netherlands paragraphs in the
  pt-141 "Why this page looks different" note and under the ss-31 and thymosin-alpha-1 tables; thymosin-alpha-1's
  duplicate fact-sheet row "Approved in Italy, and some countries in Asia and elsewhere"; the "Schedule Prescription
  Drug List" / "Schedule S4" string (section 10).

### 12.2 Errors found and fixed (same files)

1. **Canadian generics linked a decision summary, not product information.** The DPD is still down, but Health
   Canada's Drug and Health Product Portal mirrors its product pages at `dhpp.hpfb-dgpsa.ca/dhpp/resource/<drug code>`
   (the Apo-Semaglutide decision summary links "/dhpp/resource/107037"), and each page links the product monograph.
   Dr. Reddy's, Apo-Semaglutide and Sevmia now link their monographs (00084444, 00084514, 00085157).
2. **Superseded Canadian monographs.** The same pages link newer monographs than the archive copies the research
   used, each with "1 Indications" among its recent major label changes: Ozempic 00085314 and Rybelsus 00085311
   (13 July 2026), Wegovy 00086293 (2 October 2026), Plosbrio 00085721 (6 August 2026), Mounjaro 00085122 (23 June
   2026, with the paediatric indication: resolves the research's UNRESOLVED point) and Zepbound 00084997 (11 June
   2026). `label_url` and `label_source` updated; the old `ca-pm-*` entries stay as the research record.
3. **Four Canadian semaglutide products restored** (dropped only because the DPD page could not be opened): Poviztra
   (00082882, 22 December 2025), Aspen-Semaglutide (00085376, 17 July 2026), Semaglutide Injection (Aspen) (00085867,
   25 August 2026), Sandoz Semaglutide (00086140, 16 September 2026). Every generic monograph says "Produced by
   solid-phase synthetic chemistry", which resolves the research's open point on the Aspen and Sandoz products.
4. **Plosbrio and Poviztra (AU) restored.** Section 3.1's reason ("no PI, registration record or other TGA page gives
   their indications") does not hold: each ARTG entry links a public summary whose "Specific Indications" give them
   (Plosbrio = Ozempic's type 2 diabetes and kidney indications; Poviztra = Wegovy's, without the provisional MASH one).
5. **Indication lines** (frontmatter of the en pages, written from the documents above): ozempic-ca gained the kidney
   indication it lacked; plosbrio-ca gained the heart and kidney indications of the August 2026 monograph; sevmia-ca
   gained "lowers the risk of a non-fatal heart attack ..." (its monograph has it); zepbound-ca gained obstructive
   sleep apnoea (June 2026 monograph); mounjaro-au gained "children from 10 who weigh 50 kg or more" (ARTG public
   summary of 439430, record effective 7 October 2026; the research had this indication as still under evaluation);
   new lines for poviztra-ca, aspen-semaglutide-ca, semaglutide-injection-aspen-ca, sandoz-semaglutide-ca, plosbrio-au
   and poviztra-au. The content groups may reword them.
6. `src/content/compounds/en/semaglutide.mdx` was CRLF on disk; now LF (git sees no change from that).

Files changed by this check: `src/data/compounds/semaglutide.yaml`, `src/data/compounds/tirzepatide.yaml`,
`src/content/compounds/en/semaglutide.mdx`, `src/content/compounds/en/tirzepatide.mdx`, new
`src/data/sources/en-merge-check.yaml`, and this section. Nothing was removed (no-loss: no row, product, study or
source id dropped; the replaced label sources stay registered).

### 12.3 New facts and their source ids (all in `src/data/sources/en-merge-check.yaml`, read 24 October 2026)

| Fact | Source id |
|---|---|
| DHPP product pages: name, company, DIN, status and status date, monograph number for drug codes 106683, 107018, 107038, 107181, 107213, 107302, 107355 | `ca-dhpp-semaglutide-product-pages-2026-10-24` |
| Dr. Reddy's, Apo-Semaglutide, Sevmia, Poviztra, Aspen-Semaglutide, Semaglutide Injection (Aspen), Sandoz Semaglutide: monograph dates, synthesis and indications | `ca-pm-semaglutide-injection-drreddys`, `ca-pm-apo-semaglutide`, `ca-pm-sevmia`, `ca-pm-poviztra`, `ca-pm-aspen-semaglutide`, `ca-pm-semaglutide-injection-aspen`, `ca-pm-sandoz-semaglutide` |
| Current Ozempic, Rybelsus, Wegovy, Plosbrio, Mounjaro, Zepbound monographs (dates, control numbers, indications) | `ca-pm-ozempic-2026-07-13`, `ca-pm-rybelsus-2026-07-13`, `ca-pm-wegovy-2026-10-02`, `ca-pm-plosbrio-2026-08-06`, `ca-pm-mounjaro-2026-06-23`, `ca-pm-zepbound-2026-06-11` |
| ARTG public summaries: indications of Plosbrio, Poviztra, Rybelsus, Ozempic, Wegovy and Mounjaro (incl. children from 10 weighing 50 kg or more) | `au-artg-public-summaries-semaglutide-tirzepatide-2026-10-24` |

Sevmia: the decision summary's "Date of Decision" is 2026-06-25 (kept as `authorised`), its monograph's "Date of
Authorization" 2026-06-29. Plosbrio and Poviztra are authorised but not marketed in Canada (DHPP/DPD status
"Approved"); why the second brands exist is still not stated by either regulator.

### 12.4 Still open (for the lead, the legal reviewer and the content groups)

- Section 8's re-checks are still needed when the DPD, NOC and LNHPD are back, but the DHPP product pages
  (`/dhpp/resource/<code>`) answer and can replace the DPD product page for monograph links. Code 107037 (one
  Apo-Semaglutide strength) and, intermittently, 102190 and 106679 time out (HTTP 522).
- Indications in the UK lines for Ozempic and Rybelsus remain minimal (UK SmPCs not read; emc not allowlisted; the
  MHRA PDFs sit behind a disclaimer).
- Rybelsus, Plosbrio and Poviztra ARTG entries link no product information; the products table links the ARTG entry
  (which links the public summary). The link text "Product information (AU)" is therefore slightly generous for those
  three.
- Lead decisions not changed: tesamorelin CA `since` (end of marketing) and no "business reasons"; no AU schedule for
  CJC-1295, tesamorelin, retatrutide and GHK-Cu; emc not allowlisted; the semaglutide UK row cites `ema-epar-ozempic`
  for its 2018 date (residue to be marked by the content group if a sentence uses it).
- Residue grep on the merge's added lines: only the known comment hits (semaglutide UK row comment, IE comment) and the
  three real document titles in section 10; nothing reader-facing was added by this check.
