export const BALANCE_CHECK = 'BALANCE_CHECK'
export const DEPOSIT = 'DEPOSIT'
export const WITHDRAWAL = 'WITHDRAWAl'

export const balanceCheck = (balance) => {
    return {
        type: BALANCE_CHECK,
        payload: balance
    }
}

export const deposit = (balance) => {
    return {
        type: DEPOSIT,
        payload: balance
    }
}

export const withdrawal = (balance) => {
    return {
        type: WITHDRAWAL,
        payload: balance
    }
}
