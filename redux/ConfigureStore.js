import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { recipes } from './recipes';
import { category } from './category';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            recipes,
            category
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}