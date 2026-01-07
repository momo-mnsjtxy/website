/**
 * 动态生成 robots.txt
 * 
 * 功能：
 * - 控制搜索引擎爬虫的访问权限
 * - 指定sitemap位置
 * - 针对不同爬虫设置不同规则
 * - 保护敏感目录
 */
export default defineEventHandler((event) => {
  // 获取运行时配置
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://aib.hujiarong.site'
  
  // ==================== 生成robots.txt内容 ====================
  const robots = `# ==========================================
# robots.txt for ${siteUrl}
# 炼丹蓝图 - AI架构设计工具
# ==========================================

# 默认规则（适用于所有爬虫）
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_nuxt/builds/
Disallow: /_nuxt/chunks/
Disallow: /admin/
Disallow: /private/

# Sitemap位置
Sitemap: ${siteUrl}/sitemap.xml

# ==========================================
# 主要搜索引擎特定规则
# ==========================================

# Google爬虫
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Google图片爬虫
User-agent: Googlebot-Image
Allow: /images/
Allow: /og-image.jpg
Allow: /logo.svg

# Bing爬虫
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# 百度爬虫
User-agent: Baiduspider
Allow: /
Crawl-delay: 2

# 搜狗爬虫
User-agent: Sogou web spider
Allow: /
Crawl-delay: 2

# 360爬虫
User-agent: 360Spider
Allow: /
Crawl-delay: 2

# 神马爬虫
User-agent: YisouSpider
Allow: /
Crawl-delay: 2

# Yandex爬虫（俄罗斯）
User-agent: Yandex
Allow: /
Crawl-delay: 2

# DuckDuckGo爬虫
User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

# ==========================================
# 社交媒体爬虫（用于分享卡片）
# ==========================================

# Facebook爬虫
User-agent: facebookexternalhit
Allow: /

# Twitter爬虫
User-agent: Twitterbot
Allow: /

# LinkedIn爬虫
User-agent: LinkedInBot
Allow: /

# Pinterest爬虫
User-agent: Pinterest
Allow: /

# Telegram爬虫
User-agent: TelegramBot
Allow: /

# WhatsApp爬虫
User-agent: WhatsApp
Allow: /

# Slack爬虫
User-agent: Slackbot
Allow: /

# Discord爬虫
User-agent: Discordbot
Allow: /

# 微信爬虫
User-agent: WeChatBot
Allow: /

# ==========================================
# 阻止恶意爬虫
# ==========================================

# 阻止一些已知的恶意爬虫
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: BLEXBot
Disallow: /

# ==========================================
# 其他设置
# ==========================================

# 主机声明
Host: ${siteUrl}
`
  
  // ==================== 设置响应头 ====================
  event.node.res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  // 缓存24小时
  event.node.res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400')
  
  return robots
})
