import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),

  site: 'https://techtoolreviews.com',

  integrations: [
    sitemap()
  ]
});