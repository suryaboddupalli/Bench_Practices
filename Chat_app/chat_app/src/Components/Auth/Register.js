import React, { useState } from 'react';
import axios from 'axios'

const Register = () => {
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
        console.log(data)
        axios.post('http://localhost:8000/auth/signup', data)
            .then((res) => {
                console.log(res.data)
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
                <div>
                    <button className='btn btn-primary'>Create</button>
                </div><br />
            </form>
        </div>
    )
}

export default Register