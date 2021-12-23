import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ cart }) {
    const [cartCount, setCartCount] = useState()

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
                <li><NavLink to="/">Shopping App</NavLink></li>
                <li ><NavLink to="/">Products</NavLink></li>
                <li><NavLink to="/login">LogIn</NavLink></li>
                <li ><NavLink to="/cart">cart{cartCount}</NavLink></li>
                <li><NavLink to="/login">LogOut</NavLink></li>
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