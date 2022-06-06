module.exports = {

  content: [
    './App.js',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: { transform: false, translate: false, boxShadow: false },
  theme: {
    fontFamily: {
      'sans': ['Averta Standard','ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'display': ['Averta Standard','Oswald'],
      'body': ['"Averta Standard"'],
    },
    extend: {
      colors: {
      },
      fontFamily: {
        'sans': ['Averta Standard'], // outputs "font-sans"
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
