module.exports = {
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#B80000',
        'bg-secondar': '#EB2F2F',
        'bg-test': '#009962',
      },
    },
  },
  plugins: [],

}
