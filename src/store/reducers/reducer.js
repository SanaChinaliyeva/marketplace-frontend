import {FETCH_CATEGORIES} from "../actions/actions";

const initialState = {
    categories: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.value}
        default:
            return state;
    }
};

export default reducer;
