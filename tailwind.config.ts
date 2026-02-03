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
          DEFAULT: '#a855f7',
          dark: '#ec4899',
          light: '#c084fc',
        },
        secondary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        accent: '#06b6d4',
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(168, 85, 247, 0.3)',
        'glow-lg': '0 20px 60px rgba(168, 85, 247, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
