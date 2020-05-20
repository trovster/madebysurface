const site = {
  title: 'Surface',
  summary: 'A personal web development service specialising in Laravel and WordPress. Transforming your ideas into beautiful and fully interactive websites.',
  author: 'Trevor Morris',
  url: 'https://www.madebysurface.co.uk',
  baseUrl: '/',
  email: 'hello@madebysurface.co.uk',
  telephone: '07884 182 178',
  address: {
    street: '21 Little Tixall Lane',
    locality: 'Great Haywood',
    region: 'Staffordshire',
    postcode: 'ST18 0SE'
  }
}

module.exports = () => {
  if (process.env.ELEVENTY_BASE_URL) {
    site.baseUrl = process.env.ELEVENTY_BASE_URL
  }

  if (process.env.VERCEL_URL) {
    site.baseUrl = `https://${process.env.VERCEL_URL}`
  }

  return site
}
