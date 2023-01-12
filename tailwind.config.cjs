/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'default-blue': '#382AE1',
      'header-blue': '#1F2E55',
      'subtext-blue': '#717FA6',
      'lightgray': '#F7F9FF',
      'white': '#FFFFFF',
      'hover': '#766CF1',
      'hover-secondary': '#1F2E55'
    },
    fontFamily: {
      'redhatdisplay': ['Red Hat Display', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-illustration': "url('./illustration-hero.svg')",
      },
      boxShadow: {
        'button-shadow': '0px 20px 20px rgba(56, 42, 225, 0.190291)'
      }
    },
  },
  plugins: [],
}
