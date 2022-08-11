/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "report-card": ["nk-monotype-corsiva-italic", "sans-serif"],
      },
      colors: {
        "primary-text": "rgba(13, 21, 48, 0.8)",
      },
    },
  },
  plugins: [],
};
