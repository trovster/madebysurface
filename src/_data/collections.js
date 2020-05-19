module.exports = {
  expertise: (collection) => {
    return collection.getFilteredByGlob(['./src/expertise/*.md'])
  },
  testimonials: (collection) => {
    return collection.getFilteredByGlob(['./src/testimonials/*.md'])
  }
}
