import React, { StrictMode } from "react" 
import Greeting from "./PropsTypes/Greetings"
import Reconciliation from "./Reconciliation/Reconciliation"
import Controlled from "./UnControlledComponent/Controlled"
import UnControlled from "./UnControlledComponent/UnControlled"
import StrictModeExp from "./StrictMode/StrictModeExp"
import Register from "./RefsAndDom/Register"


const App = ()=>{
	return(
		// <Greeting />
		// <UnControlled />
		// <Controlled />
		// <StrictMode>
		// 	<StrictModeExp />
		// </StrictMode>
		<Register />
	)
}
export default App