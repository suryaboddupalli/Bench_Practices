import React from "react"
import { UserConsumer } from "./usecontext"
import componentc from "./ComponentC"

class Componentc extends Component {
    render() {
        return (
           <UserConsumer>
               {
               (admin)=>{ 
                   return <div>hello {admin} </div>
               }
                }
           </UserConsumer>
        )
    }

}

export default ComponentB