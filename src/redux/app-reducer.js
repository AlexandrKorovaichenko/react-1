import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import { getAuthDataThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


let initialState = {
    initialized: false
};


const appReducer  = (state = initialState, action) => {

    switch(action.type) {
        
        case INITIALIZED_SUCCESS: {

            let newObj = { ...state, initialized: true }
            return newObj;
        }

        default: 
            return state;
    }

}


export const initializedSuccess = () => ( { type: INITIALIZED_SUCCESS } );


export const initializedApp = () => {
    return (dispatch) => {
            let promise = dispatch(getAuthDataThunkCreator());
            promise.then(() => {
                dispatch(initializedSuccess());
            });
        }
    }



export const logInThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
                            authAPI.login(email, password, rememberMe).then( response => {
                                if( response.data.resultCode === 0 ){
                                            dispatch(getAuthDataThunkCreator());
                                        } else {
                                            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                                            dispatch(stopSubmit("login", {email: message}));  
                                        }
                                    });
            }
        }



export default appReducer;