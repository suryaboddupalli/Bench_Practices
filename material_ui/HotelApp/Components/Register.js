import React, { useState } from 'react';
import { Stack, TextField, Typography, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchRegisterUser } from '../Redux/Reducers/UserReducer';
import RegisterValidations from '../Validations/RegisterValidation'

const Register = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        Name: '',
        email: '',
        Phone: '',
        Password: '',
    })
    const [clientError, setClientError] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (RegisterValidations(data)) {
            setClientError(RegisterValidations(data))
        } else {
            dispatch(fetchRegisterUser(data))

        }
        console.log(data)
    }

    return (
        <Stack spacing={3} row>
            <Box p={5} sx={{
                width: 300,
                height: 450,
                marginTop: 2,
                marginLeft: 55,
                border: '0.5px solid green '
            }}>
                <Typography variant='h4' color='info' padding={3}>Register</Typography>
                {clientError ? <Typography>{clientError}</Typography> : null}
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3} direction='row' paddingLeft={4}>
                        <TextField label='Name' name='Name' color='info' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={3} direction='row' padding={4}>
                        <TextField label='Email' name='Email' color='info' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={3} direction='row' paddingLeft={4}>
                        <TextField label='Phone' name='Phone' color='info' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={3} direction='row' padding={4}>
                        <TextField label='Password' name='Password' color='info' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={2} direction='row' paddingLeft={10}>
                        <Button variant='contained' color='info' >Register</Button>
                    </Stack>
                </form>
            </Box>
        </Stack >
    )
}

export default Register