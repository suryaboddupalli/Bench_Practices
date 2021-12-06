import { render } from "@testing-library/react"
import React from "react"
import { UserProvider } from "./usecontext"
import ComponentB from "./ComponentB"

class ComponentA extends Component {
    render(){
        return (
            <UserProvider value='surya'>
                <ComponentB  />
            </UserProvider>
        )
    }
}

export default ComponentA