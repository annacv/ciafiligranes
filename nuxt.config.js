const pkg = require('./package')

module.exports = {
  mode: 'spa',

  srcDir: './src',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Companyia Filigranes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@assets/scss/app.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',

    [
      'nuxt-i18n',
      {
        defaultLocale: 'ca',
        langDir: 'languages/',
        lazy: true,
        locales: [
          { code: 'ca', iso: 'ca-CA', name: 'ca', file: 'ca/index.js' },
          { code: 'es', iso: 'es-ES', name: 'es', file: 'es/index.js' },
          { code: 'en', iso: 'en-US', name: 'en', file: 'en/index.js' }
        ]
      }
    ]
  ],
  /*
  ** Disable automatic inclusion of Bootstrap and BootstrapVue pre-compiled CSS
  */
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
