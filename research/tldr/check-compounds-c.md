# TL;DR check: group compounds-c (27 October 2026)

Independent check under `research/tldr/CHECK.md`. Every line was checked against the page body, its frontmatter and
`src/data/compounds/<slug>.yaml`, not against the writer's table (`research/tldr/compounds-c.md`). The tile wording was
read from `src/lib/approval.ts` and `src/i18n/en/beginner.json`, so "do not repeat the tiles" was checked against what
the tiles actually say.

Result: **5 pages PASS, 2 FIXED** (semaglutide: 1 line; tirzepatide: 1 line, plus 2 trims to stay within 85 words).
After the edits `npx tsx scripts/validate-content.ts --only <slug>` reports 0 errors and no tldr warning on all seven
pages. The warnings left are inline outbound links in the body (not tldr). Only `tldr:` blocks were changed.

| Page | Verdict | Words (limit 85) |
|---|---|---|
| semaglutide | FIXED (item 4) | 85 |
| semax | PASS | 84 |
| ss-31 | PASS | 82 |
| tb-500 | PASS | 84 |
| tesamorelin | PASS | 82 |
| thymosin-alpha-1 | PASS | 78 |
| tirzepatide | FIXED (item 1; items 4 and 5 trimmed) | 85 |

---

## The writer's five doubts, settled

1. **Semax and TB-500, July 2026 vote, "reports say": keep it.** Both pages give the outcome only as reported. Semax:
   "As reported from the meeting, it recommended six: BPC-157, KPV, TB-500, MOTS-c, Semax and epitalon … The FDA had
   posted no minutes by 23 October 2026, so the counts and outcome above are as reported from the public meeting."
   TB-500: "The FDA had not posted minutes by 20 October 2026, so the counts above are as reported from the public
   meeting." "Reports say" is that hedge, and CHECK.md lists it as one to keep. Stating the vote as fact would be
   stronger than the page. "Only advice: the law is unchanged" matches "The vote is advisory and non-binding" and
   "Legal compounding remains prohibited until the FDA formally adopts the recommendation and completes rulemaking". The
   TB-500 page notes the vote "is widely misreported", and the line corrects the usual misreading (that it is now legal).
2. **Semaglutide, two-thirds regain without "in one study": fixed.** The figure comes from one source, a subset
   analysis. The page cites only the STEP 1 extension, "of 327 people followed for a year after stopping", whose own
   limitation reads "Exploratory analysis of a subset from selected countries and sites; lifestyle support also
   stopped". As written, the line read as a settled fact about the medicine. See semaglutide, item 4.
3. **Tesamorelin, "The fat grew back within six months": keep it.** The worry was that it reads as "all of it". The page
   supports that reading. Study 2's finding (frontmatter, shown in the study table): "The gains were rapidly lost after
   switching to placebo." The stopping fold says: "in those who switched, visceral fat came back … The effect lasts
   only while the medicine is used." The label figures (+22% and +16% "in the 26 weeks after switching") come after
   falls of 15.2% and 10.9%, so the line does not overstate what happened. "Six months" is how the page itself names
   these 26-week periods ("10.9% against 0.6% at six months").
