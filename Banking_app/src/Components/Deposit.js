import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function Trail() {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState({
        Balance: ''
    })

    const [deposit, setDeposit] = useState()

    const handleChange = (e) => {
        setAmount([e.target.name] = e.target.value)
        setDeposit(amount + deposit)
    }




    const handleSubmit = (e) => {
        e.preventDefault()



    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='number' name='Balance' onChange={handleChange} />
            <button >Deposit</button>
        </form>
    )
}

export default Trail;
