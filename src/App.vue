<template>
  <div class="app">
    <Navbar />
    <Hero />
    <Features />
    <Audience />
    <Cta />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Audience from './components/Audience.vue'
import Cta from './components/Cta.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* 引入全局样式 */
@import './assets/styles/global.css';

/* 重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  background-color: var(--brand-bg);
  color: var(--slate-700);
  line-height: 1.6;
  overflow-x: hidden;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 选择文本样式 */
::selection {
  background-color: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
}
</style>