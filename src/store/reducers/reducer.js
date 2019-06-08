import {FETCH_CATEGORIES, FETCH_PRODUCT_BY_ID, FETCH_PRODUCTS, REQUEST_FAILURE} from "../actions/actions";

const initialState = {
    categories: [],
    products: [],
    product: null,
    err: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.value};
        case FETCH_PRODUCTS:
            return {...state, products: action.value};
        case FETCH_PRODUCT_BY_ID:
            return {...state, product: action.value};
        case REQUEST_FAILURE:
            return {...state, err: action.value};
        default:
            return state;
    }
};

export default reducer;
