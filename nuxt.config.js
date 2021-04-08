export default {
  // SSR: https://go.nuxtjs.dev/config-ssr
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dlopp専用質問箱！',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me.ns#',
    },
    titleTemplate: '%s | dlopp質問箱',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'dlopp専用の質問箱です。匿名なので気軽に質問してください。',
      },
      {
        hid: 'og:site_name',
        property: 'og_site_name',
        content: 'dlopp専用質問箱！',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://dlopp-questionbox.herokuapp.com/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'dlopp専用質問箱！',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'dlopp専用の質問箱です。匿名なので気軽に質問してください。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.gyazo.com/7e78800509eeea105f2fbbcf09c028aa.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // reset css
    // https://github.com/necolas/normalize.css
    'normalize.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-scrollto', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'M+PLUS+1p': [400],
        },
        display: 'block',
        download: true, // font optimization
        inject: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      // https://firebase.nuxtjs.org/
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyC_kRL_MVg8cZtKOw7Kb5djw2VNxwDfz6g',
          authDomain: 'question-box-4f79d.firebaseapp.com',
          projectId: 'question-box-4f79d',
          storageBucket: 'question-box-4f79d.appspot.com',
          messagingSenderId: '657300146222',
          appId: '1:657300146222:web:1ab3ff13a5e3c18214f7bf',
          measurementId: 'G-0BMMPN8SGV',
        },
        services: {
          firestore: true,
          analytics: true,
          auth: true,
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // vue-tosted settings
  // https://github.com/shakee93/vue-toasted
  toast: {
    position: 'top-right',
    duration: 5000,
  },
}
