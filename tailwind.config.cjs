/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      },
      animation: {
        'random-walk-fast': 'randomwalk 8s ease infinite',
      },
      keyframes: {
        randomwalk: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '33%': { transform: 'translate(30%,5%)' },
          '66%': { transform: 'translate(14%,-16%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(at center center, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(at bottom , var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
