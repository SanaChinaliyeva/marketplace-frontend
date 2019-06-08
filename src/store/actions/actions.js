import axios from '../../axios-api';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';

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
            axios.get('/products?category='+category).then(response => {
                dispatch(fetchProductsSuccess(response.data));
            }
            ).catch(err => {console.log(err)});
        }

    }
};

export const fetchProductByIdSuccess = product => {
    return {type: FETCH_PRODUCT_BY_ID, value: product};
};

export const fetchProductById = (id) => {
    return dispatch => {
        axios.get('/products/'+id).then(response => {
                dispatch(fetchProductByIdSuccess(response.data));
            }
        ).catch(err => {console.log(err)});
    }
};
