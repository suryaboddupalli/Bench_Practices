import React from 'react';
import { NavLink } from 'react-router-dom';

function SenderList({ customer, index, select, link }) {
    return (
        <NavLink to={link} onClick={select} className='row'>
            <p className='col-4'>{index + 1}</p>
            <p className='col-4'>{customer.Account_Number}</p>
            <p className='col-4'>{customer.Name}</p>
        </NavLink>
    )
}

export default SenderList;
