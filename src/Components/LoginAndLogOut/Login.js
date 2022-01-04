import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoginValidation from '../../Validation/LoginValidations';

function Login({ dispatchData }) {
    const history = useHistory()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [clientErrors, setClientErrors] = useState()
    const [serverErrors, setServerErrors] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (LoginValidation(data)) {
            setClientErrors(LoginValidation(data))
        } else {
            axios.post('http://localhost:8000/user/login', data)
                .then(res => {
                    if (res.data.token) {
                        sessionStorage.setItem('token', res.data.token)
                        if (res.data.Admin) {
                            history.push('/admin')
                            sessionStorage.setItem('isAdmin', res.data.Admin)
                        }else{
                            history.push('/dashboard')
                        }
                        sessionStorage.setItem('data', dispatchData.payload)
                    }
                })
                .catch((error) => {
                    setServerErrors(error.res.data.error)
                })
        }
    }

    return (
        <div className='form-container mt-5 '>
            <div className='p-3 text-black text-center '>
                <h2>Login</h2>
                {clientErrors ? <span style={{ color: 'red' }}>{clientErrors}</span> : null}
                {serverErrors ? <span style={{ color: 'red' }}>{serverErrors}</span> : null}
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



const mapdispatchToProps = (dispatch) => {
    return {
        dispatchData: dispatch({ type: "TOGGLE_NAVBAR", payload: true })
    }
}

export default connect(null, mapdispatchToProps)(Login)
