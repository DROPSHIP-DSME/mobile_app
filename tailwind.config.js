
const defaultTheme = require('tw.stylecss/defaultTheme')

module.exports = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: { transform: false, translate: false, boxShadow: false },
  theme: {
    fontFamily: {
      'sans': [
        'hintedavertastdregular',
        ...defaultTheme.fontFamily.sans
      ],
      'serif': ['hintedavertastdbold', ...defaultTheme.fontFamily.serif ]
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
          'hintedavertastdregular',
        ],
        'serif': [
          'hintedavertastdbold',
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
