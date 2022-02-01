import { BALANCE_CHECK, DEPOSIT, WITHDRAWAL } from "../Actions/BankActions";

const initialState = {
    balance: 0
}

console.log(initialState)

export const bankReducer = (state = initialState, action) => {
    console.log(state.balance);
    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload }
        case WITHDRAWAL:
            return { ...state, balance: state.balance - action.payload }
        default:
            return state
    }
}