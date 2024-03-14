/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center:true,
    },
    colors: {
      Cgray: '#1c1e23',
      Cblack: '#0d0d0d',
      Cwhite: '#f5f5f7',
      Cred:'#D81F26',
      Cblue:'#006da4',
    },
    extend: {},
  },
  plugins: [],
}