4. **Thymosin alpha-1 and Semax interaction lines leave out groups: keep both.** Each line answers the question it
   asks ("Does it mix badly with medicines?"), with the page's hedge, and neither suggests use is fine for any group.
   Pregnancy and children are not interactions. Neither page stresses them as much as the interaction. On thymosin
   alpha-1, the immune-suppressant caution appears in the risks Compare ("Problems in autoimmune disease or after a
   transplant"), in the labels fold, where the page explains it ("a drug that turns the immune system up can work
   against treatments that turn it down"), and in the harm-reduction list. Children, pregnancy and breastfeeding get
   one bullet there. On Semax, the page says only "People with a bleeding disorder or who are pregnant have most reason
   for caution: there are no data in pregnancy", and the line's "In animals it thinned the blood" already points a
   bleeding-disorder reader to caution. By CHECK.md §5, neither left-out group is clearly more important than a line
   that is there. There is no room within 85 words to add one without dropping a stronger line.
5. **SS-31 trial line: keep it.** "Not yet" matches the fact sheet ("Accelerated: the benefit still has to be
   confirmed") and the TimeStrip title ("Proof of benefit is still due"). "A new trial in 48 patients started in 2026" =
   "A new randomised trial in 48 patients started in 2026" (evidence section). TimeStrip row "Confirmatory trial (48
   patients)": "recruiting since July 2026". "Main results are planned for late 2029" = the same row's "main results
   planned for late 2029". The UK and Canada line (item 4) is the same trial, NCT07531251. The page states the
   recruiting plainly ("In the UK and Canada, a trial is recruiting people with Barth syndrome; your doctor can ask the
   trial team whether it fits"). Its only caveat ("we did not check the UK's own trial approvals") is about
   authorisation, not recruitment.

---

## semaglutide: FIXED

Tiles: approved in all four, only with a prescription; tested: yes; sport: not banned; risk = `glance.main_risk`.

1. **Who is it for?** PASS. "It is sold as Ozempic (a weekly injection for type 2 diabetes), Rybelsus (a daily tablet
   for type 2 diabetes) and Wegovy (for weight management …)". The `ozempic`/`rybelsus` indications say "Adults with
   type 2 diabetes that is not well controlled". "Weight loss" is the page's own word (wegovy-tablets-uk: "Weight loss
   and weight management in adults").
2. **How do I get it legally?** PASS. "a doctor or another prescriber decides, and a pharmacy supplies it … so that the
   prescriber can check that the medicine suits you" (fold "The legal route, and why an online vial is different").
3. **Does it work?** PASS. Word for word the evidence Lead.
4. **What if I stop?** FIXED.
   - Old: "On average, about two-thirds of lost weight came back within a year."
   - New: "In one study, about two-thirds of lost weight returned within a year."
   - Why: a finding from one study must not read as settled (CHECK.md §2). Page: KeyNumber "About two-thirds of the
     lost weight came back within a year of stopping", who = "STEP 1 extension: 327 people followed for a year after
     stopping". Study limitation: "Exploratory analysis of a subset from selected countries and sites". "Returned" is
     the page's word ("about two-thirds of the lost weight returned within a year of stopping", risks fold). It also
     keeps the answer at 12 words. "On average" had to go to fit the hedge within 85 words; "about" stays, and "in one
     study" now marks it as a group result.
5. **Are online vials the same?** PASS. Compare row "Checked by a regulator?": "Not reviewed for safety, effectiveness
   or quality". The same column, covering "online 'research' vial, unlicensed pen", has "fake pens containing insulin
   have been found". ProductCheck: "Some fake pens held insulin".

## semax: PASS

Tiles: not approved in the four countries (category experimental, so Russia is not on the tile); tested: "Some";
sport: unclear.

1. **What is it sold for?** "In the US, Semax is sold as nose sprays and injections by clinics and online shops, for
   memory, anxiety, stroke and more." Lead: "It is a medicine in Russia." The line does not say "only in Russia" (the
   data file asks for this).
2. **Does it work?** Lead: "Unknown. … Studies in people are small and hard to check." "The FDA concluded that there is
   not enough evidence that Semax works for stroke, migraine or facial nerve pain."
3. **What did US advisers decide?** See doubt 1. Also: "A 503A listing would allow pharmacy compounding on prescription
   in the US."
4. **Does it mix badly with medicines?** "These interactions are plausible from the animal studies; none has been tested
   in people" (hence "Maybe"). "Blood thinners and antiplatelet medicines … Stimulants, including ADHD medicines and
   amphetamine". Risks Lead: "In animals it thinned the blood and boosted a stimulant." See doubt 4.

## ss-31: PASS

