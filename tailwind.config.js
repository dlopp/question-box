module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './nuxt.config.js',
  ],
  theme: {
    extend: {
      colors: {
        main: '#87DAD6',
        accent: '#FFE45A',
        details: '#EDFAF9',
        gray: '#F2F2F2',
        'light-gray': '#B3B3B3',
      },
      spacing: {
        9: '38px',
        14: '55px',
        36: '150px',
        62: '252px',
        100: '385px',
      },
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
}
