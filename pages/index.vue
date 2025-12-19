<template>
  <div class="home-page">
    <Navbar />
    <Hero />
    <Features />
    <Audience />
    <Cta />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

// 使用useSEO composable优化SEO元数据
useSEO({
  title: '炼丹蓝图 - AI架构设计工具',
  description: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案。智能生成技术方案、架构设计、系统规划，让AI架构设计更简单高效。',
  keywords: [
    'AI架构设计',
    '架构设计工具',
    'AI应用开发',
    '技术架构方案',
    '系统设计工具',
    '智能架构生成',
    '开发者工具',
    '技术方案设计'
  ],
  image: `${runtimeConfig.public.siteUrl}/og-image.jpg`,
  type: 'website',
  locale: 'zh_CN'
})

// SoftwareApplication结构化数据
useSchemaOrg([
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '炼丹蓝图',
    applicationCategory: 'DeveloperApplication',
    description: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案',
    operatingSystem: 'Web',
    url: runtimeConfig.public.siteUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '156',
      reviewCount: '89',
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Organization',
      name: '炼丹蓝图团队',
      url: runtimeConfig.public.siteUrl
    },
    screenshot: `${runtimeConfig.public.siteUrl}/screenshot.jpg`,
    softwareVersion: '1.0',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '炼丹蓝图',
    alternateName: 'LianDan Blueprint',
    url: runtimeConfig.public.siteUrl,
    description: '专业的AI架构设计工具平台',
    inLanguage: 'zh-CN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${runtimeConfig.public.siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '炼丹蓝图',
    url: runtimeConfig.public.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${runtimeConfig.public.siteUrl}/logo.svg`,
      width: '200',
      height: '60'
    },
    description: '专注于AI架构设计的创新工具平台',
    foundingDate: '2024',
    sameAs: [
      'https://github.com/liandanlp',
      'https://twitter.com/liandanlp'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@liandanlp.com',
      availableLanguage: ['zh-CN', 'en-US']
    }
  }
])
</script>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
}
</style>
