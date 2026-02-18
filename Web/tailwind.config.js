/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', "sans-serif"],
        heading: ['"Clash Grotesk"', '"Manrope"', "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#D46A4C",
          dark: "#2A2A2A",
          green: "#829175",
          cream: "#FDFCF8",
          beige: "#FAF9F6",
          surface: "#FFFFFF",
          lightdark: "#f6f4ef",
        },
      },
    },
  },
  plugins: [],
};
