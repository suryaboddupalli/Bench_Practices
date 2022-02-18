import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import DashBoard from "../Components/Dashboard/Dashboard";
import CreateAccount from "../Components/Create_Account/Create_Account";
import CustomerList from "../Components/DepositAndWithdrawal/CustomerList";
import Deposit from "../Components/DepositAndWithdrawal/Deposit";
import Withdrawal from "../Components/DepositAndWithdrawal/Withdrawal";
import Practice from "../Components/DepositAndWithdrawal/Practice";
import Customers from "../Components/UpdateAndDelete/Customers";
import Update from "../Components/UpdateAndDelete/Update";

function IndexRoute() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/create_account" component={CreateAccount} />
      <Route path="/deposit-withdrawal" component={CustomerList} />
      <Route path="/deposit/:id" component={Deposit} />
      <Route path="/withdrawal/:id" component={Withdrawal} />
      <Route path="/practice" component={Practice} />
      <Route path="/customers" component={Customers} />
      <Route path="/customer/update/:id" component={Update} />
    </Switch>
  );
}

export default IndexRoute;
