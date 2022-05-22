import i18n from './plugins/i18n'
import { resolve } from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '17live-neowu',
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
    "@/plugins/svg-icon"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      './assets/scss/vars/*.scss',
      './assets/scss/mixin/_mixins.scss'
      // './assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
    ]
  },

  svgSprite: {
    // manipulate module options
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: i18n
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      // 排除 nuxt 原配置的影響,Nuxt 默認有vue-loader,會處理svg,img等
      // 找到匹配.svg的規則,然後將存放svg文件的目錄排除
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));
      svgRule.exclude = [resolve(__dirname, "assets/icons/svg")];
      //添加loader規則
      config.module.rules.push({
        test: /\.svg$/, // 匹配.svg
        include: [resolve(__dirname, "assets/icons/svg")], // 將存放svg的目錄加入到loader處理目錄
        use: [
          {loader: "svg-sprite-loader", options: {symbolId: "icon-[name]"}}
        ]
      });
    }
  }
}
