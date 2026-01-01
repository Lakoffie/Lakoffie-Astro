// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lakoffie.online', // Domain utama Anda
  integrations: [sitemap()],
});
