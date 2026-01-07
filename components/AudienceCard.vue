<template>
  <article class="audience-card">
    <h3 class="audience-title">{{ title }}</h3>
    <ul class="audience-list">
      <li v-for="(point, index) in points" :key="index" class="audience-item">
        <BaseIcon name="check" size="md" color="#22c55e" />
        <span>{{ point }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  points: { type: Array, required: true }
})
</script>

<style scoped>
.audience-card {
  background-color: var(--slate-50);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--slate-200);
  transition: all 0.3s ease;
}

.audience-card:hover {
  border-color: var(--secondary-color);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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
</style>
