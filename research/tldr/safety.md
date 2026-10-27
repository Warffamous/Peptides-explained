# TL;DR evidence table: safety group (27 October 2026)

Every TL;DR line below is matched to the sentence(s) on the same page that support it, quoted exactly, with the
section. Two components show data on these pages, and that data counts as page content:

- `<WarningSigns />` shows `src/i18n/en/warning-signs.json`, grouped under the labels "Call your local emergency
  number now" (`common.emergency.now`), "Get medical help today" (`vocab.warningAction.urgent`) and "Stop and contact a
  doctor" (`vocab.warningAction.stop`). It is on warning-signs (all groups), if-something-goes-wrong (all groups),
  injection-safety (`injection,allergic`), sterile-technique (`injection`), product-risk (`injection,allergic,metabolic`)
  and monitoring (`metabolic,cardiovascular,general`).
- `<ProductCheck />` shows `src/i18n/en/product-check.json`. It is on before-you-consider, sterile-technique and
  product-risk.

In quoted table rows, ¦ marks the border between two table cells on the page.

Word counts are from `src/lib/readability.ts` (q + a). Every file passes
`npx tsx scripts/validate-content.ts --only <file>` with no tldr errors or warnings.

---

## 1. safety/warning-signs.mdx (118 words, 6 items)

| # | TL;DR (q / a) | Supporting sentence(s) on the page | Section |
|---|---|---|---|
| 1 | **Hard breathing or chest pain?** / Call your local emergency number now. Also for throat swelling, sudden weakness on one side, or a fit. | Callout title: "Call your local emergency number now if". Its list: "the lips, tongue or throat swell, or breathing is hard;" "there is chest pain or pressure that does not go away;" "one side of the face or body suddenly becomes weak, or speech is slurred;" "someone is confused, very drowsy or has a fit." Also in `<WarningSigns />`, under "Call your local emergency number now": "Pain, pressure or tightness in the chest, or pain that spreads to the arm, neck, jaw or back"; "Sudden, severe shortness of breath: gasping, or not able to finish a sentence"; "A fit (seizure): jerking movements, or suddenly not responding". | Top callout (stop-now); `<WarningSigns />` under "The three levels of help" |
| 2 | **Spreading redness, red lines or pus?** / Get medical help today: your doctor, or a health advice line or urgent care when closed. | "**Get medical help today.** Act straight away, not tomorrow. Contact your own doctor. When they are closed, use a health advice line or an urgent-care service." In `<WarningSigns />`, under "Get medical help today": "Redness, heat, swelling or pain around the injection spot that keeps growing or getting worse"; "Red lines that run from the injection spot towards the armpit or groin"; "A painful, warm lump that fills with pus". | The three levels of help (diagram three-levels-of-help); `<WarningSigns />` |
| 3 | **Itchy rash or changing mole?** / Stop using the product and contact your doctor within days, not weeks. | "**Stop and contact your doctor soon.** Stop using the product. Make an appointment with your doctor within days, not weeks." In `<WarningSigns />`, under "Stop and contact a doctor": "An itchy, raised rash, or puffy eyes or lips, while breathing stays normal"; "A new mole, or a mole that changes size, shape or colour, itches or bleeds". | The three levels of help; `<WarningSigns />` |
| 4 | **Not sure how urgent?** / Call a health advice line or your doctor. Better too often than too late. | "If you are not sure which level fits, call a health advice line or your doctor. They will tell you what to do. Calling too often is better than calling too late." | The three levels of help |
| 5 | **What do I bring?** / The vial, pen or box with its label. Tell the doctor the truth about what you used. | Lead: "Bring the product and its label. Tell the doctor the truth about what you used." Checklist: "The vial, pen or box you used, with its label." "Tell the doctor the truth, even if it feels awkward." | What to bring and what to say; Tell the whole story |
| 6 | **Will the doctor tell anyone?** / Doctors have a duty to keep it private, with a few exceptions. | "Doctors have a duty to keep what you tell them private." "There are a few exceptions." | Tell the whole story |

