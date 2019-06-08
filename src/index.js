import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware, ConnectedRouter} from "connected-react-router";
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import usersReducer from "./store/reducers/users";
import reducer from "./store/reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const rootReducer = combineReducers({
    users: usersReducer,
    shop: reducer,
    router: connectRouter(history)
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('user', serializedState);
    } catch (e) {
        console.log("Could not save user");
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if(serializedState === null) {
            return;
        }
        return JSON.parse(serializedState);
    } catch {
        return undefined;
    }
};

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    const user = store.getState().users.user;
    saveToLocalStorage({
        users: {
            user: user
        }
    });
});

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
