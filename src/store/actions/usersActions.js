import axios from "../../axios-api";
import {push} from "connected-react-router";
import {NotificationManager} from "react-notifications";
import {
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS
} from "./actionTypes";

const registerUserSuccess = () => {
    return {type: REGISTER_USER_SUCCESS};
};

const registerUserError = error => {
    return {type: REGISTER_USER_ERROR, error};
};

export const registerUser = userData => {
    return dispatch => {
        axios.post("/users", userData)
            .then(
                response => {
                    NotificationManager.success("Регистрация прошла успешно!");
                    dispatch(registerUserSuccess());
                    dispatch(push("/"));
                },
                error => {
                    if (error.response && error.response.data) {
                        dispatch(registerUserError(error.response.data));
                    } else {
                        dispatch(registerUserError({global: "No internet connection"}));
                    }
                }
            )
    }
};

const loginUserSuccess = (user) => {
    return {type: LOGIN_USER_SUCCESS, user};
};
const loginUserError = (error) => {
    return {type: LOGIN_USER_ERROR, error};
};

export const loginUser = userData => {
    return dispatch => {
        axios.post("/users/sessions", userData)
            .then(
                response => {

                    dispatch(loginUserSuccess(response.data));
                    dispatch(push("/"));
                    NotificationManager.success("Добро пожаловать обратно!");
                },
                error => {
                    if (error.response && error.response.data) {
                        dispatch(loginUserError(error.response.data));
                    } else {
                        dispatch(loginUserError({global: "No internet connection"}));
                    }
                }
            )
    }
};

export const logoutUser = () => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {
            Authorization: token
        };
        axios.delete("/users/sessions", {headers}).then(response => {
            dispatch({type: LOGOUT_USER});
            dispatch(push("/"));
            NotificationManager.success(response.data.message);
        });
    }
};
