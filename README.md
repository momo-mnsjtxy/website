# 炼丹蓝图官网

炼丹蓝图官方网站前端项目，基于 Nuxt 构建，提供多语言展示、SEO 优化、结构化数据与可维护的组件化页面架构。

## 项目特性

- 基于 Nuxt + Vue 的现代化站点架构
- 首页模块化拆分，组件职责清晰
- 内置中文 / 英文双语能力
- 预置 SEO 元信息、Open Graph、Twitter Card
- 自动生成 `sitemap.xml` 与 `robots.txt`
- 支持图片优化与静态资源缓存策略
- 支持 SSR 与预渲染混合输出

## 技术栈

- [`Nuxt`](package.json)
- [`Vue 3`](package.json)
- [`@nuxtjs/i18n`](package.json)
- [`@nuxt/image`](package.json)
- [`@vueuse/nuxt`](package.json)
- 原生 CSS（全局样式见 [`assets/styles/global.css`](assets/styles/global.css)）

## 快速开始

### 1) 安装依赖

任选一个包管理器：

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install

# bun
bun install
```

### 2) 启动开发环境

```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev

# bun
bun run dev
```

默认访问地址：`http://localhost:3000`

### 3) 构建与预览

```bash
# 构建
npm run build

# 预览构建产物
npm run preview

# 静态生成
npm run generate
```

## 目录结构

```text
.
├─ app.vue                        # 应用入口
├─ nuxt.config.js                 # Nuxt 全局配置（SEO/i18n/缓存/预渲染）
├─ package.json                   # 依赖与脚本
├─ pages/
│  └─ index.vue                   # 首页
├─ layouts/
│  └─ default.vue                 # 全局布局
├─ components/                    # 首页与通用组件
├─ composables/                   # 组合式能力（SEO、Schema.org）
├─ data/                          # 页面静态数据
├─ i18n/locales/                  # 多语言文案
├─ assets/styles/
│  └─ global.css                  # 全局样式与设计变量
├─ public/                        # 静态资源
├─ server/routes/                 # 服务端路由（robots/sitemap）
└─ scripts/                       # 部署脚本与说明
```

## 核心能力说明

### 多语言

- 默认语言：`zh-CN`
- 英文路径前缀：`/en-US`
- 文案文件：[`i18n/locales/zh-CN.js`](i18n/locales/zh-CN.js)、[`i18n/locales/en-US.js`](i18n/locales/en-US.js)

### SEO 与结构化数据

- 全局 SEO 配置位于 [`nuxt.config.js`](nuxt.config.js)
- 页面级 SEO 与 Schema 能力位于：
  - [`composables/useSEO.js`](composables/useSEO.js)
  - [`composables/useSchemaOrg.js`](composables/useSchemaOrg.js)
- 动态路由：
  - [`server/routes/sitemap.xml.js`](server/routes/sitemap.xml.js)
  - [`server/routes/robots.txt.js`](server/routes/robots.txt.js)

### 性能与发布策略

- SSR 开启，提升首屏与索引质量
- 配置了预渲染规则与静态资源缓存
- 图片通过 `@nuxt/image` 进行优化输出

## 常用脚本

脚本定义见 [`package.json`](package.json)。

- `dev`：本地开发
- `build`：生产构建
- `preview`：预览构建结果
- `generate`：静态生成
- `postinstall`：Nuxt 准备步骤

## 部署说明

项目包含 FTP 增量部署脚本：

- 脚本：[`scripts/deploy-ftp-incremental.ps1`](scripts/deploy-ftp-incremental.ps1)
- 详细文档：[`scripts/README.md`](scripts/README.md)

## 许可证

本项目采用 [`GNU General Public License v3.0`](LICENSE)。

如对外分发修改版本，请遵循 GPL v3 相关义务（包括保留许可证与开放对应源码）。