Tiles: "Only in the US", not approved in the UK, Canada or Australia, prescription; tested: the page's override ("Some.
Approved on a 12-patient trial that missed its main goals …"); sport: unclear. None of the lines repeats them. Trials are
not on the approval tile.

1. **What is it for?** "Barth syndrome is a rare inherited disease, mostly of boys and men, that can weaken the heart and
   muscles." Regulatory Compare, US: "as Forzinity, for Barth syndrome".
2. **Is the benefit confirmed?** See doubt 5.
3. **Is an online vial the same?** Compare row "Contents and strength stated and checked?", online vial: "No regulator
   has checked it."
4. **Can I get it elsewhere?** "In the UK and Canada, a trial is recruiting people with Barth syndrome; your doctor can
   ask the trial team whether it fits." Australia: "No trial is open", and the line does not suggest otherwise.

## tb-500: PASS

Tiles: not approved in the four; tested: "Very little"; sport: banned at all times; risk: "No proper human trials. Vials
may hold the wrong substance or germs."

1. **What is it?** Lead: "A lab-made copy of a small piece of a natural protein." "TB-500 is promoted online for tendon,
   muscle, ligament and bone injuries, wounds, inflammation, hair growth, heart health and much else."
2. **Does it work?** Word for word the evidence Lead.
3. **What did US advisers decide?** See doubt 1. US Compare row: "Pharmacies may not legally make it until the FDA makes
   a rule adding it to the 503A list. The July 2026 vote was only advice."
4. **What if I use it anyway?** Heading "Talk to a doctor first": "A torn tendon or ligament may need a scan, or surgery
   within weeks. Using a peptide instead of a diagnosis can delay care that works." Supported, with no dose and no use
   instruction. A note for the owner, not an error: the same paragraph opens with the doctor checking for "cancer,
   pregnancy and allergies", and the TL;DR box nowhere mentions the page's tumour concern (risks Lead: "helping a hidden
   tumour grow"). That could replace the tendon example if preferred. It is not clearly more important than the line
   that is there, so it was left unchanged.

## tesamorelin: PASS

Tiles: "Only in the US", "Canada approved it, but it is no longer sold there", not approved in the UK or Australia,
prescription; tested: "Yes"; sport: banned at all times.

1. **What is it for?** "for one narrow use: deep belly fat in adults with HIV". Fact sheet: "Extra belly fat in adults
   with HIV". "it is not for weight loss, because it does not change body weight".
2. **Does it work?** Lead: "Yes, for deep belly fat in people with HIV." KeyNumber "Deep belly fat shrank by about 15%"
   (Study 1, 412 adults). "Pooled, in 806 people, the treatment effect on visceral fat was −15.4%", so "about 15%"
   holds across the large trials, not only for Study 1. Callout: "tested in large trials in people".
3. **What if I stop?** See doubt 3.
4. **Does it slow ageing?** Lede: "Not shown to slow ageing." "No trial measured ageing." "No published trial has
   measured heart attacks, strokes or deaths as its main result".
5. **Are online vials the same?** Compare, online vial: "Not checked by any regulator". Fold title "why a 'research'
   vial is not Egrifta".

## thymosin-alpha-1: PASS

Tiles: "Only in other countries" ("Approved in Italy, India and Hong Kong for some uses"), not approved in the four;
tested: "Yes"; sport: unclear.

1. **What is it?** Lead: "It is a natural immune peptide." Compare: "First found in calf thymus in 1977"; "TB-500 comes
   from thymosin beta-4, a different protein."
2. **Does it work?** Lead: "Not clear. The biggest trial found no gain. Hepatitis B results are mixed." KeyNumber "No
   fewer deaths in sepsis" (TESTS, 1,106 adults).
3. **What did US advisers decide?** "On 4 December 2024 the FDA's Pharmacy Compounding Advisory Committee voted 4 for
   and 17 against adding thymosin alpha-1 to the 503A list". Minutes are cited (`fda-pcac-2024-12-minutes`), so this
   one needs no "reports say".