## 2. safety/if-something-goes-wrong.mdx (120 words, 6 items)

| # | TL;DR (q / a) | Supporting sentence(s) on the page | Section |
|---|---|---|---|
| 1 | **Hard breathing or chest pain?** / Call your local emergency number now. Also for throat swelling, sudden weakness on one side, or a fit. | Callout title: "Call your local emergency number now if". Its list: "the lips, tongue or throat swell, or breathing is hard;" "there is chest pain or pressure that does not go away;" "one side of the face or body suddenly becomes weak, or speech is slurred;" "someone is confused, very drowsy or has a fit, for example with very low blood sugar." Also `<WarningSigns />` (all groups), under "Call your local emergency number now": "Pain, pressure or tightness in the chest, …"; "A fit (seizure): jerking movements, or suddenly not responding". | Top callout (stop-now); `<WarningSigns />` under "Where to get help" |
| 2 | **Spreading redness, red lines or pus?** / Get medical help today: your doctor, or a health advice line or urgent care when closed. | Table row: "It cannot wait until tomorrow ¦ Your own doctor. When they are closed: a health advice line or an urgent-care service". In `<WarningSigns />`, under "Get medical help today": "Redness, heat, swelling or pain around the injection spot that keeps growing or getting worse"; "Red lines that run from the injection spot towards the armpit or groin"; "A painful, warm lump that fills with pus". | Where to get help (diagram where-to-get-help); `<WarningSigns />` |
| 3 | **Itchy rash or changing mole?** / Stop using the product and contact your doctor within a few days. | Table row: "It can wait a few days ¦ Make an appointment with your doctor". In `<WarningSigns />`, under "Stop and contact a doctor": "An itchy, raised rash, or puffy eyes or lips, while breathing stays normal" ("Your body may be reacting to the product, and using it again can bring the reaction back."); "A new mole, or a mole that changes size, shape or colour, itches or bleeds". | Where to get help; `<WarningSigns />` |
| 4 | **What do I tell the doctor?** / What you used, how much, and everything else you take. Bring the vial or pen and its label. | Lead: "What you used, when, how much and where, and everything else you take." Checklist: "**How much and how often.** The doctor needs this to understand what happened." "**Everything else you take**: medicines, supplements, alcohol and drugs." Lead: "Yes. Bring the vial or pen with its label and box. A lab may test it." | What to tell the doctor; Bring the product, and keep it |
| 5 | **Will the doctor report me?** / Doctors must keep what you say private, with a few exceptions. | Lead: "Doctors must keep what you tell them private, apart from a few exceptions." "The doctor's job is to treat you, not to judge you." | Why you can be open with a doctor |
| 6 | **Should I report it?** / Yes, if you can: the side effect, and a product you think is fake. | Lead: "Yes, if you can. Report the side effect, and a product you think is fake." | Report what happened |

## 3. safety/before-you-consider.mdx (120 words, 6 items)

