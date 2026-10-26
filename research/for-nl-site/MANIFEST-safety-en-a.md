# Manifest: group safety-en-a (English refocus, 24 October 2026)

What left the English pages of this group because it was Dutch, Belgian, German or EU framing. Nothing was deleted
from `src/data/` (sources, jurisdictions, heroes). The full text of every item is in two places:

- the snapshot: `research/for-nl-site/snapshot-2026-10-23/content/pages-en/safety/<page>.mdx` and
  `research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/safety-a.json`;
- git: `git show nl-source-2026-10-23:src/content/pages/en/safety/<page>.mdx` (and
  `git show nl-source-2026-10-23:src/i18n/en/glossary/safety-a.json`).

Re-check every fact before reuse on the Dutch site (last checked 20 to 22 October 2026).

## safety/if-something-goes-wrong

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Frontmatter | Description "Where to get help in the Netherlands … why Dutch doctors keep it private"; summary items on the GP and huisartsenpost, Dutch medical secrecy, Lareb and the IGJ; related link `legal/nl` | – |
| Intro | "It is written for the Netherlands. Short notes for other countries are at the end." | – |
| Stop callout (cite line) | The same five stop signs (kept word for word); the Dutch government's page on urgent medical help was one of the sources | `rijksoverheid-urgent-medical-help` (replaced by `uk-nhs-when-to-call-999`, `us-medlineplus-when-to-use-er`) |
| Where to get help: Lead and diagram `where-to-get-help-nl` | Emergency number; own GP (huisarts) in office hours; huisartsenpost in the evening, at night and at weekends (call before you go); hospital emergency department (SEH) only through the GP or huisartsenpost unless a life is in danger | `rijksoverheid-urgent-medical-help`, `rijksoverheid-huisartsenpost-seh` |
| Where to get help: `<JurisdictionCard code="NL" />` | The Dutch contact card | – |
| Fold "Costs, and the poison centre" | GP and huisartsenpost care does not use the deductible (eigen risico), the emergency department does; the poison centre NVIC advises professionals only, so call your GP or the huisartsenpost, who can call the NVIC | `rijksoverheid-huisartsenpost-seh`, `nvic-umcutrecht` |
| What to tell the doctor (checklist cite line) | Thuisarts's page on preparing for a GP visit was one of the checklist's sources | `thuisarts-naar-de-huisarts` |
| Fold "Why each detail matters" | GLP-1 products with insulin can push blood sugar too low, cited to the EU label (the fact stays, now cited to the US label `fda-label-wegovy`, section 5.4) | `ema-epar-wegovy` |
| Diagram `keep-the-product`, step 3 | "In Germany, a state lab found insulin in fake pens" (BfArM falsification notice). Replaced by an Australian example (TGA test of a vial sold as retatrutide). The Italian example stays | `bfarm-ozempic-falsification` |
| Diagram `keep-the-product`, step 4 | "Dutch doctors stress that quick reports to the regulator help…" (the fact and its cite `stammers-2026-insulin-falsified-semaglutide` stay; only "Dutch" left) | – |
| Why you can be open with a doctor: Lead and `<Compare>` | Dutch doctors must keep what you say secret (WGBO art. 7:457); right to stay silent to police and courts (KNMG); using a product on yourself is not an exception; a doctor can act if you endanger others; Lareb does not pass your report to your doctor | `nl-wgbo-art-457-confidentiality`, `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`, `lareb-bijwerkingen-melden` |
| Fold "The rules behind this" | The WGBO rule; the KNMG list of exceptions (consent, assumed consent, legal duty, serious harm, weighty interest); "we found no Dutch rule that makes a doctor report a patient to the police" (checked 22 October 2026); link to Dutch law; file rights (WGBO art. 7:454–456); "GPs are used to hearing about difficult subjects" | `nl-wgbo-art-457-confidentiality`, `knmg-beroepsgeheim-doorbreken`, `nl-wgbo-art-454-456-records`, `thuisarts-naar-de-huisarts` |
| Report what happened: Lead and diagram `where-to-report-nl` | Side effects to Lareb (anyone, also for illegal or online medicines; Lareb gives no advice and does not tell your doctor); doubtful websites or sellers to the IGJ through the Landelijk Meldpunt Zorg; a fake product to the pharmacist or the IGJ | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `igj-2025-illegal-online-medicines`, `igj-online-medicijnen`, `ema-2023-falsified-ozempic`, `igj-2023-falsified-ozempic` |
| Fold "Why reports matter" | "Dutch doctors treated two people…" (kept without "Dutch"); "The EU side-effect database held 234 reports…" (kept as evidence, marked `residue-ok`, worded "Europe's side-effect database") | – |
| If you are not in the Netherlands: Lead and diagram `help-in-other-countries` | UK row (NHS 111, Yellow Card; kept in the new per-country tables); Germany row: 116 117 out of practice hours, regional poison centres, BfArM reporting portal | `gesund-bund-notfallnummern`, `bfarm-risiken-melden` |
| Fold "Contact details by country" | `<JurisdictionCard>` for BE and DE (UK and US are now in `<JurisdictionCards which="full" />`) | – |
| Hero | The huisartsenpost in Oss (`huisartsenpost-oss`) stays mapped for `nl` in `src/data/heroes.yaml`; English shows `hospital-emergency-entrance` | – |

