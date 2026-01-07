// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://lakoffie.online', // Domain utama Lakoffie
  output: 'server',                // Wajib 'server' agar Tukang Pos (API) & Supabase jalan
  adapter: vercel(),               // Adapter untuk online di Vercel
  integrations: [sitemap()],       // Agar Google mudah menemukan website Master
});