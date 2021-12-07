import React, { Profiler } from "react"
import Login from "./Login"
import About from "./About"
import ErrorBoundary from "./ErrorBoundary"

function DashBoard (){
    
    const callBack = (id,phase,actualDuaration,baseDuration,startTime,commitTime,interaction)=>{
        console.log(id,phase,actualDuaration,baseDuration,startTime,commitTime,interaction)

    }
    return(
        <div>
            <Profiler id="Login" onRender={callBack}>
            <ErrorBoundary>
            <Login/>
            </ErrorBoundary>
            </Profiler>
            <Profiler id="About" onRender={callBack}>
            <ErrorBoundary>
            <About />
            </ErrorBoundary>
            </Profiler>
        </div>
    )
}
export default DashBoard