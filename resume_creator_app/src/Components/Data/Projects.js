import React, { useState } from 'react';
import { projectDataSuccess } from '../../Redux/actions/Action';
import { connect } from 'react-redux';

const Projects = ({ project, addProjects }) => {
    const [data, setData] = useState({
        title: '',
        description: ''

    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        addProjects(data)

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

const mapStateToProps = (state) => {
    return {
        project: state.project
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProjects: (data) => dispatch(projectDataSuccess(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)

