/**
 * Wraps every authored markdown <table> in a keyboard-focusable horizontal scroller, so wide
 * tables scroll inside themselves instead of widening the page (WCAG 1.4.10 reflow, 200% zoom).
 */
export default function rehypeTableWrap() {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === 'element' && child.tagName === 'table') {
        return { type: 'element', tagName: 'div', properties: { className: ['table-scroll', 'table-scroll--prose'], tabIndex: 0 }, children: [child] };
      }
      walk(child);
      return child;
    });
  };
  return (tree) => walk(tree);
}
