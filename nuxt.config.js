// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 应用配置
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '炼丹蓝图 - AI架构设计工具',
      meta: [
        { name: 'description', content: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案' }
      ]
    }
  },

  // 开发服务器配置
  devtools: { enabled: true },

  // CSS配置
  css: ['~/assets/styles/global.css'],

  // 路由规则 - 实现SSR/SSG混合渲染
  routeRules: {
    // 首页：SSR + 边缘缓存（1小时）
    '/': { swr: 3600 },
    
    // 文档页面：预渲染（SSG）
    '/docs/**': { prerender: true },
    
    // 工具页面：客户端渲染
    '/tools/**': { ssr: false },
    
    // API路由
    '/api/**': { cors: true }
  },

  // 国际化配置
  i18n: {
    locales: [
      { code: 'zh-CN', iso: 'zh-CN', name: '简体中文', file: 'zh-CN.js' },
      { code: 'en-US', iso: 'en-US', name: 'English', file: 'en-US.js' }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'zh-CN',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // 图片优化配置
  image: {
    formats: ['webp', 'avif', 'jpeg', 'png'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // 实验性功能
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    typedPages: false
  },

  // Nitro服务器配置
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // 模块配置
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],

  // 兼容性配置
  compatibilityDate: '2024-12-18'
})