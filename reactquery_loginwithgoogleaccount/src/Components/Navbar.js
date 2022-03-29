import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav >
            <ul>
                <li ><NavLink to="/">Home</NavLink></li>
                <li ><NavLink to="/user">Users</NavLink></li>
                <li><NavLink to="/data">Userlist</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar