import React, { useState } from 'react';

const Projects = () => {
    const [data, setData] = useState({
        title: '',
        description: ''

    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data.title)

    }

    return (
        <div className='page mt-4'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='labels'>Title</label><br />
                    <input type='text' className='form-control' name='title' onChange={changeHandler} /><br />
                </div>
                <div className='form-group'>
                    <label className='labels'>Description</label><br />
                    <textarea type='text' className='form-control' name='description' onChange={changeHandler} /><br />
                </div>
                <div>
                    <button className='btn btn-primary'>Create</button>
                </div><br />
            </form>
        </div>
    )
}

export default Projects