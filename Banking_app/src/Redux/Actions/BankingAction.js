import axios from 'axios'
export const UPDATE_BALANCE = 'UPDATE_BALANCE'


export const updateBal = (balance) => {
    return {
        type: UPDATE_BALANCE,
        payload: balance
    }
}

export const updateBalance = (balance, id) => {
    return function (dispatch) {
        axios.put(`http://localhost:8000/customer/balUpdate/${id}`, balance)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err)
            })
    }
}





