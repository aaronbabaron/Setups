const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: ['./webpack-configs/*'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: ['./tsconfig.json', './server/tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint', 'import', 'jest', 'promise', 'react', 'react-hooks', 'unicorn'],
  rules: {
    // TSIgnore is useful in some instances
    '@typescript-eslint/ban-ts-ignore': 'warn',
    /// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        // Allows for use of expressions aka Lambdas
        allowExpressions: true,
        // Allows for returning typed functions within functions
        allowHigherOrderFunctions: true,
        // Allows for typing of function expressions
        allowTypedFunctionExpressions: true,
      },
    ],
    // Disables ! operator in typescript, which asserts that a property/variable is not null.
    // We use this in a few places where we are certain things are not null, so we turn this off
    '@typescript-eslint/no-non-null-assertion': 'off',
    // Short circuit is something such as someExpression && anotherExpression.
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    // Functions are hoisted, so we do not need to worry about them. The rest are not, so we
    // will prevent them from being used before being defined so we can avoid calling them before
    // they are initialized
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
    '@typescript-eslint/no-this-alias': 'warn',
    // This just prevents having an interface with a single property which is a call signature.
    '@typescript-eslint/prefer-function-type': 'error',
    // Turning this one off so that prettier can do the formatting. Otherwise, they clash
    '@typescript-eslint/indent': 'off',
    // Forces all class methods to use "this". We may be able to turn this back on later, but sometimes
    // it is convenient to have methods that do not use "this" on the class
    'class-methods-use-this': 'off',
    // Don't want to always have to write a return statement.
    'consistent-return': 'off',
    // No need to require a default case in switch statements
    'default-case': 'off',
    // Forces you to use === or !== over == and !=
    eqeqeq: 'error',
    // This forces you to either name your function or not, or have some weird semantics as to when
    // it requires naming and when it doesn't. Turning off
    'func-names': 'off',
    // Reports if no default export in imported module. Causes issues with some older modules that
    // are using module.exports instead of export default
    'import/default': 'off',
    // Causes issues with older modules that are still using module.exports
    'import/namespace': 'off',
    // Causes issues when importing submodules
    'import/no-extraneous-dependencies': 'off',
    // This will automatically sort the import declarations but not the members within the imports.
    // We will use sort-imports to handle the member sort
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    // Causes issues with older modules
    'import/no-named-as-default-member': 'off',
    // There are issues with this and non-ts/js files
    'import/no-unresolved': 'off',
    // Causes issues with older modules
    'import/prefer-default-export': 'off',
    // We use anchors as buttons in certain places, but make sure to use role button
    'jsx-a11y/anchor-is-valid': 'off',
    // Can turn this back on later once we want to have better support for a11y
    'jsx-a11y/click-events-have-key-events': 'off',
    // Using as a warning for now until we implement a11y completely
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    // This is set so that if the class member is a single line, we skip checking if it has a line
    // after/before it. This is so that we don't have a bunch of single liners taking up a bunch of
    // space in classes
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'off',
    // We use bitwise operators for a few things such as compressing the URL
    'no-bitwise': 'off',
    // This prevents you from creating elements scoped to a case block
    'no-case-declarations': 'off',
    // Set to error as we do not want to leave in console.logs. User can explicitly ignore the
    // eslint message if the console.log is meant to be kept
    'no-console': 'error',
    // Set this to warn because continue should be allowed sometimes
    'no-continue': 'warn',
    // Fallthroughs are useful, but should warn user just in case it's not what they expected to do
    'no-fallthrough': 'warn',
    // Iterators should be allowed
    'no-iterator': 'off',
    // Disallows reassigning variables passed in as params to a function. props: false allows setting of
    // properties on the params, however
    'no-param-reassign': ['error', { props: false }],
    // Pre and Post increment operators should be allowed
    'no-plusplus': 'off',
    // Too restrictive, writing ugly code to defend against a very unlikely scenario:
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // When on, prevents use of iterators and for loops
    'no-restricted-syntax': 'off',
    // We use underscore prefixed variables for private method names. Switching to an error if we find another convention
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    // Using a typescript eslint plugin, must turn this one off or it clashes
    'no-unused-vars': 'off',
    // Destructuring is great, but doesn't work that well with mobx. Should be able to use either
    'prefer-destructuring': 'off',
    'prettier/prettier': 'error',
    // // Too restrictive:
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // This goes hand-in-hand with our decision to go with arrow functions everywhere. If we're doing this,
    // a lot of components will be missing a display name
    'react/display-name': 'off',
    // User can decide if they want to do <Component prop={true} /> or <Component prop />
    'react/jsx-boolean-value': 'off',
    // Honestly this one is just personal preference.
    'react/jsx-closing-bracket-location': [
      'error',
      { selfClosing: 'tag-aligned', nonEmpty: 'after-props' },
    ],
    // We spread props in a few places, especially in tests.
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      1,
      {
        shorthandFirst: true,
        ignoreCase: true,
      },
    ],
    // Occasionally we have nothing else to use as a key.
    'react/no-array-index-key': 'warn',
    // This one forces you to use escaped character codes instead of allowing a string.
    // We should be using localized for mostly everything, so this doesn't matter
    'react/no-unescaped-entities': 'off',
    // We are using TypeScript instead of PropTypes
    'react/prop-types': 'off',
    // Does not include static variables for some reason. Adding it in along with instance variables
    // at the top, then everything else is the same as default
    'react/sort-comp': [
      2,
      {
        order: [
          'static-variables',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'instance-methods',
          'everything-else',
          'render',
        ],
      },
    ],
    // Prefer not using constructor when possible. Was a guideline at FB and it's stuck to me
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    // This one was causing a lot of errors to pop up that didn't seem like errors due to async/await
    // https://stackoverflow.com/questions/56892964/await-async-race-condition-error-in-eslint-require-atomic-updates
    'require-atomic-updates': 'off',
    // We turn off declaration sort just to make sure nothing clashes with import/order.
    // Mainly used for sorting destructured imports
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'sort-keys': ['warn', 'asc', { caseSensitive: false, natural: true, minKeys: 2 }],
    // Unnecessary. If checking against the value, should know it's to see if length is not 0
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    // Unsure why there's so much hate for for loops, sometimes we need the index or something else
    // that makes a for loop better
    'unicorn/no-for-loop': 'off',
    // We have nested ternaries for simple things
    'unicorn/no-nested-ternary': 'off',
    // This clashes with the prettier rule for casing
    'unicorn/number-literal-case': 'off',
    // Seems arbitrary
    'unicorn/prefer-node-append': 'off',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        directory: ['./tsconfig.json', './server/tsconfig.json'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};

