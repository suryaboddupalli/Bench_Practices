import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails } from '../../Redux/Actions/AccountAction'
import './Deposit_withdrawal.css'

function Transaction() {
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state) => (state.Accounts.Users))

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])

    return (
        <div className='page'>
            <table className='table'>
                <thead>
                    <tr >
                        <th className='cols'>Account Number</th>
                        <th className='cols'>Name</th>
                        <th className='cols'>Balance</th>
                        <th className='cols' colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((customer) => (
                        <tr key={customer._id}>
                            <td className='cols'>{customer.Account_Number}</td>
                            <td className='cols'>{customer.Name}</td>
                            <td className='cols'>{customer.Balance}</td>
                            <td className='cols'><button className='btn btn-primary' onClick={() => history.push(`/deposit/${customer._id}`)}>Deposit</button></td>
                            <td className='cols'><button className='btn btn-primary' onClick={() => history.push(`/withdrawal/${customer._id}`)}>Withdrawal</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <button id='button' onClick={() => history.push('/dashboard')}> Back</button>
        </div>
    )
}

export default Transaction;
