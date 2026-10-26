/**
 * <Explainer id="x" /> declares its sources once, in src/data/explainers.yaml. This plugin turns
 * them into ordinary <Cite> children (one named slot per source) BEFORE remark-citations runs, so
 * an explainer's "Based on" line is numbered in order of appearance together with the page's own
 * citations, and its sources always appear in the page's source list.
 *
 * Sources per country: the entry's `sources`, then the `local_sources` of the jurisdictions the content
 * file's locale shows (src/plugins/locale-sources.mjs). The list is also passed to the component as
 * sourceIds="a,b", so its "Based on" names match the numbered slots even when a preview locale shows
 * the English page.
 */
import fs from 'node:fs';
import YAML from 'yaml';
import { visit } from 'unist-util-visit';
import { localeFromPath, visibleSourcesFor } from './locale-sources.mjs';

const REGISTRY = new URL('../data/explainers.yaml', import.meta.url);

export default function remarkExplainerSources() {
  return (tree, file) => {
    let registry = null;
    visit(tree, (node) => {
      if ((node.type !== 'mdxJsxFlowElement' && node.type !== 'mdxJsxTextElement') || node.name !== 'Explainer') return;
      const idAttr = node.attributes.find((a) => a.type === 'mdxJsxAttribute' && a.name === 'id');
      if (!idAttr || typeof idAttr.value !== 'string') file.fail('<Explainer> needs a literal id="…" attribute', node);
      registry ??= YAML.parse(fs.readFileSync(REGISTRY, 'utf8')) ?? {};
      const entry = registry[idAttr.value];
      if (!entry) file.fail(`<Explainer id="${idAttr.value}"> is not registered in src/data/explainers.yaml`, node);
      const locale = localeFromPath(file.path ?? file.history?.[0]);
      if (!locale) file.fail('<Explainer>: cannot tell the locale from the file path (src/content/<collection>/<locale>/…)', node);
      const ids = visibleSourcesFor(entry, locale);
      node.attributes = [...node.attributes.filter((a) => a.name !== 'sourceIds'), { type: 'mdxJsxAttribute', name: 'sourceIds', value: ids.join(',') }];
      node.children = ids.map((id, i) => ({
        type: node.type,
        name: 'Cite',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'id', value: id },
          { type: 'mdxJsxAttribute', name: 'slot', value: `src-${i}` },
        ],
        children: [],
      }));
    });
  };
}
