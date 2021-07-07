import {
  GET_RECIPES,
  GET_RECIPE_DETAILS,
  GET_TYPES,
  ADD_RECIPE,
  SET_VIEW,
} from '../actions'

const initialState = {
  recipesOut: [],
  recipesIn: [],
  recipeDetails: {},
  diets: []
}


export function Reducer(state = initialState, action) {

  if (action.type === ADD_RECIPE) {
    return {
      ...state,
      recipesIn: state.recipesIn.concat(action.payload)
    }
  }
  if (action.type === GET_RECIPES) {
    return {
      ...state,
      recipesIn: action.payload
    };
  }
  if (action.type === GET_RECIPE_DETAILS) {
    return {
      ...state,
      recipeDetails: action.payload
    };
  }
  if (action.type === GET_TYPES) {
    return {
      ...state,
      diets: action.payload
    };
  };
  if (action.type === SET_VIEW) {
    return {
      ...state,
      recipesOut : action.payload
    }
  }

  return state;
}
