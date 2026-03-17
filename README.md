# XAMALI (Vendored Runtime)

This repository now includes a **vendored/offline runtime** so the website can be previewed without downloading npm dependencies.

## Why vendored mode
The environment blocks package installation from npm registries (`403 Forbidden`). To keep delivery functional, XAMALI ships with a local Node.js static server and trilingual static pages:
- English: `/en/`
- French: `/fr/`
- Arabic (RTL): `/ar/`

## Run (no install required)
```bash
node vendor/server.mjs
```
Then open:
- `http://localhost:3000/en/`
- `http://localhost:3000/fr/`
- `http://localhost:3000/ar/`

## Quick checks
```bash
node vendor/check.mjs
```

## Vendored structure
- `vendor/server.mjs` - static HTTP server (Node built-ins only)
- `vendor/check.mjs` - integrity checks for vendored files
- `vendor/www/assets/styles.css` - shared design system (red/white brand)
- `vendor/www/en/index.html` - English landing page
- `vendor/www/fr/index.html` - French landing page
- `vendor/www/ar/index.html` - Arabic landing page (RTL)

## Notes
- The original Next.js scaffolding is still in the repository for future migration back to full framework mode.
- Vendored mode is the active preview path in restricted/offline environments.
