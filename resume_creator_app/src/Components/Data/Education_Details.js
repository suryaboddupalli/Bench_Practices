import React, { useState } from 'react';

const Education_Details = () => {
    const [data, setData] = useState({
        course: '',
        university: '',
        score: '',
        year: ''

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
                <div className='form-group '>
                    <label className='labels mb-2' >Course/Degree</label><br />
                    <input type=' text' className='form-control' name='course' onChange={changeHandler} /><br />
                </div>
                <div className='form-group '>
                    <label className='labels mb-2' >School/University</label> <br />
                    <input type='text' className='form-control' name='university' onChange={changeHandler} /><br />
                </div>
                <div className='form-group '>
                    <label className='labels mb-2' >Grade/Score</label><br />
                    <input type='text' className='form-control' name='score' onChange={changeHandler} /><br />
                </div>
                <div className='form-group '>
                    <label className='labels mb-2' >Year</label><br />
                    <input type='text' className='form-control' name='year' onChange={changeHandler} /><br />
                </div>
                <div>
                    <button className='btn btn-primary'>save</button>
                </div><br />
            </form>
        </div>
    )
}

export default Education_Details