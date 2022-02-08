import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../Redux/Actions/TransactionAction';
import TransactionList from './TransactionList';

function TransactionHistory() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Transaction.transactions)

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [])

    return (
        <div >
            {data.map((details, index) => {
                <TransactionList data={details} index={index} />
            })}
        </div>

    )
}

export default TransactionHistory;
