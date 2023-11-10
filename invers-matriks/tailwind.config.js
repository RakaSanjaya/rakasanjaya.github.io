/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["Gabarito", "Arial"],
      },
      colors: {
        blue: "#00BCE1",
        white: "#fafafa",
        grey: "#111111",
        greylight: "#1D1D1D",
        greylighten: "#323232",
        dark: "#09090b",
      },
    },
  },
  plugins: [],
};
