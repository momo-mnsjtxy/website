<template>
  <article class="feature-card">
    <div class="feature-icon" :style="iconBgStyle">
      <BaseIcon :name="icon" size="lg" :color="iconColor" />
    </div>
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-description">{{ description }}</p>
  </article>
</template>

<script setup>
import { colors } from '~/data/icons'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, default: 'blue' }
})

const colorConfig = computed(() => colors[props.color] || colors.blue)
const iconBgStyle = computed(() => ({ backgroundColor: colorConfig.value.bg }))
const iconColor = computed(() => colorConfig.value.text)
</script>

<style scoped>
.feature-card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-0.25rem);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
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
</style>
