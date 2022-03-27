
//Для странички MyPosts находится в Profile
const ADD_POST = "ADD-POST";                               // for button in MyPosts
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";       // for textArea in MyPosts
const SET_USER_PROFILE = "SET_USER_PROFILE"; 


let initialState = {

    // for Post in Profile
    posts: [ {id:1, message: "Hi, how are you?",    amount: "10"},
             {id:2, message: "It's my first post!",  amount: "4"},
             {id:3, message: "I'm happy!",           amount: "4"} ],

    // for MyPost in Profile
    textValueArea: "it-camasutra!!!",

    profile: null

};


const profileReducer  = (state = initialState, action) => {

    //debugger;

    switch(action.type) {

        case ADD_POST:  {
            let number = postsLength(state);
            return {...state, textValueArea: "", posts: [...state.posts, { id: number, message: state.textValueArea, amount: "0" } ] };
        }

        case UPDATE_NEW_POST_TEXT:  {
            return {...state, textValueArea: action.newText};
        }


        case SET_USER_PROFILE:  {
          //debugger;
          return { ...state, profile: action.profile };
      }
        
        default: 
            return state;
    }

}

const postsLength = (state) => { return state.posts.length + 1; }


// for button in MyPosts
export let addPostActionCreator = () => {   
    return {
      type: ADD_POST,
      pageName : "MyPost"
    }
  };
  
  
  
// for textArea in MyPosts
export let updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
      pageName : "MyPost"
    }
  };



export let setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile}};


export default profileReducer;