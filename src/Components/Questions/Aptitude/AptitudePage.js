import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Data from './Questions.json'
import AptitudeQuestion from './AptitudeQuestion'


function AptitudePage() {
    const history = useHistory()
    const [marks, setMarks] = useState([])
    var tempMarks = []
    const changeHandler = (value, index) => {
        console.log(value)
        console.log(index)
        tempMarks[index]=value;
        setMarks(...tempMarks)
    }
    return (
        <div>
            <h1 className='text-center fixed-top bg-success p-2'>Online Assessment</h1><br /><br /><br/>

            {Data.map((data, index) =>
            (
                <AptitudeQuestion data={data} index={index} changeHandler={changeHandler} />
            )
            )}
            <div className='  d-md-flex justify-content-md-end'>
                <button type="submit" className="btn btn-primary me-5" onClick={() => { history.push('/verbal') }}>Next</button>
            </div>
        </div>
    )
}
export default AptitudePage