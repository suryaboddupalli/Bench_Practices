import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count : 0 }
    }

    incrementCount = () => {
        this.setState(previousCount => {
            return { count: previousCount + 1 }
        })
    }

    render() {
        return (
            <div>{this.props.render(this.state.count, this.incrementCount)}</div>
        )
    }
}

export default Counter