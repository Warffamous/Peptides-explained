/**
 * Astro content collections. Schemas live in src/schemas so the standalone validator
 * (scripts/validate-content.ts) uses exactly the same rules. A compound data file without an
 * evidence grade or review date fails here, and therefore fails the build.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { compoundDataSchema, compoundPageSchema, pageSchema } from './schemas';

// Ids are always the file path (e.g. "en/bpc-157"). Without this, Astro would use a frontmatter
// `slug` as the id and silently merge the same compound's pages across locales.
const pathId = ({ entry }: { entry: string }) => entry.replace(/\.(mdx|ya?ml)$/, '');

const compoundData = defineCollection({
  loader: glob({ pattern: '*.{yaml,yml}', base: './src/data/compounds', generateId: pathId }),
  schema: compoundDataSchema,
});

const compounds = defineCollection({
  loader: glob({ pattern: '*/*.mdx', base: './src/content/compounds', generateId: pathId }),
  schema: compoundPageSchema,
});

const pages = defineCollection({
  loader: glob({ pattern: '*/**/*.mdx', base: './src/content/pages', generateId: pathId }),
  schema: pageSchema,
});

export const collections = { compoundData, compounds, pages };
