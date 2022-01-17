import React from 'react'
import { connect } from 'react-redux'
import { updateData,deleteData } from '../Redux/Action'

function TodoList({ data, updateData,deleteData }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Sl.No</th>
                    <th>Title</th>
                    <th colSpan='2'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((list) => (
                    console.log(list),
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.name}</td>
                        <td><button onClick={()=>{updateData(list)}} >Edit</button></td>
                        <td><button onClick={()=>{deleteData(list)}}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editData :(edit)=> dispatch(updateData(edit)),
        deleteData :(remove)=> dispatch(deleteData(remove))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
