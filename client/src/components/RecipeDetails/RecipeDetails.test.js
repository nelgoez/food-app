import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecipeDetails } from './RecipeDetails';

const mockRecipe = {
  id: 123,
  title: 'Test Recipe',
  image: 'https://example.com/img.jpg',
  summary: 'A delicious test recipe',
  instructions: 'Step 1: Cook it',
  healthScore: 80,
  aggregateLikes: 150,
  diets: ['Vegan', 'Gluten Free']
}

describe('RecipeDetails component', () => {
  test('shows loading state when no recipe', () => {
    render(
      <BrowserRouter>
        <RecipeDetails
          match={{ params: { id: '123' } }}
          getRecipeDetails={() => {}}
          recipe={{}}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(/Loading recipe/i)).toBeInTheDocument();
  })

  test('renders recipe title', () => {
    render(
      <BrowserRouter>
        <RecipeDetails
          match={{ params: { id: '123' } }}
          getRecipeDetails={() => {}}
          recipe={mockRecipe}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
  })

  test('renders recipe image when available', () => {
    render(
      <BrowserRouter>
        <RecipeDetails
          match={{ params: { id: '123' } }}
          getRecipeDetails={() => {}}
          recipe={mockRecipe}
        />
      </BrowserRouter>
    );
    const img = screen.getByAltText('Test Recipe');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/img.jpg');
  })

  test('renders summary section heading', () => {
    render(
      <BrowserRouter>
        <RecipeDetails
          match={{ params: { id: '123' } }}
          getRecipeDetails={() => {}}
          recipe={mockRecipe}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(/Resumen/i)).toBeInTheDocument();
  })

  test('handles recipe without image gracefully', () => {
    const noImage = { ...mockRecipe, image: '' };
    render(
      <BrowserRouter>
        <RecipeDetails
          match={{ params: { id: '123' } }}
          getRecipeDetails={() => {}}
          recipe={noImage}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
  })
})
