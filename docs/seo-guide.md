# SEO 优化指南

本文档详细说明了炼丹蓝图网站的SEO配置和最佳实践。

## 目录

1. [社交媒体分享图片](#社交媒体分享图片)
2. [Meta标签配置](#meta标签配置)
3. [结构化数据](#结构化数据)
4. [Sitemap和Robots](#sitemap和robots)
5. [性能优化](#性能优化)
6. [多语言SEO](#多语言seo)

---

## 社交媒体分享图片

### 图片规格要求

为了在各社交媒体平台上获得最佳显示效果，需要准备以下图片：

#### 1. Open Graph 图片 (og-image.jpg)

- **尺寸**: 1200 x 630 像素（推荐）
- **格式**: JPG 或 PNG
- **文件大小**: 小于 8MB（推荐小于 300KB）
- **位置**: `/public/og-image.jpg`

**适用平台**:
- Facebook
- LinkedIn
- 微信
- QQ
- Telegram
- WhatsApp
- Discord
- Slack

#### 2. Twitter 图片

Twitter 使用与 Open Graph 相同的图片，但也支持：
- **summary_large_image**: 1200 x 630 像素
- **summary**: 144 x 144 像素（小卡片）

#### 3. 网站图标

| 文件名 | 尺寸 | 用途 |
|--------|------|------|
| `/public/logo.svg` | 矢量 | 主图标 |
| `/public/favicon-32x32.png` | 32x32 | 浏览器标签 |
| `/public/favicon-16x16.png` | 16x16 | 浏览器标签 |
| `/public/apple-touch-icon.png` | 180x180 | iOS设备 |

### 创建分享图片的建议

1. **包含品牌元素**: Logo、品牌色（#6366f1）
2. **清晰的标题**: 使用大字体显示网站名称
3. **简洁的描述**: 一句话说明产品价值
4. **视觉吸引力**: 使用高质量的图形或截图
5. **对比度**: 确保文字在各种背景下都清晰可读

### 图片模板示例

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│     [Logo]                                          │
│                                                     │
│     炼丹蓝图                                         │
│     AI架构设计工具                                   │
│                                                     │
│     专业的AI架构设计工具                             │
│     帮助开发者快速构建高质量的AI应用架构方案          │
│                                                     │
│     [产品截图或图形]                                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Meta标签配置

### 基础Meta标签

在 `nuxt.config.js` 中配置全局默认值：

```javascript
app: {
  head: {
    meta: [
      { name: 'description', content: '页面描述...' },
      { name: 'keywords', content: '关键词1,关键词2...' },
      { name: 'author', content: '作者名称' },
      { name: 'robots', content: 'index, follow' },
    ]
  }
}
```

### 页面级Meta标签

使用 `useSEO` composable 在页面中配置：

```javascript
useSEO({
  title: '页面标题',
  description: '页面描述（50-160字符）',
  keywords: ['关键词1', '关键词2'],
  image: 'https://example.com/og-image.jpg',
  type: 'website', // 或 'article'
  author: '作者名称',
  locale: 'zh_CN',
  alternateLocales: ['en_US']
})
```

### Open Graph 标签

自动生成的 Open Graph 标签包括：

| 标签 | 说明 |
|------|------|
| `og:title` | 分享标题 |
| `og:description` | 分享描述 |
| `og:type` | 内容类型 |
| `og:url` | 页面URL |
| `og:site_name` | 网站名称 |
| `og:locale` | 语言 |
| `og:image` | 分享图片 |
| `og:image:width` | 图片宽度 |
| `og:image:height` | 图片高度 |
| `og:image:alt` | 图片描述 |

### Twitter Card 标签

自动生成的 Twitter Card 标签包括：

| 标签 | 说明 |
|------|------|
| `twitter:card` | 卡片类型 |
| `twitter:title` | 标题 |
| `twitter:description` | 描述 |
| `twitter:image` | 图片 |
| `twitter:image:alt` | 图片描述 |

---

## 结构化数据

### 使用方法

使用 `useSchemaOrg` composable 注入结构化数据：

```javascript
import { 
  createOrganizationSchema,
  createWebSiteSchema,
  createSoftwareApplicationSchema
} from '~/composables/useSchemaOrg'

useSchemaOrg([
  createOrganizationSchema({ name: '组织名称' }),
  createWebSiteSchema({ name: '网站名称' }),
  createSoftwareApplicationSchema({ name: '应用名称' })
])
```

### 可用的Schema类型

1. **Organization** - 组织信息
2. **WebSite** - 网站信息
3. **SoftwareApplication** - 软件应用
4. **WebPage** - 网页信息
5. **Article** - 文章信息
6. **FAQPage** - FAQ页面
7. **BreadcrumbList** - 面包屑导航

### 验证工具

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

---

## Sitemap和Robots

### Sitemap

位置: `/sitemap.xml`

自动生成，包含：
- 所有页面URL
- 最后修改时间
- 更新频率
- 优先级
- 多语言版本（hreflang）
- 图片信息

### Robots.txt

位置: `/robots.txt`

配置内容：
- 允许/禁止的路径
- 各搜索引擎的爬取规则
- 社交媒体爬虫规则
- Sitemap位置

---

## 性能优化

### 图片优化

- 使用 `@nuxt/image` 模块
- 自动转换为 WebP 格式
- 响应式图片尺寸
- 懒加载

### 缓存策略

```javascript
// nuxt.config.js
nitro: {
  routeRules: {
    '/_nuxt/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
    }
  }
}
```

### 预渲染

```javascript
// nuxt.config.js
routeRules: {
  '/': { prerender: true },
  '/sitemap.xml': { prerender: true },
  '/robots.txt': { prerender: true }
}
```

---

## 多语言SEO

### hreflang 标签

自动生成多语言链接：

```html
<link rel="alternate" hreflang="zh-cn" href="https://example.com/" />
<link rel="alternate" hreflang="en-us" href="https://example.com/en-US" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />
```

### 配置方法

```javascript
useSEO({
  locale: 'zh_CN',
  alternateLocales: ['en_US']
})
```

---

## SEO检查清单

### 上线前检查

- [ ] 所有页面都有唯一的标题和描述
- [ ] og-image.jpg 已创建并上传
- [ ] 网站图标已配置
- [ ] sitemap.xml 可访问
- [ ] robots.txt 配置正确
- [ ] 结构化数据通过验证
- [ ] 页面加载速度良好（< 3秒）
- [ ] 移动端适配良好
- [ ] HTTPS 已启用

### 定期检查

- [ ] Google Search Console 无错误
- [ ] 核心页面被正确索引
- [ ] 分享卡片显示正常
- [ ] 无死链接

---

## 相关资源

- [Google SEO 入门指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Open Graph 协议](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org](https://schema.org/)
