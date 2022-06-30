
const tw = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: { transform: false, translate: false, boxShadow: false },
  theme: {
    fontFamily: {
      'sans': [
        'hintedavertastdregular hintedavertastdregular'
      ],
      'serif': ['hintedavertastdbold']
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
        'sans': [ 'hintedavertastdregular hintedavertastdbold',
        ],
        'serif': [
          'hintedavertastdregular hintedavertastdbold',
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

module.exports = tw
