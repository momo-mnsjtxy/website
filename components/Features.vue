<template>
  <section id="features" class="features" aria-labelledby="features-title">
    <div class="container">
      <div class="features-header">
        <h2 id="features-title" class="section-title">核心功能</h2>
        <p class="section-description">
          三大核心功能，让AI架构设计变得简单高效
        </p>
      </div>

      <div class="features-grid">
        <article 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
          :aria-labelledby="`feature-title-${index}`"
        >
          <div class="feature-icon" :style="{ backgroundColor: feature.color }" aria-hidden="true">
            <span v-html="feature.icon"></span>
          </div>
          <h3 :id="`feature-title-${index}`" class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: '可视化编辑器',
    description: '通过拖拽节点和连线的方式，直观地设计AI模型架构，无需编写复杂代码。',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>',
    color: 'rgba(59, 130, 246, 0.1)'
  },
  {
    title: '实时代码生成',
    description: '设计完成后，自动生成PyTorch或TensorFlow代码，即刻部署运行。',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>',
    color: 'rgba(147, 51, 234, 0.1)'
  },
  {
    title: '团队协作',
    description: '支持多人在线协作编辑，实时同步，让团队高效沟通架构设计思路。',
    icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
    color: 'rgba(236, 72, 153, 0.1)'
  }
];
</script>

<style scoped>
.features {
  padding: 5rem 0;
  background-color: var(--slate-50);
}

@media (min-width: 1024px) {
  .features {
    padding: 7rem 0;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
}

.section-description {
  font-size: 1.125rem;
  color: var(--slate-500);
  max-width: 42rem;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.feature-description {
  color: var(--slate-500);
  line-height: 1.6;
}

.w-8 {
  width: 2rem;
}

.h-8 {
  height: 2rem;
}
</style>