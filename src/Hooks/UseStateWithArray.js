import React, { useState, useEffect } from "react"

const StudentsData = [ 
    {
        Name : "surya",
        Id :1
    },{
        Name : "Naveen",
        Id : 2
    }
]

function UseStateWithArray(){
    const [data, setData] = useState(StudentsData)

    return(
        <div>
            {data.map((student)=>(
                <div key={student.Id}>
                <li>{student.Id}</li>
                <li>{student.Name}</li>
                </div>
            ))}
        </div>
    )
}

export default UseStateWithArray