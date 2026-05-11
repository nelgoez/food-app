import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar component', () => {
  test('renders all navigation links', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Diet Types')).toBeInTheDocument();
    expect(screen.getByText('Add Recipe')).toBeInTheDocument();
  })

  test('links have correct hrefs', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Diet Types').closest('a')).toHaveAttribute('href', '/types');
    expect(screen.getByText('Add Recipe').closest('a')).toHaveAttribute('href', '/addRecipe');
  })

  test('renders within a header element', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(document.querySelector('header')).toBeInTheDocument();
    expect(document.querySelector('nav')).toBeInTheDocument();
  })
})
