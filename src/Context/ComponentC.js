import React from "react"
import { UserConsumer } from "./usecontext"

class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (admin) => {
                        return <div>hello {admin} </div>
                    }
                }
            </UserConsumer>
        )
    }

}

export default ComponentC