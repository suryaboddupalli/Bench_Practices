import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails } from '../../Redux/Actions/AccountAction'
import { addSender } from '../../Redux/Actions/TransferAction';
import SenderList from './SenderList';
import './Transfer.css'


function Sender() {
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Accounts.Users)

    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])

    const selectSender = (data) => {
        dispatch(addSender(data))
        console.log(data);
    }

    return (
        <div>
            <h2 className=' heading text-center'>Send from...</h2>
            <div className='page-box'>
                <div className='row'>
                    <p className='col '>Sl.no</p>
                    <p className='col'>Account Number</p>
                    <p className='col'>Name</p>
                    <p className='col'>Balance</p>
                </div>
                <div >
                    {data.map((customer, index) => (
                        <SenderList select={() => selectSender(customer)} link={'receiver'} customer={customer} index={index} />
                    ))}

                </div>
            </div><br />
            <button id='button' onClick={() => history.push('/dashboard')}> Back</button>
        </div>
    )
}

export default Sender;