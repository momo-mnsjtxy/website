<!--
  VTuber Logo 展示板块组件
  在 Audience 和 CTA 之间展示 VTuber Logo 大卡片
  - 纯白背景，居中展示
  - 响应式缩放，适配各种屏幕
  - 轻微浮动动画，增加动感
-->
<template>
    <section class="vtuber-showcase">
        <div class="container">
            <div class="logo-wrapper float-animation">
                <img src="/images/VTuberLogo.svg" alt="VTuber Logo" class="vtuber-logo" loading="lazy" />
            </div>
        </div>
    </section>
</template>

<script setup>
// 无需额外逻辑，纯展示组件
</script>

<style scoped>
/* 板块容器 - 纯白背景 */
.vtuber-showcase {
    padding: 4rem 0;
    /* 上下留白，让 Logo 有呼吸感 */
    background-color: var(--white);
    /* 纯白背景 */
}

@media (min-width: 768px) {
    .vtuber-showcase {
        padding: 5rem 0;
        /* 平板及以上增加留白 */
    }
}

@media (min-width: 1024px) {
    .vtuber-showcase {
        padding: 6rem 0;
        /* 桌面端进一步增加留白 */
    }
}

/* 容器 - 限制最大宽度 */
.container {
    max-width: 1200px;
    /* 与其他板块保持一致 */
    margin: 0 auto;
    /* 水平居中 */
    padding: 0 1rem;
    /* 移动端左右内边距 */
}

@media (min-width: 640px) {
    .container {
        padding: 0 1.5rem;
        /* 小屏幕增加内边距 */
    }
}

@media (min-width: 1024px) {
    .container {
        padding: 0 2rem;
        /* 桌面端内边距 */
    }
}

/* Logo 包装器 - 居中对齐 */
.logo-wrapper {
    display: flex;
    /* 使用 flex 布局 */
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    animation: float 6s ease-in-out infinite;
    /* 浮动动画 */
}

/* 浮动动画 - 轻微上下浮动 */
@keyframes float {
    0% {
        transform: translateY(0px);
        /* 初始位置 */
    }

    50% {
        transform: translateY(-10px);
        /* 向上浮动 10px */
    }

    100% {
        transform: translateY(0px);
        /* 回到初始位置 */
    }
}

/* VTuber Logo 图片 - 响应式缩放 */
.vtuber-logo {
    width: 90%;
    /* 移动端占 90% 宽度 */
    max-width: 600px;
    /* 移动端最大 600px */
    height: auto;
    /* 保持宽高比 */
    display: block;
    /* 块级元素 */
    border-radius: 1.5rem;
    /* 圆角 */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    /* 轻微阴影 */
    transition: all 0.3s ease;
    /* 过渡动画 */
}

@media (min-width: 768px) {
    .vtuber-logo {
        width: 80%;
        /* 平板占 80% 宽度 */
        max-width: 800px;
        /* 平板最大 800px */
    }
}

@media (min-width: 1024px) {
    .vtuber-logo {
        width: 70%;
        /* 桌面端占 70% 宽度 */
        max-width: 1000px;
        /* 桌面端最大 1000px */
    }
}

/* 鼠标悬停效果 - 轻微放大 */
.vtuber-logo:hover {
    transform: scale(1.02);
    /* 放大 2% */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    /* 增强阴影 */
}
</style>
