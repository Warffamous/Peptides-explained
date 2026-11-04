# Review: the English pages and the 2026 advertising rule, plus the English fixes from the Dutch work (4 November 2026)

**Why.** On 4 November 2026 you approved O3 and O17 of `docs/REVIEW-2026-10-27-dutch-site.md`. O3 put the 2026 rule in
CONTENT-GUIDE §1: *selling nothing is necessary but not enough: a text is advertising if it praises a medicine. Every
page stays balanced (each effect with its evidence level, uncertainty and risks), uses the official product-information
wording for authorised medicines, shows off-label use as off-label, names no dose and praises no product.* The basis is
Dutch case law (Raad van State, 25 February 2026, ECLI:NL:RVS:2026:1072; Rechtbank Amsterdam, 10 April 2026,
ECLI:NL:RBAMS:2026:5160; `research/nl/nl-law.md` fact 17a). O17 listed English errors found during the Dutch work.

**What was done.** Every English page, compound page and English string was compared with its Dutch version (the Dutch
pages were written and swept against this test). Each indication line of the five authorised medicines was checked
against the current official label (US prescribing information, UK SmPC, Canadian monograph, Australian ARTG summary),
all read on 4 November 2026. Each O17 point was checked at its source before it was fixed.

**Your answer (4 November 2026): approve all.** Live the same day: Lovable commit a42e468, built from source commit
56480ef, published by you; the changed pages and the redirects were checked on the live site.

The only Dutch change is the shared glossary entry `deletion-sequence`
(line B9), which you approved in O17.

**How to answer.** Reply "approve all", or "approve all except A3, D12" (the numbers below). The reform page is your
own signed text, so please answer R1–R4 one by one. Line numbers are in the new file; "Was" and "Now" show the changed
words only, without citations.

---

## A. The publisher line on the about pages (O3)

| # | Page and line | Was | Now |
|---|---|---|---|
| A1 | /en/about/funding/ :42 (diagram caption) | "How a paid link could turn facts into an advert." | "How money, or words that praise, can turn facts into an advert." |
| A2 | /en/about/funding/ :46 (diagram, step 3) | "An independent writer can still be advertising. The EU Court of Justice ruled that what counts is the purpose of the message." | adds: "In 2026 Dutch courts upheld fines on an information website and on articles in a magazine and a newspaper. They praised prescription medicines. That the writers did not sell those medicines made no difference." |
| A3 | /en/about/funding/ :47 (diagram, step 4) | "**So we earn nothing from any product.** Without money from sales, our information stays information." | "**So we earn nothing from any product, and write nothing that praises one.** We describe the evidence, with the risks and what nobody knows." (as on /nl/about/funding/) |
| A4 | /en/about/funding/ :51 | cites the law and the 2009 EU ruling | also cites the two 2026 rulings |
| A5 | /en/about/funding/ :54 | "If we earned money when someone bought one, our explanations could become advertising." | adds: "But a text can be advertising without any money, if it praises a medicine." (cites the Raad van State ruling) |
| A6 | /en/about/ :44 | "That law forbids any advertising for a medicine without a licence. That is why we sell nothing, link to no seller and give no doses." | "That law forbids any advertising for a medicine without a licence, and public advertising for prescription-only medicines. A text can be advertising even when its writer sells nothing: courts look at whether it praises a medicine. That is why we sell nothing, link to no seller, give no doses and praise no product." |
| A7 | /en/about/editorial-policy/ :120–133 (fold "Why the line is where it is") | "… would give our information that purpose. Without them, our information stays information. That is why we name no sellers and give no doses." | "Leaving those out is not enough on its own: words that praise a medicine can do the same." Then a paragraph on the two 2026 rulings (as on /nl/about/editorial-policy/: the Council of State upheld fines on an information website for stressing the medicines' claimed good points in persuasive words; the Amsterdam court upheld fines on two articles built on weight-loss stories, one about off-label use, without the label's side effects and contraindications, and said a purely informative article in line with the product information would not be fined). Then the five points "For our pages, that means" (effect with evidence, uncertainty and risks; no success stories, "results", before-and-afters or user stories; approved medicines follow their product information; off-label called off-label, never a benefit; unapproved compounds: nothing beyond the evidence, no attractive words). Ends: "That is why we name no sellers, give no doses and praise no product. This is our reading of the law and the rulings; an independent lawyer has not yet checked it." |
| A8 | /en/about/editorial-policy/ :105 (Compare) | "In both directions: where evidence is weak, and where it is promising" | "… and where it is stronger" |
| A9 | /en/about/editorial-policy/ :142, :144 ("Words we avoid") | "words that make a compound sound like a cure"; "… and for which use." | "words that praise a compound or make it sound like a cure"; "… for which use, with the main side effects." |

