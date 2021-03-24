export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'question-box',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
  plugins: [],

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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
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
  build: {
    // Cache management of modules with hard-source-webpack-plugin
    // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#hardsource
    hardSource: true,
  },
}
