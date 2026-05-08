import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';
export const ADD_RECIPE = 'ADD_RECIPE';
export const GET_TYPES = 'GET_TYPES';
const URL = process.env.REACT_APP_API_URL || 'https://api-food-app.herokuapp.com'
const RECIPES_URL = '/recipes'
const TYPES_URL = '/types'

export function getRecipes(name) {
  console.error(name)
  return function (dispatch) {
    return axios(`${URL}${RECIPES_URL}?name=${name}`)
      .then(response => {
        let recipes = response.data;
        dispatch({ type: GET_RECIPES, payload: recipes });
      })
      .catch(err => console.error(err));
  };
}


export function getRecipeDetails(id) {
  return function (dispatch) {
    return axios(`${URL}${RECIPES_URL}/${id}`)
      .then(response => {
        let data = response.data
        dispatch({ type: GET_RECIPE_DETAILS, payload: data });
      })
      .catch(err => console.error(err))
  };
}

export function addRecipe(recipe) {
  return function (dispatch) {
    return (axios.post(`${URL}${RECIPES_URL}`, recipe)
      .then(res => {
        alert(res.data)
        dispatch({ type: ADD_RECIPE, payload: recipe })
      })
      .catch(err => console.error(err))
    )
  }
}

export function getDiets() {
  return function (dispatch) {
    return (axios(`${URL}${TYPES_URL}`)
      .then(res => {
        let data = res.data;
        dispatch({ type: GET_TYPES, payload: data })
      })
      .catch(err => console.error(err))
    )
  }
}