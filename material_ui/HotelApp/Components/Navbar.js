import React from 'react'
import { connect } from 'react-redux'
import { Stack, Toolbar, Button, Typography, IconButton, AppBar, Tooltip } from '@mui/material'
import CottageIcon from '@mui/icons-material/Cottage';
import HotelIcon from '@mui/icons-material/Hotel';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar({ data }) {
    if (data) {
        return (
            <Stack>
                <AppBar position='static' color='success' >
                    <Toolbar>
                        <IconButton>
                            <CottageIcon />
                        </IconButton>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Hotel</Typography>
                        <Stack spacing={2} direction='row'>
                            <Button color='inherit'><Tooltip title='Home'><HomeIcon /></Tooltip></Button>
                            <Button color='inherit'><Tooltip title='About'><InfoIcon /></Tooltip></Button>
                            <Button color='inherit'><Tooltip title='Rooms'><HotelIcon /></Tooltip></Button>
                            <Button color='inherit'><Tooltip title='Profile'><AccountCircleIcon /></Tooltip></Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Stack>
        )
    } else {
        return (
            <Stack >
                <AppBar position='static' color='success' >
                    <Toolbar >
                        <IconButton >
                            <CottageIcon />
                        </IconButton>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Hotel</Typography>
                        <Stack spacing={2} direction='row'>
                            <Button color='inherit'><Tooltip title='Home'><HomeIcon /></Tooltip></Button>
                            <Button color='inherit'><Tooltip title='Register'><AppRegistrationIcon /></Tooltip></Button>
                            <Button color='inherit'><Tooltip title='Login'><LoginIcon /></Tooltip></Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Stack>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        data: state.nav
    }
}

export default connect(mapStateToProps)(Navbar)
