import axios from 'axios'
export const GET_TRANSACTION = 'GET_TRANSACTION'

export const getTransactions = (data) => {
    return {
        type: GET_TRANSACTION,
        payload: data
    }
}

export const fetchTransactions = () => {
    return dispatch => {
        axios.get('http://localhost:8000/transaction')
            .then((res) => {
                dispatch(getTransactions(res.data));
            }).catch(error => {
                console.log(error);
            })
    }
}

export const addTransaction = (data) => {
    return dispatch => {
        axios.post('http://localhost:8000/transaction/add', data)
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
    }
}