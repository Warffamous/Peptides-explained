# Finishing pass of the English refocus (26 October 2026)

Cross-group leftovers reported by the content fact-checkers, each verified first and then fixed. Inputs: the content
brief (`research/refocus-spec/content-brief.md`), `docs/CONTENT-GUIDE.md`, the fact-checked research
(`research/refocus/`), the group notes in this folder. Nothing was committed, pushed or deployed; the Lovable repo
was not touched. What left English pages is in `research/for-nl-site/MANIFEST-finish.md`.

Result: `npm run validate` 0 errors, `npm run build` passes (136 pages), `npm run check` 0 errors (commerce, HTML,
residue), `npx tsx scripts/check-locale-residue.ts dist --locale en`: 0 error/frame hits, now with `STRICT_RESIDUE = true`.
Run details are at the end.

## The common fix: country sources in shared data (items 1, 2, 3, 4)

Items 1 to 4 had one cause: shared data (the product check, image captions, explainers, the organ cards' status
line) had one source list for every locale, so earlier groups either left Dutch or EU sources in English reference
lists or deleted them, which also took them from the Dutch pages. The data now keeps a country's own sources per
jurisdiction, the way tracker items already did (`local_sources: { NL: [...] }`):

- `sources` are cited in every locale; `local_sources: { US: [...], UK: [...], CA: [...], AU: [...], NL: [...], EU: [...] }`
  only in a locale that shows that jurisdiction (`config/locales.json`, `jurisdictions.full`; WADA always).
- One helper decides: `visibleSources` in `src/lib/jurisdictions.ts` (its comment now names all users). The remark
  plugins run before Astro and cannot import it, so `src/plugins/locale-sources.mjs` mirrors it and takes the locale
  from the content file's path (a preview locale showing an English page shows the English sources, matching the
  English words).
- Schemas: `src/schemas/product-check.ts` (`local_sources` per check, `intro_local_sources`; a check needs `sources`
  or `local_sources`), `src/schemas/explainers.ts`, `src/schemas/media.ts` (`local_sources`),
  `src/schemas/organ-cards.ts` (`status_local_sources`).
- Users: `src/plugins/remark-product-check-sources.mjs`, `src/plugins/remark-explainer-sources.mjs` (it also passes
  the list to `<Explainer>` as `sourceIds`, so the "Based on" names match the numbered slots),
  `src/components/mdx/Explainer.astro`, `MediaCredits.astro`, `OrganCards.astro`, `src/lib/content.ts` (the sources
  index and compound source lists), `src/lib/organ-cards.ts` (`statusSources`, `sourcesOf(x, scope)`).
- Validator: every local id must exist (`scripts/lib/product-check.ts`, `explainers.ts`, `validate-media.ts`,
  `organ-cards.ts`); the product check must have a source for the intro and every check in each built locale; the
  organ-card check now counts only the regulatory rows the page's locale shows as "cited elsewhere" (it used to count
  the EU rows too, which is how the EMA ids got onto the English figure) and needs a status source per locale.
- Docs: CONTENT-GUIDE §3 ("Country sources in shared data"), MEDIA-GUIDE (registry example), EXPLAINERS.md (rule 5).

Checked on the build: the English pages cite only the US/UK/CA/AU sources; the Dutch preview's `/nl/sources/`
lists the Dutch caption sources again (Apotheek.nl under the sharps bin, the IGJ under the pharmacy photo).

### 1. Product check (`src/data/product-check.yaml`)

Verified: at HEAD the English pages no longer cited knmg-beroepsgeheim, thuisarts-naar-de-huisarts or
igj-online-medicijnen (group safety-en-b had replaced them on 24 October), but the replacement had also removed them
for the Dutch site (MANIFEST-safety-en-b.md: "the schema would need per-locale sources"). Now: the English sources
stay under US/UK/CA/AU (the label check's 21 CFR 201 cites under US; the doctor check's privacy sources under US
HIPAA, UK GMC, CA OPC, AU OAIC and healthdirect), and the pre-refocus Dutch and EU sources are back under NL and EU
(intro `igj-online-medicijnen`; label `eu-directive-2001-83`; look and storage `ema-epar-wegovy`; certificate
`ema-ich-q7-gmp-api`, `ema-2025-synthetic-peptides-guideline`; doctor `thuisarts-naar-de-huisarts`,
`knmg-beroepsgeheim`). Country-neutral sources (FDA online-pharmacy page, WHO toolkit, the PCAC briefings, the
studies, the NHS symptom pages) stay in `sources`. The Belgian study `janvier-2018-falsified-peptides-belgium` stays
in every locale: it is evidence (product analysis), not the reader's frame. `grep` of `dist/en`: no KNMG, Thuisarts,
IGJ or Apotheek anywhere.

### 2. Image caption sources (`src/data/media.yaml`)

Verified on `/en/sources/` (image credits): `gila-monster` listed `ema-epar-wegovy`; group glossary-ui-media-en had
already dropped `apotheek-medicijnafval` (sharps-bin-yellow), `igj-eigen-bereidingen-apotheek` (pharmacy-mortar)
and `eu-regulation-1223-2009-cosmetics` (skin-epidermis-dermis-he) from the lists, which removed them for Dutch too.
Now:
- `gila-monster`: "semaglutide copies a human hormone" rests on the US label on English (`fda-label-ozempic`, 12.1:
  "a GLP-1 analogue with 94% sequence homology to human GLP-1", re-read 26 October 2026), `ema-epar-wegovy` under EU.
