import {
    GET_RECIPES,
    GET_RECIPE_DETAILS,
    GET_TYPES,
    ADD_RECIPE
} from '../actions'

const initialState = {
  recipes : [],
  recipeDetails : {},
  diets : []
}


export function Reducer(state = initialState, action) {

    if (action.type === ADD_RECIPE) {
        return {
          ...state,
          recipes: state.recipes.concat(action.payload)
        }
    }
    if (action.type === GET_RECIPES) {
        return {
          ...state,
          recipes: action.payload
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
  }
    return state;
  }
