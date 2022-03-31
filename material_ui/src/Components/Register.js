import { Stack, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'

function Register() {
    const [data, setData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        Password: '',
        Conform_Password: ""
    })
    const [gender, setGender] = useState('')
    const [college, setCollege] = useState('')

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value, Gender: gender, College: college })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    console.log(data)
    return (
        <Stack spacing={3} row>
            <Typography variant='h4'>Register</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3} direction='row'>
                    <TextField label='FirstName' name='FirstName' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='LastName' name='LastName' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='Email' type='email' name='Email' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='Phone' type='number' name='Phone' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup onChange={(e) => setGender(e.target.value)} row >
                        <FormControlLabel control={<Radio color='secondary' />} label='Male' value='Male' />
                        <FormControlLabel control={<Radio color='secondary' />} label='Female' value='Female' />
                        <FormControlLabel control={<Radio color='secondary' />} label='Others' value='Others' />
                    </RadioGroup>
                </Stack>
                <Stack spacing={3} >
                    <TextField label='College' onChange={(e) => setCollege(e.target.value)} fullWidth select value={''} r >
                        <MenuItem value='Saveetha school of Engineering'>Saveetha school of Enginnering</MenuItem>
                        <MenuItem value='Saveetha Engineering College'>Saveetha Engineering College</MenuItem>
                        <MenuItem value='Saveetha dental college'>Saveetha dental college</MenuItem>
                        <MenuItem value='Saveetha medical college'>Saveetha medical college</MenuItem>
                        <MenuItem value='Others'>Others</MenuItem>
                    </TextField>
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='Password' type='password' name='Password' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='Conform_Password' type='password' name='Conform_Password' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary' >Register</Button>
                </Stack>
            </form>

        </Stack>
    )
}

export default Register