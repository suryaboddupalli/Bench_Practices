import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addData } from '../Redux/Action'
import { v4 as uuidv4 } from 'uuid'

function TodoInput({ addData }) {
    const [name, setName] = useState({
        input: ''
    })


    const handleChange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
    }



    const add = () => {
        if (name === "") {
            alert("Input is Empty");
        } else {
            addData({
                id: uuidv4(),
                name: name
            });
            setName("");
        }
    };

    return (
        <div >
            <input type='text' name='input' onChange={handleChange} />
            <button onClick={() => add()} >Add</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addData: (data) => dispatch(addData(data))
    }
}

export default connect(null, mapDispatchToProps)(TodoInput)
