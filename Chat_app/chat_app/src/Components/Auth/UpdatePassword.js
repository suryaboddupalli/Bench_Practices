import React, { useState, useContext } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const UpdatePassword = () => {
    const { id } = useParams()
    const history = useHistory()
    const [data, setData] = useState({
        otp: '',
        id: '',
        Password: ''
    })
    const [resend, setResend] = useState()

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value, id: id })
    }

    const handleClick = () => {
        const res = axios.post("http://localhost:9000/auth/emailcheck", resend)
        console.log(res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)

    }


    return (
        <div className='page'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='labels'>Otp</label> <br />
                    <input type='text' name='otp' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels'>Password</label><br />
                    <input type='password' name='Password' onChange={changeHandler} /><br />
                </div><br />
                <div className='form-group'>
                    <label className='labels'>Conform Password</label><br />
                    <input type='password' name='Conform_Password' onChange={changeHandler} /><br />
                </div><br />
                <button onClick={handleClick}><a >resend</a></button>
                <div>
                    <button className='btn btn-primary'>Change</button>
                    <button className='btn btn-secondary' onClick={() => history.push('/')}>back</button>
                </div><br />

            </form>
        </div>
    )
}

export default UpdatePassword