import React, { useState, useEffect, useContext } from "react"
import { context } from "./Context"

function Login(){
    const {setData, setProfile} =useContext(context)
    console.log(setData)
    console.log(setProfile)

    useEffect(()=>{
        document.title = "Demo App"
    })
    
    return(
        <form>
            <label>UserName</label>
            <input type="text" name="userName" onChange={(e)=>{setData(e.target.value)}} />
            <label>Password</label>
            <input type="text" name="password" />
            <button onClick={()=>{setProfile(true)}}>submit</button>
        </form>
    )
}

export default Login
