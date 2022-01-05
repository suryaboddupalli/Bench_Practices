import React from 'react'

function TestSummary() {
    return (
        <div>
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Aptitude</h5>
                        <p className="card-text">Aptitude round having 30 question 1 min for each question and total 30 min</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Verbal</h5>
                        <p className="card-text">Verbal round having 15 question 1 min for each question and total 15 min</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Technical</h5>
                        <p className="card-text"> Technical round having 1 question for 30 min</p>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Start</button>
        </div>
    )
}

export default TestSummary