export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],
  axios: {
    // 是否跨域
    proxy: true,
    // 重发次数
    // retry: {
    //   reties: 3
    // },
    // // 基础地址
    // baseUrl: process.env._Env === 'production' ? 'xxx' : 'xxx';
  },
  proxy: {
    '/api': {
      target: 'http://testapi.xuexiluxian.cn/'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // 1.全局禁用，可以在axios、路由守卫自己写入loading
  // loading: false,

  // 2.个性化加载进度条
  // loading: {
  //   height: '5px',
  //   color: 'tomato'
  // }

  // 3.自定义加载组件
  loading: '~/components/loading.vue'
}
