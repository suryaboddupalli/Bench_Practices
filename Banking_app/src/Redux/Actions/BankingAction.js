import axios from 'axios'
export const DEPOSIT = 'DEPOSIT'
export const WITHDRAWAL = 'WITHDRAWAl'
export const BALANCE = 'BALANCE'
export const UPDATE_BALANCE = 'UPDATE_BALANCE'


export const deposit = (balance) => {
    return {
        type: DEPOSIT,
        payload: balance
    }
}

export const fetchBalance = (balance) => {
    return {
        type: BALANCE,
        payload: balance
    }
}


export const withdrawal = (balance) => {
    return {
        type: WITHDRAWAL,
        payload: balance
    }
}

export const updateBal = (balance) => {
    return {
        type: UPDATE_BALANCE,
        payload: balance
    }
}




