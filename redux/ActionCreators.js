import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


// Return Promises

export const fetchRecipes = () => dispatch => {

    dispatch(recipesLoading());
    return fetch(baseUrl + 'recipes')
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            const error = new Error (`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(recipes => dispatch(addRecipes(recipes)))
    .catch(error => dispatch(recipesFailed(error.message)));
};

// Action to add Recipes

export const addRecipes = recipes => ({
    type: ActionTypes.ADD_RECIPES,
    payload: recipes
});

// Action to load Recipes

export const recipesLoading = () => ({
    type: ActionTypes.RECIPES_LOADING
});

// Action to load Error

export const recipesFailed = errMess => ({
    type: ActionTypes.RECIPES_FAILED,
    payload: errMess
});