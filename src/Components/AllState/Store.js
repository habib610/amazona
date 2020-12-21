import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./ProductReducer";
const initialState = {};

const reducer = combineReducers({
    productList: productReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;

export const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))