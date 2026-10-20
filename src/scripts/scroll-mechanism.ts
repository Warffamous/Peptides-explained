/**
 * Design B: advances the mechanism stage as the reader scrolls the step list.
 * Active only when design B is showing and motion is allowed; otherwise the stage stays a
 * complete static still (every step marked), so no information depends on this script.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
let observers: IntersectionObserver[] = [];

function teardown() {
  observers.forEach((o) => o.disconnect());
  observers = [];
  document.querySelectorAll('.mechanism.is-live, .mechanism-stage.is-live').forEach((el) => el.classList.remove('is-live'));
}

function setup() {
  teardown();
  if (document.documentElement.dataset.theme !== 'b' || reduce.matches) return;
  for (const fig of document.querySelectorAll<HTMLElement>('.mechanism')) {
    const stage = fig.querySelector<HTMLElement>('.mechanism-stage');
    const steps = [...fig.querySelectorAll<HTMLElement>('.mechanism__step')];
    if (!stage || !steps.length) continue;
    const parts = [...stage.querySelectorAll<SVGElement>('[data-step]')];
    const apply = (current: number) => {
      stage.dataset.current = String(current);
      for (const p of parts) {
        const i = Number(p.dataset.step);
        p.classList.toggle('is-on', i <= current);
        p.classList.toggle('is-current', i === current);
      }
      steps.forEach((s, i) => s.classList.toggle('is-current', i === current));
      const kind = steps[current]?.dataset.kind;
      stage.querySelectorAll<SVGElement>('.stage__zone').forEach((z) => z.classList.toggle('is-active', z.dataset.zone === kind));
    };
    fig.classList.add('is-live');
    stage.classList.add('is-live');
    apply(0);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) apply(Number((e.target as HTMLElement).dataset.step));
      },
      { rootMargin: '-42% 0px -42% 0px' },
    );
    steps.forEach((s) => io.observe(s));
    observers.push(io);
  }
}

setup();
document.addEventListener('pe:themechange', setup);
reduce.addEventListener('change', setup);
