# AGENTS.md - AI Coding Agent Reference

This file provides essential information for AI coding agents working on this project. It contains project-specific details, conventions, and guidelines that complement the README and CLAUDE.md.

---

## Project Overview

**Shadcn Dashboard Free** is a client-side admin dashboard SPA built with:

- **Framework**: Vite 8 + React 19 (no server framework — pure client-side SPA)
- **Language**: TypeScript, compiled with `tsc` before every build
- **Routing**: `react-router` (client-side, `createBrowserRouter`)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn-style primitives on Base UI (`@base-ui/react`)
- **Forms**: no form library currently wired up (`react-hook-form`/`zod`/`@hookform/resolvers` were removed as unused — reintroduce if a form feature actually needs them)
- **Data fetching / mocking**: `swr` for fetching, `msw` for mocked API responses
- **Charts**: `recharts` (the only charting library in the project)
- **Icons**: `lucide-react` and `@iconify/react` are the two icon packages in use
- **Build Output**: `pnpm build` generates static assets in `dist/`
- **Package Manager**: pnpm 10.34.4 (`pnpm-lock.yaml` is the lockfile of record)

There is no backend in this repo. All "API" calls go through mock handlers (`msw`) backed by static data in `src/api/*/**-data.ts`.

---

## Project Structure

```
/src
├── App.tsx                 # Root app component
├── main.tsx                 # Vite entry point
├── routes/
│   └── Router.tsx           # All route definitions (react-router, createBrowserRouter), lazy-loaded via Loadable
├── layouts/
│   ├── full/                # Main dashboard shell (sidebar + header)
│   └── blank/                # Bare layout (auth pages, error pages)
├── views/                    # Page-level screens, one folder per route
│   ├── apps/                 # Blog, notes, tickets app screens
│   ├── auth/                  # Login/register/forgot-password/2FA/error/maintenance
│   ├── dashboards/            # Dashboard variants (e.g. modern)
│   ├── icons/                 # Icon showcase page
│   └── pages/                 # Tables, forms, user-profile, etc.
├── components/                # Reusable UI building blocks
│   ├── ui/                    # shadcn-style primitives (button, dialog, calendar, input-otp, chart, etc.)
│   ├── dashboards/             # Dashboard-specific widgets (e.g. total-sales chart)
│   ├── apps/                   # Feature components for blog/notes/tickets
│   ├── tables/                  # TanStack Table wrappers (DataTable, CheckboxTable, etc.)
│   ├── form/                    # Form field showcase/wrappers
│   ├── icons/                    # Icon registry/data (iconify-icons.tsx)
│   ├── animated-components/       # Motion/dropzone-based components
│   ├── user-profile/               # Profile page components
│   └── shared/                      # Cross-cutting shared components (ScrollToTop, StyleAwareWrapper, StyleDivider, dashboard-card)
├── context/                  # React context providers (one folder per domain)
│   ├── blog-context/, notes-context/, ticket-context
│   └── shadcntheme/           # Theme (dark/light) context
├── api/                       # Mock data + fetchers
│   ├── global-fetcher.ts       # SWR fetcher functions (GET/POST/PUT)
│   ├── blog/, notes/, ticket/    # Per-feature mock data (*-data.ts)
│   └── mocks/
│       ├── browser.ts            # MSW browser worker setup
│       └── handlers/mock-handlers.ts  # Combines all feature handlers
├── hooks/                     # Custom hooks (e.g. use-mobile.ts)
├── lib/
│   └── utils.ts                # cn() and shared helpers
├── types/                      # Shared TypeScript types (e.g. types/apps/*)
└── css/                          # Global styles

```

---

## Build & Development Commands

```bash
# Install dependencies
pnpm install

# Development server (http://localhost:5173)
pnpm dev

# Type-check + production build
pnpm build

# Preview the production build
pnpm preview

# Lint (Oxlint, must pass with zero warnings)
pnpm lint

# Format supported project files / check formatting without writing
pnpm format
pnpm format:check
```

`pnpm build` runs `tsc` before `vite build` — TypeScript errors fail the build, not just lint. Always run `pnpm lint` and `pnpm format:check` before considering frontend changes done. Use `pnpm install --frozen-lockfile` for reproducible installs.

---

## Routing Pattern

All routes are declared in `src/routes/Router.tsx` using `react-router`'s `createBrowserRouter`. Every page component is:

1. Lazily imported with `lazy(() => import('../views/...'))`
2. Wrapped in `Loadable` (`src/layouts/full/shared/loadable/Loadable.tsx`) to provide a suspense fallback

When adding a new page:

1. Create the view under `src/views/<area>/<page>/index.tsx` (or similar), following sibling folders.
2. Add a `Loadable(lazy(() => import(...)))` declaration near related routes in `Router.tsx`.
3. Add the route entry under the appropriate layout (`FullLayout` for dashboard pages, `BlankLayout` for auth/error pages).
4. If the page needs a sidebar entry, wire it into the sidebar nav data (check `src/layouts/full/vertical/sidebar/` for the existing pattern).

