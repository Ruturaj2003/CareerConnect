
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137733",
        "brand-blue-2": '#4285f4'
      },
      boxShadow: {
        blue: '0 0 3px 3px #4285f4'
      }
    }
  },
  plugins: []
};

