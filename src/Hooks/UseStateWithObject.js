import React, { useState, useEffect } from "react"

function UseStateWithObject(){
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
    })

    return(
        <form>
            <label>FirstName</label>
            <input type="text" value={data.firstName} onChange={e=>setData({firstName:e.target.value})}/>
            <label>LastName</label>
            <input type="text" value={data.lastName} onChange={e=>setData({lastName:e.target.value})} />
        </form>
    )
}

export default UseStateWithObject