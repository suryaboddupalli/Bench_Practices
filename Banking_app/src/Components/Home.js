import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 fw-bold text-black  " to="/" >Banking App</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link fs-5 fw-normal text-black ms-5 " to="/login" >Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='text-center  fs-1 mt-5'>
                WELCOME TO BANKING
            </div>
        </div>
    )
}

export default Home;
