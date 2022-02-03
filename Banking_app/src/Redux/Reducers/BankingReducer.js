import { BALANCE, DEPOSIT, WITHDRAWAL } from "../Actions/BankingAction";
import axios from 'axios'

const initialState = {
    balance: 0
}


export const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        case BALANCE:
            return { ...state, balance: state.balance + action.payload }
        case DEPOSIT:
            return console.log(state.balance), console.log(action.payload), { ...state, balance: state.balance + action.payload }
        case WITHDRAWAL:
            return console.log(state.balance), { ...state, balance: state.balance - action.payload }
        default:
            return state
    }
}




