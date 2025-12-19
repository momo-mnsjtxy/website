// 动态生成robots.txt
export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const siteUrl = config.public.siteUrl;
  
  const robots = `# robots.txt for ${siteUrl}
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_nuxt/

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# 爬虫延迟（毫秒）
Crawl-delay: 1

# 特定爬虫规则
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /
`;
  
  // 设置响应头
  event.node.res.setHeader('Content-Type', 'text/plain');
  event.node.res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  
  return robots;
});