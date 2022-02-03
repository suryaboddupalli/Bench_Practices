import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBal, withdrawal } from '../Redux/Actions/BankingAction';

function Withdrawal() {
    const [amount, setAmount] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setAmount([e.target.name] = e.target.value)
    }

    const handleClick = () => {
        dispatch(withdrawal(amount))
        console.log(amount);
    }
    return (
        <div>
            <input type='number' name='amount' onChange={handleChange} />
            <button onClick={handleClick}>Withdrawal</button>
        </div>
    )
}

export default Withdrawal;
