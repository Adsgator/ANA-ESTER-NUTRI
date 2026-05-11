# DOCUMENTO DE IMPLEMENTAÇÃO — ANA ESTER NUTRICIONISTA
## PARTE 2 — LAYOUT + COMPONENTES GLOBAIS

---

## src/components/global/GTM.astro

```astro
---
interface Props {
  id: string;
}
const { id } = Astro.props;
---

<!-- GTM Head Snippet -->
<script is:inline define:vars={{ id }}>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer',id);
</script>

<!-- GTM Body Snippet (noscript) — inserir imediatamente após <body> via slot -->
<noscript>
  <iframe
    src={`https://www.googletagmanager.com/ns.html?id=${id}`}
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe>
</noscript>
```

---

## src/components/global/Layout.astro

```astro
---
import GTM from './GTM.astro';
import Header from './Header.astro';
import Footer from './Footer.astro';
import WhatsAppFloat from './WhatsAppFloat.astro';
import CookieBanner from '../islands/CookieBanner';
import { Analytics } from '@vercel/analytics/astro';
import { SpeedInsights } from '@vercel/speed-insights/astro';
import '@fontsource/dm-sans/300.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '../styles/global.css';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  noindex?: boolean;
  schema?: object;
}

const {
  title = 'Nutricionista em Poços de Caldas | Ana Ester',
  description = 'Acompanhamento nutricional individualizado em Poços de Caldas. Plano alimentar real, sem restrições extremas. Atendo presencial e online. Fale comigo agora.',
  keywords = 'nutricionista poços de caldas, acompanhamento nutricional, plano alimentar individualizado, reeducação alimentar, nutricionista online, emagrecimento saudável, nutrição humanizada',
  ogTitle = 'Ana Ester Nutricionista | Poços de Caldas',
  ogDescription = 'Nutrição humanizada, individualizada e com foco na sua vida real. Sem planos genéricos. Atendo presencial e online.',
  canonical = 'https://anaesternutricionista.com.br',
  noindex = false,
  schema,
} = Astro.props;

const GTM_ID = 'GTM-T3ZHXBH7';

const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "Nutritionist",
  "name": "Ana Ester Messias Lima Martins",
  "description": "Acompanhamento nutricional individualizado em Poços de Caldas. Nutrição humanizada, individualizada e com foco na vida real.",
  "url": "https://anaesternutricionista.com.br",
  "telephone": "+55-35-98456-6323",
  "email": "anaesternutricionista@gmail.com",
  "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:30-15:30"],
  "sameAs": [
    "https://www.instagram.com/nutri.anaester",
    "https://www.tiktok.com/@nutri.anaester",
    "https://www.facebook.com/share/18c1xh9UEU/"
  ]
};

const finalSchema = schema || defaultSchema;
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />

  <!-- GTM Head — imediatamente após charset -->
  <GTM id={GTM_ID} />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#436f3e" />

  <!-- SEO -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  {noindex && <meta name="robots" content="noindex, follow" />}
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content="https://anaesternutricionista.com.br/og-image.webp" />
  <meta property="og:locale" content="pt_BR" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Google Fonts — Cormorant Garamond -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    rel="preload"
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap"
    as="style"
    onload="this.onload=null;this.rel='stylesheet'"
  />
  <noscript>
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap"
      rel="stylesheet"
    />
  </noscript>

  <!-- Preload hero image -->
  <link
    rel="preload"
    href="/src/assets/images/hero-principal.webp"
    as="image"
    fetchpriority="high"
  />

  <!-- PWA Manifest -->
  <link rel="manifest" href="/manifest.json" />

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json" set:html={JSON.stringify(finalSchema)} />

  <!-- Google Consent Mode v2 — deve vir antes do GTM -->
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': 500
    });
  </script>
