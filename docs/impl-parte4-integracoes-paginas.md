# DOCUMENTO DE IMPLEMENTAÇÃO — ANA ESTER NUTRICIONISTA
## PARTE 4 — INTEGRAÇÕES + PÁGINAS ADICIONAIS

---

## src/pages/links.astro

```astro
---
import { Image } from 'astro:assets';

const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';

const links = [
  {
    id: 'btn-links-wa',
    label: 'Falar no WhatsApp',
    href: WA_LINK,
    tracking: 'click-whatsapp-links',
    variant: 'primary',
    external: true,
  },
  {
    id: 'btn-links-site',
    label: 'Acessar o site',
    href: 'https://anaesternutricionista.com.br',
    tracking: 'click-site-links',
    variant: 'ghost',
    external: false,
  },
  {
    id: 'btn-links-instagram',
    label: 'Instagram @nutri.anaester',
    href: 'https://www.instagram.com/nutri.anaester',
    tracking: 'click-instagram-links',
    variant: 'ghost',
    external: true,
  },
  {
    id: 'btn-links-tiktok',
    label: 'TikTok @nutri.anaester',
    href: 'https://www.tiktok.com/@nutri.anaester',
    tracking: 'click-tiktok-links',
    variant: 'ghost',
    external: true,
  },
  {
    id: 'btn-links-facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18c1xh9UEU/',
    tracking: 'click-facebook-links',
    variant: 'ghost',
    external: true,
  },
];

const currentYear = new Date().getFullYear();
const GTM_ID = 'GTM-T3ZHXBH7';
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />

  <!-- GTM Head -->
  <script is:inline define:vars={{ GTM_ID }}>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',GTM_ID);
  </script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, follow" />
  <meta name="theme-color" content="#436f3e" />

  <title>Ana Ester Nutricionista | Links</title>
  <meta name="description" content="Acompanhamento nutricional individualizado. Fale comigo e comece agora." />
  <link rel="canonical" href="https://anaesternutricionista.com.br/links" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <!-- Consent Mode v2 -->
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'wait_for_update': 500
    });
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap"
    rel="stylesheet"
  />

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
      font-weight: 300;
      background: #f7f4f0;
      color: #1d1d1c;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px 20px 32px;
      -webkit-font-smoothing: antialiased;
    }
    .wrap { width: 100%; max-width: 400px; display: flex; flex-direction: column; align-items: center; flex: 1; }
    .avatar {
      width: 88px; height: 88px; border-radius: 50%;
      background: #e5dfd6;
      border: 2px solid #fff;
      box-shadow: 0 2px 12px rgba(29,29,28,0.1);
      overflow: hidden;
      display: flex; align-items: center; justify-content: center;
      color: #8a8a8a; font-size: 12px;
      margin-bottom: 16px;
    }
    .name { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 400; text-align: center; margin-bottom: 4px; }
    .tagline { font-size: 0.85rem; color: #535353; text-align: center; margin-bottom: 36px; }
    .links-col { width: 100%; display: flex; flex-direction: column; gap: 12px; }
    .link-btn {
      display: flex; align-items: center; justify-content: center;
      width: 100%; padding: 14px 20px;
      font-family: 'DM Sans', sans-serif; font-size: 0.92rem; font-weight: 500;
      border-radius: 6px; text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
      cursor: pointer;
    }
    .link-btn:hover { transform: translateY(-2px); }
    .link-btn:focus-visible { outline: 2px solid #436f3e; outline-offset: 2px; }
    .link-btn.primary {
      background: #436f3e; color: #fff;
      box-shadow: 0 2px 12px rgba(67,111,62,0.25);
    }
    .link-btn.primary:hover { background: #2f5129; box-shadow: 0 4px 18px rgba(67,111,62,0.35); }
    .link-btn.ghost {
      background: #fff; color: #1d1d1c;
      border: 1px solid #e5dfd6;
    }
    .link-btn.ghost:hover { border-color: #436f3e; color: #436f3e; }
    .socials { display: flex; gap: 14px; margin-top: 28px; }
    .social-link {
      width: 36px; height: 36px; border: 1px solid #e5dfd6; border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      color: #535353; transition: border-color 0.2s, color 0.2s;
      text-decoration: none;
    }
    .social-link:hover { border-color: #436f3e; color: #436f3e; }
    .social-link:focus-visible { outline: 2px solid #436f3e; outline-offset: 2px; }
    footer { margin-top: auto; padding-top: 32px; font-size: 0.75rem; color: #8a8a8a; text-align: center; }

    /* Animações */
    .link-item { opacity: 0; transform: translateY(20px); }
    @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
    @media (prefers-reduced-motion: reduce) {
      .link-item { opacity: 1; transform: none; animation: none; }
    }
  </style>
</head>
<body>
  <!-- GTM noscript -->
  <noscript>
    <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>

  <main class="wrap">

    <!-- Avatar -->
    <div class="avatar link-item" style="animation: fadeUp 0.5s 0s ease both">
      <!-- Substituir pelo <img> real quando disponível -->
      <span>[Foto]</span>
    </div>

    <!-- Nome -->
    <h1 class="name link-item" style="animation: fadeUp 0.5s 0.06s ease both">Ana Ester</h1>
    <p class="tagline link-item" style="animation: fadeUp 0.5s 0.12s ease both">
      Nutricionista · Poços de Caldas
    </p>

    <!-- Links -->
    <nav class="links-col" aria-label="Links principais">
      {links.map((link, i) => (
        <a
          href={link.href}
          id={link.id}
          data-tracking={link.tracking}
          data-section="links"
          class={`link-btn ${link.variant} link-item`}
          style={`animation: fadeUp 0.5s ${0.18 + i * 0.08}s ease both`}
          {...link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
        >
          {link.label}
        </a>
      ))}
    </nav>

    <!-- Redes sociais -->
    <div class="socials link-item" style={`animation: fadeUp 0.5s ${0.18 + links.length * 0.08}s ease both`}>
      <a href="https://www.instagram.com/nutri.anaester" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
        </svg>
      </a>
      <a href="https://www.tiktok.com/@nutri.anaester" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="TikTok">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.2 8.2 0 0 0 4.78 1.52V6.83a4.85 4.85 0 0 1-1.01-.14z"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/share/18c1xh9UEU/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
    </div>

  </main>

  <footer>© {currentYear} Ana Ester Messias Lima Martins</footer>

  <script is:inline>
    // GTM — view_links
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'view_links', page_type: 'links_page' });

    // Rastreamento de cliques
    document.addEventListener('click', function(e) {
      var el = e.target.closest('[data-tracking]');
      if (!el) return;
      var action = el.getAttribute('data-tracking');
      var section = el.getAttribute('data-section');
      window.dataLayer.push({ event: 'link_click', click_action: action, click_section: section });
      if (action && action.includes('whatsapp')) {
        window.dataLayer.push({ event: 'contato_wpp', click_action: action, click_section: section });
      }
    });
  </script>
</body>
</html>
```

