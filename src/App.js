import React from "react"
import Counter from "./RenderingProps/Counter" 
import Click from "./RenderingProps/Click"
import Hover from "./RenderingProps/Hover"

function App(){
	return(
		<div>
			<Counter>
				render={(count, incrementCount)=>{
					<Click count={count} incrementCount={incrementCount} />
				}}
			</Counter>
			<Counter>
				render={(count, incrementCount)=>{
					<Hover count={count} incrementCount={incrementCount} />
				}}
			</Counter>
		</div>
	)
}
export default App