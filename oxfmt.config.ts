import { defineConfig } from 'oxfmt';

export default defineConfig({
  bracketSpacing: true,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  sortImports: false,
  sortPackageJson: false,
  sortTailwindcss: false,
  ignorePatterns: ['public/mockServiceWorker.js', 'pnpm-lock.yaml', '**/*.svg'],
});
