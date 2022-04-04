import { Button, TableBody, TableCell, TableContainer, Table, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountDetails } from '../Redux/Actions/AccountAction'

function Users() {
    const dispatch = useDispatch()
    const data = useSelector((state) => (state.Accounts.Users))

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])

    return (
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Account Number
                        </TableCell>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Balance
                        </TableCell>
                        <TableCell colSpan={2} sx={{ textAlign: 'center' }}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((customer) => (
                        <TableRow>
                            <TableCell>{customer.Account_Number}</TableCell>
                            <TableCell>{customer.Name}</TableCell>
                            <TableCell>{customer.Balance}</TableCell>
                            <TableCell><Button>Deposit</Button></TableCell>
                            <TableCell><Button>WithDrawal</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Users;
