module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  plugins: [
    'typescript',
    // 'spellcheck',
    'vue'
  ],
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
    sourceType: 'module',
    parser: 'typescript-eslint-parser'
  }
}
