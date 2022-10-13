/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1b1b1b",
        white: "#ffffff",
        yellow: "#f7c51e",
      },
    },
    plugins: [],
  },
};
