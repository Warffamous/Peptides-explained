# TL;DR evidence table: group "learn"

Ten explainer pages (basics, evidence, history). For each TL;DR item: the line as written in the page's `tldr:` frontmatter, then the exact supporting text from that page, with its section (`§` = the `##` heading; "Lead" = the `<Lead>` question and answer at the top of that section; "InDetail" = the fold-out of that title; table rows are quoted cell by cell, cells separated by " / "). Citation tags are left out of the quotes. Word counts use `wordCount` from `src/lib/readability.ts`, the function the validator uses.

The validator (`npx tsx scripts/validate-content.ts --only <page>`) reports 0 errors and 0 warnings for all ten pages.

---

## basics/what-is-a-peptide.mdx (5 items, 110 words)

1. **What is a peptide?** A short chain of building blocks called amino acids. Long, folded chains are called proteins.
   - § From amino acid to chain, Lead: "What is a peptide made of?" "Amino acids, joined end to end like beads on a string."
   - Same §, diagram, steps 3 and 4: "A chain of a few to about 50 is usually called a peptide." "Longer chains are called polypeptides. They fold into a fixed shape and form proteins."
   - Diagram caption: "Amino acids join into chains. Short chains are peptides. Long, folded chains are proteins."
   - Note: "building blocks" is a plain-language gloss for "amino acids" (the retired summary used it), not a new fact.

2. **Is a natural peptide harmless?** No. Insulin keeps you alive, but too much is dangerous. The death cap mushroom's poison is a peptide.
   - § "Natural" says nothing about safety, Lead: "If a peptide is natural, is it harmless?" "No. What a peptide does depends on the molecule, the amount and where it goes."
   - Same §, table: "Insulin / Your own pancreas / Keeps you alive. Too much makes blood sugar fall dangerously low"; "Alpha-amanitin / The death cap mushroom / A ring-shaped peptide that destroys the liver; it survives cooking and digestion".

3. **Peptide or protein: what's the difference?** Mainly size, and experts draw the line in different places. The word says nothing about risk.
   - § Where "peptide" ends and "protein" begins, Lead: "When is a chain a peptide, and when is it a protein?" "There is no sharp line. Different experts draw it in different places."
   - Same §: "The line is a convention, not a property of nature." "The word "peptide" therefore tells you about size, not about what a molecule does or how risky it is."

4. **Why are most peptides injected?** They are far bigger than most pills. Size makes it hard to get through the gut wall.
   - § Size: why the weight of a molecule matters, diagram caption: "Peptide medicines are far bigger than most pills."
   - Same §, Lead: "Why does size matter?" "Size decides if a molecule can pass the gut wall, the kidney filter and the walls of cells."
   - Same §: "A widely used rule of thumb from drug chemistry says that poor absorption is more likely when a molecule weighs more than 500 daltons. Every molecule in the table is above that."
   - Same §, InDetail "Size, the kidneys and the immune system", Getting through barriers: "Natural peptides are typically large, water-loving and poorly able to cross membranes, and they are cleared quickly. That is why most peptides work on receptors on the outside of cells (see how signalling works) and why most are injected (see why not a pill)."

5. **Is a peptide product always pure?** No. Making a peptide leaves some impurities. A product from outside the legal supply chain has no guarantee.
   - § How peptides are made, and what each method leaves behind, diagram caption: "Each way of making a peptide leaves its own kind of impurity."
   - Same §: "A regulated maker purifies the product and tests it against set limits before release. A product from outside the legal supply chain comes with no such guarantee; what labs have found in real vials is on the product risk page."

---

## basics/why-not-a-pill.mdx (5 items, 109 words)

