import React, { useState } from 'react'
import Data from '../TestQuestions.json'
import VerbalQuestion from './VerbalQuestion'

function VerbalPage() {
    let tempMarks = []
    const [marks, setMarks] = useState([])
    const changeHandler = (value,index) => {
        tempMarks[index] = value
        console.log(index)
        console.log(value)
        console.log(tempMarks[index])
        console.log(value)
        console.log(...tempMarks)
        
    }

    return (
        <div>
            {Data.map((data, index) =>
            (
                <VerbalQuestion data={data} index={index} changeHandler={changeHandler} />
            )
            )}
            <button onClick={console.log()}>Next</button>
        </div>
    )
}
export default VerbalPage