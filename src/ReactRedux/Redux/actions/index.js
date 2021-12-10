import { BUY_LAPTOP, Fetch_User_Request, Fetch_User_Success, Fetch_User_Fail} from "./actionTypes"
import axios from "axios"

export const buyLaptop =()=>{
    return {
        type : BUY_LAPTOP
    }
}

export const fetchUserRequest = () => {
    return {
        type: Fetch_User_Request
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: Fetch_User_Success,
        data: users
    }
}

export const fetchUserFail = (error) => {
    return {
        type: Fetch_User_Fail,
        data: error
    }
}

export const fecthUsers =()=>{
    return(function (dispatch){
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            let users = res.data.map(user=>user.id)
            dispatch(fetchUserSuccess(users))
        }).catch(error=>{
            dispatch(fetchUserFail)
        })
    })
}
