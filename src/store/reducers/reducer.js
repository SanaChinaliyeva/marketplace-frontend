import {FETCH_CATEGORIES, FETCH_PRODUCT_BY_ID, FETCH_PRODUCTS} from "../actions/actions";

const initialState = {
    categories: [],
    products: [],
    product: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.value};
        case FETCH_PRODUCTS:
            return {...state, products: action.value};
        case FETCH_PRODUCT_BY_ID:
            return {...state, product: action.value};
        default:
            return state;
    }
};

export default reducer;
