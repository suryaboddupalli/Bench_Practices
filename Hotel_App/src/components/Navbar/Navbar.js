import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav >
            <ul>
                <li id='logo'><NavLink ClassName='navlink'  to="/">LOGO</NavLink></li>
                <li><NavLink ClassName='navlink' to="/">Sign In</NavLink></li>
                <li><NavLink  ClassName='navlink'to="/">Register</NavLink></li>
                <li ><NavLink ClassName='navlink' to="/">Hotels</NavLink></li>
                
            </ul>
        </nav>
    )
}

export default Navbar
