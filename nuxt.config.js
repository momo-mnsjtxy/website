export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - 炼丹蓝图",
      htmlAttrs: { lang: "zh-CN" },
      meta: [
        { name: "description", content: "专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案" },
        { name: "theme-color", content: "#6366f1" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    },
  },

  css: ["~/assets/styles/global.css"],

  routeRules: {
    "/": { prerender: true },
    "/sitemap.xml": { prerender: true },
    "/robots.txt": { prerender: true },
  },

  i18n: {
    locales: [
      { code: "zh-CN", iso: "zh-CN", name: "简体中文", file: "zh-CN.js" },
      { code: "en-US", iso: "en-US", name: "English", file: "en-US.js" },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "zh-CN",
    strategy: "prefix_except_default",
  },

  image: {
    formats: ["webp", "jpeg", "png"],
    quality: 80,
    provider: "ipx",
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml", "/robots.txt"],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://aib.hujiarong.site",
      siteName: "炼丹蓝图",
    },
  },

  modules: ["@nuxt/image", "@nuxtjs/i18n", "@vueuse/nuxt"],

  compatibilityDate: "2024-12-18",
})
