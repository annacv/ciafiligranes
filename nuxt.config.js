//const pkg = require('./package')

module.exports = {
  mode: 'spa',

  srcDir: './src',

  generate: {
    dir: 'build'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Companyia Filigranes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#b91d47' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon/favicon.ico'
      },
      {
        rel: 'shortcut icon',
        href: 'favicon/favicon.ico?filigranes=WGozkoE8Mx'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'favicon/apple-touch-icon.png?filigranes=WGozkoE8Mx'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: 'favicon//favicon-32x32.png?filigranes=WGozkoE8Mx'
      },
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        href: 'favicon//android-chrome-192x192.png?filigranes=WGozkoE8Mx'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: 'favicon/favicon-16x16.png?filigranes=WGozkoE8Mx'
      },
      {
        rel: 'manifest',
        href: 'favicon/site.webmanifest?filigranes=WGozkoE8Mx'
      },
      {
        rel: 'mask-icon',
        href: 'favicon/safari-pinned-tab.svg?filigranes=WGozkoE8Mx',
        color: '#bc1b36'
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/fonts/akkurat/akkurat_light_regular-webfont.woff2',
        type: 'font/woff2',
        crossorigin: 'crossorigin'
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/fonts/akkurat/akkurat_regular-webfont.woff2',
        type: 'font/woff2',
        crossorigin: 'crossorigin'
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/fonts/akkurat/akkurat_bold-webfont.woff2',
        type: 'font/woff2',
        crossorigin: 'crossorigin'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#bc1b36' },

  /*
  ** Global CSS
  */
  css: ['@assets/scss/app.scss', '@assets/scss/_reboot.scss'],

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
  ** Disable automatic inclusion of Bootstrap and BootstrapVue pre-compiled CSS and add only layout component
  */
  bootstrapVue: {
    componentPlugins: ['Layout'],
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
