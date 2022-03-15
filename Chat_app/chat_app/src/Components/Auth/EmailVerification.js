import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const EmailVerification = () => {
    const { id } = useParams()
    const history = useHistory()
    const [Email, setEmail] = useState()
    const [otpData, setOtpData] = useState({
        otp: '',
        userId: ''
    })

    const [data, setData] = useState({
        Email: '',
        id: ''
    })


    useEffect(() => {
        setData({ Email: Email, id: id })
    }, [Email])

    const changeHandler = e => {
        setOtpData({ [e.target.name]: e.target.value, userId: id })

    }

    const handleClick = () => {
        const res = axios.post("http://localhost:9000/auth/emailcheck", data)
        console.log(res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otpData)
        axios.post('http://localhost:9000/auth/emailcheck', otpData)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })

    }


    return (
        <div className='page'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='labels'>OTP</label> <br />
                    <input type='text' name='otp' onChange={changeHandler} /><br />
                </div>
                <button onClick={handleClick}>Resend</button>
                <div>
                    <button className='btn btn-secondary back' onClick={() => history.push('/')}>back</button>
                    <button className='btn btn-primary'>Submit</button>
                </div><br />

            </form>
        </div>
    )
}

export default EmailVerification