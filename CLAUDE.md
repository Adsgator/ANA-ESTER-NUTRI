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
