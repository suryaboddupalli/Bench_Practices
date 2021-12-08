import React from "react"

class Controlled extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state.userName)
    }
    
    render() {
        return (
            <form>
                <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}

export default Controlled