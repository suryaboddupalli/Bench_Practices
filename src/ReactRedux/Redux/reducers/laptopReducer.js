import { BUY_LAPTOP } from "../actions/actionTypes"

const initalState = {
    noOfLaptop : 100
}

export const laptopReducer = (state = initalState, action) => {
    if (action.type === BUY_LAPTOP) {
        return ({ noOfLaptops: state.noOfLaptops - 1 })
    }
    return (state)
}
