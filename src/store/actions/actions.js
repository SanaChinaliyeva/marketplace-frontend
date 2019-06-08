import axios from '../../axios-api';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchCategoriesSuccess = categories => {
   return {type: FETCH_CATEGORIES, value: categories};
};

export const fetchCategories = () => {
   return dispatch => {
       axios.get('/categories').then(response => {
           dispatch(fetchCategoriesSuccess(response.data));
       }
       ).catch(err => {console.log(err)});
   }
};

export const fetchProductsSuccess = products => {
    return {type: FETCH_PRODUCTS, value: products};
};

export const fetchProducts = (category) => {
    return dispatch => {
        if (!category) {
            axios.get('/products').then(response => {
                dispatch(fetchProductsSuccess(response.data));
                }
            ).catch(err => {console.log(err)});
        } else {
            axios.get('/products/'+category).then(response => {
                dispatch(fetchProductsSuccess(response.data));
            }
            ).catch(err => {console.log(err)});
        }

    }
};