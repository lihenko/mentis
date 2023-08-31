/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {},
    colors: {
      'darkblue': '#31368B',
      'blue': '#3E44A9',
      'white' : '#ffffff',
      'lightblue' : '#04E1FE',
      'black' : '#000000',
    },
    fontFamily: {
      'sans': ['Cabin', 'sans-serif'],
      'cabin': ['Cabin', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'body': ['Cabin', 'sans-serif'],
    },
    fontSize: {
      micro:['12px', '13px'],
      sm: ['14px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '30px'],
      xl: ['20px', '30px'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1250px',
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    placeholderColor: false,
    placeholderOpacity: false,
  },
};
