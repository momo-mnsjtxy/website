<template>
  <section id="audience" class="audience" aria-labelledby="audience-title">
    <div class="container">
      <div class="audience-grid" role="list">
        <!-- 左边：小白用户 -->
        <article class="audience-card card-blue" role="listitem" aria-labelledby="audience-title-1">
          <div class="card-background" aria-hidden="true"></div>
          <div class="card-content">
            <h3 class="card-title" id="audience-title-1">AI 初学者</h3>
            <ul class="card-list">
              <li class="list-item">
                <Icon class="list-icon" aria-hidden="true" />
                无需深究底层代码语法
              </li>
              <li class="list-item">
                <Icon class="list-icon" aria-hidden="true" />
                直观理解数据流向与维度变化
              </li>
              <li class="list-item">
                <Icon class="list-icon" aria-hidden="true" />
                快速上手复现经典模型
              </li>
            </ul>
          </div>
        </article>

        <!-- 右边：研发者 -->
        <article class="audience-card card-dark" role="listitem" aria-labelledby="audience-title-2">
          <div class="card-background" aria-hidden="true"></div>
          <div class="card-content">
            <h3 class="card-title" id="audience-title-2">算法工程师</h3>
            <ul class="card-list">
              <li class="list-item">
                <Icon class="list-icon" aria-hidden="true" />
                分钟级架构验证
              </li>
              <li class="list-item">
                <Icon class="list-icon" aria-hidden="true" />
                快速进行消融实验
              </li>
              <li class="list-item">
                <Icon class="list-icon" aria-hidden="true" />
                无需手动调整维度对齐
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import Icon from './Icon.vue'
// 组合式 API 逻辑
</script>

<style scoped>
.audience {
  padding: 6rem 0;
}

@media (min-width: 1024px) {
  .audience {
    padding: 8rem 0;
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

.audience-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
  .audience-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.audience-card {
  position: relative;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--white);
}

@media (min-width: 1024px) {
  .audience-card {
    padding: 4rem;
  }
}

.card-blue {
  background-color: var(--blue-500);
}

.card-dark {
  background-color: var(--purple-500);
}

.card-background {
  position: absolute;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  opacity: 0.5;
  filter: blur(4rem);
}

.card-blue .card-background {
  background-color: var(--blue-400);
  right: -2.5rem;
  bottom: -2.5rem;
}

.card-dark .card-background {
  background-color: var(--purple-400);
  left: -2.5rem;
  top: -2.5rem;
}

.card-content {
  position: relative;
  z-index: 10;
}

.card-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .card-list {
    gap: 1.5rem;
  }
}

.list-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6;
}

.card-blue .list-item {
  color: var(--blue-100);
}

.card-dark .list-item {
  color: var(--purple-100);
}

.list-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.card-blue .list-icon {
  color: var(--white);
}

</style>