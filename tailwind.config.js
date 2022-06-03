module.exports = {
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  content: [
    './App.js'
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
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
