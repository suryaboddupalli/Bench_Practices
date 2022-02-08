import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccount } from '../Redux/Actions/AccountAction';
import { updateBalance } from '../Redux/Actions/BankingAction';
import { addTransaction } from '../Redux/Actions/TransactionAction'


function Deposit() {
    const res = useSelector((state) => state.Balance.balance)
    const history = useHistory()
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
        <div className='mt-5 text-center'>
            <div className='text-success'>{res}</div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='deposit' onChange={handleChange} />
                <button className='btn btn-primary'>Deposit</button>
            </form><br />
            <button className='btn-secondary' onClick={() => history.push('/deposit_withdrawal')}>back</button>
        </div>
    )
}

export default Deposit;
