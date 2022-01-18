import React, { useState, useContext } from 'react'
import { StoreContext } from '../Context'

function TodoItems({ id, list, handleUpdateData }) {
    const [data, setData] = useContext(StoreContext)
    console.log(id)
    const [edit, setEdit] = useState(false)
    const [editValue, setEditValue] = useState(list.name)

    const handleChange = (e) => {
        setEditValue(e.target.value)
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const deleteData = () => {
        const newData = data.filter(data => {
            return data.complete === true
        })
        setData(newData)
    }
    const handleUpdate = (id) => {
        setEdit(false)
        if (editValue) {
            console.log(editValue)
            handleUpdateData(editValue, id)

        } else {
            setEditValue(list.name)
        }
    }
    if (edit) {
        return (
            <div>
                <input type='text' value={editValue} onChange={handleChange} />
                <button onClick={handleUpdate}>save</button>
            </div>
        )
    } else {
        return (
            <tr key={id}>
                <td>{list.name}</td>
                <td><button onClick={handleEdit}>Edit</button></td>
                <td><button onClick={deleteData}>Delete</button></td>
            </tr>
        )
    }
}
export default TodoItems
