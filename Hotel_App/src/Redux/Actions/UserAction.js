export const LOGIN_SUCCESS ='LOGIN_SUCCESS'
export const LOGIN_FAILURE ='LOGIN_FAILURE'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILURE ='USER_REGISTER_FAILURE'
export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'


export const loginsuccess = (data)=>{
    return {
        type:LOGIN_SUCCESS,
        payload:data
    }

}

export const loginfailure = (error)=>{
    return {
        type:LOGIN_FAILURE,
        payload:error
    }

}

export const userRegisterSuccess = (data)=>{
    return{
        type: USER_REGISTER_SUCCESS,
        payload:data
    }
}

export const userRegisterFail = (error)=>{
    return{
        type: USER_REGISTER_FAILURE,
        payload:error
    }
}


export const toggleNavbar = (data)=>{
    return{
        type:TOGGLE_NAVBAR,
        payload : data
    }
}

