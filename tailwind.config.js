/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      xs:"377px",
      sm:"768px",
      md:"960px",
      lg:"1104px"
    },
    extend: {
      fontFamily:{
        Rajdhani :['Rajdhani', 'sans-serif'],
        Saira :['Saira', 'sans-serif']
      },
      colors:{
        linkColor:"#ffffffb3"
      }
    },
  },
  plugins: [],
}

