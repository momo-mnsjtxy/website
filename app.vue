<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// 全局SEO配置
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 炼丹蓝图` : '炼丹蓝图 - AI架构设计工具';
  },
  htmlAttrs: {
    lang: 'zh-CN'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }
  ]
});

// 全局错误处理
const handleError = (error) => {
  console.error('Global error:', error);
};

// 监听路由变化，用于性能监控
const route = useRoute();
watch(() => route.path, () => {
  // 路由切换时的性能监控逻辑将在后续实现
});
</script>