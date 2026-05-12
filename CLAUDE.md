# CLAUDE.md — Ana Ester Nutricionista

## Identidade do Projeto
- **Cliente:** Ana Ester Messias Lima Martins
- **Agência:** Adsgator
- **Domínio:** anaesternutricionista.com.br
- **Objetivo:** Landing page de conversão para WhatsApp

## Status atual (2026-05-12)
- Desktop: **concluído e protegido** (commit `d56e01d`)
- Fase atual: **responsividade mobile**
- Breakpoints mobile-first: sm (640px) → md (768px) → lg (1024px) → xl (1280px)
- Abordagem: ajustar classes Tailwind existentes com prefixos responsivos — não reescrever componentes

## Stack
- Astro 5 (output: static)
- Tailwind CSS v3 (tokens em tailwind.config.js — nunca HEX hardcoded)
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
9. SEMPRE mobile-first ao adicionar responsividade — base sem prefixo é mobile, depois sm: md: lg:

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

## Estrutura de Arquivos (estado real)
```
src/
  assets/images/
    img_hero_ana.webp              ← Hero principal
    img_ana_servicos.webp          ← Seção Serviço
    img_ana_acompanhamento.webp    ← Seção Sobre / acompanhamento
    img_aparador.webp              ← Ambiente clínica
    img_espera.webp                ← Ambiente clínica
    img_recepcao.webp              ← Ambiente clínica
    img_sala_consulta.webp         ← Ambiente clínica
    logomarca_dourada_sem_fundo.webp
    logomarca_preta_sem_fundo.svg
    assinatura-footer-adsgator-.svg
    andreza_cristina_dos_santos.webp  ← Avatar avaliação
    angela_dos_santos_botelhos.webp   ← Avatar avaliação
    daiza_thezolin.webp               ← Avatar avaliação
    gustavo_gut.webp                  ← Avatar avaliação
    leticia_arantes.webp              ← Avatar avaliação
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
      CookieBanner.tsx        ← ainda não implementado
    sections/
      Hero.astro
      Servico.astro
      Diferenciais.astro
      ComoFunciona.astro
      Sobre.astro
      AvaliacoesGoogle.astro
      FAQ.astro
      CTAFinal.astro
      Localizacao.astro
  pages/
    index.astro
    links.astro               ← ainda não implementado
    404.astro                 ← ainda não implementado
    politica-de-privacidade.astro  ← ainda não implementado
    termos-de-uso.astro            ← ainda não implementado
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
10. Localização
11. Rodapé
