/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "Arial"],
        signika: ["Signika Negative", "Arial", "sans-serif"],
        gabarito: ["Gabarito", "Arial"],
      },
      colors: {
        blue: "#00BCE1",
        white: "#fafafa",
        whiteDeep: "#cbd5e1",
        grey: "#111111",
        greylight: "#1D1D1D",
        greylighten: "#323232",
        dark: "#060606",
      },
    },
  },
  plugins: [],
};
