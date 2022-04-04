import { GET_TRANSACTION } from '../Actions/TransactionAction'

const initialState = {
    transactions: []
}

export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTION:
            return console.log(action.payload), {
                ...state,
                transactions: action.payload
            }
        default:
            return state;
    }
}