- `sharps-bin-yellow`: FDA page shared, Apotheek.nl under NL. `pharmacy-mortar`: the four countries' compounding
  rules under US/UK/CA/AU, the IGJ page under NL. `skin-epidermis-dermis-he`: GB regulation under UK, FDA page under
  US, the EU regulation under EU.
- Kept on purpose: `mass-spectrometer-fda` (hero of safety/product-risk) cites `ema-2025-synthetic-peptides-guideline`
  for "it can show what is in a sample". That guideline is the page's own source for the same chemistry (mass
  spectrometry confirms identity; two orthogonal methods), cited on product-risk and what-is-a-peptide with the
  `residue-ok: EMA evidence` marker. It is scientific evidence, not the reader's rules (brief, "What may stay" 2),
  and no US/UK source in the registry says this as directly. A reviewer may swap it if one is added.
- `huisartsenpost-oss` and `ambulance-den-haag` keep their Dutch sources: they are Dutch heroes, not shown on English.

### 3. Retatrutide organ cards (`src/data/organ-cards/retatrutide.yaml`)

Verified: the figure head said "Not approved as a medicine anywhere (20 October 2026)" (a fixed UI string with a
worldwide claim and a stale date) and cited `ema-medicines-json` and `ema-2026-10-under-evaluation` on English.
Now the line is built from the compound's rows: "Not approved as a medicine in the US, the UK, Canada or Australia
(status checked on 23 October 2026)" (`organ-cards.ui.notApproved` = "Not approved as a medicine in {list} (status
checked on {date})"; the list is the locale's full jurisdictions whose rows are not authorised, the date the latest
`as_of` of those rows, as the At a glance tile does; a figure with no such row fails the build). Its sources are
per country and are the page's own sources for the same sentence in "What it is": US `fda-unapproved-glp1-concerns`,
UK `mhra-2026-10-counterfeit-pens` ("Retatrutide has not been authorised for use in the UK"), CA
`ca-dpd-extract-search-status-a-2026-10-24`, AU `au-tga-2026-09-retatrutide-counterfeit`; the EMA ids under EU.

### 4. glp1-class-hypo explainer and the online-vial-risks plate

Verified: `glp1-class-hypo` (tirzepatide, before-you-consider, monitoring) and `insulin-glp1-hypo` (semaglutide)
rested their dose advice on the EU SmPCs (`ema-epar-mounjaro`, `ema-epar-ozempic`). The US labels say the same, read
in full on 26 October 2026 (Mounjaro revised 08/2026, Ozempic revised 05/2026): insulin and glucagon secretion "in a
glucose-dependent manner" (12.1); little hypoglycaemia alone (Table 2, monotherapy: Mounjaro glucose <54 mg/dL in
0–1%, Ozempic severe 0%); increased risk "including severe hypoglycemia" with an insulin secretagogue or insulin,
which "may be lowered by a reduction in the dose of sulfonylurea … or insulin" (5.3 / 5.5; 7.1 "consider reducing
the dose"); educate patients on the signs and symptoms (17). So English now cites `fda-label-mounjaro` and
`fda-label-ozempic` (US), the EPARs moved under EU; Sola 2015 and ADA 2026 are shared. The words were already
neutral ("The labels suggest this", "call your local emergency number"); no change. Other explainers that cite an
EPAR do so for pharmacology (`glp1-action`: SmPC 5.1/4.5, evidence) or are not placed (`incretin-two-receptors`,
`incretin-three-receptors`, `pages: []`); left as they are.

Plate: the title "What may be wrong with a vial bought online" and the text-equivalent sentence "… when it is bought
online" assumed where the reader's product came from (CONTENT-GUIDE §1a). Now "What may be wrong with a vial that
did not come from a pharmacy" (`src/i18n/en/infographics.json`; the data file's header comment says the same; the id
`online-vial-risks` stays). The plate's sources are all FDA and studies; no EU product-information cite was on it.
Other "bought online" sentences on English pages describe case reports, test purchases or guidance in the third
person (product-risk's Italian case, the Hungarian test purchases, the GMC guidance) and stay.

## 5. "All statuses were checked on …" under the status tables

Verified for all 21 compounds against the rows' `as_of` (US, UK, CA, AU, WADA): at HEAD every such line matched the
rows (tesamorelin, pt-141, thymosin-alpha-1 and bpc-157 included). The `<RegulatoryTable />` above each line
already shows every row's date ("Checked" column), so the duplicated sentence was removed on all 21 pages (whole
line, or the leading sentence where the paragraph goes on: aod-9604, epitalon, hexarelin, mots-c, selank, semax,
thymosin-alpha-1). It cannot drift again when one row is re-checked. GHK-Cu keeps "The US cosmetic rules in the next
fold were checked on 24 October 2026." (not in the table). The hand-written `<Compare detail="… checked on …">` dates
were checked too and match the rows; they stay.

## 6. Schedule display

Verified: the table printed the bare code ("S4 · Prescription only medicine …", "Prescription Drug List · …"; the
string had become "{code}"). Now the data codes are a closed list, `SCHEDULE_CODES` in `src/schemas/vocab.ts` (S2 to
S10 of the Poisons Standard, and `PDL` for Canada's Prescription Drug List; the three Canadian rows changed from the
free text "Prescription Drug List" to `PDL`), and the table shows the name from `vocab.schedule`: "Schedule 4 (S4)",
"Prescription Drug List" (`compound.regulatoryTable.schedule` = "{name}"). Built: 8 rows "Schedule 4 (S4) · …",
3 rows "Prescription Drug List · …". CONTENT-GUIDE §5.1 comment updated.

## 7. Source titles that print emergency numbers

