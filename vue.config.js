module.exports = {
  devServer: {
    overlay: {
      errors: true
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'fa',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
