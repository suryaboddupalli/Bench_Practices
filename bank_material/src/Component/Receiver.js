import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAccountDetails } from '../Redux/Actions/AccountAction'
import { addReceiver } from '../Redux/Actions/TransferAction';

function Receiver() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Accounts.Users)
    const sender = useSelector((state) => state.Transfer.sender.Account_Number)
    const newData = data.filter(user => user.Account_Number !== sender);
    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])

    const selectReciver = (newData) => {
        dispatch(addReceiver(newData))
    }


    return (
        <Stack>
            <Typography variant='h2'>Send To...</Typography>
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
                        {newData && newData.map((index, customer) => (
                            <List select={() => selectReciver(customer)} link={'transfer'} customer={customer} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>

    )
}

export default Receiver;