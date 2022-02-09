import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchLoginUser } from '../Redux/Actions/EmpAuthAction';
import EmpLoginValidation from '../Validations/LoginValidation';
import Navbar from './Navbar/Navbar'

const Login = () => {
    const errorFetch = useSelector((state) => state.LoginData.error)
    console.log(errorFetch);
    const history = useHistory()
    const dispatch = useDispatch()
    const [data, setData] = useState({
        Username: '',
        Password: ''
    })
    const [userError, setUserError] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (EmpLoginValidation(data)) {
            setUserError(EmpLoginValidation(data))
        } else {
            dispatch(fetchLoginUser(data))
            history.push('/dashboard')
        }
    }

    return (
        <div className='page'>
            <Navbar />
            <div className='form-container text-center mt-5'>
                <h2>Login</h2>
                {userError && <div className='text-danger'>{userError}</div>}
                {<div className='text-danger'>{errorFetch}</div>}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Username</label> <br />
                        <input type='text' name='Username' onChange={changeHandler} />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Password</label><br />
                        <input type='password' name='Password' onChange={changeHandler} />
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