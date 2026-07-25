import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import importXPlugin from 'eslint-plugin-import-x';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'import-x': importXPlugin,
      '@eslint-react': eslintReact,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'eqeqeq': 'error',
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      'object-shorthand': 'error',
      'arrow-parents': 'off',

      'import-x/order': 'warn',
      'import-x/no-unused-modules': [
        'warn',
        {
          unusedExports: true,
          missingExports: false,
          suppressMissingFileEnumeratorAPIWarning: true,
        },
      ],

      '@eslint-react/jsx-no-useless-fragment': 'warn',
      '@eslint-react/no-array-index-key': 'error',
      '@eslint-react/no-missing-key': 'error',

      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]);
