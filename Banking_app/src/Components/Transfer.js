import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails } from '../Redux/Actions/AccountAction'



function Transfer() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [sender, setSender] = useState('')
    const [reciver, setReciver] = useState('')
    const [amount, setAmount] = useState('')
    const data = useSelector((state) => state.Accounts.Users)

    const amountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(sender);
        console.log(reciver);
        console.log(amount);
    }

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])


    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label className='labels'>Sender</label><br />
                <select className="form-select"

                    onChange={(e) => setSender(e.target.value)}>
                    {data.map((account) => (
                        <option >{account.Account_Number}</option>
                    ))}
                </select>
            </div><br />
            <div >
                <label className='labels'>Reciver</label><br />
                <select className="form-select"

                    onChange={(e) => setReciver(e.target.value)}>
                    {data.map((account) => (
                        <option >{account.Account_Number}</option>
                    ))}
                </select>
            </div><br />
            <div >
                <label className='labels'>Amount</label><br />
                <input type='text' name='amount' onChange={amountChange} /><br />
            </div><br />
            <button>Transfer</button>
        </form>
    )
}

export default Transfer
