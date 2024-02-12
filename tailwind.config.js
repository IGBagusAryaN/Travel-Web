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
      },
      dropShadow : {
        "button" : ['0px 0px 0px 0px rgba(0, 0, 0, 0.10)', 
        '0px 5px 11px 0px rgba(0, 0, 0, 0.10)',
        '0px 20px 20px 0px rgba(0, 0, 0, 0.09)',
        '0px 45px 27px 0px rgba(0, 0, 0, 0.05)', 
        '0px 81px 32px 0px rgba(0, 0, 0, 0.01)', 
        '0px 126px 35px 0px rgba(0, 0, 0, 0.00)'
        ]
      }
    },
  },
  plugins: [],
}

