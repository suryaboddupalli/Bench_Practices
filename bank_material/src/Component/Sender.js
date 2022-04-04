import { Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountDetails } from '../Redux/Actions/AccountAction'
import { addSender } from '../Redux/Actions/TransferAction';
import List from './List';


function Sender() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Accounts.Users)

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])

    const selectSender = (data) => {
        dispatch(addSender(data))
        console.log(data);
    }

    return (
        <Stack>
            <Typography variant='h2'>Send from...</Typography>
            <TableContainer >
                <Table>
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
                            <List select={() => selectSender(customer)} link={'receiver'} customer={customer} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}

export default Sender;