import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://anaesternutricionista.com.br',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    // sitemap plugin disabled due to build error with undefined pages
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
