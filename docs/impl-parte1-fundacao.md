# DOCUMENTO DE IMPLEMENTAÇÃO — ANA ESTER NUTRICIONISTA
## PARTE 1 — FUNDAÇÃO

> Gerado por Claude · Adsgator · 11/05/2026  
> Stack: Astro + Tailwind CSS + GSAP + Framer Motion  
> Domínio: anaesternutricionista.com.br

---

## SEQUÊNCIA DE EXECUÇÃO

```bash
# 1. Criar projeto
npm create astro@latest ana-ester-nutricionista -- --template minimal --typescript strict --no-git
cd ana-ester-nutricionista

# 2. Git init obrigatório antes de qualquer código
git init
git checkout -b dev

# 3. Instalar dependências
npm install @astrojs/tailwind @astrojs/react @astrojs/sitemap
npm install tailwindcss
npm install @fontsource/dm-sans
npm install gsap
npm install framer-motion
npm install @studio-freight/lenis
npm install @vercel/analytics
npm install @vercel/speed-insights

# 4. Commit inicial
git add .
git commit -m "init: projeto Astro base Ana Ester Nutricionista"
```

---

## .gitignore

```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
.astro/
```

---

## .env.example

```
# Google Tag Manager
GTM_ID=GTM-T3ZHXBH7

# WhatsApp
WHATSAPP_NUMBER=5535984566323
WHATSAPP_MESSAGE=Olá! Vi seu perfil no Google e gostaria de mais informações sobre como funciona o seu acompanhamento nutricional.

# Web3Forms (formulário — inativo neste projeto)
ACCESS_KEY=

# Instagram Feed (inativo neste projeto)
INSTAGRAM_TOKEN=

# Google Maps API (inativo neste projeto)
GOOGLE_MAPS_API_KEY=
```

---

## package.json

```json
{
  "name": "ana-ester-nutricionista",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/react": "^3.6.0",
    "@astrojs/sitemap": "^3.2.0",
    "@astrojs/tailwind": "^5.1.0",
    "@fontsource/dm-sans": "^5.0.0",
    "@studio-freight/lenis": "^1.0.42",
    "@vercel/analytics": "^1.3.0",
    "@vercel/speed-insights": "^1.0.0",
    "astro": "^4.15.0",
    "framer-motion": "^11.3.0",
    "gsap": "^3.12.5",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.5.0"
  }
}
```

---

## astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://anaesternutricionista.com.br',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/links') &&
        !page.includes('/politica-de-privacidade') &&
        !page.includes('/termos-de-uso') &&
        !page.includes('/404'),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
```

---

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      colors: {
        primary:      '#436f3e',
        'primary-dark': '#2f5129',
        secondary:    '#d59740',
        complement:   '#f9f395',
        background:   '#ffffff',
        surface:      '#f7f4f0',
        'surface-alt':'#f0ebe3',
        dark:         '#1d1d1c',
        'text-main':  '#1d1d1c',
        'text-soft':  '#535353',
        'text-muted': '#8a8a8a',
        border:       '#e5dfd6',
        wa:           '#25D366',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'ui-serif', 'serif'],
        sans:  ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.6rem, 5.5vw, 4.2rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.2rem)',     { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.7rem, 3vw, 2.4rem)',   { lineHeight: '1.2' }],
        'display-sm': ['clamp(1.4rem, 2.5vw, 1.9rem)', { lineHeight: '1.25' }],
        'label':      ['0.72rem',                       { lineHeight: '1', letterSpacing: '0.16em' }],
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 8rem)',
      },
      maxWidth: {
        prose:   '65ch',
        content: '860px',
        wide:    '1200px',
      },
      borderRadius: {
        DEFAULT: '6px',
        sm:      '4px',
        lg:      '12px',
        xl:      '20px',
      },
      boxShadow: {
        card:  '0 2px 16px rgba(29,29,28,0.07)',
        float: '0 4px 24px rgba(29,29,28,0.15)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
```

---

## src/styles/global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Fontes */
@import '@fontsource/dm-sans/300.css';
@import '@fontsource/dm-sans/400.css';
@import '@fontsource/dm-sans/500.css';

/* Cormorant Garamond via Google Fonts — carregado no <head> */

@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: auto; /* Lenis gerencia */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-background text-text-main font-sans font-light;
    overflow-x: hidden;
  }

  ::selection {
    @apply bg-primary/20 text-primary-dark;
  }

  :focus-visible {
    @apply outline-2 outline-offset-2 outline-primary;
  }

  img, video {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-serif font-normal;
  }
}

@layer components {
  .container-content {
    @apply w-[90%] max-w-content mx-auto;
  }
  .container-wide {
    @apply w-[90%] max-w-wide mx-auto;
  }
  .section-py {
    @apply py-[clamp(5rem,10vw,8rem)];
  }
  .label-tag {
    @apply text-label font-medium uppercase tracking-[0.16em] text-primary;
  }
}

