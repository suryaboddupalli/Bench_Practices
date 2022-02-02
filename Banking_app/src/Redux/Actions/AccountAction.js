import axios from 'axios'
export const ACCOUNT_DETAILS_SUCCESS = 'ACCOUNT_DETAILS_SUCCESS'
export const ACCOUNT_DETAILS_FAIL = 'ACCOUNT_DETAILS_FAIL'

export const accountDetailSuccess = (data) => {
    return {
        type: ACCOUNT_DETAILS_SUCCESS,
        payload: data
    }
}

export const accountDetailFail = (error) => {
    return {
        type: ACCOUNT_DETAILS_FAIL,
        payload: error
    }
}



export const addAccount = (postData) => {
    return function (dispatch) {
        axios.post('http://localhost:8000/customer/add', postData)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }
}

export const getAccountDetails = () => {
    return function (dispatch) {
        axios.get('http://localhost:8000/customer/')
            .then((res) => {
                dispatch(accountDetailSuccess(res.data))
                console.log(res.data)
            }).catch((err) => {
                dispatch(accountDetailFail(err))
                console.log(err)
            })
    }
}

