  module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
    extend: {
      colors: {
        primary: "#5a00fe",
        yellow: "#ffe123",
        grey: "#f7f7f7",
      },

      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
    variants: {
      extend: {},
    },
    plugins: [],
  }