import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from '../../reducers';
import { AddRecipe } from './AddRecipe';

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

describe('AddRecipe component', () => {
  test('renders form with all fields', () => {
    renderWithProviders(<AddRecipe />);
    expect(screen.getByText('Add your Recipe')).toBeInTheDocument();
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Image Source:')).toBeInTheDocument();
    expect(screen.getByText('Diets:')).toBeInTheDocument();
    expect(screen.getByText('Summary:')).toBeInTheDocument();
    expect(screen.getByText('Instructions:')).toBeInTheDocument();
    expect(screen.getByText('Likes:')).toBeInTheDocument();
    expect(screen.getByText('health Score:')).toBeInTheDocument();
  })

  test('renders submit button', () => {
    renderWithProviders(<AddRecipe />);
    const submit = screen.getByDisplayValue('Submit');
    expect(submit).toBeInTheDocument();
    expect(submit).toHaveAttribute('type', 'submit');
  })

  test('submit button is disabled when form is invalid', () => {
    renderWithProviders(<AddRecipe />);
    const submit = screen.getByDisplayValue('Submit');
    expect(submit).toBeDisabled();
  })

  test('allows typing in title field', () => {
    renderWithProviders(<AddRecipe />);
    const titleInput = document.querySelector('input[name="title"]');
    fireEvent.change(titleInput, { target: { name: 'title', value: 'My New Recipe' } });
    expect(titleInput.value).toBe('My New Recipe');
  })
})
