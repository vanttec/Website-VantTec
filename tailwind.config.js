/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        leagueSpartan: ['League Spartan', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('daisyui'),
    nextui()
  ],
};

export default config;