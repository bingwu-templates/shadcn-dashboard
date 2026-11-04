import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'public/mockServiceWorker.js'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...tsPlugin.configs.recommended.rules,
      // Preserve the original hooks checks without adding React Compiler rules.
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // These primitives intentionally co-locate their hooks and style helpers.
    files: ['src/components/ui/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': ['warn', {
        allowConstantExport: true,
        allowExportNames: [
          'badgeVariants', 'buttonGroupVariants', 'buttonVariants',
          'navigationMenuTriggerStyle', 'tabsListVariants', 'toggleVariants',
          'useCarousel', 'useComboboxAnchor', 'useDirection', 'useSidebar',
        ],
      }],
    },
  },
  {
    // Keep the existing context/provider API; edits may trigger a full reload.
    files: ['src/context/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': ['warn', {
        allowConstantExport: true,
        allowExportNames: ['BlogContext', 'NotesContext', 'TicketContext', 'useTheme'],
      }],
    },
  },
];
