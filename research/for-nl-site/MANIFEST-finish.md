# Manifest: finishing pass of the English refocus (26 October 2026)

What this pass took off English pages because it was EU framing, and where it is kept for the Dutch site. Log:
`research/refocus-notes/finish.md`. Nothing was deleted from `src/data/`: every id below still exists.

## Kept in the data, now shown only on Dutch pages (no text to restore)

The shared data now keeps a country's own sources per jurisdiction (`local_sources`, CONTENT-GUIDE §3). The Dutch and
EU sources that earlier groups had removed from these lists are back, under NL or EU, so a Dutch page cites them again:

| File | Item | Sources under NL / EU (cited only where the locale shows that jurisdiction) |
|---|---|---|
| `src/data/product-check.yaml` | intro | NL `igj-online-medicijnen` |
| | label | EU `eu-directive-2001-83` |
| | look, storage | EU `ema-epar-wegovy` |
| | certificate | EU `ema-ich-q7-gmp-api`, `ema-2025-synthetic-peptides-guideline` |
| | doctor | NL `thuisarts-naar-de-huisarts`, `knmg-beroepsgeheim` |
| `src/data/media.yaml` | `gila-monster` caption | EU `ema-epar-wegovy` |
| | `sharps-bin-yellow` caption | NL `apotheek-medicijnafval` |
| | `pharmacy-mortar` caption (hero of legal-routes) | NL `igj-eigen-bereidingen-apotheek` |
| | `skin-epidermis-dermis-he` caption (GHK-Cu page) | EU `eu-regulation-1223-2009-cosmetics` |
| `src/data/explainers.yaml` | `insulin-glp1-hypo` | EU `ema-epar-ozempic` |
| | `glp1-class-hypo` | EU `ema-epar-mounjaro`, `ema-epar-ozempic` |
| `src/data/organ-cards/retatrutide.yaml` | the "not approved" line | EU `ema-medicines-json`, `ema-2026-10-under-evaluation` |

The Dutch words still need writing: `src/i18n/nl/product-check.json` (its doctor check can say "In Nederland …" again,
see MANIFEST-safety-en-b.md for the earlier English wording), and the Dutch explainer and caption texts. The
certificate check's link now points to the ladder (`safety/product-risk#what-a-lab-report-can-and-cannot-tell-you`);
the Dutch product-risk page needs the same anchor or its own.

## Text that changed on English pages

| Page | Section | What it said (EU source) | Now |
|---|---|---|---|
| compounds/tirzepatide | Risks, pregnancy paragraph | "In rats tirzepatide caused foetal malformations and growth reduction at doses toxic to the mother. The label does not recommend it in pregnancy, recommends contraception, and says to stop at least a month before a planned pregnancy." (`ema-epar-mounjaro`, EU SmPC 4.6 and 5.3) | the US label (use only if the benefit justifies the risk) and the Canadian monograph (contraindicated; stop one month before) |
| compounds/tirzepatide | Who should not use it | "Stop at least one month before a planned pregnancy." (`ema-epar-mounjaro`) | the same advice, attributed to the Canadian label |
| compounds/semaglutide | Who should not use it | pregnancy bullet cited `ema-epar-wegovy` | cites the US Wegovy label (same advice: stop two months before) |
| compounds/melanotan-ii | Sport (WADA) | "No regulator has approved melanotan II." | bounded to the US, the UK, Canada, Australia and the EMA's register (marked as EMA evidence) |
| news | the list of feeds | listed "European Medicines Agency — news" on English | the feed list is filtered by jurisdiction, like the headlines; the EMA feed shows on Dutch pages |

Full text before: `git show HEAD:<path>` (the commit before this pass) or `git show nl-source-2026-10-23:<path>`.

## Second finishing pass (reader findings, 26 October 2026)

Log: `research/refocus-notes/finish.md`, part 2. Nothing was deleted from `src/data/`; every id below still exists and is
still cited elsewhere on the same English page unless noted.

| Page | Section | What it said (EU source) | Now |
|---|---|---|---|
| compounds/semaglutide | Regulatory, "The United States" fold | "The European label (EMA product information) lists only hypersensitivity as a contraindication; we did not check the UK and Australian labels on this point." (`ema-epar-wegovy`, marked as EMA evidence; `git show HEAD:src/content/compounds/en/semaglutide.mdx`, line 412) | "We did not check how the UK and Australian product information treat this." The EU label is no longer the comparison for the reader's own label |
| compounds/tirzepatide | Regulatory, "The United States" fold | the same sentence for Mounjaro (`ema-epar-mounjaro`; HEAD line 403) | the same replacement |
| compounds/semaglutide | Harm reduction, "Who should not use it, interactions, and useful checks" | pancreatitis, gastroparesis, retinopathy, type 1 diabetes, insulin or sulfonylureas "(such as gliclazide)", other GLP-1 medicines, levothyroxine, INR ("the label advises frequent INR checks"), eye and kidney checks: all cited to `ema-epar-wegovy` (levothyroxine also `ema-epar-rybelsus`) as "the label" | the same points cited to the US Wegovy label (`fda-label-wegovy`), the INR advice to the Canadian monograph (`ca-pm-wegovy-2026-10-02`); the EU-only points (caution after pancreatitis; not with uncontrolled or unstable retinopathy; never a substitute for insulin) kept in one bullet, "What the European product information adds", marked as EMA evidence. `ema-epar-rybelsus` is still cited elsewhere on the page |
| compounds/tirzepatide | Harm reduction, same fold | pancreatitis and gastroparesis ("not studied; use with caution"), insulin or sulfonylureas "(such as gliclazide)", glucose, kidney and eye checks cited to `ema-epar-mounjaro` | cited to the US Mounjaro label (`fda-label-mounjaro`); "not studied, use with caution" kept as a marked sentence, "The European product information adds …" |
| compounds/semaglutide, compounds/tirzepatide, compounds/retatrutide, safety/before-you-consider | interactions | the example "gliclazide" for a sulfonylurea (licensed in the UK, Canada and Australia, never FDA-approved) | no example: "insulin or a sulfonylurea tablet" (the glossary term still lists gliclazide as an alias, so the word links if a page uses it) |

Restored on English (not European framing; the earlier groups had cut it with its Dutch or EU source):
safety/before-you-consider, kidney fold: "people with moderate kidney disease may get more stomach and gut side
effects on semaglutide" (`ema-epar-wegovy`, SmPC 4.8, marked as EMA evidence); compounds/retatrutide, trial-versus-online
table: a "Made under medicine quality rules (GMP), and sterile?" row, now on US, UK and Canadian law (`ecfr-21-210-2`,
`uk-si-2004-1031-reg-43`, `ca-fdr-c05-010`); legal-routes, trials: the early-trial caveat (`nhs-clinical-trials`) and the
risk–benefit rule for ethics boards (`ecfr-21-56-111`). Not restored: safety/injection-safety, "injecting performance drugs
into a vein can kill" (`mainline-steroids-safe-injecting`): no source from the four countries, Ireland or WHO was found
(finish.md part 2, open items).
