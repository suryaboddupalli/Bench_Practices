import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails } from '../Redux/Actions/AccountAction'


function Transaction() {
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state) => (state.Accounts.Users))

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Name</th>
                    <th>Balance</th>
                    <th colSpan={2} className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((customer) => (
                    <tr key={customer._id}>
                        <td>{customer.Account_Number}</td>
                        <td>{customer.Name}</td>
                        <td>{customer.Balance}</td>
                        <td><button onClick={() => history.push(`/deposit/${customer._id}`)}>Deposit</button></td>
                        <td><button onClick={() => history.push(`/withdrawal/${customer._id}`)}>Withdrawal</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Transaction;
