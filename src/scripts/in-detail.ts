/**
 * "In detail" folds (src/components/mdx/InDetail.astro) — progressive enhancement only. Without
 * this script every fold is still a native <details>: it opens by click, keyboard and find-in-page,
 * and the reading-tools row offers a CSS-only "Show all details" checkbox instead of the button.
 *
 *  - "Open all details" / "Close all details" (ReadingTools.astro): one button, its label follows
 *    the state, also when the reader opens or closes folds one by one.
 *  - A link to something inside a closed fold (a citation number, a source back-link, a table of
 *    contents entry) opens the folds around the target first, then scrolls to it.
 *  - Printing opens every fold (and closes them again afterwards); base/figures.css does the same
 *    without JavaScript where ::details-content is supported.
 */
const FOLDS = 'details[data-in-detail]';
const folds = () => Array.from(document.querySelectorAll<HTMLDetailsElement>(FOLDS));
const buttons = () => Array.from(document.querySelectorAll<HTMLButtonElement>('[data-open-all]'));

function sync(): void {
  const all = folds();
  const allOpen = all.length > 0 && all.every((d) => d.open);
  for (const b of buttons()) {
    b.dataset.state = allOpen ? 'open' : 'closed';
    const label = b.querySelector('[data-label]') ?? b;
    label.textContent = (allOpen ? b.dataset.labelClose : b.dataset.labelOpen) ?? label.textContent;
  }
}

function reveal(hash: string, scroll: boolean): void {
  if (hash.length < 2) return;
  let target: HTMLElement | null = null;
  try {
    target = document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return;
  }
  if (!target) return;
  let changed = false;
  for (let d = target.closest('details'); d; d = d.parentElement?.closest('details') ?? null) {
    if (!d.open) {
      d.open = true;
      changed = true;
    }
  }
  if (changed && scroll) target.scrollIntoView();
}

let printed: HTMLDetailsElement[] = [];

function init(): void {
  for (const b of buttons()) {
    b.addEventListener('click', () => {
      const all = folds();
      const open = !all.every((d) => d.open);
      for (const d of all) d.open = open;
      sync();
    });
  }
  // `toggle` does not bubble: listen in the capture phase.
  document.addEventListener('toggle', (e) => { if ((e.target as Element).matches?.(FOLDS)) sync(); }, true);
  // In-page links: open the folds around the target before the browser scrolls to it.
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest?.('a[href^="#"]');
    if (a) reveal(a.getAttribute('href') ?? '', false);
  });
  window.addEventListener('hashchange', () => reveal(location.hash, true));
  if (location.hash) reveal(location.hash, true);
  window.addEventListener('beforeprint', () => {
    printed = Array.from(document.querySelectorAll<HTMLDetailsElement>('details:not([open])'));
    for (const d of printed) d.open = true;
  });
  window.addEventListener('afterprint', () => {
    for (const d of printed) d.open = false;
    printed = [];
  });
  sync();
}

init();
