import axios from 'axios'
export const ACCOUNT_DETAILS = 'ACCOUNT_DETAILS'
export const ACCOUNT_DETAILS_FAIL = 'ACCOUNT_DETAILS_FAIL'
export const FETCH_USER = 'FETCH_USER'

export const accountDetails = (data) => {
    return {
        type: ACCOUNT_DETAILS,
        payload: data
    }
}


export const fetchUser = (data) => {
    return {
        type: FETCH_USER,
        payload: data
    }
}


export const getAccountDetails = () => {
    return function (dispatch) {
        axios.get('http://localhost:8000/customer/')
            .then((res) => {
                dispatch(accountDetails(res.data))
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }
}

export const getAccount = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:8000/customer/${id}`)
            .then((res) => {
                dispatch(fetchUser(res))
                console.log(res.data);
            }).catch((err) => {
                console.log(err)
            })
    }
}


