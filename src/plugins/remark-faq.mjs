/**
 * Collects <FaqItem q="…">answer</FaqItem> into frontmatter.faq so the layout can emit
 * FAQPage structured data that matches the visible text exactly.
 */
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

export default function remarkFaq() {
  return (tree, file) => {
    const faq = [];
    visit(tree, (node) => {
      if (node.type !== 'mdxJsxFlowElement' || node.name !== 'FaqItem') return;
      const q = node.attributes.find((a) => a.name === 'q')?.value;
      if (typeof q !== 'string') file.fail('<FaqItem> needs a literal q="…" attribute', node);
      faq.push({ q, a: toString(node.children).replace(/\s+/g, ' ').trim() });
    });
    if (faq.length) {
      file.data.astro ??= {};
      file.data.astro.frontmatter ??= {};
      file.data.astro.frontmatter.faq = faq;
    }
  };
}
