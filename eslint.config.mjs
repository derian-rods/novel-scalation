// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-plugin-prettier';
export default withNuxt([
  {
    files: ['**/*.ts', '**/*.vue'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier,
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      // Vue
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/no-unused-properties': [
        'warn',
        { groups: ['props', 'data', 'computed', 'methods'], deepData: true },
      ],

      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Prettier
      // "prettier/prettier": [
      //   "warn",
      //   {
      //     semi: false,
      //     singleQuote: true,
      //     printWidth: 100,
      //     trailingComma: "es5",
      //   },
      // ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
]);
