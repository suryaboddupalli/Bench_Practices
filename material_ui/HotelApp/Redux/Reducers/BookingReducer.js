import axios from 'axios'
import { BOOKING_SUCCESS, BOOKING_FAILURE, BookingSuccess, BookingFail } from "../Actions/BookingAction";

const initialState = {
    BookingData: [],
    error: ''
}
export const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_SUCCESS:
            return { BookingData: action.payload, error: '' }
        case BOOKING_FAILURE:
            return { BookingData: [], error: action.payload }

        default:
            return state
    }
}

export const BookingData = (data) => {
    return function (dispatch) {
        axios.post('http://localhost:8000/booking/add', data)
            .then((res) => {
                console.log(res.data)
                dispatch(BookingSuccess(res.data))
            }).catch((err) => {
                dispatch(BookingFail(err))
            })
    }
}