import { FETCH_DATA } from "./Actions";

const initialState = []

export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return action.payload
        default:
            return state
    }

}