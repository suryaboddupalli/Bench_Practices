import React from 'react' 
import { NavLink } from 'react-router-dom'

function Admin(){
    return(
        <div>
            <nav >
            <ul>
                <li><NavLink to="/">dashboard</NavLink></li>
                <li ><NavLink to="/product/add">AddProducts</NavLink></li>
                <li ><NavLink to="/product/edit">EditProducts</NavLink></li>
                <li><NavLink to='users'>Users</NavLink></li>
                <li><NavLink to="/login">LogOut</NavLink></li>
            </ul>
        </nav>
        <div>
            Welcome to admin Page
        </div>
        </div>
    )
}

export default Admin