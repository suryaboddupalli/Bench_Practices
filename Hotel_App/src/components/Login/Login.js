import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const changeHandler = e => {
        setData({...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div className='page'>
            <div className= 'form-container' id='box'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Email</label> <br />
                        <input type='text' name='email' onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Password</label><br />
                        <input type='password' name='password' onChange={changeHandler} />
                    </div><br />
                    <div>
                        <button className='btn btn-primary'>login</button>
                    </div><br />
                    <a href='./Register' className='link' >Register</a>
                </form>
            </div>
        </div>
    )
}

export default Login