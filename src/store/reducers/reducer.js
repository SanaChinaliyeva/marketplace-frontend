import {FETCH_CATEGORIES, FETCH_PRODUCTS} from "../actions/actions";

const initialState = {
    categories: [],
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.value};
        case FETCH_PRODUCTS:
            return {...state, products: action.value}
        default:
            return state;
    }
};

export default reducer;
