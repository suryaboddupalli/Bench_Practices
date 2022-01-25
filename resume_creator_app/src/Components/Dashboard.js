import React, { useState, useRef } from 'react';



function Dashboard() {
    const level = useRef()
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        course: '',
        university: '',
        score: '',
        year: '',
        companyName: '',
        jobRole: '',
        startDate: '',
        endDate: '',
        details: '',
        objective: '',
        skill: '',
        level: '',
        title: '',
        description: ''
    })

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value, level: level.current.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(data));
        localStorage.setItem('data', JSON.stringify(data))
    }

    return (
        <div>
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
                    <div className='form-group'>
                        <label className='labels mb-2'>Company Name</label><br />
                        <input type=' text' className='form-control' name='companyName' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels mb-2'>Job Title</label> <br />
                        <input type='text' className='form-control' name='jobRole' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels mb-2'>Start Date</label><br />
                        <input type='text' className='form-control' name='startDate' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels mb-2'>End Date</label><br />
                        <input type='text' className='form-control' name='endDate' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels mb-2'>Details</label><br />
                        <textarea type='text' className='form-control' name='details' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels mb-2'>Objective</label><br />
                        <textarea type='text' className='form-control' name='objective' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Skill</label><br />
                        <input type=' text' className='form-control' name='skill' onChange={changeHandler} /><br />
                    </div>
                    <div>
                        <label className="form-label">Level</label><br />
                        <select ref={level} className='form-control'>
                            <option value="Choose" >Choose..</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advaced">Advanced</option>
                        </select>
                    </div><br />
                    <div className='form-group'>
                        <label className='labels'>Title</label><br />
                        <input type='text' className='form-control' name='title' onChange={changeHandler} /><br />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Description</label><br />
                        <textarea type='text' className='form-control' name='description' onChange={changeHandler} /><br />
                    </div>
                    <div>
                        <button className='btn btn-primary'>save</button>
                    </div>
                </form >

            </div>
        </div>
    )
}

export default Dashboard;
