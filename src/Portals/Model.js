import React from 'react'
import ReactDom from 'react-dom'

class Model extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return this.props.open ?
            <div>{this.props.children}
            </div>: null
    }
}

export default Model