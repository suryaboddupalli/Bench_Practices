import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Components/Home';
import Login from '../Components/Login'
import DashBoard from '../Components/DashBoard';
import CreateAccount from '../Components/CreateAccount';
import Transaction from '../Components/Transation';
import Deposit from '../Components/Deposit'
import Withdrawal from '../Components/Withdrawal';
import Customer_List from '../Components/CustmerList';

function IndexRoute() {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={DashBoard} />
            <Route path='/create_account' component={CreateAccount} />
            <Route path='/deposit_withdrawal' exact component={Transaction} />
            <Route path='/deposit' exact component={Deposit} />
            <Route path='/withdrawal' exact component={Withdrawal} />
            <Route path='/customers' exact component={Customer_List} />

        </Switch>
    )
}

export default IndexRoute;
