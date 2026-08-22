import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import reviews from './src/data/reviews.json';

const site = 'https://techtoolreviews.com';

const reviewPages = reviews.map(
  ({ category, slug }) => `${site}/${category}/${slug}/`
);

const noindexPages = new Set([
  '/antivirus/protect-your-pc/',
  '/antivirus/pobierz-avast/',
  '/vpn/secure-connection/',
  '/vpn/secure-internet-connection/'
]);

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  trailingSlash: 'always',

  site,

  integrations: [
    sitemap({
      customPages: reviewPages,
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const canonicalPathname = pathname.endsWith('/') ? pathname : `${pathname}/`;

        return !canonicalPathname.startsWith('/go/') &&
               !noindexPages.has(canonicalPathname);
      }
    })
  ]
});
