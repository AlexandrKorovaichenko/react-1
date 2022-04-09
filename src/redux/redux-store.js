import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import { reducer as formReducer } from "redux-form";


let reducers = combineReducers({
    dialog  : dialogsReducer,
    navbar  : navbarReducer,
    profile : profileReducer,
    user    : usersReducer,
    auth    : authReducer,
    app    : appReducer,
    form    : formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;