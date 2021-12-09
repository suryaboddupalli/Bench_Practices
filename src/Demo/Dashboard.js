import React, { useContext } from "react"
import { context } from "./Context"
import Profile from "./Profile"

function Dashboard() {
    const [userName] = useContext(context)
    console.log(userName)
    return (
       <div>
           Demo Project
           <div>
               <Profile />
           </div>
       </div>

    )
}

export default Dashboard