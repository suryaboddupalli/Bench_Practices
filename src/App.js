import React, { useEffect } from "react" 
import { context } from "./Demo/Context"
import Register from "./Hooks/Register"
import UseContextExm from "./Hooks/UseContext/UseContext"
import UseEffect from "./Hooks/UseEffect"
import UseState from "./Hooks/UseState"
import UseStateWithArray from "./Hooks/UseStateWithArray"
import UseStateWithObject from "./Hooks/UseStateWithObject"
import UseStateWithPrev from "./Hooks/UseStateWithPrev"
import Demo from "./Demo/Context"

const App = ()=>{
	return(
		// <Register />
		// <UseState />
		// <UseStateWithPrev />
		// <UseStateWithObject />
		// <UseStateWithArray />
		// <UseEffect />
		// <UseContextExm />
		<Demo />
	)
}
export default App