import React, { useContext } from "react"
import { context } from "./Context"

function Profile() {
    const [userName] = useContext(context)
    return (
       <React.Fragment>
           hello{userName}
       </React.Fragment>
    )
}

export default Profile