export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM'

export const fetchDataSuccess = (data)=>{
    return ( console.log(data),
        {
        type:FETCH_DATA_SUCCESS,
        payload : data
    })
}

export const fetchDataFailure = (error)=>{
    return{
        type:FETCH_DATA_FAILURE,
        payload : error
    }
}

export const loadCurrentItems = (hotel) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: hotel
    }
}