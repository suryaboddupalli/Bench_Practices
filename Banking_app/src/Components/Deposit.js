import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit } from '../Redux/Actions/BankActions';

function Deposit() {
    const [amount, setAmount] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setAmount([e.target.name] = e.target.value)
    }

    const handleClick = () => {
        dispatch(deposit(+amount))
        console.log(amount);
        console.log(dispatch(deposit(+amount)));
    }
    return (
        <div>
            <input type='number' name='amount' onChange={handleChange} />
            <button onClick={handleClick}>Deposit</button>
        </div>
    )
}

export default Deposit;
