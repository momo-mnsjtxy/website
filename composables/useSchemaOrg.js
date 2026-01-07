export const useSchemaOrg = (schema) => {
  useHead({
    script: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  })
}
