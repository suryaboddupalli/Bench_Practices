import React, { useState } from 'react';

const Personal_Details = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''

    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)

    }

    return (
        <div className='page mt-4'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='labels mb-2'>Name</label><br />
                    <input type=' text' className='form-control' name='name' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels mb-2'>Email</label> <br />
                    <input type='text' className='form-control' name='email' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels mb-2'>Phone</label><br />
                    <input type='text' className='form-control' name='phone' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels mb-2'>Address</label><br />
                    <textarea type='text' className='form-control' name='address' onChange={changeHandler} /><br />
                </div>
                <div>
                    <button className='btn btn-primary'>Create</button>
                </div><br />
            </form>
        </div>
    )
}

export default Personal_Details