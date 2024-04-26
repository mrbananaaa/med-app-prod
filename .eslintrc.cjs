module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/**', '*.config.*'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-refresh', 'import', 'prettier', 'tailwindcss'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        // react-refresh
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        // tailwindcss
        'tailwindcss/no-custom-classname': 'off',

        //import
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@/features/*/*'],
          },
        ],

        'linebreak-style': ['error', 'unix'],
        'react/prop-types': 'off',

        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        // 'import/no-unresolved': 'error',

        'react/react-in-jsx-scope': 'off',

        '@typescript-eslint/no-unused-vars': ['error'],

        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],

        'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
      },
    },
  ],
};
