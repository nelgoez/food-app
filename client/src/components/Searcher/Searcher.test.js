import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from '../../reducers';
import Searcher from './Searcher';

function renderWithProviders(ui, { initialState } = {}) {
  const store = createStore(Reducer, initialState, applyMiddleware(thunk));
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>
  );
}

describe('Searcher component', () => {
  test('renders search input and button', () => {
    renderWithProviders(<Searcher />);
    expect(screen.getByPlaceholderText('Search by ingredient...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /SEARCH/i })).toBeInTheDocument();
  })

  test('shows hint before any search', () => {
    renderWithProviders(<Searcher />);
    expect(screen.getByText(/Type an ingredient above/i)).toBeInTheDocument();
  })

  test('shows loading spinner when loading', () => {
    renderWithProviders(<Searcher />, {
      initialState: { recipes: [], diets: [], loading: true, recipeDetails: {} }
    });
    expect(screen.getByText(/Searching recipes/i)).toBeInTheDocument();
  })

  test('shows empty state when no results', () => {
    renderWithProviders(<Searcher />, {
      initialState: { recipes: [], loading: false, recipeDetails: {} }
    });
    expect(screen.getByTestId('search-results')).toBeInTheDocument();
  })
})