---

## src/pages/404.astro

```astro
---
const WA_LINK = 'https://wa.me/5535984566323?text=Ol%C3%A1!%20Vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20funciona%20o%20seu%20acompanhamento%20nutricional.';
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, follow" />
  <title>Página não encontrada | Ana Ester Nutricionista</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'DM Sans', sans-serif;
      background: #f7f4f0;
      color: #1d1d1c;
      min-height: 100vh;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 40px 24px;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      overflow: hidden;
    }
    .bg-number {
      position: absolute;
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(200px, 40vw, 360px);
      font-weight: 300;
      color: rgba(67,111,62,0.06);
      line-height: 1;
      pointer-events: none;
      user-select: none;
      z-index: 0;
    }
    .content { position: relative; z-index: 1; max-width: 420px; }
    .label {
      font-size: 0.72rem; font-weight: 500; letter-spacing: 0.16em;
      text-transform: uppercase; color: #436f3e; margin-bottom: 16px;
    }
    h1 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 400;
      line-height: 1.2; margin-bottom: 14px;
    }
    p { font-size: 0.95rem; color: #535353; line-height: 1.7; margin-bottom: 32px; }
    .btn-group { display: flex; flex-direction: column; gap: 12px; align-items: center; }
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500;
      padding: 14px 28px; border-radius: 6px; text-decoration: none;
      transition: transform 0.2s, background 0.2s;
    }
    .btn:focus-visible { outline: 2px solid #436f3e; outline-offset: 2px; }
    .btn:hover { transform: translateY(-2px); }
    .btn-primary { background: #436f3e; color: #fff; }
    .btn-primary:hover { background: #2f5129; }
    .btn-ghost { border: 1px solid #e5dfd6; color: #535353; background: #fff; }
    .btn-ghost:hover { border-color: #436f3e; color: #436f3e; }
    @media (prefers-reduced-motion: reduce) { .bg-number { animation: none; } }
  </style>
</head>
<body>

  <p class="bg-number" id="bg-404" aria-hidden="true">404</p>

  <div class="content">
    <p class="label">Oops</p>
    <h1>Essa página saiu do plano alimentar</h1>
    <p>A página que você buscou não existe mais ou foi movida. Mas estou aqui para ajudar.</p>
    <div class="btn-group">
      <a
        href="/"
        class="btn btn-primary"
        id="btn-404-home"
        data-tracking="click-404-home"
      >
        Voltar ao início
      </a>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-ghost"
        id="btn-404-whatsapp"
        data-tracking="click-404-whatsapp"
      >
        Falar no WhatsApp
      </a>
    </div>
  </div>

  <script is:inline>
    (function () {
      var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;
      var el = document.getElementById('bg-404');
      if (!el) return;
      var y = 0; var dir = -1;
      var start = null;
      function animate(ts) {
        if (!start) start = ts;
        var elapsed = (ts - start) / 1000;
        y = Math.sin(elapsed * (Math.PI / 4)) * 10;
        el.style.transform = 'translateY(' + y + 'px)';
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    })();
  </script>
</body>
</html>
```

