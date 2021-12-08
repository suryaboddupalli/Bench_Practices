import React from "react"

class StrictModeExp extends React.Component{

    componentWillMount(){
        console.log("Component will mount")
    }
    render(){
        return(
            <div>Hello User</div>
        )
    }
}

export default StrictModeExp