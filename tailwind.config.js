/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkGreen: "#020F07",
      lightGreen: "#66FFAC",
      gray: "#D9D9D9",
      white: "#ffffff",
      yellow: "#F1C40F",
      transparent: "#0000"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      heptaSlab: ["HeptaSlab", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
