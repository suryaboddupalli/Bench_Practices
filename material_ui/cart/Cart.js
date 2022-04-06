import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CartItems from './CartItems'
import { removeToCart } from '../../Redux/actions/actions'
import { CardContent, CardMedia, Stack, Typography } from '@mui/material'

function Cart({ cart, removeToCart }) {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.forEach((item) => {
            items += item.quantity;
            price += item.quantity * item.Price
        })

        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])

    return (
        <Stack>

            {cart.map(items => (
                <Card>
                    <CardMedia src={itemData.Image} alt={'img'} />
                    <CardContent>
                        <Typography variant='h5'>{items.Title}</Typography>
                        <Typography variant='span'>Rs.{items.Price}</Typography>
                        <Typography variant='p'>{items.Description}</Typography>
                        <Typography variant='p'>Quantity:{items.quantity}</Typography>
                        <Button onClick={() => { removeToCart(itemData.id) }}>Remove</Button>
                    </CardContent>
                </Card>
            ))}
            <Stack>
                <Card>
                    <CardContent>
                        <Typography variant='h2'>Summary</Typography>
                        <Typography variant='span'>TotalItems : {totalItems}</Typography>
                        <Typography variant='span'>Totalprice : {totalPrice}</Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Stack >

    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeToCart: (id) => { dispatch(removeToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)