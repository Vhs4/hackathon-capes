/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mini': '375px',
        'mini-max': '400px'
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'light': '#fff',
      'dark': '#000',
    }),
    boxShadow: {
      'button-variant-2': '0px 8px 16px 0px rgba(0, 0, 0, 0.15);',
      'input-form': ' 0px 3.2px 4.8px 0px rgba(0, 0, 0, 0.15)'
  },
},
  plugins: [],
}