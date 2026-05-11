<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' />
</p>

# Individual Project — Henry Food

Recipe search & management app built with React, Redux, and Node.

## Stack

- **Frontend:** React 18, Redux, React Router v5, Axios
- **Backend:** Node + Express + Sequelize (Spoonacular API)
- **Styling:** Plain CSS
- **Build:** Create React App (react-scripts 5)
- **QA:** Playwright (E2E) + Jest/RTL (unit) + GitHub Actions
- **Deployment:** Frontend → Vercel, Backend → Vercel (serverless)

## Production

| Component | URL |
|-----------|-----|
| Frontend | https://app-recetas.vercel.app |
| Backend | https://food-app-back-zeta.vercel.app |

## Getting Started

```bash
cd client
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server |
| `npm run build` | Build for production |
| `npm test` | Run unit tests (Jest) — 14 tests |
| `npx playwright test` | Run E2E tests — 40 tests |

## QA

Playwright tests cover landing page, search, responsive layout, API contract,
and visual consistency. Jest + React Testing Library covers component unit tests.
See `.github/workflows/playwright.yml`, `.context/qa-strategy.md`, and `tests/`.
