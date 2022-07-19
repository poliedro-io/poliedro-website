const colors = require('tailwindcss/colors');

module.exports = {
  // tailwindcss: {
  //   exposeConfig: true
  // },
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  safelist: [
    'bg-blue',
    'bg-green',
    'bg-yellow',
    'bg-violet',
    'text-blue',
    'text-green',
    'text-yellow',
    'text-violet',
    'shadow-blue-500/50',
    'shadow-green-500/50',
    'shadow-yellow-500/50',
    'shadow-violet-500/50',
    'filter',
    'invert'
  ],
  theme: {

    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      'blue': {
        50: '#e0f8fa',
        100: '#b3eef4',
        200: '#80e3ec',
        300: '#4dd8e4',
        400: '#26cfdf',
        500: '#00c7d9',
        600: '#00c1d5',
        700: '#00bacf',
        800: '#00b3ca',
        900: '#00a6c0',
        light: '#e0f8fa',
        DEFAULT: '#00c7d9',
        dark: '#00a6c0',
      },
      'green': {
        50: '#f0fae0',
        100: '#d9f2b3',
        200: '#bfea80',
        300: '#a5e14d',
        400: '#92da26',
        500: '#7fd400',
        600: '#77cf00',
        700: '#6cc900',
        800: '#62c300',
        900: '#4fb900',
        light: '#d9f2b3',
        DEFAULT: '#7fd400',
        dark: '4fb900'
      },
      'yellow': {
        50: '#fff5e0',
        100: '#ffe6b3',
        200: '#ffd580',
        300: '#ffc44d',
        400: '#ffb726',
        500: '#ffaa00',
        600: '#ffa300',
        700: '#ff9900',
        800: '#ff9000',
        900: '#ff7f00',
        light: '#ffe6b3',
        DEFAULT: '#ffaa00',
        dark: 'ff7f00'
      },
      'violet': {
        50: '#ffe9f4',
        100: '#ffc8e3',
        200: '#ffa3d0',
        300: '#ff7ebd',
        400: '#ff63ae',
        500: '#ff47a0',
        600: '#ff4098',
        700: '#ff378e',
        800: '#ff2f84',
        900: '#ff2073',
        light: '#ffe9f4',
        DEFAULT: '#ff47a0',
        dark: 'ff2073'
      }
    },
 

    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },

  },
  plugins: [require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio')],
}
