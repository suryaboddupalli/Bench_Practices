import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../Redux/Actions/TransactionAction';
import { Card, CardContent, Typography, Box } from '@mui/material';

function TransactionHistory() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Transaction.transactions)

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [])

    return (
        <div >
            <Typography variant='h4'>Transaction History</Typography>
            <Box fullWidth>
                <Card>
                    {data.map((data) => (
                        <CardContent>
                            <Typography variant='h6'>{data.TransactionType}</Typography>
                            <Typography variant='body1'>{data.Name} </Typography>
                            <Typography variant='body1'>{data.Sender}&nbsp;&nbsp;&nbsp; &nbsp;{data.Receiver}</Typography>
                            <Typography variant='p'>{data.Amount}</Typography>
                            <Typography variant='p'>{data.Status}</Typography>
                            <Typography variant='p'>{data.createdAt}</Typography>
                        </CardContent>
                    ))}
                </Card>
            </Box>
        </div>

    )
}

export default TransactionHistory;
