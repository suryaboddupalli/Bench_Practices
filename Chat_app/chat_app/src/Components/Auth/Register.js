import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory()
    const [data, setData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Password: '',
        Comform_Password: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/auth/signup', data)
            .then((res) => {
                if (res.data._id) {
                    history.push(`/emailVerify/${res.data}`)
                }
                else {
                    console.log(res.data)
                }
            }).catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className='page'>
            <h2>Create Account </h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='labels'>Name</label><br />
                    <input type=' text' name='Name' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels'>Email</label> <br />
                    <input type='text' name='Email' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels'>Phone</label><br />
                    <input type='text' name='Phone' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels'>Password</label><br />
                    <input type='password' name='Password' onChange={changeHandler} /><br />
                </div><br />
                <div className='form-group'>
                    <label className='labels'>Conform-Password</label><br />
                    <input type='password' name='Conform_Password' onChange={changeHandler} /><br />
                </div><br />
                <p>Already user &nbsp;<a href='/login'>Sign In </a></p>
                <div>
                    <button className='btn btn-primary'>Create</button>
                    <button className='btn btn-secondary' onClick={() => history.push('/')}>back</button>
                </div><br />
            </form>
        </div>
    )
}

export default Register