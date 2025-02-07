/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      kanit: ['Kanit', 'sans-serif'],
      orbitron: ['Orbitron', 'sans-serif'],
    }, 
    gridAutoColumns: {
      'flow': 'minmax(1fr, 300px)'
    }
  },
  plugins: [],
}

