import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Email: "",
            Password: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <div >
                <nav>
                    <li ><a href='/'>Home</a></li>
                    <li ><a href='/login'>Login</a></li>
                    <li ><a href='/register'>Register</a></li>
                    <li ><a href='/about'>About</a></li>
                </nav>
                <h2>Register </h2>
                <form onSubmit={this.handleSubmit}>
                    <div >
                        <label >Name</label>
                        <input type=' text' name='Name' onChange={this.changeHandler} />
                    </div>

                    <div >
                        <label >Email</label>
                        <input type='text' name='Email' onChange={this.changeHandler} />
                    </div>

                    <div >
                        <label id='labels'>Password</label>
                        <input type='password' name='Password' onChange={this.changeHandler} />
                    </div>
                    <div>
                        <button >Register</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default Register;