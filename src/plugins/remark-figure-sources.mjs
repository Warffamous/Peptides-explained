/**
 * Figures that show numbers (<KeyNumber>, <IconArray>, <TimeStrip>) name their sources in a
 * `source="id,id"` prop. This plugin turns the prop into an ordinary <Cite> child in the named slot
 * "cite" BEFORE remark-citations runs (the same way remark-explainer-sources works), so a figure's
 * source is numbered in order of appearance with the page's own citations and always appears in the
 * page's source list.
 *
 * It also groups two or more consecutive <KeyNumber> blocks into one plain
 * <div class="key-numbers"> row (side by side on wide screens, stacked on phones), so authors write
 * key numbers one by one and no separate group component is needed.
 */
import { visit } from 'unist-util-visit';

const FIGURES = new Set(['KeyNumber', 'IconArray', 'TimeStrip']);
const isKeyNumber = (n) => n && n.type === 'mdxJsxFlowElement' && n.name === 'KeyNumber';

export default function remarkFigureSources() {
  return (tree, file) => {
    visit(tree, (node) => {
      if ((node.type !== 'mdxJsxFlowElement' && node.type !== 'mdxJsxTextElement') || !FIGURES.has(node.name)) return;
      const src = node.attributes.find((a) => a.type === 'mdxJsxAttribute' && a.name === 'source');
      if (!src) return;
      if (typeof src.value !== 'string' || !src.value.trim()) file.fail(`<${node.name}> needs a literal source="id,id" attribute`, node);
      node.children = [
        ...(node.children ?? []),
        {
          type: node.type,
          name: 'Cite',
          attributes: [
            { type: 'mdxJsxAttribute', name: 'id', value: src.value },
            { type: 'mdxJsxAttribute', name: 'slot', value: 'cite' },
          ],
          children: [],
        },
      ];
    });
    // Runs of consecutive key numbers become one row.
    visit(tree, (node) => {
      if (node.name === 'div' || !Array.isArray(node.children) || !node.children.some(isKeyNumber)) return;
      const out = [];
      for (let i = 0; i < node.children.length; ) {
        if (!isKeyNumber(node.children[i])) {
          out.push(node.children[i++]);
          continue;
        }
        const run = [];
        while (isKeyNumber(node.children[i])) run.push(node.children[i++]);
        out.push(
          run.length < 2
            ? run[0]
            : {
                type: 'mdxJsxFlowElement',
                name: 'div',
                attributes: [{ type: 'mdxJsxAttribute', name: 'class', value: `key-numbers key-numbers--${run.length}` }],
                children: run,
              },
        );
      }
      node.children = out;
    });
  };
}
