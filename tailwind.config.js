/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      'sm': {'max': '375px'}
    },
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      colors: {
        violet: 'hsl(263, 55%, 52%)',
        dark: 'hsl(217, 19%, 35%)',
        darkBlue: 'hsl(219, 29%, 14%)',
        white: 'hsl(0, 0%, 100%)',
        gray: 'hsl(0, 0%, 81%)',
        grayBlue: 'hsl(210, 46%, 95%)',
      },
    },
  },
  plugins: [],
}
