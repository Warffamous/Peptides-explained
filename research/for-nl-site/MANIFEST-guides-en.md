# Manifest: group guides-en (English refocus, 24 to 26 October 2026)

What left the English pages of this group because it was Dutch, Belgian, German or EU framing. Nothing was deleted
from `src/data/` (sources, heroes, media). The full text of every item is in two places:

- the snapshot: `research/for-nl-site/snapshot-2026-10-23/content/pages-en/<page>.mdx` (start-here, talking-to-your-doctor,
  index, compounds/index, the-case-for-reform) and `research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/guides.json`;
- git: `git show nl-source-2026-10-23:src/content/pages/en/<page>.mdx` and
  `git show nl-source-2026-10-23:src/i18n/en/glossary/guides.json`.

Re-check every fact before reuse on the Dutch site (last checked 20 to 22 October 2026). Every cite id below is still
registered in `src/data/sources/` (nothing was removed from the registry).

## start-here

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Frontmatter | Summary item "In the Netherlands, selling a medicine that has no licence is against the law"; related link `legal/nl` | – |
| §1 Compare, rows "Side effects counted" and "Benefits and risks weighed" | The EU label (EPAR) as the source of side-effect frequencies; "Before it was approved in the EU"; "None of them is an approved medicine" cited to the EMA search | `ema-epar-wegovy`, `ema-medicines-search` (replaced by the FDA label and the four countries' approvals and status searches) |
| §2 "This is true even when the name is right" | The Dutch medicines board (CBG) position that "research semaglutide" is not the medicine | `cbg-glp1-position` (replaced by `mhra-glp1-what-you-need-to-know`) |
| §2 fold "What can be wrong", wrong substance | "In 2023, fake pens sold as Ozempic in Germany held insulin" (BfArM) | `bfarm-ozempic-falsification` (replaced by the TGA's 2024 counterfeit-pen alert) |
| §2 fold "What can be wrong", last paragraph | The Dutch inspectorate (IGJ): a medicine ordered online can hold too much, too little or no active substance, and can damage organs if contaminated | `igj-online-medicijnen` (replaced by Health Canada's April 2026 advisory) |
| §2 fold "What you can check yourself" | "Without the checks that come with a doctor or pharmacist, you cannot know what you are getting" (IGJ) | `igj-online-medicijnen` |
| §3 "The law in plain words", Lead | "In the Netherlands, only medicines with a licence may be sold. BPC-157, TB-500 and KPV have none." | – |
| §3 Compare "An approved peptide ... An unapproved one" | Dutch rules: Wegovy approved in the EU since 2022; prescription from a pharmacy (Geneesmiddelenwet art. 61); selling, supplying or importing an unlicensed medicine is against the law (art. 40); "The rules in the Netherlands, checked on 22 October 2026" | `ema-epar-wegovy`, `ema-medicines-search`, `nl-gmw-art-61-prescription`, `nl-gmw-art-40-handelsvergunning` |
| §3 paragraph after the Compare | "Research use only" does not make a product licensed (art. 40); links to the German, Belgian, UK, EU and US law pages | `nl-gmw-art-40-handelsvergunning` |
| §3 fold "What Dutch law says, in more detail" | Geneesmiddelenwet: what counts as a medicine (art. 1); no licence, no sale, stock or import, exceptions for trials and an IGJ exemption (art. 40); prescription medicines only from a pharmacy (art. 61); no internet prescribing to a stranger (art. 67); link to Dutch law | `nl-gmw-art-1-geneesmiddel`, `nl-gmw-art-40-handelsvergunning`, `nl-gmw-art-61-prescription`, `nl-gmw-art-67-internet-prescribing` |
| §4 Diagram `evidence-ladder-start-here` | Semaglutide and tirzepatide "approved in the EU"; retatrutide "not approved anywhere yet", not on the EU review list; "In the Netherlands, in practice only available inside a trial" (CBG compassionate-use list) | `ema-epar-wegovy`, `ema-epar-mounjaro`, `ema-2026-10-under-evaluation`, `cbg-compassionate-use-list` |
| §4 fold "Slow rules have real costs" (the Wegovy insurance passage) | Wegovy approved but not paid for by Dutch basic insurance for obesity: the Zorginstituut called it effective but advised against payment in July 2024 (unclear health gain, high costs); people usually pay themselves; a new assessment under way in October 2026. Replaced by a sourced UK example (NICE TA1026: the NHS must fund tirzepatide for some adults, with up to 12 years to reach everyone eligible) | `zin-2024-wegovy-not-reimbursed`, `zin-wegovy-reassessment` |
| §4 fold, retatrutide paragraph | "On 5 October 2026 it was not on the EU list of medicines under review" | `ema-2026-10-under-evaluation` |
| §5 Diagram `what-a-doctor-can-do` | Semaglutide with insulin cited to the EU label; "Dutch law says your doctor must explain the risks, and other possible treatments" (WGBO art. 7:448); "Doctors and patients can report side effects to Lareb, also for products bought online" | `ema-epar-wegovy`, `nl-wgbo-art-448-information`, `lareb-bijwerkingen-melden` |
| §5 closing paragraph | Dutch medical secrecy (KNMG, WGBO art. 7:457); the Dutch GPs' patient website: you can come if you have thought of a way to treat yourself | `knmg-beroepsgeheim`, `nl-wgbo-art-457-confidentiality`, `thuisarts-naar-de-huisarts` |
| FAQ "Is it legal to get peptides online in the Netherlands?" | Selling, supplying and importing without a licence is against Dutch law (art. 40); link to Dutch law | `nl-gmw-art-40-handelsvergunning`, `ema-medicines-search` |
| FAQ "Did the FDA approve BPC-157 in 2026?" | "None of them is an approved medicine in the EU, the UK or the US"; "It changes nothing in the EU or the Netherlands" | `ema-medicines-search`, `nl-geneesmiddelenwet` |
| FAQ "My product came with a lab certificate" | "A product ordered online also gets no check like the one a doctor or pharmacist gives" (IGJ) | `igj-online-medicijnen` |
| FAQ "Will my doctor tell the police or my employer?" | "No. Dutch doctors must keep what you tell them secret. They may also refuse to answer questions from the police"; the exceptions (serious danger to others, child abuse or domestic violence, some infectious diseases) | `knmg-beroepsgeheim-doorbreken`, `nl-wgbo-art-457-confidentiality` |
| FAQ "Where can I report a side effect?" | "In the Netherlands, anyone can report a side effect to Lareb, also for a product bought online. Lareb does not pass your report on to your doctor." | `lareb-bijwerkingen-melden` |

## talking-to-your-doctor

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Frontmatter | Description "Your rights in the Netherlands"; summary "In the Netherlands, your doctor must keep what you say private" | – |
| Lead and intro | "In the Netherlands, what you say stays private"; "The rights described here are Dutch law"; "for GPs, physiotherapists and trainers" | – |
| What to bring (checklist) and tip | Thuisarts (Dutch GPs' patient site) as the source for the list of medicines, written questions, a companion ("two people remember more than one") and "ask for a longer appointment when you book" | `thuisarts-naar-de-huisarts` (replaced by healthdirect Australia; the longer-appointment tip had no four-country source and left) |
| Fold "Why each item helps" | The label: IGJ on what is inside; GLP-1 with insulin cited to the EU label | `igj-online-medicijnen`, `ema-epar-wegovy` |
| How to start, closing paragraph | "Tell your doctor what you have already thought of yourself. You can also say what you expect from them" (Thuisarts) | `thuisarts-naar-de-huisarts` |
| Fold "If you feel ashamed or afraid" | "GPs are used to talking about difficult things ... Often, just talking about it already helps" (Thuisarts); "Dutch law expects patients to give their doctor the information the doctor needs" (WGBO art. 7:452); secrecy (KNMG, art. 7:457) | `thuisarts-naar-de-huisarts`, `nl-wgbo-art-452-patient-information`, `knmg-beroepsgeheim`, `nl-wgbo-art-457-confidentiality` |
| If you already use something, table and closing paragraph | Label row cited to IGJ; GLP-1 with insulin cited to the EU label; "a doctor must keep a file with what is needed for good care. The file is private, and you can ask to see it and to get a copy" (WGBO art. 7:454–456, 7:457) | `igj-online-medicijnen`, `ema-epar-wegovy`, `nl-wgbo-art-454-456-records`, `nl-wgbo-art-457-confidentiality` |
| What to expect: Compare (one column, "Your doctor in the Netherlands") | Keeps it private by law (art. 7:457, KNMG); must explain risks, also of doing nothing (art. 7:448); nothing without consent (art. 7:450); cannot prescribe BPC-157 in the normal way (art. 40, IGJ named-patient exemption); a doctor should normally refer for a second opinion (KNMG 2024); may not agree with your plan | `nl-wgbo-art-457-confidentiality`, `knmg-beroepsgeheim-doorbreken`, `nl-wgbo-art-448-information`, `nl-wgbo-art-450-consent`, `nl-gmw-art-40-handelsvergunning`, `igj-leveren-op-artsenverklaring`, `knmg-2024-second-opinion` |
| Paragraph after the Compare | "They must give the care a good doctor would give, by their professional standards" (art. 7:453); you do not have to decide straight away (art. 7:450, Thuisarts) | `nl-wgbo-art-453-good-care`, `nl-wgbo-art-450-consent`, `thuisarts-naar-de-huisarts` |
| Fold "What a doctor can do instead of prescribing" | Dutch off-label rule: only with professional guidelines; while they are being written, consult the pharmacist (art. 68); report to Lareb | `nl-gmw-art-68-off-label`, `lareb-bijwerkingen-melden` |
| If you feel brushed off, closing paragraph | Second opinion "in the same field"; a doctor should normally refer and may refuse only for serious reasons; most health insurers only pay with a referral (KNMG 2024) | `knmg-2024-second-opinion` |
| Your rights: Lead, Diagram `who-can-find-out` ("in the Netherlands") and paragraph | Police: the doctor must keep silent and may refuse to answer police questions; others: not without permission; other carers: yes, and you can object; you: see your file and get a copy; the rare exceptions; all Dutch doctors have this duty (Thuisarts) | `knmg-beroepsgeheim-doorbreken`, `nl-wgbo-art-457-confidentiality`, `nl-wgbo-art-454-456-records`, `thuisarts-naar-de-huisarts` |
| Fold "Informed consent, and the law behind it" | The WGBO (Civil Code): information clearly and in time, in writing on request (art. 7:448); consent, parents for ages 12 to 15 (art. 7:450); the file, a patient statement, destruction on request (art. 7:454–456); secrecy (art. 7:457) | `nl-wgbo-art-448-information`, `nl-wgbo-art-450-consent`, `nl-wgbo-art-454-456-records`, `nl-wgbo-art-457-confidentiality` |
| What the law lets your doctor prescribe: Lead and Diagram `prescribing-routes` ("a Dutch doctor") | Licensed medicine via a pharmacy (art. 61); off-label only with professional guidelines (art. 68); pharmacy preparation exception (art. 40); named-patient supply only with an IGJ exemption on a doctor's declaration (artsenverklaring); trials; compassionate use only through a CBG-approved programme; no internet prescription to someone never met (art. 67) | `nl-gmw-art-61-prescription`, `nl-gmw-art-68-off-label`, `nl-gmw-art-40-handelsvergunning`, `igj-leveren-op-artsenverklaring`, `cbg-compassionate-use-criteria`, `cbg-compassionate-use-list`, `nl-gmw-art-67-internet-prescribing` |
| Paragraph after the diagram | "So a GP cannot simply write a prescription ... None of them is a licensed medicine" (EMA search) | `ema-medicines-search` |
| For professionals: Lead and closing paragraph | "I am a GP"; "We found no Dutch guideline from the NHG or the KNMG on patients who use unlicensed peptides (searched 22 October 2026)"; the Dutch Doping Authority's value-free prevention for people who use anyway | `dopingautoriteit-2025-harm-reduction-chair` |
| Fold "For doctors: rules and resources that apply" | KNMG code (autonomy, shared decisions, second-opinion referral); WGBO information duty; Dutch off-label rule; IGJ exemption for unlicensed medicines; Lareb; the Doping Authority's work with the Ministry of Health and the first Dutch clinic for steroid users (2010); "We know of no such clinic for peptide users" | `knmg-2024-second-opinion`, `nl-wgbo-art-448-information`, `nl-gmw-art-68-off-label`, `igj-leveren-op-artsenverklaring`, `lareb-bijwerkingen-melden`, `dopingautoriteit-2025-harm-reduction-chair` |
| Fold "For trainers and physiotherapists" | Selling or handing over an unlicensed medicine is against Dutch law (art. 40); injecting is a reserved procedure under the Wet BIG (art. 35–36); the IGJ on online medicines getting no check | `nl-gmw-art-40-handelsvergunning`, `nl-wet-big-art-35-36`, `igj-online-medicijnen` |

## index (home)

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Compare "A pharmacy medicine and an online vial" | "Authorised in the EU; only on prescription" (EPARs for Ozempic, Rybelsus, Wegovy); benefits and risks weighed (EPAR, CBG); "The EU regulator checked how well it is made before it was allowed"; "The Dutch regulator says it is unclear what is inside" | `ema-epar-ozempic`, `ema-epar-rybelsus`, `ema-epar-wegovy`, `cbg-glp1-position` |
| Paragraph after the Compare | Semaglutide checked by a regulator (EPAR, CBG); research semaglutide unchecked (CBG) | `ema-epar-wegovy`, `cbg-glp1-position` |
| Next paragraph | "Most of the other peptides ... have no authorisation anywhere" (EMA search) | `ema-medicines-search` |

## compounds/index

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Compare, rows "Tested in trials" and "Benefits and risks weighed" | EPARs for Wegovy and Mounjaro as the source; "Retatrutide, for example, was not on the EU review list in October 2026" | `ema-epar-wegovy`, `ema-epar-mounjaro`, `ema-2026-10-under-evaluation`, `ema-medicines-search` |
| Compare, row "Can a Dutch doctor prescribe it?" | Yes, from a pharmacy (art. 61); in development: only inside a trial (art. 40, CBG compassionate-use list); experimental: not in the normal way (art. 40) | `nl-gmw-art-61-prescription`, `nl-gmw-art-40-handelsvergunning`, `cbg-compassionate-use-list` |
| Paragraph after the Compare | "Medicines approved only outside the EU, for example in the US ... Their page says where, because a Dutch doctor cannot simply prescribe them" (art. 40); research semaglutide is not the approved medicine (CBG) | `nl-gmw-art-40-handelsvergunning`, `cbg-glp1-position` |

## the-case-for-reform (the owner's signed opinion; see research/refocus-notes/guides-en.md for each proposal before and after)

| Section (before) | What it said | Cite ids that left the page |
|---|---|---|
| Frontmatter | Related link `legal/nl` | – |
| Diagram `reform-position-in-brief`, row 1 | "Untested peptides are bought and used anyway", cited to the Dutch inspectorate's 2025 warning that illegal online offers are increasing | `igj-2025-illegal-online-medicines` |
| The case for caution | "The first European medicines directive followed in 1965: medicines must be independently assessed and authorised before they are sold" (EU law history; replaced by the 1962 Kefauver-Harris amendments and Australia's 1963 expert committee) | `ec-pharma-legislation-timeline` |
| Fold "Thalidomide's second lesson" | "in 2008 it was authorised in the EU for myeloma" | `ec-pharma-legislation-timeline` |
| People are already using these products | "We found no reliable count of how many people in the Netherlands use peptides from outside pharmacies"; "In 2025 the Dutch inspectorate and medicines board warned that illegal online offers of medicines are increasing" | `igj-2025-illegal-online-medicines` |
| Fold "Unknown products" | "Falsified peptide medicines, Belgium ... most often found on the Belgian market" (the study and its cite stay; only the country name left, written "Europe ... its country's market", marked as evidence) | – |
| Fold "Hidden from doctors" | "In the Netherlands, doctors must keep what you tell them confidential" (KNMG) | `knmg-beroepsgeheim` |
| Fold "Why unreported harm stays invisible" | Fake pens with insulin cited to the German regulator (BfArM) | `bfarm-ozempic-falsification` (replaced by the TGA's 2024 alert) |
| Fold "Why some compounds may never get a sponsor" | "Under current EU law, once a medicine is authorised, other companies cannot rely on its trial data to sell copies for 10 years (in some cases 11)"; "The EU agreed a reform of its medicines law in December 2025, with the new rules expected to apply from 2028" | `eu-directive-2001-83`, `ema-pharma-reform-page` |
| Fold "Costs for people now" | Wegovy authorised in the EU since 2022; July 2024 Zorginstituut advice against paying for it from Dutch basic insurance (unclear health gain, unclear long-term effect, no clear way of stopping, costs of up to €1.3 billion a year); reassessment discussed on 5 October 2026; the CBG reports increasing use as slimming aids without a prescription; "On 5 October 2026 it [retatrutide] was not under EMA evaluation" | `ema-epar-wegovy`, `zin-2024-wegovy-not-reimbursed`, `zin-wegovy-reassessment`, `cbg-glp1-position`, `ema-2026-10-under-evaluation` |
| Diagram `six-proposals` | 1: the 2021 EU pilot advising universities and non-profits on older medicines; 2: the Dutch drug-checking service, possible since the 1990s; 3: "Lareb accepts reports about products bought online"; 4: "Dutch medicines law is written around trade and advertising"; 5: the first Dutch clinic for health problems from anabolic steroids (2010); 6: EU conditional marketing authorisation | `ema-2021-repurposing-pilot` (as a precedent; the id stays on the page for the EMA's quote on incentives), `brunt-2011-dims`, `lareb-bijwerkingen-melden`, `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-84-85-advertising`, `dopingautoriteit-2025-harm-reduction-chair`, `ema-conditional-marketing-authorisation` |
| Fold 1 "Public trials" | "In 2021 the EMA and national regulators started a pilot giving scientific advice to universities and non-profit groups studying new uses of older, off-patent medicines ... It covered only authorised medicines. We propose extending the idea ..." | `ema-2021-repurposing-pilot` (as a precedent) |
| Fold 2 "Testing services" | "Since the 1990s the Dutch Ministry of Health has made drug testing possible for people who use drugs, through DIMS at the Trimbos Institute; by 2011 more than 100,000 samples had been handed in" | `brunt-2011-dims` |
| Fold 3 "Side-effect reporting" | "In the Netherlands anyone can report a side effect to Lareb, also for products bought online, and Lareb does not pass the report on to your doctor. Lareb has said that people who use illegal medicines can come to it too." "We propose saying clearly and often that such reports are welcome and confidential" | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines` |
| Fold 4 "Enforcement" | "Dutch medicines law forbids stocking, offering, selling, supplying and importing a medicine without a licence, and advertising it; breaches can be fined heavily. Using a product is not itself named as an offence, although importing one is, and the ban has no exception for own use." Link to Dutch law | `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-84-85-advertising`, `nl-gnw-art-101-fines` |
| Fold 5 "Guidance for doctors" | "In the Netherlands, a first outpatient clinic for people with health problems from anabolic steroids opened in 2010" | `dopingautoriteit-2025-harm-reduction-chair` |
| Fold 6 "Conditional routes" | The EU conditional marketing authorisation (less complete data for an unmet need, one year at a time, agreed studies); "Dutch compassionate-use programmes can also only be started by a manufacturer"; "EU cancer approvals show how long uncertainty can last" (the Davis study stays, marked as EMA evidence) | `ema-conditional-marketing-authorisation`, `cbg-compassionate-use-criteria` |
| Fold "Why the US vote on BPC-157 is not our model" | "None of these peptides is an approved medicine in the EU, the UK or the US"; "it changes nothing in the EU or the Netherlands" | `ema-medicines-search`, `nl-geneesmiddelenwet` |
| Hero | The Tweede Kamer plenary hall (`tweede-kamer-plenary-hall`) stays mapped for `nl` in `src/data/heroes.yaml`; English shows `wooden-gavel` | – |

## src/i18n/en/glossary/guides.json

Removed entries (Dutch or EU terms), as they were before the refocus:

```json
{
  "ema": { "term": "EMA", "aliases": ["European Medicines Agency"], "definition": "The European Medicines Agency. It checks medicines for the whole EU and advises whether they should be approved.", "category": "regulation", "see_also": ["medicines-regulator", "cbg"] },
  "cbg": { "term": "CBG", "aliases": ["CBG-MEB", "Medicines Evaluation Board", "College ter Beoordeling van Geneesmiddelen"], "definition": "The Dutch Medicines Evaluation Board. It decides which medicines may be sold in the Netherlands, and works with the EMA on EU decisions.", "category": "regulation", "see_also": ["ema", "medicines-regulator"] },
  "igj": { "term": "IGJ", "aliases": ["Health and Youth Care Inspectorate", "Inspectie Gezondheidszorg en Jeugd", "health inspectorate"], "definition": "The Dutch Health and Youth Care Inspectorate. It checks that care and medicines follow the law, and can act against people who sell medicines illegally.", "category": "regulation", "see_also": ["named-patient-route"] },
  "lareb": { "term": "Lareb", "aliases": ["Bijwerkingencentrum Lareb", "Netherlands Pharmacovigilance Centre"], "definition": "The Dutch centre that collects reports of side effects. Anyone can report a side effect to Lareb, also for a product bought online.", "category": "safety", "see_also": ["pharmacovigilance"] },
  "zorginstituut": { "term": "Zorginstituut Nederland", "aliases": ["Zorginstituut", "National Health Care Institute"], "definition": "The Dutch body that advises which care and medicines basic health insurance should pay for.", "category": "regulation", "see_also": [] },
  "dopingautoriteit": { "term": "Dopingautoriteit", "aliases": ["Dutch Doping Authority", "Doping Authority Netherlands"], "definition": "The Dutch national anti-doping organisation. It tests athletes, and gives information about the health effects of doping.", "category": "sport", "see_also": ["wada"] },
  "wgbo": { "term": "WGBO", "aliases": ["Medical Treatment Contracts Act", "Wet op de geneeskundige behandelingsovereenkomst"], "definition": "The Dutch law on medical treatment, part of the Civil Code. It sets out your rights as a patient: information, consent, privacy and access to your medical file.", "category": "law", "see_also": ["informed-consent", "medical-confidentiality", "medical-file"] },
  "knmg": { "term": "KNMG", "aliases": ["Royal Dutch Medical Association"], "definition": "The Royal Dutch Medical Association, the professional body for doctors in the Netherlands. It publishes guidance on how doctors should act.", "category": "law", "see_also": ["medical-confidentiality"] },
  "wet-big": { "term": "Wet BIG", "aliases": ["BIG Act", "Individual Health Care Professions Act"], "definition": "The Dutch law on health care professions. It says who may use titles such as doctor or nurse, and who may do risky procedures such as injections.", "category": "law", "see_also": ["reserved-procedure"] },
  "reserved-procedure": { "term": "reserved procedure", "aliases": ["reserved procedures", "reserved act", "reserved acts", "voorbehouden handeling", "voorbehouden handelingen"], "definition": "A medical procedure, such as giving an injection, that Dutch law reserves for doctors and some other care professionals. Others may do it at work only on their instructions.", "category": "law", "see_also": ["wet-big"] },
  "nhg": { "term": "NHG", "aliases": ["Nederlands Huisartsen Genootschap", "Dutch College of General Practitioners"], "definition": "The Dutch College of General Practitioners. It writes the guidelines Dutch GPs work by, and runs the patient website Thuisarts.", "category": "law", "see_also": ["nhg-standaard", "huisarts"] }
}
```

Entries kept but rewritten country-neutrally (the Dutch wording, for the Dutch site):

| Id | What left |
|---|---|
| `marketing-authorisation` | alias "handelsvergunning" |
| `medicines-regulator` | "Examples are the EMA in the EU, the CBG in the Netherlands and the FDA in the US"; see_also `ema`, `cbg` |
| `anabolic-steroids` | alias "anabolen" |
| `prescription-only-medicine` | aliases "UR-geneesmiddel", "UR-geneesmiddelen"; "In the Netherlands, a pharmacist may not hand it over without one." |
| `off-label` | "In the Netherlands a doctor may do this only if professional guidelines exist for that use. While they are still being written, the doctor must first talk it through with the pharmacist." |
| `named-patient-route` | aliases "artsenverklaring", "doctor's declaration"; "...a medicine that has no licence in the Netherlands. The doctor must state that approved medicines cannot be used, and the inspectorate (IGJ) must agree."; see_also `igj` |
| `informed-consent` | "Without your consent, nothing may be done to you." (now: apart from emergencies); see_also `wgbo` |
| `medical-file` | "In the Netherlands it is private, and you can ask to see it and get a copy."; see_also `wgbo` |
| `second-opinion` | "...in the same field. In the Netherlands your doctor should normally refer you for one if you ask."; see_also `wgbo` |

## Removed for another reason (fact-check, 26 October 2026; not European framing)

| Page and section | What it said | Cite id that left the page | Why |
|---|---|---|---|
| start-here §4 Diagram `evidence-ladder-start-here` (retatrutide row) and fold "Slow rules have real costs" | "In August 2026 its maker said it planned to ask the FDA for approval in early 2027" | `sec-lilly-2026-q2-results` (still registered in `src/data/sources/retatrutide.yaml` and cited by the retatrutide compound page) | The content brief and CONTENT-GUIDE §11: never cite a document whose title or URL names a company. Replaced by the TGA's September 2026 statement that no comparable regulator has approved retatrutide (`au-tga-2026-09-retatrutide-counterfeit`). The Dutch site may reuse the fact only under the same rule. |
