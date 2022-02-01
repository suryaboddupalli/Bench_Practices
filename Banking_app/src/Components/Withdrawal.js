import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withdrawal } from '../Redux/Actions/BankActions';

function Withdrawal() {
    const [amount, setAmount] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setAmount([e.target.name] = e.target.value)
    }

    const handleClick = () => {
        dispatch(withdrawal(amount))
        console.log(amount);
        console.log(dispatch(withdrawal(amount)));
    }
    return (
        <div>
            <input type='number' name='amount' onChange={handleChange} />
            <button onClick={handleClick}>Withdrawal</button>
        </div>
    )
}

export default Withdrawal;