---

## Data & Mocking Pattern

This project has no real backend — follow the existing mock pattern rather than adding real endpoints:

1. Static mock data lives in `src/api/<feature>/<feature>-data.ts`.
2. MSW request handlers per feature are combined in `src/api/mocks/handlers/mock-handlers.ts`.
3. Components/contexts fetch via `swr` using the shared fetchers in `src/api/global-fetcher.ts` (`getFetcher`, `postFetcher`, `putFetcher`).
4. Feature state (e.g. blog posts, notes, tickets) is exposed through a dedicated context in `src/context/<feature>-context/`, which wraps the SWR call and exposes state + setters.

When adding a new feature that needs data, mirror the blog/notes/ticket pattern: mock data file → MSW handler → context provider → view/components consuming the context.

---

## Component & Styling Conventions

- **Icons**: check which icon package the file you're editing already imports before adding icons — `lucide-react` and `@iconify/react` (`import { Icon } from '@iconify/react'`) are the two in use.
- **UI primitives**: `src/components/ui/` holds the shadcn-style primitives (Base UI wrapped with `cva` + `cn()`). Extend these via composition in feature components rather than editing the primitives directly, unless the change is meant to apply globally.
- **Styling**: Tailwind v4 utility classes; use `cn()` from `src/lib/utils.ts` for conditional/merged class names — never string-concatenate classes.
- **Forms**: no form library is currently installed; if a feature needs one, discuss with the user before adding a dependency.
- **Tables**: use TanStack Table via the wrappers in `src/components/tables/` (e.g. `DataTable.tsx`) rather than building a table from scratch.
- **Charts**: use `recharts` via `src/components/ui/chart.tsx`.

---

## TypeScript & Path Aliases

- Both `src/*` and `@/*` alias to `./src/*` (see `vite.config.ts` and `tsconfig.json`). Existing files use a mix of `src/...` and `@/...` imports — match whichever convention the file you're editing already uses.
- `pnpm build` type-checks the whole project with `tsc` first; don't rely on Vite dev-server transpilation alone to catch type errors.

---

## Linting

Oxlint uses `oxlint.config.ts`:

- Preserves the previous ESLint and TypeScript recommended rule selection for TS/TSX, plus the two React Hooks checks; other default Oxlint rules are disabled
- Uses native TypeScript, Hooks, and React Refresh rules; `react/only-export-components` remains a warning with directory-specific export exceptions
- Omits the unavailable `no-octal` rule by explicit project choice; ESLint and its plugins are removed. Use Oxlint's `jsPlugins` for future plugins without native equivalents
- `pnpm lint` rejects unused suppression directives and runs with `--max-warnings 0` — treat warnings as build-breaking

Oxfmt uses `oxfmt.config.ts`. Preserve the existing style and keep import, package field, and Tailwind class sorting disabled. Generated files, lockfiles, and SVG artwork are excluded. Use `pnpm format` to format files and `pnpm format:check` to verify them.

---

## Build Output

`pnpm build` generates static assets in `dist/`; use `pnpm preview` to preview them locally. Hosting configuration is not included. A future host must serve `/index.html` for unmatched paths so client-side routes work on direct navigation and refresh.

---

## Notes for AI Agents

1. **Verify feature claims against code, not the dependency list.** Grep `src/` before telling the user a feature exists.
2. **This is a client-only SPA** — there are no server actions, API routes, or server components. All "backend" behavior is MSW-mocked.
3. **Match existing import conventions** — check sibling files in `views`/`components` for path alias style (`src/...` vs `@/...`) and icon package before adding new code.
4. **Icons**: prefer `lucide-react` or `@iconify/react`, matching whichever the file already uses.
5. **Mock data first** — new features should follow the mock-data + MSW-handler + context pattern in `src/api/`, not fetch a real endpoint, unless one already exists.
6. **Package manager is pnpm** — use `pnpm install`/`pnpm <script>`; keep `pnpm-lock.yaml` and do not introduce npm/yarn/bun lockfiles.
7. **Type errors block the build** — `pnpm build` runs `tsc` before `vite build`, so don't leave `any`-typed shortcuts assuming the dev server alone will catch problems.
8. **Lint and formatting must be clean** — `pnpm lint` uses `--max-warnings 0`; fix warnings, don't suppress them with disable comments unless justified. Also run `pnpm format:check`.

---

## External Documentation

- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Base UI](https://base-ui.com/)
- [TanStack Table](https://tanstack.com/table/latest)
- [Recharts](https://recharts.org/)
- [TipTap](https://tiptap.dev/)
- [MSW (Mock Service Worker)](https://mswjs.io/)
- [SWR](https://swr.vercel.app/)
