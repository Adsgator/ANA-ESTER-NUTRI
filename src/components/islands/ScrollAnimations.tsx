import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Importar dinamicamente Lenis e GSAP
    (async () => {
      const { default: Lenis } = await import('@studio-freight/lenis');
      const gsap = (await import('gsap')).default;
      const { default: ScrollTrigger } = await import('gsap/ScrollTrigger');

      // Registrar ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Inicializar Lenis
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      // Integração GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Smooth scroll para âncoras
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e: Event) => {
          e.preventDefault();
          const href = (anchor as HTMLAnchorElement).getAttribute('href');
          const target = href ? document.querySelector(href) : null;
          if (target) {
            lenis.scrollTo(target, { offset: -80 });
          }
        });
      });

      // Verificar prefers-reduced-motion
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      // Animações de entrada — [data-animate]
      gsap.utils.toArray<Element>('[data-animate]').forEach((el) => {
        gsap.fromTo(
          el,
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
            },
          }
        );
      });

      // Animações de grupo — [data-animate-group]
      gsap.utils.toArray<Element>('[data-animate-group]').forEach((group) => {
        const children = group.querySelectorAll('[data-animate-item]');
        gsap.fromTo(
          children,
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
            },
          }
        );
      });
    })();
  }, []);

  return null;
}
