/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav-color':"#292929"
      },
      height:{
        hero:"550px",
        '3h':"300px"
      },
      backgroundImage:{
        herobg:"url('/Rectangle 5.png')"
      },
      width:{
        90:"95%",
       '3h':"300px"
      }
    },
  },
  plugins: [],
}
