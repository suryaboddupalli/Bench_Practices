import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)

        emailjs.sendForm('service_k720ruj', 'template_egd87a8', e.target, 'user_ebu9evk62MGb6P326YQkw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <div className='page'>
            <div className='form-container' id='box'>
                <h2>Form </h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Name</label><br />
                        <input type=' text' name='name' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Email</label> <br />
                        <input type='text' name='email' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Phone</label><br />
                        <input type='text' name='phone' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Address</label><br />
                        <input type='text' name='address' onChange={changeHandler} /><br />
                    </div>
                    <button className='btn btn-primary'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Form