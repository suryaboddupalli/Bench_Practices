import React, { useState } from 'react';

const Register = () => {
    const [data, setData] = useState({
        Name: '',
        Account_Number: '',
        Username: '',
        Password: '',
        Conform_Password: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (data.Password === data.Conform_Password) {
            console.log(data)
        }
    }

    return (
        <div className='page'>
            <div className='form-container' id='box'>
                <h2>Register </h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Name</label><br />
                        <input type=' text' name='name' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Account_Number</label> <br />
                        <input type='text' name='Account_Number' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Username</label><br />
                        <input type='text' name='Username' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Password</label><br />
                        <input type='password' name='Password' onChange={changeHandler} /><br />
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>Conform Password</label><br />
                        <input type='password' name='Conform_Password' onChange={changeHandler} /><br />
                    </div><br />
                    <div>
                        <button className='btn btn-primary'>Register</button>
                    </div><br />
                    <a href='./Login' className='link' >Login</a>
                </form>
            </div>
        </div>
    )
}

export default Register