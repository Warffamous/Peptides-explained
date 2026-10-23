/**
 * Pictogram vocabulary (Isotype logic, after Otto Neurath and Gerd Arntz: one symbol, one
 * meaning, in every language), used in the At a glance cards, the stop strip and the status badge. Flat filled figures on a 48×48 grid,
 * drawn in currentColor; cut-outs use --pg-cut (the surface colour behind the symbol).
 *
 * Rules: the same idea always uses the same figure (a person is always this person; a group of
 * people is always three of them; "authorised" is always the shield-with-check). Pictograms never
 * carry meaning alone — every use sits next to a text label.
 */
const CUT = 'style="fill:var(--pg-cut,#fff);stroke:var(--pg-cut,#fff)"';
const CUT_STROKE = (w = 4) => `style="fill:none;stroke:var(--pg-cut,#fff);stroke-width:${w};stroke-linecap:round;stroke-linejoin:round"`;
const STROKE = (w = 4) => `style="fill:none;stroke:currentColor;stroke-width:${w};stroke-linecap:round;stroke-linejoin:round"`;

/** The Isotype person (head, shoulders, legs), drawn once at cx=24, top=3 and placed by transform. */
const PERSON = '<circle cx="24" cy="8" r="5"/><path d="M16.5 17 q0 -2 2 -2 h11 q2 0 2 2 v11 h-3 v15 h-3.5 v-10 h-2 v10 h-3.5 v-15 h-3 z"/>';
function person(cx = 24, top = 3, s = 1): string {
  return s === 1 && cx === 24 && top === 3 ? PERSON : `<g transform="translate(${(cx - 24 * s).toFixed(2)} ${(top - 3 * s).toFixed(2)}) scale(${s})">${PERSON}</g>`;
}
const people3 = () => person(10, 10, 0.62) + person(38, 10, 0.62) + person(24, 4, 0.72);
const shield = (o = '') => `<path ${o} d="M24 3 L41 9 V22 C41 33 33 41 24 45 C15 41 7 33 7 22 V9 Z"/>`;
const check = (o = CUT_STROKE(4.5)) => `<path ${o} d="M15 24 l6 6 l12 -13"/>`;
const circle = (o = '') => `<circle ${o} cx="24" cy="24" r="20"/>`;
const mouse = () => `<ellipse cx="21" cy="30" rx="14" ry="9"/><circle cx="34" cy="23" r="6.5"/><circle cx="32.5" cy="15.5" r="4.5"/><circle cx="36.5" cy="22" r="1.4" ${CUT}/><path ${STROKE(2.5)} d="M7.5 32 q-5 5 -2 11"/>`;
const tube = () => `<path d="M17 4 h14 v4 h-2.5 v25 a4.5 4.5 0 0 1 -9 0 v-25 h-2.5 z"/><rect x="21.5" y="20" width="5" height="3" ${CUT}/>`;
const question = () => `<path ${STROKE(5.5)} d="M16 16 a8.5 8.5 0 1 1 12 7.5 c-3 1.6 -4 3 -4 7.5"/><circle cx="24" cy="40.5" r="3.4"/>`;
const heart = () => `<path d="M24 42 C10 32 5 25 5 17 a9.5 9.5 0 0 1 19 -3 a9.5 9.5 0 0 1 19 3 c0 8 -5 15 -19 25 z"/>`;
const stomach = () => `<path d="M20 4 h6 v8 c8 0 16 6 16 16 c0 10 -8 16 -18 16 c-7 0 -12 -4 -12 -10 c0 -4 3 -7 7 -7 c3 0 5 -2 5 -5 v-10 h-4 z"/>`;
const brain = () => `<path d="M24 8 c-4 -4 -12 -3 -13 3 c-6 1 -8 8 -5 12 c-3 5 0 11 6 12 c1 5 8 7 12 3 c4 4 11 2 12 -3 c6 -1 9 -7 6 -12 c3 -4 1 -11 -5 -12 c-1 -6 -9 -7 -13 -3 z"/><path ${CUT_STROKE(2.5)} d="M24 9 v30 M16 16 q4 3 8 1 M32 16 q-4 3 -8 1 M15 28 q5 -2 9 2 M33 28 q-5 -2 -9 2"/>`;
const sun = () => `<circle cx="24" cy="24" r="9"/><path ${STROKE(4)} d="M24 4 v6 M24 38 v6 M4 24 h6 M38 24 h6 M9.9 9.9 l4.2 4.2 M33.9 33.9 l4.2 4.2 M9.9 38.1 l4.2 -4.2 M33.9 14.1 l4.2 -4.2"/>`;
const plaster = () => `<rect x="4" y="16" width="40" height="16" rx="8" transform="rotate(-35 24 24)"/><rect x="17" y="18" width="14" height="12" rx="2" transform="rotate(-35 24 24)" ${CUT}/>`;
const mito = () => `<rect x="4" y="12" width="40" height="24" rx="12"/><path ${CUT_STROKE(3)} d="M10 24 q3 -8 6 0 t6 0 t6 0 t6 0 t4 0"/>`;
const flame = () => `<path d="M24 3 c3 9 14 13 14 26 a14 14 0 0 1 -28 0 c0 -7 4 -11 7 -14 c0 5 2 8 5 9 c-2 -8 0 -15 2 -21 z"/>`;
const hourglass = () => `<path d="M10 4 h28 v4 h-3 c0 8 -6 12 -9 16 c3 4 9 8 9 16 h3 v4 h-28 v-4 h3 c0 -8 6 -12 9 -16 c-3 -4 -9 -8 -9 -16 h-3 z"/><path ${CUT} d="M18 40 c0 -5 4 -8 6 -10 c2 2 6 5 6 10 z"/>`;
const hexagon = (o = '') => `<path ${o} d="M24 4 L41.3 14 V34 L24 44 L6.7 34 V14 Z"/>`;
const drop = () => `<path d="M24 4 C24 4 38 20 38 30 a14 14 0 0 1 -28 0 C10 20 24 4 24 4 z"/>`;
const skin = () => `<rect x="4" y="8" width="40" height="8" rx="2"/><rect x="4" y="19" width="40" height="8" rx="2" opacity="0.7"/><rect x="4" y="30" width="40" height="10" rx="2" opacity="0.45"/>`;
const bone = () => `<path d="M14 6 a5 5 0 0 1 4 8 l16 16 a5 5 0 1 1 4 8 a5 5 0 1 1 -8 4 l-16 -16 a5 5 0 1 1 -4 -8 a5 5 0 1 1 4 -12 z"/>`;
const kidney = () => `<path d="M30 6 c9 0 14 8 14 18 s-5 18 -14 18 c-6 0 -9 -4 -9 -8 c0 -4 3 -6 3 -10 s-3 -6 -3 -10 c0 -4 3 -8 9 -8 z M18 10 c-8 2 -14 8 -14 14 s6 12 14 14 c-3 -4 -4 -9 -4 -14 s1 -10 4 -14 z"/>`;
const cell = () => `<circle cx="24" cy="24" r="20"/><circle cx="21" cy="21" r="7" ${CUT}/><circle cx="33" cy="31" r="2" ${CUT}/><circle cx="14" cy="33" r="1.6" ${CUT}/>`;
const gland = () => `<path d="M24 4 c10 6 16 14 16 22 a16 16 0 0 1 -32 0 c0 -8 6 -16 16 -22 z"/><path ${CUT_STROKE(3)} d="M24 22 v10 M19 27 h10"/>`;
const rings = () => `<circle ${STROKE(4.5)} cx="18" cy="24" r="11"/><circle ${STROKE(4.5)} cx="30" cy="24" r="11"/>`;
const bacterium = () => `<ellipse cx="24" cy="24" rx="15" ry="10" transform="rotate(-30 24 24)"/><path ${STROKE(3)} d="M8 14 l-4 -3 M14 8 l-2 -4 M40 34 l4 3 M34 40 l2 4 M36 12 l4 -4 M12 36 l-4 4"/>`;
const vialDots = () => `<path d="M18 4 h12 v6 h-1 v4 c4 2 6 5 6 9 v17 a4 4 0 0 1 -4 4 h-14 a4 4 0 0 1 -4 -4 v-17 c0 -4 2 -7 6 -9 v-4 h-1 z"/><circle cx="20" cy="28" r="2.4" ${CUT}/><circle cx="27" cy="33" r="2.4" ${CUT}/><circle cx="25" cy="24" r="1.8" ${CUT}/><circle cx="19" cy="37" r="1.8" ${CUT}/>`;
const syringe = () => `<g transform="rotate(-45 24 24)"><rect x="17" y="6" width="14" height="26" rx="2"/><rect x="21" y="2" width="6" height="4"/><rect x="14" y="2" width="20" height="3" rx="1.5"/><path d="M22.5 32 h3 v8 l-1.5 6 l-1.5 -6 z"/><path ${CUT_STROKE(2)} d="M20 14 h4 M20 20 h4 M20 26 h4"/></g>`;
const pills = () => `<rect x="4" y="14" width="26" height="12" rx="6" transform="rotate(-30 17 20)"/><rect x="18" y="22" width="26" height="12" rx="6" transform="rotate(30 31 28)" opacity="0.65"/>`;
const clipboard = () => `<rect x="9" y="7" width="30" height="38" rx="3"/><rect x="17" y="3" width="14" height="8" rx="2"/><path ${CUT_STROKE(3)} d="M15 20 h18 M15 28 h18 M15 36 h11"/>`;
const flask = () => `<path d="M18 4 h12 v4 h-2 v10 l12 20 a4 4 0 0 1 -3.5 6 h-25 a4 4 0 0 1 -3.5 -6 l12 -20 v-10 h-2 z"/><path ${CUT} d="M14 34 h20 l2.5 4.5 a1.5 1.5 0 0 1 -1.3 2.2 h-22.4 a1.5 1.5 0 0 1 -1.3 -2.2 z" opacity="0.55"/>`;
const magnifier = () => `<circle ${STROKE(5)} cx="20" cy="20" r="12"/><path ${STROKE(6)} d="M29 29 l12 12"/>`;
const slashCircle = () => `<circle ${STROKE(5)} cx="24" cy="24" r="18"/><path ${STROKE(5)} d="M11 37 L37 11"/>`;
const xCircle = () => `${circle()}<path ${CUT_STROKE(5)} d="M16 16 l16 16 M32 16 l-16 16"/>`;
const backArrow = () => `${circle()}<path ${CUT_STROKE(4.5)} d="M30 32 a9 9 0 1 0 -12 -12 M18 12 v8 h8"/>`;
const runner = () => `<circle cx="30" cy="8" r="5"/><path d="M27 15 l-9 4 l-5 9 l4 2 l4 -7 l4 -1 l-4 10 l-9 7 l3 4 l10 -8 l3 -5 l5 6 v10 h5 v-12 l-6 -8 l3 -8 l4 4 h7 v-4 h-5 l-6 -7 z"/>`;
const hand = () => `<path d="M14 22 v-10 a3 3 0 0 1 6 0 v8 v-13 a3 3 0 0 1 6 0 v13 v-11 a3 3 0 0 1 6 0 v12 v-7 a3 3 0 0 1 6 0 v16 c0 9 -6 15 -14 15 c-6 0 -9 -3 -12 -8 l-6 -9 a3 3 0 0 1 5 -3 z"/>`;
const phone = () => `<path d="M12 4 l7 1 l3 9 l-5 4 c2 5 6 9 11 11 l4 -5 l9 3 l1 7 c-1 5 -4 7 -8 7 c-17 -1 -30 -14 -31 -31 c0 -4 3 -7 9 -6 z"/>`;
const clock = () => `${circle()}<path ${CUT_STROKE(4)} d="M24 12 v12 l8 6"/>`;
const octagon = () => `<path d="M16 4 h16 l12 12 v16 l-12 12 h-16 l-12 -12 v-16 z"/><path ${CUT} d="M22 12 h4 v16 h-4 z M22 32 h4 v4 h-4 z"/>`;
const triangle = () => `<path d="M24 4 L45 42 H3 Z"/><path ${CUT} d="M22 16 h4 v14 h-4 z M22 33 h4 v4 h-4 z"/>`;
const info = () => `${circle()}<rect x="21.5" y="20" width="5" height="16" ${CUT}/><circle cx="24" cy="14" r="3" ${CUT}/>`;
const bulb = () => `<path d="M24 3 a14 14 0 0 1 8 25 v5 h-16 v-5 a14 14 0 0 1 8 -25 z"/><rect x="17" y="36" width="14" height="3.5" rx="1.5"/><rect x="19" y="41.5" width="10" height="3.5" rx="1.5"/>`;
const scales = () => `<path ${STROKE(3.5)} d="M24 6 v34 M10 12 h28 M16 44 h16"/><path d="M10 12 l-7 14 a7 4 0 0 0 14 0 z M38 12 l-7 14 a7 4 0 0 0 14 0 z"/>`;
const papers = () => `<rect x="12" y="4" width="26" height="32" rx="2" opacity="0.45"/><rect x="8" y="8" width="26" height="32" rx="2" opacity="0.7"/><rect x="4" y="12" width="26" height="32" rx="2"/><path ${CUT_STROKE(2.5)} d="M9 22 h16 M9 29 h16 M9 36 h10"/>`;
const separate3 = () => `<circle cx="10" cy="24" r="7"/><circle cx="24" cy="24" r="7"/><circle cx="38" cy="24" r="7"/><path ${STROKE(2)} d="M17 24 h0 M31 24 h0"/>`;
const tumour = () => `<circle cx="18" cy="20" r="9"/><circle cx="30" cy="18" r="7"/><circle cx="28" cy="31" r="10"/><circle cx="15" cy="33" r="6"/><circle cx="26" cy="27" r="3" ${CUT}/>`;
const swelling = () => `${drop()}<path ${CUT} d="M22 20 h4 v12 h-4 z M22 35 h4 v4 h-4 z"/>`;
const hormonal = () => `${gland()}<path ${STROKE(3)} d="M4 10 l5 5 M44 10 l-5 5"/>`;
const antibody = () => `<path ${STROKE(5)} d="M24 44 V26 M24 26 L12 12 M24 26 L36 12"/><path ${STROKE(5)} d="M8 16 L14 8 M40 16 L34 8"/>`;
const growth = () => `<rect x="5" y="30" width="9" height="14" rx="1"/><rect x="19" y="21" width="9" height="23" rx="1"/><rect x="33" y="12" width="9" height="32" rx="1"/><path ${STROKE(3.5)} d="M6 20 L20 10 L26 13 L38 4 M31 4 h7 v7"/>`;
const harmsLens = () => `<path d="M20 6 L36 34 H4 Z"/><path ${CUT} d="M18.5 15 h3 v10 h-3 z M18.5 27.5 h3 v3 h-3 z"/><circle ${STROKE(4)} cx="34" cy="32" r="8"/><path ${STROKE(5)} d="M40 38 l5 5"/>`;
const pulseHeart = () => `${heart()}<path ${CUT_STROKE(3)} d="M10 22 h8 l3 -6 l4 12 l3 -6 h10"/>`;
/* Beginner layer. "Tested in people" counts people (Isotype: quantity by repetition, never colour):
   none = the person struck through; one person; two; three; a crowd of six. */
