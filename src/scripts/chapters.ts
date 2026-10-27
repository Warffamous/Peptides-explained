/**
 * The chapter list (src/components/layout/Chapters.astro) — progressive enhancement only. Without
 * this script the side column still stays in view on wide screens (CSS), and on phones the list
 * inside the article does the job; every link works.
 *
 *  - Marks the chapter being read with aria-current="location" (the side column highlights it): the
 *    last chapter whose start has passed a line a quarter down the screen, or the last one at the
 *    end of the page.
 *  - Below 75rem: shows the bar fixed to the top of the screen once the inline list has scrolled
 *    away, with the current chapter's name; the bar opens the list as a sheet (popover), and
 *    choosing a chapter closes it. html[data-chapters-bar] lets other sticky parts make room.
 */
const nav = document.querySelector<HTMLElement>('[data-chapters]');
const bar = document.querySelector<HTMLElement>('[data-chapters-bar]');
const inline = document.querySelector<HTMLElement>('[data-chapters-inline]');

if (nav) {
  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[data-chapter]'));
  const targets = links.map((a) => document.getElementById(a.dataset.chapter ?? ''));
  const current = bar?.querySelector<HTMLElement>('[data-chapters-current]') ?? null;
  const narrow = window.matchMedia('(max-width: 74.99rem)');
  const canSheet = typeof HTMLElement.prototype.showPopover === 'function';
  let active = -2;
  let queued = false;

  const update = (): void => {
    queued = false;
    // The bar: narrow screens, popover support, and the inline list above the top of the screen.
    const show = !!bar && !!inline && canSheet && narrow.matches && inline.getBoundingClientRect().bottom < 0;
    if (bar && bar.hidden === show) {
      bar.hidden = !show;
      document.documentElement.toggleAttribute('data-chapters-bar', show);
    }
    const line = window.innerHeight * 0.25 + (show && bar ? bar.offsetHeight : 0);
    let idx = -1;
    targets.forEach((el, i) => {
      if (el && el.getClientRects().length > 0 && el.getBoundingClientRect().top <= line) idx = i;
    });
    const doc = document.documentElement;
    if (idx >= 0 && window.scrollY + window.innerHeight >= doc.scrollHeight - 4) idx = targets.length - 1;
    if (idx === active) return;
    links[active]?.removeAttribute('aria-current');
    active = idx;
    links[idx]?.setAttribute('aria-current', 'location');
    if (current) current.textContent = links[idx]?.textContent ?? '';
    // Keep the highlighted chapter visible inside a long side column.
    if (!narrow.matches && links[idx]) {
      const box = nav.getBoundingClientRect();
      const r = links[idx].getBoundingClientRect();
      if (r.top < box.top || r.bottom > box.bottom) nav.scrollTop += r.top - box.top - box.height / 3;
    }
  };
  const queue = (): void => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  narrow.addEventListener('change', () => {
    if (!narrow.matches && canSheet && nav.matches(':popover-open')) nav.hidePopover();
    queue();
  });
  // Folds opening or closing move every chapter below them.
  document.addEventListener('toggle', queue, true);
  // Choosing a chapter in the sheet closes it; the browser then scrolls to the chapter.
  nav.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a') && canSheet && nav.matches(':popover-open')) nav.hidePopover();
  });
  update();
}
