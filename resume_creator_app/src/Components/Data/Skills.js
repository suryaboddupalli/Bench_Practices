import React, { useState, useRef } from 'react';


function Skills() {
    const level = useRef()
    const [data, setData] = useState({
        skills: '',
        level: ''
    })
    const changeHandler = e => {
        setData({ skills: ([e.target.name] = e.target.value), level: (level.current.value) })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div>
            <div className='page mt-4'>
                <form onSubmit={handleSubmit}>
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
                    <div>
                        <button className='btn btn-primary'>save</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Skills;
