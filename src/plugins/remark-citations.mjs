/**
 * Numbers <Cite id="a,b" /> markers at compile time, in order of first appearance, and
 * exports the ordered id list as frontmatter.citations. Doing this at compile time (not in
 * the component) guarantees the inline numbers and the source list can never disagree,
 * regardless of how Astro schedules component rendering.
 */
import { visit } from 'unist-util-visit';

export default function remarkCitations() {
  return (tree, file) => {
    const order = [];
    const index = new Map();
    visit(tree, (node) => {
      if ((node.type !== 'mdxJsxTextElement' && node.type !== 'mdxJsxFlowElement') || node.name !== 'Cite') return;
      const idAttr = node.attributes.find((a) => a.type === 'mdxJsxAttribute' && a.name === 'id');
      if (!idAttr || typeof idAttr.value !== 'string') {
        file.fail('<Cite> needs a literal id="…" attribute', node);
      }
      const ids = idAttr.value.split(',').map((s) => s.trim()).filter(Boolean);
      const first = [];
      const nums = ids.map((id) => {
        if (!index.has(id)) {
          order.push(id);
          index.set(id, order.length);
          first.push('1');
        } else first.push('0');
        return index.get(id);
      });
      node.attributes = node.attributes.filter((a) => a.name !== 'n' && a.name !== 'first');
      node.attributes.push({ type: 'mdxJsxAttribute', name: 'n', value: nums.join(',') });
      // marks first occurrences so only they carry the back-link target id (ids must be unique)
      node.attributes.push({ type: 'mdxJsxAttribute', name: 'first', value: first.join(',') });
    });
    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.citations = order;
  };
}
