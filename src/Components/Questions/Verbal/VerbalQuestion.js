import React, { useState } from 'react'

function VerbalQuestion({ data, index, changeHandler }) {
    const handleChange = (e) => {
        let temp = (data.answer) === e.target.value ? 1 : 0
        changeHandler(temp,index);
    }
    return (
        <div>
            <h1>{data.title}</h1>
            <div onChange={handleChange} >
                <input type='radio' value='A' name={index} />{data.option[0]} &nbsp;
                <input type='radio' value='B' name={index} />{data.option[1]} &nbsp;
                <input type='radio' value='C' name={index} />{data.option[2]} &nbsp;
                <input type='radio' value='D' name={index} />{data.option[3]} &nbsp;
            </div>
        </div>
    )
}
export default VerbalQuestion