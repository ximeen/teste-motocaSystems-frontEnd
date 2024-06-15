/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          500: '#8C57FF',
          800: '#41365C',
          900: '#312D4B',
          950: '#2A233C',
        },
        slate: {
          200: '#E7E3FC',
          300: '#CAC9CD',
        },
        blue: {
          400: '#3BADFB',
          500: '#0998FA',
        },
        green: {
          500: '#56CA00',
          900: '#354546',
        },
        red: {
          500: '#FF4C51',
          900: '#55304C',
        },
        yellow: {
          500: '#FFB400',
          900: '#544146',
        },
      },
      fontFamily:{
        'sans': ["Poppins", "sans-serif", "ui-sans-serif"]
      }
    },
  },
  plugins: [],
}

