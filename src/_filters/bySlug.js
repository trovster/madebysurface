module.exports = (collection = [], slug = '') => {
  return collection.filter(item => item.data.page.fileSlug === slug).pop()
}
