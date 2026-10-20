/**
 * Playback for <Explainer> figures (docs/EXPLAINERS.md). The timeline itself is pure CSS: every
 * part is delayed by its step, so artwork and captions stay in sync without script. This only
 * starts, pauses, loops and stops it:
 *  - autoplay once the artwork is at least half in view, unless the reader asked for reduced
 *    motion (then nothing plays and the controls stay hidden) or to save data;
 *  - at most two runs, then rest on the final frame (the same frame shown without JavaScript);
 *  - a visible Pause/Play and Replay control (WCAG 2.2.2); pause while scrolled out of view.
 */
const MAX_RUNS = 2;
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
const teardowns: (() => void)[] = [];

function init(fig: HTMLElement) {
  const q = <T extends Element>(s: string) => fig.querySelector<T>(s);
  const ctl = q<HTMLElement>('.xp-controls');
  const toggle = q<HTMLButtonElement>('[data-xp-toggle]');
  const replay = q<HTMLButtonElement>('[data-xp-replay]');
  const clock = q<HTMLElement>('.xp-clock');
  const stage = q<HTMLElement>('.xp-stage');
  const label = toggle?.querySelector('.xp-btn__label');
  if (!ctl || !toggle || !replay || !clock || !stage || !label) return;
  const cls = fig.classList;
  let runs = 0;
  let max = 1;
  let started = false;
  let autoPaused = false;

  const sync = () => {
    const playing = cls.contains('is-playing') && !cls.contains('is-paused');
    toggle.dataset.state = playing ? 'playing' : 'paused';
    label.textContent = (playing ? toggle.dataset.labelPause : toggle.dataset.labelPlay) ?? '';
  };
  const restart = () => {
    cls.remove('is-playing', 'is-paused');
    void fig.offsetWidth; // flush styles so every animation starts again from zero
    cls.add('is-playing');
  };
  const play = (n: number) => {
    runs = 0;
    max = n;
    autoPaused = false;
    restart();
    sync();
  };
  const stop = () => {
    cls.remove('is-playing', 'is-paused');
    sync();
  };
  const pause = (auto: boolean) => {
    if (!cls.contains('is-playing') || cls.contains('is-paused')) return;
    cls.add('is-paused');
    autoPaused = auto;
    sync();
  };
  const resume = () => {
    cls.remove('is-paused');
    autoPaused = false;
    sync();
  };

  const onEnd = (e: AnimationEvent) => {
    if (e.target !== clock) return;
    if (++runs < max) restart();
    else stop();
  };
  const onToggle = () => {
    if (cls.contains('is-paused')) resume();
    else if (cls.contains('is-playing')) pause(false);
    else play(1);
  };
  const onReplay = () => play(1);
  clock.addEventListener('animationend', onEnd);
  toggle.addEventListener('click', onToggle);
  replay.addEventListener('click', onReplay);

  const io = new IntersectionObserver(
    ([e]) => {
      if (e.intersectionRatio >= 0.5) {
        if (!started && !saveData) {
          started = true;
          play(MAX_RUNS);
        } else if (autoPaused) resume();
      } else pause(true);
    },
    { threshold: [0, 0.5] },
  );
  io.observe(stage);
  cls.add('is-live');
  sync();

  teardowns.push(() => {
    io.disconnect();
    clock.removeEventListener('animationend', onEnd);
    toggle.removeEventListener('click', onToggle);
    replay.removeEventListener('click', onReplay);
    stop();
    cls.remove('is-live');
  });
}

function setup() {
  teardowns.splice(0).forEach((f) => f());
  if (reduce.matches) return;
  document.querySelectorAll<HTMLElement>('.explainer').forEach(init);
}

setup();
reduce.addEventListener('change', setup);