1. **Can peptides be taken as pills?** Rarely. Your gut digests them like food protein. That is why most peptide medicines are injected.
   - § The gut is built to take protein apart, Lead: "Why can't you just swallow a peptide?" "Your gut digests it like food protein, then blocks most of what is left."
   - Intro: "Peptides are digested in the gut because the same enzymes that break down food protein cut peptide bonds. So most peptide medicines are injected."
   - Same §: "Injecting under the skin skips all five barriers, which is why most peptide medicines are given that way."
   - "Rarely": § How much gets through, InDetail "Other approved oral peptides, and the natural exceptions", Peptides that do survive the gut: "Being a peptide does not rule out oral absorption; it makes it the exception, which has to be shown for each molecule."

2. **Do capsules and sprays work?** There is no evidence they do. No study in people has measured how much BPC-157 reaches the blood.
   - § Capsules, sprays and drops sold online, Lead: "Do peptide capsules, sprays or drops work as well as injections?" "There is no evidence that they do. No study in people has measured how much reaches the blood."
   - Same §: "The FDA found BPC-157 sold as capsules, oral sprays and nasal sprays, but no human data on how much of it reaches the blood by these routes."

3. **So is it at least harmless?** Not always. What is in it, including any impurities, is still unknown.
   - § Capsules, sprays and drops sold online, InDetail "What the evidence does and does not show", What this means: "A product that delivers little is not automatically harmless either: what is in it, including impurities, is still unknown (see product risk)."

4. **Does the semaglutide tablet work?** Yes: in trials it lowered blood sugar. Only about 1 to 2 in 100 parts reach the blood.
   - § How the semaglutide tablet gets round the problem, InDetail "What the tablet costs: rules, variation and switching", Variation between people: "In clinical trials the tablet still lowered blood sugar: in PIONEER 1, a randomised, double-blind, placebo-controlled trial in 703 adults with type 2 diabetes, with authors from the manufacturer, it lowered HbA1c (average blood sugar) compared with placebo at all three tablet strengths over 26 weeks."
   - § How much gets through, Lead: "How much of a swallowed peptide reaches the blood?" "Very little. Even special tablets get only 1 or 2 in 100 parts through."
   - § How the semaglutide tablet gets round the problem, diagram step 4: "About 1–2% of the dose reaches the blood. It varies a lot from person to person."

5. **Is there a similar pill?** Orforglipron: not a peptide, but it switches on the same GLP-1 receptor. Approved in the US and UK.
   - § The other route: a small-molecule pill, Lead: "Is there a pill that acts like a peptide?" "Yes. Orforglipron is not a peptide, but it switches on the same GLP-1 receptor."
   - Same §, Compare table: "Approved in the US? / … / Since 1 April 2026, for weight management"; "Approved in the UK? / … / Since 10 August 2026, for weight management and type 2 diabetes".

---

## basics/pharmacokinetics.mdx (5 items, 107 words)

1. **What is a half-life?** The time it takes for the amount of a medicine in the blood to fall by half.
   - § Half-life: the number that drives everything, Lead: "What is a half-life?" "The time it takes for the amount of a medicine in the blood to fall by half."

2. **How long does semaglutide last?** Its half-life is about a week. After stopping, it stays in the blood about five to seven weeks.
   - § Half-life: the number that drives everything, KeyNumber: "The changed copy takes about a week to fall by half" / "about 1 week" / "half-life in the blood, in people" / "People with overweight or obesity; US label for Wegovy (semaglutide)".
   - Same §, InDetail "What half-life controls, step by step", Each half-life closes half the gap: "It is also why semaglutide stays in the circulation for about five to seven weeks after the last dose."

3. **Why does a long half-life matter?** Side effects last long too. It takes weeks to build up and weeks to fade.
   - § Half-life: the number that drives everything, InDetail "What half-life controls, step by step", Why a long half-life cuts both ways: "Side effects last long too." and "Slow to start, slow to stop. It takes weeks to reach steady levels, and weeks for them to fade."

