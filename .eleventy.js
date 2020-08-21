const collections = require('./src/_data/collections.js')
const absoluteUrl = require('./src/_filters/absoluteUrl')
const byKey = require('./src/_filters/byKey')
const bySlug = require('./src/_filters/bySlug')

module.exports = function (config) {
  config.addPassthroughCopy({
    'src/admin': 'admin/',
    'src/assets/img': 'img/',
    'src/assets/fonts': 'fonts/',
    'src/assets/favicon.svg': 'favicon.svg',
    'src/assets/favicon.ico': 'favicon.ico',
    'src/assets/icon.png': 'icon.png',
    'src/assets/safari-pinned-tab.svg': 'safari-pinned-tab.svg',
    'src/assets/browserconfig.xml': 'browserconfig.xml',
    'src/assets/site.webmanifest': 'site.webmanifest'
  })

  Object.keys(collections).forEach((collectionName) => {
    config.addCollection(collectionName, collections[collectionName])
  })

  config.addFilter('absoluteUrl', (href, base) => absoluteUrl(href, base))
  config.addFilter('byKey', (collection, key) => byKey(collection, key))
  config.addFilter('bySlug', (collection, slug) => bySlug(collection, slug))

  config.addShortcode('icon', (data) => {
    return `<svg viewBox="0 0 30 24" class="icon icon--${data.key}"><use xlink:href="${config.getFilter('url')(data.icon, '/')}"></use></svg>`
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
