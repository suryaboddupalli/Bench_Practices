import axios from 'axios'
export const FETCH_DATA = 'FETCH_DATA'
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM'


export const fetchData = (data) => {
    return (console.log(data),
    {
        type: FETCH_DATA,
        payload: data
    })
}


export const loadCurrentItems = (hotel) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: hotel
    }
}

// export const fetchHotels = () => {
//     return (function (dispatch) {
//         axios.get('http://localhost:8000/hotel')
//             .then((res) => {
//                 dispatch(fetchData(res.data))
//             }).catch((error) => {
//                 console.log(error)
//             })
//     })
// }

// export const fetchHotel = (id) => {
//     return (function (dispatch) {
//         axios.get(`http://localhost:8000/hotel/${id}`)
//             .then((res) => {
//                 dispatch(loadCurrentItems(res.data))
//             }).catch((error) => {
//                 console.log(error)
//             })
//     })
// }