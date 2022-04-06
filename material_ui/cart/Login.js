import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

function Login({ dispatchData }) {
    console.log(dispatchData)

    const history = useHistory()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/login', data)
            .then(res => {
                if (res.data) {
                    sessionStorage.setItem('isLoggedIn', res.data.isLoggedIn)
                    sessionStorage.setItem('data', dispatchData.payload)
                    history.push('/dashboard')
                }
            })
            .catch((err) => {
                console.log('error')
            })
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
                <Typography variant='h4' color='info' padding={3}>Login</Typography>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3} direction='row' paddingLeft={4}>
                        <TextField label='Email' name='email' color='info' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={3} direction='row' padding={4}>
                        <TextField label='Password' name='password' color='info' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={2} direction='row' paddingLeft={10}>
                        <Button variant='contained' color='info' >Login</Button>
                    </Stack>
                </form>
            </Box>
        </Stack >
    )
}



const mapdispatchToProps = (dispatch) => {
    return {
        dispatchData: dispatch({ type: "TOGGLE_NAVBAR", payload: true })
    }
}

export default connect(null, mapdispatchToProps)(Login)