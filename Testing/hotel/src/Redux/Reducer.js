import { FETCH_DATA, LOAD_CURRENT_ITEM } from './Action'

const initialState = {
    hotelDetails: [],
    currentItem: null
}

export const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return console.log(action.payload), { hotelDetails: action.payload }
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state
    }

}

