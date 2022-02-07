import axios from 'axios'
export const LOGGEDIN_SUCCESS = 'LOGGEDIN_SUCCESS'
export const LOGGEDIN_FAIL = 'LOGGEDIN_FAIL'

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



export const fetchLoginUser = (postData) => {
    return function (dispatch) {
        axios.post('http://localhost:8000/employees/login', postData)
            .then((res) => {
                console.log(res.data.Token)
                localStorage.setItem('token', res.data.Token)
                dispatch(loginSuccess(res.data.Token))
            }).catch((error) => {
                console.log(error.response.data.error);
                dispatch(loginFail(error.response.data.error))
            })
    }
}

