module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        readex: "'Readex Pro', sans-serif"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
