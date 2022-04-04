import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountDetails } from '../Redux/Actions/AccountAction'
import { Button, TableBody, TableCell, TableContainer, Table, TableHead, TableRow } from '@mui/material';



function Update_Delete() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Accounts.Users)
    const [deleteRes, setDeleteRes] = useState()

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])


    const deletUser = (id) => {
        axios.delete(`http://localhost:8000/customer/delete/${id}`)
            .then((res) => {
                setDeleteRes(res.data)
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <TableContainer >
            <Table>
                {deleteRes && <div className='text-success'>{deleteRes}</div>}
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Sl.no.
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
                    {data && data.map((index, customer) => (
                        <TableRow>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{customer.Name}</TableCell>
                            <TableCell>{customer.Balance}</TableCell>
                            <TableCell><Button>Update</Button></TableCell>
                            <TableCell><Button>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Update_Delete;