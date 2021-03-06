module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "quotes": [2, "single", { "avoidEscape": true }],
    "space-before-function-paren": ["error", "always"],
    "indent": ["error", 2, { "SwitchCase": 1 }]
  }
}
