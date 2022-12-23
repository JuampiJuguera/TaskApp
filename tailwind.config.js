/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      abel: ["abel", "sans-serif"],
    },
    colors: {
      primary: "#f8f8f8",
      secondary: "#b4d2e7",
      tertiary: "#d3e0e9",
      dark: "rgba(0, 0, 0, 0.6)",
    },
    extend: {
      fontSize: {
        "10xl": "3.25rem",
        "15xl": "10rem",
        "19xl": "15rem",
      },
      height: {
        12: "12%",
      },
    },
  },
  plugins: [],
};
