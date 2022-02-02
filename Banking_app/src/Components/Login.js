import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from '../Redux/Actions/EmpAuthAction';

const Login = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
        dispatch(fetchLoginUser(data))
    }

    return (
        <div className='page'>
            <div className='form-container'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Username</label> <br />
                        <input type='text' name='username' onChange={changeHandler} />
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