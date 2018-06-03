// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    /*
    'plugin:vue/base', // Settings and rules to enable correct ESLint parsing
    'plugin:vue/essential', // Above, plus rules to prevent errors or unintended behavior
    'plugin:vue/strongly-recommended', // Above, plus rules to considerably improve code readability and/or dev experience
    'plugin:vue/recommended' // Above, plus rules to enforce subjective community defaults to ensure consistency
    */
    'plugin:vue/strongly-recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': [
      'off', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': true
      }
    }],
    'vue/mustache-interpolation-spacing': 'off',
    'space-in-parens': 'off'
  }
}
