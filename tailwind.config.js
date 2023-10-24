const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF6347",
        primary: "#FF69b4", // Can always use CSS variables too e.g. "var(--color-primary)",
        secondary: "#333333",
        brand: "#243c5a",
      },
      gridTemplateColumns: {
        sidebar: "300px auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
      }, 
      gridTemplateRows: {
        header: "64px auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
      borderRadius: {
        borderMSg: '25px',
      },
      width:{
        fit: 'fit-content'
      },
      maxWidth:{
        '80p': '80%'
      },
      minHeight:{
        'chat': 'calc(100vh - 7rem)'
      },
      backgroundImage: {
        'food-pattern': "url('../public/image/patternFood.svg')"
      }
    },
  },
  plugins: [nextui],
}
