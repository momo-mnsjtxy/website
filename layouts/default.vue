<template>
  <div class="app-layout">
    <!-- 全局导航栏 -->
    <Navbar />
    
    <!-- 页面内容插槽 -->
    <main class="main-content">
      <slot />
    </main>
    
    <!-- 全局页脚 -->
    <Footer />
  </div>
</template>

<script setup>
// 全局错误处理
const handleError = (error) => {
  console.error('Layout error:', error)
}

// 监听错误事件
if (process.client) {
  window.addEventListener('error', handleError)
  window.addEventListener('unhandledrejection', (event) => {
    handleError(event.reason)
  })
}

// 组件卸载时清理
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('error', handleError)
  }
})
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
}
</style>