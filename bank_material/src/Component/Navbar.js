import { Stack, Toolbar, Button, Typography, IconButton, AppBar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import { red } from '@mui/material/colors';

const Greywhite = red[500]

console.log(Greywhite)

function Navbar() {
    const [token, setToken] = useState()

    const data = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        setToken(data)
    }, [data])
    return (
        <>
            {token ?
                <Stack>
                    <AppBar position='static' color='secondary'>
                        <Toolbar>
                            <IconButton>
                                <AccountBalanceSharpIcon style={{ color: 'white' }} />
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
                : <Stack >
                    <AppBar position='static' color='secondary' >
                        <Toolbar >
                            <IconButton >
                                <AccountBalanceSharpIcon style={{ color: 'white' }} />
                            </IconButton>
                            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Banking</Typography>
                        </Toolbar>
                    </AppBar>
                </Stack>
            }
        </>
    )
}

export default Navbar