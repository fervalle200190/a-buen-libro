module.exports = {
    env: {
      browser: true,
      es6: true,
      'jest/globals': true,
    },
    extends: [
      'plugin:jest/recommended',
      'plugin:jest/style',
      'plugin:react/recommended',
      // 'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'jest',
      // 'simple-import-sort',
      // "sort-destructure-keys",
      // 'sort-keys',
    ],
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      semi: ['error', 'never'],
      'no-param-reassign': ['error', { 'props': false }],
      'no-use-before-define': ['off'],
      'no-underscore-dangle': ['off'],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      'react/prop-types': ['off'],
      'react/jsx-props-no-spreading': ['off'],
      'react/jsx-no-useless-fragment': [1],
      // 'react/jsx-sort-props': [
      //   2,
      //   {
      //       "callbacksLast": false,
      //       "shorthandFirst": false,
      //       "shorthandLast": false,
      //       "ignoreCase": true,
      //       "noSortAlphabetically": false,
      //       "reservedFirst": false
      //   }
      // ],
      // "simple-import-sort/imports": "error",
      // "simple-import-sort/exports": "error",
      // 'import/no-extraneous-dependencies': [
      //   'error',
      //   { devDependencies: true },
      // ],
      // "sort-destructure-keys/sort-destructure-keys": [2, {"caseSensitive": false}],
      // 'sort-keys': 0, // disable default eslint sort-keys
      // 'sort-keys/sort-keys-fix': 1,
      // 'sort-vars': [
      //   "warn",
      //   {
      //     "ignoreCase": true
      //   }
      // ],
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
    ignorePatterns: [
      'serviceWorker.js',
      'src/tests/*',
      'build/*',
    ],
    overrides: [
      {
        files: ['.jsx', '.js'],
        rules: {
          'simple-import-sort/imports': [
            'error',
            {
              groups: [
                // Packages. `react` related packages come first.
                // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                ['^react', '^@?\\w'],
                // Absolute imports and Relative imports.
                // [`^(${folders.join('|')})(/.*|$)`, '^\\.'],
                // for scss imports.
                ['^[^.]']
              ]
            }
          ]
        }
      }
    ]
  }