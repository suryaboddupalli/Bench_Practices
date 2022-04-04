import axios from 'axios'
export const LOGGEDIN_SUCCESS = 'LOGGEDIN_SUCCESS'
export const LOGGEDIN_FAIL = 'LOGGEDIN_FAIL'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const loginSuccess = (data) => {
    return {
        type: LOGGEDIN_SUCCESS,
        payload: data
    }
}

export const loginFail = (error) => {
    return {
        type: LOGGEDIN_FAIL,
        payload: error
    }
}

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

export const registerFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error
    }
}


export const fetchLoginUser = (postData) => {
    return function (dispatch) {
        axios.post('http://localhost:8000/user/login', postData)
            .then((res) => {
                console.log(res.data)
                dispatch(loginSuccess(res.data))
            }).catch((err) => {
                dispatch(loginFail(err))
            })
    }
}


export const fetchRegisterUser = (postData) => {
    return function (dispatch) {
        axios.post('http://localhost:8000/user/register', postData)
            .then((res) => {
                console.log(res.data)
                dispatch(registerSuccess(res.data))
            }).catch((err) => {
                dispatch(registerFail(err))
            })
    }
}
