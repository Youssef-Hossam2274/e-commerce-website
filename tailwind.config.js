/** @type {import('tailwindcss').Config} */
import heroBannerImg from "./src/img/hero/hero-1.png";

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "intro-bg": "url('./public/hero-1.png')",
        "seperator-bg": "url('./public/3.jpg')",
      },
    },
  },
  plugins: [],
});
