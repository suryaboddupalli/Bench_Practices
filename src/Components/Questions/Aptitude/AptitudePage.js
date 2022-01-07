import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Data from './Questions.json'
import AptitudeQuestion from './AptitudeQuestion'
import { StoreProvider } from '../Store'

function AptitudePage() {
    const history = useHistory()
    const [marks, setMarks] = useState([])
    const [result,setResult]= useState()
    var tempMarks = []
    const changeHandler = (value, index) => {
        tempMarks=marks;
        tempMarks[index]=value;
        setMarks([...tempMarks])
        setResult( marks.reduce((a,b)=>a+b,0))
    }

    const handleClick = ()=>{
         history.push('/result')
    }

    return (
        <StoreProvider AptitudeResult={result}>
        <div>
            <h1 className='text-center fixed-top bg-success p-2'>Online Assessment</h1><br /><br /><br/>

            {Data.map((data, index) =>
            (
                <AptitudeQuestion data={data} index={index} changeHandler={changeHandler} />
            )
            )}
            <div className='  d-md-flex justify-content-md-end'>
                <button type="submit" className="btn btn-primary me-5" onClick={handleClick}>Next</button>
            </div>
        </div>
        </StoreProvider>
    )
}
export default AptitudePage