/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1C1C1C',
        'white': '#FAFAFF',
        'background': '#ECEBE4'
      }
    },
  },
  plugins: [require("daisyui")],
}

