# QA Backlog — Food App

> Generated: 2026-05-07 | Updated: 2026-05-11

## Phase 1 — Error Handling (UI)
Status | Story | Effort
-------|-------|--------
✅ | Empty state when search returns no results | S
✅ | Loading spinner while API requests are in flight | S
⬜ | Toast/alert on API failures (backend unreachable) | M
✅ | "No diets available" fallback on /types | XS
✅ | Handle RecipeDetails loading/error state | S

## Phase 2 — Test Expansion
Status | Story | Effort
-------|-------|--------
✅ | Frontend unit: Jest + RTL for Searcher, Diets, Recipe | M
⬜ | Frontend unit: AddRecipe, RecipeDetails, NavBar | M
⬜ | Frontend E2E: Playwright happy paths + error states | L
⬜ | Backend unit: Mocha/Chai for Express routes (mocked Spoonacular) | M
✅ | Backend API contract: Playwright tests hitting deployed API | M
⬜ | Integration: Playwright tests hitting real backend → frontend | L

## Phase 3 — CI Pipeline
Status | Story | Effort
-------|-------|--------
⬜ | Vercel Preview Deployments on PR branches | M
⬜ | Run Playwright against Preview URL before merge | M
⬜ | Test env vars (Vercel Preview environments) | S
⬜ | Pipeline: lint → unit → build → E2E → deploy | M
