/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosa': '#F26D85',
        'morado-oscuro': '#1C1226',
        'lila': '#CFC5D9',
        'morado': '#2A1A40',
        'rosado-opaco': '#F26B6B'
      },

      fontFamily: {
        'roboto': "'Roboto', sans-serif"
      },

      backgroundImage: {        
        "inicio": "url('../assets/image_1.jpg')",
        "ultima": "url('../assets/image_8.jpg')",
      }
    },
  },
  plugins: [],
}