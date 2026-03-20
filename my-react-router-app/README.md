# Kotlin Homepage Migration

This app is the React Router 7 framework-mode migration of the legacy homepage in `../old_version`.

## Requirements

- `mise`
- Docker (optional, only if you want to run the container build)

## Install

```bash
mise exec -- bun install
```

## Development

```bash
mise exec -- bun run dev
```

The development server runs with SSR enabled.

## Typecheck

```bash
mise exec -- bun run typecheck
```

## Production Build

```bash
mise exec -- bun run build
```

## Run The Production Server

```bash
PORT=3000 mise exec -- bun run start
```

Then open `http://localhost:3000`.

## Docker

```bash
docker build -t kotlin-homepage-router .
docker run --rm -p 3000:3000 kotlin-homepage-router
```