## safety/warning-signs

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Frontmatter | Description "…or stop and call your GP"; summary "call your GP straight away. At night, call the out-of-hours GP service"; "Dutch doctors must keep what you tell them private" | – |
| Stop callout (cite line) | Same signs (kept word for word); Dutch government page among the sources | `rijksoverheid-urgent-medical-help` |
| Diagram `three-levels-of-help` | Level 2: own GP (huisarts) in the day, huisartsenpost (newer name: huisartsen-spoedpost) in the evening, at night and at weekends; level 3: appointment with your GP | `rijksoverheid-urgent-medical-help`, `thuisarts-wondroos`, `thuisarts-sepsis` |
| Paragraph after the diagram | "In the Netherlands, always call the huisartsenpost before you go to a hospital emergency department … Care from your GP and the huisartsenpost does not use your deductible (eigen risico)" | `rijksoverheid-huisartsenpost-seh` |
| "If you are not sure which level fits" | Call your GP, outside office hours the huisartsenpost | `rijksoverheid-urgent-medical-help`, `rijksoverheid-huisartsenpost-seh` |
| Infection diagram, step 4 | Sepsis; Thuisarts's sepsis page as a second source (NHS kept; Australian `au-healthdirect-cellulitis` added) | `thuisarts-sepsis` |
| Allergy | Thuisarts's page on swollen eyes and lips as a second source (NHS kept) | `thuisarts-dikke-ogen-lippen` |
| Effects of the substance itself | Pancreatitis and fluid loss with GLP-1 medicines, cited to the EU labels (the fact stays, cited to the US labels `fda-label-wegovy` 5.2/5.5 and `fda-label-mounjaro` 5.2/5.5) | `ema-epar-wegovy`, `ema-epar-mounjaro` |
| Tell the whole story | "In the Netherlands, doctors have a duty of confidentiality (medisch beroepsgeheim) … only a few special situations" (replaced by per-country privacy rules) | `knmg-beroepsgeheim` |
| Diagram `where-to-report` | Netherlands row: Lareb (anyone, also for online medicines; does not share your report with your doctor or pharmacist); Germany row: BfArM portal | `lareb-home`, `lareb-bijwerkingen-melden`, `bfarm-risiken-melden` |
| Where this list comes from | Lead "Most of it comes from Dutch GPs and the NHS"; fever example: Dutch GP advice is to call the GP or huisartsenpost straight away; table: Thuisarts on sepsis and wondroos; RIVM and Thuisarts on needle-stick injury; Thuisarts on allergy, chest pain and sudden weakness; the EMA safety committee (PRAC, June 2025) on NAION with semaglutide (replaced by the MHRA's February 2026 Drug Safety Update on the same risk, `mhra-2026-02-semaglutide-naion`, which itself refers to the European review) | `thuisarts-sepsis`, `thuisarts-wondroos`, `rivm-hygiene-piercing`, `thuisarts-hiv-pep`, `thuisarts-dikke-ogen-lippen`, `thuisarts-pijn-op-borst`, `thuisarts-verlamming`, `ema-prac-2025-06-naion` |
| Hero | The Dutch ambulance (`ambulance-den-haag`) stays mapped for `nl`; English shows `vital-signs-monitor` | – |

## safety/index

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Stop callout | "…when to stop and call your GP" | – |
| Diagram cite line | Trimbos's drugsinfo page on injecting among the sources | `drugsinfo-injecteren` |
| Fold "How Dutch harm-reduction services work" | Dutch harm-reduction services advise people who inject on new needles, not sharing equipment and safe disposal; simple steps prevent abscesses, blood infections, HIV and hepatitis; "we apply the same approach to peptides" (replaced by a country-neutral paragraph and a fold "Finding a harm-reduction service in your country") | `drugsinfo-injecteren`, `mainline-steroids-safe-injecting` |
| Where this advice comes from | Lead "Mostly official health bodies and Dutch GPs"; table rows Thuisarts (when to call your GP) and RIVM (hygiene, needle-stick); closing sentence on Dutch sources | `thuisarts-wondroos`, `rivm-hygiene-piercing` |

## safety/sharps-disposal

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Frontmatter | Description "Where used needles go in the Netherlands … short notes for Germany, Belgium, the UK and the US"; summary "In the Netherlands, ask your pharmacy for a needle box"; "…or use your town's chemical waste point" | – |
| Intro | A loose needle can prick others: Trimbos drugsinfo as a source (now `au-healthdirect-needlestick`; `frid-2016-fitter-recommendations` kept) | `drugsinfo-injecteren` |
| Never in a bin | "Not in the plastic recycling (PMD)"; drugsinfo as a source; "Medicines and their leftovers also do not belong in household waste, the sink or the toilet" (Dutch pharmacists' advice and the EU label; not checked for the four countries, so not carried over) | `drugsinfo-injecteren`, `apotheek-medicijnafval`, `ema-epar-wegovy` |
| "## In the Netherlands" | Get a needle container (naaldencontainer) at your pharmacy (apotheek); fold on what a container is (the FDA part is kept) with RIVM as a source; use it safely (checklist kept); return it to the pharmacy, or to the municipality's small chemical waste point (klein chemisch afval: milieustraat, chemokar, depot); some hospitals, GGDs and addiction services take needles; fold "Why a full container counts as medicine waste" | `apotheek-medicijnafval`, `apotheek-nadroparine`, `rijksoverheid-kca`, `rivm-hygiene-piercing`, `drugsinfo-injecteren` |
| After a needle-stick injury: stop callout | RIVM's steps: let it bleed, do not suck; wash with mild soap under warm running water, do not scrub with a brush; waterproof plaster; call the GGD, the GP (huisarts) or, out of hours, the huisartsenpost or an emergency department; "ideally within 1 hour, and no later than 72 hours" (replaced by healthdirect and WHO steps, country-neutral: see a doctor or emergency department straight away; PEP within 72 hours, CDC/NHS/WHO) | `rivm-hygiene-piercing`, `thuisarts-hiv-pep` |
| TimeStrip | Rows "Start of treatment (RIVM): ideally within 1 hour, no later than 72 hours" and "PEP against HIV (Thuisarts): preferably within 2 hours, possible up to 72 hours" (replaced by one row sourced to CDC, NHS and WHO: start as soon as possible, no later than 72 hours) | `rivm-hygiene-piercing`, `thuisarts-hiv-pep` |
| Fold "What the doctor will do" | Thuisarts as a source for the doctor's questions, PEP within 2 hours, "most GGDs can be reached 24 hours a day for PEP; when the GGD is closed, call a hospital emergency department", hepatitis B and the source-person HIV test (the medical content stays, now cited to WHO, CDC, NHS and healthdirect) | `thuisarts-hiv-pep` |
| "## Other countries" | `<Compare>` Germany / Belgium / UK / US (official advice found; a service that takes full containers); fold with Germany (medicine disposal differs by region, mostly residual waste; no federal guidance on household needles; Abfallberatung), Belgium (no official guidance found) and the UK and US (kept and expanded); `<JurisdictionCard>` DE, BE, UK, US | `gesund-bund-arzneimittel-entsorgen` |

## src/i18n/en/glossary/safety-a.json

Removed entries (full JSON in the snapshot file named above): `klein-chemisch-afval` (klein chemisch afval, kca),
`huisarts` (with the aliases "GP", "general practitioner"), `huisartsenpost` (huisartsen-spoedpost, out-of-hours GP
service), `ggd` (GGD, Municipal Health Service).

Removed Dutch aliases and sentences: `cellulitis` alias "wondroos" and the sentence "(Doctors in the Netherlands often
call a similar infection wondroos.)"; `sepsis` alias "bloedvergiftiging"; `needle-stick-injury` aliases "prikaccident",
"prikaccidenten"; `sharps-container` alias "naaldencontainer", the sentence "In the Netherlands you can get one at the
pharmacy." and the see-also `klein-chemisch-afval`; `medical-confidentiality` aliases "beroepsgeheim", "medisch
beroepsgeheim", the sentence "In the Netherlands there are only a few special situations in which a doctor may or must
share it." and the see-also `huisarts`.

Note for the Dutch site: `huisarts` carried the aliases "GP" and "general practitioner", so on English those words no
longer link to a glossary entry. Other glossary files (`safety-b.json`, `final-qa.json`, `guides.json`) still name
`huisarts` and `huisartsenpost` in `see_also`; the glossary page skips ids that do not exist.
