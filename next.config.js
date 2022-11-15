const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

module.exports = withPlugins([withPWA], {
  pwa: {

    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    sw: '/sw.js',
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  images: {
    domains: ['eduardomg12.github.io'],
  },
})
