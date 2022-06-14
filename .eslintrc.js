module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'jest'],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    semi: ['warn', 'always'],
    'cypress/no-unnecessary-waiting': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'lines-between-class-members': 'off',
    'max-len': ['warn', { code: 120 }],
    'no-console': 'warn',
    'no-underscore-dangle': 'off',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
      alias: [
        ['@src', './src'],
        ['@utils', './src/utils'],
      ],
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g.
      // `forbidExtraProps`. If this isn't set,
      //  any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg.
      // <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
};
