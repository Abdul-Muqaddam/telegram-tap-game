/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "custome-picture-loading":"URL('src/assets/loading/starting_background.png')",
        "custom-picture-hero":"URL('src/assets/hero/background.png')",
        "custom-city-picture":"URL('src/assets/city/bg-city.png')"
      },

      keyframes:{
        progress:{
          "0%":{width:"0%"},
          "55%":{width:"5%"},
          "100%":{width:"35%"}
        },
        fallIn: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation:{
        progress:"progress 3s ease-out forwards",
        fallIn: 'fallIn 0.5s ease-out forwards',
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtility={
       ".text-shadow-sm":{
          textShadow:"10px 10px 10px rgba(0,0,0,1)"
        }
      }
      addUtilities(newUtility)
    },
  ],
}

