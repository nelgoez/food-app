# Agent Integration Guide

## Overview

This project supports AI-assisted development via **opencode**. Agents interact
with the codebase using file I/O, bash commands, and MCP tools.

## Stack

- **Framework:** Create React App (react-scripts 5.x)
- **UI:** React 18, plain CSS
- **State:** Redux + redux-thunk
- **Routing:** React Router v5
- **HTTP:** Axios
- **QA:** Playwright (E2E) + Jest/RTL (unit)

## Project Structure

```
food-app/
  client/                     — React SPA (CRA)
    src/
      actions/index.js        — Redux actions, API calls
      reducers/index.js       — Redux reducer
      store/index.js          — Redux store
      const.js                — diet types
      components/
        Home/                 — Landing page with hero
        Searcher/             — Search input + results
        Recipe/               — Recipe card
        RecipeDetails/        — Single recipe detail
        AddRecipe/            — New recipe form
        Diets/                — Diet type grid
        NavBar/               — Navigation header
        Background/           — Dynamic background
        Button/               — Reusable button
    tests/                    — Playwright E2E specs
    .context/                 — Agent context files

food-app-back/
  api/index.js                — Vercel serverless entry
  src/
    app.js                    — Express app
    routes/                   — Route handlers
    Controlers/               — Business logic
    models/                   — Sequelize models
    db.js                     — Database connection
```

## Test Commands

```bash
npm test                           # Jest unit (14 tests)
npx playwright test                # Playwright E2E (40 tests)
```

## Production URLs

- Frontend: https://app-recetas.vercel.app
- Backend:  https://food-app-back-zeta.vercel.app

## Conventions

- **No inline comments** — code should be self-documenting.
- **Plain CSS** — global/unscoped styles per component.
- **JavaScript** (not TypeScript) — this is a JS project.
