import React,{useContext} from 'react'
import { ContextData } from '../Context'

function TodoList() {
    const [data] = useContext(ContextData)
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
               {data.map((list)=>(
                   <tr>
                       <td>{list.id}</td>
                       <td>{list.name}</td>
                       <td><button>Edit</button></td>
                       <td><button>Delete</button></td>
                   </tr>
               ))}
                
            </tbody>
        </table>
    )
}



export default TodoList
