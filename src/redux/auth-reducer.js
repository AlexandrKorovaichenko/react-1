import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_AUTH_DATA    = "SET_AUTH_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer  = (state = initialState, action, isAuth) => {

    //debugger;

    switch(action.type) {
        
        case SET_AUTH_DATA: {
            let newObj = { ...state, ...action.data}
            return newObj;
        }


        default: 
            return state;
    }

}


export const setAuthData = (userId, email, login, isAuth) => ( 

                { type: SET_AUTH_DATA, 
                                                        
                    data: {userId: userId, 
                            email: email, 
                            login: login,
                            isAuth: isAuth
                        } 

                });


export const getAuthDataThunkCreator = () => {
    return (dispatch) => {
                            authAPI.me().then( response => {
                                if( response.data.resultCode === 0 ){
                                        console.log(response.data.data);
                                        //debugger;
                                        let {email, id, login} = response.data.data;        
                                        dispatch(setAuthData(id, email, login, true));
                                    }
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



export const logOutThunkCreator = () => {
            return (dispatch) => {
                                    authAPI.logout().then( response => {
                                        if( response.data.resultCode === 0 ){
                                                    console.log(response.data.data);
                                                    //debugger;
                                                    dispatch(setAuthData(null, null, null, false));
                                                }
                                            });
                    }
                }


export default authReducer;