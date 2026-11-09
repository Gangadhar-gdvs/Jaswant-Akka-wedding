/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF6EC',
        cream: '#F4E9D4',
        sand: '#E9D7B6',
        gold: '#C79A3B',
        goldlight: '#E3C277',
        maroon: '#6E1423',
        maroondark: '#4A0D18',
        brick: '#9B2335',
        ink: '#2B1A14',
        leaf: '#5B6B3A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
        teluguserif: ['"Noto Serif Telugu"', '"Noto Sans Telugu"', 'serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        spinslow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        spinslow: 'spinslow 60s linear infinite',
      },
    },
  },
  plugins: [],
}
