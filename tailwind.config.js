module.exports = {

  content: [
    './App.js',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: { transform: false, translate: false, boxShadow: false },
  theme: {
    fontFamily: {
      'sans': ['hinted-AvertaStd','ui-sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'display': ['hinted-AvertaStd'],
      'body': ['hinted-AvertaStd'],
    },
    extend: {
      colors: {
      },
      fontFamily: {
        'sans': ['hinted-AvertaStd'], // outputs "font-sans"
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
