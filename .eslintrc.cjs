module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-typescript-prettier', 'plugin:vitest-globals/recommended'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      env: {
        'vitest-globals/env': true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['./setupTest.ts', './vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  plugins: ['vitest-globals'],
  rules: {
    'no-nested-ternary': 'off',

    'import/prefer-default-export': 'off',

    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-array-index-key': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
    },
  },
};
