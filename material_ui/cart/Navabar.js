import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Stack, AppBar, Toolbar, Typography, Button } from '@mui/material';

function Rendermenu({ cart, states }) {
    const [cartCount, setCartCount] = useState()
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.quantity;
        });
        setCartCount(count)
    }, [cart, cartCount])

    if (states) {
        return (
            <Stack>
                <AppBar position='static' color='success' >
                    <Toolbar>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Shopping</Typography>
                        <Stack spacing={2} direction='row'>
                            <Button color='inherit'>Products</Button>
                            <Button color='inherit'><ShoppingCartIcon />{cartCount}</Button>
                            <Button color='inherit'>Log Out</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Stack >
        )
    } else {
        return (
            <Stack >
                <AppBar position='static' color='success' >
                    <Toolbar >
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Shopping</Typography>
                        <Stack spacing={2} direction='row'>
                            <Button color='inherit'>Products</Button>
                            <Button color='inherit'><ShoppingCartIcon />{cartCount}</Button>
                            <Button color='inherit'>Login</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Stack>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.navbar)
    return {
        cart: state.shop.cart,
        states: state.navbar
    }
}
export default connect(mapStateToProps)(Rendermenu) 
