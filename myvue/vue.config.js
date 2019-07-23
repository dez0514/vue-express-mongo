// vue.config.js
const fs = require('fs')
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      // sass: {
      //   data: fs.readFileSync('src/styles/variable.scss', 'utf-8')
      // }
    }
  },
  configureWebpack: config => {
    require('vux-loader').merge(config, {
        options: {},
        plugins: ['vux-ui']
    })
  }
}