4. **How long does BPC-157 last?** Nobody knows in people. For BPC-157, TB-500 and KPV, the FDA found no human data on this.
   - § Many unapproved peptides have no human data, Lead: "How do unapproved peptides behave in the human body?" "Often nobody knows. For many of them, this was never measured in people."
   - Same §, Compare table (detail: "What the US label says about semaglutide, and what the FDA found for BPC-157, TB-500 and KPV in 2026."): "Half-life measured in people? / Semaglutide: About one week / BPC-157: No human measurement / TB-500: No human studies found / KPV: No human studies found".
   - Same §, InDetail "What the FDA found, and what a missing half-life means in practice": "For BPC-157 it found no human pharmacokinetic data after use by mouth, under the skin, in the nose or through the skin." "For TB-500 and KPV it found no human studies of pharmacokinetics by any route."
   - § How the body clears a peptide, KeyNumber: "no human value has been published".

5. **Does missing data mean harm?** No. Missing data is not proof of harm. It means nobody can estimate the risk.
   - § Many unapproved peptides have no human data: "Missing data is not proof of harm. It means the risk cannot be estimated."

---

## basics/how-signalling-works.mdx (5 items, 115 words)

1. **How does a peptide work?** It fits a receptor on the cell surface and switches it on, like a key in a lock.
   - § Receptors: locks on the cell surface, Lead: "How does a peptide tell a cell what to do?" "It fits a receptor on the cell surface and switches it on, like a key in a lock."

2. **Why does it have side effects?** The same receptor sits in many organs. Wanted effects and side effects often come from the same receptor.
   - § One molecule, many effects, Lead: "Why does one medicine have so many effects?" "Because the same receptor sits in many organs. The key opens every lock that fits."
   - Same §: "A medicine cannot choose which of them it reaches. The wanted effect in one organ and the side effect in another often come from the very same receptor."

3. **Can a precise peptide still harm?** Yes. It can act in the wrong organ, hit other receptors at higher amounts, or push growth.
   - § Precise is not the same as harmless, Lead: "If a peptide is very specific, can it still cause harm?" "Yes. It can act in the wrong organ, hit other receptors at higher amounts, or push growth."

4. **Can growth peptides cause cancer?** Unknown: long use of unapproved ones has not been studied in people. Cancers depend on growth signals too.
   - § Precise is not the same as harmless, InDetail "Four ways a precise key causes trouble", 4. Growth signals are shared with tumours: "Some peptides act on growth pathways: they push cells to divide, survive or grow new blood vessels. Cancers depend on the same capabilities: sustained growth signalling and the growth of new blood vessels are two of the recognised hallmarks of cancer."
   - Same place (Claim, level "hypothesis"): "Whether unapproved peptides that push growth signals for months or years change cancer risk in people has not been studied."

5. **Does it keep working the same?** Often not. Cells turn down receptors that are used too much, and hormone systems brake themselves.
   - § The body pushes back, Lead: "Does a peptide keep working the same way over time?" "Often not. Cells turn down receptors that are used too much. Hormone systems brake themselves."

---

## evidence/how-to-read-a-study.mdx (6 items, 119 words)

1. **Do animal studies show it works?** Not in people. Only trials in people can show that.
   - § Which kind of study answers which question, diagram caption: "Each kind of study answers a different question. Only trials in people show what happens in people."
   - Same diagram, row: "Animal study / Effects in a living animal, often with an injury made in the laboratory / That the same happens in people".

2. **Why does study size matter?** In small studies, chance alone can produce a big effect.
   - § Why the number of subjects matters, Lead: "Why does it matter how many were studied?" "In a small study, chance alone can produce a big effect. Large studies are harder to fool."

3. **What makes a test fair?** A comparison group, chance deciding who gets what, nobody knowing who got what, and a plan published first.
   - § What makes a test fair, Lead: "What makes a test fair?" "A comparison group, chance deciding who gets what, nobody knowing who got what, and a plan published first."

4. **What does ‘significant’ mean?** Only that the result would be surprising if the treatment did nothing. It says nothing about size.
   - § How big, not just "significant", Lead: "What does 'statistically significant' mean?" "Only that the result would be surprising if the treatment did nothing. It says nothing about size."

