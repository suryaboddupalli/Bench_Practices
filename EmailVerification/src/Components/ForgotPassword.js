import React, { useState } from 'react';

const ForgotPassword = () => {
    const [data, setData] = useState({
        otp: "",
        Password: '',
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
    }


    return (
        <div >
            <h2>ChangePassword</h2>
            <form onSubmit={handleSubmit}>
                <label >One-Time-Password</label><br />
                <input type='text' name='otp' onChange={changeHandler} /><br />
                <label >Password</label><br />
                <input type='text' name='Password' onChange={changeHandler} /><br />
                <label >Conform_Password</label><br />
                <input type='text' name='Conform_Password' onChange={changeHandler} /><br />
                <br />
                <button >Change</button>
                <br />
            </form>
        </div>
    )
}

export default ForgotPassword