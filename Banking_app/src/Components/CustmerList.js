import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails } from '../Redux/Actions/AccountAction'


function Customer_List() {
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Accounts.Users)
    const [deleteRes, setDeleteRes] = useState()

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])


    const deletUser = (id) => {
        axios.delete(`http://localhost:8000/customer/delete/${id}`)
            .then((res) => {
                setDeleteRes(res.data)
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <div>
            <table className='table'>
                {deleteRes && <div className='text-success'>{deleteRes}</div>}
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
                            <td><button className='btn btn-success' onClick={() => history.push(`/update/${customer._id}`)}>Update</button></td>
                            <td><button className='btn btn-danger' onClick={() => deletUser(customer._id)} >Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table >
            <button className=' btn btn-secondary' onClick={() => history.push('/dashboard')}> Back</button>
        </div>
    )
}

export default Customer_List;