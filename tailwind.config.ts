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
        primary: {
          DEFAULT: '#7c3aed',
          dark: '#6d28d9',
          light: '#a78bfa',
        },
        secondary: {
          DEFAULT: '#ec4899',
          dark: '#db2777',
        },
        accent: '#2dd4bf',
        ink: {
          DEFAULT: '#eef2ff',
          muted: '#b3c0d9',
          subtle: '#8190ad',
        },
        surface: {
          bg: '#07111f',
          panel: 'rgba(7,15,28,0.92)',
          card: 'rgba(10,18,32,0.82)',
          canvas: 'rgba(5,8,22,0.6)',
          input: 'rgba(15,23,42,0.6)',
        },
        hairline: {
          DEFAULT: 'rgba(148,163,184,0.16)',
          strong: 'rgba(148,163,184,0.28)',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
        'gradient-dark': 'linear-gradient(180deg, #050816 0%, #0a1223 50%, #10192d 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(124,58,237,0.35)',
        'glow-lg': '0 20px 60px rgba(124,58,237,0.35)',
        'glow-primary': '0 10px 30px rgba(124,58,237,0.35), 0 0 0 1px rgba(124,58,237,0.25)',
        'card-navy': '0 24px 80px rgba(2,6,23,0.42)',
      },
      letterSpacing: {
        brand: '-0.02em',
      },
    },
  },
  plugins: [],
};
export default config;
