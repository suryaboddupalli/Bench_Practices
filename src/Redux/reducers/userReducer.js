import { ADD_USER, GET_USER, GET_USERS, UPDATE_USER, DELETE_USER } from "../actions/userActionsList";

const intialData = {
    users: [],
    user : ""
}

const userReducer = (state = intialData, action) => {
    switch (action.type) {
        case ADD_USER:
            let users =[...state.users];
            users.push(action.payload)
            return  { ...state, users }
        case GET_USER:
            return { ...state, user: { ...state.users[action.index], id: action.index } }
        case GET_USERS:
            return { ...state }
        case UPDATE_USER:
            let users = [...state.users]
            users[action.id] = (action.payload)
            return { ...state, users }
        case DELETE_USER:
            let users = [...state.users]
            users.splice(action.payload)
            return { ...state, users }
        default:
            return state
    }
}

export default userReducer