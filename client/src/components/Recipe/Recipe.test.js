import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Recipe from './Recipe';

const mockRecipe = {
  id: 123,
  title: 'Test Recipe',
  image: 'https://example.com/image.jpg',
  diets: ['Vegan', 'Gluten Free']
}

describe('Recipe component', () => {
  test('renders recipe title', () => {
    render(
      <BrowserRouter>
        <Recipe recipe={mockRecipe} />
      </BrowserRouter>
    );
    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
  })

  test('renders diet types', () => {
    render(
      <BrowserRouter>
        <Recipe recipe={mockRecipe} />
      </BrowserRouter>
    );
    expect(screen.getByText('Vegan')).toBeInTheDocument();
    expect(screen.getByText('Gluten Free')).toBeInTheDocument();
  })

  test('renders recipe image', () => {
    render(
      <BrowserRouter>
        <Recipe recipe={mockRecipe} />
      </BrowserRouter>
    );
    const img = screen.getByAltText('imagen no encontrada');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
  })

  test('renders Read link with correct URL', () => {
    render(
      <BrowserRouter>
        <Recipe recipe={mockRecipe} />
      </BrowserRouter>
    );
    const link = screen.getByText('Read');
    expect(link).toHaveAttribute('href', '/recipe/123');
  })

  test('shows ALL when no diets', () => {
    const noDiets = { ...mockRecipe, diets: [] };
    render(
      <BrowserRouter>
        <Recipe recipe={noDiets} />
      </BrowserRouter>
    );
    expect(screen.getByText('ALL')).toBeInTheDocument();
  })
})
