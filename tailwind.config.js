/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "URL('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

