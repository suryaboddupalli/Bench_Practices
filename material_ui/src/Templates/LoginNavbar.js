import { AppBar, Button, Toolbar, Typography, IconButton } from '@mui/material';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';

function LoginNavbar() {
    return (
        <AppBar position='fixed' color='secondary'>
            <Toolbar>
                <Typography
                    variant="h6"
                >
                    Basic Navbar
                </Typography>
                <Button variant='text' color="inherit" style={{ margin: '15px', textTransform: 'none', fontSize: '15px' }} >Page1</Button>
                <Button variant='text' color="inherit" style={{ textTransform: 'none', fontSize: '15px' }} >Page2</Button>
                <Typography sx={{ flexGrow: 1 }}></Typography>
                <Button variant='text' color="inherit" style={{ textTransform: 'none', fontSize: '15px' }} >LogOut</Button>
                <Button variant='text' color="inherit" style={{ textTransform: 'none', fontSize: '15px' }}><AccountCircle /></Button>
            </Toolbar>
        </AppBar >
    )
}

export default LoginNavbar;
