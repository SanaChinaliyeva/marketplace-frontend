import axios from '../../axios-api';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

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