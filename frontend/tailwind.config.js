/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Add the custom grid template
        'auto-fill-240': 'repeat(auto-fill, minmax(240px, 1fr))',
      },
       boxShadow: {
        custom: '0px 0px 10px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
        fadeInFast: 'fadeIn 1s ease-in-out', // 2 seconds animation, you can adjust the duration and timing function
         // 2 seconds animation, you can adjust the duration and timing function
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          'scrollbar-width': 'none',  /* Firefox */
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}