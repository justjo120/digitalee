module.exports = {
  root: true,
  ignorePatterns: ["static/", "node_modules/", "dist/"],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // parser: '@typescript-eslint/parser',
    // project: './tsconfig.json',
    // extraFileExtensions: ['.vue'],
  },
  extends: [
    'prettier/vue',
    'plugin:nuxt/recommended',
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'comma-dangle': ['error', 'only-multiline' ],
    'vue/html-self-closing': ['error'],
    'vue/multiline-html-element-content-newline': ['error'],
    'vue/valid-template-root': ['error'],
  }
}
