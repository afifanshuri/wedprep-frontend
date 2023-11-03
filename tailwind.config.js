
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{vue,js,ts}', // Adjust this path to match your project structure
    './index.html', // Include your HTML files if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...other configuration options
}
