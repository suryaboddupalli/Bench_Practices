import React, { useState } from 'react';
import { objectiveDataSuccess } from '../../Redux/actions/Action';
import { connect } from 'react-redux';

function Objective({ addObjective }) {
    const [data, setData] = useState()
    const changeHandler = e => {
        setData([e.target.name] = e.target.value)

    }
    const handleSubmit = e => {
        e.preventDefault();
        addObjective(data)
    }

    return (
        <div className='page mt-4'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='labels mb-2'>Objective</label><br />
                    <textarea type='text' className='form-control' name='details' onChange={changeHandler} /><br />
                </div>
                <div>
                    <button className='btn btn-primary'>save</button>
                </div><br />
            </form>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        addObjective: (data) => dispatch(objectiveDataSuccess(data))
    }
}

export default connect(null, mapDispatchToProps)(Objective)