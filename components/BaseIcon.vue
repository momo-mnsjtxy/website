<!--
  ========================================
  基础图标组件 (BaseIcon)
  ========================================
  
  这是一个可复用的 SVG 图标组件，用于显示各种图标
  
  使用方法：
  <BaseIcon name="check" />                    // 默认大小
  <BaseIcon name="code" size="lg" />           // 大号图标
  <BaseIcon name="users" color="#3b82f6" />    // 指定颜色
  
  参数说明：
  - name: 图标名称，对应 data/icons.js 中的 iconPaths
  - size: 图标大小，可选 sm/md/lg/xl，默认 md
  - color: 图标颜色，默认继承父元素颜色
-->

<template>
  <!-- SVG 图标容器 -->
  <svg 
    class="base-icon" 
    :class="sizeClass"
    :style="{ color }"
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <!-- 图标路径，从 data/icons.js 获取 -->
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      :d="path"
    />
  </svg>
</template>

<script setup>
// 导入图标路径配置
import { iconPaths } from '~/data/icons'

// 定义组件接收的参数
const props = defineProps({
  name: { type: String, required: true },   // 图标名称（必填）
  size: { type: String, default: 'md' },    // 图标大小
  color: { type: String, default: 'currentColor' }  // 图标颜色
})

// 根据图标名称获取对应的 SVG 路径
const path = computed(() => iconPaths[props.name] || '')

// 根据 size 参数生成对应的 CSS 类名
const sizeClass = computed(() => `icon-${props.size}`)
</script>

<style scoped>
/* 图标基础样式 */
.base-icon {
  flex-shrink: 0;  /* 防止在 flex 布局中被压缩 */
}

/* 不同尺寸的图标大小 */
.icon-sm { width: 1rem; height: 1rem; }      /* 16px */
.icon-md { width: 1.25rem; height: 1.25rem; } /* 20px */
.icon-lg { width: 1.5rem; height: 1.5rem; }   /* 24px */
.icon-xl { width: 2rem; height: 2rem; }       /* 32px */
</style>
