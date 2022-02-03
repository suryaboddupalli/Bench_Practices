import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails, fetchUser } from '../Redux/Actions/AccountAction'


function Transaction() {
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Account.Accounts)

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])

    const deposit = (id) => {
        dispatch(fetchUser(id))
        console.log(id)
        history.push('/deposit')
    }

    const withdrawal = (id) => {
        dispatch(fetchUser(id))
        console.log(id)
        history.push('/withdrawal')
    }
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
                        <td><button onClick={() => deposit(customer._id)}>Deposit</button></td>
                        <td><button onClick={() => withdrawal(customer._id)}>Withdrawal</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Transaction;
