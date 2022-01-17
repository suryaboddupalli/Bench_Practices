import React, { useState } from 'react'


function TodoInput() {
    const [name, setName] = useState({
        input: ''
    })
    const [value,setValue] = useState()

    const handleChange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
    }

    const handleClick = ()=>{
       setValue(name)
    }


    return (
        <div >
            <input type='text' name='input' onChange={handleChange} />
            <button onClick={handleClick} >Add</button>
        </div>
    )
}


export default TodoInput
