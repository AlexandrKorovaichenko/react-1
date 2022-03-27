
let initialState = {

    friends: [
        { id:1, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Ivan", status: "onLine" },
        { id:2, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Jane", status: "ofLine" },
        { id:3, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Bob",  status: "onLine" },
        { id:1, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Ivan", status: "onLine" },
        { id:2, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Jane", status: "ofLine" },
        { id:3, avatar: "https://placepic.ru/wp-content/uploads/2019/02/348235-1.jpg", name: "Bob",  status: "onLine" }
      ]

}

const navbarReducer  = (state = initialState, action) => {

    return state;
}

export default navbarReducer;