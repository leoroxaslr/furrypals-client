/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    display: ["Mulish"],
  },
  daisyui: {
    themes: ["cupcake"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
