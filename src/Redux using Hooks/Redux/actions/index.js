import {GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAIL} from "./actionTypes"
import axios from "axios"

export const getDataRequest = ()=>{
    return{
        type : GET_DATA_REQUEST
    }
}

export const getDataSuccess = (items)=>{
    return{
        type : GET_DATA_SUCCESS,
        data : items
    }
}

export const getDataFail = (err)=>{
    return{
        type : GET_DATA_FAIL,
        data : err
    }
}

export const getItems = ()=>{
    return(function(dispatch){
        dispatch(getDataRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            let items = res.data
            dispatch(getDataSuccess)
        }).catch(err=>{
            dispatch(getDataFail)
        })

    })
}