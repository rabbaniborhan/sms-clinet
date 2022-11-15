{
  import("tailwindcss").Config;
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1580px",
    },
    extend: {
      fontFamily: {
        bangla: ["Kalpurush", "sans-serif"],
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
