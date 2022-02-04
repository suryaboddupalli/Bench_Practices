import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccount } from '../Redux/Actions/AccountAction';
import { updateBalance } from '../Redux/Actions/BankingAction';


function Deposit() {
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
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='deposit' onChange={handleChange} />
                <button >Deposit</button>
            </form>
            <button onClick={() => history.push('/deposit_withdrawal')}>back</button>
        </div>
    )
}

export default Deposit;
