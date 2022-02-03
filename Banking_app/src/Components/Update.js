import React, { useState } from 'react';


const Update_Details = () => {
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

    }

    return (
        <div className='page'>
            <div className='form-container' id='box'>
                <h2>Updated Details </h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Name</label><br />
                        <input type=' text' name='Name' value={ } onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Account_Number</label> <br />
                        <input type='text' name='Account_Number' value={ } onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Phone</label><br />
                        <input type='text' name='Phone' value={ } onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Address</label><br />
                        <input type='text' name='Address' value={ } onChange={changeHandler} /><br />
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>Address Proof</label><br />
                        <input type='password' name='Address_Proof' value={ } onChange={changeHandler} /><br />
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>Pan Card</label><br />
                        <input type='password' name='Pan_Card' value={ } onChange={changeHandler} /><br />
                    </div><br />
                    <div>
                        <button className='btn btn-primary'>Update</button>
                    </div><br />
                </form>
            </div>
        </div>
    )
}

export default Update_Details