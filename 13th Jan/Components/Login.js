import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../Context/context';
import { LoginAPI } from '../Context/LoginAPI';
import { useContext } from 'react';

const Login = () => {
    const history = useHistory()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const {user,dispatch}= useContext(LoginContext)

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        LoginAPI(data,dispatch)
    }
    console.log(user)
    console.log(data)


    return (
        <div className='form-container mt-5 '>
            <div className=' p-3 text-center '>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Email</label> <br />
                        <input type='text' name='email' onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label id='labels'>Password</label><br />
                        <input type='password' name='password' onChange={changeHandler} />
                    </div><br />
                    <div>
                        <button className='btn btn-primary'>login</button>
                    </div><br />
                    <a href='/Register' >Register</a>
                </form>
            </div>
        </div>
    )
}

export default Login