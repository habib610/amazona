import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../ProductConstants/ProductConstants"

export const productReducer = (state = { loading: true, products: []}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true }

        case PRODUCT_LIST_SUCCESS: 
            return {loading: false, products: action.payload}
            case PRODUCT_LIST_FAIL: 
            return {error: action.payload, loading: false}
        default :
            return state;
    }
}