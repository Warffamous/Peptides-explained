# Research notes — refocus assignment `feeds-help-extras`

Supporting facts for the English refocus (readers in the US, UK, Canada and Australia; notes for Ireland and New
Zealand): regulator news feeds, help services and reporting routes, sharps disposal, timeline and tracker candidates,
and photo candidates.

- **Runs.** First run 23 October 2026 (evening, cut off before this file was written; it left
  `sources/extras.yaml` with sections 1 and 2 only). Second run 24 October 2026: re-tested every feed, re-read the help
  pages, corrected the draft (section 8), and added sections 3 to 5. Sources read in the second run carry
  `accessed: 2026-10-24`.
- **Sources.** Every fact below carries a source id. New ids are in `research/refocus/sources/extras.yaml` (89
  entries after the fact-check, which added 3; shape checked against `sourceSchema`, no id collides with `src/data/sources/` or another refocus file).
  Reused ids are listed in section 0.
- **How pages were read.** curl and Node fetch for most pages; GOV.UK's content and search APIs; the Wikimedia Commons
  API; PubMed and Crossref for science; the built-in browser (own tab) for sites that block scripts (TGA feed page,
  Poison Help, poisons.ie, the National Archives catalogue, the ACT Recyclopaedia); Internet Archive captures where a
  live page refused both (dates in the notes). PDFs were downloaded and read with pdftotext.
- **No phone numbers are printed on the English site.** The numbers the assignment asked for are in section 2.9 only,
  marked "not for print".
- **Nothing under `src/`, `config/`, `docs/` or `scripts/` was edited.** Proposed data entries (feeds, help,
  timeline, tracker, photos) are drafts for the editor.

---

## 0. Reused source ids (not repeated in `extras.yaml`)

| Topic | Ids | File |
|---|---|---|
| US reporting, sharps, history | `fda-medwatch`, `fda-sharps-disposal-steps`, `fda-sharps-dos-donts`, `fda-sharps-containers`, `fda-sharps-no-container`, `fda-history-milestones`, `us-pl-87-781-drug-amendments-1962`, `fda-kelsey-history`, `vargesson-2015-thalidomide` | `src/data/sources/legal-b.yaml`, `safety-a.yaml`, `history.yaml`, `about.yaml` |
| US enforcement | `fda-category-2-safety-risks`, `fda-503a-categories-2026-05`, `fda-pcac-2026-07-meeting`, `fda-pcac-2027-early-announcement`, `fda-warning-letters-index`, `fda-2024-compounded-semaglutide-dosing-errors`, `fda-unapproved-glp1-concerns`, `fda-glp1-compounding-policy`; `fda-2026-03-telehealth-warning-letters` | `src/data/sources/*`; `research/refocus/sources/us-uk-routes.yaml` |
| UK | `mhra-yellow-card`, `nhs-poisoning`, `govuk-clinical-waste-collection`, `mhra-2023-fake-weight-loss-pens`, `mhra-2025-retatrutide-seizure`, `mhra-2026-01-seizures-2025`, `mhra-2026-falsified-mounjaro`, `mhra-2026-05-largest-seizure`, `mhra-2026-07-no-summer-shortcut`, `mhra-2026-10-counterfeit-pens`; `nhs-111` | `src/data/sources/*`; `us-uk-routes.yaml` |
| Canada | provincial health lines `ca-help-*`, `ca-infopoison-centres`, `ca-poison-*`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `ca-hc-complaints`, `ca-hc-recalls-database`, `ca-hc-2025-01-semaglutide-pyridoxine-recall`, `ca-hc-2025-glp1-compounding-position`, `ca-hc-2026-01-glp1-advisory`, `ca-hc-2026-05-ghk-cu-bpc-157-api-recall`, `ca-hc-2026-07-injunction-statement` (DO NOT CITE DIRECTLY), `ca-cpsa-2026-04-injectable-peptides`, `ca-sic-2026-04-peptides-reminder`; `ca-hc-2026-04-think-twice-peptides` | `canada.yaml`; `status-b.yaml` |
| Australia | `au-tga-report-adverse-event`, `au-nsw-poisons-information-centre`, `au-tga-media-releases-peptide-log-2026-10-24`, `au-tga-2024-03-south-yarra-pharmacy-warrant`, `au-tga-2026-04-vic-pied-arrests`, `au-abf-2026-08-pied-charges`, `au-tga-2026-07-peptide-promoters-notice` (DO NOT LINK), `au-tga-2026-09-retatrutide-counterfeit`, `au-tga-2026-09-personal-import-packaging`, `au-tga-2026-10-prescription-import-infringements`, `au-tg-amendment-2026-measures-1`, `au-tga-compounded-medicines-guidance`; `au-tga-2026-04-peptide-responsibilities`, `au-tga-2026-06-cmo-peptide-statement`, `au-tga-2026-08-peptide-seizure`; `au-tga-peptide-products-hub`, `au-tga-2026-05-peptide-import-warning`, `au-tga-2026-05-melanotan-ii-infringement-notices`, `au-tga-2026-08-melanotan-ii-safety-alert`, `au-tga-2025-01-melanotan-blog`, `au-tga-2024-05-scheduling-final-decisions`, `au-tga-2024-05-final-decisions-notice`; `au-tga-2026-06-peptide-compliance-priority` | `australia.yaml`; `status-b.yaml`; `status-c.yaml`; `status-d.yaml` |
| Ireland, New Zealand | `ie-hse-urgent-emergency-care`, `ie-hse-anabolic-steroids-reducing-harm`, `ie-npic-poisons`, `ie-hpra-report-side-effect`, `ie-hpra-reporting-as-patient`, `nz-healthnz-healthline`, `nz-national-poisons-centre`, `nz-medsafe-report-a-problem`, `nz-medsafe-adr-report-processing`, `nz-otago-nzphvc-carm`, `nz-medsafe-2026-05-peptide-advisory` | `ireland-nz.yaml` |
| Canada, afamelanotide | Scenesse approved in Canada 9 July 2026 (Canada row and its sources) | `research/refocus/status/melanotan-ii.yaml` |

---

## 1. News feeds (MHRA, Health Canada, TGA)

### 1.1 Test results (24 October 2026)

Method: a Node script that fetches and parses each feed exactly as `scripts/fetch-news.ts` does (Node `fetch`, the
fetcher's own User-Agent `PeptidesExplained-newsfeed/1.0 …` and Accept header, `fast-xml-parser`, the keyword list in
`src/data/feeds.yaml`), plus WebFetch for the UK and Canadian feeds, plus the built-in browser for the TGA. "Hits" = items
that pass the site's keyword filter. Dates are local publication dates.

| Feed | URL | HTTP / format | Items | Newest | Oldest | Hits | Verdict | Source id |
|---|---|---|---|---|---|---|---|---|
| MHRA news and communications (GOV.UK) | `https://www.gov.uk/search/news-and-communications.atom?organisations%5B%5D=medicines-and-healthcare-products-regulatory-agency` | 200, Atom 1.0 | 20 | 23 Oct 2026 | 22 Sep 2026 | 1 | **Use** (enforcement releases) | `uk-mhra-feed-news-atom` |
| MHRA Drug Safety Update | `https://www.gov.uk/drug-safety-update.atom` | 200, Atom 1.0 | 50 | 20 Oct 2026 | 29 May 2024 | 6 (all GLP-1) | **Use** | `uk-mhra-feed-drug-safety-update-atom` |
| MHRA alerts, recalls and safety information | `https://www.gov.uk/drug-device-alerts.atom` | 200, Atom 1.0 | 50 | 19 Oct 2026 | 23 Jun 2026 | 0 | Low yield (devices, batch recalls) | `uk-mhra-feed-alerts-atom` |
| MHRA organisation activity | `https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency.atom` | 200, Atom 1.0 | 20 | 23 Oct 2026 | 15 Oct 2026 | 1 | Too noisy; 8-day window | `uk-mhra-feed-organisation-atom` |
| Health Canada news (Canada News Centre) | `https://api.io.canada.ca/io-server/gc/news/en/v2?dept=departmentofhealth&sort=publishedDate&orderBy=desc&publishedDate%3E=2021-07-23&pick=50&format=atom&atomtitle=Health%20Canada` | 200, Atom | 50 | 20 Oct 2026 | 29 May 2026 | 2 | Use, after allowlisting `www.canada.ca` | `ca-hc-feed-news-atom`, `ca-gc-news-web-feeds-page` |
| Health Canada recalls and alerts: health products | `https://recalls-rappels.canada.ca/en/feed/health-products-alerts-recalls` | 200, RSS 2.0 | **3** | 21 Oct 2026 | 21 Oct 2026 | 0 | **Not suitable alone** (only the latest 3 items; ISO dates without zone) | `ca-hc-feed-recalls-health-products-rss`, `ca-hc-recalls-rss-page` |
| Health Canada recalls open data (JSON) | `https://recalls-rappels.canada.ca/sites/default/files/opendata-donneesouvertes/HCRSAMOpenData.json` | 200, JSON, 15.8 MB, regenerated daily | 34,285 records | 22 Oct 2026 | (all years) | contains every peptide advisory | Complete alternative; needs a new fetcher kind | `ca-hc-recalls-open-data` |
| TGA safety alerts | `https://www.tga.gov.au/feeds/alert/safety-alerts.xml` | 200, RSS 2.0 | 50 | 14 Sep 2026 | 4 Dec 2024 | **17** | **Use** (peptide, melanotan, retatrutide, GLP-1 alerts) | `au-tga-feed-safety-alerts-rss`, `au-tga-rss-feeds-page` |
| TGA media releases | `https://www.tga.gov.au/feeds/article/media-releases.xml` | 200, RSS 2.0 | 50 | 14 Oct 2026 | 5 Nov 2025 | 11 | **Use** (enforcement); needs a name filter (1.3) | `au-tga-feed-media-releases-rss` |
| TGA all alerts | `https://www.tga.gov.au/feeds/alert.xml` | 200, RSS 2.0 | 50 | 16 Oct 2026 | 19 Dec 2025 | 9 | Use safety alerts instead | `au-tga-feed-alerts-all-rss` |
| TGA news articles | `https://www.tga.gov.au/feeds/article/news.xml` | 200, RSS 2.0 | 50 | 21 Oct 2026 | 24 Sep 2025 | 0 | Low yield | `au-tga-feed-news-rss` |
| TGA consultations | `https://www.tga.gov.au/feeds/consultation.xml` | 200, RSS 2.0 | 50 | 12 Oct 2026 | 22 Jul 2024 | 0 | For the tracker, not headlines; two-digit years in pubDate | `au-tga-feed-consultations-rss` |

