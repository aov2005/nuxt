const path = require('path');
module.exports = {
  /*
    ** Headers of the page
    */
  head: {
    title: 'Hello World',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
    ** Customize the progress bar color
    */
  loading: { color: '#3B8070' },
  srcDir: path.join(__dirname, 'client/'),
  buildDir: './www/static/nuxt/',

  /*
  ** Build configuration
  */
  build: {
    cssSourceMap: false,
    publicPath: '/static/nuxt/dist/',
    extend(config, { dev }) {
      config.devtool = (dev ? 'eval-source-map' : false);
    }
  }
};
