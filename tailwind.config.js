/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "custome-picture-loading":"URL('src/assets/loading/starting_background.webp')",
        "custom-picture-hero":"URL('src/assets/hero/background.png')",
        "custom-city-picture":"URL('src/assets/city/bg-city.webp')",
        "custom-invite-picture":"URL('src/assets/referal/bg-invite.webp')",
        "custom-quest-picture":"URL('src/assets/Quests/background.webp')"
      },
      boxShadow:{
        "blue-button":"5px 5px 40px 10px #0000CD,-5px -5px 40px 10px #0000CD",
        "green-menu":"5px 5px 20px 5px #55F9E9,-5px -5px 20px 5px #55F9E9"
      },
      animationDelay:{
        '200ms': '200ms',
        '400ms': '400ms',
        '600ms': '600ms',
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
        upDown:{
          '0%':{transform:"translateY(-30%) scale(1.05)"},
          '50%':{transform:"translateY(0) scale(0.95)"},
          '100%':{transform:"translateY(-30%) scale(1.05)"},
        },
        shadowFadeInOut:{
          '0%':{boxShadow:"5px 5px 20px 5px rgba(85, 249, 233, 0.5),-5px -5px 20px 5px rgba(85, 249, 233, 0.5)"},
          '50%':{boxShadow:"5px 5px 20px 5px rgba(85, 249, 233, 0),-5px -5px 20px 5px rgba(85, 249, 233, 0)"},
          '100%':{boxShadow:"5px 5px 20px 5px rgba(85, 249, 233, 0.5),-5px -5px 20px 5px rgba(85, 249, 233, 0.5)"},
          
        },
        shadowFadeInOutBlue:{
          '0%':{boxShadow:"5px 5px 20px 5px rgba(22, 35, 57, 1),-5px -5px 20px 5px rgba(22, 35, 57, 1)"},
          '50%':{boxShadow:"5px 5px 20px 5px rgba(22, 35, 57, 0),-5px -5px 20px 5px rgba(22, 35, 57, 0)"},
          '100%':{boxShadow:"5px 5px 20px 5px rgba(22, 35, 57, 1),-5px -5px 20px 5px rgba(22, 35, 57, 1)"},
        }
      },
      animation:{
        progress:"progress 3s ease-out forwards",
        fallIn: 'fallIn 0.5s ease-out forwards',
        upDown:'upDown 2s ease-in-out infinite',
        shadowFadeInOut:'shadowFadeInOut 2s ease-in-out infinite',
        shadowFadeInOutBlue:'shadowFadeInOutBlue 2s ease-in-out infinite'
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
      addUtilities({
        ".animation-delay-150ms":{
          'animation-delay':'150ms',
        },
        ".animation-delay-300ms":{
          'animation-delay':'300ms'
        },
        ".animation-delay-600ms":{
          'animation-delay':'600ms'
        },
        ".animation-delay-1000ms":{
          'animation-delay':'1000ms'
        }
      })

    },
  ],
}

