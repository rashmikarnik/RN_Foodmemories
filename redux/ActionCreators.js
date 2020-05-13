import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


// Return Promises for Category

export const fetchCategory = () => dispatch => {

    dispatch(categoryLoading());
    return fetch(baseUrl + 'category')
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
    .then(category => dispatch(addCategory(category)))
    .catch(error => dispatch(categoryFailed(error.message)));
};

//Action Add Category
export const addCategory = category => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: category
})

// Action to load Recipes

export const categoryLoading = () => ({
    type: ActionTypes.CATEGORY_LOADING
});

// Action to load Error

export const categoryFailed = errMess => ({
    type: ActionTypes.CATEGORY_FAILED,
    payload: errMess
});



// Return Promises for Recipes

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