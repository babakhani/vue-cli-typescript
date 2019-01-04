const path = require('path');
const webpack = require('webpack')
module.exports = {
  devServer: {
    overlay: {
      errors: true
    }
  },
  pluginOptions: {
    configureWebpack: {
      plugins: [
        new webpack.DefinePlugin({
          VERSION: JSON.stringify(require('./package.json').version)
        })
      ]
    },
    i18n: {
      locale: 'fa',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
