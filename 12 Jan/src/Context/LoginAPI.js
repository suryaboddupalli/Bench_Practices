import axios from 'axios'

export const LoginAPI = async (userCredentials,dispatch)=>{
    dispatch({type:'LOGIN_START'})
    try{
        const res = await axios.post('http://localhost:8000/login',userCredentials)
        dispatch({type:'LOGIN_SUCCESS',payload:res.data})
    }catch(err){
        dispatch({type:'LOGIN_FAILURE',payload:err})
    }
}