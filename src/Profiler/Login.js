import React from "react" 

class Login extends React.Component {
    constructor(){
        super()
        this.state ={
            Name : "",
            Email:"",
            Password : ""
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.taget.value
        })
        console.log(e.target.value)
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                <p>
                    <label>Name</label>
                    <input type= "text" name="Name" value={this.state.Name} onChange={this.handleChange} />
                </p>
                <p>
                    <label>email</label>
                    <input type= "text" name="Email" value={this.state.Email} onChange={this.handleChange} />
                </p>
                <p>
                    <label>password</label>
                    <input type= "text" Name="Password" value={this.state.Password}/>
                </p>
                <input type="submit" >Login</input>
            </div>
        )
    }
}     

export default Login
