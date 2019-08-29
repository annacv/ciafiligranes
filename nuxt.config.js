module.exports = {
  mode: 'spa',
  modern: 'true',

  srcDir: './src',

  env: {
    baseUrl: 'https://ciafiligranes.net'
  },

  generate: {
    dir: 'build',
    fallback: true
  },

  pageTransition: {
    name: 'fade',
    mode: 'out-in'
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
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'favicon/favicon.ico'
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
        href: 'favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        href: 'favicon/android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: 'favicon/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        href: 'favicon/safari-pinned-tab.svg',
        color: '#bc1b36'
      },
      {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#bc1b36', height: '.25rem', duration: 5000 },
  loadingIndicator: {
    name: 'pulse',
    color: '#bc1b36'
  },

  /*
  ** Global CSS
  */
  css: ['@assets/scss/app.scss', '@assets/scss/_reboot.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/hotjar.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'nuxt-cookie-control',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
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

  cookies: {
    necessary: [
      { cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies'] }
    ],
    optional: [
      {
        async: true,
        cookies: ['_ga', '_gid', '_hjIncludedInSample', '_hjRecordingEnabled'],
        accepted: () => {
          window.dataLayer = window.dataLayer || []
        },
        declined: () => {}
      }
    ]
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
