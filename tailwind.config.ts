import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['var(--font-fredoka)'],
        'comfortaa': ['var(--font-comfortaa)'],
        'inter': ['var(--font-inter)'],
      },
      colors: {
        primary: '#8B4513', // Warm chocolate brown - matching logo
        secondary: '#D2B48C', // Tan/beige - matching logo cream
        accent: '#F5E6D3', // Light cream - background accent
        waffle: {
          brown: '#8B4513', // Dark chocolate brown
          tan: '#D2B48C', // Warm tan/beige
          cream: '#F5E6D3', // Light cream
          golden: '#DEB887', // Burlywood golden
          dark: '#654321', // Darker brown for accents
        },
      },
    },
  },
  plugins: [],
};

export default config; 