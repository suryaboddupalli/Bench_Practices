import { ADD_RECEIVER, ADD_SENDER } from '../Actions/TransferActions'
const TRANSFER_SUCCESS = 'TRANSFER_SUCCESS'
const TRANSFER_COMPLETE = 'TRANSFER_COMPLETE'

const initialState = {
    sender: {
        id: "",
        username: "",
        email: "",
        mobileNumber: "",
        currentBalance: ""
    },
    receiver: {
        id: "",
        username: "",
        email: "",
        mobileNumber: "",
        currentBalance: ""
    },
    transfer: false
}

export const transferReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SENDER:
            return updateObject(state, {
                sender: {
                    id: action.data.id,
                    username: action.data.username,
                    email: action.data.email,
                    mobileNumber: action.data.mobileNumber,
                    currentBalance: action.data.currentBalance
                }
            });
        case ADD_RECEIVER:
            return updateObject(state, {
                receiver: {
                    id: action.data.id,
                    username: action.data.username,
                    email: action.data.email,
                    mobileNumber: action.data.mobileNumber,
                    currentBalance: action.data.currentBalance
                }
            });
        case TRANSFER_SUCCESS:
            return updateObject(state, {
                transfer: true
            });
        case TRANSFER_COMPLETE:
            return updateObject(state, {
                transfer: false
            });
        default:
            return state;
    }
}

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};