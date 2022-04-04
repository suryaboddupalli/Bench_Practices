import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccount } from '../../Redux/Actions/AccountAction';
import { updateBalance } from '../../Redux/Actions/BankingAction';
import { addTransaction } from '../../Redux/Actions/TransactionAction'


function Withdrawal() {
    const res = useSelector((state) => state.Balance.balance)
    const history = useHistory()
    const dispatch = useDispatch()
    const [initialAmount, setInitialAmount] = useState()
    const [amount, setAmount] = useState()
    const [withdrawal, setWithdrawal] = useState()
    const [update, setUpdate] = useState()
    const { id } = useParams()
    const user = useSelector((state) => state.Accounts.User)
    const handleChange = (e) => {
        setWithdrawal([e.target.name] = e.target.value)
    }
    useEffect(() => {
        dispatch(getAccount(id))
    }, [])

    useEffect(() => {
        setAmount(parseInt(initialAmount) - parseInt(withdrawal))
    }, [withdrawal])

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

        const withdrawalData = {
            Name: user.data.Name,
            Status: 'Success',
            Sender: '',
            Receiver: '',
            TransactionType: 'withdrawal',
            Amount: withdrawal
        }
        dispatch(addTransaction(withdrawalData))
    }
    return (
        <Stack>
            <Typography color='success'>{res}</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3} direction='row' padding={4}>
                    <TextField label='WithDrawal' name='withdrawal' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={2} direction='row' paddingLeft={10}>
                    <Button variant='contained' color='secondary' >WithDrawal</Button>
                </Stack>
            </form>
        </Stack>
    )
}

export default Withdrawal;
