# Food App — Functional Specifications

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home + Searcher | Landing page with hero + ingredient search |
| `/types` | Diets | Browse all diet types |
| `/addRecipe` | AddRecipe | Form to create a new recipe |
| `/recipe/:id` | RecipeDetails | Full recipe detail from Spoonacular or local DB |

## API Endpoints (Backend)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check |
| GET | `/recipes?name=` | Search recipes by ingredient |
| GET | `/recipes/:id` | Get recipe detail (Spoonacular or local) |
| POST | `/recipes` | Create new recipe (local DB) |
| GET | `/types` | List all diet types |

## Data Flow
1. User searches by ingredient on Home page
2. Frontend dispatches `getRecipes` Redux action
3. Action calls backend `GET /recipes?name=X`
4. Backend proxies to Spoonacular API + queries local DB
5. Results returned and rendered as Recipe cards
6. Click "Read" navigates to `/recipe/:id` for full detail

## States per Component
| Component | Loading | Empty | Error | Success |
|-----------|---------|-------|-------|---------|
| Search | Spinner | "Type an ingredient above" | Console error (toast pending) | Recipe cards grid |
| Diets | Spinner | "No diets available" | Console error (toast pending) | Diet cards grid |
| RecipeDetails | "Loading recipe..." | N/A | Console error | Full recipe card |
| AddRecipe | N/A | Empty form | Validation errors inline | Submit → alert |
