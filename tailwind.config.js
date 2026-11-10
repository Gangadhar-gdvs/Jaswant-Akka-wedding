/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Light page backgrounds ──
        ivory:       '#FBF6EC',
        parchment:   '#FDF3E3',   // turmeric-washed paper (Theme A bg)
        cream:       '#F4E9D4',
        sand:        '#E9D7B6',
        jasminebg:   '#EEF4FB',   // jasmine-white (Theme B bg)

        // ── Gold (both themes) ──
        gold:        '#C79A3B',
        goldlight:   '#E3C277',

        // ── Theme A — Saffron Temple ──
        saffron:     '#D4722A',   // kumkum / marigold orange
        saffrondk:   '#8B3A0F',   // deep kumkum
        sandal:      '#2C1A0E',   // sandalwood dark (deep sections)
        silk:        '#C0527A',   // Kanchipuram silk pink
        bananaleaf:  '#3D6B35',   // banana leaf green
        kumkum:      '#B5321E',   // kumkum red

        // ── Theme B — Jasmine Night ──
        sapphire:    '#0A1628',   // midnight sapphire (deep sections)
        azure:       '#4A8FB5',   // silver blue primary
        peacock:     '#1B7A6E',   // peacock teal
        indigo:      '#7B68C8',   // periwinkle silk

        // ── Legacy (kept for gradual migration) ──
        maroon:      '#6E1423',
        maroondark:  '#4A0D18',
        brick:       '#9B2335',
        ink:         '#2B1A14',
        leaf:        '#5B6B3A',
      },
      fontFamily: {
        serif:       ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:        ['"Jost"', 'system-ui', 'sans-serif'],
        telugu:      ['"Noto Sans Telugu"', 'sans-serif'],
        teluguserif: ['"Noto Serif Telugu"', '"Noto Sans Telugu"', 'serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1'   },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)'   },
          '50%':      { transform: 'translateY(-8px)' },
        },
        spinslow: {
          from: { transform: 'rotate(0deg)'   },
          to:   { transform: 'rotate(360deg)' },
        },
        spinrev: {
          from: { transform: 'rotate(0deg)'    },
          to:   { transform: 'rotate(-360deg)' },
        },
        // Real flame flicker for diyas
        flicker: {
          '0%, 100%': { transform: 'scaleY(1)    scaleX(1)',    opacity: '1'    },
          '25%':      { transform: 'scaleY(1.06) scaleX(0.94)', opacity: '0.88' },
          '55%':      { transform: 'scaleY(0.94) scaleX(1.04)', opacity: '0.92' },
          '80%':      { transform: 'scaleY(1.09) scaleX(0.91)', opacity: '0.95' },
        },
        // Falling jasmine / marigold petals
        petalfall: {
          '0%':   { transform: 'translateY(-20px) rotate(0deg)',    opacity: '0' },
          '10%':  { opacity: '0.8' },
          '90%':  { opacity: '0.4' },
          '100%': { transform: 'translateY(100vh) rotate(540deg)',  opacity: '0' },
        },
        // Kolam line draw-on (SVG stroke animation)
        drawstroke: {
          from: { strokeDashoffset: '800' },
          to:   { strokeDashoffset: '0'   },
        },
        // Gentle glow pulse for temple lamps
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px 2px rgba(199,154,59,0.3)'  },
          '50%':      { boxShadow: '0 0 20px 6px rgba(199,154,59,0.6)' },
        },
      },
      animation: {
        shimmer:    'shimmer 3s ease-in-out infinite',
        floaty:     'floaty 6s ease-in-out infinite',
        spinslow:   'spinslow 60s linear infinite',
        spinrev:    'spinrev 80s linear infinite',
        flicker:    'flicker 2.3s ease-in-out infinite',
        flicker2:   'flicker 2.9s ease-in-out infinite 0.4s',
        flicker3:   'flicker 2.1s ease-in-out infinite 0.9s',
        petalfall:  'petalfall 7s linear infinite',
        drawstroke: 'drawstroke 3s ease forwards',
        glow:       'glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
