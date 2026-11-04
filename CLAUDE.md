# CLAUDE.md

This is a Vite + React 19 + TypeScript admin dashboard ("shadcn-dashboard-free"), styled with Tailwind CSS v4 and Base UI primitives. It is a client-side SPA (no server framework) using `react-router` for routing. `npm run build` generates static assets in `dist/`.

## Stack

- **Build tool**: Vite (`vite.config.ts`), TypeScript project compiled with `tsc` before build
- **Routing**: `react-router` (client-side, SPA) — routes under `src/routes`
- **UI**: Base UI primitives (`@base-ui/react`), Tailwind CSS v4, `class-variance-authority`, `tailwind-merge`
- **Data fetching / mocking**: `swr`, `msw` (mock service worker) — see `src/api/mocks`
- **Charts**: `recharts`
- **Icons**: `lucide-react`, `@iconify/react`

## Project structure

- `src/components` — reusable UI components
- `src/views` — page-level view components (feature screens)
- `src/routes` — route definitions
- `src/layouts` — layout shells (sidebar/header wrappers)
- `src/api` — mock data + fetchers (`global-fetcher.ts`, `mocks/handlers`)
- `src/context` — React context providers
- `src/hooks` — custom hooks
- `src/lib` — helpers
- `src/types` — shared TypeScript types
- `src/css` — global styles

## Conventions

- Path alias/component imports follow the existing folder structure under `src/` — check sibling files in `views`/`components` before adding new patterns.
- Icons: prefer whichever icon set is already used in the file you're editing.
- Mock data lives in `src/api` and `src/api/mocks` — new features should follow that pattern rather than fetching real endpoints unless one exists.
- Run `npm run lint` (ESLint 10, `eslint.config.js` with ESLint/TypeScript recommended rules and React hooks checks) before considering frontend changes done.
- `npm run build` runs `tsc` first — type errors block the build, not just lint.

## Build output

Use `npm run preview` to preview the production build locally. Hosting configuration is not included. A future host must serve `/index.html` for unmatched paths so client-side routes work on direct navigation and refresh.
