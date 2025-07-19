// filepath: c:\Users\HP\OneDrive\Desktop\MERNproj\OnionOpinion\frontend\tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'onion': '#a855f7',        // Purple color for primary actions
        'onion-dark': '#7e22ce',  // Darker purple for headers/emphasis
        'onion-light': '#f3e8ff', // Light purple for backgrounds
      },
    },
  },
  plugins: [],
}
