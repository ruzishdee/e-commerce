/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#292D32",
        secondary : "#3A3A3A",
        titleColor : "#1B5A7D",
        common : "#003F62",
        btnColor : "#EDA415",
      }
    },
  },
  plugins: [],
}
