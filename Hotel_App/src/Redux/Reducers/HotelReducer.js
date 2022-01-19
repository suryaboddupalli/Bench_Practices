import axios from 'axios'
import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, fetchDataFailure, fetchDataSuccess } from '../Actions/HotelAction'

const initialState = {
    hotelDetails: [],
    error: ''
}

export const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return { hotelDetails: action.payload }
        case FETCH_DATA_FAILURE:
            return { error: action.payload }
        default:
            return state
    }

}

export const fetchData = () => {
    return (function (dispatch) {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res)
                const data = res.data.map(item=>item.id)
                dispatch(fetchDataSuccess(data))
            }).catch((error) => {
                dispatch(fetchDataFailure(error))
            })
    })
}

