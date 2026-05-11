# QA Strategy

## Overview

Automated QA uses **Playwright** (E2E + API contract) and **Jest + React Testing Library** (unit).
All 54 tests pass across both layers.

## Current Test Structure

```
tests/
  api.spec.ts          — backend API contract (5 tests)
  homepage.spec.ts     — landing page, navigation, search (9 tests)
  responsive.spec.ts   — viewport: cards, search, nav (5 tests)
  visual.spec.ts       — colors, contrast, images, console errors (3 tests)

src/__tests__/ or per-component:
  App.test.js              — smoke test (1 test)
  Searcher/Searcher.test.js — search UI, loading, empty (4 tests)
  Diets/Diets.test.js       — diet list, loading, empty (4 tests)
  Recipe/Recipe.test.js     — recipe card, diets, link (5 tests)
```

**Total**: 40 Playwright + 14 Jest = 54 tests

## CI Integration (Current)

- **GitHub Actions** — runs Playwright on every push/PR to `main`.
  Workflow: `.github/workflows/playwright.yml`
- **Jest** — runs via `react-scripts test` (CRA built-in). Not yet in CI.

## Running Tests

```bash
npm test                           # Jest unit tests
npx playwright test                # E2E + API contract
npx playwright test --ui           # Interactive UI mode
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `http://localhost:3000` | Target URL for UI tests |
| `API_URL` | `https://food-app-back-zeta.vercel.app` | Backend URL for API tests |
| `REACT_APP_API_URL` | `https://food-app-back-zeta.vercel.app` | Backend URL used by the app at runtime |

## Roadmap

### Phase 1 — Error Handling (UI) — ✅ Complete
- Empty state messages when search returns no results
- Loading indicators during API requests
- "No data" fallback texts on Diets, RecipeDetails
- Pending: Toast/error component on API failures (backend down)

### Phase 2 — Test Expansion — In Progress
- ✅ Frontend unit: Jest + RTL for Searcher, Diets, Recipe
- ✅ Backend API contract: Playwright against deployed backend
- ⬜ Frontend unit: AddRecipe, RecipeDetails, NavBar
- ⬜ Frontend E2E: error/empty states for search
- ⬜ Backend unit: Mocha + Chai for Express routes (mocked Spoonacular)
- ⬜ Backend E2E: Supertest against deployed API
- ⬜ Integration: Playwright tests hitting real backend → frontend
- ⬜ Add `data-testid` attributes to key elements for test resilience

### Phase 3 — CI Pipeline — Pending
- Vercel Preview Deployments on PR
- Run full Playwright suite against Preview URL before merge
- Separate test env vars (`.env.test` or Vercel Preview vars)
- Pipeline order: lint → unit → build → E2E (Preview) → deploy to production
