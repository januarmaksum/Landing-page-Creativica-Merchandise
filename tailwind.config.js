/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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
      }
    },
    
  },
}
