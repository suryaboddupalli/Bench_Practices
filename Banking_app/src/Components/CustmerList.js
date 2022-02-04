import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails } from '../Redux/Actions/AccountAction'


function Customer_List() {
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Accounts.Users)

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])


    const deletUser = (id) => {
        axios.delete(`http://localhost:8000/customer/delete/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Sl.no</th>
                    <th>Account Number</th>
                    <th>Name</th>
                    <th colSpan={2} className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((customer, index) => (
                    <tr key={customer._id}>
                        <td>{index + 1}</td>
                        <td>{customer.Account_Number}</td>
                        <td>{customer.Name}</td>
                        <td><button onClick={() => history.push(`/update/${customer._id}`)}>Update</button></td>
                        <td><button onClick={() => deletUser(customer._id)} >Delete</button></td>
                    </tr>
                ))}

            </tbody>
        </table >
    )
}

export default Customer_List;