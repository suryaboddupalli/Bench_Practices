import React, { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
       sessionStorage.setItem(isLoggedIn,true)
    } 

    return (
        <div >
            <nav>
                <li ><a href='/'>Home</a></li>
                <li ><a href='/login'>Login</a></li>
                <li ><a href='/register'>Register</a></li>
                <li ><a href='/about'>About</a></li>
            </nav>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div >
                    <label >Email</label> <br />
                    <input type='text' name='email' onChange={changeHandler} />
                </div>
                <div >
                    <label >Password</label><br />
                    <input type='password' name='password' onChange={changeHandler} />
                </div><br />
                <div>
                    <button type="submit">login</button>
                </div><br />
            </form>
        </div>
    )
}

export default Login