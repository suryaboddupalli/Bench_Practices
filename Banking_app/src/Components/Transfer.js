import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails } from '../Redux/Actions/AccountAction'
import { updateBalances } from '../Redux/Actions/TransferAction'



function Transfer() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [sender, setSender] = useState('')
    const [receiver, setReceiver] = useState('')
    const [amount, setAmount] = useState('')
    const data = useSelector((state) => state.Accounts.Users)

    const amountChange = (e) => {
        setAmount(e.target.value)
    }

    const transfer = () => {
        const senderData = {
            ...sender,
            Balance: sender.Balance - amount
        };
        const receiverData = {
            ...receiver,
            Balance: parseInt(receiver.Balance) + parseInt(amount)
        }
        dispatch(updateBalances(senderData, receiverData))
    }

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])


    return (
        <div >
            <div >
                <label className='labels'>Sender</label><br />
                <select className="form-select"
                    onChange={(e) => setSender(e.target.value)}>
                    <option >Sender Account Number</option>
                    {data.map((account) => (
                        <option >{account.Account_Number}</option>
                    ))}
                </select>
            </div><br />
            <div >
                <label className='labels'>Reciver</label><br />
                <select className="form-select"
                    onChange={(e) => setReceiver(e.target.value)}>
                    <option>Reciver Account Number</option>
                    {data.map((account) => (
                        <option >{account.Account_Number}</option>
                    ))}
                </select>
            </div><br />
            <div >
                <label className='labels'>Amount</label><br />
                <input type='text' name='amount' onChange={amountChange} /><br />
            </div><br />
            <button onClick={transfer}>Transfer</button>
            <button onClick={() => history.push('/')}>cancel</button>
        </div>
    )
}

export default Transfer
