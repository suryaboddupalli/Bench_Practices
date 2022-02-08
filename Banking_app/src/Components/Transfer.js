import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { updateBalances } from '../Redux/Actions/TransferAction'
import { addTransaction } from '../Redux/Actions/TransactionAction'

function Transfer() {
    const history = useHistory()
    const sender = useSelector((state) => state.Transfer.sender)
    const receiver = useSelector((state) => state.Transfer.receiver)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState('')
    const [amountError, setAmountError] = useState('')
    const amountChange = (e) => {
        setAmount(e.target.value)
    }

    const transfer = () => {
        if (amount > sender.Balance) {
            setAmountError('Amount is Higher than Sender Balance')
        } else {
            const senderData = {
                ...sender,
                Balance: sender.Balance - amount
            };
            const receiverData = {
                ...receiver,
                Balance: parseInt(receiver.Balance) + parseInt(amount)
            }

            dispatch(updateBalances(senderData, receiverData))

            const transferData = {
                TransactionType: 'Transfer',
                Sender: senderData.Name,
                Receiver: receiverData.Name,
                Amount: parseInt(amount),
                Status: 'success'
            }

            dispatch(addTransaction(transferData))

            history.push('/dashBoard')
            alert('Transaction Successful')
        }
    }

    return (
        <div >
            <div >
                <label className='labels'>Sender</label><br />
                <input value={'Account Number :' + sender.Name} disabled />
                <input value={'Balance :' + sender.Balance} disabled />
            </div><br />
            <div >
                <label className='labels'>Reciver</label><br />
                <input value={'Account Number :' + receiver.Name} disabled />
                <input value={'Balance :' + receiver.Balance} disabled />
            </div><br />
            {amountError && <div>{amountError}</div>}
            <div >
                <label className='labels'>Amount</label><br />
                <input type='number' name='amount' onChange={amountChange} /><br />
            </div><br />
            <button onClick={transfer}>Transfer</button>
            <button onClick={() => history.push('/')}>cancel</button>
        </div>
    )
}

export default Transfer
