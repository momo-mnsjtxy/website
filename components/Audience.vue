<template>
  <section id="audience" class="audience" aria-labelledby="audience-title">
    <div class="container">
      <div class="audience-header">
        <h2 id="audience-title" class="section-title">适合谁使用</h2>
        <p class="section-description">
          无论你是研究者、工程师还是学生，炼丹蓝图都能助你一臂之力
        </p>
      </div>

      <div class="audience-grid">
        <article 
          v-for="(group, index) in targetGroups" 
          :key="index"
          class="audience-card"
          :aria-labelledby="`audience-group-${index}`"
        >
          <h3 :id="`audience-group-${index}`" class="audience-title">{{ group.title }}</h3>
          <ul class="audience-list" role="list">
            <li 
              v-for="(point, pointIndex) in group.points" 
              :key="pointIndex"
              class="audience-item"
            >
              <Icon class="check-icon" aria-hidden="true" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const targetGroups = [
  {
    title: '研究人员',
    points: [
      '快速搭建实验模型原型',
      '可视化展示论文中的架构设计',
      '轻松复现前沿研究成果'
    ]
  },
  {
    title: '算法工程师',
    points: [
      '高效设计生产级模型架构',
      '团队协作设计复杂系统',
      '自动生成工程代码'
    ]
  },
  {
    title: '学生与爱好者',
    points: [
      '直观理解深度学习架构',
      '快速上手AI模型设计',
      '边学边做，巩固知识'
    ]
  }
];
</script>

<style scoped>
.audience {
  padding: 5rem 0;
  background-color: var(--white);
}

@media (min-width: 1024px) {
  .audience {
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

.audience-header {
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

.audience-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .audience-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.audience-card {
  background-color: var(--slate-50);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--slate-200);
  transition: all 0.3s ease;
}

.audience-card:hover {
  border-color: var(--secondary-color);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.audience-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
}

.audience-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.audience-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--slate-600);
  line-height: 1.6;
}

.check-icon {
  flex-shrink: 0;
  margin-top: 0.125rem;
}
</style>