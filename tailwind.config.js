/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["pastel", "dark", "coffee"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      exo: ["eudoxus", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
