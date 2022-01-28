import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

function Register() {
    return (
        <center style={{ 'margin-top': '30px' }}>
            <form>
                <Typography variant='h4' color='secondary'>Register</Typography>
                <TextField
                    label='Firstname'
                    type='text'
                    style={{ 'margin-top': '30px', 'margin-bottom': '5px', 'width': '400px' }}
                    color='secondary'
                /><br />
                <TextField
                    label='Lastname'
                    type='text'
                    style={{ 'margin': '5px', 'width': '400px' }}
                    color='secondary'
                /><br />
                <TextField
                    label='Mobile Number'
                    type='text'
                    style={{ 'margin': '5px', 'width': '400px' }}
                    color='secondary'
                /><br />
                <TextField
                    label='Email'
                    type='text'
                    style={{ 'margin': '5px', 'width': '400px' }}
                    color='secondary'
                /><br />
                <TextField
                    label='Password'
                    type='password'
                    style={{ 'margin': '5px', 'width': '400px' }}
                    color='secondary'
                /><br />
                <TextField
                    label='Re-Enter Password'
                    type='password'
                    style={{ 'margin': '5px', 'width': '400px' }}
                    color='secondary'
                /><br /><br />
                <Button variant='contained' color='secondary'>Register</Button>
            </form><br />
            <Button href='/register' color='secondary' style={{ textTransform: "none" }} >Login</Button>

        </center>
    )
}

export default Register;

