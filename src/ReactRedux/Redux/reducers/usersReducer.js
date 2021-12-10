import {Fetch_User_Request,Fetch_User_Success, Fetch_User_Fail} from "../actions/actionTypes"

const intialState = {
    users: [],
    error: "",
    isLoading: false
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

export default usersReducer