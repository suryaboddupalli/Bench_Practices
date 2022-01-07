import React from 'react'
import { StoreConsumer } from '../Questions/Store'

function Results() {
    return (
        <StoreConsumer>
            <div>
                <h1 className='text-center fixed-top bg-success p-2'>Online Assessment</h1><br /><br /><br /><br />
                <div className="card-group mt-5 ">
                    <div className="card ms-3">
                        <div className="card-body">
                            <h5 className="card-title bg-secondary text-center">Aptitude</h5>
                            {AptitudeResult => {
                                return <p className="card-text">Marks - {AptitudeResult}</p>
                            }}

                        </div>
                    </div>
                    <div className="card ms-3">
                        <div className="card-body">
                            <h5 className="card-title bg-secondary text-center">Verbal</h5>
                            {VerbalResult => {
                                <p className="card-text">Marks -{VerbalResult}</p>
                            }}
                        </div>
                    </div>
                    <div className="card ms-3 me-3">
                        <div className="card-body">
                            <h5 className="card-title bg-secondary text-center">Technical</h5>
                            {TechincalResult => {
                                <p className="card-text">Marks -{TechincalResult}</p>
                            }}
                        </div>
                    </div>
                </div><br /><br />
                <h5 className='text-center '> Thank You</h5>
                <div className='  d-md-flex justify-content-md-end'>
                    <button type="submit" className="btn btn-primary me-5">Close</button>
                </div>
            </div>
        </StoreConsumer>
    )
}

export default Results