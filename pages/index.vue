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
// 根据网站实际文案优化SEO内容
useSEO({
  // 页面标题 - 突出核心价值主张
  title: 'AI架构设计 从未如此优雅简单 | 炼丹蓝图',
  
  // 页面描述 - 精准描述产品功能和价值（控制在160字符内）
  description: '炼丹蓝图 - 用蓝图的形式设计AI架构，拖拽节点、连线，让灵感瞬间转化为可运行的模型代码。内置数百种AI组件，支持实时数据展示，降低AI架构创新门槛。',
  
  // 关键词 - 覆盖核心功能和目标用户搜索词
  keywords: [
    // 品牌词
    '炼丹蓝图',
    'AI Blueprint',
    // 核心功能词
    'AI架构设计',
    'AI可视化设计',
    '蓝图式可视化',
    'AI组件库',
    '神经网络可视化',
    '深度学习架构',
    // 用户场景词
    'AI初学者工具',
    '算法工程师工具',
    '模型架构设计',
    '拖拽式AI开发',
    // 技术词
    '机器学习',
    '深度学习',
    '神经网络设计',
    'PyTorch可视化',
    'TensorFlow可视化'
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
    description: '致力于降低AI架构创新门槛，让每个人都能成为AI架构师',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    sameAs: [
      'https://github.com/ai-blueprint'
    ]
  }),
  
  // 2. 网站信息 - 描述整个网站
  createWebSiteSchema({
    name: '炼丹蓝图',
    description: '用蓝图的形式设计AI架构，拖拽节点、连线，让灵感瞬间转化为可运行的模型代码',
    url: baseUrl,
    inLanguage: 'zh-CN',
    hasSearch: false
  }),
  
  // 3. 软件应用信息 - 描述产品本身
  createSoftwareApplicationSchema({
    name: '炼丹蓝图',
    description: '炼丹蓝图是一款AI架构可视化设计工具。通过直观的节点拖拽和连线，清晰呈现数据流向，像搭积木一样组装复杂的AI底层架构。内置数百种AI底层计算组件，支持实时数据展示，让AI架构设计从未如此优雅简单。',
    url: baseUrl,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web, Windows, macOS',
    // 功能特性列表 - 与网站文案一致
    featureList: [
      '蓝图式可视化 - 通过直观的节点拖拽和连线设计AI架构',
      '丰富的AI组件库 - 内置数百种AI底层计算组件，即拖即用',
      '实时数据展示 - 实时计算数据流通情况，自动发现问题',
      '自定义封装模块 - 支持复用独家"丹方"',
      '维度自动对齐 - 自动维度对齐与提示',
      '快速架构验证 - 分钟级架构验证'
    ],
    // 价格信息
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/PreOrder',
      description: '内测阶段即将开始'
    },
    // 软件版本
    softwareVersion: '1.0.0-beta',
    // 发布日期
    datePublished: '2025-01-01',
    // 截图
    screenshot: `${baseUrl}/og-image.jpg`
  }),
  
  // 4. 网页信息 - 描述当前页面
  createWebPageSchema({
    type: 'WebPage',
    name: 'AI架构设计 从未如此优雅简单 | 炼丹蓝图',
    description: '用蓝图的形式设计AI架构，拖拽节点、连线，让灵感瞬间转化为可运行的模型代码',
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
