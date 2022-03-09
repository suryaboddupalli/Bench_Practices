import React, { useState, useContext } from 'react';
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../../Context/AuthActions';


const Login = () => {
    const { dispatch } = useContext(AuthContext);
    const [data, setData] = useState({
        Email: '',
        Password: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)

        login(data, dispatch)

    }
    const login = async (data, dispatch) => {
        const res = await axios.post('http://localhost:9000/auth/login', data)
        if (res.data.user) {
            console.log(res.data.Token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.Token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.user })

        } else {
            console.log(res.data.error)
            dispatch({ type: LOGIN_FAILURE, payload: res.data.error })
        }

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