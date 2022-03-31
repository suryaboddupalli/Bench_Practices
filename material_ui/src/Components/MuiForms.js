import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

function MuiForms() {
    const [data, setData] = useState()
    return (
        <Stack>
            <Stack spacing={3} direction='row'>
                <TextField label='name' variant='outlined' />
                <TextField label='name' variant='filled' />
                <TextField label='Password' type='password' variant='standard' onChange={(e) => setData(e.target.value)} error={!data} helperText={!data ? 'required' : 'do not share the password'} />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Password' type='text' color='secondary' size='small' variant='outlined' disabled />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='name' color='secondary' size='large' variant='filled' required />
                <TextField label='name' color='secondary' size='medium' helperText='required to fill' variant='standard' required />
                <TextField label='read only' variant='standard' InputProps={{ readOnly: true }} />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Price' InputProps={{ startAdornment: <InputAdornment position='start'>Rs</InputAdornment> }} />
                <TextField label='Weigth' InputProps={{ endAdornment: <InputAdornment position='end'>Kg</InputAdornment> }} />

            </Stack>
        </Stack>

    )
}

export default MuiForms