/* Lenis */
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}

/* Animações de entrada — estado inicial */
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
}
@media (prefers-reduced-motion: reduce) {
  [data-animate] {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## CLAUDE.md

```markdown
# CLAUDE.md — Ana Ester Nutricionista

## Identidade do Projeto
- **Cliente:** Ana Ester Messias Lima Martins
- **Agência:** Adsgator
- **Domínio:** anaesternutricionista.com.br
- **Objetivo:** Landing page de conversão para WhatsApp

## Stack
- Astro (output: static)
- Tailwind CSS (tokens em tailwind.config.js — nunca HEX hardcoded)
- GSAP + ScrollTrigger (em `<script>` dentro de .astro)
- Framer Motion (apenas em islands React)
- Lenis smooth scroll
- Vercel Analytics + Speed Insights

## Regras Críticas
1. NUNCA alterar a copy — texto vem do DOC-1 sem mudanças
2. NUNCA HEX hardcoded — sempre via token Tailwind
3. NUNCA `console.log` em produção
4. SEMPRE prefers-reduced-motion antes de qualquer GSAP
5. SEMPRE `<Image />` do Astro com width, height e alt
6. SEMPRE `rel="noopener noreferrer"` em links externos
7. NUNCA `<div>` clicável — usar `<button>` ou `<a>`
8. NUNCA `<form>` HTML em islands React — usar event handlers

## WhatsApp
- Número: 5535984566323
- Mensagem: Olá! Vi seu perfil no Google e gostaria de mais informações sobre como funciona o seu acompanhamento nutricional.
- Link: https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.

## GTM
- ID: GTM-T3ZHXBH7
- Conversões: contato_wpp | view_content | view_links

## Tipografia
- Títulos: Cormorant Garamond (Google Fonts)
- Textos: DM Sans (@fontsource/dm-sans)

## Cores (sempre via token)
- primary: #436f3e
- primary-dark: #2f5129
- secondary: #d59740
- background: #ffffff
- surface: #f7f4f0
- surface-alt: #f0ebe3
- dark: #1d1d1c
- text-main: #1d1d1c
- text-soft: #535353

## Estrutura de Arquivos
```
src/
  assets/images/
    hero-principal.webp      ← foto principal (substituir)
    profissional-retrato.webp ← retrato seção Sobre (substituir)
    og-image.webp            ← 1200x630px (substituir)
    favicon.svg              ← SVG nativo
    avatar-links.webp        ← 192x192px /links (substituir)
  components/
    global/
      Layout.astro
      GTM.astro
      Header.astro
      Footer.astro
      Button.astro
      SectionHeader.astro
      FeatureCard.astro
      ReviewCard.astro
      WhatsAppFloat.astro
    islands/
      MobileMenu.tsx
      CookieBanner.tsx
    sections/
      Hero.astro
      Servico.astro
      Diferenciais.astro
      ComoFunciona.astro
      Sobre.astro
      AvaliacoesGoogle.astro
      FAQ.astro
      CTAFinal.astro
  pages/
    index.astro
    links.astro
    404.astro
    politica-de-privacidade.astro
    termos-de-uso.astro
  styles/
    global.css
public/
  robots.txt
  manifest.json
```

## Fluxo da Página
1. Cabeçalho (sticky, header inteligente)
2. Hero
3. O Serviço
4. Diferenciais
5. Como Funciona
6. Sobre
7. Avaliações Google
8. FAQ
9. CTA Final
10. Rodapé
```

---

## public/robots.txt

```
User-agent: *
Allow: /
Disallow: /links
Disallow: /politica-de-privacidade
Disallow: /termos-de-uso

Sitemap: https://anaesternutricionista.com.br/sitemap-index.xml
```

---

## public/manifest.json

```json
{
  "name": "Ana Ester Nutricionista",
  "short_name": "Ana Ester",
  "description": "Acompanhamento nutricional individualizado em Poços de Caldas",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#436f3e",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
```

---

## tsconfig.json

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

---

## .clinerules

```
# Projeto: Ana Ester Nutricionista — Adsgator

## Prioridades
1. Não alterar copy — texto vem do DOC-1
2. Não usar HEX hardcoded — sempre tokens Tailwind
3. prefers-reduced-motion obrigatório antes de GSAP
4. Sem console.log em produção
5. Sem <div> clicável

## Padrões de commit
feat: nova seção ou componente
fix: correção de bug
style: ajuste visual sem lógica
perf: melhoria de performance
a11y: melhoria de acessibilidade

## Comandos úteis
npm run dev      → servidor local
npm run build    → build de produção
npm run preview  → preview do build

## Variáveis de ambiente
Ver .env.example — nunca commitar .env

## Assets
Placeholders em src/assets/images/
Substituir antes do go-live: hero-principal.webp, profissional-retrato.webp, og-image.webp, avatar-links.webp
```
