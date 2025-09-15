/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mainGreen: "#47AA52",
        mainGray: "#374151",
        mainRed: "#861d1d",
        mainBlue: "#1d1d86",
      },
    },
  },
  plugins: [],
};
