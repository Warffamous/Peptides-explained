# TL;DR evidence table: group compounds-c

Written 27 October 2026 under `research/tldr/BRIEF.md`. Each page's `summary:` block was replaced, in the same
place, by a `tldr:` block; nothing else in the files changed. Word counts (all q + a) use `wordCount` in
`src/lib/readability.ts`, as the validator does. `npx tsx scripts/validate-content.ts --only <slug>` reports no
tldr error or warning for any of the seven pages (the remaining warnings are inline outbound links in the body and,
for some, a missing BE row for the nl preview locale: not tldr, not this group's).

What the four At a glance tiles already say (derived from the data file and `glance`), so the lines below do not
repeat it: approval per country (US, UK, Canada, Australia; "Only with a prescription" where approved), tested in
people (`evidence.human_clinical` or `glance.tested`), sport (the WADA row) and `glance.main_risk`.

Section names: "Section `x`" is the page's `<Section id="x">`; "Lead" is that section's `<Lead>` line; a quoted
title is an `<InDetail>` fold, `<Compare>`, `<KeyNumber>` or `<Callout>` title.

---

## semaglutide (85 words)

Tiles: approved in the US, the UK, Canada and Australia, only with a prescription; tested: yes; sport: not banned;
risk: "Many feel sick at first. Gallstones and an inflamed pancreas are rarer."

| # | TL;DR item | Supporting text on the page (quoted) | Where |
|---|---|---|---|
| 1 | **Who is it for?** Adults with type 2 diabetes (Ozempic, Rybelsus). Wegovy is for weight loss. | "It is sold as Ozempic (a weekly injection for type 2 diabetes), Rybelsus (a daily tablet for type 2 diabetes) and Wegovy (for weight management: a weekly injection and, in the US and the UK, also a daily tablet)." Data the page shows (`indications`, rendered by `<AuthorisedProducts />`): ozempic "Adults with type 2 diabetes that is not well controlled, …"; rybelsus "Adults with type 2 diabetes that is not well controlled, …"; wegovy-tablets-uk "Weight loss and weight management in adults …"; wegovy-us "Weight reduction and keeping weight off …" | Section `what-it-is`, fold "The approved products, and why this page looks different"; frontmatter `indications` |
| 2 | **How do I get it legally?** A prescriber checks it suits you, and a pharmacy supplies it. | "In the US, the UK, Canada and Australia, semaglutide is a prescription medicine: a doctor or another prescriber decides, and a pharmacy supplies it. The UK regulator explains why the consultation comes first: so that the prescriber can check that the medicine suits you and explain its benefits and risks." | Section `harm-reduction`, fold "The legal route, and why an online vial is different", "The legal route" |
| 3 | **Does it work?** Yes, for blood sugar and weight. Some groups had fewer serious heart and kidney problems. | Lead "Does it work?": "Yes, for blood sugar and weight. Some groups also had fewer serious heart and kidney problems." | Section `evidence`, Lead |
| 4 | **What if I stop?** On average, about two-thirds of lost weight came back within a year. | KeyNumber "About two-thirds of the lost weight came back within a year of stopping": "of the kilos lost had come back, on average, a year after stopping" (STEP 1 extension: 327 people followed for a year after stopping). Also: "In the STEP 1 extension, of 327 people followed for a year after stopping, those who had taken semaglutide regained about two-thirds of the weight they had lost" | Section `evidence`, KeyNumber; fold "Weight management, and what happens after stopping" |
| 5 | **Are online vials the same?** No. No regulator checks what is in them. Some fake pens held insulin. | Compare "A pharmacy medicine and an online vial with the same name are not the same thing.", row "Checked by a regulator?" for the online vial: "Not reviewed for safety, effectiveness or quality; powder-in-vial GLP-1 products are not authorised"; row "Contents known?": "It may hold the wrong ingredient, or too much, too little or none; fake pens containing insulin have been found". ProductCheck: "Some fake pens held insulin, which can make blood sugar fall too low." | Section `what-it-is`, Compare; Section `harm-reduction`, ProductCheck |

## semax (84 words)

Tiles: not approved in the US, the UK, Canada or Australia; tested: some (small trials); sport: unclear, ask your
anti-doping organisation; risk: "Little safety data. Products may hold germs or the wrong drug."

| # | TL;DR item | Supporting text on the page (quoted) | Where |
|---|---|---|---|
| 1 | **What is it sold for?** Sold in the US for memory, anxiety, stroke and more. It is a medicine in Russia. | "In the US, Semax is sold as nose sprays and injections by clinics and online shops, for memory, anxiety, stroke and more." Lead "What is Semax?": "A lab-made chain of seven amino acids. It is a medicine in Russia." | Section `what-it-is`, text under the Compare; Lead |
| 2 | **Does it work?** Unknown. Studies in people are small and hard to check. The FDA found too little evidence. | Lead "Does it work?": "Unknown. Animal studies are many. Studies in people are small and hard to check." "The FDA concluded that there is not enough evidence that Semax works for stroke, migraine or facial nerve pain." | Section `evidence`, Lead and text under the KeyNumbers |
| 3 | **What did US advisers decide?** In July 2026 they backed letting pharmacies make it, reports say. Only advice: the law is unchanged. | "As reported from the meeting, it recommended six: BPC-157, KPV, TB-500, MOTS-c, Semax and epitalon" … "The FDA had posted no minutes by 23 October 2026, so the counts and outcome above are as reported from the public meeting." "The vote is advisory and non-binding" … "Legal compounding remains prohibited until the FDA formally adopts the recommendation and completes rulemaking." "A 503A listing would allow pharmacy compounding on prescription in the US." | Section `regulatory`, fold "The July 2026 US vote, point by point" |
| 4 | **Does it mix badly with medicines?** Maybe with blood thinners and stimulants. In animals it thinned the blood and boosted a stimulant. | Lead "What are the risks?": "Little tested in people. In animals it thinned the blood and boosted a stimulant." "These interactions are plausible from the animal studies; none has been tested in people." … "Blood thinners and antiplatelet medicines, because Semax made rat blood clot less." "Stimulants, including ADHD medicines and amphetamine, because Semax strengthened amphetamine's effect on dopamine in rats and mice." | Section `risks`, Lead; Section `harm-reduction`, fold "Interactions, checks, and who should not use it" |

## ss-31 (82 words)

Tiles: only in the US (not approved in the UK, Canada or Australia), only with a prescription; tested: override
"Some. Approved on a 12-patient trial that missed its main goals. Bigger trials in other diseases found no benefit.";
sport: unclear; risk: "Sore, red skin where you inject. Some had serious allergic reactions."

| # | TL;DR item | Supporting text on the page (quoted) | Where |
|---|---|---|---|
| 1 | **What is it for?** Barth syndrome, a rare inherited disease that can weaken the heart and muscles. The US medicine is Forzinity. | "Barth syndrome is a rare inherited disease, mostly of boys and men, that can weaken the heart and muscles." Compare column "Forzinity (elamipretide), US prescription medicine"; Regulatory Compare, US: "Since 19 September 2025, as Forzinity, for Barth syndrome. Prescription only." | Section `what-it-is`, text under the Compare; Section `regulatory`, Compare |
| 2 | **Is the benefit confirmed?** Not yet. A new trial in 48 patients started in 2026. Main results are planned for late 2029. | Fact sheet "Type of approval": "Accelerated: the benefit still has to be confirmed". "A new randomised trial in 48 patients started in 2026." TimeStrip "The FDA said not yet in May 2025, then yes in September. Proof of benefit is still due.", row "Confirmatory trial (48 patients)": "recruiting since July 2026" / "the outcome; main results planned for late 2029" | Frontmatter `glance.facts`; Section `evidence`, text under the KeyNumbers; Section `regulatory`, fold "How the US approval happened, and what is still due" |
| 3 | **Is an online vial the same?** No. No regulator has checked what is in it. | Compare "The US medicine and an online 'SS-31' vial share a name, not a guarantee.", row "Contents and strength stated and checked?" for the online vial: "No regulator has checked it." Lede: "Online vials sold as SS-31 are a different product." | Section `what-it-is`, Compare; frontmatter `lede` |
| 4 | **Can I get it elsewhere?** A Barth syndrome trial is recruiting in the UK and Canada. Your doctor can ask if it fits. | "In the UK and Canada, a trial is recruiting people with Barth syndrome; your doctor can ask the trial team whether it fits." | Section `harm-reduction`, fold "Legal routes, and reporting a side effect" |

## tb-500 (84 words)

Tiles: not approved in the US, the UK, Canada or Australia; tested: very little (case reports); sport: banned at
all times; risk: "No proper human trials. Vials may hold the wrong substance or germs."

| # | TL;DR item | Supporting text on the page (quoted) | Where |
|---|---|---|---|
| 1 | **What is it?** A lab-made piece of a natural protein, sold online for healing injuries, wounds and much else. | Lead "What is TB-500?": "A lab-made copy of a small piece of a natural protein." "TB-500 is promoted online for tendon, muscle, ligament and bone injuries, wounds, inflammation, hair growth, heart health and much else." | Section `what-it-is`, Lead and text under the Compare |
| 2 | **Does it work?** Unknown. It was never tested alone in people. Most trials of the whole protein found no clear benefit. | Lead "Does it work?": "Unknown. TB-500 was never tested alone in people. Most trials of the whole protein found no clear benefit." | Section `evidence`, Lead |
| 3 | **What did US advisers decide?** In July 2026 they backed letting pharmacies make it, reports say. Only advice: the law is unchanged. | "As reported from the meeting, it recommended six: BPC-157, KPV, TB-500, MOTS-c, Semax and epitalon." "The vote is advisory and non-binding" … "Legal compounding remains prohibited until the FDA formally adopts the recommendation and completes rulemaking." "The FDA had not posted minutes by 20 October 2026, so the counts above are as reported from the public meeting." US row: "Pharmacies may not legally make it until the FDA makes a rule adding it to the 503A list. The July 2026 vote was only advice." | Section `regulatory`, fold "The United States, and the July 2026 vote point by point"; Compare |
| 4 | **What if I use it anyway?** Talk to a doctor first. A torn tendon may need a scan, or surgery within weeks. | Heading "Talk to a doctor first": "A doctor can also make sure the injury is properly diagnosed. A torn tendon or ligament may need a scan, or surgery within weeks. Using a peptide instead of a diagnosis can delay care that works." | Section `harm-reduction`, "Talk to a doctor first" |

## tesamorelin (82 words)

Tiles: only in the US; "Canada approved it, but it is no longer sold there."; not approved in the UK or Australia;
only with a prescription; tested: "Yes. Large trials in many people, checked by regulators."; sport: banned at all
times; risk: "Can raise blood sugar and IGF-1, a growth signal; long-term effects unknown." Item 2 also says, in its own
words, that it was tested in large trials in people (the reader complaint named in the brief).

| # | TL;DR item | Supporting text on the page (quoted) | Where |
|---|---|---|---|
| 1 | **What is it for?** Extra deep belly fat in adults with HIV. It is not for weight loss. | "Tesamorelin is a medicine with real trials behind it, for one narrow use: deep belly fat in adults with HIV." Fact sheet "Approved for": "Extra belly fat in adults with HIV". "it is not for weight loss, because it does not change body weight" | Section `what-it-is`, text under the Compare; frontmatter `glance.facts`; fold "The authorised products, and why this page looks different" |
| 2 | **Does it work?** Yes. In large trials in people with HIV, deep belly fat shrank by about 15%. | Lead "Does it work?": "Yes, for deep belly fat in people with HIV." KeyNumber "Deep belly fat shrank by about 15%" (Phase 3 Study 1: 412 adults with HIV and extra belly fat). Callout "Why this page looks different": "Tesamorelin is a real medicine, tested in large trials in people and approved in the United States." "Pooled, in 806 people, the treatment effect on visceral fat was −15.4%" | Section `evidence`, Lead and KeyNumber; Section `what-it-is`, Callout; fold "The two phase 3 trials, and what happened after stopping" |
| 3 | **What if I stop?** The fat grew back within six months. | KeyNumber "The fat grew back after stopping": "growth of deep belly fat in the 26 weeks after switching to placebo (+16% in Study 2)". "in those who switched, visceral fat came back" … "The effect lasts only while the medicine is used." | Section `evidence`, KeyNumber; fold "The two phase 3 trials, and what happened after stopping", "Stopping" |
| 4 | **Does it slow ageing?** Not shown. No published trial measured ageing, heart attacks or deaths as its main result. | Lede: "Not shown to slow ageing." "No trial measured ageing. The trials measured belly fat, liver fat and test scores over months. None measured how long people live, or ageing itself." "No published trial has measured heart attacks, strokes or deaths as its main result; the FDA approved tesamorelin without such data." | Frontmatter `lede`; Section `evidence`, fold "'Anti-ageing' and body-building claims: outside the evidence" and text under the KeyNumbers |
| 5 | **Are online vials the same?** No. They are not Egrifta, and no regulator has checked them. | Compare title "Egrifta from a pharmacy and an online vial with the same name are not the same thing.", row "Contents and sterility known?" for the online vial: "Not checked by any regulator". "A vial sold online as "tesamorelin" shares the name but none of those guarantees." | Section `what-it-is`, Compare; Section `harm-reduction`, fold "The legal route, and why a 'research' vial is not Egrifta" |

## thymosin-alpha-1 (78 words)

Tiles: only in other countries ("Approved in Italy, India and Hong Kong for some uses."), not approved in the US, the
UK, Canada or Australia; tested: yes; sport: unclear; risk: "Mostly mild. It changes the immune system. Online vials
are not checked."

| # | TL;DR item | Supporting text on the page (quoted) | Where |
|---|---|---|---|
| 1 | **What is it?** A natural immune peptide, first found in the thymus. It is not TB-500, which comes from another protein. | Lead "What is thymosin alpha-1?": "It is a natural immune peptide." Compare row "Made by the body?": "First found in calf thymus in 1977. The medicine is a lab-made copy." Row "The same as TB-500?": "TB-500 comes from thymosin beta-4, a different protein." | Section `what-it-is`, Lead and Compare |
| 2 | **Does it work?** Not clear. The biggest trial, in sepsis, found no fewer deaths. Hepatitis B results are mixed. | Lead "Does it work?": "Not clear. The biggest trial found no gain. Hepatitis B results are mixed." KeyNumber "No fewer deaths in sepsis" (TESTS: 1,106 adults with sepsis, double-blind phase 3 trial). | Section `evidence`, Lead and KeyNumber |
| 3 | **What did US advisers decide?** In 2024 they voted 17 to 4 against letting pharmacies make it. | "On 4 December 2024 the FDA's Pharmacy Compounding Advisory Committee voted 4 for and 17 against adding thymosin alpha-1 to the 503A list, for both the free base and the acetate." Lead "Is it legal?": "US advisers said no to copies." US row: "Not on the pharmacy-compounding list. Advisers voted 17–4 against adding it." | Section `regulatory`, fold "Status in each country, and in sport"; Lead; Compare |
| 4 | **Does it mix badly with medicines?** It may work against medicines that damp down the immune system. Ask your specialist first. | "The reason is the same in each case: a drug that turns the immune system up can work against treatments that turn it down." "Medicines that damp down the immune system. You may take these after a transplant or for an autoimmune disease. If so, talk to your specialist first. The labels warn about this mix." | Section `risks`, fold "What the labels say, and why"; Section `harm-reduction`, fold "Legal routes, checks, and who should not use it" |

## tirzepatide (85 words)

Tiles: approved in the US, the UK, Canada and Australia, only with a prescription; tested: yes; sport: not banned;
risk: "Feeling sick is common at first. Pancreas and gallbladder problems are rarer."

| # | TL;DR item | Supporting text on the page (quoted) | Where |
|---|---|---|---|
| 1 | **Who is it for?** Type 2 diabetes (Mounjaro) and weight loss (Mounjaro, or Zepbound in the US and Canada). | "In the US it is sold as Mounjaro for type 2 diabetes (approved 13 May 2022) and as Zepbound for weight management (approved 8 November 2023; …)." "Health Canada authorised Mounjaro on 24 November 2022 and Zepbound on 13 May 2025." "There is no Zepbound in the UK or Australia: there, Mounjaro carries both uses." Data the page shows (`indications`): mounjaro-uk "… Since November 2023 also weight loss and weight management in adults …"; zepbound-ca "Chronic weight management in adults …"; mounjaro-ca "Type 2 diabetes in adults, …" | Section `what-it-is`, fold "The approved products and their approval dates"; frontmatter `indications` |
| 2 | **How do I get it legally?** A prescriber checks it suits you, and a pharmacy supplies it. | "In the US, the UK, Canada and Australia, tirzepatide is a prescription medicine: a doctor or another prescriber decides, and a pharmacy supplies it. A prescriber can check whether the medicine suits you." | Section `harm-reduction`, fold "The legal route, and why an online vial is different", "The legal route" |
| 3 | **Does it work?** Yes, for blood sugar and weight. In a large trial, average weight loss was about 15 to 21%. | Lead "Does it work?": "Yes, for blood sugar and weight, in large trials." KeyNumber "Weight fell by about 15 to 21% on average": "average weight lost in 72 weeks, depending on the dose, against 3.1% with placebo" (SURMOUNT-1: 2,539 adults with obesity or overweight, without diabetes). | Section `evidence`, Lead and KeyNumber |
| 4 | **What if I stop?** Much of the lost weight comes back. | Lead "Does it work?": "Much of the lost weight returns after stopping." KeyNumber "Much of the lost weight came back after stopping" (SURMOUNT-4). | Section `evidence`, Lead and KeyNumber |
| 5 | **Are online vials the same?** No. No regulator checks them, and fake Mounjaro pens have been found. | Compare "A pharmacy medicine and an online vial with the same name are not the same thing.", column "Outside the legal supply chain ("research" vials, fake pens)": row "Contents known?": "It may hold too much, too little or none of the medicine; fake pens have been seized"; row "Risk information?": "No approved label: nobody has checked how to use it or what it does to your health". "the UK regulator states that GLP-1 powders in vials are not authorised". "In the UK, falsified Mounjaro KwikPens …"; "In Canada, Health Canada seized counterfeit Mounjaro vials and pens in March 2026" | Section `what-it-is`, Compare and fold "Pens, vials and why “tirzepatide” is not one thing"; Section `harm-reduction`, fold "Fake pens, and how to check yours" |

---

## Checks applied to every line

- No doses, amounts or schedules; no seller names or buying help; no "safe", "proven" or superlatives.
- No emergency number; no EU, Netherlands, Belgium, Germany or EMA.
- Hedges kept: "in animals" (Semax), "Maybe" (untested interactions), "reports say" (the July 2026 vote, as reported
  from the public meeting, no FDA minutes), "Only advice" (non-binding), "Not yet" (SS-31 confirmatory trial),
  "Not shown" (tesamorelin and ageing), "On average" (weight regain, weight loss), "Some groups" (heart and kidney).
- Every answer at most 18 words, every question at most 6 words, Flesch reading ease 60 or more (validator: no tldr
  warning on any of the seven pages).
