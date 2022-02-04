import { UPDATE_BALANCE } from "../Actions/BankingAction";

const initialState = {
    balance: ''
}


export const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        case BALANCE:
            return { ...state, balance: action.payload }
        default:
            return state
    }
}




