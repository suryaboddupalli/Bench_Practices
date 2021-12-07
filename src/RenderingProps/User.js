import React from "react"

class  extends Component {

    render(){
        const {count, incrementCount} = this.props
        return(
            <h2 onMouseOver={incrementCount}>hover{count}</h2>
        )
    }
}

export default UpdatedCompoent(Hover)