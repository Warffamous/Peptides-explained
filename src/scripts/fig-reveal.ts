/**
 * NOT LOADED ANY MORE (21 October 2026): nothing on the page moves unless the reader starts it
 * (owner's decision, 20 October 2026), so <TimeStrip> no longer imports this file and design A no
 * longer styles `.is-pending`. Kept only until the owner confirms; then delete it.
 *
 * One-time fill for time strips (src/components/mdx/TimeStrip.astro), as the motion grammar in
 * docs/design/DESIGN-DIRECTIONS-2026-10.md §3.2 allows: the first time a strip scrolls into view,
 * its bars grow from the start of their span in 400 ms or less, then stay put. The fill is never
 * tied to the scroll position, so a bar never shows a wrong length while the reader is looking at
 * it.
 *
 * Progressive enhancement only. Without JavaScript, with reduced motion, for strips already on
 * screen when the page loads, and in print, the bars are simply drawn at their final length. The
 * design decides whether and how the fill is drawn (themes/a/figures.css: `.is-pending` bars are
 * scaled to zero, and a transition brings them to full length); scale is a transform, so nothing
 * moves around it (no layout shift).
 */
function init(): void {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const strips = Array.from(document.querySelectorAll<HTMLElement>('.time-strip:not([data-revealed])'));
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        // Next frame, so the pending (zero) state has been painted and the transition runs.
        requestAnimationFrame(() => el.classList.remove('is-pending'));
      }
    },
    { threshold: 0.35 },
  );
  for (const el of strips) {
    el.dataset.revealed = '';
    // Only strips the reader has not seen yet: nothing on the first screen disappears.
    if (el.getBoundingClientRect().top < window.innerHeight) continue;
    el.classList.add('is-pending');
    io.observe(el);
  }
  window.addEventListener('beforeprint', () => {
    for (const el of strips) el.classList.remove('is-pending');
  });
}

init();
