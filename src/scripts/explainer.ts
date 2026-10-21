/**
 * Playback for <Explainer> figures (docs/EXPLAINERS.md §3.4). The timeline itself is pure CSS: every
 * part is delayed by its step, so artwork and captions stay in sync without script. This only
 * starts, pauses, resumes and ends it. Nothing ever plays by itself:
 *  - at rest the figure shows the final frame (the same frame as without JavaScript) and one
 *    button, "Play the n-second animation";
 *  - while playing the button says Pause, when paused Continue, and after the single run the
 *    figure rests on the final frame again and the button says Replay (WCAG 2.2.2);
 *  - only while a run is under way: scrolling the drawing out of view pauses it, scrolling back
 *    resumes it;
 *  - with reduced motion nothing plays and the button stays hidden (CSS); a note says why.
 */
type State = 'idle' | 'playing' | 'paused' | 'ended';
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const teardowns: (() => void)[] = [];

function init(fig: HTMLElement) {
  const toggle = fig.querySelector<HTMLButtonElement>('[data-xp-toggle]');
  const clock = fig.querySelector<HTMLElement>('.xp-clock');
  const stage = fig.querySelector<HTMLElement>('.xp-stage');
  const visual = fig.querySelector<HTMLElement>('.xp-visual');
  if (!toggle || !clock || !stage) return;
  const cls = fig.classList;
  let state: State = 'idle';
  let autoPaused = false;
  let io: IntersectionObserver | null = null;

  const set = (s: State) => {
    state = s;
    toggle.dataset.state = s;
    cls.toggle('is-paused', s === 'paused');
  };
  // Watched only during a run. The observer's first report is where the drawing is now (the reader
  // may have pressed Play with it half off screen), so only a later scroll away pauses.
  const watch = (on: boolean) => {
    if (on && !io) {
      let first = true;
      io = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting) {
            if (!first && state === 'playing') pause(true);
          } else if (autoPaused && e.intersectionRatio >= 0.25) resume();
          first = false;
        },
        { threshold: [0, 0.25] },
      );
      io.observe(stage);
    } else if (!on && io) {
      io.disconnect();
      io = null;
    }
  };
  const start = () => {
    // On a phone the button sits under the drawing and its caption, so the reader may press Play
    // with the drawing scrolled off the top. Bring the drawing, caption and button into view (or as
    // much of them as fits, button included) before the run starts.
    const r = stage.getBoundingClientRect();
    if (Math.min(r.bottom, innerHeight) - Math.max(r.top, 0) < r.height / 2) {
      (visual ?? stage).scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    cls.remove('is-playing', 'is-paused');
    void fig.offsetWidth; // flush styles so every animation starts again from zero
    cls.add('is-playing');
    autoPaused = false;
    set('playing');
    watch(true);
  };
  function pause(auto: boolean) {
    autoPaused = auto;
    set('paused');
    if (!auto) watch(false);
  }
  function resume() {
    autoPaused = false;
    set('playing');
    watch(true);
  }
  const end = () => {
    cls.remove('is-playing', 'is-paused');
    autoPaused = false;
    set('ended');
    watch(false);
  };

  const onEnd = (e: AnimationEvent) => {
    if (e.target === clock) end();
  };
  const onToggle = () => {
    if (state === 'playing') pause(false);
    else if (state === 'paused') resume();
    else start();
  };
  clock.addEventListener('animationend', onEnd);
  toggle.addEventListener('click', onToggle);
  set('idle');
  cls.add('is-live');

  teardowns.push(() => {
    watch(false);
    clock.removeEventListener('animationend', onEnd);
    toggle.removeEventListener('click', onToggle);
    cls.remove('is-live', 'is-playing', 'is-paused');
    set('idle');
  });
}

function setup() {
  teardowns.splice(0).forEach((f) => f());
  if (reduce.matches) return;
  document.querySelectorAll<HTMLElement>('.explainer').forEach(init);
}

setup();
reduce.addEventListener('change', setup);
