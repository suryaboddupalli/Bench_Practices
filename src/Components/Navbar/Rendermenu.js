import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Profile from '../Profile/UserProfile'

function Rendermenu({ cart ,states }) {
    const [cartCount, setCartCount] = useState()
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.quantity;
        });
        setCartCount(count)
    }, [cart, cartCount])

    if(states == null){
        return(
            <nav >
            <ul>
                <li><NavLink to="/">Shopping App</NavLink></li>
                <li ><NavLink to="/">Products</NavLink></li>
                <li ><NavLink to="/cart">cart{cartCount}</NavLink></li>
                <li><NavLink to="/login">LogIn</NavLink></li>

            </ul>
        </nav>
            
        )
    }else {
        return(
            <nav >
            <ul>
                <li><NavLink to="/">Shopping App</NavLink></li>
                <li ><NavLink to="/">Products</NavLink></li>
                <li ><NavLink to="/cart">cart-{cartCount}</NavLink></li>
                <li><NavLink><Profile/></NavLink></li>
                <li><NavLink to="/login">LogOut</NavLink></li>
            </ul>
        </nav>
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