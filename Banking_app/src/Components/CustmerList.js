import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountDetails, fetchUser } from '../Redux/Actions/AccountAction'


function Customer_List() {
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
                    <th>Balance</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Address Proof</th>
                    <th>Pan Card</th>
                    <th colSpan={2} className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((customer) => (
                    <tr key={customer._id}>
                        <td>{customer.Account_Number}</td>
                        <td>{customer.Name}</td>
                        <td>{customer.Balance}</td>
                        <td>{customer.Phone}</td>
                        <td>{customer.Address}</td>
                        <td>{customer.Address_Proof}</td>
                        <td>{customer.Pan_Card}</td>
                        <td><button>Update</button></td>
                        <td><button >Delete</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Customer_List;