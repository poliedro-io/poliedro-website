const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      cyan: colors.cyan,
      'primary': {
        50: '#e0f8f3',
        100: '#b3ede1',
        200: '#80e2cd',
        300: '#4dd6b8',
        400: '#26cda9',
        500: '#00c49a',
        600: '#00be92',
        700: '#00b688',
        800: '#00af7e',
        900: '#00a26c',
        light: '#b3ede1',
        DEFAULT: '#00be92',
        dark: '#00a26c',
      },
      'secondary': {
        50: '#fff8ec',
        100: '#ffeecf',
        200: '#ffe3af',
        300: '#ffd88f',
        400: '#ffcf77',
        500: '#ffc75f',
        600: '#ffc157',
        700: '#ffba4d',
        800: '#ffb343',
        900: '#ffa632',
        light: '#fff8ec',
        DEFAULT: '#ffc75f',
        dark: '#ffa632',
      }
    },
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    // extend: {
    //   spacing: {
    //     '128': '32rem',
    //     '144': '36rem',
    //   },
    //   borderRadius: {
    //     '4xl': '2rem',
    //   }
    // }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
