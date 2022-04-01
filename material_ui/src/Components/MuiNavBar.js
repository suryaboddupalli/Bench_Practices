import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MuiNavBar() {
    return (
        <Stack>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton>

                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>App</Typography>
                    <Stack spacing={2} direction='row'>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Register</Button>
                        <Button color='inherit'>Login</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Stack>
    )
}

export default MuiNavBar