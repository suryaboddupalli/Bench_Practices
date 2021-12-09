import React, { useContext } from "react"
import {context} from "./UseContext"

function DisplayData(){
    const [data,setData] = useContext(context)
    console.log(data)
    return(
        <div>
           {data.map((user)=>{
               {console.log(user)}
               <div key={user.Id}>
                   <li>{user.Id}</li>
                   <li>{user.Name}</li>
                </div>   
           })}
        </div>
    )
}

export default DisplayData