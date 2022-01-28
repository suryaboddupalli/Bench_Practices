import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Navbar() {
    return (
        <AppBar position='fixed' color='secondary'>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    Basic Navbar
                </Typography>
                <Button variant='text' color="inherit" style={{ textTransform: 'none', fontSize: '15px' }} >Login</Button>
                <Button variant='text' color="inherit" style={{ textTransform: 'none', fontSize: '15px' }}>Register</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
