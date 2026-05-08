# QA Strategy

## Overview

Automated QA uses **Playwright** with tests for functional content, API
interaction, responsive layout, and visual presentation.

## Current Test Structure

```
tests/
  homepage.spec.ts    — landing page, navigation, search
  api.spec.ts         — API contract (backend health)
  responsive.spec.ts  — viewport: cards, search, nav
  visual.spec.ts      — colors, contrast, images
```

## CI Integration (Current)

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

## Roadmap

### Phase 1 — Error Handling (UI)
- Empty state messages when search returns no results
- Loading indicators during API requests
- Toast/error component on API failures (backend down)
- "No data" fallback texts on Diets, RecipeDetails

### Phase 2 — Test Expansion
- **Frontend unit**: Jest + RTL for Searcher, Diets, Recipe, AddRecipe
- **Frontend E2E**: Playwright happy paths + error/empty states
- **Backend unit**: Mocha + Chai for Express routes (mocked Spoonacular)
- **Backend E2E**: Supertest or Playwright against deployed API
- **Integration**: Playwright tests hitting real backend → frontend

### Phase 3 — CI Pipeline
- Vercel Preview Deployments on PR
- Run full Playwright suite against Preview URL before merge
- Separate test env vars (`.env.test` or Vercel Preview vars)
- Pipeline order: lint → unit → build → E2E (Preview) → deploy to production
