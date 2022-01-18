import React, { useContext, useState } from 'react'
import { StoreContext } from '../Context'
import TodoItems from './TodoItems'

function TodoList() {
    const [data, setData] = useContext(StoreContext)

const handleUpdate =(editValue,id)=>{
    const newData = [...data]
    newData.forEach((data,index)=>{
        if(index === id){
            console.log(editValue)
            console.log(id)
            data.name = editValue
        }
        setData(newData)
    })
}
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th colSpan='2'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((list,index) => (
                    console.log(index),
                    <TodoItems id={index} list={list} handleUpdateData={handleUpdate}  />
                ))}

            </tbody>
        </table>
    )

}



export default TodoList
