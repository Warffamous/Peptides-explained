# Harm-reduction pass: the "check before you use it" list and the tone pass

Written 22 October 2026, after the owner's request of the same day: "inform them as best as possible,
not necessarily discourage them" and "if you've gotten it from an unauthorized vendor, make sure to
check for the following things to make it safer". Rules followed: CONTENT-GUIDE §1 (legal line), §1a
(inform, do not discourage), §4.1 (plain language), §9; EXPLAINERS rule 8a (every visual element has
its word).

Semaglutide, tirzepatide and retatrutide were left out of the first phase (another agent was editing
them). They got the checklist and the tone pass in a second phase, the same day (§1 "Compound lines" and
"Where it was placed", §2 entries 43–56, §3 second phase, §4 questions 5–8). Framing on those three
pages: the authorised medicine from a pharmacy has the fewest unknowns; the checks are for any other
product (an online "research" vial, a pen of unknown origin), and the fake-pen warnings already on the
pages become the compound line. For retatrutide, which no pharmacy may sell, the page says so right
before the list.

## 1. The new component: `<ProductCheck />`

| Part | File |
|---|---|
| Component | `src/components/mdx/ProductCheck.astro` |
| Order, pictograms, sources, links | `src/data/product-check.yaml` |
| Words (English) | `src/i18n/en/product-check.json` |
| Schema (shared by component and validator) | `src/schemas/product-check.ts` |
| Data loader | `src/lib/product-check.ts` |
| Source numbering (remark, before `remark-citations`) | `src/plugins/remark-product-check-sources.mjs`, registered in `astro.config.mjs` |
| Validator checks | `scripts/lib/product-check.ts`, called from `scripts/validate-content.ts` |
| Vocabulary | `src/schemas/components.ts` (BLOCK_COMPONENTS), `src/components/mdx/index.ts` |
| Style | `src/styles/design/product-check.css` (imported in `src/styles/site.css`) |
| Pictograms | `src/components/ui/pictograms.ts`: `check-seal`, `check-label`, `check-look`, `check-certificate`, `check-cold`, `check-new-needle`, `check-keep`, `check-doctor`; the stop check reuses `action-stop` |
| Docs | CONTENT-GUIDE §5.3 and §9 |

How it works:

- Heading (h3): "If your product did not come from a pharmacy: check before you use it". Intro: "These
  checks can show that something is wrong. None of them can show that a product is good or free of
  germs." (the "no sign proves a product is good" sentence §1a asks for).
- Nine checks, each a pictogram (decorative, `aria-hidden`) next to a bold check and one to three short
  sentences. Negative signs only. Sources are numbered with the page's own citations (they appear in the
  page's source list). Links to the page the list is on are dropped; links to a section of that page
  become `#anchor` links.
