import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ data }) {
    if (data) {
        return (
            <nav >
                <ul>
                    <li id='logo'><NavLink ClassName='navlink' to="/">LOGO</NavLink></li>
                    <li><NavLink ClassName='navlink' to="/">LogOut</NavLink></li>
                    <li ><NavLink ClassName='navlink' to="/">Hotels</NavLink></li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav >
                <ul>
                    <li id='logo'><NavLink ClassName='navlink' to="/">LOGO</NavLink></li>
                    <li><NavLink ClassName='navlink' to="/">SignIn</NavLink></li>
                    <li><NavLink ClassName='navlink' to="/">Register</NavLink></li>
                    <li ><NavLink ClassName='navlink' to="/">Hotels</NavLink></li>

                </ul>
            </nav>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        data: state.nav
    }
}

export default connect(mapStateToProps)(Navbar)
