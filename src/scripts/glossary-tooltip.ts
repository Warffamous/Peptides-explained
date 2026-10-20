/**
 * Glossary tooltips. Progressive enhancement: every term is a real link to the glossary and has
 * aria-describedby pointing at its definition, so it works without this script. With it, hovering
 * or focusing a term shows the definition in place; Escape dismisses (WCAG 1.4.13).
 */
const defs = document.querySelector<HTMLElement>('.glossary-defs');
if (defs) {
  const tip = document.createElement('div');
  tip.className = 'term-tip';
  tip.setAttribute('role', 'tooltip');
  tip.id = 'term-tip';
  tip.hidden = true;
  document.body.append(tip);
  let current: HTMLElement | null = null;
  let hideTimer = 0;

  const place = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    const rtl = getComputedStyle(el).direction === 'rtl';
    const w = Math.min(320, window.innerWidth - 24);
    tip.style.maxInlineSize = `${w}px`;
    const top = r.bottom + window.scrollY + 8;
    let left = rtl ? r.right + window.scrollX - w : r.left + window.scrollX;
    left = Math.max(12 + window.scrollX, Math.min(left, window.scrollX + window.innerWidth - w - 12));
    tip.style.insetBlockStart = `${top}px`;
    tip.style.insetInlineStart = rtl ? 'auto' : `${left}px`;
    if (rtl) tip.style.insetInlineEnd = `${document.documentElement.clientWidth - (left + w)}px`;
  };
  const show = (el: HTMLElement) => {
    const def = document.getElementById(`gd-${el.dataset.term}`);
    if (!def) return;
    window.clearTimeout(hideTimer);
    current = el;
    tip.innerHTML = def.innerHTML;
    tip.hidden = false;
    place(el);
  };
  const hide = () => {
    tip.hidden = true;
    current = null;
  };
  const later = () => {
    hideTimer = window.setTimeout(hide, 150);
  };
  document.addEventListener('pointerover', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('a.term');
    if (el) show(el);
    else if (!(e.target as Element).closest('.term-tip') && current) later();
  });
  tip.addEventListener('pointerenter', () => window.clearTimeout(hideTimer));
  document.addEventListener('focusin', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('a.term');
    if (el) show(el);
    else hide();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && current) hide();
  });
  window.addEventListener('resize', () => current && place(current), { passive: true });
}
