/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores extraídos del :root y del bundle-color "default" del index original
        'lawu-background': '#F4E8DA', // El crema de fondo suave
        'lawu-dark': '#222222',       // El negro/café muy oscuro para textos
        'lawu-olive': '#80713F',      // El verde oliva de los botones y links
        'lawu-brown': '#926A41',      // El café medio (color grano)
        'lawu-soft-brown': '#B9A976', // El café claro para hovers
      },
      fontFamily: {
        // Fuentes exactas de la tienda real
        'main': ['Inter', 'sans-serif'],
        'secondary': ['Poppins', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'], // Usada en el nombre de la tienda
        'buttons': ['Inter Tight', 'sans-serif'],
      }
    },
  },
  plugins: [],
};