---

## src/pages/politica-de-privacidade.astro

```astro
---
const currentYear = new Date().getFullYear();
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, follow" />
  <title>Política de Privacidade | Ana Ester Nutricionista</title>
  <meta name="description" content="Política de privacidade de Ana Ester Nutricionista." />
  <link rel="canonical" href="https://anaesternutricionista.com.br/politica-de-privacidade" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'DM Sans', sans-serif; font-weight: 300; background: #fff; color: #1d1d1c; -webkit-font-smoothing: antialiased; }
    header { border-bottom: 1px solid #e5dfd6; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; }
    header .logo { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.2rem; text-decoration: none; color: #1d1d1c; }
    header .back { font-size: 0.82rem; color: #535353; text-decoration: none; display: flex; align-items: center; gap: 4px; }
    header .back:hover { color: #436f3e; }
    main { max-width: 700px; margin: 0 auto; padding: 48px 24px 80px; }
    h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2rem; font-weight: 400; margin-bottom: 8px; }
    .updated { font-size: 0.8rem; color: #8a8a8a; margin-bottom: 40px; }
    h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 400; margin-top: 36px; margin-bottom: 12px; color: #436f3e; }
    p, li { font-size: 17px; line-height: 1.8; color: #535353; margin-bottom: 12px; }
    ul { padding-left: 20px; margin-bottom: 12px; }
    a { color: #436f3e; }
    footer { text-align: center; padding: 24px; border-top: 1px solid #e5dfd6; font-size: 0.75rem; color: #8a8a8a; }
  </style>
</head>
<body>
  <header>
    <a href="/" class="logo">Ana Ester</a>
    <a href="/" class="back">← Voltar ao site</a>
  </header>

  <main>
    <h1>Política de Privacidade</h1>
    <p class="updated">Última atualização: maio de 2026</p>

    <p>Esta Política de Privacidade descreve como Ana Ester Messias Lima Martins (CNPJ 55.448.142/0001-08), responsável pelo site <strong>anaesternutricionista.com.br</strong>, coleta, usa e protege as informações dos usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>

    <h2>1. Dados coletados</h2>
    <p>Coletamos os seguintes dados ao navegar neste site:</p>
    <ul>
      <li>Dados de navegação (páginas acessadas, tempo de visita, dispositivo) via Google Analytics, quando o usuário consente.</li>
      <li>Dados fornecidos voluntariamente ao clicar em links de contato (WhatsApp), que são processados diretamente pelo WhatsApp.</li>
    </ul>
    <p>Não coletamos dados sensíveis como CPF, dados bancários ou informações de saúde diretamente por este site.</p>

    <h2>2. Finalidade do uso</h2>
    <ul>
      <li>Melhorar a experiência de navegação com base em dados agregados de acesso.</li>
      <li>Mensurar o desempenho de campanhas de marketing digital (Google Ads).</li>
      <li>Responder a dúvidas e solicitações de contato enviadas voluntariamente.</li>
    </ul>

    <h2>3. Base legal</h2>
    <p>O tratamento dos dados é baseado no consentimento do usuário (Art. 7º, I da LGPD), que pode ser retirado a qualquer momento por meio do nosso aviso de cookies ou pelo contato informado abaixo.</p>

    <h2>4. Cookies</h2>
    <p>Utilizamos cookies de análise e publicidade (Google Analytics e Google Ads), ativados apenas após o consentimento expresso do usuário. Cookies estritamente necessários para o funcionamento do site são sempre ativos.</p>
    <p>Para gerenciar suas preferências de cookies, utilize o banner exibido na primeira visita.</p>

    <h2>5. Compartilhamento de dados</h2>
    <p>Seus dados podem ser compartilhados com:</p>
    <ul>
      <li>Google LLC (Analytics e Ads), conforme os termos de uso destes serviços.</li>
      <li>Vercel Inc. (infraestrutura de hospedagem).</li>
    </ul>
    <p>Não vendemos nem cedemos seus dados a terceiros para fins comerciais.</p>

    <h2>6. Seus direitos</h2>
    <p>De acordo com a LGPD, você tem direito a:</p>
    <ul>
      <li>Confirmar a existência de tratamento de seus dados.</li>
      <li>Acessar, corrigir ou solicitar a exclusão dos seus dados.</li>
      <li>Revogar o consentimento a qualquer momento.</li>
      <li>Solicitar a portabilidade dos dados.</li>
    </ul>
    <p>Para exercer seus direitos, entre em contato: <a href="mailto:anaesternutricionista@gmail.com">anaesternutricionista@gmail.com</a></p>

    <h2>7. Segurança</h2>
    <p>Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra acesso não autorizado, perda ou destruição.</p>

    <h2>8. Contato</h2>
    <p>Ana Ester Messias Lima Martins<br />CNPJ: 55.448.142/0001-08<br />E-mail: <a href="mailto:anaesternutricionista@gmail.com">anaesternutricionista@gmail.com</a><br />WhatsApp: (35) 98456-6323</p>
  </main>

  <footer>© {currentYear} Ana Ester Messias Lima Martins · CNPJ 55.448.142/0001-08</footer>
</body>
</html>
```

