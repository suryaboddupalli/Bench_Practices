import React from 'react'
import UseLocalStorage from './UseLocalStorage'

function CustomHook(){
    const [userName, setUserName]= UseLocalStorage('userName' , 'surya')
    return(
        <input type ='text' value={userName} onChange={e=>setUserName(e.target.value)} />
    )
}

export default CustomHook