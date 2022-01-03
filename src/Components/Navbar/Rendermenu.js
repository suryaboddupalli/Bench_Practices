import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Profile from '../Profile/UserProfile'

function Rendermenu({ cart ,states }) {
    console.log(states)
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
    }else if(states == payload.admin){
        return(
            <nav >
            <ul>
                <li><NavLink to="/">dashboard</NavLink></li>
                <li ><NavLink to="/product/add">AddProducts</NavLink></li>
                <li ><NavLink to="/product/edit">EditProducts</NavLink></li>
                <li><NavLink to='users'>Users</NavLink></li>
                <li><NavLink to="/login">LogOut</NavLink></li>
            </ul>
        </nav>
        )
    }else{
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
    return {
        cart: state.shop.cart,
        states: state.navbar
    }
}
export default connect(mapStateToProps)(Rendermenu) 