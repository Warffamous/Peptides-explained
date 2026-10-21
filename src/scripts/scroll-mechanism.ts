/**
 * Advances the mechanism stage as the reader scrolls the step list (the reader's own scrolling
 * paces it; nothing moves by itself). Active only when motion is allowed; otherwise the stage stays a
 * complete static still (every step marked, the "all steps" line under it), so no information
 * depends on this script.
 *
 * Wide layouts: the stage sits beside the list and the step in the middle band of the viewport is
 * current. Narrow layouts: the stage is pinned at the top, so the trigger band starts just below it
 * and the current card is always the one fully visible under the stage, never one hidden behind it.
 * The stage's "now" line says in words which step it shows; the current card gets aria-current.
 * Short viewports in the one-column layout (landscape phones, 200% zoom) keep the complete still:
 * a pinned stage would cover most of the screen and leave no room for the cards.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const short = window.matchMedia('(max-height: 37.49rem)');
let cleanups: (() => void)[] = [];

function teardown() {
  cleanups.forEach((fn) => fn());
  cleanups = [];
  document.querySelectorAll('.mechanism.is-live, .mechanism-stage.is-live').forEach((el) => el.classList.remove('is-live'));
  document.querySelectorAll('.mechanism__step[aria-current]').forEach((el) => el.removeAttribute('aria-current'));
  document.querySelectorAll<HTMLElement>('.mechanism-stage[data-all]').forEach((stage) => {
    const now = stage.querySelector('.stage-now');
    if (now) now.textContent = stage.dataset.all ?? '';
  });
}

function setup() {
  teardown();
  if (reduce.matches) return;
  for (const fig of document.querySelectorAll<HTMLElement>('.mechanism')) {
    const stage = fig.querySelector<HTMLElement>('.mechanism-stage');
    const wrap = fig.querySelector<HTMLElement>('.mechanism__stage-wrap');
    const body = fig.querySelector<HTMLElement>('.mechanism__body');
    const steps = [...fig.querySelectorAll<HTMLElement>('.mechanism__step')];
    if (!stage || !wrap || !body || !steps.length) continue;
    const oneColumn = getComputedStyle(body).gridTemplateColumns.trim().split(/\s+/).length < 2;
    if (oneColumn && short.matches) continue;
    const parts = [...stage.querySelectorAll<HTMLElement | SVGElement>('[data-step]')];
    const labels = [...stage.querySelectorAll<HTMLElement | SVGElement>('[data-zone]')];
    const now = stage.querySelector('.stage-now');
    let texts: string[] = [];
    try { texts = JSON.parse(stage.dataset.now ?? '[]'); } catch { /* keep the still's line */ }
    let current = -1;
    const apply = (i: number) => {
      if (i === current) return;
      current = i;
      stage.dataset.current = String(i);
      for (const p of parts) {
        const n = Number(p.dataset.step);
        p.classList.toggle('is-on', n <= i);
        p.classList.toggle('is-current', n === i);
      }
      steps.forEach((s, n) => {
        s.classList.toggle('is-current', n === i);
        if (n === i) s.setAttribute('aria-current', 'step');
        else s.removeAttribute('aria-current');
      });
      const kind = steps[i]?.dataset.kind;
      for (const z of labels) z.classList.toggle('is-active', z.dataset.zone === kind);
      if (now && texts[i]) now.textContent = texts[i];
    };
    fig.classList.add('is-live');
    stage.classList.add('is-live');
    // A pinned stage taller than 60% of the screen (a long key, a long translation, large text)
    // would leave too little room for the cards: keep the complete still instead.
    if (oneColumn && wrap.getBoundingClientRect().height > window.innerHeight * 0.6) {
      fig.classList.remove('is-live');
      stage.classList.remove('is-live');
      continue;
    }
    apply(0);

    let io: IntersectionObserver | null = null;
    const observe = () => {
      io?.disconnect();
      // One column: the stage is pinned on top; watch the band just below it.
      const narrow = getComputedStyle(body).gridTemplateColumns.trim().split(/\s+/).length < 2;
      const vh = window.innerHeight;
      let margin = '-42% 0px -42% 0px';
      if (narrow) {
        const top = Math.min(wrap.getBoundingClientRect().height, vh * 0.7);
        const band = Math.max(48, (vh - top) * 0.3);
        margin = `-${Math.round(top + 8)}px 0px -${Math.max(0, Math.round(vh - top - 8 - band))}px 0px`;
      }
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) if (e.isIntersecting) apply(Number((e.target as HTMLElement).dataset.step));
        },
        { rootMargin: margin },
      );
      steps.forEach((s) => io!.observe(s));
    };
    observe();
    let raf = 0;
    const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(observe); });
    ro.observe(wrap);
    ro.observe(body);
    cleanups.push(() => { ro.disconnect(); io?.disconnect(); cancelAnimationFrame(raf); });
  }
}

setup();
reduce.addEventListener('change', setup);
short.addEventListener('change', setup);
