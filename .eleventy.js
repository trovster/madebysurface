const site = require('./src/_data/site.json');
const collections = require('./src/_data/collections.js');

module.exports = function (config) {
    config.addPassthroughCopy({
        'src/assets/img': 'img/',
        'src/assets/fonts': 'fonts/',
        'src/assets/favicon.svg': 'favicon.svg',
        'src/assets/favicon.ico': 'favicon.ico'
    });

    Object.keys(collections).forEach((collectionName) => {
        config.addCollection(collectionName, collections[collectionName]);
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            data: "_data",
            includes: "_includes",
            layouts: "_layouts"
        },
        passthroughFileCopy: true
    };
};
