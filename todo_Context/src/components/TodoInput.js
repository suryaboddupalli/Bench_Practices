import React, { useState, useContext } from 'react'
import { StoreContext } from '../Context'


function TodoInput() {
    const [data, setData] = useContext(StoreContext)
    const [name, setName] = useState()

    const handleChange = (e) => {
        setName( e.target.value )
    }

    const handleClick = () => {
        setData([...data, { name: name, complete: false }])
        setName('')
    }


    return (
        <div >
            <input type='text' name='name' onChange={handleChange} value={name} />
            <button onClick={handleClick} >Add</button>
        </div>
    )
}


export default TodoInput
