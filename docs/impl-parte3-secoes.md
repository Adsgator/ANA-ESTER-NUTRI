# DOCUMENTO DE IMPLEMENTAÇÃO — ANA ESTER NUTRICIONISTA
## PARTE 3 — SEÇÕES

> Copy transcrita exatamente do DOC-1. Não alterar nenhuma palavra.

---

## src/components/sections/Hero.astro

```astro
---
import { Image } from 'astro:assets';
import Button from '../global/Button.astro';
import heroImg from '../../assets/images/hero-principal.webp';

const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';
---

<section
  id="hero-section"
  class="relative bg-background pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
  aria-labelledby="hero-heading"
>
  <!-- Textura de fundo sutil -->
  <div class="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_#436f3e_0%,_transparent_60%)]" aria-hidden="true"></div>

  <div class="container-wide">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

      <!-- Texto -->
      <div>
        <!-- Eyebrow label -->
        <p class="label-tag mb-5 animate-fade-up" style="animation-delay: 0ms">
          Nutricionista em Poços de Caldas
        </p>

        <!-- H1 — Dor #1 -->
        <h1
          id="hero-heading"
          class="font-serif text-display-xl text-text-main mb-6 animate-fade-up"
          style="animation-delay: 80ms"
        >
          Você não precisa de um plano alimentar sofrido para ter resultados reais
        </h1>

        <!-- Subtítulo -->
        <p class="font-sans text-lg text-text-soft leading-relaxed mb-8 max-w-lg animate-fade-up" style="animation-delay: 160ms">
          Acompanhamento nutricional individualizado, adaptado à sua rotina e ao seu jeito de viver. Sem extremos, sem fórmulas que não funcionam na vida real.
        </p>

        <!-- CTA -->
        <div class="animate-fade-up" style="animation-delay: 240ms">
          <Button
            label="Quero iniciar meu acompanhamento"
            href={WA_LINK}
            variant="primary"
            trackingId="btn-hero-wa"
            trackingAction="click-whatsapp-hero"
            trackingSection="hero"
            external
          />
        </div>

        <!-- Prova social -->
        <div class="flex items-center gap-2.5 mt-6 animate-fade-up" style="animation-delay: 320ms">
          <div class="flex text-secondary text-base tracking-wide" aria-hidden="true">
            ★★★★★
          </div>
          <span class="font-sans text-sm text-text-soft">
            <strong class="font-medium text-text-main">5,0</strong> no Google · 16 avaliações reais
          </span>
        </div>
      </div>

      <!-- Imagem -->
      <div class="relative animate-fade-up hidden lg:block" style="animation-delay: 200ms">
        <div class="relative">
          <!-- Placeholder / Imagem real -->
          <div
            class="w-full aspect-[3/4] bg-surface rounded-sm overflow-hidden border border-border"
            aria-label="[Foto de Ana Ester — 840x1120px]"
          >
            <!-- Descomente quando a foto estiver disponível: -->
            <!--
            <Image
              src={heroImg}
              alt="Ana Ester, nutricionista em Poços de Caldas"
              width={420}
              height={560}
              loading="eager"
              format="webp"
              class="w-full h-full object-cover object-top"
            />
            -->

            <!-- Placeholder label -->
            <div class="w-full h-full flex flex-col items-center justify-center gap-3 text-text-muted">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <span class="font-sans text-xs text-center px-4">[Foto de Ana Ester — 840×1120px]</span>
            </div>
          </div>

          <!-- Badge flutuante -->
          <div class="absolute -bottom-4 -left-4 bg-primary text-white rounded-sm px-4 py-3 shadow-float">
            <span class="font-sans text-xs font-medium leading-tight block">Presencial e online</span>
            <span class="font-sans text-[0.65rem] text-white/70 block mt-0.5">Poços de Caldas e todo o Brasil</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-up {
    animation: fadeUp 0.7s ease both;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-up { animation: none; opacity: 1; transform: none; }
  }
</style>
```

---

## src/components/sections/Servico.astro

