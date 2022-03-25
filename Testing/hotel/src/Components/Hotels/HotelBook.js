import React, { useState } from 'react';


function HotelBook() {
    const [data, setData] = useState({
        Name: '',
        Address: '',
        Mobile: '',
        IdType: '',
        IdNumber: '',
        NoOfDays: '',
        From: '',
        To: '',
        RoomType: ''
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className='page'>
            <div className='form-container' id='box'>
                <h2>Booking </h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels'>Name</label><br />
                        <input type=' text' name='Name' onChange={handleChange} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Address</label> <br />
                        <input type='text' name='Address' onChange={handleChange} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Mobile</label><br />
                        <input type='text' name='Mobile' onChange={handleChange} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Room Type</label><br />
                        <select name="RoomType">
                            <option >singleRoom</option>
                            <option >DoubleRoom</option>
                            <option >Hall</option>
                        </select>
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>NoOfDays</label><br />
                        <input type='number' name='NoOfDays' onChange={handleChange} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>IdType</label><br />
                        <select name="IdType">
                            <option >Aadhar Card</option>
                            <option >Pan Card</option>
                            <option >Liecence</option>
                        </select>
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>Id Number</label><br />
                        <input type='text' name='IdNumber' onChange={handleChange} /><br />
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>From</label><br />
                        <input type='date' name='From' onChange={handleChange} /><br />
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>To</label><br />
                        <input type='date' name='To' onChange={handleChange} /><br />
                    </div><br />
                    <div>
                        <button className='btn btn-primary'>Book</button>
                    </div><br />
                </form>
            </div>
        </div>
    )
}


export default HotelBook