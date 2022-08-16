/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1080px",
      // => @media (min-width: 1024px) { ... }

      xl: "1580px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        bangla: ["Hind Siliguri", "Poppins", "Roboto", "sans-serif"],
        cursive: ["Meie Script", "cursive"],
      },
      colors: {
        "primary-text": "rgba(13, 21, 48, 0.8)",
      },
    },
  },
  plugins: [],
};
