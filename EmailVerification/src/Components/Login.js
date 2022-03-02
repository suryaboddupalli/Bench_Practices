import React, { useState } from 'react';
import { LoginValidation } from "../Validation"

const Login = () => {
    const [data, setData] = useState({
        Email: '',
        Password: '',
    })
    const [userError, setUserError] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (LoginValidation(data)) {
            setUserError(LoginValidation(data))
        } else {
            console.log(data)
        }

    }


    return (
        <div >
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label >Email</label> <br />
                <input type='text' name='Email' onChange={changeHandler} /><br />
                <label >Password</label><br />
                <input type='text' name='Password' onChange={changeHandler} /><br />
                <button >login</button>
                <a href='/'>forgot Password</a>
                <br />
            </form>
        </div>
    )
}

export default Login