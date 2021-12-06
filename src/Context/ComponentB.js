import React from "react"
import { UserProvider } from "./usecontext"
import componentc from "./ComponentC"

class ComponentB extends Component {
    render() {
        return (
            <ComponentC />
        )
    }

}

export default ComponentB