Verified: `uk-nhs-when-to-call-999` is in the registry but cited nowhere (it backs the number kept as data in
`jurisdictions.yaml`; never shown). `nhs-111` ("When to use NHS 111 online or call 111") was cited 6 times on
safety/warning-signs and safety/if-something-goes-wrong. Equivalent official pages whose titles print only the
service name exist, so they replace it (new, `src/data/sources/en-finish.yaml`, both read on 26 October 2026):
`uk-nhs-111-online` (111.nhs.uk, "Get help for your symptoms": "If you think you need medical help right now, 111
online can tell you what to do next"; England only) and `uk-nhs-what-happens-when-you-call-111` (nhs.uk, "What
happens when you call NHS 111", last reviewed 14 November 2022: the adviser may send an ambulance, refer you to an
urgent care service, arrange an out-of-hours visit or a nurse call-back, or give self-care advice). "NHS 111" is a
service name, which may be printed (CONTENT-GUIDE §1). The UK card's help link "NHS 111 (England)" still points to the
when-to-use page (a link name, not a title); `nhs-111` stays in the registry. A scan of all 1,373 titles on
`/en/sources/` for 911, 999, 000, 112, 111, 9-1-1 and "triple zero" finds only counts, page numbers, volumes and
the service names NHS 111 / NHS 111 Wales.

## 8. Melanotan II: "No country has approved it" / "approved nowhere"

Verified: no source says no country in the world has approved melanotan II; the data checks eight jurisdictions and
WADA (compounds-d notes, open question 7). Bounded to what was checked: summary "The US, UK, Canada and Australia have
not approved it"; lede "not approved in the US, UK, Canada or Australia"; both `<Lead>` answers and the What-it-is
Compare title ("not approved in any of the four countries"). In the sport fold, the S0 reading needs more than four
countries, so the sentence "No regulator has approved melanotan II" became "Melanotan II is not approved in the US,
the UK, Canada or Australia, and the European Medicines Agency's register of EU-wide approvals lists no melanotan II
medicine either; we did not check other countries", with the four rows' sources and `ema-medicines-search`, marked
`residue-ok: EMA evidence` (what was checked for the reading, not the reader's frame). The lede has 24 words (the
validator aims for 18, limit 25): shortening it would drop "erections and sickness".

