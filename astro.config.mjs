import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Sitemap gerado manualmente em public/sitemap.xml
// @astrojs/sitemap incompatível com Astro 4.x (usa hook astro:routes:resolved do Astro 5+)

export default defineConfig({
  output: 'static',
  site: 'https://anaesternutricionista.com.br',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
