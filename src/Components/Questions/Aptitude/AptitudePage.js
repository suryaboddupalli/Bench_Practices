import React, { useState } from 'react'
import Data from '../TestQuestions.json'
import AptitudeQuestion from './AptitudeQuestion'

function AptitudePage() {
    let tempMarks = []
    const [marks, setMarks] = useState([])
    const changeHandler = (value, index) => {
       tempMarks[index] = value
    //    tempMarks=marks
        setMarks(...tempMarks)
        console.log(...marks)
        console.log(...tempMarks)
        console.log((marks.reduce((a,b)=>a+b,0)))


    }
    return (
        <div>
            {Data.map((data, index) =>
            (
                <AptitudeQuestion data={data} index={index} changeHandler={changeHandler} />
            )
            )}
            <button onClick={console.log()}>Next</button>
        </div>
    )
}
export default AptitudePage