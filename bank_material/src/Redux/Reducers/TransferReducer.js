import { ADD_RECEIVER, ADD_SENDER } from '../Actions/TransferAction';

const initialState = {
    sender: {
        id: "",
        Name: "",
        Account_Number: "",
        currentBalance: ""
    },
    receiver: {
        id: "",
        Name: "",
        Account_Number: "",
        currentBalance: ""
    }
}

export const TransferReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SENDER:
            return {
                ...state,
                sender: {
                    id: action.data._id,
                    Name: action.data.Name,
                    Account_Number: action.data.Account_Number,
                    Balance: action.data.Balance
                }

            }
        case ADD_RECEIVER:
            return {
                ...state,
                receiver: {
                    id: action.data._id,
                    Name: action.data.Name,
                    Account_Number: action.data.Account_Number,
                    Balance: action.data.Balance
                }
            }
        default:
            return state;
    }
}
