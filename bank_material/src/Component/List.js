import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function List({ customer, index, select, link }) {
    return (
        <NavLink to={link} onClick={select} className='row'>
            <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{customer.Account_Number}</TableCell>
                <TableCell>{customer.Name}</TableCell>
                <TableCell>{customer.Balance}</TableCell>
            </TableRow>
        </NavLink>
    )
}

export default List;
