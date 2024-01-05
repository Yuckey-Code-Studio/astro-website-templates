import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.domein.dev', // set your site URL.
  prefetch: true,
  server: {
    host: true,
    open: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/global/mixin/_index.scss";',
        },
      },
    },
  },
  integrations: [sitemap()],
});
