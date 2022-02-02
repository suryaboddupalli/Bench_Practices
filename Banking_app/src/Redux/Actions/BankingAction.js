export const DEPOSIT = 'DEPOSIT'
export const WITHDRAWAL = 'WITHDRAWAl'


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