import React from 'react'
import { useHistory } from 'react-router-dom'

function TestSummary() {
    const history = useHistory()
    return (
        <div>
            <h1 className='text-center fixed-top bg-success p-2'>Online Assessment</h1><br /><br /><br /><br />
            <div className="card-group mt-5 ">
                <div className="card ms-3">
                    <div className="card-body">
                        <h5 className="card-title bg-info text-center">Aptitude</h5>
                        <p className="card-text">Aptitude round having 15 question 2 min for each question and total 30 min</p>
                    </div>
                </div>
                <div className="card ms-3">
                    <div className="card-body">
                        <h5 className="card-title bg-info text-center">Verbal</h5>
                        <p className="card-text">Verbal round having 15 question 1 min for each question and total 15 min</p>
                    </div>
                </div>
                <div className="card ms-3 me-3">
                    <div className="card-body">
                        <h5 className="card-title bg-info text-center">Technical</h5>
                        <p className="card-text"> Technical round having 10 questions for 45 min</p>
                    </div>
                </div>
            </div><br/><br/>
            <div className='  d-md-flex justify-content-md-end'>
                <button type="submit" className="btn btn-primary me-5" onClick={()=>{history.push('/aptitude')}}>Start</button>
            </div>
        </div>
    )
}

export default TestSummary