---

## src/pages/termos-de-uso.astro

```astro
---
const currentYear = new Date().getFullYear();
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, follow" />
  <title>Termos de Uso | Ana Ester Nutricionista</title>
  <link rel="canonical" href="https://anaesternutricionista.com.br/termos-de-uso" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'DM Sans', sans-serif; font-weight: 300; background: #fff; color: #1d1d1c; -webkit-font-smoothing: antialiased; }
    header { border-bottom: 1px solid #e5dfd6; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; }
    header .logo { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.2rem; text-decoration: none; color: #1d1d1c; }
    header .back { font-size: 0.82rem; color: #535353; text-decoration: none; }
    header .back:hover { color: #436f3e; }
    main { max-width: 700px; margin: 0 auto; padding: 48px 24px 80px; }
    h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2rem; font-weight: 400; margin-bottom: 8px; }
    .updated { font-size: 0.8rem; color: #8a8a8a; margin-bottom: 40px; }
    h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 400; margin-top: 36px; margin-bottom: 12px; color: #436f3e; }
    p, li { font-size: 17px; line-height: 1.8; color: #535353; margin-bottom: 12px; }
    ul { padding-left: 20px; margin-bottom: 12px; }
    a { color: #436f3e; }
    footer { text-align: center; padding: 24px; border-top: 1px solid #e5dfd6; font-size: 0.75rem; color: #8a8a8a; }
  </style>
</head>
<body>
  <header>
    <a href="/" class="logo">Ana Ester</a>
    <a href="/" class="back">← Voltar ao site</a>
  </header>

  <main>
    <h1>Termos de Uso</h1>
    <p class="updated">Última atualização: maio de 2026</p>

    <p>Ao acessar o site <strong>anaesternutricionista.com.br</strong>, você concorda com os presentes Termos de Uso. Se não concordar, por favor não utilize o site.</p>

    <h2>1. Finalidade do site</h2>
    <p>Este site tem finalidade exclusivamente informativa e de captação de leads para serviços de acompanhamento nutricional prestados por Ana Ester Messias Lima Martins, nutricionista devidamente registrada.</p>

    <h2>2. Informações e conteúdo</h2>
    <p>O conteúdo publicado neste site não substitui consulta nutricional presencial ou online. Qualquer orientação específica de saúde deve ser obtida com um profissional habilitado.</p>

    <h2>3. Propriedade intelectual</h2>
    <p>Todos os textos, imagens, logotipos e demais elementos deste site são de propriedade de Ana Ester Messias Lima Martins ou de terceiros que licenciaram seu uso. É proibida a reprodução sem autorização prévia e por escrito.</p>

    <h2>4. Links externos</h2>
    <p>Este site pode conter links para plataformas de terceiros (Instagram, WhatsApp, Google). Não nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade dessas plataformas.</p>

    <h2>5. Limitação de responsabilidade</h2>
    <p>Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso deste site.</p>

    <h2>6. Alterações</h2>
    <p>Estes Termos podem ser atualizados a qualquer momento. A versão vigente será sempre a disponível nesta página, com a data de atualização indicada.</p>

    <h2>7. Contato</h2>
    <p>Ana Ester Messias Lima Martins<br />CNPJ: 55.448.142/0001-08<br />E-mail: <a href="mailto:anaesternutricionista@gmail.com">anaesternutricionista@gmail.com</a></p>
  </main>

  <footer>© {currentYear} Ana Ester Messias Lima Martins · CNPJ 55.448.142/0001-08</footer>
</body>
</html>
```

