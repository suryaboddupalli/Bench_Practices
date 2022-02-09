import React from 'react';
import { NavLink } from 'react-router-dom';

function SenderList({ customer, index, select, link }) {
    return (
        <NavLink to={link} onClick={select} className='row'>
            <p className='col'>{index + 1}</p>
            <p className='col'>{customer.Account_Number}</p>
            <p className='col'>{customer.Name}</p>
            <p className='col'>{customer.Balance}</p>
        </NavLink>
    )
}

export default SenderList;