Not changed, for the owners to look at: similar worldwide wording on other pages rests on a source or is hedged
(bpc-157 "The FDA found no approved product in any country"; epitalon "no country is known to"; retatrutide "the
Australian regulator says no comparable international regulator has approved it"), but a few titles and Lead answers
still say "approved nowhere" without a hedge in the same sentence: bpc-157 (What it is Compare title, Is it legal?),
kpv (What is KPV?, Compare title, Is it legal?), mots-c (Compare title, Is it legal?), retatrutide (description,
lede, Is it legal?). Their tables carry the hedge ("we know of none anywhere", "we found no approval elsewhere").

## 9. Tirzepatide in Australia: children from 10

Verified against the register on 26 October 2026: the ARTG public summary of entry 439430 (MOUNJARO KwikPen; PDF
"Produced at 27.10.2026 at 01:10:30 AEDT", product "Effective Date 7/10/2026") includes "adolescents and children aged
10 years and above weighing 50 kg or more with insufficiently controlled type 2 diabetes mellitus". The status research
(`status/tirzepatide.yaml`) used the TGA's under-evaluation list (last updated 21 September 2026: "MOUNJARO type 2
diabetes from age 10", under evaluation) and registrations page (25 September 2026: three tirzepatide records). Both
are older than the register record, so the indication is on the register by 7 October 2026; the decision date was not
found (www.tga.gov.au timed out from here; the ebs.tga.gov.au PDF loaded). Reconciled:
- new source `au-artg-mounjaro-439430-public-summary-2026-10-26` (`en-finish.yaml`);
- `indications.mounjaro-au`: "… By October 2026 also children from 10 who weigh 50 kg or more with type 2 diabetes."
  (moved last, with the date, instead of sitting in the first sentence as if registered in 2022);
- `regulatory_notes.AU`: adds "children 10+ (50 kg or more) with type 2 diabetes by Oct 2026";
- the Australia paragraph of the tirzepatide page now says so, and that the under-evaluation list of September 2026
  still showed it as under evaluation. The research file is the record and was not edited.

## 10. Remaining EU framing (residue check on src and dist)

Verified: the source scan had no error or frame hit left; "The EU labels say…" no longer appears on
safety/monitoring (it was rewritten by safety-en-a). The dist scan had one error, "Nederland" (item 13). Beyond the
word scan, every sentence on English pages that cites an EMA or EU source without naming Europe was listed (script in
the scratchpad; ~140 sentences). Almost all are pharmacology or trial data from the EPARs (evidence). Fixed, because
they gave EU-only advice as "the label" to the reader:
- tirzepatide, pregnancy paragraph: "The label does not recommend it in pregnancy, recommends contraception, and says
  to stop at least a month before a planned pregnancy" (EU SmPC 4.6) → the US label (8.1: use in pregnancy only if
  the potential benefit justifies the potential risk to the fetus; the animal data of 8.1) and the Canadian monograph
  (00085122, 23 June 2026, read today: "contraindicated during pregnancy"; "discontinued at least 1 month before a
  planned pregnancy"); tirzepatide, "Who should not use it": the one-month advice attributed to the Canadian label;
- semaglutide, "Who should not use it", pregnancy: `ema-epar-wegovy` → `fda-label-wegovy` (US label read today:
  "discontinue WEGOVY at least 2 months before a planned pregnancy").
Open for the compounds-a owner (not EU wording, so not a residue hit, and too many claims to swap safely in this pass):
the semaglutide and tirzepatide risk sections still cite the EU product information as "the label" for about 40
safety statements (interactions, monitoring, side effects). Most match the US labels; a claim-by-claim swap to the
FDA/UK labels would remove the last EU label cites from those pages.

## 11. EFSA alias (`src/i18n/en/glossary/stubs-b.json`)

The alias "European Food Safety Authority" is the agency's proper name, there so the marked evidence sentence on the
NR/NMN page links to the glossary term. Added an `allowStrings` entry in `config/locale-residue.json` (file
stubs-b.json, key `^efsa\.aliases\.\d+$`, pattern `europe`, with the reason) rather than rewording. CONTENT-GUIDE §1b
lists it among the examples.

## 12. News page and the EMA feed

Verified: `NewsList` already filters headlines by `feeds.yaml` jurisdiction (the current `news.json`, generated 22
October, holds no EMA item anyway), but the page's own "sources" list printed every feed, so English listed "European
Medicines Agency — news" with its EU description. `src/pages/[locale]/news.astro` now filters that list the same way
(`isVisible(f.jurisdiction, locale)`). Built: `dist/en/news/` has no EMA mention; `dist/nl/news/` lists it.

## 13. "Eli Lilly Nederland B.V." on the UK Mounjaro row

Verified true: the UK SmPC on emc (Mounjaro 2.5 mg KwikPen, read 26 October 2026) gives "Marketing authorisation
holder Eli Lilly Nederland B.V., Orteliuslaan 1000, 3528 BD Utrecht, The Netherlands", PLGB 14895/0340 to 0345, as do
the MHRA granted-licence lists in the research (`uk-mhra-ma-granted-2023/2024`). It is a fact and stays. The
allowance already existed (`allowPhrases`); the dist scan still flagged it because the products table rendered
`<span>Mounjaro</span><span>Eli Lilly …</span>` with no space, so the page text read "MounjaroEli Lilly" and the
phrase's word boundary failed (screen readers get the same run-together text). Fixed in
`src/components/mdx/AuthorisedProducts.astro` (a space between name, holder and the no-longer-sold badge; the holder
is display: block, so nothing changes visually) instead of loosening the pattern.

## 14. Health Canada DPD, NOC and LNHPD (26 October 2026)

The web search pages (health-products.canada.ca/dpd-bdpp/, /noc-ac/, /lnhpd-bdpsnh/) still redirect to
construction.hres.ca, but the official APIs answer again (they gave HTTP 503 on 23–24 October). Downloaded in full:
DPD `drugproduct` (58,379 products, all statuses), `activeingredient`, `status` (data to 23 October 2026); NOC
`noticeofcompliancemain`, `drugproduct`, `medicinalingredient` (NOCs to 23 October 2026). Searched (ingredient and
brand names, case-insensitive) for every name in merge.md §8 and the other unapproved compounds:

| Search | DPD | NOC |
|---|---|---|
| AOD-9604 / hGH fragment; epitalon, epithalon(e); MOTS-c; Selank, Selanc, TP-7; Semax, MEHFPGP; thymalfasin, thymosin, Zadaxin; elamipretide, MTP-131, Bendavia, SS-31, Forzinity | none | none |
| BPC-157, bepecin, PL 14736; TB-500, thymosin beta; KPV; GHK, copper tripeptide, prezatide; bremelanotide, Vyleesi, PT-141; hexarelin, examorelin; ipamorelin; CJC-1295; retatrutide, LY3437943 | none (one unrelated hit: "… VITRELLAE BPC", amyl nitrite, cancelled 2001) | none |
| NR, NMN, NAD+ as drugs | none (one unrelated sunscreen whose brand contains "NAD") | none |
| melanotan, afamelanotide | Scenesse, DIN 02569825, Approved 9 July 2026 | NOC 37875, 9 July 2026 (NDS) |
| tesamorelin, Egrifta | DIN 02423677 cancelled pre-market 13 July 2023; DIN 02438712 cancelled post-market 30 September 2022 | NOC 15555, 29 April 2014 (NDS); 16731, 27 March 2015 (SNDS) |

So every CA row that said "not authorised" holds, the batch c NOC searches are confirmed and the batch d NOC searches
(never run before) find nothing. Semaglutide and tirzepatide: every Canadian product in the data is in the DPD with
the status the page gives, and the latest NOC per brand matches the monograph the data links (Ozempic and Rybelsus
13 July 2026, Plosbrio 6 August 2026, Wegovy 2 October 2026, Mounjaro 23 June 2026, Zepbound 11 June 2026; Poviztra,
the Aspen products and Sandoz have no later NOC than their first). One row was wrong:
- `sevmia-ca` `authorised: 2026-06-25` → `2026-06-29`. The NOC database dates NOC 37782 (Sevmia, ANDS) 29 June 2026,
  the monograph's "Date of Authorization" is 29 June, and every other Canadian product's `authorised` is its NOC date;
  25 June is the decision summary's "Date of Decision" (merge.md had kept it). The products table now shows 29 June
  2026; the page text says "June 2026".

LNHPD (natural health products): the API serves the medicinal-ingredient list only 100 rows a page, so all 831,532
records (8,316 pages, none failed) were read and matched on the ingredient name, then joined to the full
product-licence list (307,842 records, latest licence date 23 October 2026) and the route endpoint. Result:
nicotinamide mononucleotide in 182 products, 173 with an active licence (status flag 1; licences from September 2021,
before the 2024 monograph, to August 2025); nicotinamide riboside in 35 products, 31 active; every active one oral;
NAD+ itself: one ingredient record and no product licence (NADH, a different substance: 43 active, oral). New
source `ca-lnhpd-api-nr-nmn-2026-10-26` (`en-finish.yaml`; products are counted, never named). The NR/NMN page's
Canada cells said "We could not check which … products hold one"; they now say the products are allowed as licensed
natural health products taken by mouth, with the counts (Verdict yes), and the Canada bullet adds the counts; the
Compare detail gives the date. The CA row (not authorised as a drug: no DIN) was right and is unchanged.

NMN monograph: the NHPID host answers again; the PDF (`ca-nhpid-nmn-monograph`) is still published, unchanged
("August 28, 2024"). The NHPID single-ingredient monograph index does not list it (that index page is dated
2019-03-01), so whether it is current still cannot be confirmed; the page keeps "we could not confirm that it is
still current".

Not done: the DPD and NOC web pages and product monograph links are still behind the construction page; the
monographs the data links were not re-opened, except Mounjaro's (pdf.hres.ca answered; item 10).

## 15. STRICT_RESIDUE and CI

With src and dist clean (0 error/frame hits, `--strict` exit 0), `STRICT_RESIDUE = true` in `scripts/lib/residue.ts`
(error and frame hits now fail `npm run validate`, so the build, and `npm run check`); `.github/workflows/ci.yml` runs
`npm run check:residue` after `check:html`. CONTENT-GUIDE §1b updated.

## Files changed

Code: `src/lib/jurisdictions.ts` (doc), `src/plugins/locale-sources.mjs` (new), `src/plugins/remark-product-check-sources.mjs`,
`src/plugins/remark-explainer-sources.mjs`, `src/schemas/{product-check,explainers,media,organ-cards,vocab,index}.ts`,
`src/lib/{content,organ-cards}.ts`, `src/components/mdx/{Explainer,MediaCredits,OrganCards,RegulatoryTable,AuthorisedProducts}.astro`,
`src/pages/[locale]/news.astro`, `scripts/lib/{product-check,explainers,validate-media,organ-cards,residue}.ts`,
`.github/workflows/ci.yml`, `config/locale-residue.json`.
Data and words: `src/data/{product-check,media,explainers}.yaml`, `src/data/organ-cards/retatrutide.yaml`,
`src/data/infographics/online-vial-risks.yaml` (comment), `src/data/compounds/{semaglutide,tesamorelin,tirzepatide}.yaml`
(PDL; Sevmia date), `src/data/jurisdictions.yaml` (comment), `src/data/sources/en-finish.yaml` (new, 4 sources),
`src/i18n/en/{organ-cards,infographics,vocab,compound}.json`, the 21 compound pages (item 5), melanotan-ii (item 8),
tirzepatide (items 9, 10), semaglutide (item 10), nad-precursors (item 14), safety/warning-signs and
safety/if-something-goes-wrong (item 7); source notes re-read in `src/data/sources/{tirzepatide,semaglutide,en-merge-check}.yaml`
(fda-label-mounjaro, fda-label-ozempic, fda-label-wegovy, ca-pm-mounjaro-2026-06-23); `research/refocus-notes/merge.md`
§8 (pointer to this file).
Docs: `docs/CONTENT-GUIDE.md`, `docs/MEDIA-GUIDE.md`, `docs/EXPLAINERS.md`; `research/for-nl-site/MANIFEST-finish.md`.

---

# Part 2: second finishing pass, reader findings (26 October 2026)

Thirty-three findings from the reader reviews (US, UK, Canada, Australia, Ireland/New Zealand), the science-loss check
and the guardrails check, each reproduced by an independent verifier, were fixed as below, or listed as open where an
owner, legal or medical decision, or an unreadable source, is needed. Nothing was committed, pushed or deployed; the
Lovable repo was not touched. What left English pages is in `research/for-nl-site/MANIFEST-finish.md` ("Second
finishing pass"). New sources: `src/data/sources/en-finish.yaml` (second block), each read on 26 October 2026.

Result: `npm run validate` 0 errors (the 8 "duplicate source id … will be merged" warnings for the title overrides
below are expected); `npm run build` passes (136 pages); `npm run check` passes (commerce, now also over table heads,
captions and fold summaries; HTML 0 errors, 0 warnings; residue 0 error/frame hits);
`npx tsx scripts/check-locale-residue.ts dist --locale en`: 0 error/frame, 0 warn hits.

## United States

1. **Having a peptide, or receiving one from a US seller** (legal/us, start-here, research-use-only, legal-routes).
   No page said whether a person who only receives an unapproved peptide breaks the law; the common case, a US
   "research" seller shipping between states, is not an import. 21 U.S.C. 331(c) (read today on law.cornell.edu,
   new source `usc-21-331`) lists "the receipt in interstate commerce" of an adulterated or misbranded drug among the
   prohibited acts; state law was not researched (us-uk-routes.md, "Federal law only"). legal/us now has an
   "Unknown" row in its Compare table and a section "Having one, or receiving one from a seller in the US" with an
   "uncertain" callout; the start-here FAQ US bullet, the research-use-only parcel row and the legal-routes
   personal-import section (a line that the US row is federal law, state rules not checked) point to it. The question
   is item 15 in `research/refocus-notes/legal-en-a.md` §9 (legal reviewer).
2. **US personal import on compound pages.** Semaglutide and tirzepatide: their US folds now say what the FDA says
   (illegal "in most circumstances"; a drug approved abroad but not in the US is illegal to import, FDA page re-read
   today; a seller's parcel generally counts as commercial), linking `#personal-import` and legal/us. The same
   paragraph, without the foreign-approval sentence, was added to the US folds of tesamorelin, retatrutide and
   melanotan II. PT-141 and NR/NMN were left as they are (the verifier found no parallel gap there).
3. **Melanotan II and the 2016 debarment order.** The Federal Register's own title and URL name the seller, so
   `fr-2016-melanotan-debarment` is no longer cited (seller rule): 9 citations on melanotan-ii.mdx,
   safety/before-you-consider and the US status row. "Not FDA-approved" now rests on an openFDA Drugs@FDA search run
   today (`openfda-drugsfda-search-melanotan-2026-10-26`: no product as generic name, brand name or active
   ingredient); "Legal to sell or supply?" on 21 U.S.C. 355. The sentence about the convicted seller is gone; no
   neutral source was found that the FDA acted against melanotan II sellers, so no enforcement sentence replaces it.
   The registry entry stays, with a comment that it must not be cited.
4. **US college and professional sport** (legal/sport-and-doping). USADA's About page (FAQ, read today; new source
   `usada-about`): "Most professional sports leagues and the NCAA are not WADA Code signatories, and they conduct
   their own anti-doping programs in-house", with USADA testing their athletes before Olympic events. Added to the
   US row of "Who the rules cover", the US row of "Where to ask", and one paragraph telling college and league
   athletes to ask their school or league. The At a glance sport tile was left as it is (wording set by CONTENT-GUIDE).
5. **"Legal to sell or supply?" in the US** (BPC-157, and the same pattern on KPV, TB-500, epitalon, MOTS-c, Semax,
   Selank, thymosin alpha-1, AOD-9604, CJC-1295 and ipamorelin): each US cell now starts with the general rule, "A new
   drug may not be sold across state lines without FDA approval" (`usc-21-355`), before the pharmacy-compounding
   point, so a 503A listing no longer reads as making sale legal.
6. **Country order of the regulatory folds.** The US fold now comes before "The UK, Canada and Australia" on
   tesamorelin, BPC-157, melanotan II, PT-141, CJC-1295, ipamorelin, KPV and TB-500 (left over from the Dutch order).
   The callout "US decisions do not apply here" (tesamorelin, CJC-1295, ipamorelin, hexarelin), which treated the
   other three countries as home, is now "US decisions do not apply in the UK, Canada or Australia".
7. **The EU product information as "the label"** (semaglutide, tirzepatide, retatrutide, before-you-consider). In
   the harm-reduction folds the bullets now cite the US labels (re-read today: Wegovy 218316s007, Mounjaro
   215866s044s045: hypoglycaemia with insulin or a sulfonylurea, GLP-1 agonists not recommended together,
   levothyroxine +33%, retinopathy monitoring, kidney injury after dehydration, pancreatitis, severe gastroparesis)
   and the Canadian Wegovy monograph for the INR advice (the acenocoumarol cases are the evidence and stay). Points
   only the EU SmPC makes stay as one marked sentence or bullet, named "the European product information". The
   example "gliclazide" (never FDA-approved) is gone; no other example was named, because availability in all four
   countries could not be checked here.
8. **The FDA reporting cell** (safety/if-something-goes-wrong). The link now goes to the form itself,
   https://contact.fda.gov/report-problem (read in the built-in browser today, nothing entered; new source
   `fda-report-a-problem-form`), described as the form for side effects and product quality or mislabelling
   problems; the cell says its first page does not say whether it takes reports about an online seller. The FDA's
   old unlawful-sales page redirects to the form (HTTP 302 today), but the form does not confirm such reports are
   taken, so no seller sentence was added.

## United Kingdom

9. **NHS 24 (Scotland) on the UK card** (`src/data/jurisdictions.yaml`): linked through NHS inform's "Right care
   right place" page (HTTP 200 today; "phone NHS 24 on 111 for free, day or night"; new source
   `uk-scot-nhsinform-right-care-right-place`). nhs24.scot still refuses scripts.
