import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productDetailsReducer, productReducer } from "./ProductReducer";
const initialState = {};

const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;

export const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))