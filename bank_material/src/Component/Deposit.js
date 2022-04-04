import { Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAccount } from '../Redux/Actions/AccountAction';
import { updateBalance } from '../Redux/Actions/BankingAction';
import { addTransaction } from '../Redux/Actions/TransactionAction'
import { TextField, Button } from '@mui/material';


function Deposit() {
    const res = useSelector((state) => state.Balance.balance)
    const dispatch = useDispatch()
    const [initialAmount, setInitialAmount] = useState()
    const [amount, setAmount] = useState()
    const [deposit, setDeposit] = useState()
    const [update, setUpdate] = useState()
    const { id } = useParams()
    const user = useSelector((state) => state.Accounts.User)
    const handleChange = (e) => {
        setDeposit([e.target.name] = e.target.value)
    }
    useEffect(() => {
        dispatch(getAccount(id))
    }, [])

    useEffect(() => {
        setAmount(parseInt(initialAmount) + parseInt(deposit))

    }, [deposit])

    useEffect(() => {
        setUpdate({ 'Balance': amount }, id)
    }, [amount])

    useEffect(() => {
        if (user) {
            setInitialAmount(user.data.Balance)
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(update);
        dispatch(updateBalance(update, id))

        const depositData = {
            Name: user.data.Name,
            Status: 'Success',
            Sender: '',
            Receiver: '',
            TransactionType: 'deposit',
            Amount: deposit
        }
        dispatch(addTransaction(depositData))
    }
    return (
        <Stack>
            <Typography color='success'>{res}</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3} direction='row' padding={4}>
                    <TextField label='Deposit' name='deposit' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={2} direction='row' paddingLeft={10}>
                    <Button variant='contained' color='secondary' >Deposit</Button>
                </Stack>
            </form>
        </Stack>

    )
}

export default Deposit;
