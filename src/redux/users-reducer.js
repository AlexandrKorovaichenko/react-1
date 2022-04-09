import {usersAPI} from '../api/api';

const FOLLOW    = "FOLLOW";
const UNFOLLOW  = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_ISFETCHING = "SET_ISFETCHING";
const SET_BUTTON_VISIBLE = "SET_BUTTON_VISIBLE";
const DEL_BUTTON_VISIBLE = "DEL_BUTTON_VISIBLE";


let initialState = {
    users: [],
    pageCount: 5,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: false,
    followVisible: [] // кнока Follow/Unfollow у юсеров
};


const userReducer  = (state = initialState, action) => {

    switch(action.type) {


        case FOLLOW: {
            
            let newUsers = state.users.map( (u) => {
                if(u.id === action.id) {
                    return {...u, followed: true}
                } else return u;
            } );  

            return { ...state, users: newUsers }
        }


        case UNFOLLOW: {

            let newUsers = state.users.map( (u) => {

                if(u.id === action.id) {
                    return {...u, followed: false}
                } else return u;

            } );  

            return { ...state, users: newUsers }
        }


        case SET_USERS: { 
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS: {
            return {...state, totalUsersCount: action.totalCount}
        }

        case SET_ISFETCHING: {
            return {...state, isFetching: action.isFetching}
        }


        case SET_BUTTON_VISIBLE: {

            if(!state.followVisible.includes(action.id)){
                state.followVisible.push(action.id);
            }

            return {
                ...state, 
                followVisible: [...state.followVisible]
            }
        }


        case DEL_BUTTON_VISIBLE: {

            let posId = state.followVisible.indexOf(action.id);
            
            if(posId !== -1){
                    state.followVisible.splice(posId, 1);
                }

            return {
                ...state, 
                followVisible: [...state.followVisible]
            }

        }

        default: return state;
    }
}


export const follow = (id) => {   
    return { type: FOLLOW, id }
  };


export const unfollow = (id) => {   
    return { type: UNFOLLOW, id }
  };


export const setUsers = (users) => {   
    return { type: SET_USERS, users }
  };


export const setCurrentPage = (currentPage) => {   
    return { type: SET_CURRENT_PAGE, currentPage }
  };


export const setTotalUsers = (totalCount) => {   
    return { type: SET_TOTAL_USERS, totalCount }
  };


export const setIsFetching = (isFetching) => {   
    return { type: SET_ISFETCHING, isFetching }
  };


export const setButtonVisible = (id) => {   
    return { type: SET_BUTTON_VISIBLE, id }
  };


export const delButtonVisible = (id) => {   
    return { type: DEL_BUTTON_VISIBLE, id }
  };


export const getUsersThunkCreator = ( currentPage, pageCount ) => {
    return (dispatch) => {
        //if(usersLength){

            //debugger;
            
            dispatch(setCurrentPage(currentPage));

            usersAPI.getUsers(currentPage, pageCount).then(response => {

                    //debugger;

                    dispatch(setTotalUsers(20));    
                    dispatch(setUsers(response.items));
                    dispatch(setIsFetching(false));
                });
        //}
    }
}



export const followThunkCreator = (userId) => {
    return (dispatch) => {

            dispatch(setButtonVisible(userId));
            
            usersAPI.follow(userId).then(response => {
                
                    if(response.data.resultCode === 0) {
                        dispatch(follow(userId));
                    };

                    dispatch(delButtonVisible(userId));

                });
            }
        }



export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
            dispatch(setButtonVisible(userId)) ; 
            usersAPI.unfollow(userId).then(response => {
                    if(response.data.resultCode === 0) {
                            dispatch(unfollow(userId));
                        };
                    dispatch(delButtonVisible(userId));
                });
            }
        }


export default userReducer;