5. **What does ‘20% lower risk’ mean?** It depends on how common the problem was. In one big trial: 15 fewer people in every 1,000.
   - § Relative and absolute risk: a worked example, Lead: "What does '20% lower risk' really mean?" "It depends on how common the problem was. Always ask: how many in 100, or in 1,000?"
   - Same §, KeyNumber: "As counts: 15 fewer people in every 1,000" (SELECT: 17,604 adults, about 3 years).
   - Same §: "As a relative risk, that is about 20% fewer. As an absolute difference, it is 1.5 in 100: 15 fewer people in every 1,000."

6. **Can I trust a headline?** Check who was studied. A story that a peptide ‘heals tendons’ may be about rats.
   - § A checklist for any abstract or headline, checklist item 1: "In whom? Cells, animals or people? Which people: how old, how ill?"
   - Same §: "Headlines often skip the first question. A story that says a peptide "heals tendons" may be about rats, and the exaggeration may have started in the press release."

---

## evidence/evidence-grading.mdx (6 items, 120 words)

1. **Why not one score?** One number hides where evidence is strong or missing. We give four grades and never add them.
   - § Why four questions and not one score, Lead: "Why not give each compound a simple score?" "Because one number hides where the evidence is strong and where it is missing."
   - Same §, InDetail "What a single score would hide": "So the four grades sit side by side and are never added, averaged or ranked."

2. **What are the four questions?** Tested in people? How much animal and lab research? How many research groups? How well are harms known?
   - § What the grades cannot tell you, diagram "What a grade says, and what it does not.", column "A grade says": "How far testing in people has gone"; "How many lab and animal studies exist"; "How many groups did the research"; "How well harms in people are known".

3. **Does a good grade mean harmless?** No. It shows how much is known. It does not say harm is absent.
   - § What the grades cannot tell you, Lead: "Does a good grade mean a compound is harmless?" "No. A grade describes how much is known. It does not say that harm is absent."

4. **Does a grade cover a vial?** No. Grades describe the molecule as studied, not what is in a vial.
   - § What the grades cannot tell you: "And the grades are about the molecule as it was studied, not about a vial: a product from outside the legal supply chain can contain a different amount, or a different substance (see product risk)."

5. **What do the labels mean?** They say what each claim rests on: an idea, cells, animals or people.
   - § What the badges in the text mean, Lead: "What do the small labels next to claims mean?" "They say what kind of evidence each claim rests on: an idea, cells, animals or people."

6. **Can a grade change?** Yes, if new evidence is published or we find a mistake. Every change is logged.
   - § How a grade changes, Lead: "Can a grade change?" "Yes. If new evidence is published or we find a mistake, it changes. Every change is logged."

---

## evidence/conflicts-of-interest.mdx (5 items, 110 words)

1. **Does it matter who paid?** Yes. Studies paid for by the maker more often report results that favour the product.
   - § Does it matter who paid for a study?, Lead: "Does it matter who paid for a study?" "Yes. Studies paid for by the maker more often report results and conclusions that favour the product."

2. **Does a conflict make it false?** No. But you should look for checks by independent groups before you rely on the result.
   - § A conflict changes how much checking you need, Lead: "Does a conflict of interest make a result false?" "No. It changes how much independent confirmation you should look for before you rely on it."

3. **How can I tell who paid?** Read the funding, author and conflict statements. They are usually at the end of the paper.
   - § How to spot a sponsored study or a seller's review, Lead: "How can I tell who is behind a study?" "Read the funding, author and conflict statements. They are usually at the end of the paper."

4. **Can I trust a seller's ‘research’?** Treat a seller's review, research page or lab report as advertising. Read the studies it cites yourself.
   - § A conflict changes how much checking you need, diagram row: "A seller's review, "research" page or lab report / Treat as advertising; read the primary studies and independent tests".
   - § How to spot a sponsored study or a seller's review: "A review written or paid for by someone who sells the product works like a sales document, even when every study it cites is real. Read it for its references, then read those studies yourself."

