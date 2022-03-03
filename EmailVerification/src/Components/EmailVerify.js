import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const EmailVerify = () => {
    const { id } = useParams()
    const [otp, setOtp] = useState({})
    const changeHandler = e => {
        setOtp({ id, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/user/verify", otp)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div >
            <h2>Verify</h2>
            <form onSubmit={handleSubmit}>
                <label >OTP</label><br />
                <input type='text' name='otp' onChange={changeHandler} /><br />
                <button >Create</button>
                <br />
            </form>
        </div>
    )
}

export default EmailVerify