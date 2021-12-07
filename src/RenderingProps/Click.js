import React from "react"

class Counter extends React.Component {

    render(){
        const {count,incrementCount} = this.props
        return(
            <button onClick = {incrementCount}>Click{count}</button>
        )
    }
}

export default Counter
