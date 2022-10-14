/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Montserrat", ...defaultTheme.fontFamily.sans],
      body: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        black: "#1b1b1b",
        white: "#ffffff",
        yellow: "#f7c51e",
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/line-clamp"),
    ],
  },
};
