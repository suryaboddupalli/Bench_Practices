import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
    const [token, setToken] = useState()
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, []);

    if (token) {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold text-black  " to="/" >Chat App</NavLink>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item ">
                                <NavLink id='log' className="nav-link " to="/login" onClick={() => localStorage.clear()} >Log Out</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold text-black  " to="/" >Banking App</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink id='log' className="nav-link right-link " to="/register" >Sign up</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink id='log' className="nav-link right-link " to="/login" >Sign In</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;