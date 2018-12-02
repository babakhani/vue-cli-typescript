module.exports = {
  devServer: {
    overlay: {
      warnings: true,
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
