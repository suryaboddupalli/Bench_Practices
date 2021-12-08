import React from "react"

class UnControlled extends React.Component{

    handleClick = (e) =>{
        e.preventDefault()
        console.log(this.name.value)
    }
    render(){
        return(
            <form>
                <input type= "text"
                 ref={(input)=>{
                    return this.name = input
                }} />
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}

export default UnControlled