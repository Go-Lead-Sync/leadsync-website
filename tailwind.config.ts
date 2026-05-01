import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* LS brand tokens */
        'ls-purple': '#7C3AED',
        'ls-pink':   '#EC4899',
        'ls-teal':   '#2DD4BF',
        'ls-bg':     '#07111f',
        'ls-bg-2':   '#0a1223',
        'ls-bg-3':   '#10192d',
        /* Existing palette */
        primary: {
          DEFAULT: '#7c3aed',
          dark:    '#6d28d9',
          light:   '#a78bfa',
        },
        secondary: {
          DEFAULT: '#ec4899',
          dark:    '#db2777',
        },
        accent: '#2dd4bf',
        ink: {
          DEFAULT: '#eef2ff',
          muted:   '#b3c0d9',
          subtle:  '#8190ad',
        },
        surface: {
          bg:     '#07111f',
          panel:  'rgba(7,15,28,0.92)',
          card:   'rgba(10,18,32,0.82)',
          canvas: 'rgba(5,8,22,0.6)',
          input:  'rgba(15,23,42,0.6)',
        },
        hairline: {
          DEFAULT: 'rgba(148,163,184,0.16)',
          strong:  'rgba(148,163,184,0.28)',
        },
        border:     'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
        'gradient-dark':    'linear-gradient(180deg, #050816 0%, #0a1223 50%, #10192d 100%)',
      },
      boxShadow: {
        'glow':        '0 4px 16px rgba(124,58,237,0.40)',
        'glow-lg':     '0 0 40px rgba(124,58,237,0.30)',
        'glow-primary':'0 4px 16px rgba(124,58,237,0.40)',
        'shadow-sm':   '0 4px 16px rgba(2,6,23,0.30)',
        'shadow-md':   '0 8px 32px rgba(2,6,23,0.40)',
        'shadow-lg':   '0 24px 80px rgba(2,6,23,0.42)',
        'shadow-nav':  '0 18px 50px rgba(2,6,23,0.35)',
        'card-navy':   '0 24px 80px rgba(2,6,23,0.42)',
      },
      borderRadius: {
        'ls-sm':   '7px',
        'ls-md':   '10px',
        'ls-lg':   '14px',
        'ls-xl':   '20px',
        'ls-pill': '9999px',
      },
      letterSpacing: {
        brand: '-0.02em',
      },
    },
  },
  plugins: [],
};
export default config;
