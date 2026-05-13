# Food App — Agent Guidelines

## Overview
Recipe search & management SPA (React 18 + Redux) with a Node/Express backend (Spoonacular API). Frontend deployed on Vercel, backend deployed on Vercel (serverless).

## Session Context
- Update `SESSION_CONTEXT.md` (or `client/Session_context.md`) at end of each session.
- Add session log entry with date, summary of work done, and test results.

## Key Commands

### Frontend (`cd client`)
| Command | Description |
|---------|-------------|
| `npm start` | Dev server (port 3000) |
| `npm run build` | Production build |
| `npm test` | Jest unit tests |
| `npx playwright test` | Playwright E2E tests |
| `npx serve -s build -l 3000` | Serve built app locally |

### Backend (`cd food-app-back`)
| Command | Description |
|---------|-------------|
| `node index.js` | Start server (port 5000) |
| `npm test` | Mocha unit tests (requires DB) |

## Project Structure

```
food-app/                  # Frontend (this repo)
  client/
    src/
      actions/             # Redux actions + API calls
      reducers/            # Redux reducer
      store/               # Redux store
      components/          # React components
      const.js             # Diet types
    tests/                 # Playwright E2E specs
    .context/              # Agent context files
    build/                 # Production build output

food-app-back/             # Backend (sibling repo)
  api/index.js             # Vercel serverless entry
  src/
    app.js                 # Express app
    routes/                # Route handlers
    Controlers/            # Business logic
    models/                # Sequelize models
    db.js                  # Database connection
```

## Test Structure

### Jest Unit (30 tests)
| Suite | File | Count |
|-------|------|-------|
| App smoke | `App.test.js` | 1 |
| Searcher | `Searcher.test.js` | 4 |
| Diets | `Diets.test.js` | 5 |
| Recipe | `Recipe.test.js` | 6 |
| AddRecipe | `AddRecipe.test.js` | 5 |
| RecipeDetails | `RecipeDetails.test.js` | 5 |
| NavBar | `NavBar.test.js` | 4 |

### Playwright E2E (46 tests)
| Suite | File | Count |
|-------|------|-------|
| Backend API | `api.spec.ts` | 6 |
| Homepage | `homepage.spec.ts` | 9 |
| Responsive | `responsive.spec.ts` | 5 |
| Visual | `visual.spec.ts` | 3 |

## Production URLs

- Frontend: https://app-recetas.vercel.app
- Backend: https://food-app-back-zeta.vercel.app

## Development Workflow

Before committing:
1. Run `npm test` (Jest) — all must pass
2. Run `npx playwright test` — all must pass
3. Run `npm run build` — must succeed
4. Update context files if needed

## Conventions
- No inline comments — code should be self-documenting
- Plain CSS (no framework)
- JavaScript (not TypeScript)
- English for all code and documentation
