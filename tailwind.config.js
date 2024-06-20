/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      1: '#FAFAFA', // white background 
      2: '#202020', // black heading 
      3: '#2C74FF', // blue
      4: '#000000', // p tag color
      5: '#EEEEEE', // tag background color
      6: '#D6D6D6', // tag border color
      7: '#DDDDDD', // project background color
      'project-border': '#D1D1D1', // project border color
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      tag: ['Poppins', 'sans-serif']
    },
    fontSize: {
      h1: '3rem',
      h3: '1.5rem',
      h6: '1.2rem',
      p: '1rem',
      tag: '0.9rem',
      url: '0.8rem'
    },
    extend: {
      
    }
  },
  plugins: [],
}