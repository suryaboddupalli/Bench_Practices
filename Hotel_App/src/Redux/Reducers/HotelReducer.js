import axios from 'axios'
import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,LOAD_CURRENT_ITEM, fetchDataFailure, fetchDataSuccess } from '../Actions/HotelAction'

const initialState = {
    hotelDetails: [],
    error: '',
    currentItem :null
}

export const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return console.log(action.payload), { hotelDetails: action.payload }
        case FETCH_DATA_FAILURE:
            return { error: action.payload }
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state
    }

}

export const fetchData = () => {
    return (function (dispatch) {
        axios.get('http://localhost:8000/hotel')
            .then((res) => {
                console.log(res.data)
                const data = res.data.map(item => item)
                console.log(data)
                dispatch(fetchDataSuccess(data))
            }).catch((error) => {
                dispatch(fetchDataFailure(error))
            })
    })
}