---

## INSTRUÇÕES DE DEPLOY — VERCEL

```bash
# 1. Build local antes de qualquer deploy
npm run build
# Deve finalizar sem erros. Dist gerada em dist/

# 2. Conectar ao repositório remoto (GitHub/GitLab)
git remote add origin https://github.com/adsgator/ana-ester-nutricionista.git
git push -u origin dev

# 3. Importar no Vercel
# → vercel.com → Add New Project → importar repositório
# → Framework Preset: Astro
# → Build Command: npm run build
# → Output Directory: dist

# 4. Variáveis de ambiente no Vercel
# Settings → Environment Variables → adicionar:
# GTM_ID=GTM-T3ZHXBH7
# WHATSAPP_NUMBER=5535984566323

# 5. Domínio
# Settings → Domains → adicionar anaesternutricionista.com.br
# Configurar DNS no registrador: CNAME www → cname.vercel-dns.com
# A record @ → 76.76.21.21

# 6. Branches
# main  → produção (deploy automático)
# dev   → preview (deploy automático a cada push)
```

---

## CHECKLIST DE GO-LIVE

### Ações humanas obrigatórias antes de publicar

```
[ ] Substituir src/assets/images/hero-principal.webp pela foto real (recomendado: 840×1120px)
[ ] Substituir src/assets/images/profissional-retrato.webp pela foto real (680×850px)
[ ] Substituir src/assets/images/avatar-links.webp pela foto real (192×192px)
[ ] Criar og-image.webp 1200×630px e mover para public/
[ ] Criar favicon.svg com identidade visual da Ana Ester
[ ] Criar logo SVG e inserir no Header.astro e Footer.astro
[ ] Extrair textos reais das 16 avaliações do Google Business e inserir em AvaliacoesGoogle.astro
[ ] Confirmar link WhatsApp funcionando no dispositivo móvel
[ ] Inserir GTM_ID no .env: GTM-T3ZHXBH7
[ ] Testar og-image em https://opengraph.xyz
[ ] Configurar conversões no Google Ads com o gestor de tráfego
[ ] Validar Schema.org em https://validator.schema.org
[ ] Verificar Lighthouse mobile ≥ 90 performance, ≥ 90 acessibilidade
[ ] Testar menu mobile em 375px (sem overflow horizontal)
[ ] Aprovar copy com a cliente antes do go-live
```

### Verificações técnicas finais

```
[ ] npm run build sem erros
[ ] Nenhum console.log em produção
[ ] GTM snippet no <head> E no <body> (noscript)
[ ] Evento view_content disparando na landing page (verificar no GTM Preview)
[ ] Evento view_links disparando na /links (verificar no GTM Preview)
[ ] Evento contato_wpp disparando ao clicar em qualquer botão WhatsApp
[ ] CookieBanner aparecendo na primeira visita
[ ] Consent Mode v2 atualizando após aceitar cookies
[ ] WhatsApp flutuante aparecendo após rolar além do hero
[ ] FAQ accordion abrindo e fechando corretamente
[ ] Smooth scroll Lenis funcionando
[ ] /404 personalizada funcionando (acesse /pagina-que-nao-existe)
[ ] /links funcionando e responsivo em 375px
[ ] /politica-de-privacidade acessível via rodapé
[ ] /termos-de-uso acessível via rodapé
[ ] Vercel Analytics ativo no dashboard
[ ] Speed Insights ativo no dashboard
[ ] sitemap-index.xml gerado (https://anaesternutricionista.com.br/sitemap-index.xml)
[ ] robots.txt acessível (https://anaesternutricionista.com.br/robots.txt)
```
