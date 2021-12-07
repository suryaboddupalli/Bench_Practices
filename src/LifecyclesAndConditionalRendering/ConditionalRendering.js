import React from 'react'

// if/else 

// class Greetings extends React.Component {
//     constructor() {
//         super()
//         this.state = { isAdmin: true }
//     }
//     render() {
//         if (this.state.isAdmin) {
//             return <div>welcome Admin</div>
//         }
//         else {
//             return <div>Welcome User</div>
//         }
//     }
// }

// // Element variable

// class Greetings extends React.Component {
//     constructor() {
//         super()
//         this.state = { isAdmin: true }
//     }
//     render() {
//         let message;
//         if (this.state.isAdmin) {
//             message = <div>Welcome Admin</div>
//         }
//         else {
//             message = <div>Welcome User</div>
//         }
//     }
// }

// // Ternary operator

// class Greetings extends React.Component {
//     constructor() {
//         super()
//         this.state = { isAdmin: true }
//     }
//     render() {
//         return (
//             this.state.isAdmin ?
//                 <div>welcome Admin</div> :
//                 <div>Welcome User</div>
//         )
//     }
// }

// // short circuit operator

class Greetings extends React.Component {
    constructor() {
        super()
        this.state = { isAdmin: true }
    }
    render() {
        return this.state.isAdmin && <div>welcome Admin</div>
    }
}

export default Greetings