10. **One route per nation on the UK card.** nhs.uk entries now say England ("Poisoning: what to do (NHS England)",
    "Urgent help for mental health (NHS England)"), FRANK is labelled England (the research's England column), and the
    research's fact-checked routes were added: drug advice, NHS inform (Scotland) and nidirect (Northern Ireland);
    mental health, NHS 111 Wales (the gov.wales page on "111 press option 2"), NHS 24 and Breathing Space (Scotland),
    Lifeline (Northern Ireland, through the Department of Health's "Signposts to Help", since lifelinehelpline.info is
    not allowlisted); Samaritans "(whole UK)". All pages re-opened today (HTTP 200). The card renders on
    safety/if-something-goes-wrong, legal/uk and legal/index.
11. **legal/uk "call NHS 111"** is now "contact your health advice line: NHS 111 in England, NHS 111 Wales, NHS 24 in
    Scotland, or the GP out-of-hours service in Northern Ireland", with the nations' sources (`mhra-yellow-card` kept
    for "The MHRA cannot give medical advice").
12. **Northern Ireland and import** (legal/uk). Reg 17 re-read through the legislation.gov.uk XML (extent
    E+W+S+N.I.; 17(1)(d) covers import into Northern Ireland from outside the EEA; 17(6) lifts all of 17(1)). The
    diagram now says Northern Ireland has its own version of the licence rule and that the own-use exception applies
    in every part of the UK, without European wording. The `uk-hmr-2012-reg-17` note (legal-b.yaml) gained 17(1)(d).
