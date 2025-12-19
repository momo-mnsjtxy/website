<template>
  <nav aria-label="面包屑导航" class="breadcrumb">
    <ol class="breadcrumb-list">
      <li 
        v-for="(item, index) in items" 
        :key="index"
        class="breadcrumb-item"
        :class="{ 'active': index === items.length - 1 }"
      >
        <NuxtLink 
          v-if="index < items.length - 1" 
          :to="item.path"
          class="breadcrumb-link"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else class="breadcrumb-current">
          {{ item.name }}
        </span>
        <span v-if="index < items.length - 1" class="breadcrumb-separator" aria-hidden="true">
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(item => item.name && item.path);
    }
  }
});

// 生成Schema.org面包屑结构化数据
const breadcrumbSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${useRuntimeConfig().public.siteUrl}${item.path}`
  }))
}));

// 注入结构化数据到head
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema.value)
    }
  ]
});
</script>

<style scoped>
.breadcrumb {
  margin: 1rem 0;
  padding: 0.75rem 0;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-link {
  color: #6366f1;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #4f46e5;
  text-decoration: underline;
}

.breadcrumb-current {
  color: #6b7280;
  font-weight: 500;
}

.breadcrumb-separator {
  color: #d1d5db;
  user-select: none;
}

.breadcrumb-item.active {
  color: #111827;
}

/* 响应式设计 */
@media (max-width: 640px) {
  .breadcrumb-list {
    font-size: 0.8125rem;
  }
}
</style>