import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAccountDetails } from '../../Redux/Actions/AccountAction'
import { addReceiver } from '../../Redux/Actions/TransferAction';
import SenderList from './SenderList';
import './Transfer.css'

function Receiver() {
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Accounts.Users)
    const sender = useSelector((state) => state.Transfer.sender.Account_Number)
    console.log(sender);
    const newData = data.filter(user => user.Account_Number !== sender);
    useEffect(() => {
        dispatch(getAccountDetails())
    }, [])

    const selectReciver = (newData) => {
        dispatch(addReceiver(newData))
    }


    return (
        <div>
            <h3 className='heading text-center'> Send  To...</h3>
            <div className='page-box'>
                <div className='row'>
                    <p className='col'>Sl.no</p>
                    <p className='col'> Number</p>
                    <p className='col'>Name</p>
                    <p className='col'>Balance</p>
                </div>
                <div className='row'>
                    {newData.map((customer, index) => (
                        <SenderList select={() => selectReciver(customer)} link={'transfer'} customer={customer} index={index} />
                    ))}
                </div>
            </div><br />
            <button id='button' onClick={() => history.push('/dashboard')}> Back</button>
        </div>
    )
}

export default Receiver;