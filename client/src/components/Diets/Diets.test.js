import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from '../../reducers';
import { Diets } from './Diets';

function renderWithProviders(ui, { initialState } = {}) {
  const store = createStore(Reducer, initialState, applyMiddleware(thunk));
  return render(
    <Provider store={store}>
      {ui}
    </Provider>
  );
}

describe('Diets component', () => {
  test('renders title', () => {
    renderWithProviders(<Diets diets={[]} loading={false} getDiets={() => {}} />);
    expect(screen.getByText('Diet Types')).toBeInTheDocument();
  })

  test('shows loading spinner when loading', () => {
    renderWithProviders(<Diets diets={[]} loading={true} getDiets={() => {}} />);
    expect(screen.getByText(/Loading diets/i)).toBeInTheDocument();
  })

  test('shows empty state when no diets', () => {
    renderWithProviders(<Diets diets={[]} loading={false} getDiets={() => {}} />);
    expect(screen.getByText(/No diets available/i)).toBeInTheDocument();
  })

  test('renders diet cards', () => {
    const diets = [{ diet: 'Vegan' }, { diet: 'Gluten Free' }];
    renderWithProviders(<Diets diets={diets} loading={false} getDiets={() => {}} />);
    expect(screen.getByText('Vegan')).toBeInTheDocument();
    expect(screen.getByText('Gluten Free')).toBeInTheDocument();
  })

  test('shows hint text when no diets', () => {
    renderWithProviders(<Diets diets={[]} loading={false} getDiets={() => {}} />);
    expect(screen.getByText(/Try again later/i)).toBeInTheDocument();
  })
})
