import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function DashBoard() {
    const history = useHistory()
    return (
        <div>
            <button onClick={() => history.push('/create_account')}>Create New-Account</button>
            <button onClick={() => history.push('/deposit_withdrawal')}>Deposit/WithDrawal</button>
        </div>
    )
}

export default DashBoard;