const personStruck = () => `${person()}<path ${CUT_STROKE(9)} d="M7 43 L41 5"/><path ${STROKE(4)} d="M7 43 L41 5"/>`;
const people2 = () => person(13, 6, 0.9) + person(35, 6, 0.9);
const crowd = () => [9, 24, 39].map((x) => person(x, 3, 0.5) + person(x, 25, 0.5)).join('');
/** "In plain words": a speech bubble with two lines of text. */
const speech = () => `<path d="M7 6 h34 a4 4 0 0 1 4 4 v20 a4 4 0 0 1 -4 4 h-19 l-10 9 v-9 h-5 a4 4 0 0 1 -4 -4 v-20 a4 4 0 0 1 4 -4 z"/><path ${CUT_STROKE(3.5)} d="M13 16 h22 M13 24 h14"/>`;
/** Reading time: an open book. */
const book = () => `<path d="M3 11 c7 -4 14 -3 19 1 v29 c-5 -4 -12 -5 -19 -2 z"/><path d="M45 11 c-7 -4 -14 -3 -19 1 v29 c5 -4 12 -5 19 -2 z"/>`;
/* Stop-now signs (what the person notices). Drawn small and plain: the word beside it carries the meaning. */
/** Severe belly pain: the stomach with three short pain rays. */
const signBellyPain = () => `<g transform="translate(1 6) scale(0.78)">${stomach()}</g><path ${STROKE(3.5)} d="M37 12 l7 -4 M39 24 h8 M37 36 l7 4"/>`;
/** Low blood sugar: a sugar cube and a falling arrow. */
const signLowSugar = () => `<path d="M4 19 l12 -7 l12 7 v15 l-12 7 l-12 -7 z"/><path ${CUT_STROKE(2.5)} d="M4 19 l12 7 l12 -7 M16 26 v15"/><path ${STROKE(4.5)} d="M39 6 v32 M32 30 l7 8 l7 -8"/>`;
/** Swelling of the face or throat, trouble breathing: head and shoulders, swelling marks at the throat, breath lines. */
const signAllergic = () => `<circle cx="20" cy="13" r="9"/><path d="M4 46 c0 -10 6 -15 16 -15 s16 5 16 15 z"/><path d="M15 21 h10 v9 h-10 z"/><path ${STROKE(3)} d="M10 26 q-4 -1 -5 -5 M30 26 q4 -1 5 -5"/><path ${STROKE(3)} d="M33 11 q4 -3 8 0 t8 0 M33 18 q4 -3 8 0 t8 0"/>`;
/** Infected injection site or fever: a swollen bump on the skin line with heat waves rising from it. */
const signInfection = () => `<path d="M2 40 h12 c2 -14 18 -14 20 0 h12 v6 h-44 z"/><path ${STROKE(3)} d="M16 22 q-3 -4 0 -8 t0 -8 M24 20 q-3 -4 0 -8 t0 -8 M32 22 q-3 -4 0 -8 t0 -8"/>`;
/** Unexplained bleeding: a single drop. */
const signBleeding = () => `<g transform="translate(4 2) scale(0.85)">${drop()}</g>`;
/** Chest pain or a racing, uneven heartbeat: a heart with a pulse line. */
const signHeart = () => pulseHeart();
/** A new or changing mole: an uneven dark spot with a dashed ring around it. */
const signMole = () => `<path d="M24 13 c7 0 11 4 10 10 c-1 5 2 9 -3 12 c-5 3 -9 -1 -13 0 c-5 1 -8 -4 -7 -9 c1 -6 6 -13 13 -13 z"/><circle ${STROKE(2.5)} stroke-dasharray="4 4" cx="24" cy="24" r="21"/>`;
/** Fever or chills: a thermometer. */
const signFever = () => `<path d="M20 6 a4 4 0 0 1 8 0 v24 a9 9 0 1 1 -8 0 z"/><path ${CUT_STROKE(3)} d="M24 10 v22"/><path ${STROKE(3)} d="M34 10 h6 M34 17 h4 M34 24 h6"/>`;
/** Something that lasts too long (e.g. an erection over 3 hours): a clock. */
const signClock = () => `<circle ${STROKE(4)} cx="24" cy="24" r="19"/><path ${STROKE(4)} d="M24 12 v12 l8 6"/>`;
/** Sudden loss of vision: an eye with a slash. */
const signVision = () => `<path d="M2 24 C10 12 38 12 46 24 C38 36 10 36 2 24 z"/><circle cx="24" cy="24" r="7" ${CUT}/><circle cx="24" cy="24" r="3.5"/><path ${CUT_STROKE(7)} d="M8 42 L40 6"/><path ${STROKE(3.5)} d="M8 42 L40 6"/>`;
/* "Check before you use it" (<ProductCheck />): what the reader checks on the product they have. A plain
   vial (no dots: the dotted vial means "contamination"), a small badge for the thing checked. */
