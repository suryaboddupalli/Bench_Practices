import React, { useState } from 'react';

const Form = () => {
    const [data, setData] = useState({
        Name: '',
        Age: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <div className='page'>
            <form onSubmit={handleSubmit}>
                <label >Name :<input type='text' name='Name' onChange={changeHandler} /></label> <br />
                <label >Age:<input type='text' name='Age' onChange={changeHandler} /></label><br />
                <input type='submit' value="submit" disable={data.Name === ''} />
            </form>
        </div>
    )
}



export default Form