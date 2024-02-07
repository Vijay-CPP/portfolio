/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['Roboto Mono', "monospace"]
      },
      backgroundImage: {
        'home-bg': "url('./src/assets/bg.jpg')",
        'no-bg': "url('')",
      }
    },
  },
  darkMode: "class",
  plugins: [],
}