const vialPlain = () => `<path d="M18 4 h12 v6 h-1 v4 c4 2 6 5 6 9 v17 a4 4 0 0 1 -4 4 h-14 a4 4 0 0 1 -4 -4 v-17 c0 -4 2 -7 6 -9 v-4 h-1 z"/>`;
const badgeCheck = () => `<circle cx="37" cy="37" r="10"/><path ${CUT_STROKE(3)} d="M32 37 l3.5 3.5 l6.5 -7"/>`;
/** The seal is whole: a vial with its cap band cut out, and a check badge. */
const checkSeal = () => `${vialPlain()}<rect x="17" y="9" width="14" height="3" ${CUT}/>${badgeCheck()}`;
/** The label: a vial with a label band and two lines of text. */
const checkLabel = () => `${vialPlain()}<rect x="14" y="24" width="20" height="14" rx="1.5" ${CUT}/><path ${STROKE(2.5)} d="M17 29 h14 M17 34 h9"/>`;
/** How it looks: an open eye (the same eye as the vision sign, without the slash). */
const checkLook = () => `<path d="M2 24 C10 12 38 12 46 24 C38 36 10 36 2 24 z"/><circle cx="24" cy="24" r="7" ${CUT}/><circle cx="24" cy="24" r="3.5"/>`;
/** The lab report: a page with lines and a round stamp. */
const checkCertificate = () => `<path d="M8 3 h22 l10 10 v32 h-32 z"/><path ${CUT} d="M30 3 v10 h10 z" opacity="0.5"/><path ${CUT_STROKE(2.5)} d="M13 17 h14 M13 23 h20 M13 29 h12"/><circle cx="31" cy="36" r="6" ${CUT}/><circle cx="31" cy="36" r="3"/>`;
/** Kept cold: a snowflake. */
const checkCold = () => `<path ${STROKE(4)} d="M24 4 v40 M6.7 14 l34.6 20 M6.7 34 l34.6 -20"/><path ${STROKE(3)} d="M18 7 l6 5 l6 -5 M18 41 l6 -5 l6 5 M6 21 l7 3 l-1 -8 M42 27 l-7 -3 l1 8 M6 27 l7 -3 l-1 8 M42 21 l-7 3 l1 -8"/>`;
/** A new sterile needle and syringe every time: the syringe with a check badge. */
const checkNewNeedle = () => `<g transform="translate(-3 -3) scale(0.9)">${syringe()}</g>${badgeCheck()}`;
/** Keep the vial and its papers: a box with a lid. */
const checkKeep = () => `<path d="M4 16 h40 v6 h-40 z"/><path d="M7 25 h34 v18 a2 2 0 0 1 -2 2 h-30 a2 2 0 0 1 -2 -2 z"/><rect x="18" y="29" width="12" height="4" rx="2" ${CUT}/><path ${STROKE(3)} d="M16 12 l8 -8 l8 8"/>`;
/** Tell a doctor: a person and a speech bubble. */
const checkDoctor = () => `${person(16, 8, 0.85)}<path d="M28 3 h16 a3 3 0 0 1 3 3 v10 a3 3 0 0 1 -3 3 h-9 l-5 5 v-5 h-2 a3 3 0 0 1 -3 -3 v-10 a3 3 0 0 1 3 -3 z"/><path ${CUT_STROKE(2.2)} d="M31 9 h10 M31 13.5 h6"/>`;

