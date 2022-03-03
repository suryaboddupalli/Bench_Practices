import React, { useState } from 'react';
import RegisterValidation from "../Validation"
import axios from "axios"
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory()
    const [data, setData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Password: '',
        Conform_Password: '',
    })
    const [userError, setUserError] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        // if (RegisterValidation(data)) {
        //     setUserError(RegisterValidation(data))
        // } else {
        axios.post('http://localhost:8000/user/signup', data)
            .then((res) => {
                console.log(res.data)
                history.push(`/register/${res.data}`)
            })
    }
    // }


    return (
        <div >
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label >Name</label><br />
                <input type='text' name='Name' onChange={changeHandler} /><br />
                <label >Email</label> <br />
                <input type='text' name='Email' onChange={changeHandler} /><br />
                <label >Phone</label><br />
                <input type='text' name='Phone' onChange={changeHandler} /><br />
                <label >Password</label><br />
                <input type='text' name='Password' onChange={changeHandler} /><br />
                <label >Conform_Password</label><br />
                <input type='text' name='Conform_Password' onChange={changeHandler} /><br />
                <br />
                <button >Create</button>
                <br />
            </form>
        </div>
    )
}

export default Register