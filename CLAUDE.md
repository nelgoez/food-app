# Project Memory — Food App

> **Purpose**: Operational context loaded every AI session.
> **Last Updated**: 2026-05-11

---

## Quick Start

```bash
cd client
npm install
npm start              # Dev server → http://localhost:3000
npm test               # Jest unit tests (14)
npx playwright test    # Playwright E2E (40)
npm run build          # Production build
```

## Project Variables

| Variable | Value |
|----------|-------|
| Frontend (prod) | https://app-recetas.vercel.app |
| Backend (prod) | https://food-app-back-zeta.vercel.app |
| Frontend (local) | http://localhost:3000 |
| Backend (local) | http://localhost:5000 |
| Repo | github.com/nelgoez/food-app |
| Backend repo | food-app-back/ (sibling directory) |
| Stack | React 18 + Redux + CRA (FE), Node/Express + Sequelize (BE) |
| DB | PostgreSQL (optional — proxy-only mode works without it) |
| QA | Playwright 40 E2E + Jest 14 unit + GitHub Actions |

## Critical Reminders

1. **Plan before coding**: Always read relevant context files before making changes.
2. **Test before commit**: Run `npm test` + `npx playwright test` after code changes.
3. **Backend is a separate repo** (`food-app-back/` sibling dir) — changes there need separate commits.
4. **No hardcoded URLs** in frontend code — use `REACT_APP_API_URL` env var (defaults to Vercel backend).
5. **No AI attribution in commits**: Never include AI-generated lines in commit messages.

## Known Issues

| Issue | Status |
|-------|--------|
| AddRecipe form — `handleChange` was reading `e.target.prop` (nonexistent) | ✅ Fixed 2026-05-11 |
| AddRecipe — `isFormInvalid()` logic inverted | ✅ Fixed 2026-05-11 |
| `backend/const.js` — `let = {}` syntax error | ✅ Fixed 2026-05-11 |

## Session Log

### 2026-05-11 — Integration Coherence & QA Gap Closure
- Replaced hardcoded Heroku API URL with Vercel backend in `actions/index.js`
- Fixed `backend/const.js` `let = {}` syntax error
- Fixed `AddRecipe.jsx` bugs: `handleChange` using `e.target.prop`, inverted `isFormInvalid()`
- Created `api.spec.ts` — 5 Playwright backend contract tests
- Created unit tests: `Searcher.test.js` (4), `Diets.test.js` (4), `Recipe.test.js` (5)
- Created root-level context files: `CLAUDE.md`, `AGENTS.md`, `opencode.json`, `.editorconfig`, `.prettierrc`
- Expanded `.context/` directory with proper structure (guidelines, SRS, PRD)
- Added backend unit tests with mocked Spoonacular API
- All 54 tests passing (40 Playwright + 14 Jest)
