import { defineCollection, z } from 'astro:content';

const artikelCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string(),
    alt: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'artikel': artikelCollection, // Nama koleksi jadi 'artikel'
};
