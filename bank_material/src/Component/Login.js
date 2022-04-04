import { Stack, TextField, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginUser } from '../Redux/Actions/EmpAuthAction';
import EmpLoginValidation from '../Validations/LoginValidation';

const Login = () => {
    const errorFetch = useSelector((state) => state.LoginData.error)
    console.log(errorFetch);
    const dispatch = useDispatch()
    const [data, setData] = useState({
        Username: '',
        Password: ''
    })
    const [userError, setUserError] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (EmpLoginValidation(data)) {
            setUserError(EmpLoginValidation(data))
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
                border: '0.5px solid grey '
            }}>
                <Typography variant='h4' padding={3}>Login</Typography>
                {userError ? <Typography>{userError}</Typography> : null}
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3} direction='row' paddingLeft={4}>
                        <TextField label='FirstName' name='FirstName' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={3} direction='row' padding={4}>
                        <TextField label='LastName' name='LastName' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={2} direction='row' paddingLeft={10}>
                        <Button variant='contained' color='secondary' >Register</Button>
                    </Stack>
                </form>
            </Box>
        </Stack >
    )
}



export default Login