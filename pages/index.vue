<template>
  <div class="home-page">
    <Hero />
    <Features />
    <Audience />
    <Cta />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

useSEO({
  title: '炼丹蓝图 - AI架构设计工具',
  description: '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案。',
  keywords: ['AI架构设计', '架构设计工具', 'AI应用开发', '技术架构方案'],
  image: `${runtimeConfig.public.siteUrl}/og-image.jpg`,
  type: 'website'
})

useSchemaOrg([
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '炼丹蓝图',
    applicationCategory: 'DeveloperApplication',
    description: '专业的AI架构设计工具',
    operatingSystem: 'Web',
    url: runtimeConfig.public.siteUrl,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' }
  }
])
</script>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
}
</style>
