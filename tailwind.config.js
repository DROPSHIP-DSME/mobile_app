
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './App.js',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: { transform: false, translate: false, boxShadow: false },
  theme: {
    fontFamily: {
      'sans': [
        'hinted-AvertaStd-Regular',
        ...defaultTheme.fontFamily.sans
      ],
      'serif': ['hinted-AvertaStd-Bold', ...defaultTheme.fontFamily.serif ]
    },
    fontWeight: {
      'hairline': 100,
      'extra-light': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extra-bold': 800,
      'black': 900,
    },
    extend: {
      colors: {
      },
      fontFamily: {
        'sans': [
          'hinted-AvertaStd-Regular',
        ],
        'serif': [
          'hinted-AvertaStd-Bold',
        ],
      },
      backgroundColor: {
        'primary': '#B80000',
        'secondar': '#EB2F2F',
        'test': '#009962',
      },
    },
  },
  plugins: [],

}
