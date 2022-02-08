import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const token = localStorage.getItem('token')
    console.log(token);
    if (token) {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold text-black  " to="/" >Banking App</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link fs-5 fw-normal text-black ms-5 " to="/login" onClick={() => localStorage.clear()} >Log Out</NavLink>
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
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold text-black  " to="/" >Banking App</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link fs-5 fw-normal text-black ms-5 " to="/login" >Log In</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
