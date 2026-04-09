# Personal Website

A personal website to showcase information about myself and share blogs on interesting topics.

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Package manager:** pnpm
- **Path alias:** `@/*` → `src/*`

## Project Structure

- `src/app/` — Next.js App Router pages and layouts (thin shells — minimal logic)
- `src/components/` — Shared UI components
- `src/features/` — Feature modules, each with own hooks/, components/, utils/
- `src/hooks/` — Shared custom hooks
- `src/lib/` — Utilities, constants, API clients, server actions
- `src/types/` — Shared TypeScript types

## Code Patterns

- **Modularization:** Group by feature, not by file type. Each feature owns its hooks, components, and utils.
- **Custom hooks:** Extract all non-trivial logic into custom hooks with single responsibility. Pages should be thin wrappers.
- **Server vs Client:** Default to Server Components. Only add `'use client'` when you need interactivity, hooks, or browser APIs.
- **Typed props:** Define `interface ComponentNameProps` for every component. No `any`.
- **Path aliases:** Always use `@/` imports. Never use relative paths like `../../`.
- **Naming:** PascalCase for components, camelCase for hooks/utils, CONSTANT_CASE for constants.

## Git

- Conventional commits: `feat()`, `fix()`, `refactor()`
- Keep subject lines under 72 characters
