const prettierConfig = require('./.prettierrc.json')

module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-idiomatic-order', 'stylelint-config-prettier'],
  plugins: [
    // "stylelint-scss",
    'stylelint-order',
    'stylelint-selector-bem-pattern',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-prettier',
  ],
  rules: {
    'prettier/prettier': [true, prettierConfig],
    'plugin/selector-bem-pattern': {
      componentName: '[A-Z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:-[a-z]+)?$',
        combined: '^\\.combined-{componentName}-[a-z]+$',
      },
      utilitySelectors: '^\\.util-[a-z]+$',
    },
    indentation: 'tab',
    'number-leading-zero': null,
    'max-nesting-depth': 5,
    'selector-max-id': 2,
    'selector-max-compound-selectors': 4,
  },
}
