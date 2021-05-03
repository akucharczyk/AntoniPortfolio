module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint/eslint-plugin'],
  // add your custom rules here
  rules: {
    'max-len': ['error', { code: 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
    'no-console': ['error'],
    'no-warning-comments': ['warn'],
    curly: ['error', 'all'],
    'prefer-template': ['error'],
    'prefer-const': ['error'],
    'quote-props': 'off',
    'require-await': ['error'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'array-bracket-spacing': ['error', 'always'],
    'standard/no-callback-literal': ['off'],
    camelcase: ['error', { properties: 'always' }],

    'no-useless-constructor': 'off',

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
