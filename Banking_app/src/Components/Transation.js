import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountDetails } from '../Redux/Actions/AccountAction'

function Transaction() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Account.Accounts)

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Name</th>
                    <th colSpan={2} className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.Account_Number}</td>
                        <td>{customer.Name}</td>
                        <td><button>Deposit</button></td>
                        <td><button>Withdrawal</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Transaction;
