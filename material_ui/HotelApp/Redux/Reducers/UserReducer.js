import axios from "axios";
import { loginfailure, loginsuccess, LOGIN_FAILURE, LOGIN_SUCCESS } from "../Actions/UserAction";
import { USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS } from "../Actions/UserAction";
import { userRegisterSuccess, userRegisterFail } from "../Actions/UserAction";

const initialState = {
    user: [],
    error: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { user: action.payload, error: '' }
        case LOGIN_FAILURE:
            return { user: [], error: action.payload }
        default:
            return state;
    }
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return { user: action.payload }
        case USER_REGISTER_FAILURE:
            return { error: action.payload }
        default:
            return state;
    }
}

export const fetchLoginUser = (postData) => {
    return function (dispatch) {
        axios.post('http://localhost:8000/user/login', postData)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                dispatch(loginfailure(err))
            })
    }
}

export const fetchRegisterUser = (postData) => {
    return function (dispatch) {
        axios.post('http://localhost:8000/user/register', postData)
            .then((res) => {
                console.log(res.data)
                dispatch(userRegisterSuccess(res.data))
            }).catch((err) => {
                dispatch(userRegisterFail(err))
            })
    }
}
