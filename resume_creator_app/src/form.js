import React from 'react';

function Form() {
    return (
        <div>
            <form >
                <div className='form-group '>
                    <label className='labels mb-2' >Course/Degree</label><br />
                    <input type=' text' className='form-control' name='course' /><br />
                </div>
                <div className='form-group '>
                    <label className='labels mb-2' >School/University</label> <br />
                    <input type='text' className='form-control' name='university' /><br />
                </div>
                <div className='form-group '>
                    <label className='labels mb-2' >Grade/Score</label><br />
                    <input type='text' className='form-control' name='score' /><br />
                </div>
                <div className='form-group '>
                    <label className='labels mb-2' >Year of Pass</label><br />
                    <input type='text' className='form-control' name='year' /><br />
                </div>
                <div>
                    <button className='btn btn-primary'>save</button>
                </div><br />
            </form>
        </div>
    )
}

export default Form;
