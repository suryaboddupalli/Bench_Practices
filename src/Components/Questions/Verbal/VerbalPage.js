import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Data from './Question.json'
import VerbalQuestion from './VerbalQuestion'
import { StoreProvider } from '../Store'

function VerbalPage() {
    const history = useHistory()
    let tempMarks = []
    const [marks, setMarks] = useState([])
    const [result, setResult] = useState()
    const changeHandler = (value, index) => {
        tempMarks = marks
        tempMarks[index] = value
        setMarks([...tempMarks])
        setResult(marks.reduce((a, b) => a + b, 0))
    }

    return (
        <StoreProvider VerbalResult={result}>
            <div>
                <h1 className='text-center fixed-top bg-success p-2'>Online Assessment</h1><br /><br /><br />

                {Data.map((data, index) =>
                (
                    <VerbalQuestion data={data} index={index} changeHandler={changeHandler} />
                )
                )}
                <div className='  d-md-flex justify-content-md-end'>
                    <button type="submit" className="btn btn-primary me-5" onClick={() => { history.push('/technical') }}>Next</button>
                </div>
            </div>
        </StoreProvider>
    )
}
export default VerbalPage