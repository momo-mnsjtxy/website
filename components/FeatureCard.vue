<!--
  ========================================
  功能卡片组件 (FeatureCard)
  ========================================
  
  用于展示单个功能特性的卡片，包含图标、标题和描述
  被 Features.vue 组件使用
  
  使用方法：
  <FeatureCard 
    title="功能名称" 
    description="功能描述" 
    icon="puzzle" 
    color="blue" 
  />
-->

<template>
  <article class="feature-card">
    <!-- 图标区域：带有彩色背景的圆角方块 -->
    <div class="feature-icon" :style="iconBgStyle">
      <BaseIcon :name="icon" size="lg" :color="iconColor" />
    </div>
    
    <!-- 功能标题 -->
    <h3 class="feature-title">{{ title }}</h3>
    
    <!-- 功能描述 -->
    <p class="feature-description">{{ description }}</p>
  </article>
</template>

<script setup>
// 导入颜色配置
import { colors } from '~/data/icons'

// 定义组件接收的参数
const props = defineProps({
  title: { type: String, required: true },       // 功能标题（必填）
  description: { type: String, required: true }, // 功能描述（必填）
  icon: { type: String, required: true },        // 图标名称（必填）
  color: { type: String, default: 'blue' }       // 颜色主题，默认蓝色
})

// 根据颜色名称获取对应的颜色配置
const colorConfig = computed(() => colors[props.color] || colors.blue)

// 图标背景样式
const iconBgStyle = computed(() => ({ backgroundColor: colorConfig.value.bg }))

// 图标颜色
const iconColor = computed(() => colorConfig.value.text)
</script>

<style scoped>
/* 卡片容器 */
.feature-card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* 鼠标悬停效果：上浮 + 阴影加深 */
.feature-card:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* 图标容器：48x48 的圆角方块 */
.feature-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

/* 功能标题 */
.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

@media (min-width: 640px) {
  .feature-title {
    font-size: 1.5rem;
  }
}

/* 功能描述 */
.feature-description {
  color: var(--slate-500);
  line-height: 1.7;
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .feature-description {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
