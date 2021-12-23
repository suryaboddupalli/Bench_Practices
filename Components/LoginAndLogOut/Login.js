import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

function Login() {
    const history = useHistory()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/login', data)
            .then(res => {
                sessionStorage.setItem('isLoggedIn', res.data.isLoggedIn)
                history.push('/dashboard')
            })
            .catch((err) => {
                console.log('error')
            })

    }

    return (
        <div className='form-container mt-5 '>
            <div className='p-3 text-black text-center '>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>UserName</label> <br />
                        <input type='text' name='email' onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label id='labels'>Password</label><br />
                        <input type='password' name='password' onChange={changeHandler} />
                    </div><br />
                    <div>
                        <button className='btn btn-primary'>login</button>
                    </div><br />
                </form>
            </div>
        </div>
    )
}

export default Login