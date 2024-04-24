module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/**', '*.config.*'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-refresh', 'prettier', 'tailwindcss'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
      rules: {
        // tailwindcss
        'tailwindcss/no-custom-classname': 'off',

        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
};