export const PICTOGRAMS: Record<string, string> = {
  'level-hypothesis': question(),
  'level-in-vitro': tube(),
  'level-animal': mouse(),
  'level-human-limited': person(),
  'level-human-controlled': people3(),
  'level-established': shield() + check(),
  'mech-hypothesis': question(),
  'mech-in-vitro': tube(),
  'mech-animal': mouse(),
  'mech-human': person(),
  'class-incretin': stomach(),
  'class-gh-axis': growth(),
  'class-melanocortin': sun(),
  'class-tissue-repair': plaster(),
  'class-immunomodulatory': antibody(),
  'class-mitochondrial': mito(),
  'class-neuroactive': brain(),
  'class-dermal': skin(),
  'class-metabolic': flame(),
  'class-longevity-claimed': hourglass(),
  'class-non-peptide': hexagon() + hexagon(`transform="translate(12 12) scale(0.5)" ${CUT}`),
  'status-authorised': shield() + check(),
  'status-authorised-elsewhere': `${shield()}${check()}<circle cx="39" cy="39" r="8"/><path ${CUT_STROKE(2)} d="M31 39 h16 M39 31 c-3 3 -3 13 0 16 c3 -3 3 -13 0 -16"/>`,
  /* Authorised, but only by some countries' own regulators: the shield-with-check with a map pin. */
  'status-authorised-nationally': `${shield()}${check()}<circle cx="39" cy="39" r="8"/><path ${CUT} d="M39 32.5 a4.5 4.5 0 0 1 4.5 4.5 c0 3.2 -4.5 8.5 -4.5 8.5 s-4.5 -5.3 -4.5 -8.5 a4.5 4.5 0 0 1 4.5 -4.5 z"/><circle cx="39" cy="37" r="1.6"/>`,
  'status-investigational': clipboard(),
  'status-experimental': flask(),
  'status-not-a-peptide': hexagon() + hexagon(`transform="translate(12 12) scale(0.5)" ${CUT}`),
  'reg-authorised': shield() + check(),
  'reg-not-authorised': slashCircle(),
  'reg-refused': xCircle(),
  'reg-withdrawn': backArrow(),
  'reg-under-review': magnifier(),
  'reg-investigational': clipboard(),
  'reg-prohibited': `${runner()}<path ${STROKE(4)} d="M6 42 L42 6"/>`,
  'reg-not-listed': runner(),
  'body-metabolic': flame(),
  'body-cardiovascular': heart(),
  'body-gastrointestinal': stomach(),
  'body-musculoskeletal': bone(),
  'body-nervous': brain(),
  'body-endocrine': gland(),
  'body-immune': antibody(),
  'body-skin': skin(),
  'body-sexual': rings(),
  'body-renal': kidney(),
  'body-cellular': cell(),
  'risk-infection': bacterium(),
  'risk-contamination': vialDots(),
  'risk-dosing-error': `${syringe()}<path ${STROKE(3)} d="M36 34 a4 4 0 1 1 5 4 v2 M41 45 v0.5"/>`,
  'risk-interaction': pills(),
  'risk-unknown-long-term': `${hourglass()}<circle cx="38" cy="38" r="9"/><path ${CUT_STROKE(2.6)} d="M35 35.5 a3 3 0 1 1 3.8 2.9 v1.6"/><circle cx="38.8" cy="43" r="1.2" ${CUT}/>`,
  'risk-hormonal': hormonal(),
  'risk-cardiovascular': pulseHeart(),
  'risk-cancer-theory': tumour(),
  'risk-injection-site': syringe(),
  'risk-allergic': swelling(),
  'action-emergency': phone(),
  'action-urgent': clock(),
  'action-stop': hand(),
  'callout-note': info(),
  'callout-tip': bulb(),
  'callout-warning': triangle(),
  'callout-stop': octagon(),
  'callout-legal': scales(),
  'callout-uncertain': question(),
  'axis-human_clinical': person(),
  'axis-preclinical_volume': papers(),
  'axis-independence': separate3(),
  'axis-safety': harmsLens(),
  // beginner layer: "Has it been tested in people?" keyed by evidence.human_clinical
  'tested-none': personStruck(),
  'tested-case-reports': person(),
  'tested-phase-1': people2(),
  'tested-phase-2': people3(),
  'tested-phase-3': crowd(),
  'tested-authorised': crowd(),
  // beginner layer: the summary box ("in plain words") and its reading time
  'summary-plain': speech(),
  'summary-reading-time': book(),
  // "Stop and get help" strip (glance.stop_signs in the compound frontmatter): what the person notices.
  'sign-belly-pain': signBellyPain(),
  'sign-low-sugar': signLowSugar(),
  'sign-allergic': signAllergic(),
  'sign-vision': signVision(),
  'sign-infection': signInfection(),
  'sign-bleeding': signBleeding(),
  'sign-heart': signHeart(),
  'sign-mole': signMole(),
  'sign-clock': signClock(),
  'sign-fever': signFever(),
  // "Check before you use it" (<ProductCheck />, src/data/product-check.yaml); the stop item reuses action-stop.
  'check-seal': checkSeal(),
  'check-label': checkLabel(),
  'check-look': checkLook(),
  'check-certificate': checkCertificate(),
  'check-cold': checkCold(),
  'check-new-needle': checkNewNeedle(),
  'check-keep': checkKeep(),
  'check-doctor': checkDoctor(),
};

export const PICTOGRAM_NAMES = Object.keys(PICTOGRAMS) as readonly string[];
export type PictogramName = keyof typeof PICTOGRAMS;
