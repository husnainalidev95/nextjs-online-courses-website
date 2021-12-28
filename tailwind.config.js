module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': 'Lato',
        'ubuntu': 'Ubuntu'
      },
      colors: {
        'primary-color-orange-one': '#FF3F3A',
        'primary-color-orange-second': '#F75E05',
        'gray-800': '#424551',
        'gray-900': '#1E212C'
      }
    },
  },
  plugins: [],
}
