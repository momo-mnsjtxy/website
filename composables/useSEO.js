export const useSEO = (options = {}) => {
  const { title = "", description = "", keywords = [], image = "", type = "website" } = options
  const route = useRoute()
  const config = useRuntimeConfig()
  
  const baseUrl = config.public.siteUrl
  const currentUrl = `${baseUrl}${route.path}`
  const ogImage = image || `${baseUrl}/og-image.jpg`

  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { name: "keywords", content: keywords.join(", ") },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: currentUrl },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    link: [{ rel: "canonical", href: currentUrl }],
  })
}
