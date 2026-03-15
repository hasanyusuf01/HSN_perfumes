/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0f0f0f',
        cream:    '#f7f1e8',
        gold:     '#d4af37',
        'gold-light': '#e8c84a',
        'gold-dark':  '#b8942a',
        ivory:    '#faf6ef',
        'charcoal': '#2c2c2c',
        'warm-gray': '#6b6560',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Jost"', 'system-ui', 'sans-serif'],
        accent:  ['"Cinzel"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #e8c84a 50%, #b8942a 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease forwards',
        'fade-in':    'fadeIn 1s ease forwards',
        'shimmer':    'shimmer 2.5s infinite',
        'float':      'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' },
          '50%':      { boxShadow: '0 0 0 15px rgba(212,175,55,0)' },
        },
      },
    },
  },
  plugins: [],
};
