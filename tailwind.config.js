/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: "1080px",
      xl: "1580px",
    },
    extend: {
      fontFamily: {
        bangla: ["Hind Siliguri", "Poppins", "Roboto", "sans-serif"],
        cursive: ["Meie Script", "cursive"],
      },
      colors: {
        "primary-text": "rgba(13, 21, 48, 0.8)",
        backdrop: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
