import { ADD_RECEIVER, ADD_SENDER } from '../Actions/TransferAction';

const initialState = {
    sender: {
        id: "",
        Username: "",
        Account_Number: "",
        currentBalance: ""
    },
    receiver: {
        id: "",
        Username: "",
        Account_Number: "",
        currentBalance: ""
    }
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const TransferReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SENDER:
            return updateObject(state, {
                sender: {
                    id: action.data.id,
                    Username: action.data.Username,
                    Account_Number: action.data.Account_Number,
                    Balance: action.data.Balance
                }
            });
        case ADD_RECEIVER:
            return updateObject(state, {
                receiver: {
                    id: action.data.id,
                    username: action.data.username,
                    Account_Number: action.data.Account_Number,
                    Balance: action.data.Balance
                }
            });
        default:
            return state;
    }
}
