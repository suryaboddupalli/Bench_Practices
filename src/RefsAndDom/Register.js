import React from "react"

class Register extends React.Component{
    constructor(){
        super()

    }

    handleClick = (e) => {
        e.preventDefault()
        console.log("data recived")
    }

    onKeyUp=(target,e)=>{
        if(e.keyCode === 13){
            switch(target){
                case "firstName": this.lastName.focus();
                break;
                case "lastName": this.email.focus();
                break;
                case "email": this.password.focus();
                break;
                case "password": this.submit.focus();
                default :
                this.firstName.focus();
            }
        }
    }

    render(){
        return(
            <form>
                <label>FirstName</label>
                <input type="text" ref={(input)=>{this.firstName=input}} onKeyUp={this.onKeyUp.bind(this,"firstName")} required />
                <label>LastName</label>
                <input type="text" ref={(input)=>{this.lastName=input}} onKeyUp={this.onKeyUp.bind(this,"lastName")} required />
                <label>Email</label>
                <input type="text" ref={(input)=>{this.email=input}} onKeyUp={this.onKeyUp.bind(this,"email")} required/>
                <label>Password</label>
                <input type="text" ref={(input)=>{this.password=input}} onKeyUp={this.onKeyUp.bind(this,"password")} required />
                <button onClick={this.handleClick} ref={(input)=>{this.submit=input}} onKeyUp={this.onKeyUp.bind(this,"submit")}>Register</button>
            </form>
        )
    }
}

export default Register