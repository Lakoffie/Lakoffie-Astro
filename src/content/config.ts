// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const artikelCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string(),
    alt: z.string(),
    tags: z.array(z.string()),
  }),
});

// NAMA KEY DI SINI HARUS SAMA DENGAN NAMA FOLDER DI src/content/
export const collections = {
  'artikel': artikelCollection,
};
