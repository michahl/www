/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body' : ['Rubik']
    },
    extend: {
      animation: {
        fade_1: 'fadeIn 1s ease-out',
        fade_2: 'fadeIn 1.25s ease-out',
        fade_3: 'fadeIn 1.5s ease-out',
        fade_4: 'fadeIn 1.75s ease-out',
        fade_5: 'fadeIn 2s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}