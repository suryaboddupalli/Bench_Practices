import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({
        Email: '',
        Password: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost:8000/auth/login', data)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className='page'>
            <h2>Login </h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='labels'>Email</label> <br />
                    <input type='text' name='Email' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels'>Password</label><br />
                    <input type='password' name='Password' onChange={changeHandler} /><br />
                </div><br />
                <div>
                    <button className='btn btn-primary'>login</button>
                </div><br />
            </form>
        </div>
    )
}

export default Login