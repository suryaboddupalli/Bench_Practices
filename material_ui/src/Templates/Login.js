import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

function Login() {
    return (
        <center style={{ 'margin-top': '100px' }}>
            <form>
                <Typography variant='h4' color='secondary'>Login</Typography>
                <TextField
                    label='UserName'
                    type='text'
                    style={{ 'margin': '40px', 'width': '400px' }}
                    color='secondary'
                /><br />
                <TextField
                    label='Password'
                    type='password'
                    style={{ 'margin': '5px', 'width': '400px' }}
                    color='secondary'
                /><br /><br />
                <Button variant='contained' color='secondary'>Login</Button>
            </form><br />
            <Button href='/register' color='secondary' style={{ textTransform: "none" }} >Create account</Button>

        </center>
    )
}

export default Login;

