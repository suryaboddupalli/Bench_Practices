import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBalances } from '../Redux/Actions/TransferAction'
import { addTransaction } from '../Redux/Actions/TransactionAction'
import { Grid, Typography, Stack, TextField, Button } from '@mui/material';


function Transfer() {
    const sender = useSelector((state) => state.Transfer.sender)
    const receiver = useSelector((state) => state.Transfer.receiver)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState('')
    const [amountError, setAmountError] = useState('')
    const amountChange = (e) => {
        setAmount(e.target.value)
    }

    const transfer = () => {
        if (amount > sender.Balance) {
            setAmountError('Amount is Higher than Sender Balance')
        } else {
            const senderData = {
                ...sender,
                Balance: sender.Balance - amount
            };
            const receiverData = {
                ...receiver,
                Balance: parseInt(receiver.Balance) + parseInt(amount)
            }

            dispatch(updateBalances(senderData, receiverData))

            const transferData = {
                TransactionType: 'Transfer',
                Sender: senderData.Name,
                Receiver: receiverData.Name,
                Amount: parseInt(amount),
                Status: 'success'
            }

            dispatch(addTransaction(transferData))
            alert('Transaction Successful')
        }
    }

    return (
        <Grid container>
            <Grid item xs={6}>
                <Stack spacing={3} direction='row' padding={4}>
                    <TextField label='Sender' value={'Account Number :' + sender.Account_Number} disabled variant='outlined' />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={3} direction='row' padding={4}>
                    <TextField value={'Balance :' + sender.Balance} disabled variant='outlined' />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={3} direction='row' padding={4}>
                    <TextField label='Receiver' value={'Account Number :' + receiver.Account_Number} disabled variant='outlined' />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={3} direction='row' padding={4}>
                    <TextField value={'Balance :' + receiver.Balance} disabled variant='outlined' />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack spacing={3} direction='row' padding={4}>
                    <TextField label='Amount' name='amount' onChange={amountChange} variant='outlined' />
                </Stack>
                {amountError && <Typography>{amountError}</Typography>}
            </Grid>
            <Grid>
                <Button onClick={transfer} variant='contained'>Transfer</Button>
            </Grid>
        </Grid >
    )
}

export default Transfer
