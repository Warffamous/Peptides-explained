/**
 * The "check before you use it" list (src/data/product-check.yaml), validated at import time with the
 * same schema the standalone validator uses. See src/schemas/product-check.ts and CONTENT-GUIDE §9.
 */
import YAML from 'yaml';
import { productCheckDataSchema, type ProductCheckData } from '../schemas/product-check';

const raw = import.meta.glob<string>('/src/data/product-check.yaml', { eager: true, query: '?raw', import: 'default' });
const text = raw['/src/data/product-check.yaml'];
if (!text) throw new Error('[product-check] src/data/product-check.yaml is missing');
const parsed = productCheckDataSchema.safeParse(YAML.parse(text) ?? {});
if (!parsed.success) {
  throw new Error('[product-check] src/data/product-check.yaml is invalid:\n' + parsed.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n'));
}
export const PRODUCT_CHECK: ProductCheckData = parsed.data;