13. **Glossary "NHS"** (`src/i18n/en/glossary/final-qa.json`): the public health service of England, Scotland and
    Wales, run by each nation; in Northern Ireland "Health and Social Care (HSC)" (checked on health-ni.gov.uk today:
    the Department is responsible for "Health and Social Care (HSC)"); the websites nhs.uk (which calls itself "The
    NHS website for England"), NHS inform and NHS 111 Wales.
14. **"In all four countries you can see your record"** (safety/if-something-goes-wrong, and the same sentence on
    safety/monitoring). The UK now rests on GOV.UK's "Data protection" guide (UK-wide; read today; new source
    `uk-govuk-data-protection`), and the sentence says what each source supports: the law gives the right in the US,
    the UK and Australia; in Canada the doctors' code of ethics asks for a copy on request, and each province's law
    was not checked (`cpsa-cma-code-of-ethics` is binding in Alberta only).
15. **NR/NMN doubled verdict.** The bare "No." cells now give a reason ("Not approved in any of the four
    countries."), and the same doubled word ("No No", "Yes Yes", "Unknown Unknown") was removed wherever a Verdict was
    followed by its own word: ss-31, cjc-1295, compounds/index, basics/why-not-a-pill, history/how-we-got-here,
    legal/research-use-only. The Northern Ireland novel-food sentence the reviewer proposed was not added (no source;
    the verifier advised against it).

## Canada

16. **Provinces with no advice line on the card.** albertahealthservices.ca timed out and gnb.ca showed a Cloudflare
    bot check in the built-in browser today (not passed), so the four pages are still unread. The Canada card now has
    a line under its list (new optional string `pages.jurisdiction.helpNote.<code>`, rendered by
    `JurisdictionCard.astro`, style in `components.css`): Alberta, New Brunswick, Prince Edward Island and Yukon run
    lines we could not open and link, so look on your province's or territory's health website; no line was found
    for Nunavut. The Canada row of the safety table says the same. The Nunavut poison note stays in the poison column.
17. **"A doctor can in some cases get it … through a special route"** (`compound.authorised.routeElsewhere`, shown on
    PT-141, SS-31 and tesamorelin): now "Where it is not authorised, a doctor cannot prescribe it in the usual way. The
    other legal routes each have strict conditions, and none is a way to get it on request." It no longer suggests the
    product is available through the SAP (brief, Canada caution).
18. **Tesamorelin on legal/ca**: "no longer sold since 30 September 2022; its last DIN was cancelled on 13 July 2023",
    with `ca-dpd-egrifta-din-02423677` added to the cites.
19. **Internal words in source titles.** Seven merged research sources had titles such as "batch c compounds" or
    another source's id, and one more, `au-artg-search-australia-legal-2026-10-24`, "status batches b and c". The
    refocus files were not edited (CONTENT-GUIDE §11): each id is repeated in `en-finish.yaml` with the same url and
    dates and a title that names the compounds searched; that file sorts first, and `src/lib/data.ts` keeps the first
    entry. `ca-dpd-search-canada-legal-2026-10-23` (cited for NAD+ and 19 other peptides while its link opens the BPC
    search) now says that its link opens the first of the searches. `ca-lnhpd-api-nr-nmn-2026-10-26` (our own file)
    now links the public LNHPD search, which answered again today, instead of the API documentation. CONTENT-GUIDE §11
    describes the override, and a rule that a dataset's link must show the claim.

## Australia

20. **NSW's new medicines and poisons law** (5 November 2026). New tracker item `au-nsw-medicines-law-2026` (status
    `adopted`; `updated` 2026-07-07, the NSW Health page date; `next_milestone` 2026-11-05; text in
    `src/i18n/en/tracker.json`, with the caveat that the 2026 Regulation and the Act as it starts were not read).
    legal/whats-changing: a NSW row in the watch table, "Three of these are rule changes", a paragraph in the detail
    fold, and a new Lead.