5. **What about influencers and experts?** Ask who pays them, which is often not shown. If they earn from sales, treat it as advertising.
   - § Paid experts and influencers, Lead: "Can I trust an expert or influencer who recommends a product?" "Ask who pays them. Small gifts go with changes in what doctors do. Payment is often not shown."
   - Same §, InDetail "What studies of paid experts and influencers show": "For peptides sold outside pharmacies the same questions apply, with one more: does the person recommending a product earn from its sale, through a discount code, an affiliate link or their own shop? If so, treat what they say as advertising, however sincere it sounds."
   - § A conflict changes how much checking you need, diagram row: "An influencer or expert paid by a seller / Treat as advertising, whatever the tone".

---

## evidence/the-translation-gap.mdx (5 items, 115 words)

1. **Do rat results apply to people?** Often not. In one big review, only 5 in 100 treatments tested in animals were later approved.
   - Intro: "This page explains, cause by cause, why a result in an animal so often fails to appear in people".
   - § How often animal results reach people, Lead: "How often does an animal result become a medicine?" "Rarely. In one large review, 5 in 100 treatments tested in animals were approved."
   - Same §, KeyNumber: "5%" / "of treatments tested in animals were later approved for use in people" / "281 treatments from 122 systematic reviews, more than 10 years after the first animal study (Ineichen 2024)".

2. **Why do rats respond differently?** Receptors, immune systems and drug handling differ. Lab rats are often young and healthy, with a fresh injury.
   - § A rat is not a small person, Lead: "Why can a rat respond differently from a person?" "Its receptors, immune system and drug handling differ, and its whole life lasts a few years."
   - § The animal and the injury are not the patient, Lead: "Is a rat with a lab-made injury like a patient?" "Rarely. The animals are young and healthy, and the injury is fresh and uniform."

3. **Can animal doses be scaled up?** No. Scaling gives only a cautious first test dose. Only trials in people can show what works.
   - § Why an animal dose cannot be scaled to a person, Lead: "Can an animal dose be converted to a human dose?" "No. Scaling gives regulators only a cautious first test dose. Then trials in people take over."
   - Same §: "So it cannot tell anyone what dose works in people, or how much can be used without harm outside a trial. Only the human trials that follow can."

4. **Can animal tests miss a danger?** Yes. In 2006, a new drug made six healthy men critically ill within hours. All six survived.
   - § TGN1412: when animal safety tests missed the danger, Lead: "Can animal tests miss a serious danger?" "Yes. In 2006, six healthy men became critically ill within hours of a first human dose."
   - Same §, TimeStrip title: "Within hours of one infusion, all six volunteers were seriously ill. All six survived."
   - Same §: "TGN1412 was a lab-made antibody, not a peptide, designed to switch on immune cells. The animal safety tests had not predicted the reaction."

5. **What does this mean for me?** If a product was tested mainly in animals, its effects and risks in people are not known.
   - § What an animal result means for a peptide: "If you already use a product that was tested mainly in animals, its effects and risks in people are, honestly, not known."

---

## history/how-we-got-here.mdx (6 items, 119 words)

1. **Why must medicines be approved?** Some medicines did great harm before anyone checked them. Thalidomide harmed more than 10,000 babies.
   - Page top (before the first `##`), Lead: "Why does a medicine need a licence before it is sold?" "In the past, some medicines did great harm before anyone checked them."
   - § Thalidomide, Lead: "What happened with thalidomide?" "A sleeping pill taken early in pregnancy harmed more than 10,000 babies."

