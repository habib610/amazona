import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducers } from "./cartReducer";

import { productDetailsReducer, productReducer } from "./ProductReducer";
const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
      },
    };


const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;

export const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))