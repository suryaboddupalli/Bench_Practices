import { ADD_USER, GET_USERS, GET_USER, UPDATE_USER, DELETE_USER } from "./userActionsList"

export const addUser = (details)=>{
    return {
        type: ADD_USER,
        payload : details
    }
}

export const getUser = ()=>{
    return {
        type: GET_USER,
    }
}

export const getUsers = (details)=>{
    return {
        type: GET_USERS,
        payload : details
    }
}

export const updateUser = (details,id)=>{
    return {
        type: UPDATE_USER,
        payload : details,
        id
    }
}

export const deleteUser = ( id)=>{
    return {
        type: DELETE_USER,
        id
    }
}