| # | TL;DR (q / a) | Supporting sentence(s) on the page | Section |
|---|---|---|---|
| 1 | **Who should not use them?** / Anyone who is pregnant, breastfeeding, trying to conceive or under 18. | Lead: "People who are pregnant, breastfeeding or under 18." Table rows: "Pregnant, breastfeeding or trying to conceive ¦ All ¦ …"; "Under 18 ¦ All ¦ The body is still growing; long-term effects in young people are unknown". | Opening (diagram red-lines-overview) |
| 2 | **What if I have had cancer?** / Do not use healing or growth peptides. In theory, they could help a tumour grow. | Lead: "Not healing or growth peptides. They push growth signals that could help a tumour grow." "If you have had cancer, or have an unexplained lump, do not use them." "These peptides could, in theory, help a hidden or treated tumour grow." | Cancer, now or in the past |
| 3 | **On insulin or diabetes tablets?** / Not without your doctor. With a GLP-1 type product, blood sugar can fall dangerously low. | Lead (question "Can I use them with insulin or diabetes tablets?"): "Not without your doctor. Together with a GLP-1 type product, blood sugar can fall dangerously low." | Diabetes treated with insulin or sulfonylurea tablets |
| 4 | **Heart disease or high blood pressure?** / Do not use PT-141 or melanotan II. PT-141 raises blood pressure for some hours. | Lead: "Do not use PT-141 or melanotan II. PT-141 raises blood pressure for some hours after each dose." | Heart disease or high blood pressure |
| 5 | **What else needs a doctor first?** / Kidney disease, an eating disorder, a weak immune system or blood thinners. There are others. | Kidney Lead: "Ask a doctor first." Eating disorders: "If you have, or had, an eating disorder, do not use appetite-lowering products without your treatment team." Weak immune system Lead: "Talk to your own doctor first." Blood thinners Lead: "Talk to your doctor first." Not complete: "This is not a full list for any one product." and the table also lists pancreatitis, thyroid cancer, sport. Final checklist: "If you answer yes to any of these, talk to a doctor before you start." | Kidney disease; Eating disorders; A weak immune system; Blood thinners; opening; Tell your doctor |
| 6 | **What applies to everyone?** / Never share needles, vials or pens. Never use a product that looks wrong. Never stop a prescribed medicine. | Lead: "Never share equipment. Never use a product that looks wrong. Never stop a prescribed medicine." Table: "Never share needles, syringes, vials or pens". | Rules for everyone |

## 4. safety/injection-safety.mdx (112 words, 5 items)

| # | TL;DR (q / a) | Supporting sentence(s) on the page | Section |
|---|---|---|---|
| 1 | **What if I react badly?** / Swollen throat or hard breathing: call your local emergency number. Mild rash: stop and contact your doctor. | Lead (same question): "Mild rash: stop and contact your doctor. Swollen throat or hard breathing: call your local emergency number." (order swapped so the most urgent comes first). | Allergic reactions |
| 2 | **Is a red spot normal?** / A small spot that fades is common. Spreading redness, pus or fever: get medical help straight away. | Lead: "A small spot that fades is common. Spreading redness, pus or fever is not." Table: "Redness, heat, swelling and pain that keep growing ¦ … ¦ Get medical help straight away: …"; "Fever, shivering or feeling very ill ¦ … ¦ Get medical help straight away. …"; "A painful, warm lump that fills with pus ¦ An abscess ¦ Contact your doctor today. Do not squeeze it." `<WarningSigns />` (injection) lists the pus lump under "Get medical help today". | What is normal, and what is not (diagram normal-reaction-or-infection) |
| 3 | **Where should I never inject?** / Into a vein, or into skin that is red, swollen, painful, bruised, scarred, hard, broken or has eczema. | Lead (same question): "Into skin that is red, swollen, painful, bruised, scarred, hard, broken or has eczema." Lead: "Most go into the fat just under the skin. Never inject them into a vein." | Skin to avoid; Under the skin, never into a vein |
| 4 | **Why change the spot each time?** / Injecting in one place can cause fatty lumps. A medicine in a lump is absorbed unevenly. | Lead (same question): "Injecting in one place can cause fatty lumps. A medicine in a lump is absorbed unevenly." | Change the spot every time |
| 5 | **How do I avoid needle pricks?** / Do not put the cap back on a used needle. Put it straight into a sharps container. | Lead: "Do not put the cap back on a used needle. Put it straight into a sharps container." | Avoid needle-stick injuries |

## 5. safety/sterile-technique.mdx (120 words, 6 items)

