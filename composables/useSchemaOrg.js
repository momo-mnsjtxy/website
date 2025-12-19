/**
 * Schema.org结构化数据Composable
 * 提供各种类型的结构化数据生成功能
 */

/**
 * 注入结构化数据到页面
 */
export const useSchemaOrg = (schema) => {
  useHead({
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  });
};

/**
 * 生成SoftwareApplication结构化数据（用于首页）
 */
export const useSoftwareApplicationSchema = (options = {}) => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.siteUrl || "https://aib.hujiarong.site";

  const {
    name = "炼丹蓝图",
    description = "AI架构设计工具，智能生成技术架构方案",
    applicationCategory = "DeveloperApplication",
    operatingSystem = "Web",
    offers = {
      price: "0",
      priceCurrency: "CNY",
    },
    aggregateRating = {
      ratingValue: "4.8",
      ratingCount: "156",
      reviewCount: "89",
    },
  } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    operatingSystem,
    url: baseUrl,
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.ratingCount,
      reviewCount: aggregateRating.reviewCount,
    },
  };

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成WebSite结构化数据（搜索功能）
 */
export const useWebSiteSchema = (options = {}) => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.siteUrl || "https://aib.hujiarong.site";

  const {
    name = "炼丹蓝图",
    searchUrl = `${baseUrl}/search?q={search_term_string}`,
    potentialActions = true,
  } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url: baseUrl,
  };

  if (potentialActions) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchUrl,
      },
      "query-input": "required name=search_term_string",
    };
  }

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成Organization结构化数据
 */
export const useOrganizationSchema = (options = {}) => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.siteUrl || "https://aib.hujiarong.site";

  const {
    name = "炼丹蓝图",
    description = "专注于AI架构设计的创新团队",
    logo = `${baseUrl}/logo.png`,
    contactPoint = {
      telephone: "+86-xxx-xxxx",
      contactType: "customer service",
      email: "contact@aib.hujiarong.site",
    },
    sameAs = [
      "https://twitter.com/lianlan",
      "https://github.com/lianlan",
      "https://linkedin.com/company/lianlan",
    ],
  } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
      email: contactPoint.email,
    },
    sameAs,
  };

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成Article结构化数据
 */
export const useArticleSchema = (options = {}) => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.siteUrl || "https://aib.hujiarong.site";

  const {
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author = {
      name: "炼丹蓝图团队",
      url: `${baseUrl}/about`,
    },
    publisher = {
      name: "炼丹蓝图",
      logo: `${baseUrl}/logo.png`,
    },
    keywords = [],
  } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      logo: {
        "@type": "ImageObject",
        url: publisher.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}${route.path}`,
    },
    keywords: keywords.join(", "),
  };

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成BreadcrumbList结构化数据
 */
export const useBreadcrumbSchema = (items = []) => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.siteUrl || "https://aib.hujiarong.site";

  // 自动生成面包屑（如果未提供）
  if (items.length === 0) {
    const pathSegments = route.path.split("/").filter(Boolean);
    items = [{ name: "首页", url: baseUrl }];

    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      items.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        url: `${baseUrl}${currentPath}`,
      });
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成FAQPage结构化数据
 */
export const useFAQSchema = (faqs = []) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成HowTo结构化数据（教程/指南）
 */
export const useHowToSchema = (options = {}) => {
  const { name, description, image, totalTime, steps = [] } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image,
    totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  };

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成Product结构化数据
 */
export const useProductSchema = (options = {}) => {
  const {
    name,
    description,
    image,
    brand = "炼丹蓝图",
    offers = {
      price: "0",
      priceCurrency: "CNY",
      availability: "https://schema.org/InStock",
    },
    aggregateRating = null,
  } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: offers.availability,
    },
  };

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.ratingCount,
      reviewCount: aggregateRating.reviewCount,
    };
  }

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成Course结构化数据（课程/教程）
 */
export const useCourseSchema = (options = {}) => {
  const runtimeConfig = useRuntimeConfig();
  const baseUrl = runtimeConfig.public.siteUrl || "https://aib.hujiarong.site";

  const {
    name,
    description,
    provider = "炼丹蓝图",
    courseMode = "online",
    educationalLevel = "Intermediate",
    timeRequired = "P1M",
  } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: baseUrl,
    },
    courseMode,
    educationalLevel,
    timeRequired,
  };

  useSchemaOrg(schema);
  return schema;
};

/**
 * 生成VideoObject结构化数据
 */
export const useVideoSchema = (options = {}) => {
  const {
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
  } = options;

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
  };

  useSchemaOrg(schema);
  return schema;
};
