import axios from 'axios';
export const ADD_RECEIVER = 'ADD_RECEIVER'
export const ADD_SENDER = 'ADD_SENDER'

export const addSender = (data) => {
    return console.log(data), {
        type: ADD_SENDER,
        data: data
    }
}

export const addReceiver = (data) => {
    return console.log(data), {
        type: ADD_RECEIVER,
        data: data
    }
}

const updateReceiver = reciverData => {
    return dispatch => {
        axios.put(`http://localhost:8000/customer/update/${reciverData.id}`, reciverData)
            .then(response => {
                console.log("Transfer Succesful");
            }).catch((error) => {
                console.log(error);
            })
    }
}

export const updateBalances = (senderData, reciverData) => {
    return dispatch => {
        axios.put(`http://localhost:8000/customer/update/${senderData.id}`, senderData)
            .then(response => {
                dispatch(updateReceiver(reciverData));
            }).catch((error) => {
                console.log(error);
            })
    }
}