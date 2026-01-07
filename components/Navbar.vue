<template>
  <nav class="navbar" role="navigation" aria-label="主导航">
    <div class="container">
      <div class="navbar-content">
        <a href="/" class="logo-link" aria-label="炼丹蓝图首页">
          <img src="/logo.svg" alt="炼丹蓝图LOGO" class="logo-icon" width="40" height="40">
          <span class="logo-text">炼丹蓝图</span>
        </a>

        <nav class="navbar-menu" aria-label="页面导航">
          <a href="#features" class="menu-item">核心功能</a>
          <a href="#audience" class="menu-item">目标用户</a>
          <a href="#cta" class="menu-item">立即体验</a>
        </nav>

        <div class="navbar-actions">
          <a href="#" class="btn-cta">下载·敬请期待</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--slate-100);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--slate-800);
}

.navbar-menu {
  display: none;
  gap: 2rem;
}

@media (min-width: 768px) { .navbar-menu { display: flex; } }

.menu-item {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--slate-600);
  transition: color 0.3s ease;
}

.menu-item:hover { color: var(--primary-color); }

.navbar-actions {
  display: flex;
  align-items: center;
}

.btn-cta {
  padding: 0.625rem 1.5rem;
  border-radius: 9999px;
  background-color: var(--slate-900);
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-cta:hover {
  background-color: var(--slate-800);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
