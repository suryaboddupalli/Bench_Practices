import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react/cjs/react.development'

function Instructions() {
    const history = useHistory()
    const [checkBox, setCheckBox] = useState(false);
    const [error, setError] = useState()

    const handleClick = () => {
        if (checkBox === true) {
            history.push('/summary')
        } else {
            setError('Read Instructions and accept the checkbox')
        }
    }
    
    return (
        <div className='p-5'>
            <h1 className='text-center fixed-top bg-success p-2'>Online Assessment</h1><br /><br /><br /><br />
            <div className='card p' >
                <h4 className='text-center'>Instruction</h4>
                <ul>
                    <li>Android phone, desktop, laptop (Windows/Linux/Mac) with working front camera as webcam.</li>
                    <li>Please use an updated version of Google Chrome.</li>
                    <li>Please ensure a reliable internet connection.</li>
                    <li>Please ensure your mobile or laptop is fully charged.</li>
                    <li>Please keep required stationery handy with you (pencil, pen, rough sheet etc.)</li>
                    <li>Test Duration is 1 Hour 30 Min</li>
                </ul>
            </div><br />

            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setCheckBox(e.target.checked)} />
                <label className="form-check-label">I accept all Conditions</label><br/>
                {error ? <span className='text-danger'>{error}</span> : null}
            </div>
            <div className='  d-md-flex justify-content-md-end'>
                <button type="submit" className="btn btn-primary me-5" onClick={ handleClick }>Next</button>
            </div>
        </div>

    )
}

export default Instructions