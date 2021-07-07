import axios from 'axios'
import Swal from 'sweetalert2'

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS';
export const ADD_RECIPE = 'ADD_RECIPE';
export const GET_TYPES = 'GET_TYPES';
export const SET_VIEW = 'SET_VIEW'
const URL = 'https://api-food-app.herokuapp.com/'
const RECIPES_URL = '/recipes'
const TYPES_URL = '/types'



export function getRecipes(name) {
  return function (dispatch) {
    return axios.get(`${URL}${RECIPES_URL}?name=${name}`)
      .then(res => {
        let recipes = res.data;
        dispatch({ type: GET_RECIPES, payload: recipes });
      }, err => Swal.fire('Error!', err.message, 'error'))
      .catch(err => console.error(err));
  };
}


export function getRecipeDetails(id) {
  return function (dispatch) {
    return axios.get(`${URL}${RECIPES_URL}/${id}`)
      .then(res => {
        let data = res.data
        dispatch({ type: GET_RECIPE_DETAILS, payload: data });
      }, err => alert(err))
      .catch(err => console.error(err))
  };
}

export function addRecipe(recipe) {
  return function (dispatch) {
    return (axios.post(`${URL}${RECIPES_URL}`, { recipe })
      .then(res => {
        const { data } = res;
        alert(`tu receta de ${data.title} ha sido agregada`);
        dispatch({ type: ADD_RECIPE, payload: data })
      }, err => alert(err))
      .catch(err => console.error(err))
    )
  }
}

export function getDiets() {
  return function (dispatch) {
    return (axios.get(`${URL}${TYPES_URL}`)
      .then(res => {
        let data = res.data;
        dispatch({ type: GET_TYPES, payload: data })
      }, err => console.error(err))
      .catch(err => console.error(err))
    )
  }
}


export function setView(view) {
  return function (dispatch)  {
    dispatch({ type: SET_VIEW, payload: view })
  }
}