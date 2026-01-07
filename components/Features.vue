<template>
  <section id="features" class="features">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">核心功能</h2>
        <p class="section-description">三大核心功能，让AI架构设计变得简单高效</p>
      </header>

      <div class="features-grid">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          v-bind="feature"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { features } from '~/data/features'
</script>

<style scoped>
.features {
  padding: 5rem 0;
  background-color: var(--slate-50);
}

@media (min-width: 1024px) {
  .features { padding: 7rem 0; }
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

.features-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .features-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
