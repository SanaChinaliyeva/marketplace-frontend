import axios from '../../axios-api';
import {push} from 'connected-react-router';
import {NotificationManager} from "react-notifications";

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';

export const fetchCategoriesSuccess = categories => {
   return {type: FETCH_CATEGORIES, value: categories};
};

export const fetchCategories = () => {
   return dispatch => {
       axios.get('/categories').then(response => {
           dispatch(fetchCategoriesSuccess(response.data));
       }
       ).catch(error => {
           if (error.response && error.response.data) {
               dispatch(networkRequestFailure(error.response.data));
           } else {
               dispatch(networkRequestFailure({global: "No internet connection"}));
           }
       });
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
            ).catch(error => {
                if (error.response && error.response.data) {
                    dispatch(networkRequestFailure(error.response.data));
                } else {
                    dispatch(networkRequestFailure({global: "No internet connection"}));
                }
            });
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
        ).catch(error => {
            if (error.response && error.response.data) {
                dispatch(networkRequestFailure(error.response.data));
            } else {
                dispatch(networkRequestFailure({global: "No internet connection"}));
            }
        });
    }
};

export const networkRequestFailure = err => {
   return {type: REQUEST_FAILURE, value: err}
};

export const deleteProduct = id => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {
            Authorization: token
        };
        axios.delete('/products/'+id, {headers}).then(res => {
            NotificationManager.success("Объявление о товаре удалено!");
            dispatch(push('/'));
        }).catch(error => {
            if (error.response && error.response.data) {
                dispatch(networkRequestFailure(error.response.data));
            } else {
                dispatch(networkRequestFailure({global: "No internet connection"}));
            }
        });
    }
};

export const createProductSuccess = () => {
    return {type: CREATE_PRODUCT_SUCCESS};
};

export const createProduct = product => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {
            Authorization: token
        };
        return axios.post('/products', product, {headers}).then(() => {
            dispatch(createProductSuccess());
        }).catch(error => {
            if (error.response && error.response.data) {
                dispatch(networkRequestFailure(error.response.data));
            } else {
                dispatch(networkRequestFailure({global: "No internet connection"}));
            }
        });
    }
};