# Kotlin Website Migration

React Router 7 Framework Mode migration of the simplified `kotlinlang.org` homepage used in the JetBrains JetSites 2026 internship assignment.

The goal of this version is to preserve the original look and interactive behavior while moving the page onto a modern SSR-first stack with updated dependencies.

## Requirements

- For the quick Docker setup: Docker with Compose support
- For easy local development setup: `mise` or `devcontainer` (or just `bun` for now)

## Quick Setup

For a fast production-like setup, use Docker from the repository root:

```bash
docker compose up

# or equivalent mise task:

mise docker
```

The site will be available at `http://localhost:9001`.

## What Changed

- migrated the page to React Router 7 Framework Mode with SSR enabled in `react-router.config.ts`
- updated the stack to modern tooling, and most of the dependencies including React 19, React Router 7, Vite 8, the React Compiler, newer `@rescui` packages, and a newer `@jetbrains/kotlin-web-site-ui`
- kept the page visually close to the original version while preserving interactive behavior after hydration

## Notes

- The current implementation does not preserve the original Flask backend.
- Any dependency patches and styling overrides in this repo exist only to keep the migrated page as true to the original look as possible. For a real setup, they are not foundational and can be removed or revisited easily.
- The original version selected the initial programming-language tab randomly on the client. In an SSR setup, this behavior needs to be reconsidered because random selection on load can work against deterministic rendering, caching, and consistent server output.

## SSR Improvements Over Original

- testimonial sort preference was moved from `localStorage` to cookies, so the server can render the correct initial order on first paint
- Kotlin code sample highlighting is precomputed when rendering instead of being generated after mount, which reduces client-only work and avoids highlight pop-in
- initial interactive state now comes through route loader data in [app/routes/home.tsx](/workspaces/kotlin-web-site-jetsites-internship-2026/app/routes/home.tsx), which makes the SSR and hydrated client agree on the first render
- document metadata, preload links, and app shell layout are defined in [app/root.tsx](/workspaces/kotlin-web-site-jetsites-internship-2026/app/root.tsx), keeping server and client output aligned

## Development Setup

```bash
bun install
bun typecheck
bun run dev
```

## Potential Future Improvements

- add proper vitest + playwright support for this project
- add visual regression testing to catch layout and styling differences from the legacy version
- add interaction tests for tab switching and other client-side behavior to protect hydration and UI functionality
- add end-to-end SSR checks to verify server render, hydration, and key user flows together
- revisit the randomized initial tab behavior with an SSR-friendly approach

<details>
<summary>Bun and Mise Commands</summary>

```bash

bun install      # install dependencies

bun typecheck    # generate route types and run TypeScript checks

bun check        # run linting/checks

bun fix          # run autofixes

bun dev          # start the development server

bun run build    # build the production bundle

bun start        # serve the production build

mise docker      # mise task: build and start the Docker container
```

</details>
<details>
<summary>Project Structure</summary>

```text
.
├── app/
│   ├── root.tsx                # app shell, metadata, links, error boundary
│   ├── routes.ts               # route definitions
│   ├── routes/
│   │   └── home.tsx            # homepage route + loader-provided initial state
│   ├── components/             # shared layout, header, footer
│   ├── pages/
│   │   └── home/               # homepage composition and section UI
│   └── styles/                 # global styles, fonts, vendor overrides
├── public/                     # static assets and fonts
├── react-router.config.ts      # React Router Framework Mode + SSR config
├── vite.config.ts              # Vite configuration
└── package.json                # scripts and dependencies
```

</details>