The TGA scheduling-decisions feeds also work (final decisions: 50 items, newest 25 September 2026; interim: 41 items,
newest 9 June 2026) but carried no peptide covered by the site in 2026 (section 4.3).

### 1.2 Answers to the assignment's questions

- **MHRA:** yes. GOV.UK publishes working Atom feeds for MHRA news, Drug Safety Update and alerts. Recommended: news
  and communications (enforcement releases such as the 15 October 2026 seizure) and Drug Safety Update (GLP-1 safety
  communications). The alerts feed is almost all device notices. (`uk-mhra-feed-*`)
- **Health Canada:** partly. The departmental news feed (Atom) works and is complete for news releases and statements
  (`ca-hc-feed-news-atom`), but the recalls-and-alerts RSS feed shows only the newest three health-product items, so it
  loses advisories on busy days (`ca-hc-feed-recalls-health-products-rss`). The advisories (RA-74731 to RA-82047, the
  peptide ones included) are complete only in the open-data JSON (`ca-hc-recalls-open-data`).
- **TGA:** yes. The official RSS feeds work (`au-tga-rss-feeds-page`). **The first run's "live test failed" was a
  local problem, not the TGA's:** curl and PowerShell on Windows (schannel) hang after the TGA's edge server asks for
  TLS renegotiation, and WebFetch timed out too; Node's fetch (the site's fetcher) and a browser both get HTTP 200
  with 50 items. Whether the GitHub Actions runner gets through is UNRESOLVED until the first CI run.

### 1.3 Proposed `src/data/feeds.yaml` entries (draft, not written)

```yaml
  - id: mhra-news
    name: MHRA (UK) — news and press releases
    kind: atom
    url: https://www.gov.uk/search/news-and-communications.atom?organisations%5B%5D=medicines-and-healthcare-products-regulatory-agency
    homepage: https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency
    category: regulator
    jurisdiction: UK
    peer_reviewed: false
    require_any: [use-keywords]
    max_items: 15
    why: The UK medicines regulator. Approvals, safety communications and enforcement against illegal medicines.
  - id: mhra-drug-safety-update
    name: MHRA (UK) — Drug Safety Update
    kind: atom
    url: https://www.gov.uk/drug-safety-update.atom
    homepage: https://www.gov.uk/drug-safety-update
    category: regulator
    jurisdiction: UK
    peer_reviewed: false
    require_any: [use-keywords]
    max_items: 10
    why: The MHRA's monthly safety bulletin for health professionals (GLP-1 warnings, falsified pens).
  - id: tga-safety-alerts
    name: TGA (Australia) — safety alerts
    kind: rss
    url: https://www.tga.gov.au/feeds/alert/safety-alerts.xml
    homepage: https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts
    category: regulator
    jurisdiction: AU
    peer_reviewed: false
    require_any: [use-keywords]
    max_items: 15
    why: Australia's medicines regulator. Alerts on unapproved peptides, melanotan, counterfeit GLP-1 products.
  - id: tga-media-releases
    name: TGA (Australia) — media releases
    kind: rss
    url: https://www.tga.gov.au/feeds/article/media-releases.xml
    homepage: https://www.tga.gov.au/news/media-releases
    category: regulator
    jurisdiction: AU
    peer_reviewed: false
    require_any: [use-keywords]
    max_items: 15
    why: Enforcement actions (seizures, infringement notices, court cases) and rule changes.
  - id: health-canada-news
    name: Health Canada — news
    kind: atom
    url: https://api.io.canada.ca/io-server/gc/news/en/v2?dept=departmentofhealth&sort=publishedDate&orderBy=desc&publishedDate%3E=2021-07-23&pick=50&format=atom&atomtitle=Health%20Canada
    homepage: https://www.canada.ca/en/health-canada/news.html
    category: regulator
    jurisdiction: CA
    peer_reviewed: false
    require_any: [use-keywords]
    max_items: 15
    why: Canada's medicines regulator. Approvals, statements and enforcement (injunctions).
```

Notes for the editor and the fetcher:

1. **Allowlist.** The fetcher drops any item whose link host is not on `config/link-allowlist.json`. GOV.UK items
   (`.gov.uk`) and TGA items (`www.tga.gov.au`) pass today. **Every Health Canada item links to `www.canada.ca`, which
   is not allowlisted, so the Canadian feed would keep nothing** until `www.canada.ca` (and, for advisories,
   `recalls-rappels.canada.ca`) is added. The `homepage` URL in the draft is on `www.canada.ca` too; the fact-checker
   opened it on 24 October 2026: HTTP 200, title "News" (`ca-hc-feed-news-atom`).
