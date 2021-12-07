import React from 'react'
import ReactDom from 'react-dom'

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
     
    handleClick = ()=>{
        this.setState(previousCount=>{
            return {count: previousCount +1}
        })
    }
    

    render() {
        return (
            <React.Fragment>
                <div>This is code for Profilers</div>
                <button onClick={this.handleClick}>Count{this.state.count}</button>
            </React.Fragment>
        )
    }
}

export default About