4. **Does it mix badly with medicines?** "Medicines that damp down the immune system. … If so, talk to your specialist
   first. The labels warn about this mix." See doubt 4.

## tirzepatide: FIXED

Tiles: approved in all four, only with a prescription; tested: yes; sport: not banned.

1. **Who is it for?** FIXED.
   - Old: "Type 2 diabetes (Mounjaro) and weight loss (Mounjaro, or Zepbound in the US and Canada)."
   - New: "Type 2 diabetes (Mounjaro). Weight loss: Zepbound in the US and Canada, Mounjaro in the UK and Australia."
   - Why: the old line reads as if Mounjaro were also the weight-loss brand in the US and Canada. The page and data say
     it is not. "In the US it is sold as Mounjaro for type 2 diabetes … and as Zepbound for weight management";
     "There is no Zepbound in the UK or Australia: there, Mounjaro carries both uses". `mounjaro-us` and `mounjaro-ca`
     list type 2 diabetes (and heart risk in the US), with no weight use. `zepbound-ca`: "Chronic weight management".
     18 words.
2. **How do I get it legally?** PASS. "a doctor or another prescriber decides, and a pharmacy supplies it. A prescriber can
   check whether the medicine suits you."
3. **Does it work?** PASS. Lead: "Yes, for blood sugar and weight, in large trials." KeyNumber "Weight fell by about 15 to
   21% on average" (SURMOUNT-1, 2,539 adults, "depending on the dose"). "In a large trial" carries the one-trial hedge.
4. **What if I stop?** Trimmed only, to make room for item 1.
   - Old: "Much of the lost weight comes back."
   - New: "Much of the weight returns."
   - The page's own sentence: "Much of the weight returns when treatment stops" (weight fold). Lead: "Much of the lost
     weight returns after stopping." The meaning is unchanged.
5. **Are online vials the same?** Trimmed only.
   - Old: "No. No regulator checks them, and fake Mounjaro pens have been found."
   - New: "No. No regulator checks them. Fake Mounjaro pens have been found."
   - Support is unchanged: "No approved label: nobody has checked how to use it or what it does to your health"; "the UK
     regulator states that GLP-1 powders in vials are not authorised"; "falsified Mounjaro KwikPens"; "Health Canada
     seized counterfeit Mounjaro vials and pens in March 2026".

---

## Rules checked on every line

No doses, schedules or use instructions. No seller names, buying help or seller-judging words. No emergency number. Only
the US, the UK, Canada and Australia (plus Russia, Italy, India and Hong Kong where the page names them as places where
it is registered). No EU, Netherlands or EMA. No "safe", "proven" or superlatives. Questions are 6 words or fewer and
end in "?". Answers are 18 words or fewer. Totals are 78 to 85 words. The validator reports no tldr warning (reading
ease included).

## Summary of changes

- **semaglutide, "What if I stop?"**: "On average, about two-thirds of lost weight came back within a year." → "In one
  study, about two-thirds of lost weight returned within a year." The figure comes from one exploratory study (STEP 1
  extension) and must not read as settled.
- **tirzepatide, "Who is it for?"**: "Type 2 diabetes (Mounjaro) and weight loss (Mounjaro, or Zepbound in the US and
  Canada)." → "Type 2 diabetes (Mounjaro). Weight loss: Zepbound in the US and Canada, Mounjaro in the UK and
  Australia." The old line implied that Mounjaro is the weight-loss medicine in the US and Canada. The page says that is
  Zepbound, and Mounjaro carries both uses only in the UK and Australia.
- **tirzepatide, "What if I stop?"** and **"Are online vials the same?"**: trimmed, with the meaning unchanged, so the
  box stays at 85 words ("Much of the lost weight comes back." → "Much of the weight returns."; ", and fake Mounjaro
  pens" → ". Fake Mounjaro pens").
- Semax, SS-31, TB-500, tesamorelin and thymosin alpha-1: no change. The doubts about these pages were settled as
  "keep", with the page support quoted above.
