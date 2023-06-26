/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended',
    '@vue/eslint-config-prettier', 'plugin:vitest-globals/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: [1, 'always']
  },
  env: {
    es6: true,
    browser: true,
    es2021: true,
    "vitest-globals/env": true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
