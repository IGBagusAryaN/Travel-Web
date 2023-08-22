/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter" : ['inter'],
        "poppins" : ['poppins']
      },
      colors : {
        "biru" : '#5160E2',
        "abu"  : '#191825'
      }
    },
  },
  plugins: [],
}

