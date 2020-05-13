import * as ActionTypes from './ActionTypes';

export const category = (state = {
    isLoading: true,
    errMess: null,
    category: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_CATEGORY:
            return { ...state, isLoading: false, category: action.payload };

        case ActionTypes.CATEGORY_LOADING:
            return { ...state, isLoading: true, errMess: null, category: [] };

        case ActionTypes.CATEGORY_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }

} 