<template>
  <svg 
    class="base-icon" 
    :class="sizeClass"
    :style="{ color }"
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      :d="path"
    />
  </svg>
</template>

<script setup>
import { iconPaths } from '~/data/icons'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: 'md' },
  color: { type: String, default: 'currentColor' }
})

const path = computed(() => iconPaths[props.name] || '')

const sizeClass = computed(() => `icon-${props.size}`)
</script>

<style scoped>
.base-icon {
  flex-shrink: 0;
}

.icon-sm { width: 1rem; height: 1rem; }
.icon-md { width: 1.25rem; height: 1.25rem; }
.icon-lg { width: 1.5rem; height: 1.5rem; }
.icon-xl { width: 2rem; height: 2rem; }
</style>
