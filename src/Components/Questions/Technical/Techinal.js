import React from 'react'
import Data from '../TestTechQues.json'
import TechnicalQuestion from './TechnicalQuestion'

function Technical() {
    
    return (
        <div>
            {Data.map((data) =>
            (
                <TechnicalQuestion data={data}  />
            )
            )}
            <button >Submit</button>
        </div>
    )
}
export default Technical