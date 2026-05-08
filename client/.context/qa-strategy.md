# QA Strategy

## Overview

Automated QA uses **Playwright** with tests for functional content, API
interaction, responsive layout, and visual presentation.

## Test Structure

```
tests/
  homepage.spec.ts    — landing page, navigation, search
  api.spec.ts         — API contract (backend health)
  responsive.spec.ts  — viewport: cards, search, nav
  visual.spec.ts      — colors, contrast, images
```

## CI Integration

- **GitHub Actions** — runs Playwright on every push/PR to `main`.
  Workflow: `.github/workflows/playwright.yml`

## Running Tests

```bash
npx playwright test
npx playwright test --ui
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `http://localhost:3000` | Target URL |
