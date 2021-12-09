import React, { useState, useEffect } from "react"
import axios from "axios"

function UseEffect(){
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get("https://reqres.in/api/products/3")
        .then((res)=>{
            setData(res.data)
            console.log(res.data.data)
        })
    })

    return(
        <div>
            hello
        </div>
    )
}

export default UseEffect