2. **Seller names in titles.** Two current items name a business in the title: Health Canada's 29 July 2026 injunction
   statement and the TGA's 28 September 2026 release on Federal Court proceedings. The commerce check only catches
   tokens such as "suppliers" (it does drop the TGA's 20 July 2026 "promoters and suppliers" release), not company
   names. Options: a per-feed `exclude` list in the fetcher, a manual block list in `news.json`, or accepting the
   regulator's own headline. Editor's decision (CONTENT-GUIDE seller rule).
3. **Health Canada advisories.** For RA-numbered advisories (the peptide warnings), either accept the 3-item RSS feed
   (losses on busy days) or add a `kind: json` reader for the open-data file (filter `Last updated` within the window,
   the health-product Category values such as `Drugs`, `Natural health products` and `Biologic or vaccine`, and the
   keywords; the file has no Category called "Health products", corrected by the fact-checker). The file is 15.8 MB;
   download once a day.
4. **Dates.** The Canadian recalls RSS uses ISO dates without a time zone (parsed as runner-local time; UTC in CI). The
   TGA consultations feed uses two-digit years ("12 Oct 26"); Node reads it as 2026.
5. **Volume.** MHRA news keeps only 20 entries (about a month), so the daily CI run is needed; the TGA feeds keep 50.

---

## 2. Help services, reporting and sharps disposal

### 2.0 Rules applied

Names and official URLs only in the tables; numbers only in 2.9. "Urgent advice" = a nurse or clinician advice line for
problems that are not emergencies. Emergencies: the site says "call your local emergency number". A service whose name
contains digits (NHS 111, Health811, 13 HEALTH, 9-8-8, 1737) is listed by name; whether a name with digits may be printed
is the editor's call (content brief allows naming them).

### 2.1 United States

| Need | Service (official URL) | Source id | Notes |
|---|---|---|---|
| Urgent advice | **No national nurse line.** Your own provider or insurer may offer a nurse advice line; MedlinePlus explains when to use the emergency room vs urgent care (https://medlineplus.gov/ency/patientinstructions/000593.htm) | `us-medlineplus-when-to-use-er` | |
| Poisons | Poison Help, HRSA (https://poisonhelp.hrsa.gov/): 24/7, over 100 languages, connects to the local poison center | `us-hrsa-poison-help`, `us-hrsa-poison-help-about` | Read live, 24 Oct; "connects to your local poison center" is on the About Us page |
| Drugs and alcohol | SAMHSA National Helpline (https://www.samhsa.gov/find-help/helplines/national-helpline): free, confidential, 24/7 treatment referral and information, English and Spanish; FindTreatment.gov (https://findtreatment.gov/) | `us-samhsa-national-helpline`, `us-findtreatment-gov` | samhsa.gov blocks scripts and the browser; archive capture 11 Oct 2026 |
| Mental health crisis | 988 Suicide & Crisis Lifeline (https://988lifeline.org/): call, text or chat, 24/7; also for alcohol or drug concerns | `us-988-lifeline-about`, `us-samhsa-988` | Name contains the number |
| Side effects | FDA MedWatch (consumer form FDA 3500B; your doctor is not required to report, you may report yourself) | `fda-medwatch`, `us-fda-reporting-serious-problems` | |

### 2.2 United Kingdom (differences between the four nations)

| Need | England | Scotland | Wales | Northern Ireland |
|---|---|---|---|---|
| Urgent advice | NHS 111 (111 online, NHS App or phone) — `nhs-111` | NHS 24 111 — `uk-scot-suicide-prevention-support`, `uk-scot-nhsinform-injecting-advice` | NHS 111 Wales (https://111.wales.nhs.uk/) — `uk-wales-nhs-111` | **No 111 line**: the GP out-of-hours service (https://www.nidirect.gov.uk/articles/gp-out-hours-service) — `uk-ni-gp-out-of-hours` |
| Poisons | The National Poisons Information Service does not advise the public: use NHS 111 or your GP — `uk-npis-members-of-public`, `nhs-poisoning` | NHS 24 or your GP — `uk-npis-members-of-public` | NHS 111 Wales (NPIS still names the old NHS Direct Wales: out of date) — `uk-npis-members-of-public`, `uk-wales-nhs-111` | Your GP or pharmacist, or GP out of hours — `uk-npis-members-of-public` |
| Drugs and alcohol | FRANK (https://talktofrank.com/contact-frank): 24/7, text, chat, 120 languages; your GP or local drug service — `uk-frank-contact`, `uk-nhs-drug-addiction-help` | No single national line: local services through NHS inform's directory; GP; pharmacy — `uk-scot-nhsinform-drug-support` | DAN 24/7, bilingual helpline (https://dan247.org.uk/) — `uk-wales-dan-247` | Self-referral to local services; GP, pharmacist; the Lifeline helpline — `uk-ni-drug-alcohol-help` |
| Mental health crisis | NHS 111, mental health option — `uk-nhs-urgent-help-mental-health` | NHS 24 111 Mental Health Hub (24/7); Breathing Space (16+, evenings and weekends) — `uk-scot-suicide-prevention-support`, `uk-scot-breathing-space` | NHS 111 press 2 (24/7, all ages, since 20 June 2023) — `uk-wales-2023-111-press-2` | Lifeline (24/7 crisis line, https://www.health-ni.gov.uk/articles/signposts-help) — `uk-ni-signposts-help` |
| UK-wide | Samaritans (https://www.samaritans.org/how-we-can-help/contact-samaritan/): free, any time, UK and Ireland — `uk-samaritans-contact` | | | |
| Side effects | Yellow Card (https://yellowcard.mhra.gov.uk/), the whole UK — `mhra-yellow-card` | | | |

UNRESOLVED: who runs FRANK (no operator statement on the pages read); who funds DAN 24/7.

### 2.3 Canada (federal, with provincial lines)

| Need | Service | Source id | Notes |
|---|---|---|---|
| Urgent advice | **Provincial and territorial**, no federal line: HealthLink BC, Health Link (Alberta), HealthLine (Saskatchewan), Health Links – Info Santé (Manitoba), Health811 (Ontario), Info-Santé 811 (Québec), Tele-Care 811 (New Brunswick), 811 (Nova Scotia, PEI, Yukon, NWT), HealthLine 811 (Newfoundland and Labrador); Nunavut UNRESOLVED | `ca-help-*` (canada.yaml; table in canada-legal.md 14.1) | Some provincial pages not read (403/bot check), see canada-legal.md |
| Poisons | Five regional poison centres, 24/7; directory at https://infopoison.ca/centres/; in Nunavut the public calls the local health centre | `ca-infopoison-centres`, `ca-poison-*` | Re-read 24 Oct for 2.9 |
| Drugs and alcohol | **No single government helpline.** Health Canada's directory "Get help with substance use" (https://www.canada.ca/en/health-canada/services/substance-use/get-help-with-substance-use.html): Canada-wide referral and peer services, the National Overdose Response Service, provincial services, Indigenous programmes | `ca-hc-get-help-substance-use` | URL and title CORRECTED (8) |
| Mental health crisis | 9-8-8: Suicide Crisis Helpline (https://988.ca/), call or text, 24/7, English and French, since 30 November 2023; PHAC "Get help with mental health" page lists provincial lines, Kids Help Phone, Hope for Wellness Help Line | `ca-988-helpline`, `ca-phac-2023-988-launch`, `ca-phac-mental-health-get-help` | Name contains the number |
| Side effects | Canada Vigilance Program / MedEffect: anyone can report, online, by mail or with a health professional | `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance` | |

### 2.4 Australia

| Need | Service | Source id | Notes |
|---|---|---|---|
| Urgent advice | healthdirect (https://www.healthdirect.gov.au/how-healthdirect-can-help-you): registered nurses 24/7, government-funded; called Nurse-on-Call in Victoria (https://www.health.vic.gov.au/primary-care/nurse-on-call); Queensland has 13 HEALTH (https://www.qld.gov.au/health/contacts/advice/13health) | `au-healthdirect-helpline`, `au-vic-nurse-on-call`, `au-qld-13health` | |
| Poisons | Poisons Information Centre, one national line, 24/7, answered by state centres (NSW centre: https://www.poisonsinfo.nsw.gov.au/) | `au-healthdirect-poisoning`, `au-nsw-poisons-information-centre` | |
| Drugs and alcohol | National Alcohol and Other Drug Hotline (https://www.health.gov.au/contacts/national-alcohol-and-other-drug-hotline): 24/7, routes to the state or territory service; from South Australia, 8.30am to 10pm only | `au-health-aod-hotline` | Read live 24 Oct |
| Mental health crisis | Lifeline (24/7 phone, text, chat), Suicide Call Back Service, 13YARN (Aboriginal and Torres Strait Islander people), Medicare Mental Health — all listed on healthdirect's "Mental health helplines" | `au-healthdirect-mental-health-helplines` | |
| Side effects | TGA: report an adverse event or safety problem (https://www.tga.gov.au/safety/report-problem/report-adverse-event-or-safety-problem); consumers report online (Adverse Event Management System) or with a GP or pharmacist | `au-tga-report-adverse-event`, `au-tga-report-adverse-events-consumers` | |

### 2.5 Ireland (notes)

| Need | Service | Source id |
|---|---|---|
| Urgent advice | **No national nurse line.** GP, GP out-of-hours, injury units, emergency departments (HSE directory) | `ie-hse-urgent-emergency-care` |
| Poisons | National Poisons Information Centre (https://www.poisons.ie/): public line 8am to 10pm every day; professionals 24 hours | `ie-npic-poisons`, `ie-npic-contact` |
| Drugs and alcohol | HSE Drugs and Alcohol Helpline (https://www2.hse.ie/services/habit-addiction/drugs-and-alcohol-helpline/): free, confidential, weekdays 9.30am to 5.30pm, email | `ie-hse-drugs-alcohol-helpline` |
| Mental health crisis | HSE page lists Samaritans (24/7, samaritans.ie), Text About It (24/7 text service), Childline; GP or GP out of hours | `ie-hse-mental-health-urgent-help` |
| Side effects | HPRA (https://www.hpra.ie/report-an-issue/medicines-for-human-use/side-effects): anyone can report | `ie-hpra-report-side-effect`, `ie-hpra-reporting-as-patient` |

### 2.6 New Zealand (notes)

| Need | Service | Source id |
|---|---|---|
| Urgent advice | Healthline (https://www.healthnz.govt.nz/online-phone-healthcare/healthline): free, 24/7, nurses and paramedics | `nz-healthnz-healthline` |
| Poisons | National Poisons Centre (https://poisons.co.nz/): free, 24/7 (University of Otago) | `nz-national-poisons-centre` |
| Drugs and alcohol | Alcohol Drug Helpline (https://alcoholdrughelp.org.nz/, run by Whakarongorau Aotearoa for Health NZ): phone or text | `nz-healthnz-mental-health-where-to-get-help`, `nz-healthnz-national-telehealth-service` |
| Mental health crisis | 1737 (call or text, paid counsellors, 24/7); local crisis teams; suicide crisis helpline | `nz-healthnz-mental-health-where-to-get-help` |
| Side effects | Medsafe / CARM (https://www.medsafe.govt.nz/safety/report-a-problem.asp): consumers can report online | `nz-medsafe-report-a-problem`, `nz-otago-nzphvc-carm` |

### 2.7 Side-effect reporting routes (one line each, for JurisdictionCards)

| Country | Route (link the landing page) | Source id |
|---|---|---|
| US | FDA MedWatch: https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program | `fda-medwatch`, `us-fda-reporting-serious-problems` |
| UK | Yellow Card: https://yellowcard.mhra.gov.uk/ | `mhra-yellow-card` |
| Canada | Canada Vigilance (MedEffect): https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting.html | `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance` |
| Australia | TGA: https://www.tga.gov.au/safety/report-problem/report-adverse-event-or-safety-problem | `au-tga-report-adverse-event` |
| Ireland | HPRA: https://www.hpra.ie/report-an-issue/medicines-for-human-use/side-effects | `ie-hpra-report-side-effect` |
| New Zealand | Medsafe (CARM): https://www.medsafe.govt.nz/safety/report-a-problem.asp | `nz-medsafe-report-a-problem` |

### 2.8 Sharps disposal

| Where | What the official page says | Source id |
|---|---|---|
| US | Put sharps straight into an FDA-cleared sharps container; when about three-quarters full, follow community guidelines (drop-off at pharmacies, hospitals, health departments; household hazardous-waste sites; mail-back; pick-up); without a container, a heavy-duty plastic household container | `fda-sharps-disposal-steps`, `fda-sharps-dos-donts`, `fda-sharps-containers`, `fda-sharps-no-container` |
| England and Wales | Some councils collect used syringes and other clinical waste (a charge may apply); GOV.UK postcode lookup (the old NHS sharps page redirects there) | `govuk-clinical-waste-collection` |
| Scotland | Return used injecting equipment to an injecting equipment provider; dressings free at pharmacies through the needle exchange service | `uk-scot-nhsinform-injecting-advice` |
| Northern Ireland | Needle and syringe exchange: free, confidential, anonymous, open to people who inject performance and image enhancing drugs; supplies bins and takes back used equipment. Found needles: report to the council. UNRESOLVED: no NI page on home disposal by other users (for example people with diabetes) | `uk-ni-pha-harm-reduction-booklet`, `uk-ni-street-cleaning-needles` |
| Canada | **No Health Canada page found** (search 24 Oct 2026); provincial rules. Ontario: producers must run free collection of sharps in sharps containers at pharmacies and other sites (O. Reg. 298/12). Manitoba: free sharps containers at participating pharmacies. British Columbia: free containers from harm reduction sites; take to a health unit, harm reduction site or pharmacy; if you cannot, close the lid and put it in a secure garbage (last resort) | `ca-on-reg-298-12-sharps`, `ca-mb-safe-needle-disposal`, `ca-bccdc-sharps-disposal` |
| Australia | NSW: public sharps bins, pharmacies, medical centres; a screw-top puncture-proof bottle is acceptable at home. Victoria: needle and syringe programs incl. participating pharmacies; a disposal hotline. Queensland: NSP equipment back to any NSP; people injecting medical, cosmetic or therapeutic substances get containers from their prescriber, clinician, a pharmacy or a medical supplier; in some council areas sealed sharps containers may legally go in the household rubbish bin (check with the council). Western Australia: people who inject return equipment to NSEPs or disposal units; for needles found in the community, if none of those options is possible, a sealed rigid container may go in domestic waste. ACT: **never** in household bins, even sealed; public-toilet sharps containers, drop-off centres, NSP health centres. SA, Tasmania, NT: UNRESOLVED (no state page read; the Tasmanian page tried was 404, SA and NT pages 403/404) | `au-nsw-community-sharps`, `au-vic-needle-syringe-program`, `au-qld-needle-syringe-program`, `au-wa-healthywa-needle-disposal`, `au-act-recyclopaedia-syringes` |
| Ireland | No national sharps scheme; some diabetes centres, GPs, health centres and pharmacies take sharps back; more than 100 pharmacies run needle exchange (archived page only: the live HSE page is now 404) | `ie-hse-2023-pq-sharps` (archived copy only), `ie-hse-pharmacy-needle-exchange` (archived copy only; do not link), `ie-hse-anabolic-steroids-reducing-harm` |
| New Zealand | Approved sharps containers; never in household, public or recycling bins or the toilet; take to a pharmacy (rules vary) | `nz-healthnz-safe-sharps-disposal` |

Point for the writer: the rules **conflict across places**. Queensland (in some council areas, sealed container),
British Columbia (sealed container, as a last resort) and Western Australia (for needles found in the community, as a
last resort) allow household rubbish; the ACT and New Zealand forbid it. A one-line "ask your pharmacy or local council"
rule is safe everywhere. A "never in household rubbish" line is cautious but contradicts official guidance in
Queensland and British Columbia, so it should not be presented as the official rule there (corrected by the
fact-checker).

### 2.9 Numbers (not for print)

For the data (`jurisdictions.yaml` `emergency`) and for checking only. **Never printed on the English site.** Read on
24 October 2026 from the page of the source id given.

| Country | Service | Number(s) | Source id |
|---|---|---|---|
| US | Emergency | 911 (already in `jurisdictions.yaml`; not re-read) | — |
| US | Poison Help | 1-800-222-1222 | `us-hrsa-poison-help` |
| US | SAMHSA National Helpline | 1-800-662-HELP (4357); TTY 1-800-487-4889; text your ZIP code to 435748 | `us-samhsa-national-helpline` (archive 11 Oct 2026) |
| US | 988 Suicide & Crisis Lifeline | call or text 988 | `us-988-lifeline-about` |
| UK | Emergency | 999 (already in data) | `uk-nhs-when-to-call-999` |
| UK | NHS 111 (England), NHS 24 111 (Scotland), NHS 111 Wales | 111 (mental health: England "mental health option", Wales "press 2") | `nhs-111`, `uk-scot-suicide-prevention-support`, `uk-wales-nhs-111`, `uk-nhs-urgent-help-mental-health`, `uk-wales-2023-111-press-2` |
| UK and Ireland | Samaritans | 116 123 | `uk-samaritans-contact`, `ie-hse-mental-health-urgent-help` |
| UK | FRANK | 0300 123 6600; text 82111; textphone 0300 123 1099 | `uk-frank-contact` |
| Scotland | Breathing Space | 0800 83 85 87 | `uk-scot-breathing-space` |
| Wales | DAN 24/7 | 0808 808 2234 | `uk-wales-dan-247` |
| Northern Ireland | Lifeline | 0808 808 8000 | `uk-ni-signposts-help` |
| Northern Ireland | GP out of hours | by area (not recorded) | `uk-ni-gp-out-of-hours` |
| Canada | Emergency | 9-1-1 → data `["911"]` | `ca-phac-mental-health-get-help`, `ca-hc-get-help-substance-use` |
| Canada | 9-8-8: Suicide Crisis Helpline | call or text 9-8-8 | `ca-988-helpline` |
| Canada | Poison centres | 1-844-POISON-X for every province and territory except Québec (Centre antipoison du Québec 1-800-463-5060) and Nunavut (public: local health centre); the digit form of POISON-X is not on the page | `ca-infopoison-centres` |
| Canada | Kids Help Phone; Drug Rehab Services; National Overdose Response Service | 1-800-668-6868 (text 686868); 1-877-254-3348; 1-888-688-NORS (6677) | `ca-hc-get-help-substance-use` |
| Canada | Hope for Wellness Help Line | 1-855-242-3310 | `ca-phac-mental-health-get-help` |
| Canada | Provincial advice lines | 8-1-1 where the name says so (Health811, Info-Santé 811, Tele-Care 811, HealthLine 811, 811 NS/PEI/Yukon/NWT; Alberta Health Link 8-1-1 per PHAC); others not recorded | `ca-help-*`, `ca-phac-mental-health-get-help` |
| Australia | Emergency | 000; 112 from a mobile (same service); 106 by TTY → data `["000", "112"]` | `au-triple-zero` |
| Australia | healthdirect | 1800 022 222 | `au-healthdirect-helpline` |
| Victoria | Nurse-on-Call | 1300 60 60 24 | `au-vic-nurse-on-call` |
| Queensland | 13 HEALTH | 13 43 25 84 | `au-qld-13health` |
| Australia | Poisons Information Centre | 13 11 26 | `au-healthdirect-poisoning` |
| Australia | National Alcohol and Other Drug Hotline | 1800 250 015 | `au-health-aod-hotline` |
| Australia | Lifeline; Suicide Call Back Service; 13YARN | 13 11 14 (text 0477 13 11 14); 1300 659 467; 13 92 76 | `au-healthdirect-mental-health-helplines` |
| Ireland | Emergency | 112 or 999 → data `["112", "999"]` | `ie-hse-mental-health-urgent-help` |
| Ireland | National Poisons Information Centre, public line | 01 809 2166 (8am to 10pm every day) | `ie-npic-contact` |
| Ireland | HSE Drugs and Alcohol Helpline | 1800 459 459 (Mon to Fri 9.30am to 5.30pm) | `ie-hse-drugs-alcohol-helpline` |
| Ireland | Text About It; Childline | text HELLO to 50808; 1800 66 66 66 | `ie-hse-mental-health-urgent-help` |
| New Zealand | Emergency | 111 → data `["111"]` | `nz-healthnz-mental-health-where-to-get-help` |
| New Zealand | Healthline | 0800 611 116 | `nz-healthnz-healthline` (page re-read 24 Oct) |
| New Zealand | National Poisons Centre | 0800 764 766 (0800 POISON) | `nz-national-poisons-centre` (re-read 24 Oct) |
| New Zealand | 1737; Alcohol Drug Helpline; suicide crisis helpline | call or text 1737; 0800 787 797 (text 8681); 0508 828 865 (0508 TAUTOKO) | `nz-healthnz-mental-health-where-to-get-help` |

### 2.10 Proposed `help:` entries for `src/data/jurisdictions.yaml` (draft, not written)

Kinds per `HELP_KINDS`: `urgent-advice`, `poisons`, `drugs-advice`, `mental-health`. URLs are the official landing
pages; most hosts need allowlisting (section 7).

```yaml
# US
  help:
    - { kind: poisons, name: "Poison Help (HRSA)", url: "https://poisonhelp.hrsa.gov/" }
    - { kind: drugs-advice, name: "SAMHSA National Helpline", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" }
    - { kind: mental-health, name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/" }
# UK (one card for the whole UK; the nation differences go in page text)
  help:
    - { kind: urgent-advice, name: "NHS 111 (England)", url: "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-use-111/" }
    - { kind: urgent-advice, name: "NHS 111 Wales", url: "https://111.wales.nhs.uk/" }
    - { kind: drugs-advice, name: "FRANK", url: "https://talktofrank.com/contact-frank" }
    - { kind: mental-health, name: "Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" }
# CA
  emergency: ["911"]
  help:
    - { kind: poisons, name: "Poison centres in Canada", url: "https://infopoison.ca/centres/" }
    - { kind: drugs-advice, name: "Health Canada: get help with substance use", url: "https://www.canada.ca/en/health-canada/services/substance-use/get-help-with-substance-use.html" }
    - { kind: mental-health, name: "9-8-8: Suicide Crisis Helpline", url: "https://988.ca/" }
    # urgent-advice: provincial (canada-legal.md 14.3)
# AU
  emergency: ["000", "112"]
  help:
    - { kind: urgent-advice, name: "healthdirect", url: "https://www.healthdirect.gov.au/how-healthdirect-can-help-you" }
    - { kind: poisons, name: "Poisons Information Centre", url: "https://www.healthdirect.gov.au/healthy-living/toxins-and-poisoning/poisoning" }
    - { kind: drugs-advice, name: "National Alcohol and Other Drug Hotline", url: "https://www.health.gov.au/contacts/national-alcohol-and-other-drug-hotline" }
    - { kind: mental-health, name: "Mental health helplines (healthdirect)", url: "https://www.healthdirect.gov.au/healthcare-and-services/mental-health/mental-health-helplines" }
# IE
  emergency: ["112", "999"]
  help:
    - { kind: urgent-advice, name: "HSE: urgent and emergency care", url: "https://www2.hse.ie/services/urgent-emergency-care/" }
    - { kind: poisons, name: "National Poisons Information Centre", url: "https://poisons.ie/" }
    - { kind: drugs-advice, name: "HSE Drugs and Alcohol Helpline", url: "https://www2.hse.ie/services/habit-addiction/drugs-and-alcohol-helpline/" }
    - { kind: mental-health, name: "HSE: urgent help for a mental health crisis", url: "https://www2.hse.ie/mental-health/services-support/get-urgent-help/" }
# NZ
  emergency: ["111"]
  help:
    - { kind: urgent-advice, name: "Healthline", url: "https://www.healthnz.govt.nz/online-phone-healthcare/healthline" }
    - { kind: poisons, name: "National Poisons Centre", url: "https://poisons.co.nz/" }
    - { kind: drugs-advice, name: "Alcohol Drug Helpline", url: "https://alcoholdrughelp.org.nz/" }
    - { kind: mental-health, name: "Health NZ: where to get help for mental health (1737)", url: "https://www.healthnz.govt.nz/health-topics/mental-health/where-to-get-help" }
```

The `reporting:` field per country is in 2.7. The US entry in the data already has MedWatch, the UK entry Yellow Card.

---

## 3. Timeline candidates

Format follows `src/data/timeline.yaml` (id, year, optional date, category, jurisdictions, compounds, sources); words
go in `src/i18n/en/timeline.json`. The global thalidomide event (`thalidomide-withdrawn`, 1961, []) and the US 1962
amendments (`kefauver-harris-1962`) already exist. One event per jurisdiction's action.

### 3.1 United Kingdom

| Proposed id | Date | Category | Text (draft) | Sources |
|---|---|---|---|---|
| `uk-committee-on-safety-of-drugs` | 1963 (year only) | regulation | After thalidomide, the government sets up an expert Committee on Safety of Drugs to judge new medicines' tests and trials and collect reports of side effects; at first the scheme is voluntary. | `uk-hansard-1963-04-04-safety-of-drugs` (government accepts the recommendation, 4 April 1963), `uk-tna-mh171-csd-csm` ("set up in 1963") |
| `uk-yellow-card` | 1964 (year only) | safety | The Yellow Card scheme starts: doctors report suspected side effects to give early warning of hazards. Introduced by Sir Derrick Dunlop, chair of the Committee on Safety of Drugs. | `uk-mhra-2014-yellow-card-50`, `uk-mhra-2015-yellow-card-digital` |
| `uk-medicines-act-1968` | 1968-10-25 | regulation | The Medicines Act puts medicines licensing into law. | `uk-medicines-act-1968-enacted` |
| `uk-mhra-formed` | 2003-04-01 | regulation | The Medicines Control Agency and the Medical Devices Agency merge into the MHRA. | `uk-si-2003-1076-mhra-trading-fund` |

Not used: the date the Committee on Safety of Drugs started work (often given as 1 January 1964) was not found in a
primary source in this run (UNRESOLVED); the National Archives record contradicts itself on when its successor
started (1968 vs 1970), so no successor date is proposed.

### 3.2 Canada

| Proposed id | Date | Category | Text (draft) | Sources |
|---|---|---|---|---|
| `ca-thalidomide-withdrawn` | 1962 (year only) | safety | Canada withdraws thalidomide months after Germany and the UK; 115 children born in 1961–62 with thalidomide-linked malformations are recorded. | `ca-fca-2013-43-celgene`, `ca-hesa-2017-05-09-thalidomide-evidence`, `webb-1963-canadian-thalidomide`, `vargesson-2015-thalidomide` (UK withdrawal November 1961) |
| `ca-thalidomide-banned` | 1962-12-20 | regulation | Parliament bans the sale of thalidomide (Schedule H of the Food and Drugs Act). | `ca-fca-2013-43-celgene` (para. 8) |
| `ca-efficacy-required` | 1963 (year only) | regulation | Revised Food and Drug Regulations require manufacturers to show that a new medicine works, not only that it is safe (SOR/63-386). | `ca-fca-2013-43-celgene` (paras. 7, 62, 95) |
| `ca-adverse-reaction-reporting` | 1965 (year only) | safety | Health Canada starts collecting reports of suspected side effects (today's Canada Vigilance Program). | `ca-hc-canada-vigilance` |

**Date conflict (UNRESOLVED; do not print a day):** the Federal Court of Appeal's background facts give Kevadon's
approval as 22 November 1960 and a permanent withdrawal order on 6 April 1962 (`ca-fca-2013-43-celgene`); Health
Canada's witness told the Commons health committee it was licensed on 1 April 1961 and removed from the market on
2 March 1962 (`ca-hesa-2017-05-09-thalidomide-evidence`). The two may describe different steps (sample distribution,
approval, removal request, permanent order), but no source here reconciles them. Health Canada's own "Brief History of
Drug Regulations in Canada", cited by the court, was not found online in this run.

### 3.3 Australia

| Proposed id | Date | Category | Text (draft) | Sources |
|---|---|---|---|---|
| `au-mcbride-letter` | 1961 (year only; December 1961) | safety | A New South Wales doctor, William McBride (of Hurstville, per the TGA history), reports in The Lancet that almost 20% of babies born to women given thalidomide had severe malformations, against about 1.5% in general. | `mcbride-1961-thalidomide-letter`, `au-tga-mcewen-2007-history` (p. 45), `vargesson-2015-thalidomide` |
| `au-adec` | 1963-06-03 | regulation | The Australian Drug Evaluation Committee is appointed to advise on the safety of new medicines. | `au-tga-mcewen-2007-history` (p. 47) |
| `au-adverse-reaction-reporting` | 1964 (year only; August 1964) | safety | Australia's scheme for reporting suspected side effects starts. | `au-tga-mcewen-2007-history` (p. 129) |
| `au-therapeutic-goods-act` | 1991-02-15 | regulation | The Therapeutic Goods Act 1989 and its Regulations take effect; the national system is run by the TGA (so named since August 1989). | `au-tga-mcewen-2007-history` (pp. 51, 62), `au-tg-act-1989-asmade-details` |

Tag: [AU] for all four (the McBride letter is told as Australia's part of the thalidomide story; tag [] only if the
text does not name Australia). The TGA history is internally inconsistent on the Act's start ("February 1, 1991" on p. 51,
"15 February 1991" on p. 62; page numbers corrected by the fact-checker); the Federal Register's version dates support 15 February 1991.

### 3.4 Peptide-relevant enforcement events, 2020–2026 (candidates; sellers not named)

Already on the timeline: `fda-category-2-peptides` (US, 2023-09-29), `falsified-ozempic-uk` (UK, 2023-10-26),
`glp1-shortages` / `glp1-shortages-end` (US), `unlicensed-supply-seizures` (UK, 2026-01-26), `fda-pcac-2026-vote` (US,
2026-07-23).

| Date | Country | Event | Sources | Suggest as event? |
|---|---|---|---|---|
| 26 Jul 2024 | US | FDA alert on dosing errors with compounded injectable semaglutide | `fda-2024-compounded-semaglutide-dosing-errors` | optional |
| 10 Dec 2024 to 24 Aug 2026 | US | Warning letters to online sellers of "research" GLP-1s and peptides (letters of 10 Dec 2024, 31 Mar 2026, 17 Jun 2026, 24 Aug 2026; the last names SS-31, tesamorelin and PT-141) | `fda-warning-letters-index` | yes: `us-fda-research-peptide-warning-letters` (2026-08-24) |
| 3 Mar 2026 | US | 30 warning letters to telehealth firms over compounded GLP-1 marketing | `fda-2026-03-telehealth-warning-letters` | optional |
| 24 Oct 2025 | UK | MHRA dismantles the UK's first illicit weight-loss medicine factory (retatrutide, tirzepatide) | `mhra-2025-retatrutide-seizure` | yes: `uk-illicit-retatrutide-factory` |
| 24–25 Feb 2026 | UK | Falsified Mounjaro pens (Drug Safety Update); a second facility raided ("retatrutide and tirzepatide, as well as peptide products") | `mhra-2026-falsified-mounjaro`, `uk-mhra-2026-02-second-facility` | optional |
| 29 May 2026 | UK | Largest MHRA seizure of unlicensed weight-loss medicines (about 12,000 doses; retatrutide, tirzepatide, peptide products) | `mhra-2026-05-largest-seizure` | yes |
| 24 Jul 2026 | UK | MHRA warning on illegal social-media advertising; "anyone selling" retatrutide does so illegally | `mhra-2026-07-no-summer-shortcut` | optional |
| 15 Oct 2026 | UK | Over 12,000 fake retatrutide and tirzepatide pens seized in Birmingham | `mhra-2026-10-counterfeit-pens` | yes |
| 13 Dec 2023 to 1 Aug 2025 | Canada | First Health Canada advisories on injectable peptides sold online and seizures (RA-74731, RA-75741, RA-77218, RA-77275, RA-77807) | `ca-hc-recalls-database` (canada-legal.md 11.1) | yes: `ca-first-peptide-advisory` (2023-12-13) |
| 9 Apr 2026 | Canada | "Think twice before injecting peptides bought online" advisory (lists BPC-157, CJC-1295, TB-500, retatrutide and others) | `ca-hc-2026-04-think-twice-peptides` | yes |
| 7 May 2026 | Canada | Type I recall of GHK-Cu and BPC-157 powder from pharmacies | `ca-hc-2026-05-ghk-cu-bpc-157-api-recall` | yes |
| 11 Jun 2026 (announced 29 Jul 2026) | Canada | Permanent court injunction against an online peptide seller | `ca-hc-2026-07-injunction-statement` (DO NOT CITE DIRECTLY: title names the seller; canada-legal.md 11.3 options) | editor |
| 1 Jun 2024 | Australia | BPC-157 becomes Schedule 4 (prescription-only), with a possession restriction | `au-tga-2024-05-final-decisions-notice`, `au-tga-2024-05-scheduling-final-decisions` | yes: `au-bpc-157-schedule-4` |
| 1 Mar 2024 | Australia | Search warrant on a Melbourne pharmacy (semaglutide, peptides, growth hormone seized) | `au-tga-2024-03-south-yarra-pharmacy-warrant` | optional |
| 13 Apr – 19 Jun 2026 | Australia | TGA advisories on unapproved peptides; peptides made a compliance priority (10 Jun); joint statement with the Chief Medical Officer on serious harms (19 Jun) | `au-tga-2026-04-peptide-responsibilities`, `au-tga-2026-05-peptide-import-warning`, `au-tga-2026-06-peptide-compliance-priority`, `au-tga-2026-06-cmo-peptide-statement` | yes: `au-peptide-compliance-priority` (2026-06-10) |
| 17 Apr, 12 Aug, 17 Aug 2026 | Australia | Arrests and charges after ABF/TGA peptide and steroid seizures; influencer-linked seizure; melanotan II products found inconsistently dosed | `au-tga-2026-04-vic-pied-arrests`, `au-abf-2026-08-pied-charges`, `au-tga-2026-08-peptide-seizure`, `au-tga-2026-08-melanotan-ii-safety-alert` | optional |
| 8 Sep 2026 | Australia | New personal-import packaging rules in force | `au-tg-amendment-2026-measures-1`, `au-tga-2026-09-personal-import-packaging` | yes |
| 14 Sep 2026 | Australia | "Retatrutide" from an unmarked vial contained semaglutide and no retatrutide (serious adverse event) | `au-tga-2026-09-retatrutide-counterfeit` | yes (safety) |
| 28 Sep 2026 | Australia | TGA starts Federal Court proceedings over unlawful advertising of peptides (BPC-157, CJC-1295, GHRP-6) | `au-tga-media-releases-peptide-log-2026-10-24` (the release names the company; cite the log) | yes, unnamed |

Compound tags must name compounds with a data file (bpc-157, tb-500, cjc-1295, melanotan-ii, retatrutide, semaglutide,
tirzepatide, pt-141, ss-31, tesamorelin and others listed in `src/data/compounds/`).

---

## 4. Tracker candidates (open regulatory changes 2026–2027)

Format follows `src/data/tracker.yaml`; status values: proposed, consultation, advisory-vote, rulemaking, adopted,
in-force, stalled, watching.

### 4.1 United Kingdom

| Proposed id | Status | Updated | Next milestone | What | Sources |
|---|---|---|---|---|---|
| `uk-high-risk-cosmetic-wellbeing-procedures` | consultation | 2026-10-21 | 2027-01-13 (consultation closes) | England only: high-risk cosmetic and wellbeing procedures, including **intravenous procedures for wellbeing** (IV drips), to be done only by doctors, dentists or prescribing nurses, midwives or pharmacists, never on under-18s; providers to register with the CQC; breach a crime. Relevant to IV NAD+ "drips"; it does not name peptides or NAD+. Compounds: `nad-precursors` (if the editor accepts the indirect link). | `uk-dhsc-2026-high-risk-cosmetic-wellbeing-consultation` |
| `uk-mhra-weight-loss-raids` (exists) | watching | 2026-10-15 | — | Add the 25 Feb 2026 raid source. | add `uk-mhra-2026-02-second-facility` |

Searched and not found (24 October 2026): GOV.UK's list of MHRA consultations (78 items, newest 21 October 2026)
has no item on peptides, compounding or online sale; GOV.UK searches for "peptides", "retatrutide", "weight loss
jabs" and "image and performance enhancing drugs" since 2025 found enforcement releases only.

### 4.2 Canada

| Proposed id | Status | Updated | Next milestone | What | Sources |
|---|---|---|---|---|---|
| `ca-hc-injectable-peptides-enforcement` | watching | 2026-07-29 | — | Health Canada's campaign against unauthorised injectable peptides: the April 2026 advisory, the May 2026 recall of BPC-157 and GHK-Cu powder from pharmacies, the June 2026 court injunction (announced 29 July). | `ca-hc-2026-04-think-twice-peptides`, `ca-hc-2026-05-ghk-cu-bpc-157-api-recall`, `ca-hc-recalls-database`, `ca-hc-2026-07-injunction-statement` (editor) |

Searched and not found: no 2026 Prescription Drug List notice concerns an unauthorised peptide (`ca-hc-pdl-notices-2026`);
the only site-related 2026 change is afamelanotide's addition to the list on 27 August 2026 after Scenesse's approval
(`ca-hc-pdl-2026-08-27-additions`; an approval, not an open change). The Food and Drug Regulations were last amended
17 June 2026 (recent amendments SOR/2026-96, -72, -113; subjects not checked) (`ca-food-and-drug-regulations-index`,
source added by the fact-checker; the draft gave none). No Canada Gazette proposal on peptides or compounding was
found (web search only; UNRESOLVED whether one exists).

### 4.3 Australia

| Proposed id | Status | Updated | Next milestone | What | Sources |
|---|---|---|---|---|---|
| `au-tga-peptide-compliance-priority` | watching | 2026-10-06 | — | Unapproved peptides added to the TGA's compliance priorities (June 2026); warning letters, infringement notices, seizures and court action since. | `au-tga-2026-06-peptide-compliance-priority`, `au-tga-2026-06-cmo-peptide-statement`, `au-tga-2026-10-prescription-import-infringements`, `au-tga-media-releases-peptide-log-2026-10-24` |
| `au-federal-court-peptide-advertising` | watching | 2026-09-28 | — (no hearing date published) | Proceedings against a former company and its directors over peptide advertising (BPC-157, CJC-1295, GHRP-6), seeking penalties. Do not name the company. | `au-tga-media-releases-peptide-log-2026-10-24` |
| `au-personal-import-packaging` | in-force | 2026-09-08 | — | Personal-import medicines must be in packaging that enables them to be accurately identified (the TGA asks that they stay in their original packaging where possible); travellers bringing prescription-only medicines need a written authority from a medical practitioner (or an overseas medical practitioner who treated them); a wider definition of immediate family and a new definition of overseas medical practitioner. (Wording corrected by the fact-checker: the draft blended the instrument's requirement with the TGA's "where possible" advice and left out the travellers' written-authority change.) | `au-tg-amendment-2026-measures-1`, `au-tga-2026-09-personal-import-packaging` |
| `au-advertising-code-review` | consultation | 2026-09-03 | — (decisions to be published on the consultation page) | Review of the Therapeutic Goods Advertising Code; consultation 9 July to 3 September 2026, closed, no decision yet. | `au-tga-2026-07-advertising-code-consultation` |
| `au-compounded-medicines-guidance` | in-force | 2026-09-08 | — | Guidance on lawful compounding; compounded medicines cannot be advertised to the public (update of 8 September 2026). | `au-tga-compounded-medicines-guidance` |

Searched and not found: no peptide covered by the site was on the 2026 medicines-scheduling agendas (ACMS #49 March:
melatonin and first-generation sedating antihistamines; ACMS #50 July: loratadine, fexofenadine, pseudoephedrine) (`au-tga-2026-scheduling-consultations-no-peptides`).

Ireland and New Zealand (not asked for the tracker): see `ireland-nz.md` (New Zealand's planned medical products law;
HPRA enforcement).

---

## 5. Photo candidates (Wikimedia Commons)

Licence, author and size from the Commons API (24 October 2026); each first choice was viewed as a thumbnail for people,
products and colour. All are natural-colour photographs. `source_url` hosts (`commons.wikimedia.org`,
`creativecommons.org`) are allowlisted.

| Route | First choice | Author | Licence | Size | Check | Alternatives |
|---|---|---|---|---|---|---|
| `safety/warning-signs` | [File:Exeter , Royal Devon and Exeter Hospital Ambulance Bay - geograph.org.uk - 1724754.jpg](https://commons.wikimedia.org/wiki/File:Exeter_,_Royal_Devon_and_Exeter_Hospital_Ambulance_Bay_-_geograph.org.uk_-_1724754.jpg) | Lewis Clarke (Geograph) | CC BY-SA 2.0 | 3264×2448 | No people; NHS livery (UK-specific); number plate visible | No good generic ambulance found. Rejected: "Ambulance Toronto March 2010 (1).jpg" (CC BY 2.0; heavy zoom-blur effect, not natural colour), "Ambulance with wig-wag.jpg" (crew's faces visible), Wagga Wagga ambulance bay (people) |
| `safety/if-something-goes-wrong` | [File:LMH emergency entrance (2025)1.jpg](https://commons.wikimedia.org/wiki/File:LMH_emergency_entrance_(2025)1.jpg) | Wikipedialuva | CC BY 4.0 | 4499×2249 | No identifiable people; "EMERGENCY" canopy; hospital name on the building (US) | [File:Parkview Pueblo West Hospital emergency services.JPG](https://commons.wikimedia.org/wiki/File:Parkview_Pueblo_West_Hospital_emergency_services.JPG) (Jeffrey Beall, CC BY 4.0, 4971×2565; cars and plates in front) |
| `the-case-for-reform` | [File:Wooden gavel 20170417.jpg](https://commons.wikimedia.org/wiki/File:Wooden_gavel_20170417.jpg) | Santeri Viinamäki | CC BY-SA 4.0 | 4592×3448 | No people; neutral (no country) | [File:Australian House of Representatives - Parliament of Australia.jpg](https://commons.wikimedia.org/wiki/File:Australian_House_of_Representatives_-_Parliament_of_Australia.jpg) (JJ Harrison, CC BY-SA 3.0, 4202×2500; empty chamber, but Australian). A pharmacy shelf was not proposed: shelves show product packaging |
| `legal/whats-changing` | [File:Detail of scaffolding and concrete facade during Mountbatten House renovation work, Chatham, Kent.jpg](https://commons.wikimedia.org/wiki/File:Detail_of_scaffolding_and_concrete_facade_during_Mountbatten_House_renovation_work,_Chatham,_Kent.jpg) | OathOn | CC0 | 4032×3024 | "Rules under construction"; a construction worker in a hard hat at the far left edge, partly behind netting: crop him out (focal point right of centre) | — |
| `legal/ca` | [File:Centre Block - Parliament Hill.jpg](https://commons.wikimedia.org/wiki/File:Centre_Block_-_Parliament_Hill.jpg) | Saffron Blaze | CC BY-SA 3.0 | 3384×2544 | Commons featured picture; a few tiny, unidentifiable figures on the steps; Parliament (not the regulator) | [File:Brooke claxton bldg ottawa.JPG](https://commons.wikimedia.org/wiki/File:Brooke_claxton_bldg_ottawa.JPG) (Demetri1968, CC BY-SA 3.0, 2050×1618; no people; the Commons file has no description. The Canadian Register of Historic Places confirms it was built in 1961–64 as the national headquarters of the department now called Health Canada (`ca-crhp-brooke-claxton-building`, added by the fact-checker); who occupies it today is still UNRESOLVED). Rejected: "Health Protection bldg Ottawa.jpg" (the building is in Commons' "Buildings destroyed by demolition" category) |
| `legal/au` | [File:Exterior of Parliament House, Canberra, 2022, 04.jpg](https://commons.wikimedia.org/wiki/File:Exterior_of_Parliament_House,_Canberra,_2022,_04.jpg) | Kgbo | CC BY-SA 4.0 | 3926×2944 | One small walking figure at the right; the forecourt is a large mosaic artwork: check freedom of panorama for the mosaic or crop to the building (fact-checker: neither this file nor "…2022, 01.jpg" carries an FoP-Australia category, and a Commons search found no file tagged FoP-Australia for the mosaic; the draft's "Commons tags the related views FoP-Australia" could not be confirmed) | [File:Parliament House, Canberra - front exterior.jpg](https://commons.wikimedia.org/wiki/File:Parliament_House,_Canberra_-_front_exterior.jpg) (Joseph Fox, CC BY-SA 3.0, 2370×3027, portrait; not viewed). No photo of the TGA building was found on Commons. Rejected: "…2022, 01.jpg" (a street protest with flags) |
| `legal/ireland-and-new-zealand` | [File:Beehive and Parliament House - Wellington - New Zealand - DSC00165.jpg](https://commons.wikimedia.org/wiki/File:Beehive_and_Parliament_House_-_Wellington_-_New_Zealand_-_DSC00165.jpg) | Daderot | CC0 | 5472×3648 | No people | For Ireland: [File:20130810 dublin214.JPG](https://commons.wikimedia.org/wiki/File:20130810_dublin214.JPG) (Leinster House, Jean Housen, CC BY-SA 3.0, 3872×2592; no people). Rejected: "Leinster House in Dublin, seat of the Oireachtas.jpg" (identifiable people) |

Fetch with `npm run media:commons -- "File:…" <id> --dry-run` first (the tool re-reads the licence). The editor may
prefer one photo per notes page that does not favour one of the two countries; no neutral option was found.

---

## 6. UNRESOLVED

1. **TGA feeds from CI:** Node fetch works from this machine; the GitHub Actions runner has not been tried.
2. **Health Canada items and the allowlist:** all Canadian feed items link to `www.canada.ca` (not allowlisted). (The
   draft `homepage` was opened by the fact-checker: HTTP 200, resolved.)
3. **Seller names in feed titles** (Health Canada 29 July 2026; TGA 28 September 2026): fetcher filter or editorial
   acceptance.
4. **Thalidomide in Canada:** approval and withdrawal dates differ between the Federal Court of Appeal (22 Nov 1960;
   6 Apr 1962) and Health Canada's 2017 testimony (1 Apr 1961; 2 Mar 1962). Use years only.
5. **Committee on Safety of Drugs start date** (often given as 1 January 1964): no primary source found.
6. **McBride letter:** issue day not in Crossref; print "December 1961".
7. **Northern Ireland home sharps disposal** (other than needle exchange): no official page found.
8. **Sharps in SA, Tasmania, NT:** no state page read. **Canada:** no Health Canada sharps page found.
9. **FRANK operator; DAN 24/7 funder:** not stated on the pages read.
10. **Brooke Claxton Building:** built as Health Canada's national headquarters (official register, added by the
    fact-checker); current occupancy not confirmed from an official page.
11. **Canada Gazette proposals on peptides or compounding:** none found by web search; not searched in the Gazette itself.
12. **Pages read only from archive captures:** SAMHSA National Helpline and 988 pages (live pages still HTTP 403 to
    every tool on 24 October 2026), the HESA 2017 evidence (live page and PDF HTTP 403), the HSE pharmacy needle
    exchange page (the live page is now **404**: do not link), the HSE 2023 PQ PDF (the live URL now redirects to a
    "Website update" page). The fact-checker re-read the SAMHSA and HESA captures; quotations confirmed.
13. **Nunavut** health advice line (carried over from canada-legal.md).

## 7. Hosts used here that are not on `config/link-allowlist.json`

Allowlisted already: `.gov` (fda.gov, samhsa.gov, poisonhelp.hrsa.gov, findtreatment.gov, medlineplus.gov), `.gov.uk`
(www.gov.uk, nidirect.gov.uk, health-ni.gov.uk, legislation.gov.uk, discovery.nationalarchives.gov.uk), www.nhs.uk, yellowcard.mhra.gov.uk,
www.tga.gov.au, www.health.vic.gov.au, doi.org, pubmed.ncbi.nlm.nih.gov, commons.wikimedia.org, creativecommons.org.

Not allowlisted (needed if linked): www.canada.ca, api.io.canada.ca, recalls-rappels.canada.ca, open.canada.ca,
988.ca, infopoison.ca, www.ontario.ca, www.gov.mb.ca, towardtheheart.com, decisions.fca-caf.ca, www.ourcommons.ca,
laws-lois.justice.gc.ca, www.historicplaces.ca; 988lifeline.org; talktofrank.com, www.samaritans.org, www.npis.org,
www.gov.scot, www.breathingspace.scot, www.nhsinform.scot, 111.wales.nhs.uk, www.gov.wales, dan247.org.uk,
publichealth.hscni.net, www.lifelinehelpline.info, api.parliament.uk; www.healthdirect.gov.au, www.health.gov.au, www.qld.gov.au,
www.health.qld.gov.au, www.health.nsw.gov.au, www.poisonsinfo.nsw.gov.au, www.healthywa.wa.gov.au,
www.cityservices.act.gov.au, www.infrastructure.gov.au, www.legislation.gov.au; www2.hse.ie, www.hse.ie, poisons.ie,
www.hpra.ie; www.healthnz.govt.nz, poisons.co.nz, alcoholdrughelp.org.nz, www.medsafe.govt.nz.

## 8. Corrections made in this run (to the first run's draft `extras.yaml`)

1. **TGA feeds: "live test FAILED" was wrong.** The feeds answer HTTP 200 to Node fetch and the browser; the failure was
   the Windows TLS stack used by curl/PowerShell (renegotiation) plus WebFetch timing out. `au-tga-feed-*` notes now give
   live item counts and dates (24 October 2026) instead of Internet Archive captures.
2. **TGA RSS page:** moved to `https://www.tga.gov.au/news/email-subscriptions/rss-feeds` (old URL redirects), last
   updated 25 August 2026; the recalls feed is `alert/market-actions.xml`, not `alert/product-recalls.xml`.
3. **Health Canada substance-use page:** URL and title changed (`get-help-with-substance-use.html`, "Get help with
   substance use"); the old URL redirects twice.
4. **Poison Help (US) and Breathing Space (Scotland):** now read live (the draft relied on archive captures).
5. **National Alcohol and Other Drug Hotline (AU):** now read live (the draft relied on an archive capture).
6. **Draft gaps filled:** timeline (section 3), tracker (section 4), photos (section 5), the numbers list (2.9), WA
   and ACT sharps pages, the Irish poisons contact page, Australia's Triple Zero page.
7. New feed entries for the TGA all-alerts and consultations feeds; the HC recalls RSS note now names the three items
   and explains the time-zone effect.
8. **Stale reused ids in the draft header:** `ca-hc-2026-05-ghk-bpc157-api-recall` and
   `ca-hc-recalls-peptide-search-2026-10-23` were renamed or merged by canada-legal (now
   `ca-hc-2026-05-ghk-cu-bpc-157-api-recall` and `ca-hc-recalls-database`); the header lists the current ids.

---

## Fact-check (independent)

Independent fact-check, 24 October 2026. Every source in `sources/extras.yaml` was opened again, and every fact and
status in this file was checked against it. Tools: Node fetch, sending either the site fetcher's own user agent and
parser (for feeds) or a browser user agent (for pages); the built-in browser, in the fact-checker's own tab, for pages
behind a Cloudflare check (ACT Recyclopaedia, Queensland Health); Internet Archive raw captures for pages that refuse
every tool (SAMHSA, House of Commons); the GOV.UK content and search APIs; the TNA Discovery API; the Commons API (with
900 px thumbnails viewed); PubMed and Crossref; pdftotext for the PDFs (PHA booklet, Manitoba and BC sharps sheets,
the Federal Court of Appeal decision, the TGA history). The Ontario regulation was read from the e-Laws Word file.
Nothing outside `research/refocus/` was edited.

### What was checked

- **Schema and ids.** `extras.yaml` validates against `sourceFileSchema` (89 entries now). No id collides with
  `src/data/sources/*.yaml` or with another `research/refocus/sources/*.yaml` file, and no URL duplicates an existing
  entry. Every reused id named in sections 0 to 4 exists. The existing timeline ids (`thalidomide-withdrawn`,
  `kefauver-harris-1962`, `fda-category-2-peptides` and others) and tracker id (`uk-mhra-weight-loss-raids`) exist, with
  the dates given.
- **Feeds (section 1).** All 13 feeds were re-run with the fetcher's user agent, Accept header, `fast-xml-parser` and the
  `feeds.yaml` keyword list. Every count, newest and oldest date and hit count in table 1.1 was reproduced exactly: MHRA
  20, 50, 50 and 20 entries; TGA 50, 50, 50, 50 and 50, plus final decisions 50 and interim 41; Health Canada news 50;
  recalls RSS 3. The TGA works from Node fetch, so the second run's correction stands. Health Canada's open data was
  downloaded again (34,287 records; daily regeneration confirmed; every peptide advisory NID present). The two seller
  names in feed titles are confirmed.
- **Help services (section 2).** Every page in tables 2.1 to 2.8 was re-read, and each quoted passage was matched
  automatically against the page text. Every number in 2.9 was checked against its source page: all match.
- **Timeline (section 3).** Hansard of 4 April 1963; the TNA record (via its API); the two MHRA Yellow Card releases;
  the Medicines Act 1968 as enacted (Royal Assent 25 October 1968); SI 2003/1076 (made 28 March 2003, in force
  1 April 2003, the MCA–MDA merger); the Celgene decision (paras. 4, 6, 7, 8 and 62, with para. 95 in the dissent);
  the HESA 2017 evidence (archive); Webb 1963 (PubMed); the McBride letter (Crossref; not in PubMed, issue day not in
  the record); the TGA history, page by page; the Federal Register version dates. All confirmed except the page
  numbers below.
- **"Not found" searches.** These were repeated: the GOV.UK MHRA consultations list (78 items, newest 21 October 2026,
  no peptide, compounding or online-sale item since 2015); the 2026 Prescription Drug List notices (the four "multiple
  additions" notices scanned; only afamelanotide is relevant); the TGA 2026 scheduling agendas and consultations feed;
  and a web search for a Health Canada (federal) sharps page (none found). The fact-checker did not search the Canada
  Gazette either, so item 11 stays UNRESOLVED.
- **Tracker (section 4).** The DHSC consultation (dates; "intravenous procedures ... for a cosmetic or wellbeing
  purpose"; "to improve energy or focus"; CQC registration; the draft SI attached; no mention of peptides or NAD+), the
  TGA Advertising Code consultation (9 July to 3 September 2026; no decision published), the Food and Drug Regulations
  amendment list, and the reused Australian and Canadian enforcement sources (notes consistent with section 4).
- **Photos (section 5).** Licence, author and size were re-read from the Commons API for all 14 files named: all match.
  The thumbnails of the first choices were viewed: no identifiable people; the Exeter ambulance shows a number plate,
  a helicopter-transfer warning sign and part of a police car; the LMH entrance shows the hospital brand; the
  scaffolding photo shows a worker at the left edge; the Canberra forecourt mosaic is as described. The Wellington
  photo shows carved pou at the entrance, and Commons files it under "FoP-New Zealand".

### What was changed, and why

1. `ca-gc-news-web-feeds-page`: the URL `.../news/web-feeds.html` now redirects (301) to `.../news/subscribe-emails.html`
   ("Subscribe to emails and RSS feeds"). URL, title and accessed date updated.
2. `ca-hc-recalls-rss-page`: the page lists **18** feeds, not 19.
3. `ca-hc-feed-recalls-health-products-rss`: the parsing example ran on a machine at **UTC+2** (Amsterdam summer time
   until 25 October 2026), not UTC+1. As written, the draft's arithmetic did not add up.
4. `ca-hc-recalls-open-data` and fetcher note 3 in 1.3: the JSON file has **no Category "Health products"**, so a filter
   on it would keep nothing. The categories and organisations that actually occur are now given.
5. `uk-nhs-when-to-call-999`: the page was last reviewed on **3 February 2023**. The draft's "3 February 2026" is the
   next-review date, which is now overdue.
6. `uk-tna-mh171-csd-csm` and section 7: `discovery.nationalarchives.gov.uk` **is allowlisted** through the `.gov.uk`
   suffix rule.
7. `au-qld-needle-syringe-program`: "yellow disposal containers in several sizes" is not on the page, so it was removed.
   Added the page's guidance for non-NSP sharps (people injecting medical, cosmetic or therapeutic substances) and
   Queensland's rule that, in some council areas, sealed sharps containers may legally go in the household bin.
8. `au-wa-healthywa-needle-disposal`: WA's household-rubbish allowance applies only to **needles found in the
   community**. The draft's quotation was not verbatim. Table 2.8 was corrected.
9. `ca-bccdc-sharps-disposal`: added BC's last-resort line ("close the lid and put it in a secure garbage"). Operator
   resolved: Toward the Heart "is part of the BC Centre for Disease Control".
10. The paragraph after table 2.8: Queensland, BC and WA (found needles) allow household rubbish under conditions,
    while the ACT and NZ forbid it. A blanket "never in household rubbish" line contradicts official Queensland and BC
    guidance.
11. `au-health-aod-hotline` and table 2.4: from South Australia the line runs only 8.30am to 10pm.
12. `au-healthdirect-mental-health-helplines` and table 2.4: "Lifeline ... a charity" had no source, so it was removed.
13. `us-hrsa-poison-help` and table 2.1: "connects to the local poison center" is on the About Us page. New source
    `us-hrsa-poison-help-about`.
14. `us-samhsa-988`: the Department of Transportation was added to the partner list.
15. `uk-wales-2023-111-press-2`: quotation punctuation restored ("NHS ‘111 press option 2’").
16. `au-tga-report-adverse-events-consumers`: now read live (accessed 24 October 2026); content confirmed.
17. `ca-hesa-2017-05-09-thalidomide-evidence`: the witness is named as printed (Cindy Moriarty, Executive Director,
    Health Programs and Strategic Initiatives, Strategic Policy Branch, Department of Health).
18. `au-tga-mcewen-2007-history` and table 3.3: printed page numbers corrected. The ADR scheme is on **p. 129** (not 128).
    The TGA designation and "February 1, 1991" are on **p. 51** (not 50). "15 February 1991" is on **p. 62** (not 61).
19. `au-tga-2026-scheduling-consultations-no-peptides` and 4.3: the full agendas are now given (ACMS #49 also covered
    first-generation sedating antihistamines; ACCS #42 also covered oxalic acid). The conclusion is unchanged.
20. Tracker row `au-personal-import-packaging`: the wording now follows the instrument ("packaging that enables the
    medicine to be accurately identified") and the TGA's "where possible" advice separately, and adds the travellers'
    written-authority change.
21. 4.2: the Food and Drug Regulations amendment statement had no source. Added `ca-food-and-drug-regulations-index`
    (current to 30 September 2026, last amended 17 June 2026).
22. `ie-hse-pharmacy-needle-exchange`: the live page is now **HTTP 404**, so it must not be linked; marked in table 2.8.
    `ie-hse-2023-pq-sharps`: the live URL now redirects to "Website update".
23. Photo alternative for legal/ca: the Brooke Claxton Building was built as the national headquarters of the department
    now called Health Canada. New source `ca-crhp-brooke-claxton-building`. Current occupancy is still unconfirmed.
24. Proposed help entry (IE): `https://www.poisons.ie/` redirects, so the entry now uses `https://poisons.ie/`.
25. Health Canada feed homepage (`https://www.canada.ca/en/health-canada/news.html`): opened, HTTP 200, so UNRESOLVED
    item 2 is resolved for the homepage.
26. Photo row legal/au: the draft said Commons tags related views of the forecourt "FoP-Australia". The chosen file has
    no such category, and no tagged file was found, so the statement was removed. The freedom-of-panorama check stays
    with the editor.

### Still UNRESOLVED after the fact-check

- TGA feeds from the GitHub Actions runner (works from Node fetch on this machine).
- `www.canada.ca` and `recalls-rappels.canada.ca` are not allowlisted, so the Canadian feed keeps nothing until they are added.
- Seller names in two feed titles: Health Canada, 29 July 2026; TGA, 28 September 2026. This is an editor's decision.
- Canadian thalidomide dates: the Federal Court of Appeal (22 Nov 1960; 6 Apr 1962) and the 2017 testimony (1 Apr 1961;
  2 Mar 1962) conflict, and both quotations were re-verified. Print years only.
- Committee on Safety of Drugs start date (often 1 January 1964): no primary source found. A web search found only
  secondary sources.
- McBride letter issue day: not in Crossref (issue 7216, December 1961).
- No official page read for home sharps disposal in Northern Ireland, South Australia, Tasmania or the Northern
  Territory. No federal Health Canada sharps page.
- FRANK operator: not stated on the FRANK pages. GOV.UK has 2011 and 2013 press releases about Home Office FRANK
  advertising campaigns, but no current operator statement. DAN 24/7's funder is not stated.
- Who occupies the Brooke Claxton Building today.
- Canada Gazette not searched for peptide or compounding proposals.
- SAMHSA (both pages) and the HESA evidence are readable only from archive captures. The HSE pharmacy needle exchange
  page is gone (404), and no live replacement was found.
- Nunavut's health advice line (carried over from canada-legal).
- Parliament House Canberra forecourt mosaic: freedom of panorama for the artwork (or crop). The file carries no FoP
  category on Commons (the draft's statement that related views are tagged "FoP-Australia" could not be confirmed),
  and the fact-checker did not establish the legal position.
