export const BOOKING_SUCCESS = 'BOOKING_SUCCESS'
export const BOOKING_FAILURE = 'BOOKING_FAILURE'

export const BookingSuccess = (data) => {
    return {
        type: BOOKING_SUCCESS,
        payload: data
    }
}

export const BookingFail = (error) => {
    return {
        type: BOOKING_FAILURE,
        payload: error
    }
}