```astro
---
import { Image } from 'astro:assets';
import Button from '../global/Button.astro';
import SectionHeader from '../global/SectionHeader.astro';

const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';
---

<section
  id="servico"
  class="bg-white section-py"
  aria-labelledby="servico-heading"
>
  <div class="container-wide">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      <!-- Imagem à esquerda em desktop -->
      <div class="order-last lg:order-first" data-animate>
        <div class="relative">
          <div
            class="w-full aspect-[4/5] bg-surface rounded-sm overflow-hidden border border-border"
            aria-label="[Foto de Ana Ester em atendimento — 680x850px]"
          >
            <!-- Descomente quando foto disponível:
            <Image
              src={retratoImg}
              alt="Ana Ester realizando atendimento nutricional"
              width={680}
              height={850}
              loading="lazy"
              format="webp"
              class="w-full h-full object-cover"
            />
            -->
            <div class="w-full h-full flex flex-col items-center justify-center gap-3 text-text-muted">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <span class="font-sans text-xs">[Retrato Ana Ester — 680×850px]</span>
            </div>
          </div>

          <!-- Detalhe decorativo -->
          <div class="absolute -top-3 -right-3 w-24 h-24 border border-primary/20 rounded-sm pointer-events-none" aria-hidden="true"></div>
        </div>
      </div>

      <!-- Texto -->
      <div>
        <p class="label-tag mb-4" data-animate>O acompanhamento</p>
        <h2 id="servico-heading" class="font-serif text-display-lg text-text-main mb-6 leading-snug" data-animate>
          Nutrição feita para a sua vida, não para um modelo genérico
        </h2>

        <div class="space-y-4" data-animate>
          <p class="font-sans text-base text-text-soft leading-relaxed">
            Eu desenvolvi um acompanhamento que leva em conta de verdade quem você é. Sua rotina, seus objetivos, seu histórico de saúde e até seus exames laboratoriais entram no processo desde a primeira consulta.
          </p>
          <p class="font-sans text-base text-text-soft leading-relaxed">
            O plano alimentar que você recebe é exclusivo e vai sendo ajustado conforme a sua evolução. Em cada encontro, faço uma avaliação do estado nutricional para que você saiba exatamente onde está e para onde estamos caminhando.
          </p>
          <p class="font-sans text-base text-text-soft leading-relaxed">
            Muita gente chega buscando resultado estético e logo percebe que os benefícios vão muito além. Mais disposição, mais saúde e uma relação mais leve com a comida.
          </p>
        </div>

        <div class="mt-8" data-animate>
          <Button
            label="Falar comigo no WhatsApp"
            href={WA_LINK}
            variant="primary"
            trackingId="btn-servico-wa"
            trackingAction="click-whatsapp-servico"
            trackingSection="servico"
            external
          />
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## src/components/sections/Diferenciais.astro

```astro
---
import SectionHeader from '../global/SectionHeader.astro';
import FeatureCard from '../global/FeatureCard.astro';

const diferenciais = [
  {
    icon: '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>',
    title: 'Totalmente individualizado',
    description: 'Cada paciente recebe um plano alimentar exclusivo. Nada de protocolo genérico. Tudo pensado para a sua realidade e o que você precisa agora.',
  },
  {
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    title: 'Sem planos alimentares sofridos',
    description: 'Reeducação alimentar não funciona com extremos. Meu foco é um ajuste saudável e sustentável, construído junto com você, no seu ritmo.',
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    title: 'Acolhimento de verdade',
    description: 'Todos os meus pacientes se sentem escutados de forma sincera. Eu me preocupo de verdade com a evolução de cada um.',
  },
  {
    icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    title: 'Acompanhamento contínuo',
    description: 'A cada encontro, avalio seu estado nutricional e ajusto o plano conforme o que está funcionando para você.',
  },
  {
    icon: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    title: 'Materiais educativos',
    description: 'Estou desenvolvendo guias nutricionais que ajudam você a entender o processo e manter consistência entre as consultas.',
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    title: 'Flexibilidade de horários e modalidade',
    description: 'Atendo de segunda a sexta das 9h às 18h e aos sábados das 9h30 às 15h30. Presencial em Poços de Caldas ou online, como preferir.',
  },
];
---

