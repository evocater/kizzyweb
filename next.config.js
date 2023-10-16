const withPWA = require('next-pwa')({
    dest: 'public',
    disable: true,
  })
  
  module.exports = withPWA({
    reactStrictMode: true,
    images: {
      domains: [
        "lh3.googleusercontent.com"
      ],
    }
  })