// 动态生成sitemap.xml
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const siteUrl = config.public.siteUrl;
  
  // 定义所有需要索引的路由
  const routes = [
    { loc: '/', changefreq: 'daily', priority: 1.0 }
  ];
  
  // 生成XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(route => `  <url>
    <loc>${siteUrl}${route.loc}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
    ${route.loc !== '/' ? `<xhtml:link rel="alternate" hreflang="zh-CN" href="${siteUrl}${route.loc}"/>
    <xhtml:link rel="alternate" hreflang="en-US" href="${siteUrl}/en${route.loc}"/>` : ''}
  </url>`).join('\n')}
</urlset>`;
  
  // 设置响应头
  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  
  return sitemap;
});