/**
 * SEO管理Composable
 * 提供动态元数据管理功能
 */

export const useSEO = (options = {}) => {
  const {
    title = '',
    description = '',
    keywords = [],
    image = '',
    url = '',
    type = 'website',
    locale = 'zh_CN',
    siteName = '炼丹蓝图 - AI架构设计工具',
    author = '',
    publishedTime = '',
    modifiedTime = '',
    section = '',
    tags = []
  } = options

  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  
  // 基础URL
  const baseUrl = runtimeConfig.public.siteUrl || 'https://lianlan.design'
  const currentUrl = url || `${baseUrl}${route.path}`
  
  // 默认图片
  const defaultImage = `${baseUrl}/og-image.jpg`
  const ogImage = image || defaultImage

  // 构建完整标题
  const fullTitle = title ? `${title} | ${siteName}` : siteName

  // 基础meta标签
  const metaTags = [
    // 基础SEO
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    
    // Open Graph
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: currentUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:locale', content: locale },
    { property: 'og:site_name', content: siteName },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    
    // 作者信息
    ...(author ? [{ name: 'author', content: author }] : []),
    
    // 文章特定meta（如果是文章类型）
    ...(type === 'article' && publishedTime ? [
      { property: 'article:published_time', content: publishedTime },
      { property: 'article:modified_time', content: modifiedTime || publishedTime },
      { property: 'article:author', content: author },
      { property: 'article:section', content: section }
    ] : []),
    
    // 文章标签
    ...tags.map(tag => ({ property: 'article:tag', content: tag }))
  ]

  // 设置页面meta
  useHead({
    title: fullTitle,
    meta: metaTags,
    link: [
      { rel: 'canonical', href: currentUrl }
    ]
  })

  // 返回SEO数据供其他用途使用
  return {
    title: fullTitle,
    description,
    keywords,
    image: ogImage,
    url: currentUrl,
    type,
    locale,
    siteName
  }
}

/**
 * 生成面包屑导航的SEO数据
 */
export const useBreadcrumbs = (items = []) => {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  const baseUrl = runtimeConfig.public.siteUrl || 'https://lianlan.design'

  // 自动生成面包屑（如果未提供）
  if (items.length === 0) {
    const pathSegments = route.path.split('/').filter(Boolean)
    items = [
      { name: '首页', url: baseUrl }
    ]
    
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      items.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        url: `${baseUrl}${currentPath}`
      })
    })
  }

  // 生成JSON-LD格式的面包屑
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return {
    items,
    jsonLd: breadcrumbList
  }
}

/**
 * FAQ结构化数据
 */
export const useFAQ = (faqs = []) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return {
    faqs,
    jsonLd: faqSchema
  }
}

/**
 * 文章/博客结构化数据
 */
export const useArticle = (options = {}) => {
  const {
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author = { name: '炼丹蓝图团队', url: 'https://lianlan.design/about' },
    publisher = {
      name: '炼丹蓝图',
      logo: 'https://lianlan.design/logo.png'
    }
  } = options

  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  const baseUrl = runtimeConfig.public.siteUrl || 'https://lianlan.design'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${route.path}`
    }
  }

  return {
    jsonLd: articleSchema
  }
}