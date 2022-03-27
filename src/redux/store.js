
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';

let state = {

  profile: {

    // for Post in Profile
    posts: [ {id:1, message: "Hi, how are you?",    amount: "10"},
             {id:2, message: "It's my first post!",  amount: "4"},
             {id:3, message: "I'm happy!",           amount: "4"} ],

    // for MyPost in Profile
    textValueArea: "it-camasutra!!!"
  },


  dialog: {

    // for DialogItems in Dialogs
    dialogs: [
      { id: 1, name: "Shurik" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valery" }
    ],

    // for MessageItems in Dialogs
    messages: [
      { id:1, message: "Hi" },
      { id:2, message: "How is your it-kamasutra?" },
      { id:3, message: "Yo" }
    ],

    // for MessageItems in Dialogs
    newMessageText: "",

  },
  

  navbar: {

    // for FriendItems in Navbar
    friends: [
      { id:1, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Ivan", status: "onLine" },
      { id:2, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Jane", status: "ofLine" },
      { id:3, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Bob",  status: "onLine" },
      { id:1, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Ivan", status: "onLine" },
      { id:2, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Jane", status: "ofLine" },
      { id:3, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Bob",  status: "onLine" }
    ]

  }



};


//
let store = {

  _state: state,
  _callSubscriber(data) { console.log(""); },
  getState(){ return this._state; },
  subscribe(observer) { this._callSubscriber = observer; },

  dispatch(action) { 
    this._state.profile = profileReducer( this._state.profile ,  action);
    this._state.dialog  = dialogsReducer( this._state.dialog ,   action);
    this._state.navbar  = navbarReducer( this._state.navbar ,    action);
    /*this._callSubscriber(this);*/
  }
  
};

export default store;