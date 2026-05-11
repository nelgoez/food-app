# Food App — User Journeys

## Critical Paths

### 1. Search Recipes by Ingredient
1. User lands on Home page
2. Reads hero title + subtitle
3. Clicks "Start Cooking" → search bar slides open
4. Types ingredient (e.g., "chicken") → clicks BUSCAR
5. Loading spinner appears
6. Recipe cards grid renders with results
7. Click "Read" on a card → navigates to recipe detail

### 2. Browse Diet Types
1. User clicks "Diet Types" in nav
2. Loading spinner appears briefly
3. Diet cards grid renders (gluten free, vegan, etc.)
4. If no diets: "No diets available" fallback shown

### 3. View Recipe Detail
1. From recipe card, click "Read"
2. Loading state while fetching
3. Full recipe card renders: title, image, summary, ingredients, instructions, health score

### 4. Add New Recipe
1. User clicks "Add Recipe" in nav
2. Form loads with fields: title, image, diets, summary, instructions, likes, health score
3. Validation on blur — errors shown inline
4. On valid submit → recipe sent to backend

## Edge Cases
- Search with empty query → 200, empty or all results
- Search with no results → "No recipes found" message
- Backend unreachable → console error (UI toast pending)
- Recipe with no diets → displays "ALL" badge
- Diet type fetch fails → fallback hardcoded list from const.js
