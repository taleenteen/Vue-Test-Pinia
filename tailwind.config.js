/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Kanit", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      colors: {
        grape: "rgba(114, 35, 204)",
      },
    },
  },
  plugins: [],
};
