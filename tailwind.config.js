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
      'primary': {
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
        100: '#b9cfd1',
        200: '#8ab0b2',
        300: '#5b9093',
        400: '#38787b',
        500: '#156064',
        600: '#12585c',
        700: '#0f4e52',
        800: '#0c4448',
        900: '#063336',
        light: '#b9cfd1',
        DEFAULT: '#12585c',
        dark: '#063336',
      }
      //   'blue': '#1fb6ff',
      //   'purple': '#7e5bef',
      //   'pink': '#ff49db',
      //   'orange': '#ff7849',
      //   'green': '#13ce66',
      //   'yellow': '#ffc82c',
      //   'gray-dark': '#273444',
      //   'gray': '#8492a6',
      //   'gray-light': '#d3dce6',
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
