import axios from 'axios';
import React, { Component } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Cookies from 'cookies';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.handleSubmit = (e) => {
            e.preventDefault();
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            axios.post("http://localhost:8000/user/login", data)
                .then((res) => {
                    if(res.data.Token){
                        sessionStorage.setItem('Token', res.data.Token)
                        Cookies.set(Token,res.data.Token,{path:'/',expire : new Data(new Data().getTime()+100*1000), httpOnly: true })
                        const history = useHistory()
                        history.push('/dashboard')
                    }
                }).catch(error => {
                    console.log(error)
                })
        }
    }

    render() {
        return (
            <div >
                <ul>
                    <li ><a href='/'>Home</a></li>
                    <li ><a href='/login'>Login</a></li>
                    <li ><a href='/register'>Register</a></li>
                </ul>
                <div >
                    <h2>Login </h2>
                    <form onSubmit={this.handleSubmit}>
                        <div >
                            <label >Email</label> <br />
                            <input type='text' name='email' onChange={this.changeHandler} /><br />
                        </div>
                        <div >
                            <label >Password</label><br />
                            <input type='password' name='password' onChange={this.changeHandler} /><br />
                        </div><br />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Login;