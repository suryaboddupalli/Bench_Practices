import React, { useState } from 'react';
import { Stack, TextField, Typography, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from '../Redux/Reducers/UserReducer';
import LoginValidations from '../../Validations/LoginValidation';

const Login = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        Email: '',
        Password: ''
    })
    const [clientError, setClientError] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (LoginValidations(data)) {
            setClientError(LoginValidations(data))
        } else {
            dispatch(fetchLoginUser(data))
        }
    }

    return (
        <Stack spacing={3} row>
            <Box p={5} sx={{
                width: 300,
                height: 300,
                marginTop: 10,
                marginLeft: 55,
                border: '0.5px solid green '
            }}>
                <Typography variant='h4' color='success' padding={3}>Login</Typography>
                {clientError ? <Typography color='error'>{clientError}</Typography> : null}
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3} direction='row' paddingLeft={4}>
                        <TextField label='Email' name='Email' color='success' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={3} direction='row' padding={4}>
                        <TextField label='Password' name='Password' color='success' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={2} direction='row' paddingLeft={10}>
                        <Button variant='contained' color='success' >Register</Button>
                    </Stack>
                </form>
            </Box>
        </Stack >
    )
}

export default Login