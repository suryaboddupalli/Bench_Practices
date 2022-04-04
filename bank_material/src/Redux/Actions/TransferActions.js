import axios from 'axios';
export const ADD_SENDER = 'ADD_SENDER'
export const ADD_RECEIVER = 'ADD_RECEIVER'

export const addSender = (data) => {
    return {
        type: ADD_SENDER,
        data: data
    }
}

export const addReceiver = (data) => {
    return {
        type: ADD_RECEIVER,
        data: data
    }
}


const updateReceiver = Data => {
    return dispatch => {
        axios.put("", Data)
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err);
            })
    }
}

export const updateBalances = (Data, ReciverData) => {
    return dispatch => {
        axios.put('', Data)
            .then(response => {
                dispatch(updateReceiver(ReciverData));
            }).catch(err => {
                console.log(err);
            })
    }
}