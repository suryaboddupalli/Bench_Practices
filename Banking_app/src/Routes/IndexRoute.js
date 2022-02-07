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
import Update_Details from '../Components/Update';
import Transfer from '../Components/Transfer';
import PrivateRoute from './PrivateRoute';

function IndexRoute() {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/dashboard' component={DashBoard} />
            <PrivateRoute path='/create_account' component={CreateAccount} />
            <PrivateRoute path='/deposit_withdrawal' exact component={Transaction} />
            <PrivateRoute path='/deposit/:id' exact component={Deposit} />
            <PrivateRoute path='/withdrawal/:id' exact component={Withdrawal} />
            <PrivateRoute path='/customers' exact component={Customer_List} />
            <PrivateRoute path='/update/:id' exact component={Update_Details} />
            <Route path='/transfer' exact component={Transfer} />

        </Switch>
    )
}

export default IndexRoute;
