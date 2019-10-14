export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
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
  css: ['@/assets/css/main.css', '@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { defaultIconPack: 'fa' }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/font-awesome',
    [
      'nuxt-fire',
      {
        config: {
          development: {
            apiKey: 'AIzaSyDXkNI1DonB56sXpEGzKyjdq6awZp_lv7E',
            authDomain: 'pkmn-web-safari.firebaseapp.com',
            databaseURL: 'https://pkmn-web-safari.firebaseio.com',
            projectId: 'pkmn-web-safari',
            storageBucket: '',
            messagingSenderId: '120252271529',
            appId: '1:120252271529:web:ea60f6ee552d092c83d2b8'
          },
          production: {
            apiKey: 'AIzaSyDXkNI1DonB56sXpEGzKyjdq6awZp_lv7E',
            authDomain: 'pkmn-web-safari.firebaseapp.com',
            databaseURL: 'https://pkmn-web-safari.firebaseio.com',
            projectId: 'pkmn-web-safari',
            storageBucket: '',
            messagingSenderId: '120252271529',
            appId: '1:120252271529:web:ea60f6ee552d092c83d2b8'
          }
        },
        useOnly: [
          'auth',
          'firestore',
          'functions',
          'storage',
          'realtimeDb',
          'messaging'
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