## B. The O17 fixes (each checked at its source)

| # | Page and line | Was | Now | Checked against |
|---|---|---|---|---|
| B1 | /en/basics/how-signalling-works/ :77 | Compare row printed "Yes Yes" (the tick component already prints the word) | the extra "Yes" removed | the component `Verdict.astro` |
| B2 | /en/safety/before-you-consider/ :239 | "Unknown Unknown" | "The labels say it is not known whether it happens in people" / "The same: not known in people" | same component; the labels already cited |
| B3 | /en/compounds/kpv/ :78 (mechanism step 6) | "Faster recovery in rodent colitis and wounds" | "Faster recovery in mice with colitis and in scraped rabbit corneas" | the study card on the same page (Bonfiglio 2006, rabbits) |
| B4 | /en/compounds/pt-141/ :148, :351, :372 | "the FDA warned several online sellers…"; "Warning letters to online sellers"; "sent warning letters to several online sellers … The letters state" | "wrote to an online seller that its products, PT-141 among them, are unapproved new drugs"; "A warning letter to an online seller in August 2026"; "sent a warning letter to an online seller … The letter states" | source note of `fda-warning-letters-index`: only letter 735067 (24 August 2026) naming PT-141 was read |
| B5 | glossary "recreational athlete" (`legal-b.json` :356) | "Under the 2027 World Anti-Doping Code, an athlete below national level …" | "In the World Anti-Doping Code since 2021: an athlete below national level …" | `wada-code-2021` source note (the 2021 Code defines it); the sport page fold about the 2027 Code is unchanged |
| B6 | /en/compounds/retatrutide/ :120 (study card) | "In 98 adults with obesity and at least 10% liver fat" | "In 98 adults with obesity or overweight and at least 10% liver fat" | Sanyal 2024 (PubMed 38858523: participants of the phase 2 obesity trial, which enrolled obesity or overweight, see the page's own card for that trial) |
| B7 | retatrutide liver organ card (`organ-cards.json` :132) | "In 98 adults with obesity and fatty liver" | "In 98 adults with obesity or overweight and fatty liver" | same |
| B8 | /en/compounds/cjc-1295/ :586 and /en/compounds/melanotan-ii/ :538 (the inline-link warnings) | the four reporting schemes as direct links to fda.gov, mhra.gov.uk, canada.ca, tga.gov.au | the same four names, cited, plus "The links are under [help and reporting in your country]" (the contact cards on /en/safety/if-something-goes-wrong/). Both pages now have 0 warnings. **Note:** 17 other English pages use the same direct links and keep them; say if you would rather keep the links on these two as well (then don't approve B8). | the validator |
| B9 | glossary `deletion-sequence`, **English and Dutch** (`safety-b.json` :32/:34, NL :37) | "…misses one or more of its building blocks, or stops too early (a truncated sequence)"; English aliases "truncated sequence(s)" | "…misses one or more of its building blocks. … A chain that stops too early is a different impurity, a truncated sequence." Dutch: "… Een keten die te vroeg stopt, is een andere onzuiverheid: een afgebroken sequentie." The English aliases are removed (no page uses them) | EMA guideline on synthetic peptides, §4.3.2 (deletion, truncated and insertion sequences listed separately), source note of `ema-2025-synthetic-peptides-guideline` |
| B10 | /en/compounds/melanotan-ii/ :16 (lede; the fifth warning) | "A lab-made tanning drug, not approved in the US, UK, Canada or Australia. It darkens skin and moles, and can cause erections and sickness." (24 words) | "An unapproved tanning drug. It darkens skin and moles, and can cause erections and sickness." (the badge under the title names the four countries) | the validator (aim: 18 words) |

## C. Indication lines of the authorised medicines (checked against the labels on 4 November 2026)

Result: 36 of 41 lines match the label. Five described the teenage group too widely (the labels require obesity
**and a body weight above 60 kg**). No label's indications changed after 27 October 2026.

| # | Product (semaglutide page) | Change |
|---|---|---|
| C1 | Wegovy, Canada (:157) | adds "alongside a reduced-calorie diet and more physical activity"; teenagers "with obesity and body weight above 60 kg when diet and activity alone have not worked"; MASH "in adults" (monograph of 2 October 2026, section 1) |
| C2 | Poviztra, Canada (:161) | the same, without MASH (monograph of 22 December 2025) |
| C3 | Sevmia, Canada (:164) | was "adults and children from 12, alongside diet and more physical activity" with no BMI; now the BMI groups and the 60 kg teenage group, as C2 (monograph of 29 June 2026) |
| C4 | Wegovy, Australia (:170) | diet and activity; teenagers "with obesity and body weight above 60 kg"; MASH "in adults" (ARTG summary, effective 25 June 2026) |
| C5 | Poviztra, Australia (:172) | the same, without MASH |
| C6 | Wegovy, UK (:153) | MASH "in adults" (SmPC 4.1, September 2026; minor) |
| C7 | Vyleesi, US (PT-141 page :138) | "causes marked distress" → "causes marked distress or interpersonal difficulty" (label section 1; minor) |

## D. Authorised medicines: balance, label wording and off-label use

| # | Page and line | Was | Now |
|---|---|---|---|
| D1 | semaglutide :7 (TL;DR) | "Wegovy: weight loss." | "Wegovy: weight loss and keeping it off." (label: reduce excess weight and keep it off) |
| D2 | semaglutide :9 (TL;DR) | "A prescriber checks it suits you. A pharmacy supplies it." | "A prescriber checks it suits you." (word limit of the box) |
| D3 | semaglutide :15 (TL;DR) | "Some fake pens held insulin, so blood sugar can fall too low." | "Some fake pens held insulin: blood sugar can fall too low." (word limit) |
| D4 | semaglutide :16 (lede) | "A medicine on prescription for type 2 diabetes and weight." | "A prescription medicine for type 2 diabetes and weight loss." |
| D5 | semaglutide :239 | — | adds: "The risks of the approved medicine are set out further down this page, under Risks." |
| D6 | semaglutide :309 (new, after the result figures) | — | "These figures apply to the groups that took part. Many participants also had side effects, mostly nausea and other stomach and gut problems (see the risks section)." |
| D7 | semaglutide :463 | "A weight-management medicine that lowered heart events … in a large trial" | adds "(16.6% stopped it because of side effects, against 8.2% on placebo)" (SELECT, already on the page) |
| D8 | semaglutide :586 (legal route) | — | adds: "Ozempic and Rybelsus are approved for type 2 diabetes, and Wegovy for weight management. Using Ozempic or Rybelsus to lose weight is off-label: outside the approved use." |
| D9 | tirzepatide :7 (TL;DR) | "Type 2 diabetes and weight loss (Mounjaro; Zepbound for weight in the US and Canada)." | "Type 2 diabetes. Also weight loss for adults with obesity, or overweight and a health problem." (label groups; in the UK and Australia Mounjaro has both uses, so no brand split in the box) |
| D10 | tirzepatide :9 (TL;DR) | "A prescriber checks it suits you; pharmacies supply it." | "A prescriber checks it suits you." (word limit) |
| D11 | tirzepatide :11 (TL;DR) | "Yes, for blood sugar and weight. Average loss in a large trial: about 15 to 21%." | "Yes, for blood sugar and weight, in large trials. Much weight came back after stopping." (as on Dutch; SURMOUNT-4 is on the page) |
| D12 | tirzepatide :16 (lede) | "A weekly injection on prescription for type 2 diabetes and weight." | "A weekly prescription injection for type 2 diabetes and weight loss." |
| D13 | tirzepatide :84 (mechanism) | — | adds "Stomach and gut side effects are common." |
| D14 | tirzepatide :305 (new, after the result figures) | — | "Against this stand side effects. Stomach and gut problems, such as nausea, are common, most of all while the dose is being raised (see the risks section)." |
| D15 | tirzepatide :353 (MASH trial) | — | adds "MASH is not an approved use of tirzepatide." |
| D16 | tirzepatide :563 (legal route) | — | adds: "In the US and Canada, Mounjaro is approved for type 2 diabetes and Zepbound for weight management; using Mounjaro to lose weight there is off-label: outside the approved use." |
| D17 | tesamorelin :9 (TL;DR) | "Yes, in people with HIV: deep belly fat shrank by about 15%. It returns after stopping." | "In large HIV trials, deep belly fat shrank by about 15%. It came back after stopping." |
| D18 | tesamorelin :16 (lede) | "A US prescription medicine for belly fat in HIV, tested in large trials." | "A US prescription medicine for extra belly fat in adults with HIV." |
| D19 | tesamorelin :156 | "Tesamorelin is a medicine with real trials behind it, for one narrow use" | "In the US, tesamorelin is an approved medicine. It was tested in large trials in people, for one narrow use" |
| D20 | tesamorelin :167 (callout) | "Tesamorelin is a real medicine, tested in large trials in people and approved in the United States." | "Tesamorelin was tested in large trials in people and is an approved medicine in the United States." |
| D21 | tesamorelin :243 (Lead) | "Yes, for deep belly fat in people with HIV. … health benefits are unproven." | "In people with HIV, deep belly fat shrinks. … health benefits are not shown." |
| D22 | tesamorelin :251 (figure title) | "More people reached normal liver fat" | "In one small trial, more people reached normal liver fat" |
| D23 | tesamorelin :253 | — | adds: "The liver trial was small, and fatty liver is not an approved use. Against these effects stand risks, such as higher blood sugar and IGF-1 far above normal (see Risks)." |
| D24 | tesamorelin :284 (fold title) | "Fatty liver: the most promising newer evidence" | "Fatty liver: newer evidence, still small" |
| D25 | tesamorelin :291 | "This is promising and from a well-designed trial with liver biopsies. It is also small" | "The trial was well designed, with liver biopsies. But it is small" |
| D26 | PT-141 :4 (description) | "for low sexual desire in women … Effects, trials, risks and status." | "for low sexual desire in premenopausal women … Trials, risks, status." (label population) |
| D27 | PT-141 :142 (Lead) | "a medicine for low sexual desire in women." | "a medicine for women with low desire for sex before the menopause." |
| D28 | PT-141 :156 | "It is a real medicine with real trials, for one narrow use" | "In the US it is an approved medicine, tested in large trials, for one narrow use" |
| D29 | PT-141 :167 (callout) | "a real medicine with known short-term risks for one use in the US, and an unapproved product in the other three countries" | "in the US, a medicine with known short-term risks for one use; in the other three countries, an unapproved product" |
| D30 | PT-141 :247 (figure title) | "More women said it helped them" | "More women said it helped than on placebo" |
| D31 | SS-31 :7 (TL;DR) | "Barth syndrome, a rare inherited disease that can weaken the heart and muscles." | "To improve muscle strength in Barth syndrome, a rare inherited disease." (the label's use; the trials found no heart benefit) |
| D32 | SS-31 :45 (fact tile "Approved for") | "Barth syndrome, in people weighing at least 30 kg" | "Muscle strength in Barth syndrome (30 kg or more)" |
| D33 | retatrutide :79 (mechanism title) | "Large weight loss, less liver fat, lower HbA1c" | "Weight loss, less liver fat, lower HbA1c" |
| D34 | retatrutide :280 (Lead) | "In large trials, weight fell a lot and blood sugar improved." | "In large trials, weight and blood sugar fell. Many had side effects." |
| D35 | retatrutide :288 | — | adds before "Weight is a surrogate": "Many participants had side effects, mostly diarrhoea and nausea. Up to 12 in 100 stopped because of side effects or death (see the risks section)." |
| D36 | retatrutide :357 (heading) | "Where the evidence is genuinely promising, and what the wait costs" | "What the evidence does show, and what the wait costs" |
| D37 | retatrutide :359 | "For people with severe obesity, that is a real prospect." | "For people with severe obesity, that may matter. At the same time, many participants had side effects, mostly stomach and gut problems (see the risks section). And no regulator has yet weighed the benefits against the risks." |
| D38 | thymosin alpha-1 :7 (TL;DR) | "A natural immune peptide, first found in the thymus. It is not TB-500…" | "The body's own immune peptide, first found in the thymus. Not TB-500…" ("natural" reads as reassurance) |
| D39 | thymosin alpha-1 :83 (Lead) | "It is a natural immune peptide. Italy and some other countries use it as a medicine." | "An immune peptide the body makes. Italy and some other countries use a lab-made copy as a medicine." |

## E. Unapproved compounds: praise words and one-sided passages

| # | Page and line | Was | Now |
|---|---|---|---|
| E1 | BPC-157 :38 (fact tile) | "Routes with human results" | "Routes tested in people" |
| E2 | BPC-157 :250 | "Promising animal data are a reason to run a good trial" | "Positive results in animals are a reason to run a good trial in people" |
| E3 | BPC-157 :332 (fold title) | "Where the evidence is genuinely promising, and what the gap costs" | "Where the evidence is stronger, and what the gap means" |
| E4 | BPC-157 :334 | "Animal toxicology so far shows no genotoxicity and no acute toxicity at high doses." | "Animal toxicology from one laboratory, lasting 28 days at most, found no genotoxicity and no acute toxicity at high doses, but the FDA's re-analysis of the same data flagged possible clotting, liver and blood-fat signals." (both on the page already) |
| E5 | TB-500 :284 | "The one independent rat study … on a tendon was positive." | adds ", with few animals per test" |
| E6 | GHK-Cu :123 (Lead) | "In cells it carries copper and boosts collagen." | "In cells it carries copper, and cells made more collagen." |
| E7 | KPV :53 (grade note) | "the gut-disease evidence, which is the strongest therapeutic signal" | "the gut-disease evidence, where the results in animals are clearest" |
| E8 | KPV :156 | "keep the useful half of alpha-MSH" | "keep the half of alpha-MSH that researchers wanted" |
| E9 | KPV :240 | "The anti-inflammatory mechanism … consistent benefit … Promising cell and mouse data are a reason to run a good trial" | "The proposed anti-inflammatory mechanism … a repeated benefit … Results in cells and mice are a reason to run a good trial in people" |
| E10 | KPV :252 (diagram cell) | "The clearest therapeutic signal" | "The clearest results in animals" |
| E11 | KPV :264 | "The cell evidence is KPV's strongest suit." / "… is genuinely reassuring about the basic biology." | "The cell work is the part of the KPV research that has been repeated most often." / "… makes the basic biology more credible." |
| E12 | KPV :266 (heading) | "Animals: promising, but shallow and clustered" | "Animals: some results, but limited and from few laboratories" |
| E13 | KPV :286 (fold title) | "Where the evidence is promising, and where it is not" | "A candidate for trials, but never tested in people" |
| E14 | CJC-1295 :163 | "picked CJC-1295 as the most promising" | "chose CJC-1295, the version the company thought most promising" |
| E15 | CJC-1295 :265 | "The authors called it 'safe and relatively well tolerated' … Side effects were common, though" | adds "That judgement covers a few weeks in healthy adults, and side effects were common" |
| E16 | CJC-1295 :297 (fold title) | "What is genuinely promising, and what the gap costs" | "What spoke for the idea, and what the gap costs" |
| E17 | CJC-1295 :299 | "A related approved medicine shows that this route can work for a specific use: tesamorelin … in adults with HIV." | "A related medicine was approved, for one specific use: tesamorelin … in adults with HIV and lipodystrophy." (label wording) |
| E18 | ipamorelin :323 (fold title), :325 | "Where the evidence is promising, and what the gap costs"; "Some of the biology is solid. … has passed a regulator: macimorelin, as a diagnostic test." | "What is established, and what the gap costs"; "Some of the biology is established. … is approved: macimorelin, as a one-off diagnostic test. The FDA notes that macimorelin can affect heart rhythm (QT prolongation)." |
| E19 | ipamorelin :355, :573 | "other growth hormone boosters" | "other products that raise growth hormone" ("booster" is a sales word) |
| E20 | melanotan II :290 (fold title) | "Where the evidence is promising, and what the gap costs" | "What the biology led to, and what the gap costs" |
| E21 | melanotan II :292, :294 | afamelanotide "is approved for EPP"; the sunburn result; setmelanotide's uses | "is approved only for EPP"; adds "but preventing sunburn is not a use it is approved for"; adds "Its US label warns that it darkens existing moles and can cause new ones" (already on the page) |
| E22 | hexarelin :65 (mechanism title) | "long-term benefit unknown" | "long-term effect unknown" |
| E23 | NAD precursors :122 | "sits on the same FDA list as GHK-Cu, and clinics offer…" | adds "that list is not an approval and changes nothing outside the US" (as on :199) |
| E24 | NAD precursors :166 | "A small early trial in Parkinson's disease looked promising" | "… seemed to show a benefit" |
| E25 | Semax :7 (TL;DR) | "Sold in the US for memory, anxiety, stroke and more. A medicine in Russia." | "Sold in the US with claims about memory, anxiety and stroke. Registered in Russia." |

## F. General and safety pages

| # | Page and line | Was | Now |
|---|---|---|---|
| F1 | /en/start-here/ :154 (Lead) | "Yes, for some. A few peptide medicines work well." | "Yes, from a few approved medicines." |
| F2 | /en/start-here/ :162 (retatrutide row) | "Weight loss in trials was large, but no regulator has weighed the results yet." | "Trials found large weight loss, and side effects; no regulator has weighed the results yet." |
| F3 | /en/start-here/ :169 | "Well-tested peptide medicines can do a lot." | "For well-tested peptide medicines, we know what they do, in whom, and with which side effects." and, after the STEP 1 result, "Its side effects are on the official label, with how often each one happens." |
| F4 | /en/start-here/ :177 (retatrutide) | — | adds: "Stomach and gut problems were the most common side effects, and what longer use does is not known." |
| F5 | /en/basics/why-not-a-pill/ :12–13 (TL;DR) | "Does the semaglutide tablet work?" / "Yes: in trials it lowered blood sugar. Only about 1 to 2 in 100 parts reach the blood." | "Does the semaglutide tablet help type 2 diabetes?" / "It lowered blood sugar in trials. Many feel sick. Only 1 to 2% reaches the blood." |
| F6 | /en/basics/why-not-a-pill/ :127 | — | adds: "Rybelsus is approved for adults with type 2 diabetes. Its most common side effects are stomach and gut problems, such as feeling sick, diarrhoea and vomiting." |
| F7 | /en/basics/how-signalling-works/ :120 (new) | — | "Semaglutide is a prescription medicine. Ozempic and Rybelsus are approved for adults with type 2 diabetes, and Wegovy for weight management. Using it for anything else, such as Ozempic to lose weight, is called off-label." |
| F8 | /en/basics/pharmacokinetics/ :208 | "whether a promising animal result could ever work in people" | "whether an animal result means anything for people" |
| F9 | /en/evidence/how-to-read-a-study/ :186 (SELECT example) | — | adds: "Harms can be read as counts too: in SELECT, 16.6 in 100 people on semaglutide stopped it because of side effects, against 8.2 in 100 on placebo." |
| F10 | /en/evidence/the-translation-gap/ :53, :220 | "how promising leads are found"; "Promising animal results deserve proper trials" | "how leads worth testing are found"; "Positive animal results deserve proper trials" |
| F11 | /en/evidence/the-translation-gap/ :203 (Compare cell) | "Counted in trials and listed on the label" | adds "; stomach and gut problems are the most common" |
| F12 | /en/history/the-croatian-lab/ :134 | the Zagreb group's reported benefits, from ulcers to heart damage | adds "These results come mainly from studies in rats and mice." |
| F13 | /en/history/the-croatian-lab/ :158 | "The independent studies are encouraging in places and sobering in others." | "The independent results are mixed." |
| F14 | /en/safety/before-you-consider/ :9, :40, :108 | "Not healing or growth peptides"; "Healing and growth peptides (… growth hormone boosters)" | "healing" in quotation marks (it is a claim); "peptides that raise growth hormone" |
| F15 | /en/safety/before-you-consider/ :112, :287, :289, :300 | "Growth hormone boosters" (table heads, a Compare title, the sport paragraph) | "Peptides that raise growth hormone" |
| F16 | /en/safety/before-you-consider/ :125 | "Tesamorelin, a growth hormone booster approved in the US, raises growth hormone and IGF-1" | "Tesamorelin raises growth hormone and IGF-1, which are growth factors. It is approved in the US only to reduce excess belly fat in adults with HIV and lipodystrophy." |
| F17 | /en/safety/monitoring/ :41 | "Tesamorelin is a growth hormone booster authorised in the US." | "Tesamorelin raises growth hormone. In the US it is authorised to reduce excess belly fat in adults with HIV and lipodystrophy." |
| F18 | /en/safety/monitoring/ :58, :59, :78 | "Growth hormone boosters"; "Boosting growth hormone can raise blood sugar." | "Peptides that raise growth hormone"; "More growth hormone can raise blood sugar." |
| F19 | /en/safety/monitoring/ :104 | "Semaglutide improved blood fats a little in trials." | adds ", but it is not approved to lower them" |

## G. Strings

| # | String | Was | Now |
|---|---|---|---|
| G1 | `compound.json` `authorised.explain` (the "Authorised medicine" box on every authorised page) | "That applies to the authorised product from a pharmacy — not to vials…" | "That applies only to those uses, and only to the authorised product from a pharmacy — not to vials…" |
| G2 | `media.json` caption of the fat-tissue photo (tesamorelin page) | "Fat cells under a microscope. In trials, tesamorelin shrank deep belly fat, but only while it was used." | "Fat cells, magnified. In HIV trials, tesamorelin shrank deep belly fat, but only while it was used." |
| G3 | corrections log (`corrections.yaml`, `corrections.json`) | — | two English entries of 4 November 2026: `en-o17-corrections-2026-11-04` (substantive: B3–B7, B9, C1–C5, each with its source) and `en-advertising-review-2026-11-04` (clarification: "Pages checked against the rule that a text must not praise a medicine; wording made balanced … No fact changed.") |

## R. The reform page (your signed opinion): please answer each line

| # | Line | Was | Now |
|---|---|---|---|
| R1 | :55 (diagram) | "Promising compounds can wait years for a sponsor, or never get one" | "Compounds worth testing can wait years for a sponsor, or never get one" (the same change you approved for Dutch in R26) |
| R2 | :184 (retatrutide) | the TRIUMPH-1 weight result only | adds: "In a similar trial in 1,152 adults with type 2 diabetes, 27% to 34% had diarrhoea, against 13% with placebo, and 4% to 12% stopped because of side effects or death, against 5%." (TRIUMPH-2, as on the retatrutide page; the Dutch reform page has the same) |
| R3 | :253 | "a faster, conditional route for promising medicines for serious diseases" | "a faster, conditional route for new medicines for serious diseases" |
| R4 | :25 (`opinion.updated`) | 2026-11-03 | 2026-11-04 (only if you approve any of R1–R3) |

## H. The content guide (not shown on the site)

| # | Where | Change |
|---|---|---|
| H1 | CONTENT-GUIDE §1, the note under the rule | "the live English pages are to be checked … in a separate review" → they were checked on 4 November 2026 (this file); English applies the same test, with the US, UK, Canadian and Australian labels as the product information |
| H2 | CONTENT-GUIDE §1 "Always write" | "Where evidence is genuinely promising, say so plainly." → "Where the evidence is stronger, say so plainly, with its level (never 'promising' in the site's own voice, §1)." This old line contradicted the new rule |
| H3 | CONTENT-GUIDE §1b "What may stay", item 1 (the publisher line) | adds "a text can be advertising even when its writer sells nothing, if it praises a medicine" and "praises no product" |
| H4 | CONTENT-GUIDE §1b, the Dutch advertising test | "Whether §1's wording for the English site changes is an open owner decision" → the English publisher line now says the same in English |

---

## Considered and left as they are

- "No regulator has found it safe or effective" (BPC-157, TB-500, KPV): the Dutch pages reworded it, but the English
  sentence states a negative and praises nothing.
- Quoted or attributed uses of "promising" stay: reviewers' words (BPC-157 :334), the developer's choice (CJC-1295, E14),
  the UK "Promising Innovative Medicine" designation (how-we-got-here), a trial that "looked promising" became E24.
- The evidence-grading page's semaglutide bullet (about independence, not benefit), the sport page's 2027 Code fold
  (it already says UK rules use the same test), melanotan II's "a tested product for people who burn easily could have
  value" and its fold "if you want what it promises" (the Dutch kept both), and the explainers' retatrutide caption
  "large weight loss" (the same on Dutch): say if you want any of these changed too.
- No dose was found outside a study or label description on any English page.

## Follow-ups (not done here)

1. **Dutch retatrutide liver card** (`src/i18n/nl/organ-cards.json`, `retatrutide.liver.effect`, "volwassenen met
   obesitas"): the same population fix as B7. The Dutch note asked for it to follow English; it is a Dutch change, so
   it needs your separate yes.
2. **Dutch corrections log** for B9 (the Dutch glossary change): not added, to keep the Dutch files untouched apart
   from B9.
3. **Vyleesi label link**: the FDA posted a newer label (S-005, 22 October 2026; it adds a line on contraception in
   section 8, indications unchanged). The data still links the 2020 label; the PT-141 page's pregnancy wording should
   be checked against section 8.
4. **The other 17 pages with direct reporting links** (see B8), if you approve B8 and want the same everywhere.

## Checks (4 November 2026)

- `npx tsx scripts/validate-content.ts`: 0 errors, 171 warnings (178 before; none new except two length aims:
  the retatrutide liver card at 20 words and one EMA name in the new corrections entry, kept as evidence).
- `npm run build`: 134 pages. `npm run check`: commerce check passed (zero commercial outbound links), HTML 0 errors
  and 0 warnings, locale residue 0 error and 0 frame hits.
- Spot-checked in the built pages: the new lines of A3, A7, B3, B4, B9, C1, D16 and F18 are there; "information stays
  information" and "genuinely promising" appear nowhere on English; the anchor that B8 links to exists.

## Deploying (after your yes)

README "Deployment": build from this branch, copy `dist/` into the Lovable repo's `public/`, check that the Lovable
project's latest commit matches before `deploy_project`, then verify the changed pages live. Lines you do not approve
are reverted first.
