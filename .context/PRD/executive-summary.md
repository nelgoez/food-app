# Food App — Executive Summary

## Problem
Users need a simple way to search for recipes by ingredient, explore diet types, and view detailed recipe information — all in one place.

## Solution
A single-page application (React 18 + Redux) that queries the Spoonacular API through a Node/Express proxy backend. Users search by ingredient, filter by diet type, view recipe details, and add their own recipes.

## Core Features
1. **Recipe Search** — Search by ingredient name, results from Spoonacular API
2. **Recipe Details** — Full recipe view with ingredients, instructions, health score
3. **Diet Types** — Browse available diet categories (vegan, gluten-free, etc.)
4. **Add Recipe** — User-generated recipe submission form

## Tech Stack
- Frontend: React 18, Redux, React Router v5, Axios, Create React App
- Backend: Node.js, Express, Sequelize (PostgreSQL optional)
- External API: Spoonacular
- Deployment: Vercel (both frontend and backend)
- QA: Playwright (E2E) + Jest/RTL (unit)
