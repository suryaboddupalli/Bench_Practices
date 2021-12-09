import React, { createContext, useState } from "react"
import DisplayData from "./DisplayData"

export const context = createContext()

function UseContextExm() {
    const [data, setData] = useState([
        {
            Name: "surya",
            Id: 1
        }, {
            Name: "Naveen",
            Id: 2
        }, {
            Name: "Revanth",
            Id: 3
        }
    ])
    return (
        <context.Provider value={[data, setData]}>
            <DisplayData />
        </context.Provider>
    )
}
export default UseContextExm