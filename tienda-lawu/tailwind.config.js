/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lawu-olive': '#8b7e51',
        'lawu-cream': '#fdf9f3',
        'lawu-sand': '#f7f3ed',
        'lawu-dark': '#4a4a4a',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'], // O la que estés usando para los títulos
      }
    },
  },
  plugins: [],
};