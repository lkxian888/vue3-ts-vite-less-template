/*
 * @Description: your description
 * @Author: lkxian
 * @@@Email: lkxian888@163.com
 * @Date: 2022-08-27 13:34:48
 * @LastEditTime: 2022-08-27 18:10:17
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // "off" or 0 - 关闭规则
    // "warn" or 1 - 将规则视为一个警告
    // "error" or 2 - 将规则视为一个错误
    eqeqeq: 2, // 强制使用 === 和 !==
    htmlWhitespaceSensitivity: 0, // 忽略'>'下落问题
    // semi: [0],
    'prettier/prettier': [
      'error',
      {
        // singleQuote: true,
        // parser: 'flow'
        semi: true
      }
    ],
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: []
      }
    ]
  }
};
