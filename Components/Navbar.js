import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function Navbar({ cart }) {
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.quantity;
        });
        setCartCount(count)
    }, [cart, cartCount])

    return (
        <nav >
            <ul>
                <li><a href="/">Navbar</a></li>
                <li><a href="/cart">cart{cartCount}</a></li>
            </ul>


        </nav>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}
export default connect(mapStateToProps)(Navbar) 