import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <div className='page'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label className='labels'>Email</label> <br />
                <input type='text' value={email} onChange={({ target: { value } }) => setEmail(value)} />
                <label className='labels'>Password</label><br />
                <input type='password' value={password} onChange={({ target: { value } }) => setPassword(value)} />
                <div>
                    <button className='button' disabled={!email || !password} data-testid='button'>login</button>
                </div><br />
            </form>
        </div>
    )
}

export default Login