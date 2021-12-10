import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAIL} from "../actions/actionTypes"

const intialState = {
    items: [],
    err : "",
}

const itemReducer = (state=intialState,action)=>{
    switch (action.type) {
        case GET_DATA_REQUEST:
            return { ...state }
        case GET_DATA_SUCCESS:
            return { items: action.data, err: "" }
        case GET_DATA_FAIL:
            return { items: [], error: action.err }
        default:
            return state
    }
}

export default itemReducer