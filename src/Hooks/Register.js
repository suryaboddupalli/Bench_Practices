import React, { useState, useEffect } from "react"

function Register(){
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })

    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(data)
    }

    useEffect(()=>{
        document.title = "basic Hooks"
    })
    
    return(
        <form>
            <label>FirstName</label>
            <input type="text" name="firstName" onChange={handleChange}/>
            <label>LastName</label>
            <input type="text" name="lastName" onChange={handleChange} />
            <label>Email</label>
            <input type="text" name="email" onChange={handleChange} />
            <label>Password</label>
            <input type="text" name="password" onChange={handleChange} />
            <button onClick={handleClick}>submit</button>
        </form>
    )
}

export default Register