</head>
<body>
  <!-- GTM Body noscript — imediatamente após abertura do body -->
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    ></iframe>
  </noscript>

  <Header />

  <main id="main" tabindex="-1">
    <slot />
  </main>

  <Footer />
  <WhatsAppFloat />

  <CookieBanner
    client:idle
    gtmId={GTM_ID}
  />

  <Analytics />
  <SpeedInsights />

  <!-- Lenis + GSAP init -->
  <script is:inline>
    (function () {
      // Lenis smooth scroll
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true,
      });

      // Integração GSAP ScrollTrigger
      if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(function(time) { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);
      }

      // Smooth scroll para âncoras
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          var target = document.querySelector(this.getAttribute('href'));
          if (target) lenis.scrollTo(target, { offset: -80 });
        });
      });
    })();
  </script>

  <!-- GSAP ScrollTrigger — animações de entrada globais -->
  <script is:inline>
    (function () {
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      if (!window.gsap) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('[data-animate]').forEach(function(el) {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

      gsap.utils.toArray('[data-animate-group]').forEach(function(group) {
        var children = group.querySelectorAll('[data-animate-item]');
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    })();
  </script>
</body>
</html>
```

---

## src/components/global/Header.astro

```astro
---
import Button from './Button.astro';
import MobileMenu from '../islands/MobileMenu';

const navLinks = [
  { label: 'O Serviço', href: '#servico' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
];

const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';
---

<header
  id="site-header"
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  data-header
>
  <div class="container-wide">
    <div class="flex items-center justify-between h-16 md:h-20">

      <!-- Logo -->
      <a
        href="#top"
        class="flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        aria-label="Ana Ester Nutricionista — Ir para o topo"
      >
        <span class="font-serif text-xl md:text-2xl text-text-main tracking-tight">Ana Ester</span>
        <span class="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-text-soft font-medium">Nutricionista</span>
      </a>

      <!-- Nav Desktop -->
      <nav class="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a
            href={link.href}
            class="font-sans text-sm text-text-soft hover:text-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <!-- CTA Desktop -->
      <div class="hidden lg:block">
        <Button
          label="Falar no WhatsApp"
          href={WA_LINK}
          variant="primary"
          trackingId="btn-header-wa"
          trackingAction="click-whatsapp-header"
          trackingSection="header"
          external
          small
        />
      </div>

      <!-- Mobile Menu Island -->
      <MobileMenu
        client:idle
        links={navLinks}
        ctaLabel="Falar no WhatsApp"
        ctaHref={WA_LINK}
      />
    </div>
  </div>
</header>

<script is:inline>
  (function () {
    var header = document.querySelector('[data-header]');
    if (!header) return;

    var lastScroll = 0;
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function updateHeader() {
      var scrollY = window.scrollY;

      // Fundo ao passar de 80px
      if (scrollY > 80) {
        header.classList.add('bg-background/95', 'backdrop-blur-md', 'shadow-[0_1px_0_0_rgba(229,223,214,0.8)]');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('bg-background/95', 'backdrop-blur-md', 'shadow-[0_1px_0_0_rgba(229,223,214,0.8)]');
        header.classList.add('bg-transparent');
      }

      // Esconder ao scrollar para baixo, mostrar ao subir
      if (!prefersReduced && scrollY > 300) {
        if (scrollY > lastScroll) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = scrollY;
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  })();
</script>
```

---

## src/components/islands/MobileMenu.tsx

```tsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export default function MobileMenu({ links, ctaLabel, ctaHref }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Bloquear scroll do body
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      firstLinkRef.current?.focus();
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => { document.documentElement.style.overflow = ''; };
  }, [isOpen]);

  // Fechar com Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [isOpen]);

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const linkVariants = {
    closed: { opacity: 0, y: prefersReduced ? 0 : 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: prefersReduced ? 0 : 0.1 + i * 0.05, duration: 0.35, ease: 'easeOut' },
    }),
  };

  return (
    <div className="lg:hidden">
      {/* Botão hambúrguer */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="relative w-10 h-10 flex flex-col justify-center items-center gap-[5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <motion.span
          className="block w-6 h-[1.5px] bg-text-main origin-center"
          animate={isOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.25 }}
        />
        <motion.span
          className="block w-6 h-[1.5px] bg-text-main"
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: prefersReduced ? 0 : 0.2 }}
        />
        <motion.span
          className="block w-6 h-[1.5px] bg-text-main origin-center"
          animate={isOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.25 }}
        />
      </button>

      {/* Overlay fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-0 z-[100] bg-dark flex flex-col px-8 py-8"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: prefersReduced ? 0 : 0.3 }}
          >
            {/* Cabeçalho do overlay */}
            <div className="flex items-center justify-between mb-16">
              <span className="font-serif text-2xl text-white tracking-tight">Ana Ester</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="3" y1="3" x2="17" y2="17" />
                  <line x1="17" y1="3" x2="3" y2="17" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-2 flex-1" aria-label="Menu mobile">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="font-serif text-4xl text-white/80 hover:text-white transition-colors py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA no fundo */}
            <motion.a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              custom={links.length + 1}
              variants={linkVariants}
              initial="closed"
              animate="open"
              id="btn-mobile-menu-wa"
              data-tracking="click-whatsapp-menu-mobile"
              data-section="mobile-menu"
              className="flex items-center justify-center gap-3 w-full py-4 bg-wa text-white font-sans font-medium text-base rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.075.528 4.025 1.456 5.732L0 24l6.458-1.427C8.137 23.497 10.025 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.629-.476-5.182-1.314l-.371-.218-3.831.847.86-3.726-.24-.386A9.927 9.927 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {ctaLabel}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## src/components/global/Button.astro

```astro
---
interface Props {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  trackingId: string;
  trackingAction: string;
  trackingSection: string;
  external?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  icon?: 'whatsapp' | 'none';
}

const {
  label,
  href,
  variant = 'primary',
  trackingId,
  trackingAction,
  trackingSection,
  external = false,
  small = false,
  fullWidth = false,
  icon = 'whatsapp',
} = Astro.props;

const base = 'inline-flex items-center justify-center gap-2.5 font-sans font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm';

const sizes = small
  ? 'text-sm px-5 py-2.5'
  : 'text-base px-7 py-4';

const variants = {
  primary:   'bg-primary text-white hover:bg-primary-dark hover:scale-[1.03] focus-visible:outline-primary shadow-[0_2px_12px_rgba(67,111,62,0.25)] hover:shadow-[0_4px_20px_rgba(67,111,62,0.35)]',
  secondary: 'bg-secondary text-white hover:bg-[#b87d30] hover:scale-[1.03] focus-visible:outline-secondary',
  ghost:     'border border-border text-text-soft hover:border-primary hover:text-primary hover:scale-[1.03] focus-visible:outline-primary',
};

const width = fullWidth ? 'w-full' : '';
---

<a
  href={href}
  id={trackingId}
  data-tracking={trackingAction}
  data-section={trackingSection}
  class={`${base} ${sizes} ${variants[variant]} ${width}`}
  {...external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
>
  {icon === 'whatsapp' && (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.075.528 4.025 1.456 5.732L0 24l6.458-1.427C8.137 23.497 10.025 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.629-.476-5.182-1.314l-.371-.218-3.831.847.86-3.726-.24-.386A9.927 9.927 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )}
  {label}
</a>
```

---

## src/components/global/SectionHeader.astro

```astro
---
interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

const { label, title, subtitle, align = 'center', dark = false } = Astro.props;

const alignClass = align === 'left' ? 'text-left' : 'text-center';
const titleColor = dark ? 'text-white' : 'text-text-main';
const subtitleColor = dark ? 'text-white/60' : 'text-text-soft';
const labelColor = dark ? 'text-primary/80' : 'text-primary';
---

<div class={`${alignClass} mb-12 md:mb-16`} data-animate>
  {label && (
    <p class={`label-tag ${labelColor} mb-3`}>{label}</p>
  )}
  <h2 class={`font-serif text-display-lg ${titleColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
    <Fragment set:html={title} />
  </h2>
  {subtitle && (
    <p class={`font-sans text-base ${subtitleColor} mt-4 max-w-xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {subtitle}
    </p>
  )}
</div>
```

---

## src/components/global/FeatureCard.astro

```astro
---
interface Props {
  icon: string; // SVG path string
  title: string;
  description: string;
}

const { icon, title, description } = Astro.props;
---

<div
  class="bg-background border border-border rounded p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-card transition-all duration-200 cursor-default"
  data-animate-item
>
  <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-primary"
      aria-hidden="true"
      set:html={icon}
    />
  </div>
  <div>
    <h3 class="font-serif text-display-sm text-text-main mb-1.5">{title}</h3>
    <p class="font-sans text-sm text-text-soft leading-relaxed">{description}</p>
  </div>
</div>
```

---

## src/components/global/ReviewCard.astro

```astro
---
interface Props {
  name: string;
  rating: number;
  text: string;
  date?: string;
}

const { name, rating, text, date } = Astro.props;
const stars = Array(rating).fill('★').join('');
---

<div class="bg-background border border-border rounded p-6 flex flex-col gap-3" data-animate-item>
  <div class="text-secondary text-sm tracking-wider">{stars}</div>
  <p class="font-sans text-sm text-text-soft leading-relaxed italic">"{text}"</p>
  <div class="flex items-center justify-between mt-auto pt-3 border-t border-border">
    <span class="font-sans text-sm font-medium text-text-main">{name}</span>
    {date && <span class="font-sans text-xs text-text-muted">{date}</span>}
  </div>
</div>
```

---

## src/components/global/WhatsAppFloat.astro

```astro
---
const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';
---

<a
  id="btn-whatsapp-float"
  href={WA_LINK}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Falar pelo WhatsApp"
  data-tracking="click-whatsapp-flutuante"
  data-section="floating"
  class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-wa rounded-full flex items-center justify-center shadow-float hover:scale-110 transition-all duration-200 opacity-0 pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa"
>
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.075.528 4.025 1.456 5.732L0 24l6.458-1.427C8.137 23.497 10.025 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.629-.476-5.182-1.314l-.371-.218-3.831.847.86-3.726-.24-.386A9.927 9.927 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
</a>

<script is:inline>
  (function () {
    var btn = document.getElementById('btn-whatsapp-float');
    var hero = document.getElementById('hero-section');
    if (!btn || !hero) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          btn.classList.add('opacity-0', 'pointer-events-none');
          btn.classList.remove('opacity-100');
        } else {
          btn.classList.remove('opacity-0', 'pointer-events-none');
          btn.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(hero);
  })();
</script>
```

---

## src/components/global/Footer.astro

```astro
---
const currentYear = new Date().getFullYear();

const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';
---

<footer class="bg-dark text-white">
  <div class="container-wide py-16 md:py-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

      <!-- Coluna 1 — Marca -->
      <div>
        <a href="#top" class="inline-block mb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <span class="font-serif text-2xl text-white block leading-none">Ana Ester</span>
          <span class="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-primary mt-0.5 block">Nutricionista</span>
        </a>
        <p class="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
          Nutrição humanizada, individualizada e com foco na vida real. Atendo presencial em Poços de Caldas e online.
        </p>
        <!-- Redes sociais -->
        <div class="flex gap-3 mt-6">
          <a
            href="https://www.instagram.com/nutri.anaester"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @nutri.anaester"
            class="w-9 h-9 border border-white/15 rounded flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
              <circle cx="17.5" cy="6.5" r="0.8"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@nutri.anaester"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok @nutri.anaester"
            class="w-9 h-9 border border-white/15 rounded flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.78 1.52V6.83a4.85 4.85 0 0 1-1.01-.14z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/18c1xh9UEU/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Ana Ester"
            class="w-9 h-9 border border-white/15 rounded flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Coluna 2 — Contato -->
      <div>
        <h3 class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-primary font-medium mb-5">Contato</h3>
        <ul class="space-y-3">
          <li>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              class="font-sans text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1.16h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (35) 98456-6323
            </a>
          </li>
          <li>
            <a
              href="mailto:anaesternutricionista@gmail.com"
              class="font-sans text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              anaesternutricionista@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <!-- Coluna 3 — Localização -->
      <div>
        <h3 class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-primary font-medium mb-5">Atendimento</h3>
        <ul class="space-y-3">
          <li class="font-sans text-sm text-white/60 flex items-start gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="shrink-0 mt-0.5" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Rua Junqueiras, 500, 1° andar, sala 18, Centro, Poços de Caldas / MG
          </li>
          <li class="font-sans text-sm text-white/60 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Seg-sex: 9h às 18h
          </li>
          <li class="font-sans text-sm text-white/60 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Sábados: 9h30 às 15h30
          </li>
        </ul>
      </div>
    </div>

    <!-- Rodapé inferior -->
    <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div class="font-sans text-xs text-white/25 space-y-1">
        <p>© {currentYear} Ana Ester Messias Lima Martins · CNPJ 55.448.142/0001-08</p>
        <div class="flex gap-4">
          <a href="/politica-de-privacidade" class="hover:text-white/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Política de Privacidade</a>
          <a href="/termos-de-uso" class="hover:text-white/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Termos de Uso</a>
        </div>
      </div>
      <a
        href="https://adsgator.com.br"
        target="_blank"
        rel="noopener noreferrer"
        class="font-sans text-xs text-white/20 hover:text-white/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Desenvolvido por Adsgator
      </a>
    </div>
  </div>
</footer>
```

---

## src/components/islands/CookieBanner.tsx

```tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface Props {
  gtmId: string;
}

type ConsentState = 'pending' | 'accepted' | 'rejected';

export default function CookieBanner({ gtmId }: Props) {
  const [consent, setConsent] = useState<ConsentState>('pending');
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored as ConsentState);
      if (stored === 'accepted') updateConsent(true);
    }
  }, []);

  function updateConsent(granted: boolean) {
    const value = granted ? 'granted' : 'denied';
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: value,
        analytics_storage: value,
        ad_user_data: value,
        ad_personalization: value,
      });
    }
  }

  function handleAccept() {
    localStorage.setItem('cookie-consent', 'accepted');
    updateConsent(true);
    setConsent('accepted');
  }

  function handleReject() {
    localStorage.setItem('cookie-consent', 'rejected');
    updateConsent(false);
    setConsent('rejected');
  }

  if (consent !== 'pending') return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-label="Aviso de cookies"
        aria-live="polite"
        className="fixed bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-sm z-[200] bg-dark text-white rounded p-5 shadow-float"
        initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-sans text-sm text-white/80 leading-relaxed mb-4">
          Usamos cookies para melhorar sua experiência e para fins de análise e publicidade. Você pode aceitar ou recusar.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-primary text-white font-sans text-sm font-medium py-2.5 rounded-sm hover:bg-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Aceitar
          </button>
          <button
            onClick={handleReject}
            className="flex-1 border border-white/20 text-white/60 font-sans text-sm py-2.5 rounded-sm hover:text-white hover:border-white/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Recusar
          </button>
        </div>
        <a
          href="/politica-de-privacidade"
          className="block mt-3 font-sans text-xs text-white/30 hover:text-white/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Política de privacidade
        </a>
      </motion.div>
    </AnimatePresence>
  );
}

declare global {
  interface Window { gtag: (...args: unknown[]) => void; }
}
```
