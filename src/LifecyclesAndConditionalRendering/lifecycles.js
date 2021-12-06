import React from 'react'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log("component did Mount")
    }
    componentDidUpdate() {
        console.log("component did Update")
    }
    componentWillMount() {
        console.log("component will Mount")
    }
    componentWillUnmount() {
        console.log("component will Unmount")
    }

    render() {
        return (
            <div>
                <input type="button" onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</ input>
            </div>
        )
    }
}

export default Container