import axios from 'axios';
import React, { useState } from 'react';
import { LoginValidation } from "../Validation"

const Login = () => {
    const [data, setData] = useState({
        Email: '',
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
        axios.post("http://localhost:8000/user/emailcheck", data)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div >
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label >Email</label> <br />
                <input type='text' name='Email' onChange={changeHandler} /><br />
                <button >Proceed</button>
            </form>
        </div>
    )
}

export default Login