module.exports = {
  expertise: (collection) => {
    return collection.getFilteredByGlob(['./src/_collections/expertise/*.md'])
  },
  playground: (collection) => {
    return collection.getFilteredByGlob(['./src/_collections/playground/*.md'])
  },
  testimonials: (collection) => {
    return collection.getFilteredByGlob(['./src/_collections/testimonials/*.md']).filter(t => t.data.enabled).sort((a, b) => {
      const aNumber = a.data.order || parseInt(a.data.page.fileSlug, 10)
      const bNumber = b.data.order || parseInt(b.data.page.fileSlug, 10)

      if (aNumber < bNumber) {
        return -1
      }

      if (aNumber > bNumber) {
        return 1
      }

      return 0
    })
  }
}
