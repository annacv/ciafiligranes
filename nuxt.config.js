//const pkg = require('./package')

module.exports = {
  mode: 'spa',

  srcDir: './src',

  generate: {
    dir: 'build',
    fallback: true
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
  loading: { color: '#bc1b36' },

  /*
  ** Global CSS
  */
  css: ['@assets/scss/app.scss', '@assets/scss/_reboot.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/ga.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    [
      'nuxt-cookie-control',
      {
        colors: {
          barTextColor: '#fff',
          barBackground: '#12957b',
          barButtonColor: '#fff',
          barButtonBackground: '#206569',
          barButtonHoverColor: '#fff',
          barButtonHoverBackground: '#2e495e',
          modalButtonBackground: '#206569',
          modalButtonHoverColor: '#fff',
          modalButtonHoverBackground: '#2e495e',
          checkboxActiveBackground: '#2e495e',
          checkboxInactiveBackground: '#12957b',
          checkboxActiveCircleBackground: '#00c58e',
          checkboxInactiveCircleBackground: '#00c58e',
          checkboxDisabledBackground: '#ddd',
          checkboxDisabledCircleBackground: '#fff'
        },
        text: {
          locale: {
            ca: {
              barTitle: 'Cookies',
              barDescription:
                'We use third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
              acceptAll: 'Accept all',
              declineAll: 'Delete all',
              manageCookies: 'Manage cookies',
              unsaved: 'You have unsaved settings',
              close: 'Close',
              save: 'Save',
              necessary: 'Necessary cookies',
              optional: 'Optional cookies'
            },
            es: {
              barTitle: 'Cookies',
              barDescription:
                'We use third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
              acceptAll: 'Accept all',
              declineAll: 'Delete all',
              manageCookies: 'Manage cookies',
              unsaved: 'You have unsaved settings',
              close: 'Close',
              save: 'Save',
              necessary: 'Necessary cookies',
              optional: 'Optional cookies'
            },
            en: {
              barTitle: 'Cookies',
              barDescription:
                'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
              acceptAll: 'Accept all',
              declineAll: 'Delete all',
              manageCookies: 'Manage cookies',
              unsaved: 'You have unsaved settings',
              close: 'Close',
              save: 'Save',
              necessary: 'Necessary cookies',
              optional: 'Optional cookies'
            }
          }
        }
      }
    ],
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

  cookies: {
    necessary: [
      {
        name: 'Default cookies',
        description: {
          ca: 'Used for cookie control.',
          en: 'Used for cookie control.',
          es: 'Used for cookie control.'
        },
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name: 'Google Analitycs',
        description: {
          ca:
            'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
          en:
            'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
          es:
            'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.'
        },
        src: 'https://www.google-analytics.com/analytics.js',
        async: true,
        cookies: ['_ga', '_gid'],
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