21. **Contraindications measured against the EU label** (semaglutide and tirzepatide US folds): the EU sentence is
    gone (manifest); the pages now say the UK and Australian product information was not checked on this point. The
    Australian PI could not be read: the TGA's PI repository answers with a licence-acceptance page, which this pass
    did not accept on the owner's behalf.
22. **TGA searches that opened the semaglutide results.** Repeated in the built-in browser today and registered per
    compound: ARTG tirzepatide (18 Mounjaro entries; Zepbound none), registrations tirzepatide (3), under evaluation
    tirzepatide (2), section 19A tirzepatide (6 lapsed UK KwikPen approvals to 31 March 2025), registrations and
    AusPAR retatrutide (none), under evaluation retatrutide (none), ARTG orforglipron (none). The tirzepatide and
    retatrutide pages, their AU status rows, the tirzepatide timeline event and the orforglipron cell on
    basics/why-not-a-pill cite them; the retatrutide ARTG claim cites `au-artg-search-australia-legal-2026-10-24`
    (its link is the retatrutide search). Semaglutide keeps the status-a sources, whose links show semaglutide.

## Ireland and New Zealand

23. **"Medsafe has not assessed these products"** (legal/ireland-and-new-zealand) now refers to the unapproved peptide
    products sold online, as the advisory does, and the page adds that Medsafe first approved Mounjaro, on
    prescription, on 22 December 2025 (NZ data sheet downloaded and read today; new source
    `nz-medsafe-datasheet-mounjaro`). For semaglutide it says we did not establish which medicines Medsafe has
    approved (the old data-sheet addresses return "Page not found"; research UNRESOLVED 4.6).

## Science kept

