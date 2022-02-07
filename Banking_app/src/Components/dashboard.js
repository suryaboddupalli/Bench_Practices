import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function DashBoard() {
    const history = useHistory()
    return (
        <div className='mt-5 '>
            <div className='row mb-3 text-center'>
                <div className='col-6'>
                    <button className='p-4 ' onClick={() => history.push('/create_account')}>Create New-Account</button>
                </div>
                <div className='col-6'>
                    <button className='p-4' onClick={() => history.push('/deposit_withdrawal')}>Deposit/WithDrawal</button>
                </div>
            </div>
            <div className='row mt-5 text-center'>
                <div className='col-6'>
                    <button className='p-4' onClick={() => history.push('/customers')}>Update/Delete Account</button>
                </div>
                <div className='col-6'>
                    <button className='px-5 py-4' onClick={() => history.push('/transfer')}>Transfer</button>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
