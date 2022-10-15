/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'orange': '#ffba37',
        'dark-orange': '#d7a63e',
        'orange-light': '#ffcd6a',
        'orange-dark': '#ecb240',
        'gray-dark-100': '#808080',
        'gray-dark-200': '#afafaf',
        'gray-dark-300': '#575757',
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}
