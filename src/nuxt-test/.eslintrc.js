module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'arrow-parens': 'off',
    'space-before-function-paren': 'off',
    'quotes': 'off',
    'eol-last': 'off',
    'semi': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}