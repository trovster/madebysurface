const collections = require('./src/_data/collections.js')

module.exports = function (config) {
  config.addPassthroughCopy({
    'src/assets/img': 'img/',
    'src/assets/fonts': 'fonts/',
    'src/assets/favicon.svg': 'favicon.svg',
    'src/assets/favicon.ico': 'favicon.ico'
  })

  Object.keys(collections).forEach((collectionName) => {
    config.addCollection(collectionName, collections[collectionName])
  })

  config.addFilter('byKey', (collection, key) => {
    return collection.filter(item => item.data.key === key).pop()
  })

  config.addFilter('bySlug', (collection, slug) => {
    return collection.filter(item => item.data.page.fileSlug === slug).pop()
  })

  config.addShortcode('icon', (data) => {
    return `<svg viewBox="0 0 30 24" class="icon icon--${data.key}"><use xlink:href="${data.icon}"></use></svg>`
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts'
    },
    passthroughFileCopy: true
  }
}
