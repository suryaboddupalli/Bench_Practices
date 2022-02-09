import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../Redux/Actions/TransactionAction';
import TransactionList from './TransactionList';
import './Transaction.css'

function TransactionHistory() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Transaction.transactions)

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [])

    return (
        <div >
            <h3 className='text-center heading'>Transaction History</h3>
            <div className='row history'>
                {data.map((details) => (
                    <TransactionList data={details} />
                ))}
            </div>
        </div>

    )
}

export default TransactionHistory;
