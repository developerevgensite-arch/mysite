import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  trailingSlash: 'always',

  site: 'https://techtoolreviews.com',

  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        return pathname !== '/antivirus/protect-your-pc/' &&
               pathname !== '/antivirus/protect-your-pc' &&
               pathname !== '/antivirus/pobierz-avast/' &&
               pathname !== '/antivirus/pobierz-avast' &&
               pathname !== '/vpn/secure-internet-connection/' &&
               pathname !== '/vpn/secure-internet-connection';
      }
    })
  ]
});