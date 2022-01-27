import React, { useState } from 'react';
import { connect } from 'react-redux';
import { experienceDataSuccess } from '../../Redux/actions/Action';

function Experience({ addExperience }) {
    const [data, setData] = useState({
        name: '',
        jobRole: '',
        startDate: '',
        endDate: '',
        details: ''

    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        addExperience(data)
    }

    return (
        <div>
            <div className='page'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='labels mb-2'>Company Name</label><br />
                        <input type=' text' className='form-control' name='name' onChange={changeHandler} /><br />
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
                    <div>
                        <button className='btn btn-primary'>save</button>
                    </div><br />
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        experience: state.experience
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExperience: (data) => dispatch(experienceDataSuccess(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience)
