import React from "react"

class Refs extends Component {
    constructor() {
        super()
        this.inpuRef = React.createRef()
        this.cbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cdRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)

    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.cbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Refs