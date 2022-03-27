//Для странички MessageItem находится в Dialogs
const SEND_MESSAGE = "SEND-MESSAGE";                       // for button in MessageItem

let initialState = {

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

      //newMessageText: ""

};

const dialogsReducer  = (state = initialState, action) => {

  switch(action.type) {
    
    case SEND_MESSAGE: {
      
      let number =  messageLength(state);

      return {...state, 
              //newMessageText: "", 
              messages: [...state.messages, { id: number, message: action.newMessageText }] 
            };
    }

    default:
      return state;
  }
  
}


const messageLength = (state) => { return state.messages.length + 1; }

// для странички Message(Dialogs)
// for button in MessageItem
export let sendMessageActionCreator = (newMessageText) => {
  return {
    type: SEND_MESSAGE,
    newMessageText,
    pageName : "Dialogs"
  }
};

export default dialogsReducer;