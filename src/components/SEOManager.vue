<template>
  <div>
    <!-- 动态Meta标签 -->
    <component
      :is="'script'"
      type="application/ld+json"
      v-html="jsonLdScript"
    ></component>
    <component
      :is="'script'"
      type="application/ld+json"
      v-html="softwareJsonLdScript"
    ></component>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useHead } from "@vueuse/head";
import { useSEO } from "../composables/useSEO";

const props = defineProps({
  pageData: {
    type: Object,
    default: () => ({}),
  },
});

// 使用SEO组合式函数
const {
  title,
  description,
  keywords,
  openGraph,
  twitter,
  jsonLd,
  softwareJsonLd,
} = useSEO(props.pageData);

// 生成JSON-LD脚本
const jsonLdScript = computed(() => JSON.stringify(jsonLd.value));
const softwareJsonLdScript = computed(() =>
  JSON.stringify(softwareJsonLd.value)
);

// 动态更新head标签
useHead({
  title: title,
  meta: [
    // 基础Meta
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content: keywords,
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    },

    // Open Graph
    {
      property: "og:title",
      content: openGraph.value.title,
    },
    {
      property: "og:description",
      content: openGraph.value.description,
    },
    {
      property: "og:url",
      content: openGraph.value.url,
    },
    {
      property: "og:image",
      content: openGraph.value.image,
    },
    {
      property: "og:type",
      content: openGraph.value.type,
    },
    {
      property: "og:locale",
      content: openGraph.value.locale,
    },
    {
      property: "og:site_name",
      content: openGraph.value.site_name,
    },

    // Twitter Card
    {
      name: "twitter:card",
      content: twitter.value.card,
    },
    {
      name: "twitter:site",
      content: twitter.value.site,
    },
    {
      name: "twitter:creator",
      content: twitter.value.creator,
    },
    {
      name: "twitter:title",
      content: twitter.value.title,
    },
    {
      name: "twitter:description",
      content: twitter.value.description,
    },
    {
      name: "twitter:image",
      content: twitter.value.image,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: openGraph.value.url,
    },
  ],
});

// 监听页面数据变化
watch(
  () => props.pageData,
  (newData) => {
    if (newData && Object.keys(newData).length > 0) {
      console.log("SEO数据已更新:", newData);
    }
  },
  { deep: true }
);
</script>

<style scoped>
/* SEO管理器不需要样式 */
</style>
