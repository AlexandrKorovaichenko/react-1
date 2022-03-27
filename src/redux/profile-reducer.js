import {profileAPI} from "../api/api";

//Для странички MyPosts находится в Profile
const ADD_POST = "ADD-POST";                               // for button in MyPosts
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS"; 


let initialState = {

    // for Post in Profile
    posts: [ {id:1, message: "Hi, how are you?",    amount: "10"},
             {id:2, message: "It's my first post!",  amount: "4"},
             {id:3, message: "I'm happy!",           amount: "4"} ],

    // for MyPost in Profile

    profile: null,

    status: "test"

};


const profileReducer  = (state = initialState, action) => {

    //debugger;

    switch(action.type) {

        case ADD_POST:  {
            let number = postsLength(state);
            return {...state, posts: [...state.posts, { id: number, message: action.postText, amount: "0" } ] };
        }


        case SET_USER_PROFILE:  {
          return { ...state, profile: action.profile };
        } 
        
        case SET_STATUS: {
          return { ...state, status: action.status };
        }


        default: 
            return state;
    }

}

const postsLength = (state) => { return state.posts.length + 1; }


// for button in MyPosts
export let addPostActionCreator = (postText) => {   
    return {
      type: ADD_POST,
      postText,
      pageName : "MyPost"
    }
  };
  

export let setUserProfile = ( profile )  => { return { type: SET_USER_PROFILE, profile}};


export let setStatus      = ( status )   => { return { type: SET_STATUS, status }};


export const getProfileThunkCreator = ( userId ) => {
  return (dispatch) => {
      profileAPI.getProfile(userId).then(
          response => {   
                          dispatch(setUserProfile(response.data));
                      });
    }
}


export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
      profileAPI.getStatus(userId).then(
          response => {
                          console.log("*** getStatusThunkCreator ***");
                          console.log(response);
                          console.log("*** getStatusThunkCreator ***");
                          //dispatch(setStatus(response.data.status));
                          if(response.data){
                            dispatch(setStatus(response.data));
                          }
                          
                      });
    }
}


export const updateStatusThunkCreator = (status) => (dispatch) => {

      profileAPI.updateStatus(status).then(
          response => {             
                        console.log("*** updateStatusThunkCreator ***");
                        console.log(response);
                        console.log(status);
                        console.log("*** updateStatusThunkCreator ***");
                        if(response.data.resultCode === 0){
                            dispatch(setStatus(status));
                          }
                      });
    
}


export default profileReducer;