| # | TL;DR (q / a) | Supporting sentence(s) on the page | Section |
|---|---|---|---|
| 1 | **Can I reuse a needle?** / No. Use a new sterile needle and syringe every time. Never share them or a vial. | "**Use a new sterile needle and syringe every time** you go into a vial. Never put a needle back into a vial after it has been in your skin." "**Never share** a vial, a syringe, a needle or the water. Hepatitis B, hepatitis C and HIV can pass this way, even when no blood is visible." | Handling the vial |
| 2 | **How do I start?** / Wash your hands, clean a table, and lay out new equipment in sealed packs. | Lead (question "What do I do before I start?"): "Wash your hands, clean a table, and lay out new equipment in sealed packs." | Before you start |
| 3 | **How do I keep vials clean?** / Wipe the rubber top with alcohol, let it dry, then do not touch it. | Lead: "Wipe the rubber top, then do not touch it." Checklist: "**Wipe the rubber top** (the stopper) with a fresh alcohol swab. Let it dry in the air before the needle goes in." "**Do not touch the stopper** after you have wiped it." | Handling the vial |
| 4 | **When should I throw it away?** / When it looks wrong, was stored wrong, is too old, or may hold germs. | Lead (question "When should I throw a vial away?"): "When it looks wrong, was stored wrong, is too old, or may have germs in it." | When to throw a vial away |
| 5 | **What water can I mix with?** / Only water made for injection, from a sealed container. Never tap or bottled water. | "Only use water made for injection, from a sealed container. Never use tap water or bottled drinking water." | Bacteriostatic water and sterile water |
| 6 | **Is a dry powder sterile?** / Not by itself. Freeze-drying does not kill germs, and clean steps cannot remove germs already inside. | Lead: "Not by itself. Freeze-drying does not kill germs." "So sterile technique protects you from germs **you** might add. It cannot remove germs that were already in the product." | Why a powder is not proof of sterility |

## 6. safety/product-risk.mdx (111 words, 5 items)

| # | TL;DR (q / a) | Supporting sentence(s) on the page | Section |
|---|---|---|---|
| 1 | **Shaky or sweaty after injecting?** / Take sugar now if you can swallow safely. Drowsy or confused? Someone must call your local emergency number. | Callout title: "Shaky, sweaty or confused after an injection?" "If you can swallow safely, take something sugary now, such as fruit juice or glucose tablets." "If you become drowsy or confused, someone must call your local emergency number. Do not give food or drink to someone who cannot swallow safely." | Fake pens that held insulin (callout stop-now) |
| 2 | **Can a fake pen hold insulin?** / Yes, some fake pens and vials did. Insulin can make blood sugar drop far too low. | Lead: "Some fake pens and vials held insulin instead. Insulin can make your blood sugar drop far too low." | Fake pens that held insulin |
| 3 | **What else can be wrong inside?** / The wrong substance, the wrong amount, extra chemicals, germs or toxins. You usually cannot see them. | Lead: "Six things: the substance, the amount, extra chemicals, germs, toxins from germs, and clumps." "You usually cannot tell by sight, smell or touch whether a medicine will work or harm you." "Germs, toxins from germs and the wrong substance are invisible." | What can be wrong inside a vial; Warning signs in the product, the use and the seller; If you already have a product |
| 4 | **What does a lab report show?** / Even a full report covers only the sample tested. It cannot show that your vial is clean. | `<ProductCheck />` (lab report item): "Even a full report covers only the sample that was tested. It cannot show that your vial is clean, or how it was stored and shipped." Ladder: "Reports from accredited labs must say that their results relate only to the items tested. So a report covers one sample, not your vial." Lead: "A report shows what was in the sample tested." No seller or lab is named or recommended, and no checks for choosing one are given. | What a lab report can and cannot tell you (diagram lab-report-ladder); If you already have a product (`<ProductCheck />`) |
| 5 | **Can I get the amount wrong?** / Yes. People have mixed up the units on a syringe and injected far too much. | Lead: "Yes. People have mixed up the units on a syringe and injected far too much." | Mistakes with units and syringes |

## 7. safety/monitoring.mdx (119 words, 6 items)

