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
        'gray-200': '#F4F5F7',
        'gray-600': '#9A9CA5',
        'gray-700': '#787A80',
        'gray-800': '#424551',
        'gray-900': '#1E212C',
        'primary': '#FF3F3A',
        'success': '#03CEA4',
        'info': '#5A87FC',
        'warning': '#F89828',
        'danger': '#FF4242',
        'secondary': '#FFCF2D',
        'red': '#F52F6E',
        'section-bg-color': '#FEDBD3',
      },
      backgroundImage: {
        'courses-card-image-1': "url('/images/courses-image-1.png')"
      }
    },
  },
  plugins: [],
}
