/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["cmyk", "dark", "coffee"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      exo: ["eudoxus", "sans-serif"],
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-no-scrollbar")],
};
