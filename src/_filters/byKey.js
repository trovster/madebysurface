module.exports = (collection = [], key = '') => {
  return collection.filter(item => item.data.key === key).pop()
}
