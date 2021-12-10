const { createStore, applyMiddleware } = require("redux")
const thunk = require("redux-thunk").default
const axios = require("axios")
const Fetch_User_Request = "Fetch_User_Request"
const Fetch_User_Success = "Fetch_User_Success"
const Fetch_User_Fail = "Fetch_User_Fail"


const intialState = {
    users: [],
    error: "",
    isLoading: false
}

const fetchUserRequest = () => {
    return {
        type: Fetch_User_Request
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: Fetch_User_Success,
        data: users
    }
}

const fetchUserFail = (error) => {
    return {
        type: Fetch_User_Fail,
        data: error
    }
}

const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case Fetch_User_Request:
            return { ...state, isLoading: true }
        case Fetch_User_Success:
            return { isLoading: false, users: action.data, error: "" }
        case Fetch_User_Fail:
            return { isLoading: false, users: [], error: action.error }
        default:
            return state
    }
}

const fecthUsers =()=>{
    return(function (dispatch){
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            let users = res.data.map(user=>user.id)
            dispatch(fetchUserSuccess(users))
        }).catch(error=>{
            dispatch(fetchUserFail)

        })
    })
}

const store = createStore(usersReducer, applyMiddleware(thunk))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fecthUsers())
