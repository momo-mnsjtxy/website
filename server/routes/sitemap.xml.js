/**
 * 动态生成 sitemap.xml
 * 
 * 功能：
 * - 列出网站所有可索引的页面
 * - 支持多语言版本（hreflang）
 * - 设置页面优先级和更新频率
 * - 帮助搜索引擎更好地爬取网站
 */
export default defineEventHandler(async (event) => {
  // 获取运行时配置
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://aib.hujiarong.site'
  
  // 当前日期（用于lastmod）
  const currentDate = new Date().toISOString()
  
  // ==================== 定义所有需要索引的路由 ====================
  const routes = [
    // 首页（最高优先级）
    { 
      loc: '/', 
      changefreq: 'daily', 
      priority: 1.0,
      // 多语言版本
      alternates: [
        { hreflang: 'zh-CN', href: siteUrl },
        { hreflang: 'en-US', href: `${siteUrl}/en-US` },
        { hreflang: 'x-default', href: siteUrl }
      ]
    },
    // 英文首页
    { 
      loc: '/en-US', 
      changefreq: 'daily', 
      priority: 0.9,
      alternates: [
        { hreflang: 'zh-CN', href: siteUrl },
        { hreflang: 'en-US', href: `${siteUrl}/en-US` },
        { hreflang: 'x-default', href: siteUrl }
      ]
    }
    // 如果有更多页面，在这里添加
    // { loc: '/about', changefreq: 'weekly', priority: 0.8 },
    // { loc: '/features', changefreq: 'weekly', priority: 0.8 },
  ]
  
  // ==================== 生成XML ====================
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes.map(route => `  <url>
    <loc>${siteUrl}${route.loc === '/' ? '' : route.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${route.alternates ? route.alternates.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`).join('\n') : ''}
    <image:image>
      <image:loc>${siteUrl}/og-image.jpg</image:loc>
      <image:title>炼丹蓝图 - AI架构设计工具</image:title>
      <image:caption>专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`
  
  // ==================== 设置响应头 ====================
  event.node.res.setHeader('Content-Type', 'application/xml')
  // 缓存1小时
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600')
  
  return sitemap
})
