module.exports = {
  expertise: (collection) => {
    return collection.getFilteredByGlob(['./src/expertise/*.md'])
  },
  testimonials: (collection) => {
    return collection.getFilteredByGlob(['./src/testimonials/*.md']).sort((a, b) => {
      const aNumber = parseInt(a.data.page.fileSlug, 10)
      const bNumber = parseInt(b.data.page.fileSlug, 10)

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
