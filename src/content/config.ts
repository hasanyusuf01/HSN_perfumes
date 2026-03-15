import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name:              z.string(),
    slug:              z.string(),
    sku:               z.string(),
    price:             z.number(),
    category:          z.string(),
    featured:          z.boolean().default(false),
    short_description: z.string(),
    fragrance_notes:   z.array(z.string()),
    sizes:             z.array(z.string()),
    main_image:        z.string(),
    gallery:           z.array(z.string()).optional().default([]),
    in_stock:          z.boolean().default(true),
    best_seller:       z.boolean().default(false),
  }),
});

export const collections = { products };
