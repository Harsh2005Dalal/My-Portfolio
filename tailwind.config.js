// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  safelist: [
    {
      pattern: /(bg|text|border|from|to|via)-(royal|lavender|storm|indigo|primary|midnight|navy|aqua|mint|fuchsia|orange|sand|coral)/,
      variants: ['hover', 'focus', 'active', 'sm', 'md', 'lg', 'xl', '2xl', ''], // include default
    },
    {
      pattern: /(px|py|mt|mb|pt|pb|pl|pr)-(15|30)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl', ''],
    },
  ],

  theme: {
    extend: {
      spacing: {
        15: '3.75rem', // 60px
        30: '7.5rem',  // 120px
      },

      colors: {
        primary: '#030412',
        midnight: '#06091f',
        navy: '#161a31',
        indigo: '#1f1e39',
        storm: '#282b4b',
        aqua: '#33c2cc',
        mint: '#57db96',
        royal: '#5c33cc',
        lavender: '#7a57db',
        fuchsia: '#ca2f8c',
        orange: '#cc6033',
        sand: '#d6995c',
        coral: '#ea4884',
      },

      keyframes: {
        orbit: {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))',
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },

      animation: {
        orbit: 'orbit 50s linear infinite',
        marquee: 'marquee 50s linear infinite',
        'marquee-vertical': 'marquee-vertical 50s linear infinite',
      },
    },
  },

  plugins: [],
};