<section
  id="diferenciais"
  class="bg-surface section-py"
  aria-labelledby="diferenciais-heading"
>
  <div class="container-wide">
    <SectionHeader
      label="Por que me escolher"
      title="O que torna meu atendimento diferente"
      subtitle="Não acredito em extremos. Acredito em processo, acolhimento e consistência."
    />

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      data-animate-group
    >
      {diferenciais.map((item) => (
        <FeatureCard
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
</section>
```

---

## src/components/sections/ComoFunciona.astro

```astro
---
import SectionHeader from '../global/SectionHeader.astro';
import Button from '../global/Button.astro';

const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';

const steps = [
  {
    num: '01',
    title: 'Primeira consulta',
    description: 'Escuto sua história, sua rotina, seus objetivos e seu histórico de saúde. Faço a avaliação física e nutricional completa.',
  },
  {
    num: '02',
    title: 'Plano alimentar exclusivo',
    description: 'Elaboro um plano alimentar pensado para a sua realidade. Sem restrições extremas, sem fórmulas genéricas.',
  },
  {
    num: '03',
    title: 'Retornos e ajustes',
    description: 'Nos retornos, avaliamos sua evolução e ajustamos o plano conforme o que está funcionando para você. A frequência mínima é mensal.',
  },
  {
    num: '04',
    title: 'Resultados reais',
    description: 'Com consistência e o acompanhamento adequado, já é possível perceber melhorias na disposição e no bem-estar nas primeiras semanas.',
  },
];
---

<section
  id="como-funciona"
  class="bg-surface-alt section-py"
  aria-labelledby="como-heading"
>
  <div class="container-wide">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

      <!-- Passo a passo -->
      <div>
        <p class="label-tag mb-4" data-animate>O processo</p>
        <h2 id="como-heading" class="font-serif text-display-lg text-text-main mb-4 leading-snug" data-animate>
          Como acontece o acompanhamento
        </h2>
        <p class="font-sans text-base text-text-soft mb-10 max-w-md" data-animate>
          Um processo claro, sem enrolação. Do primeiro contato até os resultados, cada etapa tem um objetivo.
        </p>

        <!-- Steps -->
        <ol class="space-y-0" data-animate-group>
          {steps.map((step, i) => (
            <li class="flex gap-6 pb-8 last:pb-0 relative" data-animate-item>
              {/* Linha conectora */}
              {i < steps.length - 1 && (
                <div class="absolute left-[19px] top-10 bottom-0 w-px bg-border" aria-hidden="true"></div>
              )}

              {/* Número */}
              <div class="shrink-0 w-10 h-10 rounded-full border border-primary/30 bg-background flex items-center justify-center relative z-10">
                <span class="font-serif text-sm text-primary font-medium">{step.num}</span>
              </div>

              {/* Conteúdo */}
              <div class="pt-1.5">
                <h3 class="font-serif text-display-sm text-text-main mb-1.5">{step.title}</h3>
                <p class="font-sans text-sm text-text-soft leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <!-- Card lateral de modalidades -->
      <div data-animate>
        <div class="bg-background border border-border rounded p-7 sticky top-24">
          <h3 class="font-serif text-display-sm text-text-main mb-6">Como prefere ser atendido?</h3>

          <div class="space-y-5">
            <!-- Presencial -->
            <div class="flex gap-3">
              <div class="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true"></div>
              <div>
                <h4 class="font-sans text-sm font-medium text-text-main mb-1">Presencial</h4>
                <p class="font-sans text-sm text-text-soft leading-relaxed">Rua Junqueiras, 500, 1° andar, sala 18, Centro, Poços de Caldas. Com avaliação física completa em cada consulta.</p>
              </div>
            </div>

            <!-- Online -->
            <div class="flex gap-3">
              <div class="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true"></div>
              <div>
                <h4 class="font-sans text-sm font-medium text-text-main mb-1">Online</h4>
                <p class="font-sans text-sm text-text-soft leading-relaxed">Atendo de qualquer lugar. O acompanhamento continua totalmente personalizado. A avaliação física é feita por medidas de circunferências e fotos evolutivas, com orientação minha.</p>
              </div>
            </div>
          </div>

          <!-- Horários -->
          <div class="border-t border-border mt-6 pt-5">
            <h4 class="font-sans text-[0.7rem] uppercase tracking-[0.12em] text-text-muted font-medium mb-3">Horários de atendimento</h4>
            <p class="font-sans text-sm text-text-soft">Segunda a sexta: 9h às 18h</p>
            <p class="font-sans text-sm text-text-soft">Sábados: 9h30 às 15h30</p>
          </div>

          <div class="mt-6">
            <Button
              label="Agendar minha consulta"
              href={WA_LINK}
              variant="primary"
              trackingId="btn-como-funciona-wa"
              trackingAction="click-whatsapp-como-funciona"
              trackingSection="como-funciona"
              external
              fullWidth
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

## src/components/sections/Sobre.astro

```astro
---
---

<section
  id="sobre"
  class="bg-dark section-py"
  aria-labelledby="sobre-heading"
>
  <div class="container-content">
    <div class="text-center">
      <p class="label-tag text-primary/80 mb-5" data-animate>Quem está por trás</p>

      <h2
        id="sobre-heading"
        class="font-serif text-display-lg text-white leading-snug max-w-2xl mx-auto mb-8"
        data-animate
      >
        Descobri na nutrição um caminho de reconexão comigo mesma. Hoje, quero ajudar você a viver essa mesma transformação, com leveza e verdade.
      </h2>

      <p class="font-sans text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-12" data-animate>
        Atendo com uma abordagem acolhedora, individualizada e sem julgamentos. Meu atendimento sempre vai olhar para a sua história, sua rotina e seus sintomas para que possamos juntos traçar um caminho possível e real.
      </p>

      <!-- Citação -->
      <blockquote
        class="max-w-md mx-auto border-l-2 border-primary pl-6 text-left"
        data-animate
      >
        <p class="font-serif text-xl md:text-2xl text-white/70 italic leading-relaxed">
          "A nutrição que eu acredito começa com escuta, carinho e clareza."
        </p>
      </blockquote>
    </div>
  </div>
</section>
```

---

## src/components/sections/AvaliacoesGoogle.astro

```astro
---
import SectionHeader from '../global/SectionHeader.astro';
import ReviewCard from '../global/ReviewCard.astro';

/**
 * NOTA DE INTEGRAÇÃO:
 * Os textos abaixo são placeholders com estrutura real.
 * Antes do go-live, substituir pelos textos reais extraídos manualmente
 * do Google Business de Ana Ester.
 * Nunca inventar avaliações — usar apenas textos reais.
 */
const reviews = [
  {
    name: 'Avaliação do Google',
    rating: 5,
    text: '[Substituir pelo texto real da avaliação extraída do Google Business]',
    date: 'Recente',
  },
  {
    name: 'Avaliação do Google',
    rating: 5,
    text: '[Substituir pelo texto real da avaliação extraída do Google Business]',
    date: 'Recente',
  },
  {
    name: 'Avaliação do Google',
    rating: 5,
    text: '[Substituir pelo texto real da avaliação extraída do Google Business]',
    date: 'Recente',
  },
];
---

<section
  id="avaliacoes"
  class="bg-background section-py"
  aria-labelledby="avaliacoes-heading"
>
  <div class="container-wide">
    <SectionHeader
      label="Avaliações"
      title="O que pacientes dizem no Google"
      subtitle="5,0 estrelas com 16 avaliações verificadas"
    />

    <!-- Badge Google -->
    <div class="flex justify-center mb-10" data-animate>
      <div class="inline-flex items-center gap-3 border border-border rounded-full px-5 py-3 bg-background">
        <!-- Logo Google -->
        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>

        <div class="text-left">
          <span class="font-sans text-sm font-medium text-text-main block leading-tight">Ana Ester Nutricionista</span>
          <span class="font-sans text-xs text-text-muted">Google Business</span>
        </div>

        <div class="flex items-center gap-1.5">
          <span class="text-secondary text-sm tracking-wide" aria-label="5 estrelas">★★★★★</span>
          <span class="font-sans text-sm font-medium text-text-main">5,0</span>
        </div>
      </div>
    </div>

    <!-- Grid de cards -->
    <!-- Mobile: scroll horizontal snap. Desktop: grid 3 colunas -->
    <div
      class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 scrollbar-none"
      data-animate-group
    >
      {reviews.map((review) => (
        <div class="snap-start shrink-0 w-[85vw] sm:w-[70vw] md:w-auto">
          <ReviewCard
            name={review.name}
            rating={review.rating}
            text={review.text}
            date={review.date}
          />
        </div>
      ))}
    </div>

    <!-- Link para o perfil Google -->
    <p class="text-center mt-8 font-sans text-sm text-text-muted" data-animate>
      Veja todas as avaliações no
      <a
        href="https://g.page/r/ana-ester-nutricionista"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Google Business
      </a>
    </p>
  </div>
</section>

<style>
  .scrollbar-none::-webkit-scrollbar { display: none; }
  .scrollbar-none { scrollbar-width: none; }
</style>
```

---

## src/components/sections/FAQ.astro

```astro
---
import SectionHeader from '../global/SectionHeader.astro';

const faqs = [
  {
    q: 'O plano alimentar é individualizado?',
    a: 'Sim. Cada paciente recebe um plano alimentar exclusivo, pensado de acordo com suas necessidades, objetivos e o ajuste nutricional necessário para o que você quer alcançar.',
  },
  {
    q: 'Vou precisar fazer restrições extremas?',
    a: 'Não. Eu acredito que reeducação alimentar não funciona com extremos. O foco é uma adequação saudável e sustentável, construída no seu ritmo e de acordo com a sua vida real.',
  },
  {
    q: 'Com que frequência acontecem as consultas?',
    a: 'A frequência mínima é mensal. O tempo total do acompanhamento é definido de acordo com o pacote escolhido e os objetivos de cada paciente.',
  },
  {
    q: 'O atendimento online funciona igual ao presencial?',
    a: 'Sim. O acompanhamento online continua sendo totalmente personalizado. A avaliação física é feita por medidas de circunferências e fotos evolutivas, com orientação completa da minha parte.',
  },
  {
    q: 'Em quanto tempo começo a ver resultados?',
    a: 'Os resultados variam de pessoa para pessoa. Com consistência e o acompanhamento adequado, já é possível perceber melhorias na disposição e no bem-estar nas primeiras semanas.',
  },
  {
    q: 'Como funciona a primeira consulta?',
    a: 'Na primeira consulta, escuto sua rotina, seus objetivos e seu histórico de saúde. Faço a avaliação física e, se necessário, analiso seus exames laboratoriais. Tudo para que o plano alimentar seja construído com clareza e de acordo com a sua realidade.',
  },
];
---

<section
  id="faq"
  class="bg-surface section-py"
  aria-labelledby="faq-heading"
>
  <div class="container-content">
    <SectionHeader
      label="Perguntas frequentes"
      title="Tire suas dúvidas antes de começar"
      subtitle="As dúvidas mais comuns de quem está considerando iniciar o acompanhamento."
    />

    <div class="max-w-2xl mx-auto" data-animate>
      {faqs.map((item, i) => (
        <div class="faq-item border-b border-border last:border-none" data-faq-item>
          <button
            class="w-full flex items-center justify-between gap-4 py-5 text-left font-sans text-base font-medium text-text-main hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded="false"
            aria-controls={`faq-answer-${i}`}
            id={`faq-btn-${i}`}
            data-faq-trigger
          >
            <span>{item.q}</span>
            <span class="shrink-0 w-5 h-5 text-text-muted transition-transform duration-200" aria-hidden="true" data-faq-icon>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="10" y1="4" x2="10" y2="16" />
                <line x1="4" y1="10" x2="16" y2="10" />
              </svg>
            </span>
          </button>

          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            class="overflow-hidden"
            style="max-height: 0"
            data-faq-answer
          >
            <p class="font-sans text-sm text-text-soft leading-relaxed pb-5 pr-8">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<script is:inline>
  (function () {
    var items = document.querySelectorAll('[data-faq-item]');
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    items.forEach(function(item) {
      var trigger = item.querySelector('[data-faq-trigger]');
      var answer = item.querySelector('[data-faq-answer]');
      var icon = item.querySelector('[data-faq-icon]');
      if (!trigger || !answer) return;

      trigger.addEventListener('click', function() {
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Fechar todos
        items.forEach(function(other) {
          var otherTrigger = other.querySelector('[data-faq-trigger]');
          var otherAnswer = other.querySelector('[data-faq-answer]');
          var otherIcon = other.querySelector('[data-faq-icon]');
          if (otherTrigger && otherAnswer) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherAnswer.style.maxHeight = '0';
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        // Abrir este se estava fechado
        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          if (icon) icon.style.transform = 'rotate(45deg)';
        }
      });
    });
  })();
</script>
```

---

## src/components/sections/CTAFinal.astro

```astro
---
import Button from '../global/Button.astro';

const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';
---

<section
  id="cta-final"
  class="bg-primary section-py"
  aria-labelledby="cta-heading"
>
  <div class="container-content text-center">
    <p class="label-tag text-white/60 mb-5" data-animate>Próximo passo</p>

    <h2
      id="cta-heading"
      class="font-serif text-display-lg text-white leading-snug max-w-xl mx-auto mb-5"
      data-animate
    >
      Pronto para começar de forma certa?
    </h2>

    <p class="font-sans text-base text-white/75 max-w-md mx-auto mb-10" data-animate>
      Me manda uma mensagem agora. Vou te contar como funciona o acompanhamento e como podemos começar juntos.
    </p>

    <div data-animate>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-cta-final-wa"
        data-tracking="click-whatsapp-cta-final"
        data-section="cta-final"
        class="inline-flex items-center justify-center gap-3 bg-white text-primary font-sans font-medium text-base px-8 py-4 rounded-sm hover:bg-white/90 hover:scale-[1.03] transition-all duration-200 shadow-float focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.075.528 4.025 1.456 5.732L0 24l6.458-1.427C8.137 23.497 10.025 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.629-.476-5.182-1.314l-.371-.218-3.831.847.86-3.726-.24-.386A9.927 9.927 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Falar com Ana Ester agora
      </a>
    </div>

    <p class="font-sans text-sm text-white/45 mt-5" data-animate>
      Atendimento presencial em Poços de Caldas e online para todo o Brasil
    </p>
  </div>
</section>
```

---

## src/pages/index.astro

```astro
---
import Layout from '../components/global/Layout.astro';
import Hero from '../components/sections/Hero.astro';
import Servico from '../components/sections/Servico.astro';
import Diferenciais from '../components/sections/Diferenciais.astro';
import ComoFunciona from '../components/sections/ComoFunciona.astro';
import Sobre from '../components/sections/Sobre.astro';
import AvaliacoesGoogle from '../components/sections/AvaliacoesGoogle.astro';
import FAQ from '../components/sections/FAQ.astro';
import CTAFinal from '../components/sections/CTAFinal.astro';
---

<Layout>
  <Hero />
  <Servico />
  <Diferenciais />
  <ComoFunciona />
  <Sobre />
  <AvaliacoesGoogle />
  <FAQ />
  <CTAFinal />
</Layout>

<script is:inline>
  // Rastreamento GTM — view_content (pageview landing page)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'view_content', page_type: 'landing_page' });

  // Rastreamento de cliques WhatsApp
  document.addEventListener('click', function(e) {
    var el = e.target.closest('[data-tracking]');
    if (!el) return;
    var action = el.getAttribute('data-tracking');
    var section = el.getAttribute('data-section');
    if (action && action.includes('whatsapp')) {
      window.dataLayer.push({
        event: 'contato_wpp',
        click_action: action,
        click_section: section || 'unknown',
      });
    }
  });
</script>
```