- The stop check ends with the locale string `common.emergency.ifSevere` ("If it is severe, call your
  local emergency number."). No number is printed in English.
- Optional compound line: `extra="…" extraSources="id,id"` (sources required), placed after the label
  check by default (`extraAfter="certificate"` moves it), labelled "For <compound>" from the compound
  data. It and the stop check take a whole row, so the other eight pair up in two columns on wide
  screens; one column on phones.
- No JavaScript. On paper a "Tick each box when you have checked it." line and a tick box per check
  appear, and internal links print their path.
- Validator: data schema, pictograms exist, sources exist, linked routes exist; words exist for every
  check with one link text per link; plain-language checks per sentence (no new warnings); use is
  self-closing, at most once per page, never inside an `<InDetail>` fold; `extra` needs existing
  `extraSources`.

Technical note: the source slots are named `src-intro`, `src-item-<id>`, `src-extra`. A first version
used a slot named `extra`; Astro then silently dropped the `extra="…"` prop of the same name.

### What each check says, and its sources

Every source below was already registered except `ema-ich-q7-gmp-api` (new, appended to
`src/data/sources/safety-b.yaml`). Each was re-checked on 22 October 2026 for what it is cited for.

| Check | What it says | Sources | What was verified |
|---|---|---|---|
| Intro | Checks can show something is wrong; none can show a product is good or free of germs | `igj-online-medicijnen`, `ashraf-2024-online-semaglutide`, `smith-2013-fungal-methylprednisolone` | Already cited on product-risk for "nothing you can see shows what is inside" and "germs … are invisible" (one clean peak but 8–14% semaglutide; fungus in unopened vials). |
| Seal | A broken cap or seal, or a cracked vial, can let germs in; then do not use it | `fda-considering-online-pharmacy`, `dailymed-sterile-water-label`, `who-2010-injection-toolkit` | FDA BeSafeRx page re-fetched: warning sign "arrives in packaging that is broken, damaged … has no expiration date, or is expired" (content current 21 September 2020). Sterile water label: "Do not use unless the solution is clear and seal intact." WHO toolkit: discard a vial if sterility is compromised. |
| Label | In the EU a medicine must show name, amount, batch number and expiry date, even on a small vial; if one is missing, or the date has passed, that is a warning sign; take a photo of the label | `eu-directive-2001-83`, `fda-considering-online-pharmacy` | Directive 2001/83/EC (consolidated text), Art. 55(3): small immediate packaging must show at least the name, method of administration, expiry date, batch number and contents by weight, volume or unit (Art. 54 lists the same for outer packaging). FDA BeSafeRx as above (no expiry date, or past it, is the FDA's warning sign). "If one is missing" follows from the directive: a vial without all four is not labelled the way EU law requires of a medicine. |
| Look | A liquid, or a powder after mixing, should be clear and colourless with no bits; cloudy, changed colour or bits: do not use it | `dailymed-egrifta-sv-label`, `ema-epar-wegovy` | Egrifta SV label (DailyMed SPL, read again): "After mixing, the solution should look clear and colorless, with no particles in it. Do not use … if it looks cloudy, discolored, or if you see particles in it." Wegovy EU product information (PDF text searched): "should not be used if it does not appear clear and colourless". |
| Lab report | Proves little if the batch number differs from your vial, no lab is named or it has no date or signature, it shows only purity (HPLC) with no identity test such as mass spectrometry, or it has no test for germs (sterility) or toxins from germs (endotoxin). Even a full report covers one sample; a report from the seller comes from someone who gains if it looks good; it cannot show your vial is clean | `ema-ich-q7-gmp-api` (new), `ema-2025-synthetic-peptides-guideline`, `fda-pcac-2026-bpc157-briefing`, `fda-pcac-2026-tb500-briefing`, `janvier-2018-falsified-peptides-belgium` | ICH Q7 §11.4 (EMA PDF downloaded and read): a certificate per batch, with the batch number and release date, each test with limits and results, dated and signed, naming the manufacturer or the laboratory that did the analysis. EMA peptide guideline: identity by at least two orthogonal methods, mass spectrometry confirms mass and sequence, endotoxin and microbiological purity in the specification. FDA BPC-157 briefing pp. 15–17 (PDF text read): most certificates "only contain purity testing results"; sterility and endotoxin are critical quality attributes for an injection; example certificates came from sellers' websites. Janvier 2018: large variation per unit (one sample says little about the next vial). |
| Storage | Heat, freezing and sunlight can damage a peptide; arrived warm or was frozen: do not use it; often nobody can tell you how it was kept on the way; if you cannot know, you cannot rule out damage; when in doubt, throw it out (link: when to throw a vial away) | `ema-epar-wegovy`, `fda-unapproved-glp1-concerns`, `manning-2010-protein-stability`, `who-2010-injection-toolkit` | FDA GLP-1 page re-fetched (current 1 October 2026): "not use any injectable GLP-1 drug that arrives warm or with insufficient refrigeration". Wegovy label: do not freeze, do not use if frozen or exposed to direct sunlight. Manning 2010: proteins and peptides are chemically and physically unstable. The "arrived warm" advice is the FDA's for GLP-1 products; the site already applied it to any vial in the old product-risk checklist and in sterile-technique ("It has been frozen, or left warm or in the sun"), so the scope is unchanged. What to do when the shipping is unknown is the site's own rule from sterile-technique ("You do not know how old it is or how it was stored" → throw it away; "When in doubt, throw it out"), sourced there to the same labels and to the WHO toolkit (discard a vial that is undated or improperly stored), which was added to this check's sources. |
| Clean steps | Wash hands, wipe the rubber top with alcohol, a new sterile needle and syringe every time; never share a needle, syringe or vial | `who-2010-injection-toolkit`, `cdc-2024-preventing-unsafe-injection`, `fda-unapproved-glp1-concerns` | WHO toolkit (hand hygiene, wipe septum, new sterile syringe and needle for every entry, no sharing). CDC (new needle and syringe each time). FDA GLP-1 page: "Always use a new, sterile needle and syringe for each dose." |
| Keep | Keep the vial, label and papers, even when empty, until you know you feel well; bring them if you need a doctor; a lab can test what was inside | `nhs-poisoning`, `antonacci-2026-falsified-semaglutide-coma` | NHS poisoning: take the substance or its packaging to show doctors. Antonacci 2026: a lab found insulin in the patient's vial. |
| Doctor | A doctor can help you choose blood tests that fit what you use; in the Netherlands your doctor must keep it private | `thuisarts-naar-de-huisarts`, `vic-health-2026-retatrutide-liver`, `knmg-beroepsgeheim` | Thuisarts: you can see your GP when you have thought of a way to treat yourself. Victoria health alert: people who keep using the product should see their GP about liver tests. KNMG: medical secrecy. |
| Stop | Spreading redness, fever, a swollen face or hard breathing need help fast; if it is severe, call your local emergency number | `nhs-cellulitis`, `nhs-sepsis`, `nhs-anaphylaxis` | Same NHS pages as the warning-signs page; the emergency line is the locale string, not text in the check. |

Compound lines (each from the page's own sources):

| Page | Line | Sources |
|---|---|---|
| BPC-157 | "Check which form the label names. BPC-157 is sold as a free base or an acetate salt. The FDA treats them as different substances." | `fda-pcac-2026-bpc157-briefing` (the page's what-it-is section says the same) |
| KPV | "Check which form the label names. KPV is sold as a free base or an acetate salt. The FDA treats them as two substances." | `fda-pcac-2026-kpv-briefing` (what-it-is section) |
| TB-500 | "Check which molecule the label and any lab report name. A TB-500 vial may hold the short piece, the whole protein it comes from, or something else." Placed after the lab-report check. | `fda-pcac-2026-tb500-briefing`, `delcourt-2023-misbranded`, `delcourt-2025-equine-tb4` (the page's "How it is made, and why the label means little" fold) |
| Semaglutide (second phase) | "A pen can be fake too. Compare it with the picture in the package leaflet. Does it look different? Then do not use it. Some fake pens held insulin, which can make blood sugar fall too low." | `ema-2023-falsified-ozempic` (re-fetched 22 October 2026: "Check the patient information leaflet for Ozempic to see what the genuine Ozempic pens should look like"; "You must not use Ozempic pens that you suspect are falsified"), `bfarm-ozempic-falsification` (falsified German-labelled pens contained insulin), `mhra-2023-fake-weight-loss-pens` (hospital admissions suggesting insulin in fake pens). All from the page's own fake-pens fold and stop-now list. |
| Tirzepatide (second phase) | "A pen can be fake too. Fake Mounjaro pens carried the real batch number of another strength. So a batch number alone proves little. Is the pen damaged, does it look different, or does the dose knob come off? Then do not use it." | `mhra-2026-falsified-mounjaro` (Drug Safety Update re-fetched 22 October 2026: falsified 15 mg KwikPens with a batch number that belongs to the genuine 7.5 mg pen; a dose knob that comes off; "do not use the pen"), `mhra-2026-10-counterfeit-pens` (more than 12,000 fake retatrutide and tirzepatide pens seized). From the page's fake-pens fold and UK paragraph. |
| Retatrutide (second phase) | "Even a full label can be wrong. Tested products held half to nearly twice the amount on the label. One held a different drug instead." | `piatkowski-2026-retatrutide-product-testing` (51.3%, 165.0% and 190.0% of the labelled amount), `rubin-2026-jama-news` (one product held "a high dose of semaglutide and no retatrutide"). From the page's comparison table and "What happens outside trials" fold. "A different drug" is the comparison table's own wording; naming semaglutide in this line pulled its reading ease to 32. |

The three second-phase lines use the default place (after the label check) and pictogram (`check-label`).
None gives an amount, a strength or a dose.

Legal line: no amounts, volumes, schedules, "start low", mixing sums, stacks or cycles; nothing about where
to get a product or how to choose a seller. The lab-report check is phrased as warning signs about the
report the reader already has, and says plainly that even a full report cannot show the vial is clean.

### Where it was placed

| Page | Where |
|---|---|
| `compounds/en/bpc-157.mdx` | Harm-reduction section, right after the lead, before "Talk to a doctor first", the stop callout and the folds |
| `compounds/en/kpv.mdx` | Harm-reduction section, after the lead and the "This section is for…" line, before the doctor paragraph |
| `compounds/en/tb-500.mdx` | Harm-reduction section, right after the lead |
| `pages/en/safety/product-risk.mdx` | "If you already have a product": replaces the old six-item `<Checklist>` (see below) |
| `pages/en/safety/sterile-technique.mdx` | New section "Check the product first", before "Before you start" |
| `pages/en/safety/before-you-consider.mdx` | New section "If you go ahead: check the product", before "Tell your doctor" |
| `pages/en/start-here.mdx` | Section 6 "If you decide to go ahead", after the lead, before the reading table |
| `compounds/en/semaglutide.mdx` (second phase) | Harm-reduction section, after the lead and a new intro (the authorised medicine first, then "The checks below are for any other product, such as an online "research" vial or a pen of unknown origin."), before "When to stop and get help", the stop callout, `<WarningSigns />` and the folds |
| `compounds/en/tirzepatide.mdx` (second phase) | The same place and the same kind of intro |
| `compounds/en/retatrutide.mdx` (second phase) | Harm-reduction section, after "The legal routes" (a trial; the two authorised related medicines) and a new paragraph saying that no product with this name is legal outside trials, so the checks apply whoever supplied it; before "When to stop and get help" |

What moved, so nothing factual was lost (product-risk, old checklist → new checks):

| Old item | Now |
|---|---|
| The label: a name, a batch number and an expiry date. Write them down or take a photo. | Label check (adds "amount"; "take a photo of the label") |
| The seal: the cap and seal are whole, and the vial is not cracked. | Seal check |
| How it looks: a liquid that should be clear is clear, with no bits. A powder dissolves into a clear liquid. | Look check ("A liquid, or a powder after mixing, should be clear and colourless, with no bits.") |
| How it was kept: it did not arrive warm, and it was not frozen or left in the sun. | Storage check |
| Keep the vial and its paperwork, even when it is empty, until you know you feel well. A doctor or lab may need them. | Keep check |
| Tell a doctor what you use. A doctor can check you for problems that a clean-looking vial can hide. | Doctor check, plus the sentence "A doctor can also check you for problems that a clean-looking vial can hide." kept under the list (now cited to `vic-health-2026-retatrutide-liver`) |
| Block citation `fda-considering-online-pharmacy, ema-epar-wegovy, fda-unapproved-glp1-concerns, nhs-poisoning, knmg-beroepsgeheim` | All five are among the checklist's sources |

## 2. Tone pass: every changed sentence (before → after)

### `src/content/pages/en/safety/product-risk.mdx`

1. Lead question: "The seller sent a lab report. Is that enough?" → "My product came with a lab report. Is that enough?" (does not assume a seller)
2. Lead answer: "Check the label, the seal and how it looks. Keep the vial in case you need a doctor." → "The seal, the label, how it looks and how it was kept. Keep the vial. Tell a doctor."
3. The six-item `<Checklist>` and its block citation → `<ProductCheck />` (table above).
4. Added under the list: "A doctor can also check you for problems that a clean-looking vial can hide." (moved from the old checklist).

### `src/content/pages/en/safety/sterile-technique.mdx`

5. New section "Check the product first", lead "What do I check before I start?" → "The seal, the label, how it looks and how it was kept. Then prepare it cleanly.", then `<ProductCheck />`.
6. "Many people trust a freeze-dried powder because it looks dry and clean. That is a mistake." → "Many people trust a freeze-dried powder because it looks dry and clean. But dry and clean-looking does not mean free of germs."
7. "The plate shows six problems a vial bought online may have." → "The plate shows six problems a vial from outside a pharmacy may have."

### `src/content/pages/en/safety/before-you-consider.mdx`

8. Description: "…the situations where a peptide is a bad idea, the reason for each…" → "…when a peptide should not be used, the reason for each…"
9. Summary: "Pregnancy, breastfeeding and being under 18 are red lines. So is cancer, for healing and growth peptides." → "Pregnancy, breastfeeding and being under 18 rule them out. So does cancer, for healing and growth peptides."
10. "It does not replace a doctor who knows you." → "A doctor who knows you can check what applies to you."
11. "This page explains these red lines one by one." → "This page explains these situations one by one."
12. New section "If you go ahead: check the product", lead "What should I check before I use a product?" → "The seal, the label, how it looks and how it was kept. Keep the vial.", then `<ProductCheck />`.
13. "If you answer yes to any of these, talk to a doctor before you do anything." → "…talk to a doctor before you start."

### `src/content/pages/en/start-here.mdx`

14. Lead (section 6): "Lower the risk. Use clean steps, never share, know the warning signs, and get checked." → "Check the product, use clean steps, never share, know the warning signs, and get checked." Then `<ProductCheck />`.

### `src/content/compounds/en/bpc-157.mdx`

15. "The plate shows six things that may be wrong with a vial bought online, …" → "… with a vial from outside a pharmacy, …"
16. Harm-reduction lead: "Talk to a doctor first, treat any vial as unchecked, and know when to stop." → "Check the vial first, bring a doctor in, and know when to stop." Then `<ProductCheck extra=… />`.
17. "Treating yourself can delay care that works." → "Using a peptide instead of a diagnosis can delay care that works."
18. "Discuss these with a doctor, who decides what is appropriate:" → "A doctor can help you choose which of these fit you:"

### `src/content/compounds/en/kpv.mdx`

19. Plate lead-in: "a vial bought online" → "a vial from outside a pharmacy".
20. "See product risk for how grey-market peptides differ from authorised medicines." → "See product risk for how peptides from outside the legal supply chain differ from authorised medicines."
21. Harm-reduction lead: as 16. Then `<ProductCheck extra=… />`.
22. Heading: "Talk to a doctor first, especially if you have a real disease" → "Talk to a doctor first, especially if you have a diagnosed illness"
23. "Using an unapproved peptide instead of, or on top of, proper care can let a treatable disease get worse unnoticed." → "…instead of, or on top of, tested treatment can let…"
24. "Nobody checked it before it reached you, and KPV is not even consistently named." → "Nobody checked it before it reached you, and KPV has no consistent name."
25. "Do not read any short-term improvement as proof the disease is controlled." → "A short-term improvement does not prove the disease is controlled."
25a. Harms fold: "It also noted that KPV is not consistently named, so a buyer may receive a different substance than intended." → "…, so a vial may hold a different substance than intended." (does not assume a purchase; the FDA point is unchanged)

### `src/content/compounds/en/tb-500.mdx`

26. Plate lead-in: "a vial bought online" → "a vial from outside a pharmacy".
27. Harm-reduction lead: as 16. Then `<ProductCheck extra=… extraAfter="certificate" />`.
28. "Treating yourself can delay care that works." → "Using a peptide instead of a diagnosis can delay care that works."
29. "Discuss these with a doctor, who decides what is right for you:" → "A doctor can help you choose which of these fit you:"

### `src/content/pages/en/index.mdx` (landing page)

30. "People who have already decided to use a peptide, and want to be as safe as possible." → "People who have decided to use a peptide, or already do, and want to lower the risk." The start column gains a link: "the checks before you use a product" (`/en/safety/product-risk/#if-you-already-have-a-product`).
31. Lead: "It is the one page everyone should read." → "It covers what everyone needs to know first."

### `src/content/pages/en/safety/index.mdx`

32. Summary: "If you inject anyway, these pages help you lower the risk." → "If you inject, these pages help you lower the risk."
33. Lead question: "Why give safety advice if you do not encourage use?" → "Why does this site give safety advice?" (answer unchanged)
34. "We do not encourage anyone to use them. But if you are going to inject, we want you to do it with as little harm as possible." → "We do not encourage use, and we do not judge it. If you inject, we want it to cause as little harm as possible. If you already have a product, start with the checks before you use it." (link to product-risk)

### `src/content/pages/en/safety/warning-signs.mdx`

35. Summary: "Be honest with the doctor. They need the facts to treat you safely." → "Tell the doctor the whole story. They need the facts to treat you safely."
36. "It does not tell you what is causing them. Only a doctor can find that out. Your job is to notice the sign and get the right help quickly." → "It does not tell you what is causing them: a doctor can find that out with you. What you can do is notice the sign and get the right help quickly."
37. Heading "Be honest" → "Tell the whole story" (no link pointed at the old anchor).
38. "Before you start anything, read before you consider a peptide." → "Before you start anything, read before you consider a peptide and go through the checks before you use a product."

### `src/content/pages/en/safety/injection-safety.mdx`

39. "Never inject a product meant for under the skin into a vein. Dutch harm-reduction workers warn that…" → "Why not into a vein? Dutch harm-reduction workers warn that…" (the rule is in the heading, the lead and the diagram just above; this was the third "never", now the reason)

### `src/content/pages/en/safety/monitoring.mdx`

40. "A doctor can only choose the right checks if they know what you use." → "Tell your doctor what you use, so the two of you can choose the right checks."
41. "Your GP decides which tests fit." → "You and your GP agree which tests fit."

### `src/content/pages/en/talking-to-your-doctor.mdx`

42. "Your doctor can only suggest one if they know what you want." → "When your doctor knows what you want, they can suggest one."

### `src/content/compounds/en/semaglutide.mdx` (second phase)

43. Harm-reduction lead: "Only on prescription, from a pharmacy. Tell your doctor about other medicines, and know when to get help." → "The pharmacy medicine has the fewest unknowns. Check any other product first, and know when to get help." (18 words, reading ease 82.) The interactions stay in the fold "Who should not use it, interactions, and useful checks" and in the legal-route fold ("interaction checks"); see §4 question 7.
44. New intro after the lead: "The authorised medicine is a pen or tablet from a pharmacy, on prescription. A regulator assessed what is in it, the pen or tablet fixes the amount, and the maker releases each batch." (`ema-epar-ozempic`, `ema-epar-rybelsus`, `ema-epar-wegovy`: the same facts and sources as the page's comparison table), then the existing "This section gives no doses: your prescriber decides the dose.", then "The checks below are for any other product, such as an online "research" vial or a pen of unknown origin.", then `<ProductCheck extra=… />`.
45. Fake-pens fold: "Get pens and tablets only from a pharmacy, on a prescription." → "Pens and tablets are prescription-only. The EU and Dutch regulators advise getting them only through a doctor and a pharmacy." (the advice is now attributed: EMA, re-fetched: "If you buy medicines online you should only do so from legal pharmacies"; IGJ, re-fetched: "doe dat alleen via uw arts en apotheek"). `mhra-glp1-what-you-need-to-know` (prescription only) added to the fold's block citation.
46. "Do not use a pen you suspect is fake, …; contact your pharmacist." → "…; ask a pharmacist." (does not assume the reader has one; the IGJ advises asking a pharmacist when in doubt about a pen)
47. Added at the end of the fake-pens fold: "If a pen did not come from a pharmacy, the checks at the top of this section apply to it too."

### `src/content/compounds/en/tirzepatide.mdx` (second phase)

48. Harm-reduction lead: as 43.
49. Section intro: "For an authorised medicine, the legal route has the fewest unknowns." moved to the top of the fold "The legal route, and why an online vial is different" (where semaglutide has it; the lead now says the same). New intro: "The authorised medicine is Mounjaro (Zepbound in the US) from a pharmacy, on prescription. A regulator assessed what is in it, the pen or single-dose vial fixes the amount, and the maker releases each batch." (`ema-epar-mounjaro`, as in the comparison table), then "This section gives no doses…", then "The checks below are for any other product…", then `<ProductCheck extra=… />`.
50. Fake-pens fold: "Get Mounjaro only from a pharmacy, on a prescription." → "Mounjaro is prescription-only, from a pharmacy. In the UK, fake pens were also supplied through one online pharmacy, so check every pen." The MHRA Drug Safety Update (re-fetched) says the fakes were supplied through one UK online pharmacy and gives no "buy only from" advice, so the old line was not supported by the source cited for it. `mhra-glp1-what-you-need-to-know` (prescription only) added to the block citation.
51. "Ask your pharmacist." → "Ask a pharmacist."
52. Added at the end of the fake-pens fold: as 47.

### `src/content/compounds/en/retatrutide.mdx` (second phase)

53. Harm-reduction lead: "Ask about a trial or an approved medicine. Treat any online product as unchecked. Know when to stop." → "Ask about a trial or an approved medicine. Check any product first, and know when to stop." (no "online" assumption; 17 words, reading ease 84)
54. New paragraph after "The legal routes", right before the list: "Retatrutide itself is approved nowhere, and outside trials selling it is illegal, so no pharmacy can legally sell it either. The checks below apply to any product with this name, whoever supplied it. That includes pens: the UK regulator has seized thousands of fake retatrutide and tirzepatide pens." (`ema-medicines-json`, `nl-geneesmiddelenwet`, `mhra-2026-07-no-summer-shortcut` ("anyone selling this product is doing so illegally"), `mhra-2026-10-counterfeit-pens`). Why: the list's fixed heading reads "If your product did not come from a pharmacy". Without this line a reader could take it that a pharmacy may supply retatrutide, or that a product from a website calling itself a pharmacy needs no checks. "Selling it outside trials is illegal" repeats the page's own summary.
55. Fold title "What you cannot know about an online product" → "What you cannot know about a product sold as retatrutide" (nothing linked to the old title; checked with grep).
56. Checks fold: "Discuss these with a doctor, who decides what is right for you. Tell them what you used." → "A doctor can help you choose which of these fit you. Tell them what you use." (as 18 and 29)

### Read, no change needed

- `safety/sharps-disposal.mdx`: practical and neutral throughout; its "never" lines are disposal rules.
- `safety/if-something-goes-wrong.mdx`: already written as help ("Why you can be open with a doctor",
  "The doctor's job is to treat you"); "illegal seller" refers to reporting a seller, not to the reader.

### Kept on purpose

- Medical warnings and stop-now content were not softened: every `<Callout type="stop">`, `<WarningSigns />`,
  "Do not drive yourself", "Never share needles, vials or pens", "Not without your doctor" (insulin and
  GLP-1 type products), "Do not use PT-141 or melanotan II", "We advise against unapproved peptides under
  18", "If you have had cancer … do not use them", "Never use a GLP-1 type product instead of insulin",
  "When in doubt, throw it out".
- Study descriptions that say where the tested products came from ("bought from illegal online
  pharmacies", "black-market products") describe the studies, not the reader.
- "grey market" in the evidence sections of BPC-157 ("Into that gap came a grey market…") and TB-500
  ("Meanwhile the grey market sells the fragment…") describes the market, not the reader, and is outside
  the harm-reduction passages; left as is.
- Second phase (semaglutide, tirzepatide, retatrutide): every stop-now callout and `<WarningSigns />`
  unchanged; "semaglutide never replaces insulin"; "Do not use a pen you suspect is fake" and "Do not use a
  pen that looks different, is damaged, or does not work properly"; the retatrutide list "Who should not
  use it at all" (each item gives its reason, as §5.3 asks); "Burning, tingling or painful skin is not an
  emergency, but it is a reason to stop and see a doctor". The headings "Why an online 'research' vial is
  a different product" describe the product, not the reader. Tirzepatide's "Without a prescriber, none of
  that happens." is a sourced fact about what a prescription adds (Belcourt 2025); the doctor check in
  the list above it now says a doctor can still help with checks. The retatrutide line on "stacks" warns
  against combining and gives no stack.
- Outside the harm-reduction sections and not in this task: the frontmatter of the three pages still
  says "Online 'research' semaglutide is not the authorised medicine" (summary), "Online “research” vials
  are not the same" (lede) and, for retatrutide, "Online products may be fake" (`glance.main_risk`). They
  describe products, not the reader; see §4 question 8.

## 3. Checks run (22 October 2026, second run after the label, look and storage wording was tightened)

- `npm run validate`: 0 errors. No warning from the new component, its words or the changed passages.
  The 50 remaining warnings belong to other files and workstreams.
- `npm run lint:css`: clean.
- `npm run build`: 66 pages built.
- `npm run check:html`: 787 errors, all "broken internal link" to sections or pages that do not exist yet
  (`/en/basics/`, `/en/evidence/`, `/en/history/`, `/en/about/…`, `/en/the-case-for-reform/`,
  `/en/legal/sport-and-doping/`, `/en/legal/whats-changing/`, `/en/legal/us/`, the Dutch equivalents, and
  five compound pages not yet written). None comes from this work; the new links and anchors
  (`#if-you-already-have-a-product`, `#what-a-lab-certificate-shows-and-what-it-does-not`,
  `#when-to-throw-a-vial-away`) exist in the build. No "112" is printed on any page with the list.
- `npm run check:commerce`: passed.
- Screenshots: `screenshots/product-check/` (BPC-157 and product-risk, 360 and 1280, light and dark, plus
  `safety-product-risk-print.png` with print media emulated: the "Tick each box" line, a tick box per check
  and link paths). No horizontal scroll at 360; the list renders the same with JavaScript off.

### Second phase (22 October 2026: semaglutide, tirzepatide, retatrutide)

- `npm run validate`: 0 errors, 50 warnings (the same count as before). On the three pages only
  semaglutide's four older warnings remain (summary item 4, lede, one `<KeyNumber>` title, one `<TimeStrip>`
  title); none comes from the new leads, intros, compound lines or `<ProductCheck />` uses.
- `npx astro build --outDir <private scratch folder>` (so other agents' `dist/` is untouched): 66 pages.
  Pagefind not run.
- `check-no-commerce` on that build: passed. `check-html`: 787 errors, the same count as before, all
  "broken internal link" to pages not written yet.
- Rendered HTML of the three pages: one list each, not inside a fold, the compound line right after the
  label check with its own source numbers (numbered with the page's citations), every link resolves, no
  "112" in the list.
- Playwright (installed Chrome) on that build, served locally: `screenshots/product-check/{semaglutide,
  tirzepatide,retatrutide}-{360,1280}-{light,dark}.png`, from the harm-reduction lead to the end of the
  list. No horizontal overflow, no console errors, no text under 14px except the site's standard
  citation numbers. Two columns at 1280 with the compound line and the stop check across the row; one
  column at 360.

## 4. Open questions for the reviewers

1. Medical: the storage check applies the FDA's "arrived warm" advice (given for injectable GLP-1
   products) to any peptide vial, as the old product-risk checklist did. Please confirm.
2. Medical: the look check uses the tesamorelin and Wegovy labels ("clear and colourless, no particles")
   as the standard for any peptide solution. Some authorised peptide solutions may be slightly coloured;
   please confirm the general wording.
3. Legal: the lab-report check lists what a certificate should show (batch number, named lab, date and
   signature, identity test, sterility and endotoxin). It is phrased negatively and says a full report
   cannot show a vial is clean, but a reader could still use it to compare sellers' certificates. The
   owner's request asks for exactly these points; please confirm it stays on the right side of
   Geneesmiddelenwet art. 84–85 (CONTENT-GUIDE §1a).
4. ICH Q7 is GMP guidance for active substances, not finished products; it is cited only for what a
   certificate of analysis is expected to show.
5. Retatrutide: the list's fixed heading ("If your product did not come from a pharmacy") does not fit a
   medicine that no pharmacy may sell. The page puts a sourced line right before the list saying so and
   that the checks apply whoever supplied the product. If the owner prefers, the component could take a
   heading variant for unapproved medicines (a component change, not made in this phase).
6. Tirzepatide: the fake-pens fold now says that in the UK fake pens were also supplied through one online
   pharmacy, so check every pen. This is the MHRA's finding and the reason the pen checks matter, but it
   sits under a lead that says the pharmacy medicine has the fewest unknowns. Please confirm the balance.
7. Semaglutide and tirzepatide: the harm-reduction lead no longer says "Tell your doctor about other
   medicines" (18-word limit). The interactions are in the "Who should not use it, interactions, and
   useful checks" fold and the list's doctor check. Please confirm that is enough.
   *Independent review, 22 October 2026:* not enough on its own; the line was the only unfolded
   pointer to the interactions (insulin and sulfonylureas: low blood sugar). Restored as a sentence in
   the section intro on both pages, right after "your prescriber decides the dose": "Tell your doctor
   about other medicines you use." The lead stays at 18 words.
8. Not changed (outside the harm-reduction sections): the summary, lede and `glance.main_risk` of the
   three pages say "online" products/vials. They describe the products, not the reader; flag for the owner
   if these should change as well.
