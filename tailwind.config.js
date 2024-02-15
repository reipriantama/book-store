/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color: {
        'navy-blue': '#1B3764',
        'dark-yellow': '#FFCA42',
        'thin-grey': '#F6F8FC',
      },
    },
    fontFamily: {
      inter: ['Inter'],
      cardo: ['Cardo'],
    },
  },
  plugins: [],
};
