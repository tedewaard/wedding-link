/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'vibes': ['Great Vibes', 'cursive']
      },
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}

