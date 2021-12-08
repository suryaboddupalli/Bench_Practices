import React from "react"

class Reconciliation extends React.Component {
    constructor() {
        super()
        this.state = {
            isAdmin: false
        }
    }

    handleClick = () => {
        this.setState = {
            isAdmin: !this.state.isAdmin
        }
        console.log(!this.state.isAdmin)
        console.log(this.state.isAdmin)

    }

    render() {
        return (
            <div>
                {this.state.isAdmin  ?
                    <p title={`${this.state.isAdmin}`}>surya</p> :
                    <div title={`${this.state.isAdmin}`}>user</div>
                }
                <button onClick={this.handleClick}>
                    Click me
                </button>
            </div>
        );
    }
}

export default Reconciliation

