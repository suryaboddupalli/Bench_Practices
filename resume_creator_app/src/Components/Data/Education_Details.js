import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { educationDataSuccess } from '../../Redux/actions/Action';


const Education_Details = ({ educationDataSuccess, education }) => {
    console.log(education);
    const [data, setData] = useState([{
        course: '',
        university: '',
        score: '',
        year: ''
    }])
    const [newForm, setNewForm] = useState(false)
    const [submitData, setSubmitData] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    useEffect(() => {
        setSubmitData([data])
    }, [data])

    const handleSubmit = e => {
        e.preventDefault();
        educationDataSuccess(data)
        setNewForm(false)
        console.log(submitData)
    }

    return (
        <div>
            <div><button onClick={() => setNewForm(true)}>Add</button></div>
            {newForm ?
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
                            <label className='labels mb-2' >Year of Pass</label><br />
                            <input type='text' className='form-control' name='year' onChange={changeHandler} /><br />
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary'>save</button>
                        </div><br />
                    </form>
                </div>
                : null}
            <div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        education: state.education.education
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        educationDataSuccess: (educationData) => dispatch(educationDataSuccess(educationData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education_Details)