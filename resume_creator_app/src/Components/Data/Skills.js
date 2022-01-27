import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { skillDataSuccess } from '../../Redux/actions/Action';


function Skills({ skills, skillsAdd }) {
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
        skillsAdd(data)
        console.log(skillsAdd(data));
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

const mapStateToProps = (state) => {
    return {
        skill: state.skills.skills
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        skillsAdd: (data) => dispatch(skillDataSuccess(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)
