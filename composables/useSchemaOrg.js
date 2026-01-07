/**
 * Schema.org 结构化数据组合式函数
 * 
 * 功能：
 * - 注入JSON-LD结构化数据到页面头部
 * - 支持多种Schema类型（Organization、WebSite、SoftwareApplication等）
 * - 帮助搜索引擎更好地理解页面内容
 * - 提升搜索结果的富媒体展示（Rich Snippets）
 * 
 * @param {Object|Object[]} schema - Schema.org结构化数据对象或数组
 */
export const useSchemaOrg = (schema) => {
  // 确保schema是数组格式
  const schemaArray = Array.isArray(schema) ? schema : [schema]
  
  // 注入JSON-LD脚本
  useHead({
    script: schemaArray.map(item => ({
      type: 'application/ld+json',
      children: JSON.stringify(item)
    }))
  })
}

/**
 * 创建Organization结构化数据
 * 用于描述组织/公司信息
 * 
 * @param {Object} options - 组织信息配置
 * @returns {Object} Schema.org Organization对象
 */
export const createOrganizationSchema = (options = {}) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://aib.hujiarong.site'
  const siteName = config.public.siteName || '炼丹蓝图'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: options.name || siteName,
    url: options.url || baseUrl,
    logo: options.logo || `${baseUrl}/logo.svg`,
    description: options.description || '专业的AI架构设计工具',
    // 社交媒体链接
    sameAs: options.sameAs || [],
    // 联系信息
    contactPoint: options.contactPoint || {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Chinese', 'English']
    }
  }
}

/**
 * 创建WebSite结构化数据
 * 用于描述网站信息，支持站内搜索
 * 
 * @param {Object} options - 网站信息配置
 * @returns {Object} Schema.org WebSite对象
 */
export const createWebSiteSchema = (options = {}) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://aib.hujiarong.site'
  const siteName = config.public.siteName || '炼丹蓝图'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: options.name || siteName,
    url: options.url || baseUrl,
    description: options.description || '专业的AI架构设计工具',
    inLanguage: options.inLanguage || 'zh-CN',
    // 发布者信息
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.svg`
      }
    }
  }
  
  // 如果有站内搜索功能，添加搜索操作
  if (options.hasSearch) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
  
  return schema
}

/**
 * 创建SoftwareApplication结构化数据
 * 用于描述软件/应用信息
 * 
 * @param {Object} options - 软件信息配置
 * @returns {Object} Schema.org SoftwareApplication对象
 */
export const createSoftwareApplicationSchema = (options = {}) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://aib.hujiarong.site'
  const siteName = config.public.siteName || '炼丹蓝图'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: options.name || siteName,
    description: options.description || '专业的AI架构设计工具，帮助开发者快速构建高质量的AI应用架构方案',
    url: options.url || baseUrl,
    applicationCategory: options.applicationCategory || 'DeveloperApplication',
    operatingSystem: options.operatingSystem || 'Web',
    // 价格信息
    offers: options.offers || {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock'
    },
    // 评分信息（如果有）
    ...(options.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: options.aggregateRating.ratingValue,
        ratingCount: options.aggregateRating.ratingCount,
        bestRating: options.aggregateRating.bestRating || '5',
        worstRating: options.aggregateRating.worstRating || '1'
      }
    }),
    // 功能特性
    featureList: options.featureList || [
      'AI架构设计',
      '可视化编辑',
      '模板库',
      '团队协作',
      '导出功能'
    ],
    // 截图
    screenshot: options.screenshot || `${baseUrl}/og-image.jpg`,
    // 软件版本
    softwareVersion: options.softwareVersion || '1.0.0',
    // 发布日期
    datePublished: options.datePublished || '2024-01-01',
    // 作者/开发者
    author: {
      '@type': 'Organization',
      name: siteName,
      url: baseUrl
    }
  }
}

/**
 * 创建WebPage结构化数据
 * 用于描述网页信息
 * 
 * @param {Object} options - 网页信息配置
 * @returns {Object} Schema.org WebPage对象
 */
export const createWebPageSchema = (options = {}) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const baseUrl = config.public.siteUrl || 'https://aib.hujiarong.site'
  const siteName = config.public.siteName || '炼丹蓝图'
  const currentUrl = `${baseUrl}${route.path}`
  
  return {
    '@context': 'https://schema.org',
    '@type': options.type || 'WebPage',
    name: options.name || siteName,
    description: options.description || '专业的AI架构设计工具',
    url: options.url || currentUrl,
    inLanguage: options.inLanguage || 'zh-CN',
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: baseUrl
    },
    // 主要实体
    ...(options.mainEntity && {
      mainEntity: options.mainEntity
    }),
    // 面包屑导航
    ...(options.breadcrumb && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: options.breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }
    }),
    // 发布日期
    ...(options.datePublished && {
      datePublished: options.datePublished
    }),
    // 修改日期
    ...(options.dateModified && {
      dateModified: options.dateModified
    })
  }
}

/**
 * 创建FAQPage结构化数据
 * 用于FAQ页面，可在搜索结果中显示问答
 * 
 * @param {Object[]} faqs - FAQ数组，每项包含question和answer
 * @returns {Object} Schema.org FAQPage对象
 */
export const createFAQSchema = (faqs = []) => {
  return {
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
}

/**
 * 创建BreadcrumbList结构化数据
 * 用于面包屑导航
 * 
 * @param {Object[]} items - 面包屑项数组，每项包含name和url
 * @returns {Object} Schema.org BreadcrumbList对象
 */
export const createBreadcrumbSchema = (items = []) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

/**
 * 创建Article结构化数据
 * 用于文章/博客页面
 * 
 * @param {Object} options - 文章信息配置
 * @returns {Object} Schema.org Article对象
 */
export const createArticleSchema = (options = {}) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://aib.hujiarong.site'
  const siteName = config.public.siteName || '炼丹蓝图'
  
  return {
    '@context': 'https://schema.org',
    '@type': options.type || 'Article',
    headline: options.headline || options.title,
    description: options.description,
    image: options.image || `${baseUrl}/og-image.jpg`,
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    author: {
      '@type': options.authorType || 'Organization',
      name: options.author || siteName,
      url: options.authorUrl || baseUrl
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.svg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': options.url || baseUrl
    },
    // 文章分类
    ...(options.articleSection && {
      articleSection: options.articleSection
    }),
    // 关键词
    ...(options.keywords && {
      keywords: options.keywords.join(', ')
    }),
    // 字数
    ...(options.wordCount && {
      wordCount: options.wordCount
    })
  }
}
