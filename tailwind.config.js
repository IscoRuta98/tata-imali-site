/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widescreen' : { 'raw': '(min-aspect-ration: 3/2)' },
        'tailscreen' : { 'raw': '(min-aspect-ration: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'},
        },
      },
      height: {
        '90vh': '90vh',
      },
      minHeight: {
        '90vh': '90vh',
        '4':'4rem',
        '8':'8rem',
        '7':'7rem'
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      colors: {
        'custom_lime': '#bef264',
      },
    },
  },
  plugins: [],
}

