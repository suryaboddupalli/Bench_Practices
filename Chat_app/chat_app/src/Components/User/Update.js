import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'

const UpdateProfile = () => {
    const [profile, setProfile] = useState()
    const [currentUser, setCurrentUser] = useState([])
    const changeHandler = e => {
        setProfile({ [e.target.name]: e.target.value })

    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setCurrentUser(user)
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profile)
        const res = axios.put(`http://localhost:9000/auth/profileUpdate/${currentUser._id}`)
        console.log(res.data)
    }

    return (
        <div className='page'>
            <form onSubmit={handleSubmit}>
                <label className='labels'>Profile</label> <br />
                <input type='text' name='Profile' onChange={changeHandler} /><br />
                <div>
                    <button className='btn btn-primary'>Change Profile</button>
                </div><br />
            </form>
        </div>
    )
}

export default UpdateProfile