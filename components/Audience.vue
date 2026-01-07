<template>
  <section id="audience" class="audience">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">适合谁使用</h2>
        <p class="section-description">
          无论你是研究者、工程师还是学生，炼丹蓝图都能助你一臂之力
        </p>
      </header>

      <div class="audience-grid">
        <AudienceCard
          v-for="(group, index) in targetGroups"
          :key="index"
          v-bind="group"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { targetGroups } from '~/data/audience'
</script>

<style scoped>
.audience {
  padding: 5rem 0;
  background-color: var(--white);
}

@media (min-width: 1024px) {
  .audience { padding: 7rem 0; }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .section-title { font-size: 3rem; }
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
  .audience-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