| # | TL;DR (q / a) | Supporting sentence(s) on the page | Section |
|---|---|---|---|
| 1 | **Feel unwell between checks?** / See a doctor, whatever the plan. Do not wait for your next test. | "**When you feel unwell: see a doctor then**, whatever the plan. Do not wait for the next check." "If you notice one of these signs, do not wait for your next test." | Why and when to check (diagram baseline-then-compare); Between checks: warning signs |
| 2 | **Which blood tests matter?** / Kidney, blood sugar, IGF-1, liver, blood fat and blood count. Which ones depends on the product. | Lead (same question): "Kidney, blood sugar, IGF-1, liver, blood fat and blood count tests. Which ones depends on the product." | Blood tests: what each one shows |
| 3 | **When should I test first?** / Before you start. Your first result is what to compare later results with. | "**Before you start: a first test.** Doctors call it a baseline. Normal results differ from person to person, so your own first result is what to compare later results with." | Why and when to check |
| 4 | **What else is worth checking?** / Blood pressure, pulse, skin and moles, weight and strength, and a pregnancy test. | Lead (same question): "Your blood pressure and pulse, your skin and moles, your weight and strength, and whether you are pregnant." Table row: "Pregnancy test ¦ Anyone who could become pregnant ¦ …". | Checks without a needle |
| 5 | **Can tests show it is harmless?** / No. They can catch some harms early. They cannot show what is in a vial or predict cancer. | Lead (question "Can tests show that a product is harmless?"): "No. They can catch some harms early. They cannot show what is in a vial or predict cancer." | What checks cannot do |
| 6 | **How do I get checked?** / Ask your own doctor and say what you use. That stays private, with a few legal exceptions. | Lead: "Ask your own doctor. Say what you use, and ask which checks fit you." "What you tell your doctor is private. In the US, the UK, Canada and Australia, privacy rules protect it, with a few exceptions set by law." | Getting checks where you live |

## 8. safety/sharps-disposal.mdx (110 words, 5 items)

| # | TL;DR (q / a) | Supporting sentence(s) on the page | Section |
|---|---|---|---|
| 1 | **Pricked by someone else's needle?** / Let it bleed, but do not squeeze. Wash, cover, and go straight to a doctor or emergency department. | Callout "Pricked by a needle someone else used?": "**Let the wound bleed freely.** Do not squeeze or rub it." "**Wash it** with soap and plenty of water, for at least 30 seconds." "**Cover it** with a clean dressing or plaster." "**Go straight to a doctor or the nearest emergency department.** Do not wait until the next day." Lead: "Wash it, cover it, and see a doctor or go to an emergency department straight away." | After a needle-stick injury |
| 2 | **How fast must I act?** / Medicine that prevents HIV must start within 72 hours. The sooner, the better. | Callout: "Medicine that prevents HIV must start within 72 hours. The sooner, the better." | After a needle-stick injury |
| 3 | **Pricked by your own needle?** / If only you used it, you cannot catch a virus. Clean it. Watch for spreading redness or pus. | "If only you used the needle, you cannot catch a virus from your own blood. Clean the wound and watch for signs of infection, such as spreading redness or pus." | After a needle-stick injury |
| 4 | **Can needles go in the bin?** / Not loose. Put them straight into a hard sharps container. Never in the recycling or the toilet. | Lead (question "Can I put a used needle in the bin?"): "Not loose. A used needle goes into a sharps container first, never into the recycling or the toilet." Lead: "A sharps container: a hard box that needles cannot pierce, with a lid that closes tightly." Checklist: "Put the needle and syringe in straight after use." | Never loose in a bin, the recycling or the toilet; A sharps container, and how to use it |
| 5 | **Where does a full container go?** / It depends on your country, and often your town. Ask your pharmacy, or check your local rules. | Lead (same question): "It depends on your country, and often on your town. Ask your pharmacy, or check your local rules." | Where a full container goes |
