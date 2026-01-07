<!--
  首页组件
  
  功能：
  - 展示网站主要内容板块
  - 配置完整的SEO元数据
  - 注入丰富的结构化数据
  
  板块：
  - Hero: 首屏横幅
  - Features: 核心功能展示
  - Audience: 目标用户群体
  - Cta: 行动号召
-->
<template>
  <div class="home-page">
    <!-- 首屏横幅 -->
    <Hero />
    
    <!-- 核心功能展示 -->
    <Features />
    
    <!-- 目标用户群体 -->
    <Audience />
    
    <!-- 行动号召 -->
    <Cta />
  </div>
</template>

<script setup>
// 导入结构化数据创建函数
import { 
  createOrganizationSchema, 
  createWebSiteSchema, 
  createSoftwareApplicationSchema,
  createWebPageSchema
} from '~/composables/useSchemaOrg'

// 获取运行时配置
const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public.siteUrl

// ==================== SEO配置 ====================
useSEO({
  // 页面标题（会与titleTemplate组合）
  title: '炼丹蓝图 - AI架构设计工具',
  
  // 页面描述（建议50-160字符，用于搜索结果展示）
  description: '炼丹蓝图是专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案。提供可视化编辑、丰富模板库、团队协作等功能，让AI开发更简单高效。',
  
  // 关键词（用于SEO优化）
  keywords: [
    'AI架构设计',
    '架构设计工具', 
    'AI应用开发',
    '技术架构方案',
    '人工智能',
    '机器学习',
    '深度学习',
    '神经网络',
    'AI开发工具',
    '炼丹蓝图',
    'AI Blueprint',
    '可视化架构设计'
  ],
  
  // 分享图片（1200x630像素最佳）
  image: `${baseUrl}/og-image.jpg`,
  
  // 页面类型
  type: 'website',
  
  // 作者
  author: '炼丹蓝图团队',
  
  // 语言设置
  locale: 'zh_CN',
  
  // 备用语言版本
  alternateLocales: ['en_US']
})

// ==================== 结构化数据 ====================
// 注入多个Schema.org结构化数据，提升搜索引擎理解和富媒体展示

useSchemaOrg([
  // 1. 组织信息 - 描述网站所属组织
  createOrganizationSchema({
    name: '炼丹蓝图',
    description: '专业的AI架构设计工具提供商',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    // 社交媒体链接（如有）
    sameAs: [
      // 'https://github.com/ai-blueprint',
      // 'https://twitter.com/ai_blueprint',
    ]
  }),
  
  // 2. 网站信息 - 描述整个网站
  createWebSiteSchema({
    name: '炼丹蓝图',
    description: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案',
    url: baseUrl,
    inLanguage: 'zh-CN',
    hasSearch: false // 如果有站内搜索功能，设为true
  }),
  
  // 3. 软件应用信息 - 描述产品本身
  createSoftwareApplicationSchema({
    name: '炼丹蓝图',
    description: '炼丹蓝图是专业的AI架构设计工具，提供可视化编辑、模板库、团队协作等功能，帮助开发者快速构建高质量的AI应用架构方案。',
    url: baseUrl,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    // 功能特性列表
    featureList: [
      '可视化AI架构设计',
      '丰富的架构模板库',
      '团队实时协作',
      '多格式导出支持',
      '智能架构建议',
      '版本历史管理'
    ],
    // 价格信息
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock',
      description: '免费使用'
    },
    // 软件版本
    softwareVersion: '1.0.0',
    // 发布日期
    datePublished: '2024-01-01',
    // 截图
    screenshot: `${baseUrl}/og-image.jpg`
  }),
  
  // 4. 网页信息 - 描述当前页面
  createWebPageSchema({
    type: 'WebPage',
    name: '炼丹蓝图 - AI架构设计工具',
    description: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案',
    url: baseUrl,
    inLanguage: 'zh-CN',
    // 面包屑导航
    breadcrumb: [
      { name: '首页', url: baseUrl }
    ]
  })
])
</script>

<style scoped>
/* 首页容器样式 */
.home-page {
  width: 100%;
  min-height: 100vh;
}
</style>
