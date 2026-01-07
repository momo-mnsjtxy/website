<!--
  ========================================
  用户群体卡片组件 (AudienceCard)
  ========================================
  
  用于展示某个目标用户群体的使用场景
  被 Audience.vue 组件使用
  
  使用方法：
  <AudienceCard 
    title="研究人员" 
    :points="['场景1', '场景2', '场景3']" 
  />
-->

<template>
  <article class="audience-card">
    <!-- 用户群体名称 -->
    <h3 class="audience-title">{{ title }}</h3>
    
    <!-- 使用场景列表 -->
    <ul class="audience-list">
      <li v-for="(point, index) in points" :key="index" class="audience-item">
        <!-- 绿色勾选图标 -->
        <BaseIcon name="check" size="md" color="#22c55e" />
        <span>{{ point }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup>
// 定义组件接收的参数
defineProps({
  title: { type: String, required: true },  // 用户群体名称（必填）
  points: { type: Array, required: true }   // 使用场景列表（必填）
})
</script>

<style scoped>
/* 卡片容器 */
.audience-card {
  background-color: var(--slate-50);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--slate-200);
  transition: all 0.3s ease;
}

/* 鼠标悬停效果：边框变色 + 阴影 */
.audience-card:hover {
  border-color: var(--secondary-color);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* 用户群体标题 */
.audience-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
}

/* 使用场景列表 */
.audience-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 单个使用场景项 */
.audience-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--slate-600);
  line-height: 1.6;
}
</style>
