import React, { useState } from 'react';
import axios from 'axios'

const CreateAccount = () => {
    const [data, setData] = useState({
        Name: '',
        Account_Number: '',
        Phone: '',
        Address: '',
        Address_Proof: '',
        Pan_Card: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost:8000/customer/add', data)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='page'>
            <div className='form-container' id='box'>
                <h2>Create Account </h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Name</label><br />
                        <input type=' text' name='Name' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Account_Number</label> <br />
                        <input type='text' name='Account_Number' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Phone</label><br />
                        <input type='text' name='Phone' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Address</label><br />
                        <input type='text' name='Address' onChange={changeHandler} /><br />
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>Address Proof</label><br />
                        <input type='text' name='Address_Proof' onChange={changeHandler} /><br />
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>Pan Card</label><br />
                        <input type='text' name='Pan_Card' onChange={changeHandler} /><br />
                    </div><br />
                    <div>
                        <button className='btn btn-primary'>Create</button>
                    </div><br />
                </form>
            </div>
        </div>
    )
}

export default CreateAccount