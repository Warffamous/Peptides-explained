/**
 * <ProductCheck /> declares its sources once, in src/data/product-check.yaml (one list for the intro,
 * one per check). This plugin turns them into ordinary <Cite> children in named slots ("src-intro",
 * "src-item-<id>") BEFORE remark-citations runs, the same way remark-explainer-sources works, so the
 * checklist's source marks are numbered in order of appearance with the page's own citations and its
 * sources always appear in the page's source list.
 *
 * The optional compound-specific line (extra="…") names its sources in extraSources="id,id"; they go
 * into the slot "src-extra". An extra line without sources fails the build. Slot names carry the
 * "src-" prefix because Astro drops a prop that has the same name as a slot (a slot named "extra"
 * removed the extra="…" prop).
 */
import fs from 'node:fs';
import YAML from 'yaml';
import { visit } from 'unist-util-visit';

const DATA = new URL('../data/product-check.yaml', import.meta.url);

const cite = (type, ids, slot) => ({
  type,
  name: 'Cite',
  attributes: [
    { type: 'mdxJsxAttribute', name: 'id', value: ids.join(',') },
    { type: 'mdxJsxAttribute', name: 'slot', value: slot },
  ],
  children: [],
});

export default function remarkProductCheckSources() {
  return (tree, file) => {
    let data = null;
    visit(tree, (node) => {
      if ((node.type !== 'mdxJsxFlowElement' && node.type !== 'mdxJsxTextElement') || node.name !== 'ProductCheck') return;
      data ??= YAML.parse(fs.readFileSync(DATA, 'utf8')) ?? {};
      const attr = (name) => node.attributes.find((a) => a.type === 'mdxJsxAttribute' && a.name === name);
      const extra = attr('extra');
      const extraSources = attr('extraSources');
      if (extra && (typeof extraSources?.value !== 'string' || !extraSources.value.trim())) {
        file.fail('<ProductCheck extra="…"> needs a literal extraSources="id,id" attribute (the page\'s own sources for that line)', node);
      }
      const children = [];
      if (data.intro_sources?.length) children.push(cite(node.type, data.intro_sources, 'src-intro'));
      for (const item of data.items ?? []) if (item.sources?.length) children.push(cite(node.type, item.sources, `src-item-${item.id}`));
      if (extra && extraSources) {
        children.push(cite(node.type, extraSources.value.split(',').map((s) => s.trim()).filter(Boolean), 'src-extra'));
      }
      node.children = children;
    });
  };
}
