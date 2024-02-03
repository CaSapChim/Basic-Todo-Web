/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        popupModal: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "100", transform: "scale(1)" },
        },
      },
      animation: {
        popupModal: "popupModal .2s linear",
      },
    },
  },
  plugins: [],
}
