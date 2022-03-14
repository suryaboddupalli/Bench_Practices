import React, { useState, useContext } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const ForgotPassword = () => {
    const history = useHistory()
    const [data, setData] = useState({
        Email: '',
    })
    const changeHandler = e => {
        setData({ [e.target.name]: e.target.value })

    }
    const handleClick = () => {
        const res = axios.post("http://localhost:9000/auth/emailcheck", data)
        console.log(res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        axios.post("http://localhost:9000/auth/emailcheck", data)
            .then((res) => {
                console.log(res.data)
                history.push(`/updatePass/${res.data._id}`)
            }).catch((error) => {
                console.log(error)
            })
    }


    return (
        <div className='page'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='labels'>Email</label> <br />
                    <input type='text' name='Email' onChange={changeHandler} /><br />
                </div>
                <div>
                    <button className='btn btn-primary'>send</button>
                    <button className='btn btn-secondary' onClick={() => history.push('/')}>back</button>
                </div><br />

            </form>
        </div>
    )
}

export default ForgotPassword