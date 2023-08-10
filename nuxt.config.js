export default {
  target: 'static',
  head: {
    title: 'Poliedro',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Desarrollo de aplicaciones web a la medid' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: ['~/plugins/smooth-scroll.js', '~/plugins/mdi.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8', '@nuxt/image', '@nuxt/content', '@nuxtjs/google-fonts'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [400, 500, 700, 800],
      },
    },
    download: true,
    outputDir: 'assets',
    stylePath: 'assets/css/google-fonts.css',
    fontsDir: 'assets/fonts',
    fontsPath: '../fonts',
  },
}
