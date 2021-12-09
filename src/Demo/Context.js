import React, { createContext, useState } from "react"
import Dashboard from "./Dashboard"
import Login from "./Login"
import ErrorBoundary from "./ErrorBoundary"

export const context = createContext()

function Demo() {
    const [profile, setProfile] = useState(true)
    const [data, setData] = useState("surya")
    console.log(setProfile)
    console.log(setData)

    return (
        <ErrorBoundary>
            <context.Provider value={[data, profile, setData, setProfile]}>
                    {setProfile ? <Dashboard /> : <Login />}
            </context.Provider>
        </ErrorBoundary>

    )
}

export default Demo