24. **Moderate kidney disease** (safety/before-you-consider): restored as a marked EMA-evidence sentence (Wegovy
    SmPC 4.8, from the verifier's extract).
25. **"Injecting into a vein can kill"** (safety/injection-safety): **not restored.** Searched today: NHS, NHS inform,
    healthdirect, We Are With You, the HSE/HRB "Juice" magazine (it says only "never the vein", and gives cycles and
    doses), FDA labels, PubMed case reports; none states that injecting into a vein can kill. The Mainline page is
    Dutch, gives injection technique and needle gauges, and the foundation is closing (research/safety-a.md), so it
    was not re-cited. Open item.
26. **GMP for trial medicines** (retatrutide, trial-versus-online table): the row "Made under medicine quality rules
    (GMP), and sterile?" is back, on 21 CFR 210.2(c) (part 211 in full from phase 2), UK SI 2004/1031 reg 43 (each
    trial-medicine batch made and checked under GMP; reg 36 the authorisation) and Canada's C.05.010(j) (all read
    today; new sources `ecfr-21-210-2`, `uk-si-2004-1031-reg-43`, `ca-fdr-c05-010`). The sterility caveat moved from
    the "Contents known?" cell into this row. Australia was not checked, so the cell names the three laws.
27. **Trial caveats** (legal-routes #trials), "What a trial can and cannot do for you": early trials mainly test
    safety and dose, phase 1 may use healthy volunteers, and a new treatment may be no better or worse than the
    standard one (`nhs-clinical-trials`, re-read today); in the US an ethics board may approve a trial only if its
    risks are reasonable in relation to the expected benefits (21 CFR 56.111(a)(2), new source `ecfr-21-56-111`). The
    Dutch CCMO sentence ("patients usually do not get better") had no four-country source and is not restored word
    for word.

## Guardrails

28. **The case for reform: owner-visible changes not listed.** Added to `research/refocus-notes/guides-en.md` §2:
    proposal 4's "We support those rules." became "We support the rules on selling." (the owner's signed support no
    longer covers the import rules), and "Those are real concerns" became "Those are real limits of money and
    capacity". The text was not changed: the owner decides. Whether a signed opinion shows a revision date is also
    the owner's call.
29. **Reform diagram caption**: the hedge is back, "Our six ideas. Something like each one already exists in the US,
    the UK, Canada or Australia." (17 words; the validator's reading-ease warning, 59, is left for the owner's
    words). Recorded in guides-en.md §2 for the owner.
30. **Lab-report ladder** (safety/product-risk): the sample-only statement and the closing line ("Only the pharmacy
    supply chain … No report replaces that.") are now inside the figure, as CONTENT-GUIDE §1a requires.
31. **"suppliers" in a row label** (history/the-croatian-lab): now "Different people, animals and materials?".
    `scripts/check-no-commerce.ts` now also checks `th`, `figcaption` and `summary` in the built pages (no other hit
    on the 136 pages); CONTENT-GUIDE §1 updated.

## Open items (for the owner, the legal and medical reviewers, the editor)

- Legal reviewer: US possession and receipt for one's own use, under federal law (21 U.S.C. 331(c)) and state law
  (legal-en-a.md §9, item 15).
- Owner: the case-for-reform wording (proposal 4's narrower support; line 174; the restored caption hedge), and
  whether the signed opinion shows a revision date.
- Medical reviewer or editor: a four-country, Irish or WHO source for "injecting into a vein can kill" on
  safety/injection-safety, or a decision to leave it out.
- A person with a normal browser: Alberta Health Link, New Brunswick Tele-Care 811, PEI 811 and Yukon 811 (URLs in
  research/refocus/canada-legal.md §14.1); once read, add them to `jurisdictions.yaml` and drop or shorten
  `pages.jurisdiction.helpNote.CA`.
- The UK and Australian product information for semaglutide and tirzepatide contraindications (the UK SmPC is on emc,
  not allowlisted; the TGA PI needs a licence acceptance); a sulfonylurea example sold in all four countries, if wanted.
- Editor: FRANK's operator and reach (UNRESOLVED in the research); Medsafe's semaglutide consents.
- Editor: the source-title overrides in `en-finish.yaml` work around "never edit the refocus files"; if preferred,
  edit the eight titles there and delete the overrides.

## Files changed in part 2

Content: `src/content/pages/en/{start-here,legal-routes,the-case-for-reform}.mdx`,
`src/content/pages/en/legal/{us,uk,ca,research-use-only,sport-and-doping,whats-changing,ireland-and-new-zealand}.mdx`,
`src/content/pages/en/safety/{if-something-goes-wrong,monitoring,before-you-consider,product-risk}.mdx`,
`src/content/pages/en/history/{the-croatian-lab,how-we-got-here}.mdx`, `src/content/pages/en/basics/why-not-a-pill.mdx`,
`src/content/pages/en/compounds/index.mdx`; compound pages aod-9604, bpc-157, cjc-1295, epitalon, hexarelin,
ipamorelin, kpv, melanotan-ii, mots-c, nad-precursors, pt-141, retatrutide, selank, semaglutide, semax, ss-31, tb-500,
tesamorelin, thymosin-alpha-1, tirzepatide.
Data and words: `src/data/jurisdictions.yaml`, `src/data/tracker.yaml`, `src/data/timeline.yaml`,
`src/data/compounds/{melanotan-ii,retatrutide,tirzepatide}.yaml`, `src/data/sources/en-finish.yaml` (18 new sources,
8 title overrides), `src/data/sources/melanotan-ii.yaml` (do-not-cite comment), `src/data/sources/legal-b.yaml`
(reg 17 note), `src/i18n/en/{compound,pages,tracker}.json`, `src/i18n/en/glossary/final-qa.json`.
Code and docs: `src/components/mdx/JurisdictionCard.astro`, `src/styles/design/components.css`,
`scripts/check-no-commerce.ts`, `docs/CONTENT-GUIDE.md` (§1, §9, §11). Notes: this file,
`research/refocus-notes/{legal-en-a,guides-en}.md`, `research/for-nl-site/MANIFEST-finish.md`.