2. **What must a medicine show?** That it is made properly, works in well-controlled studies, and passed safety tests.
   - Page top, diagram "Three questions every new medicine must answer before sale": "Is it safe enough? / Tests show the harms in normal use"; "Does it work? / Well-controlled studies show the effect it claims"; "Is it made properly? / Production under controls that keep its contents as declared".
   - Page top: "Today a new medicine must answer these three questions before it can be approved in the US, the UK, Canada or Australia."
   - § What the checks give you, diagram row: "Safety / Animal tests and trials in people; refusal if the tests do not show safety".
   - Note: "passed safety tests" stands for the page's "Is it safe enough?" because the validator's guardrail flags "is safe".

3. **Does approval make it harmless?** No. It makes one product's benefits and risks known. Rare harms often appear later.
   - § What the checks give you: "The checks do not make a medicine harmless. They make its benefits and risks known, for one defined product. Rare harms often show up only after many people use a medicine, so reporting continues after sale and the label is updated."

4. **Does a copy share the evidence?** No. Trials test one product. A copy from outside the legal supply chain is not covered.
   - § What the checks give you, InDetail "Why the evidence belongs to a product, not to a name": "The logic is simple: a trial measures what was in the trial. If a different product has a different content, amount or purity, the trial says little about it." "This is why a product from outside the legal supply chain that carries the name of an authorised medicine is not covered by that medicine's evidence."

5. **What do these rules cost?** Years of testing and a lot of money. Some medicines arrive late; some substances are never tested.
   - § What the caution costs, Lead: "What does this caution cost?" "Years of testing and a lot of money. Some medicines arrive late, and some substances are never tested."

6. **Are there faster routes?** Mostly for serious illness. None is a shortcut for a product of unknown content.
   - § Faster routes, and their limits, Lead: "Are there faster routes?" "Yes, mostly for serious illness. They let people use a medicine sooner, on less data, under strict rules."
   - Same §: "None of these routes is a shortcut for a product of unknown content."

---

## history/the-croatian-lab.mdx (6 items, 119 words)

The page states that it does not accuse the group of wrongdoing; item 4 keeps that.

1. **Who did the BPC-157 research?** Mostly one group in Zagreb, Croatia. About 85 in 100 lab and animal papers come from it.
   - Intro: "But it was built almost entirely by one research group: Predrag Sikirić, Sven Seiwerth and their colleagues at the School of Medicine of the University of Zagreb."
   - § Counting the literature, Lead: "How much of the research comes from this one group?" "Most of it. About 85 in 100 lab and animal papers come from the Zagreb group."
   - Frontmatter description: "Most BPC-157 research comes from one group in Zagreb."

2. **Isn't that a lot of evidence?** Many studies from one lab are not many separate checks.
   - § Why volume is not the same as independence, Compare title: "Many studies from one lab are not many separate checks."

3. **Why does one lab matter?** Shared methods can make the same mistake every time. A second lab can catch it.
   - § Why volume is not the same as independence, Lead: "Why does it matter that one group did most of the work?" "Shared methods can make the same mistake every time. A second lab can catch it."

4. **Did the group do anything wrong?** No. We found no sign of wrongdoing. Nor do we say the findings are false.
   - § Being fair to the group, Lead: "Does this mean the group did something wrong?" "No. We found no sign of wrongdoing. This page describes the evidence, not the people."
   - Same §, diagram, column "What it does not say": "That the group did anything wrong"; "That the findings are false".
   - Same §: "Nothing on this page alleges misconduct, and nothing in our analysis suggests it."

5. **Has anyone else checked it?** Rarely. Other labs found some effects in cells and rats. Nothing has been confirmed in people.
   - Page top, Lead: "Why a page about one research group?" "One group did most of the research on BPC-157. Other labs have rarely checked its results."
   - § What the independent work shows so far, Lead: "What has independent work found?" "Some effects in cells and in rats. Nothing has been confirmed in people."

6. **What would settle the question?** Other labs repeating the key tests, and trials in people, all published in full.
   - § What would change the picture, Lead: "What would settle the question?" "Other labs repeating the key tests, and trials in people, all published in full."
