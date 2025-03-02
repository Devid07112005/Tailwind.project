 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["*.html","./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Poppins", "serif"],
      },
      backgroundImage:{
        mybg:[
          "linear-gradient(90deg, rgba(0,0,0,0.321187850140056) 0%, rgba(255,255,255,0.5480786064425771) 0%, rgba(0,0,0,0.5508797268907564) 86%)"
        ]
      },
      backgroundColor: {
        darkBlue: "rgb(11,24,60)",
        grray: "rgb(84,93,102)",
      },
      height: {
        div:"635px",
        sec1:"15%",
        sec3:"45%",
        sec2:"40%",
      }
    },
  },
  plugins: [],
}
