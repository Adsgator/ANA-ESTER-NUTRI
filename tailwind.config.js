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
